import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { PropertyDetails } from "@/components/properties/PropertyDetails";
import { RelatedProperties } from "@/components/properties/RelatedProperties";

import { availableProperties } from "@/data/properties";
import { getPropertyBySlug } from "@/lib/property-utils";

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

  const title = `${property.title} – ${property.location}`;

  return {
    title,
    description: property.description,

    openGraph: {
      title,
      description: property.description,
      type: "website",
      locale: "sv_SE",

      ...(property.image
        ? {
            images: [
              {
                url: property.image,
                alt: title,
              },
            ],
          }
        : {}),
    },
  };
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