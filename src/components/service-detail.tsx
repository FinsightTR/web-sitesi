import Link from "next/link";
import type { ServiceCategory } from "@/lib/services";

export function ServiceVisual({ label }: { label: string }) {
  return (
    <div
      role="img"
      aria-label={label}
      className="relative min-h-[320px] overflow-hidden rounded-[2rem] border border-zinc-200 bg-zinc-950 p-6 shadow-2xl shadow-zinc-950/10"
    >
      <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-[#b88a2a]/30 blur-3xl" />
      <div className="absolute -bottom-20 left-8 h-56 w-56 rounded-full bg-white/10 blur-3xl" />
      <div className="relative flex h-full min-h-[268px] flex-col justify-between rounded-[1.5rem] border border-white/10 bg-white/10 p-6 text-white backdrop-blur">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.28em] text-[#f2d48a]">FinCity Services</p>
          <h3 className="mt-4 max-w-sm text-3xl font-black leading-tight text-white">{label}</h3>
        </div>
        <div className="grid gap-3">
          {["Analiz", "Yol Haritası", "Raporlama"].map((item, index) => (
            <div className="flex items-center justify-between rounded-2xl bg-white/10 px-4 py-3" key={item}>
              <span className="text-sm text-zinc-100">{item}</span>
              <span className="h-2 rounded-full bg-[#b88a2a]" style={{ width: `${44 + index * 18}%` }} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function Breadcrumb({ title }: { title: string }) {
  return (
    <div className="mb-8 flex flex-wrap items-center gap-2 text-sm text-zinc-500">
      <Link className="transition hover:text-zinc-950" href="/">Ana Sayfa</Link>
      <span>/</span>
      <Link className="transition hover:text-zinc-950" href="/hizmetler">Hizmetlerimiz</Link>
      <span>/</span>
      <span className="font-semibold text-zinc-800">{title}</span>
    </div>
  );
}

export function ServiceDetailPage({ service }: { service: ServiceCategory }) {
  return (
    <main>
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <Breadcrumb title={service.title} />
        <div className="grid items-center gap-12 lg:grid-cols-[1fr_0.9fr]">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.28em] text-[#8a6418]">{service.eyebrow}</p>
            <h1 className="mt-4 max-w-3xl text-4xl font-black tracking-tight text-zinc-950 sm:text-5xl">{service.title}</h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-600">{service.description}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link className="inline-flex items-center justify-center rounded-full bg-zinc-950 px-5 py-3 text-sm font-bold text-white transition hover:bg-zinc-800" href="/iletisim">
                Bizimle İletişime Geçin
              </Link>
              <Link className="inline-flex items-center justify-center rounded-full border border-zinc-300 bg-white px-5 py-3 text-sm font-bold text-zinc-950 transition hover:bg-zinc-50" href="/budget-performance-portal">
                Çalışma Alanını İnceleyin
              </Link>
            </div>
          </div>
          <ServiceVisual label={service.visualLabel} />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
        <div className="rounded-[2rem] border border-zinc-200 bg-white p-8 shadow-sm">
          <p className="text-sm font-bold uppercase tracking-[0.28em] text-[#8a6418]">Hizmet yaklaşımı</p>
          <div className="mt-6 grid gap-5 text-base leading-8 text-zinc-600 lg:grid-cols-3">
            {service.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          </div>
        </div>
      </section>

      <section className="bg-zinc-100 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.28em] text-[#8a6418]">Alt hizmetler</p>
            <h2 className="mt-3 text-3xl font-black tracking-tight text-zinc-950">Bu başlık altında sunduğumuz çalışma alanları</h2>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {service.services.map((item) => (
              <article className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm" key={item.title}>
                <h3 className="text-lg font-bold text-zinc-950">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-zinc-600">{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="rounded-[2rem] bg-zinc-950 p-8 text-white shadow-2xl shadow-zinc-950/10">
          <p className="text-sm font-bold uppercase tracking-[0.28em] text-[#f2d48a]">Ne sağlıyoruz?</p>
          <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {service.values.map((item) => (
              <article className="rounded-3xl border border-white/10 bg-white/10 p-5" key={item.title}>
                <h3 className="text-lg font-bold text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-zinc-300">{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
