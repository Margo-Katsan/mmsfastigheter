"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowUpRight } from "lucide-react";

import { navigation } from "@/data/navigation";
import { buttonStyles } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const triggerRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!isOpen) return;

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsOpen(false);
        triggerRef.current?.focus();
      }
    }

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener(
        "keydown",
        handleKeyDown
      );
    };
  }, [isOpen]);

  return (
    <div className="lg:hidden">
      <button
        ref={triggerRef}
        type="button"
        aria-label={isOpen ? "Stäng meny" : "Öppna meny"}
        aria-expanded={isOpen}
        aria-controls="mobile-navigation"
        onClick={() => setIsOpen((previous) => !previous)}
        className="flex size-11 items-center justify-center rounded-button text-primary transition-colors hover:bg-primary/5"
      >
        {isOpen ? (
          <X size={26} strokeWidth={1.5} />
        ) : (
          <Menu size={26} strokeWidth={1.5} />
        )}
      </button>

      {isOpen && (
        <div
          id="mobile-navigation"
          className="absolute inset-x-0 top-full max-h-[calc(100dvh-80px)] overflow-y-auto border-b border-border bg-surface px-6 py-6 shadow-elevated"
        >
          <nav
            aria-label="Mobilnavigation"
            className="flex flex-col"
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
                  onClick={() => setIsOpen(false)}
                  aria-current={
                    pathname === href ? "page" : undefined
                  }
                  className={cn(
                    "flex items-center justify-between border-b border-border py-4 text-lg font-medium",
                    isActive
                      ? "text-primary"
                      : "text-muted hover:text-primary"
                  )}
                >
                  {label}

                  <ArrowUpRight
                    size={18}
                    strokeWidth={1.5}
                    aria-hidden="true"
                  />
                </Link>
              );
            })}

            <Link
              href="/felanmalan"
              onClick={() => setIsOpen(false)}
              className="py-4 text-sm text-muted"
            >
              Felanmälan
            </Link>

            <Link
              href="/kontakt"
              onClick={() => setIsOpen(false)}
              className={buttonStyles({
                size: "lg",
                className: "mt-4 w-full",
              })}
            >
              Kontakta oss
              <ArrowUpRight size={18} />
            </Link>
          </nav>
        </div>
      )}
    </div>
  );
}