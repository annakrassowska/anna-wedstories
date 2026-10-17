import { dict, LANGS, langPath, packagePath, type Lang } from "@/content/i18n";
import { SITE_URL } from "@/content/site";

export function langHead(lang: Lang, page: "home" | "packages" = "home") {
  const path = page === "packages" ? packagePath : langPath;
  const m = page === "packages" ? {
    title: `${dict[lang].packages.eyebrow} — Anna WedStories`,
    description: `${dict[lang].packages.title} Essential, Premium, Exclusive. ${dict[lang].packages.items.map((item) => `${item.name}: ${item.price}`).join(". ")}`,
  } : dict[lang].meta;
  const locale = { en: "en_GB", es: "es_ES", pl: "pl_PL" }[lang];
  return {
    meta: [
      { title: m.title },
      { name: "description", content: m.description },
      { property: "og:title", content: m.title },
      { property: "og:description", content: m.description },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: locale },
      { property: "og:url", content: SITE_URL + path(lang) },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: m.title },
      { name: "twitter:description", content: m.description },
    ],
    links: [
      { rel: "canonical", href: SITE_URL + path(lang) },
      ...LANGS.map((l) => ({ rel: "alternate", hrefLang: l, href: SITE_URL + path(l) })),
      { rel: "alternate", hrefLang: "x-default", href: SITE_URL + path("en") },
    ],
  };
}
