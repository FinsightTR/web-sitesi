# FinCity Web Sitesi

FinCity için modern, kurumsal ve fintech odaklı Next.js web sitesi.

## Kapsam

- Ana sayfa, hakkımızda, hizmetler, Budget & Performance Portal, gündem ve iletişim sayfaları
- `/login` ve `/portal` için gerçek müşteri verisi içermeyen portal altyapısı taslağı
- Yasal footer linkleri için placeholder sayfalar
- TypeScript ve Tailwind CSS tabanlı component mimarisi
- SEO metadata ve Türkçe içerik yapısı

## Güvenli mail yaklaşımı

İletişim formu `/api/contact` route'una gönderilir. Gerçek mail gönderimi için canlı ortamda aşağıdaki environment variable değerleri tanımlanmalıdır:

```env
CONTACT_TO_EMAIL=yasin@fincity.com.tr
CONTACT_FROM_EMAIL=noreply@fincity.com.tr
CONTACT_PROVIDER=resend
RESEND_API_KEY=
```

Alternatif olarak `CONTACT_PROVIDER=sendgrid` ve `SENDGRID_API_KEY` kullanılabilir. Gerçek API key repoya eklenmemelidir.

## Geliştirme

```bash
npm install
npm run dev
npm run lint
npm run build
```

Canlı deploy açık onay olmadan yapılmamalıdır.
