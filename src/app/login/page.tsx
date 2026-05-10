import type { Metadata } from "next";
import { BrandLogo } from "@/components/brand-logo";
import { WorkspaceLoginForm } from "@/components/workspace-login-form";

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
        <WorkspaceLoginForm />
      </div>
    </section>
  );
}
