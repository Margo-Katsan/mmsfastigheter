import Link from "next/link";
import { SearchX, RotateCcw } from "lucide-react";

import { buttonStyles } from "@/components/ui/Button";

export function PropertyEmptyState() {
  return (
    <div className="flex flex-col items-center rounded-card border border-dashed border-border bg-surface px-6 py-16 text-center sm:py-24">
      <div className="flex size-20 items-center justify-center rounded-full bg-primary/8">
        <SearchX
          size={36}
          strokeWidth={1.25}
          className="text-primary"
          aria-hidden="true"
        />
      </div>

      <h2 className="mt-6 font-display text-3xl text-foreground">
        Inga fastigheter hittades
      </h2>

      <p className="mt-4 max-w-md text-sm leading-relaxed text-muted sm:text-base">
        Vi kunde inte hitta några fastigheter som matchar
        dina sökkriterier. Prova att ändra eller återställa
        dina filter.
      </p>

      <Link
        href="/fastigheter"
        className={buttonStyles({
          className: "mt-8",
        })}
      >
        <RotateCcw size={17} aria-hidden="true" />

        Rensa alla filter
      </Link>
    </div>
  );
}