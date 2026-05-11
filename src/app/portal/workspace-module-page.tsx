import type { Metadata } from "next";
import Link from "next/link";
import { WorkspaceModuleShell } from "@/components/workspace-module-shell";
import { getWorkspaceContext } from "@/lib/workspace/server-data";
import { getWorkspaceModulePage, type WorkspaceModuleSlug } from "@/lib/workspace/module-pages";

export function createModuleMetadata(slug: WorkspaceModuleSlug): Metadata {
  const config = getWorkspaceModulePage(slug);
  return { title: config ? `${config.title} | FinCity Çalışma Alanı` : "FinCity Çalışma Alanı" };
}

export async function WorkspaceModulePage({ slug }: { slug: WorkspaceModuleSlug }) {
  const config = getWorkspaceModulePage(slug);
  const context = await getWorkspaceContext();

  if (!config) {
    return (
      <main className="mx-auto max-w-4xl px-4 py-20 sm:px-6 lg:px-8">
        <section className="rounded-[2rem] border border-zinc-200 bg-white p-8 shadow-sm">
          <h1 className="text-3xl font-black text-zinc-950">Modül bulunamadı</h1>
          <p className="mt-4 leading-8 text-zinc-600">İstenen çalışma alanı modülü tanımlı değil.</p>
          <Link className="mt-6 inline-flex rounded-full bg-zinc-950 px-5 py-3 text-sm font-bold text-white" href="/portal">
            Portala dön
          </Link>
        </section>
      </main>
    );
  }

  if ("error" in context) {
    return (
      <main className="mx-auto max-w-4xl px-4 py-20 sm:px-6 lg:px-8">
        <section className="rounded-[2rem] border border-zinc-200 bg-white p-8 shadow-sm">
          <h1 className="text-3xl font-black text-zinc-950">Erişim bekleniyor</h1>
          <p className="mt-4 leading-8 text-zinc-600">{context.error}</p>
          <Link className="mt-6 inline-flex rounded-full bg-zinc-950 px-5 py-3 text-sm font-bold text-white" href="/login">
            Giriş sayfasına dön
          </Link>
        </section>
      </main>
    );
  }

  const workspaceModule = context.modules.find((module) => module.id === config.moduleId);
  const canViewModule = Boolean(workspaceModule?.canView && workspaceModule.isEnabled);

  return (
    <WorkspaceModuleShell
      companyName={context.company.name}
      userName={context.profile.full_name}
      roleLabel={context.roleLabel}
      moduleName={workspaceModule?.name ?? config.title}
      moduleDescription={workspaceModule?.description ?? config.description}
      sections={config.sections}
      deniedMessage={canViewModule ? null : "Bu modülü görüntüleme yetkiniz bulunmuyor."}
    />
  );
}
