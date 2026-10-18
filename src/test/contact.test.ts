import { describe, expect, it } from "vitest";
import { TALLY_URL } from "@/content/site";

describe("Inquiry form link", () => {
  it("opens the public Tally share link, not the private editor link", () => {
    expect(TALLY_URL).toBe("https://tally.so/r/xXkebo");
    expect(TALLY_URL).not.toContain("/forms/");
  });
});
