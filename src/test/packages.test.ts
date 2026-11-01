import { describe, expect, it } from "vitest";
import { dict, LANGS } from "@/content/i18n";

const num = (s: string) => Number(s.match(/\d+/)?.[0]);

describe.each(LANGS)("Packages page (%s)", (lang) => {
  const p = dict[lang].packages;

  it("offers exactly two packages: Basic and The Complete Story", () => {
    expect(p.items.map((i) => i.name)).toEqual(["BASIC", "THE COMPLETE STORY"]);
  });

  it.each([[0, 290], [1, 490]])("package %i costs €%i before VAT", (index, amount) => {
    expect(num(p.items[index].price)).toBe(amount);
  });

  it.each([[0, 4], [1, 12]])("package %i covers %i hours", (index, hours) => {
    expect(num(p.items[index].hours)).toBe(hours);
  });

  it("adds VAT on top of every package price", () => {
    expect(p.items.every((i) => i.price.includes("IVA"))).toBe(true);
  });

  it("lists the coverage moments and the included deliverables", () => {
    expect(p.items[0].coverage).toHaveLength(3);
    expect(p.items[1].coverage).toHaveLength(6);
    expect(p.items[0].included.some((f) => /^2\b.*reel/i.test(f))).toBe(true);
    expect(p.items[1].included.some((f) => /^3\b.*reel/i.test(f))).toBe(true);
  });

  it("sells the extra hour at €50 and the static video at €100", () => {
    expect(p.addOns.items.map((a) => num(a.price))).toEqual([50, 100]);
    expect(p.addOns.items.every((a) => a.price.includes("IVA"))).toBe(true);
  });

  it("travels free within 15 km of Málaga and charges €50 in Marbella", () => {
    const [nearby, marbella, other] = p.travel.items;
    expect(nearby.place).toContain("15");
    expect(nearby.fee).toMatch(/free|gratis|bezpłatn/i);
    expect(marbella.place).toBe("Marbella");
    expect(num(marbella.fee)).toBe(50);
    expect(other.fee.length).toBeGreaterThan(0);
  });
});
