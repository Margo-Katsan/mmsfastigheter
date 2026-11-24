import type { Metadata } from "next";

import { AboutHero } from "@/components/about/AboutHero";
import { CompanyStory } from "@/components/about/CompanyStory";
import { CompanyServices } from "@/components/about/CompanyServices";
import { CompanyTeam } from "@/components/about/CompanyTeam";

import { Statistics } from "@/components/sections/Statistics";
import { ContactCTA } from "@/components/sections/ContactCTA";

export const metadata: Metadata = {
  title: "Om oss",
  description:
    "Lär känna MMS Fastigheter. Sedan 1984 äger, förvaltar och utvecklar vi bostäder och kommersiella fastigheter i Skåne.",

  openGraph: {
    title: "Om MMS Fastigheter",
    description:
      "Fastighetsägande, förvaltning och utveckling i Skåne sedan 1984.",
    type: "website",
    locale: "sv_SE",
    images: [
      {
        url: "/images/building-courtyard.jpg",
        alt: "MMS Fastigheter – fastighetsutveckling i Skåne",
      },
    ],
  },
};

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