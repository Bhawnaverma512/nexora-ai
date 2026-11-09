import { createFileRoute } from "@tanstack/react-router";
import { LegalPage, NexoraLayout } from "@/components/nexora-site";

export const Route = createFileRoute("/privacy")({
  component: Page,
  head: () => ({
    meta: [
      { title: "Privacy Policy Draft — Nexora AI" },
      { name: "description", content: "Draft privacy information for consultation requests to Nexora AI." },
      { property: "og:title", content: "Privacy Policy Draft — Nexora AI" },
      { property: "og:description", content: "Draft privacy information for consultation requests to Nexora AI." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});

function Page() {
  return <NexoraLayout><LegalPage page="privacy" /></NexoraLayout>;
}
