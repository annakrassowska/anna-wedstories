import { describe, expect, it } from "vitest";
import { dict, LANGS, type Dict } from "@/content/i18n";

type Item = Dict["packages"]["items"][number];
type AddOn = Dict["packages"]["addOns"]["items"][number];
type Fee = Dict["packages"]["travel"]["items"][number];

const num = (s: string) => Number(s.match(/\d+/)?.[0]);

describe.each(LANGS)("Packages page (%s)", (lang) => {
  const p = dict[lang].packages;
  const [basic, complete] = p.items as [Item, Item];
  const [extraHour, staticVideo] = p.addOns.items as [AddOn, AddOn];
  const [nearby, marbella, other] = p.travel.items as [Fee, Fee, Fee];

  it("offers exactly two packages: Basic and The Complete Story", () => {
    expect(p.items.map((i) => i.name)).toEqual(["BASIC", "THE COMPLETE STORY"]);
  });

  it("charges €290 for Basic and €490 for The Complete Story, before VAT", () => {
    expect(num(basic.price)).toBe(290);
    expect(num(complete.price)).toBe(490);
    expect(basic.price).toContain("IVA");
    expect(complete.price).toContain("IVA");
  });

  it("covers 4 hours with Basic and up to 12 hours with The Complete Story", () => {
    expect(num(basic.hours)).toBe(4);
    expect(num(complete.hours)).toBe(12);
  });

  it("lists the coverage moments and the included deliverables", () => {
    expect(basic.coverage).toHaveLength(3);
    expect(complete.coverage).toHaveLength(6);
    expect(basic.included.some((f) => /^2\b.*reel/i.test(f))).toBe(true);
    expect(complete.included.some((f) => /^3\b.*reel/i.test(f))).toBe(true);
  });

  it("sells the extra hour at €50 and the static video at €100", () => {
    expect(num(extraHour.price)).toBe(50);
    expect(num(staticVideo.price)).toBe(100);
    expect(extraHour.price).toContain("IVA");
    expect(staticVideo.price).toContain("IVA");
  });

  it("travels free within 15 km of Málaga and charges €50 in Marbella", () => {
    expect(nearby.place).toContain("15");
    expect(nearby.fee).toMatch(/free|gratis|bezpłatn/i);
    expect(marbella.place).toBe("Marbella");
    expect(num(marbella.fee)).toBe(50);
    expect(other.fee.length).toBeGreaterThan(0);
  });
});
