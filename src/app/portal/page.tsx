import type { Metadata } from "next";
import Link from "next/link";
import { canAccessModule, isExternalModule } from "@/lib/workspace/permissions";
import { demoCompany, demoDocuments, demoMembership, demoProfile, demoRoleLabel, demoTasks, demoUpcomingReports, workspaceModules } from "@/lib/workspace/demo-data";

export const metadata: Metadata = { title: "FinCity Çalışma Alanı" };

export default function PortalPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <section className="rounded-[2rem] bg-zinc-950 p-8 text-white shadow-2xl shadow-zinc-950/10">
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-start">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.28em] text-[#f2d48a]">FinCity Çalışma Alanı</p>
            <h1 className="mt-4 text-4xl font-black text-white">{demoCompany.name}</h1>
            <p className="mt-3 max-w-3xl leading-8 text-zinc-300">Bu alan demo verilerle hazırlanmıştır; gerçek müşteri finansal verisi içermez.</p>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/10 p-5 text-left lg:min-w-72">
            <p className="text-xs uppercase tracking-[0.22em] text-zinc-400">Kullanıcı</p>
            <p className="mt-2 text-xl font-bold text-white">{demoProfile.fullName}</p>
            <p className="mt-1 text-sm text-zinc-300">{demoRoleLabel}</p>
          </div>
        </div>
      </section>

      <section className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {workspaceModules.map((module) => {
          const hasAccess = canAccessModule(demoMembership.role, module.key);
          const external = isExternalModule(module);
          const externalUrl = external ? module.externalUrl : undefined;

          return (
            <article className={`rounded-3xl border p-6 shadow-sm ${hasAccess ? "border-zinc-200 bg-white" : "border-zinc-200 bg-zinc-100 opacity-70"}`} key={module.key}>
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h2 className="text-xl font-bold text-zinc-950">{module.name}</h2>
                  <p className="mt-3 text-sm leading-6 text-zinc-600">{module.description}</p>
                </div>
                <span className={`rounded-full px-3 py-1 text-xs font-bold ${hasAccess ? "bg-emerald-50 text-emerald-700" : "bg-zinc-200 text-zinc-500"}`}>
                  {hasAccess ? "Erişim var" : "Kilitli"}
                </span>
              </div>
              <div className="mt-6">
                {external ? (
                  externalUrl ? (
                    <a className="text-sm font-bold text-zinc-950 underline decoration-[#b88a2a] decoration-2 underline-offset-4" href={externalUrl} target="_blank" rel="noreferrer">
                      Mali Müşavirlik Sistemine Git
                    </a>
                  ) : (
                    <p className="text-sm font-semibold text-zinc-500">Bağlantı yakında tanımlanacak</p>
                  )
                ) : module.href ? (
                  <Link className="text-sm font-bold text-zinc-950 underline decoration-[#b88a2a] decoration-2 underline-offset-4" href={module.href}>
                    Modülü Aç
                  </Link>
                ) : (
                  <p className="text-sm font-semibold text-zinc-500">Demo modül görünümü</p>
                )}
              </div>
            </article>
          );
        })}
      </section>

      <section className="mt-10 grid gap-5 lg:grid-cols-3">
        {[
          ["Açık görevler", demoTasks],
          ["Son dokümanlar", demoDocuments],
          ["Yaklaşan rapor tarihleri", demoUpcomingReports],
        ].map(([title, items]) => (
          <article className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm" key={title as string}>
            <h2 className="text-lg font-bold text-zinc-950">{title as string}</h2>
            <ul className="mt-5 grid gap-3 text-sm text-zinc-600">
              {(items as string[]).map((item) => <li className="rounded-2xl bg-zinc-50 p-3" key={item}>{item}</li>)}
            </ul>
          </article>
        ))}
      </section>
    </main>
  );
}
