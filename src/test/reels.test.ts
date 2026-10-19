import { describe, expect, it } from "vitest";
import { INSTAGRAM_HANDLE, INSTAGRAM_URL } from "@/content/site";
import { REELS } from "@/content/reels";
import { dict } from "@/content/i18n";

describe("Instagram and reels", () => {
  it("links to Anna's real Instagram profile", () => {
    expect(INSTAGRAM_URL).toBe("https://www.instagram.com/anna_wedstories");
    expect(INSTAGRAM_HANDLE).toBe("anna_wedstories");
  });

  it("every reel card opens a real link and has a cover image", () => {
    expect(REELS.length).toBeGreaterThan(0);
    for (const reel of REELS) {
      expect(reel.url.startsWith("https://")).toBe(true);
      expect(reel.thumb.length).toBeGreaterThan(0);
    }
  });

  it("describes every reel cover in all three languages", () => {
    for (const lang of ["en", "es", "pl"] as const) {
      expect(dict[lang].reels.alts).toHaveLength(REELS.length);
      expect(dict[lang].reels.follow).toContain(INSTAGRAM_HANDLE);
    }
  });
});
