"use client";

import { useState } from "react";
import Image from "next/image";

import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";

type PropertyImageProps = {
  src?: string | null;
  alt: string;
  sizes?: string;
  contain?: boolean;
};

export function PropertyImage({
  src,
  alt,
  sizes = "(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 33vw",
  contain = false,
}: PropertyImageProps) {
  const [failedSrc, setFailedSrc] = useState<string | null>(
    null
  );

  if (!src || failedSrc === src) {
    return <ImagePlaceholder />;
  }

  return (
    <Image
  src={src}
  alt={alt}
  fill
  quality={95}
  sizes={sizes}
  onError={() => setFailedSrc(src)}
  className={
    contain
      ? "object-contain"
      : "object-cover transition-transform duration-700 ease-out motion-safe:group-hover:scale-105"
  }
/>
  );
}