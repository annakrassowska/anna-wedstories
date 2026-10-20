// Every in-page link must land on a section that exists on the page.
// Catches dead anchors left behind when a section is removed.
import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import { describe, expect, it } from "vitest";

const site = readFileSync(resolve(process.cwd(), "src/components/Site.tsx"), "utf8");

describe("In-page navigation", () => {
  const targets = [...site.matchAll(/href="#([\w-]+)"/g)].map((m) => m[1]);
  const ids = new Set([...site.matchAll(/id="([\w-]+)"/g)].map((m) => m[1]));

  it("has at least one in-page link to check", () => {
    expect(targets.length).toBeGreaterThan(0);
  });

  it.each([...new Set(targets)])("points #%s at a section that exists", (target) => {
    expect(ids.has(target)).toBe(true);
  });
});
