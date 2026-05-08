import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { legalLinks } from "@/lib/content";

type PageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return legalLinks.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const page = legalLinks.find((item) => item.slug === slug);
  return { title: page?.label ?? "Yasal" };
}

export default async function LegalPage({ params }: PageProps) {
  const { slug } = await params;
  const page = legalLinks.find((item) => item.slug === slug);
  if (!page) notFound();

  return (
    <section className="mx-auto max-w-4xl px-4 py-20 sm:px-6 lg:px-8">
      <p className="text-sm font-bold uppercase tracking-[0.28em] text-blue-700">Yasal Bilgilendirme</p>
      <h1 className="mt-4 text-4xl font-black text-slate-950">{page.label}</h1>
      <div className="mt-8 rounded-3xl border border-slate-200 bg-white p-8 leading-8 text-slate-600 shadow-sm">
        <p>
          Bu sayfa, FinCity web sitesi için hazırlanmış placeholder yasal bilgilendirme alanıdır. Nihai metinler hukuk ve uyum değerlendirmesi sonrasında güncellenmelidir.
        </p>
      </div>
    </section>
  );
}
