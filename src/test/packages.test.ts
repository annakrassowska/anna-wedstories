import { describe, expect, it } from "vitest";
import { dict, LANGS } from "@/content/i18n";

describe.each(LANGS)("Package starting prices (%s)", (lang) => {
  it.each([[0, 290], [1, 350], [2, 450]])("package %i starts at €%i before VAT", (index, amount) => {
    const price = dict[lang].packages.items[index]?.price ?? "";
    expect(Number(price.match(/\d+/)?.[0])).toBe(amount);
  });
});