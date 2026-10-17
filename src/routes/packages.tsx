import { createFileRoute } from "@tanstack/react-router";
import { Site } from "@/components/Site";
import { langHead } from "@/lib/seo";

export const Route = createFileRoute("/packages")({
  head: () => langHead("en", "packages"),
  component: () => <Site lang="en" page="packages" />,
});
