import Link from "next/link";
import { ChevronRight, House } from "lucide-react";

import { cn } from "@/lib/utils";

type BreadcrumbItem = {
  label: string;
  href?: string;
};

type BreadcrumbsProps = {
  items: BreadcrumbItem[];
  className?: string;
};

export function Breadcrumbs({
  items,
  className,
}: BreadcrumbsProps) {
  return (
    <nav
      aria-label="Brödsmulor"
      className={cn("text-sm", className)}
    >
      <ol className="flex flex-wrap items-center gap-x-2 gap-y-2">
        <li>
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-muted transition-colors hover:text-primary"
          >
            <House size={15} aria-hidden="true" />
            Hem
          </Link>
        </li>

        {items.map((item, index) => {
          const isLast = index === items.length - 1;

          return (
            <li
              key={`${item.label}-${index}`}
              className="inline-flex items-center gap-2"
            >
              <ChevronRight
                size={15}
                className="shrink-0 text-muted"
                aria-hidden="true"
              />

              {item.href && !isLast ? (
                <Link
                  href={item.href}
                  className="text-muted transition-colors hover:text-primary"
                >
                  {item.label}
                </Link>
              ) : (
                <span
                  aria-current={isLast ? "page" : undefined}
                  className="font-medium text-primary"
                >
                  {item.label}
                </span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}