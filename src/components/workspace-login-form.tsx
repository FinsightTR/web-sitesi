"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";

type Status = { type: "idle" | "error"; message: string };

export function WorkspaceLoginForm() {
  const router = useRouter();
  const [status, setStatus] = useState<Status>({ type: "idle", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus({ type: "idle", message: "" });
    setIsSubmitting(true);

    const formData = new FormData(event.currentTarget);
    const email = String(formData.get("email") ?? "").trim();
    const password = String(formData.get("password") ?? "");
    const supabase = createClient();

    if (!supabase) {
      setStatus({ type: "error", message: "Çalışma alanı girişi şu anda yapılandırılmadı." });
      setIsSubmitting(false);
      return;
    }

    const { error } = await supabase.auth.signInWithPassword({ email, password });

    if (error) {
      setStatus({ type: "error", message: "Giriş bilgileri doğrulanamadı." });
      setIsSubmitting(false);
      return;
    }

    router.push("/portal");
    router.refresh();
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-[2rem] border border-zinc-200 bg-white p-8 shadow-2xl shadow-zinc-950/10">
      <div className="mb-8 border-b border-zinc-200 pb-6">
        <p className="text-sm font-bold uppercase tracking-[0.22em] text-zinc-500">Güvenli giriş</p>
        <h2 className="mt-3 text-2xl font-bold text-zinc-950">Çalışma alanı girişi</h2>
        <p className="mt-2 text-sm leading-6 text-zinc-600">FinCity tarafından tanımlanan kullanıcı hesabınızla giriş yapın.</p>
      </div>
      <label className="grid gap-2 text-sm font-semibold text-zinc-700">
        E-posta
        <input required name="email" type="email" placeholder="kullanici@firma.com" autoComplete="email" className="rounded-2xl border border-zinc-300 bg-white px-4 py-3 font-normal text-zinc-950 outline-none focus:border-[#b88a2a]" />
      </label>
      <label className="mt-4 grid gap-2 text-sm font-semibold text-zinc-700">
        Şifre
        <input required name="password" type="password" placeholder="••••••••" autoComplete="current-password" className="rounded-2xl border border-zinc-300 bg-white px-4 py-3 font-normal text-zinc-950 outline-none focus:border-[#b88a2a]" />
      </label>
      <button type="submit" disabled={isSubmitting} className="mt-6 w-full rounded-full bg-zinc-950 px-5 py-3 text-sm font-bold text-white transition hover:bg-zinc-800 disabled:cursor-not-allowed disabled:bg-zinc-400">
        {isSubmitting ? "Kontrol ediliyor..." : "Giriş Yap"}
      </button>
      {status.message ? (
        <p className="mt-4 rounded-2xl bg-red-50 px-4 py-3 text-sm font-semibold text-red-700">{status.message}</p>
      ) : null}
      <div className="mt-4 flex flex-wrap items-center justify-between gap-3 text-xs text-zinc-500">
        <span>Hesap erişimi için FinCity ile iletişime geçin.</span>
        <span className="font-semibold text-zinc-700">Şifremi unuttum</span>
      </div>
    </form>
  );
}
