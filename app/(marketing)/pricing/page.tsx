import { Container } from "@/components/container";
import { Background } from "@/components/background";
import { Heading } from "@/components/heading";
import { Subheading } from "@/components/subheading";
import { PricingCalculator } from "@/components/pricing-calculator-new";
import { ProcessTimeline } from "@/components/process-timeline";
import { Companies } from "@/components/companies";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pricing - Co-creatie.ai | Jouw AI-partner voor €2.495",
  description:
    "Investeer in jouw persoonlijke AI-partner. Eenmalig €2.495 inclusief standaard integraties, voeg knowledge packages (€199) en extra integraties toe op maat.",
  openGraph: {
    images: ["https://co-creatie.ai/banner.png"],
  },
};

export default function PricingPage() {
  return (
    <div className="relative overflow-hidden py-20 md:py-0">
      <Background />
      <Container className="flex flex-col items-center justify-between  pb-20">
        
        <PricingCalculator />
        
        <ProcessTimeline />

        
        <Companies />
      </Container>
    </div>
  );
}
