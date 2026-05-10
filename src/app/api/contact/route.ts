import { NextResponse } from "next/server";

const requiredFields = ["name", "company", "email", "message"];
const publicFailureMessage = "Mesajınız şu anda iletilemedi. Lütfen daha sonra tekrar deneyin.";

function getValue(formData: FormData, key: string) {
  return String(formData.get(key) ?? "").trim();
}

export async function POST(request: Request) {
  const formData = await request.formData();

  if (getValue(formData, "website")) {
    return NextResponse.json({ ok: true, message: "Mesajınız FinCity ekibine iletildi." });
  }

  const missing = requiredFields.filter((field) => !getValue(formData, field));

  if (missing.length > 0) {
    return NextResponse.json({ ok: false, message: "Lütfen zorunlu alanları doldurun." }, { status: 400 });
  }

  const provider = process.env.CONTACT_PROVIDER;
  const to = process.env.CONTACT_TO_EMAIL ?? "yasin@fincity.com.tr";
  const from = process.env.CONTACT_FROM_EMAIL ?? "noreply@fincity.com.tr";
  const subject = `FinCity iletişim formu: ${getValue(formData, "company")}`;
  const text = [
    `Ad Soyad: ${getValue(formData, "name")}`,
    `Şirket: ${getValue(formData, "company")}`,
    `E-posta: ${getValue(formData, "email")}`,
    `Hizmet ilgisi: ${getValue(formData, "interest") || "Belirtilmedi"}`,
    "",
    getValue(formData, "message"),
  ].join("\n");

  if (provider === "resend" && process.env.RESEND_API_KEY) {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ from, to, subject, text, reply_to: getValue(formData, "email") }),
    });

    if (!response.ok) {
      return NextResponse.json({ ok: false, message: publicFailureMessage }, { status: 502 });
    }

    return NextResponse.json({ ok: true, message: "Mesajınız FinCity ekibine iletildi." });
  }

  if (provider === "sendgrid" && process.env.SENDGRID_API_KEY) {
    const response = await fetch("https://api.sendgrid.com/v3/mail/send", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.SENDGRID_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        personalizations: [{ to: [{ email: to }] }],
        from: { email: from },
        reply_to: { email: getValue(formData, "email") },
        subject,
        content: [{ type: "text/plain", value: text }],
      }),
    });

    if (!response.ok) {
      return NextResponse.json({ ok: false, message: publicFailureMessage }, { status: 502 });
    }

    return NextResponse.json({ ok: true, message: "Mesajınız FinCity ekibine iletildi." });
  }

  return NextResponse.json({ ok: false, message: publicFailureMessage }, { status: 503 });
}
