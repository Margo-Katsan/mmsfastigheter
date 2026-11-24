import Image from "next/image";
import { Phone, UserRound, ArrowUpRight } from "lucide-react";

import { cn } from "@/lib/utils";

type ContactCardProps = {
  name: string;
  role: string;
  phone: string;
  phoneHref: string;
  image?: string | null;
  className?: string;
};

export function ContactCard({
  name,
  role,
  phone,
  phoneHref,
  image,
  className,
}: ContactCardProps) {
  return (
    <div
      className={cn(
        "flex flex-wrap items-center gap-4",
        className
      )}
    >
      <div className="relative flex size-16 shrink-0 items-center justify-center overflow-hidden rounded-full bg-primary/10 sm:size-20">
        {image ? (
          <Image
            src={image}
            alt={name}
            fill
            sizes="80px"
            className="object-cover"
          />
        ) : (
          <UserRound
            size={32}
            strokeWidth={1.25}
            className="text-primary"
            aria-hidden="true"
          />
        )}
      </div>

      <div className="min-w-0 flex-1">
        <p className="font-semibold text-foreground">
          {name}
        </p>

        <p className="mt-1 text-sm text-muted">
          {role}
        </p>

        <a
          href={`tel:${phoneHref}`}
          className="mt-2 inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
        >
          <Phone
            size={14}
            strokeWidth={1.75}
            aria-hidden="true"
          />

          {phone}
        </a>
      </div>

      <a
        href={`tel:${phoneHref}`}
        aria-label={`Ring ${name}`}
        className="flex size-11 shrink-0 items-center justify-center rounded-full border border-primary/20 text-primary transition-colors hover:bg-primary hover:text-white"
      >
        <ArrowUpRight
          size={20}
          strokeWidth={1.5}
          aria-hidden="true"
        />
      </a>
    </div>
  );
}