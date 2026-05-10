import { cn } from "@/lib/utils";

export function FeatureCard({ title, description, items }: { title: string; description: string; items: string[] }) {
  return (
    <article className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl hover:shadow-zinc-950/10">
      <h3 className="text-xl font-bold text-zinc-950">{title}</h3>
      <p className="mt-3 text-sm leading-6 text-zinc-600">{description}</p>
      <ul className="mt-5 space-y-2 text-sm text-zinc-700">
        {items.map((item) => (
          <li className="flex gap-2" key={item}>
            <span className="mt-1 h-2 w-2 rounded-full bg-[#b88a2a]" aria-hidden="true" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}

export function StatCard({ label, value, note, className }: { label: string; value: string; note: string; className?: string }) {
  return (
    <div className={cn("rounded-2xl border border-white/15 bg-white/10 p-5 text-white backdrop-blur", className)}>
      <p className="text-sm text-zinc-300">{label}</p>
      <p className="mt-2 text-3xl font-bold">{value}</p>
      <p className="mt-1 text-xs text-zinc-300">{note}</p>
    </div>
  );
}
