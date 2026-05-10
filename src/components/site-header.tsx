import Link from "next/link";
import { navItems } from "@/lib/content";
import { Button } from "@/components/button";
import { BrandLogo } from "@/components/brand-logo";
import { createClient } from "@/lib/supabase/server";

export async function SiteHeader() {
  const supabase = await createClient();
  const { data: { user } } = supabase ? await supabase.auth.getUser() : { data: { user: null } };
  const workspaceHref = user ? "/portal" : "/login";
  const workspaceLabel = user ? "Çalışma Alanı" : "Çalışma Alanına Geç";

  return (
    <header className="sticky top-0 z-50 border-b border-zinc-200/80 bg-white/95 shadow-sm shadow-zinc-950/[0.03] backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between gap-5 px-4 py-3.5 sm:px-6 lg:px-8" aria-label="Ana menü">
        <BrandLogo priority imageClassName="h-11" />
        <div className="hidden items-center gap-7 md:flex">
          {navItems.map((item) => (
            <Link className="text-sm font-semibold text-zinc-600 transition hover:text-zinc-950" href={item.href} key={item.href}>
              {item.label}
            </Link>
          ))}
        </div>
        <div className="hidden md:block">
          <Button href={workspaceHref} variant="primary" className="!text-white hover:!text-white">
            {workspaceLabel}
          </Button>
        </div>
        <Link className="rounded-full border border-zinc-300 px-4 py-2 text-sm font-semibold text-zinc-800 md:hidden" href={workspaceHref}>
          {user ? "Çalışma Alanı" : "Giriş"}
        </Link>
      </nav>
    </header>
  );
}
