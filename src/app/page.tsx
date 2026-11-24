import { Hero } from "@/components/sections/Hero";
import { Statistics } from "@/components/sections/Statistics";
import { Properties } from "@/components/sections/Properties";

export default function Home() {
  return (
    <main className="flex-1">
      <Hero />
      <Statistics />
      <Properties />
    </main>
  );
}