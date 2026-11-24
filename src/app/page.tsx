import { Hero } from "@/components/sections/Hero";
import { Statistics } from "@/components/sections/Statistics";
import { FeaturedProperties } from "@/components/sections/FeaturedProperties";
import { Projects } from "@/components/sections/Projects";
import { About } from "@/components/sections/About";
import { ContactCTA } from "@/components/sections/ContactCTA";

import { JsonLd } from "@/components/seo/JsonLd";

import {
  organizationJsonLd,
  websiteJsonLd,
} from "@/lib/structured-data";

import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "MMS Fastigheter – Fastigheter i Skåne sedan 1984",
  description:
    "Vi äger, förvaltar och utvecklar bostäder och kommersiella fastigheter i Skåne. Se våra fastigheter och aktuella projekt.",
  path: "/",
  absoluteTitle: true,
});

export default function Home() {
  return (
    <main className="flex-1">
      <JsonLd data={organizationJsonLd} />
      <JsonLd data={websiteJsonLd} />

      <Hero />
      <Statistics />
      <FeaturedProperties />
      <Projects />
      <About />
      <ContactCTA />
    </main>
  );
}