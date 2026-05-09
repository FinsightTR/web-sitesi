import type { Metadata } from "next";
import { SectionHeading } from "@/components/section-heading";
import { insights } from "@/lib/content";

export const metadata: Metadata = { title: "Gündem ve İçgörüler" };

export default function InsightsPage() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <SectionHeading eyebrow="Gündem / İçgörüler" title="Finansal yönetim, bütçe ve performans odaklı içerikler" />
      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {insights.map((post) => (
          <article className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm" key={post.title}>
            <span className="text-xs font-bold uppercase tracking-widest text-blue-700">{post.tag}</span>
            <h2 className="mt-4 text-xl font-bold text-slate-950">{post.title}</h2>
            <p className="mt-3 text-sm leading-6 text-slate-600">{post.summary}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
