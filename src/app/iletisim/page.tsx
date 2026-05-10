import type { Metadata } from "next";
import { ContactForm } from "@/components/contact-form";
import { SectionHeading } from "@/components/section-heading";

export const metadata: Metadata = { title: "İletişim" };

export default function ContactPage() {
  return (
    <section className="mx-auto grid max-w-7xl gap-12 px-4 py-20 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
      <div>
        <SectionHeading
          eyebrow="İletişim"
          title="FinCity ile çalışma fırsatlarını birlikte değerlendirelim"
          description="Finansal raporlama, Teknokent, Ar-Ge, teşvik, dijital portal ve danışmanlık ihtiyaçlarınız için formu doldurun. Ekibimiz talebinizi değerlendirerek sizinle iletişime geçecektir."
        />
        <div className="mt-8 rounded-3xl bg-zinc-950 p-6 text-white shadow-xl shadow-zinc-950/10">
          <p className="font-semibold text-white">Nasıl ilerliyoruz?</p>
          <ul className="mt-4 grid gap-3 text-sm leading-6 text-zinc-200">
            <li>Talebinizi form üzerinden alıyoruz.</li>
            <li>İhtiyaç alanınızı finans, teşvik, Teknokent, Ar-Ge veya dijital çözüm başlığı altında değerlendiriyoruz.</li>
            <li>Uygun kapsam için sizinle e-posta üzerinden iletişime geçiyoruz.</li>
          </ul>
        </div>
      </div>
      <ContactForm />
    </section>
  );
}
