import { createFileRoute } from "@tanstack/react-router";
import { LegalPage, NexoraLayout } from "@/components/nexora-site";

export const Route = createFileRoute("/terms")({
  component: Page,
  head: () => ({
    meta: [
      { title: "Terms Draft — Nexora AI" },
      { name: "description", content: "Draft website terms for Nexora AI. Please review and replace before publication." },
      { property: "og:title", content: "Terms Draft — Nexora AI" },
      { property: "og:description", content: "Draft website terms for Nexora AI. Please review and replace before publication." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});

function Page() {
  return <NexoraLayout><LegalPage page="terms" /></NexoraLayout>;
}
