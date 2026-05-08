import Link from "next/link";
import { legalLinks, navItems } from "@/lib/content";

export function SiteFooter() {
  return (
    <footer className="border-t border-slate-200 bg-slate-950 text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-[1.3fr_1fr_1fr] lg:px-8">
        <div>
          <p className="text-2xl font-bold">FinCity</p>
          <p className="mt-4 max-w-md text-sm leading-6 text-slate-300">
            Finansal uzmanlığı teknolojiyle buluşturan danışmanlık ve dijital finansal yönetim platformu.
          </p>
          <p className="mt-4 text-sm text-slate-400">İletişim: yasin@fincity.com.tr</p>
        </div>
        <div>
          <p className="font-semibold">Site Haritası</p>
          <div className="mt-4 grid gap-3 text-sm text-slate-300">
            {navItems.map((item) => <Link href={item.href} key={item.href}>{item.label}</Link>)}
          </div>
        </div>
        <div>
          <p className="font-semibold">Yasal</p>
          <div className="mt-4 grid gap-3 text-sm text-slate-300">
            {legalLinks.map((item) => <Link href={`/yasal/${item.slug}`} key={item.slug}>{item.label}</Link>)}
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 px-4 py-5 text-center text-sm text-slate-400">© 2026 FinCity. Tüm hakları saklıdır.</div>
    </footer>
  );
}
