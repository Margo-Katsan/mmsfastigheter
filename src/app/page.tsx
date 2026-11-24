import { Hero } from "@/components/sections/Hero";
import { Statistics } from "@/components/sections/Statistics";
import { FeaturedProperties } from "@/components/sections/FeaturedProperties";
import { Projects } from "@/components/sections/Projects";

export default function Home() {
  return (
    <main className="flex-1">
      <Hero />
      <Statistics />
      <FeaturedProperties />
      <Projects />
    </main>
  );
}