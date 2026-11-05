import { createFileRoute } from "@tanstack/react-router";
import { Site } from "@/components/Site";
import { MALAGA_PATH } from "@/content/i18n";
import { malaga } from "@/content/malaga";
import { EMAIL, INSTAGRAM_URL, SITE_URL } from "@/content/site";

const pageUrl = SITE_URL + MALAGA_PATH;

// Search engines read this as a local business offering a service in Málaga,
// so the offer, the area served and the breadcrumb are published as structured
// data. Prices come from the package pages; nothing here is invented.
const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Anna WedStories",
  description: malaga.meta.description,
  url: pageUrl,
  email: EMAIL,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Málaga",
    addressRegion: "Andalucía",
    addressCountry: "ES",
  },
  areaServed: [
    { "@type": "City", name: "Málaga" },
    { "@type": "City", name: "Marbella" },
    { "@type": "City", name: "Estepona" },
    { "@type": "Place", name: "Costa del Sol" },
  ],
  priceRange: "€290 - €490",
  sameAs: INSTAGRAM_URL ? [INSTAGRAM_URL] : [],
  makesOffer: malaga.packages.items.map((item) => ({
    "@type": "Offer",
    name: `${item.name} — ${item.hours}`,
    price: Number(item.price.replace(/[^\d]/g, "")),
    priceCurrency: "EUR",
    url: pageUrl,
  })),
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL + "/" },
    { "@type": "ListItem", position: 2, name: "Wedding Content Creator in Málaga", item: pageUrl },
  ],
};

export const Route = createFileRoute("/wedding-content-creator-malaga")({
  staticData: { sitemap: true },
  head: () => ({
    meta: [
      { title: malaga.meta.title },
      { name: "description", content: malaga.meta.description },
      { property: "og:title", content: malaga.meta.title },
      { property: "og:description", content: malaga.meta.description },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "en_GB" },
      { property: "og:url", content: pageUrl },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: malaga.meta.title },
      { name: "twitter:description", content: malaga.meta.description },
      { "script:ld+json": serviceSchema },
      { "script:ld+json": breadcrumbSchema },
    ],
    links: [
      { rel: "canonical", href: pageUrl },
      { rel: "alternate", hrefLang: "en", href: pageUrl },
      { rel: "alternate", hrefLang: "x-default", href: pageUrl },
    ],
  }),
  component: () => <Site lang="en" page="malaga" />,
});
