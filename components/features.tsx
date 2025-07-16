import React from "react";
import { Heading } from "./heading";
import { Subheading } from "./subheading";
import { cn } from "@/lib/utils";
import { Building2, Target, MessageSquare, TrendingUp, Users, Brain } from "lucide-react";

export const Features = () => {

  const categories = [
    {
      title: "Fundament & Visie",
      icon: Target,
      before: [
        "Geen begrip van jouw bedrijf",
        "Moet elke keer uitleg krijgen",
        "Kent je waarom niet"
      ],
      after: [
        "Kent je missie, visie en strategie door en door",
        "Begrijpt waarom je doet wat je doet",
        "Gestandaardiseerde 2-weken methode voor kwaliteit"
      ]
    },
    {
      title: "Bedrijfscontext",
      icon: Building2,
      before: [
        "Moet elke keer context krijgen",
        "Vergeet eerdere gesprekken",
        "Snapt je bedrijf niet echt"
      ],
      after: [
        "Begrijpt je hele bedrijfssituatie vanaf dag één",
        "Standaard integratie pakket (Gmail, Calendar, Slack, Notion, n8n)",
        "Bouwt automatiseringen op basis van jouw bedrijfskennis"
      ]
    },
    {
      title: "Communicatie & Identiteit",
      icon: MessageSquare,
      before: [
        "Generieke tone of voice",
        "Inconsistente communicatie",
        "Past niet bij je merk"
      ],
      after: [
        "Spreekt exact zoals jij dat wilt",
        "Consistent in alle communicatie",
        "Versterkt je merkidentiteit"
      ]
    },
    {
      title: "Toekomstgericht Denken",
      icon: TrendingUp,
      before: [
        "Reageert alleen op directe vragen",
        "Geen strategisch inzicht",
        "Ziet geen verbanden"
      ],
      after: [
        "Denkt proactief mee over AI-implementaties",
        "Ziet kansen voor automatisering",
        "Adviseert over volgende stappen"
      ]
    },
    {
      title: "Groei & Ontwikkeling",
      icon: Users,
      before: [
        "Statisch, leert niet van jullie samenwerking",
        "Geen gedeelde geschiedenis",
        "Elke sessie opnieuw beginnen"
      ],
      after: [
        "Groeit mee met jouw bedrijf",
        "Bouwt gedeelde herinneringen op",
        "Wordt steeds waardevoller"
      ]
    },
    {
      title: "Strategisch Partnership",
      icon: Brain,
      before: [
        "Tool die je gebruikt",
        "Geen diepgaand begrip",
        "Transactionele relatie"
      ],
      after: [
        "De basis van al jouw AI-implementaties",
        "Bewezen proces, geen lange implementatie",
        "Inclusief alle knowledge packages - geen extra kosten"
      ]
    }
  ];

  return (
    <div className="relative z-20 py-10 lg:py-40">
      <Heading as="h2">Het verschil tussen tools en partnership</Heading>
      <Subheading className="text-center">
        Zie waarom een AI-partner de foundation is voor al jouw toekomstige AI-implementaties
      </Subheading>

      <div className="max-w-7xl mx-auto mt-12 px-4">
        {/* Table Container */}
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr>
                <th className="text-left p-4 border-b-2 border-neutral-200 dark:border-neutral-700">
                  <div className="text-lg font-semibold text-neutral-800 dark:text-neutral-200">
                    Categorie
                  </div>
                </th>
                <th className="text-left p-4 border-b-2 border-neutral-200 dark:border-neutral-700">
                  <div className="text-lg font-semibold text-neutral-600 dark:text-neutral-400">
                    Algemene LLM
                  </div>
                </th>
                <th className="text-left p-4 border-b-2 border-neutral-200 dark:border-neutral-700">
                  <div className="text-lg font-semibold text-neutral-800 dark:text-neutral-200">
                    Jouw AI-partner
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
              {categories.map((category, index) => {
                const Icon = category.icon;
                return (
                  <tr key={index} className="border-b border-neutral-100 dark:border-neutral-800">
                    {/* Category */}
                    <td className="p-4 align-top">
                      <div className="flex items-start gap-3">
                        <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-neutral-100 dark:bg-neutral-800 flex-shrink-0">
                          <Icon className="w-5 h-5 text-neutral-700 dark:text-neutral-300" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-neutral-800 dark:text-neutral-200">
                            {category.title}
                          </h3>
                        </div>
                      </div>
                    </td>
                    
                    {/* Algemene LLM */}
                    <td className="p-4 align-top">
                      <ul className="space-y-2">
                        {category.before.map((point, pointIndex) => (
                          <li key={pointIndex} className="flex items-start">
                            <span className="text-neutral-400 mr-2 mt-0.5">✗</span>
                            <span className="text-sm text-neutral-600 dark:text-neutral-400">
                              {point}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </td>
                    
                    {/* Jouw AI-partner */}
                    <td className="p-4 align-top bg-neutral-50 dark:bg-neutral-900">
                      <ul className="space-y-2">
                        {category.after.map((point, pointIndex) => (
                          <li key={pointIndex} className="flex items-start">
                            <span className="text-neutral-800 dark:text-neutral-200 mr-2 mt-0.5">✓</span>
                            <span className="text-sm text-neutral-700 dark:text-neutral-300 font-medium">
                              {point}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-lg text-neutral-600 dark:text-neutral-400 mb-6">
            Jouw AI-partner is niet zomaar een tool. Het is de strategische basis voor al je toekomstige AI-implementaties.
          </p>
        </div>
      </div>
    </div>
  );
};

const FeatureCard = ({
  children,
  className,
}: {
  children?: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        `p-4 sm:p-6 relative overflow-hidden`,
        className
      )}
    >
      {children}
    </div>
  );
};

const FeatureTitle = ({ children }: { children?: React.ReactNode }) => {
  return (
    <h3 className="text-base font-medium text-neutral-800 dark:text-neutral-100">
      {children}
    </h3>
  );
};

const FeatureDescription = ({ children }: { children?: React.ReactNode }) => {
  return (
    <p className="text-sm text-neutral-600 dark:text-neutral-400 mt-2">
      {children}
    </p>
  );
};