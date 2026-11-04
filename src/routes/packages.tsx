import { createFileRoute } from "@tanstack/react-router";
import { Site } from "@/components/Site";
import { langHead } from "@/lib/seo";

export const Route = createFileRoute("/packages")({
  staticData: { sitemap: true },
  head: () => langHead("en", "packages"),
  component: () => <Site lang="en" page="packages" />,
});
