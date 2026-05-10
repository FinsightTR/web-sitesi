import type { Metadata } from "next";
import Link from "next/link";
import { getWorkspaceContext } from "@/lib/workspace/server-data";

export const metadata: Metadata = { title: "Kullanıcı ve Yetkiler" };

const actions = [
  ["can_view", "Görüntüleme"],
  ["can_create", "Oluşturma"],
  ["can_edit", "Düzenleme"],
  ["can_delete", "Silme"],
  ["can_manage", "Yönetme"],
] as const;

export default async function PermissionsPage() {
  const context = await getWorkspaceContext();

  if ("error" in context) {
    return (
      <main className="mx-auto max-w-4xl px-4 py-20 sm:px-6 lg:px-8">
        <section className="rounded-[2rem] border border-zinc-200 bg-white p-8 shadow-sm">
          <h1 className="text-3xl font-black text-zinc-950">Erişim bekleniyor</h1>
          <p className="mt-4 leading-8 text-zinc-600">{context.error}</p>
          <Link className="mt-6 inline-flex rounded-full bg-zinc-950 px-5 py-3 text-sm font-bold text-white" href="/login">Giriş sayfasına dön</Link>
        </section>
      </main>
    );
  }

  const canViewUserManagement = context.permissions.some((item) => item.module_id === "user_management" && item.can_view);

  if (!canViewUserManagement) {
    return (
      <main className="mx-auto max-w-4xl px-4 py-20 sm:px-6 lg:px-8">
        <section className="rounded-[2rem] border border-zinc-200 bg-white p-8 shadow-sm">
          <h1 className="text-3xl font-black text-zinc-950">Kullanıcı ve Yetkiler</h1>
          <p className="mt-4 leading-8 text-zinc-600">Bu alanı görüntüleme yetkiniz bulunmuyor.</p>
        </section>
      </main>
    );
  }

  return (
    <main className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <section className="rounded-[2rem] bg-zinc-950 p-8 text-white shadow-2xl shadow-zinc-950/10">
        <p className="text-sm font-bold uppercase tracking-[0.28em] text-[#f2d48a]">Kullanıcı ve Yetkiler</p>
        <h1 className="mt-4 text-4xl font-black text-white">{context.company.name}</h1>
        <p className="mt-3 text-zinc-300">{context.profile.full_name} · {context.roleLabel}</p>
        <p className="mt-5 max-w-3xl leading-8 text-zinc-300">Bu sayfa gerçek Supabase rol ve modül yetki matrisini gösterir. Kullanıcı davet sistemi sonraki fazda etkinleştirilecektir.</p>
      </section>

      <section className="mt-10 grid gap-5 lg:grid-cols-[0.8fr_1.2fr]">
        <article className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-bold text-zinc-950">Kullanıcı kartı</h2>
          <dl className="mt-5 grid gap-4 text-sm">
            <div><dt className="text-zinc-500">Şirket</dt><dd className="font-semibold text-zinc-950">{context.company.name}</dd></div>
            <div><dt className="text-zinc-500">Kullanıcı</dt><dd className="font-semibold text-zinc-950">{context.profile.full_name}</dd></div>
            <div><dt className="text-zinc-500">Rol</dt><dd className="font-semibold text-zinc-950">{context.roleLabel}</dd></div>
          </dl>
        </article>

        <article className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-bold text-zinc-950">Aktif modüller</h2>
          <div className="mt-5 flex flex-wrap gap-2">
            {context.modules.filter((module) => module.canView).map((module) => (
              <span className="rounded-full bg-zinc-100 px-3 py-1 text-sm font-semibold text-zinc-700" key={module.id}>{module.name}</span>
            ))}
          </div>
        </article>
      </section>

      <section className="mt-10 rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm">
        <h2 className="text-xl font-bold text-zinc-950">Yetki matrisi</h2>
        <div className="mt-6 overflow-x-auto">
          <table className="w-full min-w-[760px] border-collapse text-left text-sm">
            <thead>
              <tr className="border-b border-zinc-200 text-zinc-500">
                <th className="py-3 pr-4">Modül</th>
                {actions.map(([, label]) => <th className="py-3 pr-4" key={label}>{label}</th>)}
              </tr>
            </thead>
            <tbody>
              {context.permissions.map((row) => {
                const module = context.modules.find((item) => item.id === row.module_id);
                return (
                  <tr className="border-b border-zinc-100" key={row.module_id}>
                    <td className="py-4 pr-4 font-semibold text-zinc-950">{module?.name ?? row.module_id}</td>
                    {actions.map(([action]) => (
                      <td className="py-4 pr-4" key={action}>
                        <span className={`rounded-full px-3 py-1 text-xs font-bold ${row[action] ? "bg-emerald-50 text-emerald-700" : "bg-zinc-100 text-zinc-400"}`}>
                          {row[action] ? "Var" : "Yok"}
                        </span>
                      </td>
                    ))}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </section>
    </main>
  );
}
