import { Container } from "@/components/ui/Container";

export default function Home() {
  return (
    <main className="flex-1">
      <Container className="py-24">
        <h1 className="max-w-3xl text-4xl leading-tight md:text-6xl">
          Fastigheter med värde idag och i morgon.
        </h1>

        <p className="mt-6 max-w-xl text-lg text-muted">
          Vi äger, förvaltar och utvecklar fastigheter
          i Skåne sedan 1984.
        </p>
      </Container>
    </main>
  );
}