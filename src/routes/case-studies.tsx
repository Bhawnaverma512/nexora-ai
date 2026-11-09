import { createFileRoute } from "@tanstack/react-router";
import { ContentPage, NexoraLayout } from "@/components/nexora-site";

export const Route = createFileRoute("/case-studies")({
  component: Page,
  head: () => ({
    meta: [
      { title: "Business Scenarios — Nexora AI" },
      { name: "description", content: "Explore illustrative examples of how small businesses can use practical AI and automation." },
      { property: "og:title", content: "Business Scenarios — Nexora AI" },
      { property: "og:description", content: "Explore illustrative examples of how small businesses can use practical AI and automation." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});

function Page() {
  return <NexoraLayout><ContentPage page="case-studies" /></NexoraLayout>;
}
