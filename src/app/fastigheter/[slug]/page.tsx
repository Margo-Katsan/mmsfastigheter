import { createMetadata } from "@/lib/seo";
import { notFound } from "next/navigation";

import { PropertyDetails } from "@/components/properties/PropertyDetails";
import { RelatedProperties } from "@/components/properties/RelatedProperties";

import { availableProperties } from "@/data/properties";
import { getPropertyBySlug } from "@/lib/property-utils";
import { Metadata } from "next";

type PropertyPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return availableProperties.map((property) => ({
    slug: property.id,
  }));
}

export async function generateMetadata({
  params,
}: PropertyPageProps): Promise<Metadata> {
  const { slug } = await params;

  const property = getPropertyBySlug(slug);

  if (!property) {
    notFound();
  }

  return createMetadata({
    title: `${property.title} – ${property.location}`,
    description: property.description,
    path: property.href,
    image: property.image,
  });
}

export default async function PropertyPage({
  params,
}: PropertyPageProps) {
  const { slug } = await params;

  const property = getPropertyBySlug(slug);

  if (!property) {
    notFound();
  }

  return (
    <main className="flex-1">
      <PropertyDetails property={property} />

      <RelatedProperties property={property} />
    </main>
  );
}