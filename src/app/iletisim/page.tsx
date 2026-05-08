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
          title="Finansal yönetim ihtiyaçlarınızı birlikte değerlendirelim"
          description="Form gönderimleri otomatik cevap üretmez. Güvenli mail provider yapılandırıldığında mesajlar yasin@fincity.com.tr adresine iletilir."
        />
        <div className="mt-8 rounded-3xl bg-slate-950 p-6 text-white">
          <p className="font-semibold">Kurulum için gerekli environment variable listesi</p>
          <ul className="mt-4 grid gap-2 text-sm text-slate-300">
            <li>CONTACT_TO_EMAIL=yasin@fincity.com.tr</li>
            <li>CONTACT_FROM_EMAIL=noreply@fincity.com.tr</li>
            <li>CONTACT_PROVIDER=resend veya sendgrid</li>
            <li>RESEND_API_KEY veya SENDGRID_API_KEY</li>
          </ul>
        </div>
      </div>
      <ContactForm />
    </section>
  );
}
