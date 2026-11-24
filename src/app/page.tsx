export default function Home() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
      <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-primary">
        Fastigheter · Projekt · Utveckling
      </p>

      <h1 className="max-w-3xl text-4xl leading-tight md:text-6xl">
        Fastigheter med värde idag och i morgon.
      </h1>

      <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
        Vi äger, förvaltar och utvecklar fastigheter
        i Skåne sedan 1984.
      </p>

      <div className="mt-8 flex flex-wrap gap-4">
        <button className="rounded-button bg-primary px-6 py-3 font-medium text-white transition-colors hover:bg-primary-dark">
          Se våra objekt
        </button>

        <button className="rounded-button border border-primary px-6 py-3 font-medium text-primary transition-colors hover:bg-primary/5">
          Kontakta oss
        </button>
      </div>
    </main>
  );
}