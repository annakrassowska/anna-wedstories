import { createFileRoute } from "@tanstack/react-router";
import { Site } from "@/components/Site";
import { langHead } from "@/lib/seo";

export const Route = createFileRoute("/pl")({
  head: () => langHead("pl"),
  component: () => <Site lang="pl" />,
});
