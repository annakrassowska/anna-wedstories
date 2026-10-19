// ============================================================
// SITE CONFIG — edit these values to finish setup.
// ============================================================

/** Your live domain, no trailing slash. Used for canonical + hreflang links. */
export const SITE_URL = "https://annawedstories.com"; // [REPLACE once domain is purchased]

/** WhatsApp number in international format, digits only (e.g. "34600111222").
 *  Leave empty to hide the WhatsApp button. */
export const WHATSAPP_NUMBER = ""; // [WHATSAPPNUMBERWITHCOUNTRYCODE]

/** Full Instagram URL. Leave empty to hide the link. */
export const INSTAGRAM_URL = "https://www.instagram.com/anna_wedstories";
export const INSTAGRAM_HANDLE = "anna_wedstories";

/** Inquiry form (Tally). The contact section opens this public link in a new tab.
 *  (The editor link /forms/xXkebo is private; /r/xXkebo is the shareable one.) */
export const TALLY_URL = "https://tally.so/r/xXkebo";

export function whatsappLink(message: string) {
  const n = WHATSAPP_NUMBER.replace(/\D/g, "");
  if (!n) return null;
  return `https://wa.me/${n}?text=${encodeURIComponent(message)}`;
}
