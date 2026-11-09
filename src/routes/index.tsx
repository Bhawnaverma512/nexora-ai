import { createFileRoute } from "@tanstack/react-router";
import { HomeRouteContent, NexoraLayout } from "@/components/nexora-site";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Nexora AI | Practical AI Consulting for Small Business" },
      { name: "description", content: "Make AI work for your business with practical consulting, voice reception, workflow automation and custom AI solutions for small businesses." },
      { property: "og:title", content: "Nexora AI | Practical AI Consulting for Small Business" },
      { property: "og:description", content: "Automate everyday operations, generate more leads and grow with practical AI solutions designed around your business." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});

function Index() {
  return <NexoraLayout><HomeRouteContent /></NexoraLayout>;
}
