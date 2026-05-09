import Link from "next/link";
import { navItems } from "@/lib/content";
import { Button } from "@/components/button";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/90 backdrop-blur">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8" aria-label="Ana menü">
        <Link href="/" className="flex items-center gap-3 font-bold text-slate-950" aria-label="FinCity ana sayfa">
          <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-blue-800 text-white shadow-lg shadow-blue-900/20">FC</span>
          <span>FinCity</span>
        </Link>
        <div className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => (
            <Link className="text-sm font-medium text-slate-600 hover:text-blue-800" href={item.href} key={item.href}>
              {item.label}
            </Link>
          ))}
        </div>
        <div className="hidden md:block">
          <Button href="/login" variant="secondary">Panele Giriş</Button>
        </div>
        <Link className="rounded-full border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700 md:hidden" href="/login">
          Giriş
        </Link>
      </nav>
    </header>
  );
}
