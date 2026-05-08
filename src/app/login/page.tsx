import type { Metadata } from "next";

export const metadata: Metadata = { title: "Panele Giriş" };

export default function LoginPage() {
  return (
    <section className="mx-auto grid min-h-[70vh] max-w-7xl items-center gap-10 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:px-8">
      <div>
        <p className="text-sm font-bold uppercase tracking-[0.28em] text-blue-700">FinCity</p>
        <h1 className="mt-4 text-4xl font-black text-slate-950">Budget & Performance Portal</h1>
        <p className="mt-5 max-w-xl leading-8 text-slate-600">
          Bu ekran portal kullanıcı altyapısı için hazırlanmış güvenli bir arayüz taslağıdır. Gerçek kullanıcı oluşturmaz, production auth bağlantısı içermez.
        </p>
      </div>
      <form className="rounded-3xl border border-slate-200 bg-white p-8 shadow-xl shadow-slate-200/70">
        <label className="grid gap-2 text-sm font-semibold text-slate-700">
          E-posta
          <input disabled placeholder="kullanici@firma.com" className="rounded-2xl border border-slate-300 bg-slate-50 px-4 py-3 font-normal" />
        </label>
        <label className="mt-4 grid gap-2 text-sm font-semibold text-slate-700">
          Şifre / PIN
          <input disabled type="password" placeholder="••••••••" className="rounded-2xl border border-slate-300 bg-slate-50 px-4 py-3 font-normal" />
        </label>
        <button disabled className="mt-6 w-full rounded-full bg-slate-300 px-5 py-3 text-sm font-bold text-slate-600">
          Giriş yakında aktif olacak
        </button>
        <p className="mt-4 text-xs leading-5 text-slate-500">
          Daha sonra Supabase Auth veya Token + PIN mimarisine bağlanabilecek şekilde tasarlanmıştır.
        </p>
      </form>
    </section>
  );
}
