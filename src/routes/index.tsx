import { createFileRoute } from "@tanstack/react-router";
import { Site } from "@/components/Site";
import { langHead } from "@/lib/seo";

export const Route = createFileRoute("/")({
  head: () => langHead("en"),
  component: () => <Site lang="en" />,
});
