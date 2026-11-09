import { createFileRoute } from "@tanstack/react-router";
import { ContentPage, NexoraLayout } from "@/components/nexora-site";

export const Route = createFileRoute("/contact")({
  component: Page,
  head: () => ({
    meta: [
      { title: "Contact Nexora AI — Book a Free Consultation" },
      { name: "description", content: "Tell Nexora AI what you would like to improve and book a free consultation." },
      { property: "og:title", content: "Contact Nexora AI — Book a Free Consultation" },
      { property: "og:description", content: "Tell Nexora AI what you would like to improve and book a free consultation." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});

function Page() {
  return <NexoraLayout><ContentPage page="contact" /></NexoraLayout>;
}
