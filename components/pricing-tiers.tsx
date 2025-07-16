"use client";
import React, { useState } from "react";
import { Heading } from "./heading";
import { Subheading } from "./subheading";
import { Button } from "./button";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

export const PricingTiers = () => {
  const [selectedPackages, setSelectedPackages] = useState<string[]>([]);

  const tiers = [
    {
      id: "foundation",
      name: "AI-Partner Foundation",
      price: "€3.500",
      period: "eenmalig",
      description: "Het fundament van jouw AI strategie",
      features: [
        "Persoonlijke AI-partner die jou 100% begrijpt",
        "Jouw volledige persoonlijkheid, werkstijl en expertise",
        "Business values en strategie volledig geïntegreerd",
        "Nederlandse privacy en veiligheid",
        "Chat-based strategische partnership",
        "Levenslange updates en support",
      ],
      valueProp: "Perfect voor professionals die strategic AI partnership willen",
      popular: false,
    },
    {
      id: "interactive",
      name: "AI-Partner Interactive",
      price: "€5.000",
      period: "eenmalig",
      description: "Foundation + taakuitvoering met jouw controle",
      features: [
        "Alles van Foundation +",
        "Tech stack integraties naar keuze",
        "Emails schrijven met jouw goedkeuring",
        "Agenda beheer en meeting planning",
        "Document analyse en samenvatting",
        "LinkedIn content creation",
        "Co-creatie: AI stelt voor, jij beslist",
      ],
      valueProp: "Voor professionals die actieve AI partnership willen",
      popular: true,
    },
  ];

  const packages = [
    {
      category: "Content & Marketing",
      items: [
        { id: "linkedin", name: "LinkedIn Excellence", description: "viral content frameworks" },
        { id: "sales", name: "Sales Mastery", description: "Nederlandse B2B methodologie" },
        { id: "content", name: "Content Creation", description: "thought leadership" },
      ],
    },
    {
      category: "Business & Compliance",
      items: [
        { id: "gdpr", name: "GDPR Expertise", description: "sector-specifiek" },
        { id: "ai-literacy", name: "AI Geletterdheid", description: "verantwoord AI gebruik" },
        { id: "onboarding", name: "Employee Onboarding", description: "team AI training" },
      ],
    },
    {
      category: "Tool Integraties",
      items: [
        { id: "project", name: "Asana, Monday, Notion", description: "project management" },
        { id: "email", name: "Mailchimp, Klaviyo", description: "email marketing" },
        { id: "crm", name: "HubSpot, Pipedrive", description: "CRM systems" },
      ],
    },
  ];

  return (
    <div className="relative z-20 py-10 md:py-40">
      <Heading as="h2">Investering in jouw AI-partner</Heading>
      <Subheading className="text-center">
        Kies de foundation die bij jouw ambities past
      </Subheading>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mt-12 px-4">
        {tiers.map((tier) => (
          <div
            key={tier.id}
            className={cn(
              "relative bg-white dark:bg-neutral-900 rounded-2xl p-8 border",
              tier.popular
                ? "border-blue-500 shadow-lg"
                : "border-neutral-200 dark:border-neutral-800"
            )}
          >
            {tier.popular && (
              <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm">
                  Meest Gekozen
                </span>
              </div>
            )}

            <div className="text-center mb-8">
              <h3 className="text-2xl font-medium mb-2">{tier.name}</h3>
              <div className="flex items-baseline justify-center gap-2">
                <span className="text-4xl font-light">{tier.price}</span>
                <span className="text-neutral-600 dark:text-neutral-400">{tier.period}</span>
              </div>
              <p className="text-neutral-600 dark:text-neutral-400 mt-2">{tier.description}</p>
            </div>

            <ul className="space-y-3 mb-8">
              {tier.features.map((feature, index) => (
                <li key={index} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">{feature}</span>
                </li>
              ))}
            </ul>

            <p className="text-sm text-neutral-600 dark:text-neutral-400 text-center mb-6">
              {tier.valueProp}
            </p>

            <Button className="w-full">
              Kies {tier.name}
            </Button>
          </div>
        ))}
      </div>

      <div className="max-w-5xl mx-auto mt-16 px-4">
        <div className="bg-neutral-50 dark:bg-neutral-900 rounded-2xl p-8">
          <h3 className="text-2xl font-medium mb-2 text-center">Knowledge Packages</h3>
          <p className="text-center text-neutral-600 dark:text-neutral-400 mb-8">
            €200 per package • Specifieke expertise voor jouw uitdagingen
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {packages.map((category) => (
              <div key={category.category}>
                <h4 className="font-medium mb-4">{category.category}</h4>
                <ul className="space-y-2">
                  {category.items.map((item) => (
                    <li key={item.id} className="text-sm">
                      <span className="font-medium">{item.name}</span>
                      <span className="text-neutral-600 dark:text-neutral-400"> ({item.description})</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <p className="text-center text-sm text-neutral-600 dark:text-neutral-400 mt-8">
            Elke package is maatwerk - 2 uur consultancy per integratie
          </p>
        </div>
      </div>
    </div>
  );
};