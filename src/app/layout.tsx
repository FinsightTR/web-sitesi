import type { Metadata } from "next";
import "./globals.css";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export const metadata: Metadata = {
  title: {
    default: "FinCity | Finansal Uzmanlık ve Dijital Finansal Yönetim",
    template: "%s | FinCity",
  },
  description:
    "FinCity; bütçe, nakit akışı, P&L, performans raporlama ve Teknokent finansal danışmanlığını teknolojiyle buluşturur.",
  metadataBase: new URL("https://fincity.com.tr"),
  openGraph: {
    title: "FinCity",
    description: "Finansal uzmanlığı teknolojiyle buluşturuyoruz.",
    url: "https://fincity.com.tr",
    siteName: "FinCity",
    locale: "tr_TR",
    type: "website",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="tr">
      <body>
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
