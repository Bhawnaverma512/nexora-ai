import { createFileRoute } from "@tanstack/react-router";
import { ContentPage, NexoraLayout } from "@/components/nexora-site";

export const Route = createFileRoute("/about")({
  component: Page,
  head: () => ({
    meta: [
      { title: "About Nexora AI — Practical AI for Small Business" },
      { name: "description", content: "Learn how Nexora AI helps small businesses adopt practical, human-centered AI and business automation." },
      { property: "og:title", content: "About Nexora AI — Practical AI for Small Business" },
      { property: "og:description", content: "Learn how Nexora AI helps small businesses adopt practical, human-centered AI and business automation." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});

function Page() {
  return <NexoraLayout><ContentPage page="about" /></NexoraLayout>;
}
