import type { Metadata } from "next";
import { FeatureCard } from "@/components/cards";
import { SectionHeading } from "@/components/section-heading";
import { services } from "@/lib/content";

export const metadata: Metadata = { title: "Hizmetlerimiz ve Ürünlerimiz" };

export default function ServicesPage() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <SectionHeading
        eyebrow="Hizmetlerimiz / Ürünlerimiz"
        title="FinCity hizmet modeli; raporlama, danışmanlık, Teknokent uzmanlığı ve portal vizyonunu birlikte ele alır"
        description="Her hizmet alanı, yönetimin daha hızlı ve güvenilir finansal kararlar almasını sağlayacak şekilde sadeleştirilmiş çıktılar üretir."
      />
      <div className="mt-12 grid gap-6 lg:grid-cols-2">
        {services.map((service) => <FeatureCard key={service.title} {...service} />)}
      </div>
    </section>
  );
}
