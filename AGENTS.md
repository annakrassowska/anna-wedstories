<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

- Localized package pages reuse the Site shell with a packages mode; language switches retain the current page to keep navigation consistent.
- Use trailing-underscore route filenames for package pages under language URLs so homepage content does not wrap the package page.
- Photos live as plain files in src/assets imported directly by Vite (no .asset.json CDN pointers), so the built site is fully portable to any static host such as Cloudflare Pages.
- Emit JSON-LD structured data through the route head() `meta` array under the `"script:ld+json"` key, never a `scripts` entry — the router only renders the meta form and silently drops the other.


- Sitemap: router-derived helper in src/lib/sitemap.ts + server route src/routes/sitemap[.]xml.ts; every route declares staticData.sitemap (required type). BASE_URL is https://anna-wedstories.com (Anna confirmed 2026-11-04); no lastmod without page-specific timestamps.
- Keyword landing pages (e.g. /wedding-content-creator-malaga) stay single-language: their copy lives in its own module under src/content/, the route reuses the Site shell through a page mode, and the language switch falls back to that language's home page instead of a half-translated copy. Keep such copy free of anything Anna has not supplied (no invented testimonials, venue names or counts).
