"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navigation } from "@/data/navigation";
import { cn } from "@/lib/utils";

export function Navigation() {
  const pathname = usePathname();

  return (
    <nav
      aria-label="Huvudnavigation"
      className="hidden items-center gap-8 lg:flex"
    >
      {navigation.map(({ label, href }) => {
        const isActive =
          href === "/"
            ? pathname === "/"
            : pathname === href ||
              pathname.startsWith(`${href}/`);

        return (
          <Link
            key={href}
            href={href}
            aria-current={
              pathname === href ? "page" : undefined
            }
            className={cn(
              "relative py-2 text-sm font-medium",
              "transition-colors hover:text-primary",
              "after:absolute after:inset-x-0 after:bottom-0",
              "after:h-0.5 after:origin-left",
              "after:bg-primary after:transition-transform",
              "motion-reduce:after:transition-none",
              isActive
                ? "text-primary after:scale-x-100"
                : "text-muted after:scale-x-0 hover:after:scale-x-100"
            )}
          >
            {label}
          </Link>
        );
      })}
    </nav>
  );
}