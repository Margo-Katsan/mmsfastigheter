import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PropertyCard } from "@/components/ui/PropertyCard";
import { availableProperties } from "@/data/properties";

export function FeaturedProperties() {
  return (
    <section
      id="fastigheter"
      className="bg-background py-16 lg:py-24"
    >
      <Container>
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <SectionHeading
            eyebrow="Utvalda fastigheter"
            title="Aktuella fastigheter till salu och uthyrning"
            description="Upptäck våra fastigheter och nya möjligheter i Skåne."
          />

          <Link
            href="/fastigheter"
            className="inline-flex shrink-0 items-center gap-2 self-start text-sm font-semibold text-primary transition-colors hover:text-primary-dark lg:self-auto"
          >
            Se alla fastigheter
            <ArrowRight size={18} aria-hidden="true" />
          </Link>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {availableProperties.map((property) => (
            <PropertyCard
              key={property.id}
              property={property}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}