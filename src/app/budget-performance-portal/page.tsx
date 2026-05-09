import type { Metadata } from "next";
import { Button } from "@/components/button";
import { PortalMockup } from "@/components/portal-mockup";
import { SectionHeading } from "@/components/section-heading";

export const metadata: Metadata = { title: "Budget & Performance Portal" };

export default function PortalProductPage() {
  return (
    <section className="mx-auto grid max-w-7xl gap-12 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:px-8">
      <div>
        <SectionHeading
          eyebrow="FinCity Budget & Performance Portal"
          title="Bütçe, P&L, nakit akışı ve performans yönetimi için portal altyapısı"
          description="Public tanıtım sayfasındaki dashboard kartları demo amaçlıdır; gerçek müşteri verisi içermez. Portal mimarisi daha sonra güvenli auth ve veri bağlantılarıyla genişletilebilir."
        />
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Button href="/login">Client Login / Panele Giriş</Button>
          <Button href="/iletisim" variant="secondary">Demo Talep Et</Button>
        </div>
        <ul className="mt-10 grid gap-3 text-slate-700">
          {[
            "Bütçe-gerçekleşen karşılaştırması",
            "P&L dashboard ve nakit akışı takibi",
            "Sapma analizi ve yönetici raporları",
            "Şirket bazlı performans izleme",
          ].map((item) => <li className="rounded-2xl bg-white p-4 shadow-sm ring-1 ring-slate-200" key={item}>{item}</li>)}
        </ul>
      </div>
      <PortalMockup />
    </section>
  );
}
