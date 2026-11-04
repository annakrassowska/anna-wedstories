import { createFileRoute } from "@tanstack/react-router";
import { Site } from "@/components/Site";
import { langHead } from "@/lib/seo";

export const Route = createFileRoute("/es")({
  staticData: { sitemap: true },
  head: () => langHead("es"),
  component: () => <Site lang="es" />,
});
