import { Container } from "@/components/container";
import { Background } from "@/components/background";
import { ContactForm } from "@/components/contact";
import { ContactClients } from "@/components/contact-clients";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact - Co-creatie.ai | Start jouw AI-partnership",
  description:
    "Klaar om jouw eerste AI-partner te ontdekken? Neem contact op en begin jouw reis naar effectievere samenwerking met AI.",
  openGraph: {
    images: ["https://co-creatie.ai/banner.png"],
  },
};

export default function ContactPage() {
  return (
    <div className="relative overflow-hidden py-20 md:py-0">
      <Background />
      <Container className="flex flex-col items-center justify-between pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 w-full max-w-6xl mx-auto pt-20 md:pt-40">
          <ContactForm />
          <ContactClients />
        </div>
      </Container>
    </div>
  );
}
