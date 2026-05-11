import { Button } from "@/components/button";
import { FeatureCard } from "@/components/cards";
import { HomeHero } from "@/components/home-hero";
import { PortalMockup } from "@/components/portal-mockup";
import { SectionHeading } from "@/components/section-heading";
import { insights, services } from "@/lib/content";
import { createClient } from "@/lib/supabase/server";

export const dynamic = "force-dynamic";

export default async function Home() {
  const supabase = await createClient();
  const { data: { user } } = supabase ? await supabase.auth.getUser() : { data: { user: null } };
  const workspaceHref = user ? "/portal" : "/login";

  return (
    <>
      <HomeHero workspaceHref={workspaceHref} />

      <section className="relative overflow-hidden bg-[linear-gradient(135deg,#ffffff_0%,#f7f7f5_55%,#eeeeeb_100%)]">
        <div className="absolute -right-24 top-16 h-72 w-72 rounded-full bg-[#b88a2a]/15 blur-3xl" aria-hidden="true" />
        <div className="absolute left-1/2 top-0 h-px w-[42rem] -translate-x-1/2 bg-gradient-to-r from-transparent via-[#b88a2a]/35 to-transparent" aria-hidden="true" />
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-4 py-24 sm:px-6 lg:grid-cols-2 lg:px-8 lg:py-32">
          <div>
            <p className="mb-6 inline-flex rounded-full border border-zinc-200 bg-white/80 px-4 py-2 text-sm font-semibold text-zinc-800 shadow-sm">
              Danışmanlık · Raporlama · Dijital Çalışma Alanı
            </p>
            <h1 className="max-w-3xl text-4xl font-black tracking-tight text-zinc-950 sm:text-5xl lg:text-6xl">
              Finansal uzmanlığı teknolojiyle buluşturuyoruz
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-600">
              İşletmenizi veriye dayalı, hızlı ve sürdürülebilir kararlarla güçlendiriyoruz.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Button href="/hizmetler">Hizmetleri İncele</Button>
              <Button href="/iletisim" variant="secondary">Bizimle İletişime Geç</Button>
              <Button href="/login" variant="ghost">Çalışma Alanına Geç</Button>
            </div>
            <div className="mt-10 grid gap-4 border-t border-zinc-200 pt-8 text-sm text-zinc-600 sm:grid-cols-3">
              {[
                ["Bütçe", "Planlama ve gerçekleşen kontrolü"],
                ["P&L", "Yönetici seviyesinde performans"],
                ["Nakit", "Görünür ve sürdürülebilir akış"],
              ].map(([title, text]) => (
                <div key={title}>
                  <p className="font-bold text-zinc-950">{title}</p>
                  <p className="mt-1 leading-6">{text}</p>
                </div>
              ))}
            </div>
          </div>
          <PortalMockup />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Değer Önerisi"
          title="Finansal yönetim süreçlerinizi tek bir karar destek yaklaşımında topluyoruz"
          description="Bütçe, nakit akışı, P&L, performans raporlama, Teknokent danışmanlığı ve çalışma alanı vizyonu FinCity çatısı altında birlikte tasarlanır."
          align="center"
        />
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {["Bütçe ve gerçekleşen disiplini", "Nakit akışı ve KPI görünürlüğü", "Teknokent ve Ar-Ge finansal kontrolü"].map((item) => (
            <div className="rounded-3xl border border-zinc-200 bg-white p-6 text-center shadow-sm" key={item}>
              <p className="text-lg font-bold text-zinc-950">{item}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-zinc-100 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Hizmetler" title="Danışmanlık ve ürün yaklaşımı" description="FinCity, klasik finansal danışmanlığı dijital raporlama ve çalışma alanı altyapısına hazır bir modelle birleştirir." />
          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            {services.slice(0, 4).map((service) => <FeatureCard key={service.title} {...service} />)}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="İçgörüler" title="Finansal yönetim gündemi" description="Bütçe, nakit akışı, performans yönetimi ve Teknokent süreçlerine dair kısa içerik yapısı." />
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {insights.map((post) => (
            <article className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm" key={post.title}>
              <span className="text-xs font-bold uppercase tracking-widest text-[#8a6418]">{post.tag}</span>
              <h3 className="mt-4 text-xl font-bold text-zinc-950">{post.title}</h3>
              <p className="mt-3 text-sm leading-6 text-zinc-600">{post.summary}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
