import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { legalLinks, legalPages } from "@/lib/content";

type PageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return legalLinks.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const page = legalPages[slug as keyof typeof legalPages];
  return { title: page?.title ?? "Yasal" };
}

export default async function LegalPage({ params }: PageProps) {
  const { slug } = await params;
  const page = legalPages[slug as keyof typeof legalPages];
  if (!page) notFound();

  return (
    <section className="mx-auto max-w-4xl px-4 py-20 sm:px-6 lg:px-8">
      <p className="text-sm font-bold uppercase tracking-[0.28em] text-[#8a6418]">Yasal Bilgilendirme</p>
      <h1 className="mt-4 text-4xl font-black text-zinc-950">{page.title}</h1>
      <div className="mt-8 rounded-3xl border border-zinc-200 bg-white p-8 shadow-sm">
        <div className="space-y-5 leading-8 text-zinc-600">
          {page.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
        </div>
      </div>
    </section>
  );
}
