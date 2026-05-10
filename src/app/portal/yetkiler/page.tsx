import type { Metadata } from "next";
import { defaultRolePermissions, moduleLabels } from "@/lib/workspace/permissions";
import { demoCompany, demoMembership, demoProfile, demoRoleLabel, workspaceModules } from "@/lib/workspace/demo-data";
import type { Permission } from "@/lib/workspace/types";

export const metadata: Metadata = { title: "Kullanıcı ve Yetkiler" };

const actions: Permission[] = ["view", "create", "edit", "delete", "manage"];

export default function PermissionsPage() {
  const permissions = defaultRolePermissions.filter((item) => item.role === demoMembership.role);

  return (
    <main className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <section className="rounded-[2rem] bg-zinc-950 p-8 text-white shadow-2xl shadow-zinc-950/10">
        <p className="text-sm font-bold uppercase tracking-[0.28em] text-[#f2d48a]">Kullanıcı ve Yetkiler</p>
        <h1 className="mt-4 text-4xl font-black text-white">{demoCompany.name}</h1>
        <p className="mt-3 text-zinc-300">{demoProfile.fullName} · {demoRoleLabel}</p>
        <p className="mt-5 max-w-3xl leading-8 text-zinc-300">Bu sayfa demo yetki matrisi gösterir. Kullanıcı davet sistemi sonraki fazda etkinleştirilecektir.</p>
      </section>

      <section className="mt-10 grid gap-5 lg:grid-cols-[0.8fr_1.2fr]">
        <article className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-bold text-zinc-950">Kullanıcı kartı</h2>
          <dl className="mt-5 grid gap-4 text-sm">
            <div><dt className="text-zinc-500">Şirket</dt><dd className="font-semibold text-zinc-950">{demoCompany.name}</dd></div>
            <div><dt className="text-zinc-500">Kullanıcı</dt><dd className="font-semibold text-zinc-950">{demoProfile.fullName}</dd></div>
            <div><dt className="text-zinc-500">Rol</dt><dd className="font-semibold text-zinc-950">{demoRoleLabel}</dd></div>
          </dl>
        </article>

        <article className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-bold text-zinc-950">Aktif modüller</h2>
          <div className="mt-5 flex flex-wrap gap-2">
            {workspaceModules.map((module) => <span className="rounded-full bg-zinc-100 px-3 py-1 text-sm font-semibold text-zinc-700" key={module.key}>{module.name}</span>)}
          </div>
        </article>
      </section>

      <section className="mt-10 rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm">
        <h2 className="text-xl font-bold text-zinc-950">Demo yetki matrisi</h2>
        <div className="mt-6 overflow-x-auto">
          <table className="w-full min-w-[760px] border-collapse text-left text-sm">
            <thead>
              <tr className="border-b border-zinc-200 text-zinc-500">
                <th className="py-3 pr-4">Modül</th>
                {actions.map((action) => <th className="py-3 pr-4 capitalize" key={action}>{action}</th>)}
              </tr>
            </thead>
            <tbody>
              {permissions.map((row) => (
                <tr className="border-b border-zinc-100" key={row.module}>
                  <td className="py-4 pr-4 font-semibold text-zinc-950">{moduleLabels[row.module]}</td>
                  {actions.map((action) => (
                    <td className="py-4 pr-4" key={action}>
                      <span className={`rounded-full px-3 py-1 text-xs font-bold ${row.permissions.includes(action) ? "bg-emerald-50 text-emerald-700" : "bg-zinc-100 text-zinc-400"}`}>
                        {row.permissions.includes(action) ? "Var" : "Yok"}
                      </span>
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </main>
  );
}
