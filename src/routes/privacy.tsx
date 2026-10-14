import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — Anna WedStories" },
      { name: "description", content: "How Anna WedStories handles the personal details you share through the inquiry form." },
      { property: "og:title", content: "Privacy Policy — Anna WedStories" },
      { property: "og:description", content: "How Anna WedStories handles your personal details." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: Privacy,
});

function Privacy() {
  return (
    <main className="mx-auto max-w-2xl px-5 py-24">
      <Link to="/" className="eyebrow text-taupe">← Anna WedStories</Link>
      <h1 className="headline mt-8">Privacy Policy</h1>
      <div className="mt-10 space-y-6 leading-relaxed text-muted-foreground">
        <p>Details you send through the inquiry form (name, email, WhatsApp number, wedding date, location and message) are used only to reply to your inquiry.</p>
        <p className="italic text-taupe">[Owner to complete: legal business name, contact email for data requests, form provider used, retention period, and your rights under GDPR. Have this reviewed before publishing.]</p>
        <p>This website does not use advertising or analytics cookies.</p>
      </div>
    </main>
  );
}
