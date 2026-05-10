import type { ModuleKey, Permission, Role, RolePermission, WorkspaceModule } from "@/lib/workspace/types";

export const roleLabels: Record<Role, string> = {
  fincity_super_admin: "FinCity Süper Admin",
  fincity_consultant: "FinCity Danışman",
  client_owner: "Şirket Yetkilisi",
  client_admin: "Şirket Admin",
  finance_editor: "Finans Editörü",
  finance_viewer: "Finans Görüntüleyici",
  accountant: "Mali Müşavir",
  auditor: "Denetçi / Salt Okuma",
};

export const moduleLabels: Record<ModuleKey, string> = {
  dashboard: "Dashboard",
  reporting: "Raporlama",
  budget_performance: "Bütçe & Performans",
  cashflow: "Nakit Akışı",
  teknokent_arge: "Teknokent / Ar-Ge",
  documents: "Belgeler",
  financial_operations: "Mali Süreçler",
  accounting_advisory: "Mali Müşavirlik",
  user_management: "Kullanıcı ve Yetkiler",
};

const allModules = Object.keys(moduleLabels) as ModuleKey[];
const manageAll: Permission[] = ["view", "create", "edit", "delete", "manage"];
const editSet: Permission[] = ["view", "create", "edit"];
const viewOnly: Permission[] = ["view"];

function build(role: Role, modules: ModuleKey[], permissions: Permission[]): RolePermission[] {
  return modules.map((module) => ({ role, module, permissions }));
}

export const defaultRolePermissions: RolePermission[] = [
  ...build("fincity_super_admin", allModules, manageAll),
  ...build("fincity_consultant", allModules.filter((module) => module !== "user_management"), editSet),
  ...build("client_owner", allModules, manageAll),
  ...build("client_admin", allModules, ["view", "create", "edit", "manage"]),
  ...build("finance_editor", ["dashboard", "reporting", "budget_performance", "cashflow", "financial_operations"], editSet),
  ...build("finance_viewer", ["dashboard", "reporting", "budget_performance", "cashflow"], viewOnly),
  ...build("accountant", ["dashboard", "financial_operations", "teknokent_arge", "documents", "accounting_advisory"], editSet),
  ...build("auditor", allModules.filter((module) => module !== "user_management"), viewOnly),
];

export function canPerformAction(role: Role, module: ModuleKey, permission: Permission) {
  return Boolean(defaultRolePermissions.find((item) => item.role === role && item.module === module)?.permissions.includes(permission));
}

export function canAccessModule(role: Role, module: ModuleKey) {
  return canPerformAction(role, module, "view");
}

export function isExternalModule(module: WorkspaceModule) {
  return module.kind === "external";
}
