import { portalMetrics } from "@/lib/content";
import { StatCard } from "@/components/cards";

export function PortalMockup() {
  return (
    <div className="rounded-[2rem] border border-zinc-200 bg-white p-3 shadow-2xl shadow-zinc-950/10">
      <div className="rounded-[1.5rem] border border-white/10 bg-zinc-950 p-5">
        <div className="flex items-center justify-between border-b border-white/10 pb-4">
          <div>
            <p className="text-sm font-semibold text-white">FinCity Çalışma Alanı</p>
            <p className="text-xs text-zinc-300">Demo dashboard · gerçek müşteri verisi içermez</p>
          </div>
          <span className="rounded-full bg-[#b88a2a]/15 px-3 py-1 text-xs font-semibold text-[#f2d48a]">Hazırlık</span>
        </div>
        <div className="mt-5 grid gap-3 sm:grid-cols-2">
          {portalMetrics.map((metric) => (
            <StatCard key={metric.label} {...metric} />
          ))}
        </div>
        <div className="mt-5 rounded-2xl bg-white p-4">
          <div className="mb-4 flex items-center justify-between">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-zinc-500">Performans görünümü</p>
            <p className="text-xs text-zinc-500">Temsili veri</p>
          </div>
          <div className="flex items-end gap-2" aria-label="Demo performans grafiği">
            {[42, 64, 58, 78, 72, 88, 81].map((height, index) => (
              <div className="flex flex-1 flex-col items-center gap-2" key={height + index}>
                <div className="w-full rounded-t-xl bg-gradient-to-t from-zinc-900 to-[#b88a2a]" style={{ height }} />
                <span className="text-[10px] text-zinc-500">A{index + 1}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
