import { Container } from "@/components/container";
import { Background } from "@/components/background";
import { IntegrationsGrid } from "@/components/integrations/integrations-grid";
import { CTA } from "@/components/cta";

export const metadata = {
  title: "600+ Tool Integrations | Co-creatie.ai",
  description: "Nederlandse AI-partners met directe toegang tot jouw complete business stack. Van Gmail tot Slack, van Notion tot HubSpot - alles geïntegreerd via één platform.",
};

export default function IntegrationsPage() {
  return (
    <div className="relative">
      <div className="absolute inset-0 h-full w-full overflow-hidden">
        <Background />
      </div>
      <Container className="flex min-h-screen flex-col items-center justify-between">
        <IntegrationsGrid />
      </Container>
      <div className="relative">
        <div className="absolute inset-0 h-full w-full overflow-hidden">
          <Background />
        </div>
        <CTA />
      </div>
    </div>
  );
}