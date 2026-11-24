import { Building2 } from "lucide-react";
import { cn } from "@/lib/utils";

type ImagePlaceholderProps = {
  className?: string;
};

export function ImagePlaceholder({
  className,
}: ImagePlaceholderProps) {
  return (
    <div
      className={cn(
        "relative flex h-full w-full items-center justify-center overflow-hidden bg-primary/8",
        className
      )}
    >
      {/* Architectural grid */}
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage: `
            linear-gradient(to right, #193c2f 1px, transparent 1px),
            linear-gradient(to bottom, #193c2f 1px, transparent 1px)
          `,
          backgroundSize: "24px 24px",
        }}
      />

      <div className="relative flex flex-col items-center px-4 py-8 text-center">
        <div className="flex size-14 items-center justify-center rounded-full border border-primary/10 bg-primary/5">
          <Building2
            size={28}
            strokeWidth={1.25}
            className="text-primary"
            aria-hidden="true"
          />
        </div>

        <span className="mt-4 text-4xl font-bold leading-none tracking-[-0.07em] text-primary">
          MMS
        </span>

        <span className="mt-1 text-[9px] font-medium tracking-[0.3em] text-primary">
          FASTIGHETER
        </span>

        <span className="mt-4 h-px w-8 bg-accent" />

        <p className="mt-3 text-xs text-muted">
          Bild saknas
        </p>
      </div>
    </div>
  );
}