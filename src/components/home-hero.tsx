import { Button } from "@/components/button";

type HomeHeroProps = {
  workspaceHref: string;
};

const moduleTags = [
  "Raporlama",
  "Bütçe & Performans",
  "Teknokent / Ar-Ge",
  "Nakit Akışı",
  "Mali Süreçler",
  "Belge Yönetimi",
];

export function HomeHero({ workspaceHref }: HomeHeroProps) {
  return (
    <section className="relative isolate overflow-hidden bg-zinc-950 text-white">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/fincity-ai-hero.png')", backgroundPosition: "center right" }}
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 bg-[linear-gradient(90deg,rgba(9,9,11,0.98)_0%,rgba(9,9,11,0.92)_35%,rgba(24,24,27,0.64)_58%,rgba(24,24,27,0.18)_100%)]"
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(9,9,11,0.18)_0%,rgba(9,9,11,0.62)_100%)]" aria-hidden="true" />
      <div className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-zinc-950 to-transparent" aria-hidden="true" />

      <div className="relative mx-auto flex min-h-[calc(100vh-76px)] max-w-7xl items-center px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
        <div className="max-w-3xl">
          <p className="inline-flex rounded-full border border-[#f2d48a]/35 bg-zinc-950/35 px-4 py-2 text-sm font-bold text-[#f2d48a] shadow-sm shadow-black/20 backdrop-blur">
            FinCity çalışma alanı yaklaşımı
          </p>
          <h1 className="mt-7 max-w-4xl text-4xl font-black text-white sm:text-5xl lg:text-6xl">
            Finans, teknoloji ve danışmanlığı tek çalışma alanında birleştiriyoruz.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-100/90">
            FinCity; finansal raporlama, bütçe yönetimi, Teknokent / Ar-Ge süreçleri ve dijital mali operasyonları veriye dayalı bir çalışma alanında toplar.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Button href="/hizmetler" variant="secondary" className="border-white bg-white text-zinc-950 shadow-lg shadow-black/20 hover:border-[#f2d48a] hover:bg-[#f2d48a]">
              Hizmetleri İncele
            </Button>
            <Button href={workspaceHref} variant="secondary" className="border-[#f2d48a]/50 bg-[#f2d48a] text-zinc-950 hover:border-[#f2d48a] hover:bg-[#e4bf68]">
              Çalışma Alanına Geç
            </Button>
          </div>
          <div className="mt-10 grid gap-4 border-t border-white/15 pt-8 text-sm text-zinc-200 sm:grid-cols-3">
            {[
              ["Tek kaynak", "Rapor, görev ve belge akışı"],
              ["Yetki bazlı", "Şirket ve rol odaklı görünüm"],
              ["Veri odaklı", "Karar destek disiplini"],
            ].map(([title, text]) => (
              <div key={title}>
                <p className="font-bold text-white">{title}</p>
                <p className="mt-1 leading-6">{text}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 max-w-2xl overflow-hidden rounded-2xl border border-white/15 bg-zinc-950/30 py-3 backdrop-blur">
            <div className="fincity-tag-track flex w-max gap-3 px-3">
              {[...moduleTags, ...moduleTags].map((tag, index) => (
                <span className="rounded-full border border-white/10 bg-zinc-950/60 px-4 py-2 text-sm font-bold text-zinc-100" key={`${tag}-${index}`}>
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
