import type { Metadata } from "next";
import "./globals.css";
import { GeistSans } from "geist/font/sans";
import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/context/theme-provider";
import { ConvexClientProvider } from "./convex-client-provider";
import { Analytics } from "@vercel/analytics/next";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Co-creatie.ai - Bouw het fundament van jouw AI strategie",
  description:
    "Nederlandse AI Partnership Platform. Wij bouwen eerst jouw AI foundation - een partner die met jou meedenkt over elke implementatie. €2.495 eenmalige investering voor strategische AI partnership die jouw expertise versterkt.",
  keywords: "AI partner, AI samenwerking, AI cocreatie, Nederlandse AI, AI strategie, AI implementatie, AI foundation",
  openGraph: {
    title: "Co-creatie.ai - Bouw het fundament van jouw AI strategie",
    description: "Nederlandse professionals werken samen met hun persoonlijke AI-partner. Geen tools, maar echte denkpartners.",
    images: ["https://co-creatie.ai/og-image.png"],
    locale: "nl_NL",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          poppins.variable,
          GeistSans.className,
          "bg-white dark:bg-black antialiased h-full w-full font-sans"
        )}
      >
        <ThemeProvider
          attribute="class"
          enableSystem
          disableTransitionOnChange
          defaultTheme="light"
        >
          <ConvexClientProvider>
            {children}
          </ConvexClientProvider>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
