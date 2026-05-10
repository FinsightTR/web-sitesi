"use client";

import { FormEvent, useState } from "react";

const interests = [
  "Teknokent Yönetim Danışmanlığı",
  "Ar-Ge & Tasarım Merkezi Danışmanlığı",
  "TÜBİTAK Proje Danışmanlığı",
  "KOSGEB Proje Danışmanlığı",
  "Budget & Performance Portal",
  "Finansal Raporlama ve Muhasebe",
  "Vergi Danışmanlığı",
  "Dijital Hizmetler",
  "Mali Müşavirlik Süreçleri ve Finans Operasyonları",
];

type FormStatus = {
  type: "idle" | "success" | "error";
  message: string;
};

export function ContactForm() {
  const [status, setStatus] = useState<FormStatus>({ type: "idle", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: "idle", message: "" });

    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        body: formData,
      });
      const data = (await response.json()) as { ok?: boolean; message?: string };

      if (!response.ok || !data.ok) {
        setStatus({
          type: "error",
          message: data.message ?? "Mesajınız şu anda iletilemedi. Lütfen daha sonra tekrar deneyin.",
        });
        return;
      }

      setStatus({ type: "success", message: data.message ?? "Mesajınız FinCity ekibine iletildi." });
      form.reset();
    } catch {
      setStatus({
        type: "error",
        message: "Mesajınız şu anda iletilemedi. Lütfen daha sonra tekrar deneyin.",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-xl shadow-zinc-950/10">
      <div className="hidden" aria-hidden="true">
        <label>
          Website
          <input name="website" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <label className="grid gap-2 text-sm font-semibold text-zinc-700">
          Ad Soyad
          <input required name="name" className="rounded-2xl border border-zinc-300 px-4 py-3 font-normal outline-none focus:border-[#b88a2a]" />
        </label>
        <label className="grid gap-2 text-sm font-semibold text-zinc-700">
          Şirket
          <input required name="company" className="rounded-2xl border border-zinc-300 px-4 py-3 font-normal outline-none focus:border-[#b88a2a]" />
        </label>
      </div>
      <label className="mt-4 grid gap-2 text-sm font-semibold text-zinc-700">
        E-posta
        <input required type="email" name="email" className="rounded-2xl border border-zinc-300 px-4 py-3 font-normal outline-none focus:border-[#b88a2a]" />
      </label>
      <label className="mt-4 grid gap-2 text-sm font-semibold text-zinc-700">
        Hizmet ilgisi
        <select name="interest" className="rounded-2xl border border-zinc-300 px-4 py-3 font-normal outline-none focus:border-[#b88a2a]">
          {interests.map((interest) => <option key={interest}>{interest}</option>)}
        </select>
      </label>
      <label className="mt-4 grid gap-2 text-sm font-semibold text-zinc-700">
        Mesaj
        <textarea required name="message" rows={5} className="rounded-2xl border border-zinc-300 px-4 py-3 font-normal outline-none focus:border-[#b88a2a]" />
      </label>
      <button
        type="submit"
        disabled={isSubmitting}
        className="mt-5 w-full rounded-full bg-zinc-950 px-5 py-3 text-sm font-bold text-white transition hover:bg-zinc-800 disabled:cursor-not-allowed disabled:bg-zinc-400"
      >
        {isSubmitting ? "Gönderiliyor..." : "Mesajı Gönder"}
      </button>
      {status.message ? (
        <p className={`mt-3 rounded-2xl px-4 py-3 text-sm ${status.type === "success" ? "bg-emerald-50 text-emerald-700" : "bg-red-50 text-red-700"}`}>
          {status.message}
        </p>
      ) : null}
      <p className="mt-3 text-xs leading-5 text-zinc-500">
        Form gönderimi otomatik cevap üretmez. Talebiniz değerlendirildikten sonra sizinle e-posta üzerinden iletişime geçilir.
      </p>
    </form>
  );
}
