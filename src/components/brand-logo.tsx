import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

type BrandLogoProps = {
  className?: string;
  imageClassName?: string;
  priority?: boolean;
};

export function BrandLogo({ className, imageClassName, priority = false }: BrandLogoProps) {
  return (
    <Link href="/" className={cn("inline-flex items-center", className)} aria-label="FinCity ana sayfa">
      <Image
        src="/fincity-logo.svg"
        alt="FinCity"
        width={184}
        height={48}
        priority={priority}
        className={cn("h-10 w-auto object-contain", imageClassName)}
      />
    </Link>
  );
}
