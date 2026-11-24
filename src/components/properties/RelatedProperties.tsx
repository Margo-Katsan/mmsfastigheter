import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PropertyCard } from "@/components/ui/PropertyCard";

import { getRelatedProperties } from "@/lib/property-utils";
import type { Property } from "@/types/property";

type RelatedPropertiesProps = {
  property: Property;
};

export function RelatedProperties({
  property,
}: RelatedPropertiesProps) {
  const related = getRelatedProperties(property);

  if (related.length === 0) {
    return null;
  }

  return (
    <section className="border-t border-border bg-surface py-16 lg:py-24">
      <Container>
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <SectionHeading
            eyebrow="Upptäck fler möjligheter"
            title="Andra fastigheter"
            description="Utforska fler av våra aktuella fastigheter i Skåne."
          />

          <Link
            href="/fastigheter"
            className="inline-flex shrink-0 items-center gap-2 self-start text-sm font-semibold text-primary hover:underline lg:self-auto"
          >
            Se alla fastigheter

            <ArrowRight
              size={18}
              aria-hidden="true"
            />
          </Link>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {related.map((item) => (
            <PropertyCard
              key={item.id}
              property={item}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}