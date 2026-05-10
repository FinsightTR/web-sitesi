import type { Metadata } from "next";
import { BrandLogo } from "@/components/brand-logo";

export const metadata: Metadata = { title: "FinCity Yönetim ve Çalışma Alanı" };

const workspaceBlocks = [
  {
    title: "Yetki Bazlı Erişim",
    text: "Her kullanıcı yalnızca kendisine tanımlı modülleri ve aksiyonları görür.",
  },
  {
    title: "Şirket Bazlı İzolasyon",
    text: "Her müşteri yalnızca kendi şirket çalışma alanına ve kayıtlarına erişir.",
  },
  {
    title: "FinCity Destekli Süreç Yönetimi",
    text: "Raporlama, dosya, görev ve danışmanlık akışı tek merkezde toplanır.",
  },
];

export default function LoginPage() {
  return (
    <section className="relative overflow-hidden bg-[linear-gradient(135deg,#ffffff_0%,#f6f6f4_60%,#ececea_100%)]">
      <div className="absolute -left-24 top-24 h-72 w-72 rounded-full bg-[#b88a2a]/10 blur-3xl" aria-hidden="true" />
      <div className="mx-auto grid min-h-[78vh] max-w-7xl items-center gap-12 px-4 py-20 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8">
        <div>
          <BrandLogo imageClassName="h-12" />
          <p className="mt-8 text-sm font-bold uppercase tracking-[0.28em] text-[#8a6418]">Güvenli müşteri çalışma alanı</p>
          <h1 className="mt-4 max-w-2xl text-4xl font-black tracking-tight text-zinc-950 sm:text-5xl">
            FinCity Yönetim ve Çalışma Alanı
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-zinc-600">
            Finansal raporlama, bütçe, Teknokent/Ar-Ge süreçleri ve mali operasyonların yetki bazlı yönetilebildiği güvenli müşteri çalışma alanı.
          </p>
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {workspaceBlocks.map((block) => (
              <article className="rounded-3xl border border-zinc-200 bg-white/85 p-5 shadow-sm" key={block.title}>
                <p className="font-bold text-zinc-950">{block.title}</p>
                <p className="mt-3 text-sm leading-6 text-zinc-600">{block.text}</p>
              </article>
            ))}
          </div>
        </div>
        <form className="rounded-[2rem] border border-zinc-200 bg-white p-8 shadow-2xl shadow-zinc-950/10">
          <div className="mb-8 border-b border-zinc-200 pb-6">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-zinc-500">Supabase Auth hazırlığı</p>
            <h2 className="mt-3 text-2xl font-bold text-zinc-950">Çalışma alanı girişi</h2>
            <p className="mt-2 text-sm leading-6 text-zinc-600">Bu tasarım Supabase Auth’a hazırdır; gerçek kullanıcı oluşturma sonraki fazda etkinleştirilecektir.</p>
          </div>
          <label className="grid gap-2 text-sm font-semibold text-zinc-700">
            E-posta
            <input type="email" placeholder="kullanici@firma.com" autoComplete="email" className="rounded-2xl border border-zinc-300 bg-white px-4 py-3 font-normal text-zinc-950 outline-none focus:border-[#b88a2a]" />
          </label>
          <label className="mt-4 grid gap-2 text-sm font-semibold text-zinc-700">
            Şifre
            <input type="password" placeholder="••••••••" autoComplete="current-password" className="rounded-2xl border border-zinc-300 bg-white px-4 py-3 font-normal text-zinc-950 outline-none focus:border-[#b88a2a]" />
          </label>
          <button type="button" className="mt-6 w-full rounded-full bg-zinc-950 px-5 py-3 text-sm font-bold text-white transition hover:bg-zinc-800">
            Giriş Yap
          </button>
          <div className="mt-4 flex flex-wrap items-center justify-between gap-3 text-xs text-zinc-500">
            <span>Hesap erişimi için FinCity ile iletişime geçin.</span>
            <span className="font-semibold text-zinc-700">Şifremi unuttum</span>
          </div>
        </form>
      </div>
    </section>
  );
}
