import type { Metadata } from "next";
import Link from "next/link";
import { Suspense } from "react";
import { ChevronRight, House } from "lucide-react";

import { Container } from "@/components/ui/Container";

import { PropertyCatalog } from "@/components/properties/PropertyCatalog";

import { PropertyCatalogSkeleton } from "@/components/properties/PropertyCatalogSkeleton";

import type {
  PropertySearchParams,
} from "@/types/property";

export const metadata: Metadata = {
  title: "Våra fastigheter",
  description:
    "Utforska MMS Fastigheters aktuella fastigheter till salu och uthyrning i Skåne. Hitta rätt fastighet för dina behov.",
};

type PropertiesPageProps = {
  searchParams: Promise<PropertySearchParams>;
};

export default function PropertiesPage({
  searchParams,
}: PropertiesPageProps) {
  return (
    <main className="flex-1 bg-background">
      {/* Page heading */}
      <section className="border-b border-border bg-surface py-10 sm:py-14 lg:py-16">
        <Container>
          <nav
            aria-label="Brödsmulor"
            className="mb-8"
          >
            <ol className="flex items-center gap-2 text-sm">
              <li>
                <Link
                  href="/"
                  className="inline-flex items-center gap-2 text-muted transition-colors hover:text-primary"
                >
                  <House size={15} aria-hidden="true" />
                  Hem
                </Link>
              </li>

              <li aria-hidden="true">
                <ChevronRight
                  size={15}
                  className="text-muted"
                />
              </li>

              <li
                aria-current="page"
                className="font-medium text-primary"
              >
                Fastigheter
              </li>
            </ol>
          </nav>

          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            Hitta din nästa fastighet
          </p>

          <h1 className="font-display text-4xl leading-tight text-foreground sm:text-5xl lg:text-6xl">
            Våra fastigheter
          </h1>

          <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
            Utforska våra aktuella fastigheter till salu
            och uthyrning i Skåne. Hitta nya möjligheter
            för ditt företag eller nästa investering.
          </p>
        </Container>
      </section>

      {/* Property catalog */}
      <section className="py-10 sm:py-14 lg:py-20">
        <Container>
          <Suspense fallback={<PropertyCatalogSkeleton />}>
            <PropertyCatalog searchParams={searchParams} />
          </Suspense>
        </Container>
      </section>
    </main>
  );
}