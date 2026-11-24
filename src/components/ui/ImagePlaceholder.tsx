import { Building2, ImageOff } from "lucide-react";

export function ImagePlaceholder() {
  return (
    <div className="flex h-full min-h-[260px] w-full flex-col items-center justify-center rounded-2xl bg-linear-to-br from-stone-100 to-stone-200 text-center">
      <div className="flex size-16 items-center justify-center rounded-full bg-white/80 shadow-sm">
        <Building2
          size={28}
          strokeWidth={1.5}
          className="text-primary"
        />
      </div>

      <p className="mt-5 text-base font-semibold text-foreground">
        Bild kommer snart
      </p>

      <p className="mt-2 max-w-[220px] text-sm leading-relaxed text-muted">
        Bild för denna fastighet är inte tillgänglig ännu.
      </p>

      <div className="mt-4 inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.18em] text-muted">
        <ImageOff size={14} strokeWidth={1.75} />
        MMS Fastigheter
      </div>
    </div>
  );
}