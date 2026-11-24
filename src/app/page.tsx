import { Hero } from "@/components/sections/Hero";
import { Statistics } from "@/components/sections/Statistics";

export default function Home() {
  return (
    <main className="flex-1">
      <Hero />
      <Statistics />
    </main>
  );
}