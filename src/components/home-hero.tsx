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

const dashboardCards = [
  ["Raporlama", "Dönem kapanışı", "Hazır"],
  ["Bütçe", "Sapma analizi", "%92"],
  ["Nakit", "12 haftalık görünüm", "Aktif"],
];

export function HomeHero({ workspaceHref }: HomeHeroProps) {
  return (
    <section className="relative overflow-hidden bg-zinc-950 text-white">
      <div className="absolute inset-0 bg-[linear-gradient(135deg,#0b0b0d_0%,#18181b_48%,#2b2518_100%)]" aria-hidden="true" />
      <div className="absolute inset-y-0 right-0 hidden w-1/2 bg-[linear-gradient(120deg,transparent_0%,rgba(255,255,255,0.04)_44%,rgba(184,138,42,0.16)_100%)] lg:block" aria-hidden="true" />

      <div className="relative mx-auto grid min-h-[calc(100vh-76px)] max-w-7xl items-center gap-12 px-4 py-20 sm:px-6 lg:grid-cols-[0.94fr_1.06fr] lg:px-8 lg:py-24">
        <div>
          <p className="inline-flex rounded-full border border-[#f2d48a]/30 bg-white/5 px-4 py-2 text-sm font-bold text-[#f2d48a] shadow-sm shadow-black/10 backdrop-blur">
            FinCity çalışma alanı yaklaşımı
          </p>
          <h1 className="mt-7 max-w-4xl text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
            Finans, teknoloji ve danışmanlığı tek çalışma alanında birleştiriyoruz.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-300">
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
          <div className="mt-10 grid gap-4 border-t border-white/10 pt-8 text-sm text-zinc-300 sm:grid-cols-3">
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

        <div className="relative min-h-[520px] overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.06] p-5 shadow-2xl shadow-black/30 backdrop-blur">
          <div className="absolute inset-0 bg-[linear-gradient(145deg,rgba(255,255,255,0.10),transparent_38%),linear-gradient(320deg,rgba(184,138,42,0.20),transparent_42%)]" aria-hidden="true" />
          <div className="relative rounded-[1.5rem] border border-white/10 bg-zinc-950/70 p-5">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#f2d48a]">Canlı çalışma alanı</p>
                <h2 className="mt-2 text-2xl font-black text-white">FinCity Command Center</h2>
              </div>
              <span className="rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1 text-xs font-bold text-emerald-200">
                Güvenli
              </span>
            </div>

            <div className="mt-6 grid gap-4 md:grid-cols-3">
              {dashboardCards.map(([title, label, value], index) => (
                <article className="fincity-card-float rounded-2xl border border-white/10 bg-white/[0.07] p-4" key={title} style={{ animationDelay: `${index * 0.4}s` }}>
                  <p className="text-xs font-semibold text-zinc-400">{title}</p>
                  <p className="mt-3 text-2xl font-black text-white">{value}</p>
                  <p className="mt-2 text-xs leading-5 text-zinc-300">{label}</p>
                </article>
              ))}
            </div>

            <div className="mt-6 rounded-2xl border border-white/10 bg-black/20 p-4">
              <div className="flex items-end justify-between gap-4">
                <div>
                  <p className="text-sm font-bold text-white">Bütçe & Performans</p>
                  <p className="mt-1 text-xs text-zinc-400">Planlanan, gerçekleşen ve sapma takibi</p>
                </div>
                <p className="text-sm font-black text-[#f2d48a]">Q2</p>
              </div>
              <div className="mt-5 flex h-28 items-end gap-3">
                {[44, 68, 52, 84, 73, 92, 78].map((height, index) => (
                  <span
                    className="fincity-bar-rise flex-1 rounded-t-lg bg-[linear-gradient(180deg,#f2d48a_0%,#b88a2a_100%)]"
                    key={`${height}-${index}`}
                    style={{ height: `${height}%`, animationDelay: `${index * 0.12}s` }}
                  />
                ))}
              </div>
            </div>
          </div>

          <div className="relative mt-5 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.06] py-3">
            <div className="fincity-tag-track flex w-max gap-3 px-3">
              {[...moduleTags, ...moduleTags].map((tag, index) => (
                <span className="rounded-full border border-white/10 bg-zinc-950/60 px-4 py-2 text-sm font-bold text-zinc-100" key={`${tag}-${index}`}>
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="relative mt-5 grid gap-4 sm:grid-cols-2">
            <article className="rounded-2xl border border-white/10 bg-white/[0.07] p-4">
              <p className="text-sm font-bold text-white">Teknokent / Ar-Ge</p>
              <p className="mt-2 text-xs leading-5 text-zinc-400">Proje, personel, muafiyet ve teşvik süreçleri.</p>
            </article>
            <article className="rounded-2xl border border-white/10 bg-white/[0.07] p-4">
              <p className="text-sm font-bold text-white">Mali Süreçler</p>
              <p className="mt-2 text-xs leading-5 text-zinc-400">Kapanış, bordro, beyan ve belge koordinasyonu.</p>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
