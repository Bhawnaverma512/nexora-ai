import { createFileRoute } from "@tanstack/react-router";
import { ContentPage, NexoraLayout } from "@/components/nexora-site";

export const Route = createFileRoute("/pricing")({
  component: Page,
  head: () => ({
    meta: [
      { title: "Pricing — Nexora AI" },
      { name: "description", content: "Explore tailored AI automation engagements for small businesses and request a custom quote." },
      { property: "og:title", content: "Pricing — Nexora AI" },
      { property: "og:description", content: "Explore tailored AI automation engagements for small businesses and request a custom quote." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});

function Page() {
  return <NexoraLayout><ContentPage page="pricing" /></NexoraLayout>;
}
