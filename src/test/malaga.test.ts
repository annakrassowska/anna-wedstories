// The Málaga landing page must keep Anna's real prices, coverage wording and
// equipment, be reachable at its own address, and be listed in the sitemap.
import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import { QueryClient } from "@tanstack/react-query";
import { createRouter } from "@tanstack/react-router";
import { describe, expect, it } from "vitest";

import { routeTree } from "@/routeTree.gen";
import { dict, MALAGA_PATH, malagaPath } from "@/content/i18n";
import { malaga } from "@/content/malaga";
import { sitemapStaticPaths } from "@/lib/sitemap";

const router = () => createRouter({ routeTree, context: { queryClient: new QueryClient() } });

describe("Wedding content creator Málaga landing page", () => {
  it("is reachable at /wedding-content-creator-malaga", () => {
    const matches = router().matchRoutes(MALAGA_PATH);
    expect(matches.at(-1)?.routeId).toContain("wedding-content-creator-malaga");
  });

  it("is listed in the sitemap", () => {
    expect(sitemapStaticPaths(router())).toContain(MALAGA_PATH);
  });

  it("falls back to the language home page for Spanish and Polish", () => {
    expect(malagaPath("en")).toBe("/wedding-content-creator-malaga");
    expect(malagaPath("es")).toBe("/es");
    expect(malagaPath("pl")).toBe("/pl");
  });

  it("quotes the same prices and hours as the package pages", () => {
    const en = dict.en.packages.items;
    expect(malaga.packages.items.map((i) => [i.name, i.hours, i.price])).toEqual(
      en.map((i) => [i.name, i.hours, i.price]),
    );
  });

  it("quotes the same travel fees as the package pages", () => {
    expect(malaga.local.travel).toEqual(dict.en.packages.travel.items);
  });

  it("keeps the coverage wording Anna confirmed", () => {
    const text = JSON.stringify(malaga);
    expect(text).toMatch(/1 hour before the ceremony/i);
    expect(text).toMatch(/couple moments/i);
    expect(text).not.toMatch(/portrait/i);
  });

  it("names the equipment and delivery time Anna actually uses", () => {
    const text = JSON.stringify(malaga);
    expect(text).toMatch(/iPhone/);
    expect(text).toMatch(/DJI Osmo Pocket/);
    expect(text).toMatch(/within 24 hours/i);
    expect(text).not.toMatch(/micro/i);
  });

  it("has no unfinished owner notes in the copy", () => {
    expect(JSON.stringify(malaga)).not.toMatch(/\[[A-Za-z]/);
  });

  it("points its canonical and structured data at itself, not at the home page", () => {
    const route = readFileSync(
      resolve(process.cwd(), "src/routes/wedding-content-creator-malaga.tsx"),
      "utf8",
    );
    expect(route).toMatch(/staticData: \{ sitemap: true \}/);
    expect(route).toContain('rel: "canonical"');
    expect(route).toContain("MALAGA_PATH");
    expect(route).not.toMatch(/og:image/);
  });

  it("is linked from the footer of every page", () => {
    const site = readFileSync(resolve(process.cwd(), "src/components/Site.tsx"), "utf8");
    expect(site).toContain("<Link to={MALAGA_PATH}");
  });
});
