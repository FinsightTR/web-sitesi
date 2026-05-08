import { Button } from "@/components/button";
import { FeatureCard } from "@/components/cards";
import { PortalMockup } from "@/components/portal-mockup";
import { SectionHeading } from "@/components/section-heading";
import { insights, services } from "@/lib/content";

export default function Home() {
  return (
    <>
      <section className="bg-grid overflow-hidden bg-white">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:px-8 lg:py-28">
          <div>
            <p className="mb-5 inline-flex rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-800">
              Danışmanlık · Raporlama · Dijital Portal
            </p>
            <h1 className="text-4xl font-black tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
              Finansal uzmanlığı teknolojiyle buluşturuyoruz
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
              İşletmenizi veriye dayalı, hızlı ve sürdürülebilir kararlarla güçlendiriyoruz.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button href="/hizmetler">Hizmetleri İncele</Button>
              <Button href="/iletisim" variant="secondary">Bizimle İletişime Geç</Button>
              <Button href="/login" variant="ghost">Panele Giriş</Button>
            </div>
          </div>
          <PortalMockup />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Değer Önerisi"
          title="Finansal yönetim süreçlerinizi tek bir karar destek yaklaşımında topluyoruz"
          description="Bütçe, nakit akışı, P&L, performans raporlama, Teknokent danışmanlığı ve portal vizyonu FinCity çatısı altında birlikte tasarlanır."
          align="center"
        />
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {["Bütçe ve gerçekleşen disiplini", "Nakit akışı ve KPI görünürlüğü", "Teknokent ve Ar-Ge finansal kontrolü"].map((item) => (
            <div className="rounded-3xl border border-slate-200 bg-white p-6 text-center shadow-sm" key={item}>
              <p className="text-lg font-bold text-slate-950">{item}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-slate-100 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Hizmetler" title="Danışmanlık ve ürün yaklaşımı" description="FinCity, klasik finansal danışmanlığı dijital raporlama ve portal altyapısına hazır bir modelle birleştirir." />
          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            {services.slice(0, 4).map((service) => <FeatureCard key={service.title} {...service} />)}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="İçgörüler" title="Finansal yönetim gündemi" description="Bütçe, nakit akışı, performans yönetimi ve Teknokent süreçlerine dair kısa içerik yapısı." />
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {insights.map((post) => (
            <article className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm" key={post.title}>
              <span className="text-xs font-bold uppercase tracking-widest text-blue-700">{post.tag}</span>
              <h3 className="mt-4 text-xl font-bold text-slate-950">{post.title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">{post.summary}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
