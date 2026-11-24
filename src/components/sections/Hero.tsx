import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Container } from "@/components/ui/Container";
import { buttonStyles } from "@/components/ui/Button";
import { PropertySearch } from "../ui/PropertySearch";


export function Hero() {
  return (
    <section className="relative bg-background">
      <Container className="pt-10 pb-12 lg:pt-14 lg:pb-16">
        <div className="grid items-center gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-14">

          {/* Content */}
          <div className="relative z-10">
            <p className="mb-6 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              Fastigheter · Projekt · Utveckling
            </p>

            <h1 className="font-display text-4xl leading-[1.12] tracking-tight text-foreground sm:text-5xl xl:text-6xl">
              Fastigheter med värde idag och i morgon.
            </h1>

            <p className="mt-6 max-w-lg text-base leading-relaxed text-muted sm:text-lg">
              Vi äger, förvaltar och utvecklar bostäder
              och kommersiella fastigheter i Skåne
              med ett långsiktigt perspektiv.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                href="/fastigheter"
                className={buttonStyles({ size: "lg" })}
              >
                Se våra fastigheter
                <ArrowRight size={18} aria-hidden="true" />
              </Link>

              <Link
                href="/om-oss"
                className={buttonStyles({
                  variant: "outline",
                  size: "lg",
                })}
              >
                Om oss
              </Link>
            </div>

            <div className="mt-10 flex items-center gap-3">
              <span className="h-px w-10 bg-accent" />

              <span className="text-xs font-medium uppercase tracking-widest text-muted">
                Etablerat 1984 · Skåne
              </span>
            </div>
          </div>

          {/* Image */}
          <div className="relative aspect-[4/3] overflow-hidden rounded-card bg-primary/10 lg:aspect-[5/4]">
            <Image
              src="/images/hero-building.jpg"
              alt="Arkitekturvisualisering av en fastighet med tegel- och glasfasad"
              fill
              preload
              sizes="(max-width: 1023px) 100vw, 50vw"
              className="object-cover"
            />

            <div className="absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-transparent" />

            <div className="absolute right-5 bottom-5 left-5">
              <p className="text-xs font-medium uppercase tracking-widest text-white">
                Fastighetsutveckling i Skåne
              </p>
            </div>
          </div>
        </div>

        {/* Property search */}
        <div className="relative z-20 mt-8 lg:mt-10">
          <PropertySearch />
        </div>
      </Container>
    </section>
  );
}