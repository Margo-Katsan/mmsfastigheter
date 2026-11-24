import { Hero } from "@/components/sections/Hero";
import { Statistics } from "@/components/sections/Statistics";
import { FeaturedProperties } from "@/components/sections/FeaturedProperties";
import { Projects } from "@/components/sections/Projects";
import { About } from "@/components/sections/About";
import { ContactCTA } from "@/components/sections/ContactCTA";

export default function Home() {
  return (
    <main className="flex-1">
      <Hero />
      <Statistics />
      <FeaturedProperties />
      <Projects />
      <About />
      <ContactCTA />
    </main>
  );
}