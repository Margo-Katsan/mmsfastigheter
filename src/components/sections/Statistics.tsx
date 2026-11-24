import { Container } from "@/components/ui/Container";
import { statistics } from "@/data/statistics";

export function Statistics() {
  return (
    <section
      aria-label="MMS Fastigheter i siffror"
      className="border-y border-border bg-surface"
    >
      <Container>
        <dl className="grid divide-y divide-border md:grid-cols-3 md:divide-x md:divide-y-0">
          {statistics.map(({ id, value, label, icon: Icon }) => (
            <div
              key={id}
              className="flex flex-col items-center justify-center gap-4 px-6 py-8 text-center lg:flex-row lg:gap-6 lg:py-10 lg:text-left"
            >
              <Icon
                size={36}
                strokeWidth={1.25}
                className="shrink-0 text-accent"
                aria-hidden="true"
              />

              <div>
                <dt className="sr-only">{label}</dt>

                <dd className="font-display text-3xl leading-tight tracking-tight text-primary xl:text-4xl">
                  {value}
                </dd>

                <p
                  aria-hidden="true"
                  className="mt-2 text-sm leading-relaxed text-muted"
                >
                  {label}
                </p>
              </div>
            </div>
          ))}
        </dl>
      </Container>
    </section>
  );
}