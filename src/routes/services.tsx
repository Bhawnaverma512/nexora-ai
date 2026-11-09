import { createFileRoute } from "@tanstack/react-router";
import { ContentPage, NexoraLayout } from "@/components/nexora-site";

export const Route = createFileRoute("/services")({
  component: Page,
  head: () => ({
    meta: [
      { title: "AI Services — Nexora AI" },
      { name: "description", content: "Explore AI consulting, voice reception, workflow automation, chatbots, marketing automation and analytics for small businesses." },
      { property: "og:title", content: "AI Services — Nexora AI" },
      { property: "og:description", content: "Explore AI consulting, voice reception, workflow automation, chatbots, marketing automation and analytics for small businesses." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});

function Page() {
  return <NexoraLayout><ContentPage page="services" /></NexoraLayout>;
}
