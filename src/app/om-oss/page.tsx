import { createMetadata } from "@/lib/seo";

import { AboutHero } from "@/components/about/AboutHero";
import { CompanyStory } from "@/components/about/CompanyStory";
import { CompanyServices } from "@/components/about/CompanyServices";
import { CompanyTeam } from "@/components/about/CompanyTeam";

import { Statistics } from "@/components/sections/Statistics";
import { ContactCTA } from "@/components/sections/ContactCTA";

export const metadata = createMetadata({
  title: "Om oss",
  description:
    "MMS Fastigheter äger, förvaltar och utvecklar bostäder och kommersiella fastigheter i Skåne sedan 1984.",
  path: "/om-oss",
});

export default function AboutPage() {
  return (
    <main className="flex-1">
      <AboutHero />
      <Statistics />
      <CompanyStory />
      <CompanyServices />
      <CompanyTeam />
      <ContactCTA />
    </main>
  );
}