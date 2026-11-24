import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PropertyCard } from "@/components/ui/PropertyCard";
import { properties } from "@/data/properties";

export function Properties() {
  return (
    <section className="bg-background py-20 lg:py-24">
      <Container>
        <SectionHeading
          eyebrow="Fastigheter & projekt"
          title="Aktuella objekt och utvecklingsmöjligheter."
          description="Här hittar du våra projekt, fastigheter till salu och objekt för uthyrning."
        />

        <div className="mt-12 space-y-8">
          {properties.map((property) => (
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