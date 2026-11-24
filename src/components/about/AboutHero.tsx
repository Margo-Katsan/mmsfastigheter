import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronRight } from "lucide-react";

import { Container } from "@/components/ui/Container";
import { buttonStyles } from "@/components/ui/Button";
import { company } from "@/data/company";

export function AboutHero() {
  return (
    <section className="overflow-hidden bg-primary-dark text-white">
      <Container className="pt-8 pb-12 lg:pt-10 lg:pb-16">
        {/* Breadcrumbs */}
        <nav aria-label="Brödsmulor">
          <ol className="flex items-center gap-2 text-sm text-white/65">
            <li>
              <Link
                href="/"
                className="transition-colors hover:text-white focus-visible:outline-white"
              >
                Hem
              </Link>
            </li>

            <li aria-hidden="true">
              <ChevronRight size={15} />
            </li>

            <li
              aria-current="page"
              className="text-white"
            >
              Om oss
            </li>
          </ol>
        </nav>

        <div className="mt-10 grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Content */}
          <div>
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-accent">
              MMS Fastigheter · Sedan {company.established}
            </p>

            <h1 className="font-display text-4xl leading-[1.12] tracking-tight text-white sm:text-5xl xl:text-6xl">
              Vi utvecklar fastigheter med långsiktigt värde.
            </h1>

            <p className="mt-6 max-w-lg text-base leading-relaxed text-white/75 sm:text-lg">
              Vi äger, förvaltar och utvecklar bostäder
              och kommersiella fastigheter i Skåne
              med ett långsiktigt perspektiv.
            </p>

            <div className="mt-8">
              <Link
                href="/kontakt"
                className={buttonStyles({
                  size: "lg",
                  className:
                    "bg-white text-primary hover:bg-white/90 focus-visible:outline-white",
                })}
              >
                Kontakta oss
                <ArrowRight size={18} aria-hidden="true" />
              </Link>
            </div>

            <div className="mt-10 flex items-center gap-3">
              <span className="h-px w-10 bg-accent" />

              <span className="text-xs uppercase tracking-widest text-white/60">
                Lokal förankring i Skåne
              </span>
            </div>
          </div>

          {/* Architecture image */}
          <div className="relative aspect-[4/3] overflow-hidden rounded-card bg-primary">
            <Image
              src="/images/building-courtyard.jpg"
              alt="Arkitekturvisualisering av en innergård med tegelbyggnader"
              fill
              preload
              sizes="(max-width: 1023px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}