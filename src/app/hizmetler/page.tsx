import type { Metadata } from "next";
import Link from "next/link";
import { getServicesByGroup, serviceGroups } from "@/lib/services";

export const metadata: Metadata = { title: "Hizmetlerimiz ve Ürünlerimiz" };

export default function ServicesPage() {
  return (
    <main>
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <p className="text-sm font-bold uppercase tracking-[0.28em] text-[#8a6418]">Hizmetlerimiz</p>
        <h1 className="mt-4 max-w-4xl text-4xl font-black tracking-tight text-zinc-950 sm:text-5xl">
          Danışmanlıkta uçtan uca finans, teknoloji ve teşvik çözümleri
        </h1>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-zinc-600">
          FinCity; Teknokent, Ar-Ge, TÜBİTAK, KOSGEB, teşvik, finansal raporlama, vergi, dijital portal ve yönetim danışmanlığı süreçlerini uçtan uca ele alır.
        </p>
      </section>

      <section className="bg-zinc-100 py-16">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:px-8">
          {serviceGroups.map((group) => (
            <div key={group.title}>
              <div className="max-w-3xl">
                <p className="text-sm font-bold uppercase tracking-[0.24em] text-[#8a6418]">Çözüm alanı</p>
                <h2 className="mt-3 text-3xl font-black tracking-tight text-zinc-950">{group.title}</h2>
                <p className="mt-3 text-base leading-7 text-zinc-600">{group.description}</p>
              </div>
              <div className="mt-8 grid gap-6 lg:grid-cols-3">
                {getServicesByGroup(group).map((service) => (
                  <article className="group flex min-h-full flex-col rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl hover:shadow-zinc-950/10" key={service.slug}>
                    <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#8a6418]">{service.eyebrow}</p>
                    <h3 className="mt-4 text-xl font-bold text-zinc-950">{service.title}</h3>
                    <p className="mt-3 flex-1 text-sm leading-6 text-zinc-600">{service.summary}</p>
                    <Link className="mt-6 inline-flex text-sm font-bold text-zinc-950 underline decoration-[#b88a2a] decoration-2 underline-offset-4" href={`/hizmetler/${service.slug}`}>
                      Detayları Gör
                    </Link>
                  </article>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
