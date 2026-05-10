import type { Metadata } from "next";
import Link from "next/link";
import { SectionHeading } from "@/components/section-heading";
import { serviceCategories } from "@/lib/services";

export const metadata: Metadata = { title: "Hizmetlerimiz ve Ürünlerimiz" };

export default function ServicesPage() {
  return (
    <main>
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Hizmetlerimiz / Ürünlerimiz"
          title="FinCity hizmet modeli; danışmanlık, raporlama, teknoloji ve yönetim süreçlerini birlikte ele alır"
          description="Her hizmet alanı, yönetimin daha hızlı, güvenilir ve ölçülebilir kararlar almasını sağlayacak şekilde yapılandırılmıştır."
        />
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {serviceCategories.map((service) => (
            <article className="group flex min-h-full flex-col rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl hover:shadow-zinc-950/10" key={service.slug}>
              <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#8a6418]">{service.eyebrow}</p>
              <h2 className="mt-4 text-xl font-bold text-zinc-950">{service.title}</h2>
              <p className="mt-3 flex-1 text-sm leading-6 text-zinc-600">{service.summary}</p>
              <Link className="mt-6 inline-flex text-sm font-bold text-zinc-950 underline decoration-[#b88a2a] decoration-2 underline-offset-4" href={`/hizmetler/${service.slug}`}>
                Detayları Gör
              </Link>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
