import { Button } from "@/components/button";

type HomeHeroProps = {
  workspaceHref: string;
};

const moduleTags = [
  "Teknokent / Ar-Ge",
  "Nakit Akışı",
  "Mali Süreçler",
  "Belge Yönetimi",
  "Raporlama",
  "Bütçe & Performans",
];

const commandCards = [
  ["Raporlama", "Hazır"],
  ["Bütçe", "%92"],
  ["Nakit", "Aktif"],
];

const chartBars = [
  "46%",
  "68%",
  "54%",
  "82%",
  "62%",
  "90%",
  "74%",
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
        className="absolute inset-0 bg-[linear-gradient(90deg,rgba(9,9,11,0.99)_0%,rgba(9,9,11,0.94)_34%,rgba(24,24,27,0.68)_58%,rgba(24,24,27,0.34)_100%)]"
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(9,9,11,0.18)_0%,rgba(9,9,11,0.62)_100%)]" aria-hidden="true" />
      <div className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-zinc-950 to-transparent" aria-hidden="true" />

      <div className="relative mx-auto grid min-h-[calc(100vh-76px)] max-w-7xl items-center gap-12 px-4 py-16 sm:px-6 lg:grid-cols-[minmax(0,1fr)_minmax(360px,520px)] lg:px-8 lg:py-20">
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
        </div>

        <div className="relative mx-auto w-full max-w-[520px] lg:ml-auto">
          <div className="absolute -inset-4 rounded-lg bg-[#f2d48a]/10 blur-2xl" aria-hidden="true" />
          <div className="fincity-command-float relative overflow-hidden rounded-lg border border-white/15 bg-zinc-950/[0.82] p-4 text-white shadow-2xl shadow-black/50 backdrop-blur-md sm:p-5">
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#f2d48a]/80 to-transparent" aria-hidden="true" />
            <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-[#f2d48a]/12 blur-3xl" aria-hidden="true" />

            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs font-bold uppercase text-[#f2d48a]">Canlı Çalışma Alanı</p>
                <h2 className="mt-3 text-2xl font-black text-white sm:text-3xl">FinCity Command Center</h2>
              </div>
              <span className="fincity-secure-pulse shrink-0 rounded-full border border-emerald-300/35 bg-emerald-400/12 px-3 py-1 text-xs font-black text-emerald-100">
                Güvenli
              </span>
            </div>

            <div className="mt-6 grid grid-cols-3 gap-3">
              {commandCards.map(([title, value]) => (
                <div className="rounded-lg border border-white/10 bg-white/[0.06] p-3 shadow-inner shadow-white/5" key={title}>
                  <p className="text-[11px] font-bold uppercase text-zinc-300">{title}</p>
                  <p className="mt-2 text-lg font-black text-white">{value}</p>
                </div>
              ))}
            </div>

            <div className="mt-4 rounded-lg border border-white/10 bg-zinc-900/[0.78] p-4">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-sm font-black text-white">Bütçe & Performans</p>
                  <p className="mt-1 text-xs leading-5 text-zinc-300">Planlanan, gerçekleşen ve sapma takibi</p>
                </div>
                <span className="rounded-full border border-[#f2d48a]/30 bg-[#f2d48a]/10 px-2.5 py-1 text-xs font-bold text-[#f2d48a]">%92</span>
              </div>
              <div className="mt-5 flex h-36 items-end gap-2 overflow-hidden rounded-lg border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.02))] px-3 pb-3 pt-4">
                {chartBars.map((height, index) => (
                  <div className="flex min-w-0 flex-1 items-end" key={`${height}-${index}`}>
                    <div
                      className="fincity-command-bar w-full rounded-t-md bg-gradient-to-t from-[#b88a2a] via-[#e4bf68] to-[#fff3bf] shadow-[0_0_18px_rgba(242,212,138,0.26)]"
                      style={{ height, animationDelay: `${index * 0.24}s` }}
                    />
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-4 overflow-hidden rounded-lg border border-white/10 bg-zinc-950/70 py-3">
              <div className="fincity-tag-track flex w-max gap-3 px-3">
                {[...moduleTags, ...moduleTags].map((tag, index) => (
                  <span className="rounded-full border border-white/10 bg-white/[0.07] px-4 py-2 text-xs font-black text-zinc-100 sm:text-sm" key={`${tag}-${index}`}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
