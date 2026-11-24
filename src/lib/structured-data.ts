import { siteConfig } from "@/config/site";
import { company } from "@/data/company";

export const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",

  "@id": `${siteConfig.url}/#organization`,

  name: company.name,
  url: siteConfig.url,
  description: siteConfig.description,

  foundingDate: String(company.established),

  areaServed: {
    "@type": "AdministrativeArea",
    name: company.region,
  },

  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: company.contacts.projects.phoneHref,
      contactType: "property inquiries",
      availableLanguage: "sv",
    },
    {
      "@type": "ContactPoint",
      telephone: company.contacts.finance.phoneHref,
      contactType: "billing support",
      availableLanguage: "sv",
    },
  ],
};

export const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",

  "@id": `${siteConfig.url}/#website`,

  name: siteConfig.name,
  url: siteConfig.url,
  description: siteConfig.description,
  inLanguage: siteConfig.language,

  publisher: {
    "@id": `${siteConfig.url}/#organization`,
  },
};