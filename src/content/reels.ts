// ============================================================
// REELS — the vertical clips shown in the "Reels" section.
// ============================================================
// To feature a new reel:
//   1. Open the reel on Instagram, tap "…" → "Copy link"
//      (it looks like https://www.instagram.com/reel/Cxxxxxxxxxx/)
//   2. Paste that link as `url` below.
//   3. Put a vertical cover photo in src/assets and use it as `thumb`.
// Add or remove entries freely — the section adapts to however many you list.

import { INSTAGRAM_URL } from "@/content/site";
import kissCover from "@/assets/IMG_2489.jpg.asset.json";
import dressCover from "@/assets/IMG_2329.jpg.asset.json";
import embraceCover from "@/assets/IMG_2370.jpg.asset.json";

export type Reel = {
  id: string;
  /** Where the card takes the visitor. Replace with the reel's own link. */
  url: string;
  /** Vertical cover image shown in the card. */
  thumb: string;
};

export const REELS: Reel[] = [
  { id: "archway-kiss", url: INSTAGRAM_URL, thumb: kissCover.url },
  { id: "dress-reveal", url: INSTAGRAM_URL, thumb: dressCover.url },
  { id: "bride-and-guest", url: INSTAGRAM_URL, thumb: embraceCover.url },
];
