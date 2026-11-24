import Link from "next/link";
import { cn } from "@/lib/utils";

type LogoProps = {
  className?: string;
};

export function Logo({ className }: LogoProps) {
  return (
    <Link
      href="/"
      aria-label="MMS Fastigheter – startsida"
      className={cn(
        "inline-flex shrink-0 flex-col text-primary",
        className
      )}
    >
      <span className="text-3xl leading-none font-bold tracking-[-0.06em]">
        MMS
      </span>

      <span className="mt-1 text-[9px] leading-none font-medium tracking-[0.22em]">
        FASTIGHETER
      </span>
    </Link>
  );
}