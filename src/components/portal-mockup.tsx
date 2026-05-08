import { portalMetrics } from "@/lib/content";
import { StatCard } from "@/components/cards";

export function PortalMockup() {
  return (
    <div className="rounded-[2rem] bg-slate-950 p-4 shadow-2xl shadow-blue-950/30">
      <div className="rounded-[1.5rem] border border-white/10 bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 p-5">
        <div className="flex items-center justify-between border-b border-white/10 pb-4">
          <div>
            <p className="text-sm font-semibold text-cyan-200">FinCity Portal</p>
            <p className="text-xs text-slate-300">Demo dashboard · gerçek müşteri verisi içermez</p>
          </div>
          <span className="rounded-full bg-emerald-400/15 px-3 py-1 text-xs font-semibold text-emerald-200">Hazırlık</span>
        </div>
        <div className="mt-5 grid gap-3 sm:grid-cols-2">
          {portalMetrics.map((metric) => (
            <StatCard key={metric.label} {...metric} />
          ))}
        </div>
        <div className="mt-5 rounded-2xl bg-white p-4">
          <div className="flex items-end gap-2" aria-label="Demo performans grafiği">
            {[42, 64, 58, 78, 72, 88, 81].map((height, index) => (
              <div className="flex flex-1 flex-col items-center gap-2" key={height + index}>
                <div className="w-full rounded-t-xl bg-gradient-to-t from-blue-700 to-cyan-400" style={{ height }} />
                <span className="text-[10px] text-slate-500">A{index + 1}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
