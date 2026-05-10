import type { Metadata } from "next";
import Link from "next/link";
import { getWorkspaceContext } from "@/lib/workspace/server-data";

export const metadata: Metadata = { title: "FinCity Çalışma Alanı" };

export default async function PortalPage() {
  const context = await getWorkspaceContext();

  if ("error" in context) {
    return (
      <main className="mx-auto max-w-4xl px-4 py-20 sm:px-6 lg:px-8">
        <section className="rounded-[2rem] border border-zinc-200 bg-white p-8 shadow-sm">
          <p className="text-sm font-bold uppercase tracking-[0.28em] text-[#8a6418]">Çalışma Alanı</p>
          <h1 className="mt-4 text-3xl font-black text-zinc-950">Erişim bekleniyor</h1>
          <p className="mt-4 leading-8 text-zinc-600">{context.error}</p>
          <Link className="mt-6 inline-flex rounded-full bg-zinc-950 px-5 py-3 text-sm font-bold text-white" href="/login">Giriş sayfasına dön</Link>
        </section>
      </main>
    );
  }

  const visibleModules = context.modules.filter((module) => module.canView);

  return (
    <main className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <section className="rounded-[2rem] bg-zinc-950 p-8 text-white shadow-2xl shadow-zinc-950/10">
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-start">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.28em] text-[#f2d48a]">FinCity Çalışma Alanı</p>
            <h1 className="mt-4 text-4xl font-black text-white">{context.company.name}</h1>
            <p className="mt-3 max-w-3xl leading-8 text-zinc-300">Bu alan Supabase Auth ile açılmıştır. Finansal veri girişleri sonraki fazlarda modül bazlı etkinleştirilecektir.</p>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/10 p-5 text-left lg:min-w-72">
            <p className="text-xs uppercase tracking-[0.22em] text-zinc-400">Kullanıcı</p>
            <p className="mt-2 text-xl font-bold text-white">{context.profile.full_name}</p>
            <p className="mt-1 text-sm text-zinc-300">{context.roleLabel}</p>
            <a className="mt-4 inline-flex rounded-full border border-white/20 bg-white px-4 py-2 text-xs font-bold text-zinc-950 shadow-sm transition hover:bg-zinc-100" href="/api/auth/logout">
              Çıkış Yap
            </a>
          </div>
        </div>
      </section>

      <section className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {visibleModules.map((module) => (
          <article className={`rounded-3xl border p-6 shadow-sm ${module.isEnabled ? "border-zinc-200 bg-white" : "border-zinc-200 bg-zinc-100 opacity-70"}`} key={module.id}>
            <div className="flex items-start justify-between gap-4">
              <div>
                <h2 className="text-xl font-bold text-zinc-950">{module.name}</h2>
                <p className="mt-3 text-sm leading-6 text-zinc-600">{module.description}</p>
              </div>
              <span className={`rounded-full px-3 py-1 text-xs font-bold ${module.isEnabled ? "bg-emerald-50 text-emerald-700" : "bg-zinc-200 text-zinc-500"}`}>
                {module.isEnabled ? "Aktif" : "Kapalı"}
              </span>
            </div>
            <div className="mt-6">
              {module.kind === "external" ? (
                module.externalUrl ? (
                  <a className="text-sm font-bold text-zinc-950 underline decoration-[#b88a2a] decoration-2 underline-offset-4" href={module.externalUrl} target="_blank" rel="noreferrer">
                    Mali Müşavirlik Sistemine Git
                  </a>
                ) : (
                  <p className="text-sm font-semibold text-zinc-500">Bağlantı yakında tanımlanacak</p>
                )
              ) : module.id === "user_management" ? (
                <Link className="text-sm font-bold text-zinc-950 underline decoration-[#b88a2a] decoration-2 underline-offset-4" href="/portal/yetkiler">
                  Yetki Matrisi
                </Link>
              ) : (
                <p className="text-sm font-semibold text-zinc-500">Modül sayfası sonraki fazda etkinleştirilecek</p>
              )}
            </div>
          </article>
        ))}
      </section>

      <section className="mt-10 grid gap-5 lg:grid-cols-2">
        <article className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm">
          <h2 className="text-lg font-bold text-zinc-950">Açık görevler</h2>
          {context.tasks.length ? (
            <ul className="mt-5 grid gap-3 text-sm text-zinc-600">
              {context.tasks.map((task) => <li className="rounded-2xl bg-zinc-50 p-3" key={task.id}>{task.title}</li>)}
            </ul>
          ) : <p className="mt-5 text-sm text-zinc-500">Henüz kayıt bulunmuyor.</p>}
        </article>
        <article className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm">
          <h2 className="text-lg font-bold text-zinc-950">Son dokümanlar</h2>
          {context.documents.length ? (
            <ul className="mt-5 grid gap-3 text-sm text-zinc-600">
              {context.documents.map((document) => <li className="rounded-2xl bg-zinc-50 p-3" key={document.id}>{document.title}</li>)}
            </ul>
          ) : <p className="mt-5 text-sm text-zinc-500">Henüz kayıt bulunmuyor.</p>}
        </article>
      </section>
    </main>
  );
}
