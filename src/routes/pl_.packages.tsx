import { createFileRoute } from "@tanstack/react-router";
import { Site } from "@/components/Site";
import { langHead } from "@/lib/seo";

export const Route = createFileRoute("/pl_/packages")({
  staticData: { sitemap: true },
  head: () => langHead("pl", "packages"),
  component: () => <Site lang="pl" page="packages" />,
});
