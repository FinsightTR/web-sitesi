import type { Metadata } from "next";
import { authPlan } from "@/lib/auth";
import { portalMetrics } from "@/lib/content";

export const metadata: Metadata = { title: "Çalışma Alanı Önizleme" };

export default function PortalPage() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <div className="rounded-[2rem] bg-zinc-950 p-8 text-white shadow-2xl shadow-zinc-950/10">
        <p className="text-sm font-bold uppercase tracking-[0.28em] text-[#f2d48a]">Korumalı alan tasarımı</p>
        <h1 className="mt-4 text-4xl font-black">FinCity Yönetim ve Çalışma Alanı</h1>
        <p className="mt-5 max-w-3xl leading-8 text-zinc-300">
          Bu sayfa gerçek müşteri verisi içermez. Auth sağlayıcısı şu an {authPlan.currentProvider} modundadır ve production bağlantısı açık onay olmadan etkinleştirilmez.
        </p>
        <div className="mt-8 grid gap-4 md:grid-cols-4">
          {portalMetrics.map((metric) => (
            <div className="rounded-2xl bg-white/10 p-5" key={metric.label}>
              <p className="text-sm text-zinc-300">{metric.label}</p>
              <p className="mt-2 text-2xl font-bold">{metric.value}</p>
              <p className="mt-1 text-xs text-zinc-400">{metric.note}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
