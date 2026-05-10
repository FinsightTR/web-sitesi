import Link from "next/link";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
};

export function Button({ href, children, variant = "primary", className }: ButtonProps) {
  const isDarkButton = variant === "primary" || className?.includes("bg-zinc-950") || className?.includes("bg-black");

  return (
    <Link
      href={href}
      style={isDarkButton ? { color: "#ffffff" } : undefined}
      className={cn(
        "inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold transition focus:outline-none focus:ring-2 focus:ring-zinc-500 focus:ring-offset-2",
        variant === "primary" && "bg-zinc-950 !text-white shadow-lg shadow-zinc-950/15 hover:bg-zinc-800 hover:!text-white",
        variant === "secondary" && "border border-zinc-300 bg-white text-zinc-950 hover:border-zinc-500 hover:bg-zinc-50",
        variant === "ghost" && "text-zinc-700 hover:bg-zinc-100 hover:text-zinc-950",
        className,
      )}
    >
      {children}
    </Link>
  );
}
