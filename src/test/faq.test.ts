// The FAQ section must carry the same five questions in every language, and the
// answers must be real copy — never a bracketed placeholder waiting to be written.
import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import { describe, expect, it } from "vitest";

import { dict, LANGS } from "@/content/i18n";

const site = readFileSync(resolve(process.cwd(), "src/components/Site.tsx"), "utf8");

describe("FAQ section", () => {
  it.each(LANGS)("answers the five wedding questions in %s", (lang) => {
    const items = dict[lang].faq.items;
    expect(items).toHaveLength(5);
    for (const item of items) {
      expect(item.q.trim().endsWith("?")).toBe(true);
      expect(item.a.split(" ").length).toBeGreaterThan(10);
      expect(item.a).not.toMatch(/\[[^\]]*\]/);
    }
  });

  it.each(LANGS)("says what she films with and where she travels in %s", (lang) => {
    const answers = dict[lang].faq.items.map((item) => item.a).join(" ");
    expect(answers).toMatch(/iPhone/i);
    expect(answers).toMatch(/Osmo Pocket/i);
    expect(answers).toMatch(/Málaga|Maladze/);
    expect(answers).toMatch(/Costa del Sol/);
    expect(answers).not.toMatch(/micro|micr(ó|o)fon|mikrofon/i);
  });



  it("renders the FAQ as a page section with its own anchor", () => {
    expect(site).toMatch(/<Faq t=\{t\} \/>/);
    expect(site).toMatch(/id="faq"/);
  });
});
