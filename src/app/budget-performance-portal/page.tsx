import type { Metadata } from "next";
import { Button } from "@/components/button";
import { PortalMockup } from "@/components/portal-mockup";
import { SectionHeading } from "@/components/section-heading";

export const metadata: Metadata = { title: "FinCity Çalışma Alanı ve Budget & Performance Portal" };

const platformAreas = [
  "Raporlama",
  "Bütçe & P&L",
  "Nakit Akışı",
  "Modül Kullanımı",
  "Mali Süreç Bilgi Akışı",
];

export default function PortalProductPage() {
  return (
    <section className="mx-auto grid max-w-7xl gap-12 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:px-8">
      <div>
        <SectionHeading
          eyebrow="FinCity Çalışma Alanı"
          title="Bütçe, P&L ve nakit akışından modüler finans operasyonlarına uzanan platform vizyonu"
          description="Budget & Performance Portal; raporlama, bütçe-gerçekleşen takibi, P&L, nakit akışı ve yönetim raporlarını merkeze alan; ileride modül kullanımı ve mali süreç bilgi akışıyla genişleyebilecek güvenli çalışma alanı yaklaşımıdır. Demo kartlar gerçek müşteri verisi içermez."
        />
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Button href="/login">Çalışma Alanına Geç</Button>
          <Button href="/iletisim" variant="secondary">Demo Talep Et</Button>
        </div>
        <ul className="mt-10 grid gap-3 text-zinc-700">
          {platformAreas.map((item) => <li className="rounded-2xl bg-white p-4 shadow-sm ring-1 ring-zinc-200" key={item}>{item}</li>)}
        </ul>
      </div>
      <PortalMockup />
    </section>
  );
}
