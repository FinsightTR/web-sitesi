import Link from "next/link";
import { BrandLogo } from "@/components/brand-logo";
import { legalLinks, navItems } from "@/lib/content";

export function SiteFooter() {
  return (
    <footer className="border-t border-zinc-200 bg-zinc-950 text-white">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-14 sm:px-6 md:grid-cols-[1.35fr_1fr_1.1fr] lg:px-8">
        <div>
          <BrandLogo imageClassName="h-12 rounded-xl bg-white p-1" />
          <p className="mt-5 max-w-md text-sm leading-7 text-zinc-300">
            Finansal uzmanlığı teknolojiyle buluşturan danışmanlık, raporlama ve dijital çalışma alanı yaklaşımı.
          </p>
          <p className="mt-5 text-sm text-zinc-400">İletişim: yasin@fincity.com.tr</p>
        </div>
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-zinc-100">Site Haritası</p>
          <div className="mt-5 grid gap-3 text-sm text-zinc-300">
            {navItems.map((item) => <Link className="transition hover:text-white" href={item.href} key={item.href}>{item.label}</Link>)}
          </div>
        </div>
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-zinc-100">Yasal</p>
          <div className="mt-5 grid gap-3 text-sm text-zinc-300 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2">
            {legalLinks.map((item) => <Link className="transition hover:text-white" href={`/yasal/${item.slug}`} key={item.slug}>{item.label}</Link>)}
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 px-4 py-5 text-center text-sm text-zinc-400">© 2026 FinCity. Tüm hakları saklıdır.</div>
    </footer>
  );
}
