import { createFileRoute } from "@tanstack/react-router";
import { ContentPage, NexoraLayout } from "@/components/nexora-site";

export const Route = createFileRoute("/industries")({
  component: Page,
  head: () => ({
    meta: [
      { title: "Industries — Nexora AI" },
      { name: "description", content: "See practical AI use cases for dental clinics, real estate, retail and service businesses." },
      { property: "og:title", content: "Industries — Nexora AI" },
      { property: "og:description", content: "See practical AI use cases for dental clinics, real estate, retail and service businesses." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});

function Page() {
  return <NexoraLayout><ContentPage page="industries" /></NexoraLayout>;
}
