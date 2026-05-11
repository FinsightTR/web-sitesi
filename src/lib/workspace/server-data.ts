import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import { roleLabels } from "@/lib/workspace/permissions";
import type { ModuleKey, Role } from "@/lib/workspace/types";

type DbModule = {
  id: ModuleKey;
  name: string;
  description: string | null;
  kind: "internal" | "external";
  external_url: string | null;
};

type CompanyModuleRow = {
  is_enabled: boolean;
  external_url: string | null;
  modules: DbModule | DbModule[] | null;
};

type PermissionRow = {
  role: Role;
  module_id: ModuleKey;
  can_view: boolean;
  can_create: boolean;
  can_edit: boolean;
  can_delete: boolean;
  can_manage: boolean;
};

export type WorkspaceContext = {
  profile: { id: string; full_name: string; email: string };
  company: { id: string; name: string };
  membership: { role: Role };
  roleLabel: string;
  modules: Array<{
    id: ModuleKey;
    name: string;
    description: string;
    kind: "internal" | "external";
    isEnabled: boolean;
    externalUrl?: string;
    canView: boolean;
  }>;
  permissions: PermissionRow[];
  tasks: Array<{ id: string; title: string; status: string; due_date: string | null }>;
  documents: Array<{ id: string; title: string; created_at: string }>;
};

function firstOrNull<T>(value: T | T[] | null | undefined): T | null {
  if (Array.isArray(value)) {
    return value[0] ?? null;
  }

  return value ?? null;
}

export async function getWorkspaceContext(): Promise<WorkspaceContext | { error: string }> {
  const supabase = await createClient();

  if (!supabase) {
    return { error: "Çalışma alanı girişi şu anda yapılandırılmadı." };
  }

  const { data: { user } } = await supabase.auth.getUser();

  if (!user) {
    redirect("/login");
  }

  const { data: profile } = await supabase
    .from("profiles")
    .select("id, full_name, email")
    .eq("id", user.id)
    .single();

  const { data: membership } = await supabase
    .from("company_memberships")
    .select("company_id, role, companies(id, name)")
    .eq("user_id", user.id)
    .eq("status", "active")
    .limit(1)
    .single();

  if (!profile || !membership || !membership.companies) {
    return { error: "Çalışma alanı yetkiniz henüz tanımlanmamış." };
  }

  const role = membership.role as Role;
  const company = firstOrNull(membership.companies);

  if (!company) {
    return { error: "Çalışma alanı yetkiniz henüz tanımlanmamış." };
  }

  const [{ data: companyModules }, { data: rolePermissions }, { data: tasks }, { data: documents }] = await Promise.all([
    supabase
      .from("company_modules")
      .select("is_enabled, external_url, modules(id, name, description, kind, external_url)")
      .eq("company_id", membership.company_id),
    supabase
      .from("role_permissions")
      .select("role, module_id, can_view, can_create, can_edit, can_delete, can_manage")
      .eq("role", role),
    supabase
      .from("tasks")
      .select("id, title, status, due_date")
      .eq("company_id", membership.company_id)
      .limit(6),
    supabase
      .from("documents")
      .select("id, title, created_at")
      .eq("company_id", membership.company_id)
      .order("created_at", { ascending: false })
      .limit(6),
  ]);

  const permissions = (rolePermissions ?? []) as PermissionRow[];
  const rows = (companyModules ?? []) as unknown as CompanyModuleRow[];

  return {
    profile,
    company,
    membership: { role },
    roleLabel: roleLabels[role] ?? role,
    permissions,
    modules: rows.map((row) => {
      const workspaceModule = firstOrNull(row.modules);
      const permission = workspaceModule ? permissions.find((item) => item.module_id === workspaceModule.id) : undefined;
      const externalUrl = row.external_url ?? workspaceModule?.external_url ?? process.env.NEXT_PUBLIC_MALI_MUSAVIRLIK_URL ?? undefined;

      return {
        id: workspaceModule?.id ?? "dashboard",
        name: workspaceModule?.name ?? "Modül",
        description: workspaceModule?.description ?? "Çalışma alanı modülü.",
        kind: workspaceModule?.kind ?? "internal",
        isEnabled: row.is_enabled,
        externalUrl,
        canView: Boolean(permission?.can_view),
      };
    }),
    tasks: tasks ?? [],
    documents: documents ?? [],
  };
}
