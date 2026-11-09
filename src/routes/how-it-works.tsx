import { createFileRoute } from "@tanstack/react-router";
import { ContentPage, NexoraLayout } from "@/components/nexora-site";

export const Route = createFileRoute("/how-it-works")({
  component: Page,
  head: () => ({
    meta: [
      { title: "How It Works — Nexora AI" },
      { name: "description", content: "Discover Nexora AI’s four-step process: discover, strategize, implement and optimize." },
      { property: "og:title", content: "How It Works — Nexora AI" },
      { property: "og:description", content: "Discover Nexora AI’s four-step process: discover, strategize, implement and optimize." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});

function Page() {
  return <NexoraLayout><ContentPage page="how-it-works" /></NexoraLayout>;
}
