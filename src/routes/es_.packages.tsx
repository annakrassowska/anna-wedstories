import { createFileRoute } from "@tanstack/react-router";
import { Site } from "@/components/Site";
import { langHead } from "@/lib/seo";

export const Route = createFileRoute("/es_/packages")({
  head: () => langHead("es", "packages"),
  component: () => <Site lang="es" page="packages" />,
});
