import { createFileRoute } from "@tanstack/react-router";
import { Site } from "@/components/Site";
import { langHead } from "@/lib/seo";

export const Route = createFileRoute("/es")({
  head: () => langHead("es"),
  component: () => <Site lang="es" />,
});
