import Link from "next/link";
import type { WorkspaceModuleSection } from "@/lib/workspace/module-pages";

type WorkspaceModuleShellProps = {
  companyName: string;
  userName: string;
  roleLabel: string;
  moduleName: string;
  moduleDescription: string;
  sections: WorkspaceModuleSection[];
  deniedMessage?: string | null;
};

export function WorkspaceModuleShell({
  companyName,
  userName,
  roleLabel,
  moduleName,
  moduleDescription,
  sections,
  deniedMessage,
}: WorkspaceModuleShellProps) {
  return (
    <main className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <section className="rounded-[2rem] bg-zinc-950 p-8 text-white shadow-2xl shadow-zinc-950/10">
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-start">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.28em] text-[#f2d48a]">Güvenli çalışma alanı</p>
            <h1 className="mt-4 text-4xl font-black text-white">{moduleName}</h1>
            <p className="mt-4 max-w-3xl leading-8 text-zinc-300">{moduleDescription}</p>
            <p className="mt-5 max-w-3xl text-sm leading-7 text-zinc-400">
              Bu alan şirket üyeliği ve rol yetkileriyle korunur. Yetki kapsamı dışındaki içerikler görüntülenmez.
            </p>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/10 p-5 text-left lg:min-w-80">
            <dl className="grid gap-4 text-sm">
              <div>
                <dt className="text-xs font-bold uppercase tracking-[0.22em] text-zinc-400">Şirket</dt>
                <dd className="mt-1 text-lg font-bold text-white">{companyName}</dd>
              </div>
              <div>
                <dt className="text-xs font-bold uppercase tracking-[0.22em] text-zinc-400">Kullanıcı</dt>
                <dd className="mt-1 text-lg font-bold text-white">{userName}</dd>
              </div>
              <div>
                <dt className="text-xs font-bold uppercase tracking-[0.22em] text-zinc-400">Rol</dt>
                <dd className="mt-1 text-lg font-bold text-white">{roleLabel}</dd>
              </div>
            </dl>
            <div className="mt-5 flex flex-wrap gap-3">
              <Link className="rounded-full border border-white/20 px-4 py-2 text-sm font-bold text-white transition hover:bg-white/10" href="/portal">
                Portala Dön
              </Link>
              <a className="rounded-full border border-[#f2d48a] bg-[#f2d48a] px-4 py-2 text-sm font-extrabold text-zinc-950 transition hover:bg-[#e4bf68]" href="/api/auth/logout">
                Çıkış Yap
              </a>
            </div>
          </div>
        </div>
      </section>

      {deniedMessage ? (
        <section className="mt-10 rounded-[2rem] border border-zinc-200 bg-white p-8 shadow-sm">
          <h2 className="text-2xl font-black text-zinc-950">{deniedMessage}</h2>
          <p className="mt-4 max-w-2xl leading-8 text-zinc-600">
            Bu modül yalnızca ilgili şirket ve rol yetkisi tanımlı kullanıcılar tarafından görüntülenebilir.
          </p>
        </section>
      ) : (
        <section className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {sections.map((section) => (
            <article className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm" key={section.title}>
              <h2 className="text-xl font-bold text-zinc-950">{section.title}</h2>
              <p className="mt-3 text-sm leading-6 text-zinc-600">{section.description}</p>
              <div className="mt-6 rounded-2xl border border-dashed border-zinc-300 bg-zinc-50 p-4 text-sm font-semibold text-zinc-500">
                {section.emptyText ?? "Henüz kayıt bulunmuyor."}
              </div>
            </article>
          ))}
        </section>
      )}
    </main>
  );
}
