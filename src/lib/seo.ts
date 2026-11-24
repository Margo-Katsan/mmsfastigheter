import type { Metadata } from "next";

import { siteConfig } from "@/config/site";

type CreateMetadataOptions = {
  title: string;
  description: string;
  path?: string;
  image?: string | null;
  absoluteTitle?: boolean;
  noIndex?: boolean;
};

export function createMetadata({
  title,
  description,
  path = "/",
  image,
  absoluteTitle = false,
  noIndex = false,
}: CreateMetadataOptions): Metadata {
  const fullTitle = absoluteTitle
    ? title
    : `${title} | ${siteConfig.name}`;

  const url = new URL(path, siteConfig.url).toString();

  const imageUrl = new URL(
    image || siteConfig.ogImage,
    siteConfig.url
  ).toString();

  const indexable = siteConfig.indexable && !noIndex;

  return {
    title: absoluteTitle
      ? { absolute: title }
      : title,

    description,

    alternates: {
      canonical: url,
    },

    robots: {
      index: indexable,
      follow: indexable,
    },

    openGraph: {
      type: "website",
      locale: siteConfig.locale,
      url,
      siteName: siteConfig.name,
      title: fullTitle,
      description,
      images: [
        {
          url: imageUrl,
          alt: fullTitle,
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [imageUrl],
    },
  };
}