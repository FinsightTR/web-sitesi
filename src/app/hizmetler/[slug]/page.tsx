import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ServiceDetailPage } from "@/components/service-detail";
import { getServiceCategory, serviceCategories } from "@/lib/services";

type PageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return serviceCategories.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceCategory(slug);
  return { title: service?.title ?? "Hizmet Detayı" };
}

export default async function ServicePage({ params }: PageProps) {
  const { slug } = await params;
  const service = getServiceCategory(slug);
  if (!service) notFound();

  return <ServiceDetailPage service={service} />;
}
