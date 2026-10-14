import { dict, LANGS, langPath, type Lang } from "@/content/i18n";
import { SITE_URL } from "@/content/site";

export function langHead(lang: Lang) {
  const m = dict[lang].meta;
  const locale = { en: "en_GB", es: "es_ES", pl: "pl_PL" }[lang];
  return {
    meta: [
      { title: m.title },
      { name: "description", content: m.description },
      { property: "og:title", content: m.title },
      { property: "og:description", content: m.description },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: locale },
      { property: "og:url", content: SITE_URL + langPath(lang) },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: m.title },
      { name: "twitter:description", content: m.description },
    ],
    links: [
      { rel: "canonical", href: SITE_URL + langPath(lang) },
      ...LANGS.map((l) => ({ rel: "alternate", hrefLang: l, href: SITE_URL + langPath(l) })),
      { rel: "alternate", hrefLang: "x-default", href: SITE_URL + "/" },
    ],
  };
}
