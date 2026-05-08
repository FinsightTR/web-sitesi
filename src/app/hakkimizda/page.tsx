import type { Metadata } from "next";
import { SectionHeading } from "@/components/section-heading";

export const metadata: Metadata = { title: "Hakkımızda" };

export default function AboutPage() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <SectionHeading
        eyebrow="Hakkımızda"
        title="FinCity, finansal yönetim uzmanlığını teknoloji odaklı karar destek yaklaşımıyla birleştirir"
        description="KOBİ’ler, teknoloji şirketleri, ajanslar, Teknokent firmaları ve büyüyen işletmeler için finansal görünürlüğü artıran danışmanlık ve dijital portal altyapısı geliştiriyoruz."
      />
      <div className="mt-12 grid gap-8 lg:grid-cols-2">
        <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200">
          <h2 className="text-2xl font-bold text-slate-950">Veriye dayalı karar alma desteği</h2>
          <p className="mt-4 leading-8 text-slate-600">
            FinCity, bütçe disiplini, nakit akışı kontrolü, P&L görünürlüğü ve yönetici raporlaması alanlarında sade, anlaşılır ve sürdürülebilir finansal yönetim pratikleri kurar.
          </p>
        </div>
        <div className="rounded-3xl bg-slate-950 p-8 text-white shadow-sm">
          <h2 className="text-2xl font-bold">Dijital ürün geliştirme vizyonu</h2>
          <p className="mt-4 leading-8 text-slate-300">
            Finsight vizyonu, finansal danışmanlık çıktılarının zaman içinde akıllı raporlama, uyarı sistemleri ve iş akışlarıyla desteklenen dijital platformlara dönüşmesini hedefler.
          </p>
        </div>
      </div>
    </section>
  );
}
