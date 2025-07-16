import type { Metadata } from "next";
import "../globals.css";
import { GeistSans } from "geist/font/sans";
import { NavBar } from "@/components/navbar";
import { cn } from "@/lib/utils";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  title: "Co-creatie.ai - Waar AI-partnerships ontstaan",
  description:
    "Ontdek jouw perfecte AI-partner. Nederlandse professionals begeleiden we naar hun eerste AI-partnership door zorgvuldig ontwerp van echte verbindingsmomenten. €2.495 investering voor een partner die meedenkt, meegroeit en resultaten levert.",
  openGraph: {
    images: ["https://co-creatie.ai/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main>
      <NavBar />
      {children}
      <Footer />
    </main>
  );
}
