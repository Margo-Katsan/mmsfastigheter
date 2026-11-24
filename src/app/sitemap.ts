import type { MetadataRoute } from "next";

import { siteConfig } from "@/config/site";
import { properties } from "@/data/properties";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPaths = [
    "/",
    "/fastigheter",
    "/projekt",
    "/om-oss",
    "/kontakt",
    "/felanmalan",
    "/integritetspolicy",
  ];

  const staticPages: MetadataRoute.Sitemap =
    staticPaths.map((path) => ({
      url: new URL(path, siteConfig.url).toString(),
    }));

  const propertyPages: MetadataRoute.Sitemap =
    properties.map((property) => ({
      url: new URL(
        property.href,
        siteConfig.url
      ).toString(),
    }));

  return [...staticPages, ...propertyPages];
}