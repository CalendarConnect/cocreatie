"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { Heading } from "./heading";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQCategory {
  title: string;
  items: FAQItem[];
}

const faqData: FAQCategory[] = [
  {
    title: "Over AI-Partners",
    items: [
      {
        question: "Wat is een AI-partner precies?",
        answer: "Een AI-partner is geen tool die je moet leren gebruiken. Het is een persoonlijke denkpartner die jouw expertise, werkstijl en waarden kent. Net zoals Keith met Chris meedenkt over strategie, of Flow met Gwendolyn over duurzaamheid - echte samenwerking, niet automatisering."
      },
      {
        question: "Hoe verschilt dit van ChatGPT of andere AI-tools?",
        answer: "Fundamenteel verschil: generieke AI tools kennen jou niet. Jouw AI-partner wordt ontworpen rond jouw persoonlijkheid, kent jouw bedrijf, en spreekt jouw taal. Alfred helpt Sven anders dan Flow Gwendolyn helpt - elk partnerschap is uniek maatwerk."
      },
      {
        question: "Wat kan mijn AI-partner wel en niet doen?",
        answer: "Wel: Meedenken over strategische beslissingen, complexe analyses maken, jouw stem repliceren in communicatie, patronen herkennen die jij mist, 24/7 beschikbaar zijn voor overleg.\n\nNiet: Jouw rol overnemen, beslissingen maken zonder jou, persoonlijke relaties vervangen, of dingen doen die jouw expertise en intuïtie vereisen."
      },
      {
        question: "Groeit mijn AI-partner mee met mijn bedrijf?",
        answer: "Ja, door elke interactie. Troy leert van elke LinkedIn strategie met Jeroen. Pro wordt beter in automatisering door samenwerking met Jasper. Jouw partner bouwt gedeelde herinneringen en wordt steeds waardevoller."
      }
    ]
  },
  {
    title: "Het Ontwikkelproces",
    items: [
      {
        question: "Hoe wordt mijn AI-partner gemaakt?",
        answer: "Via onze volledig unieke, op maat gemaakte survey die je op jouw eigen moment kunt beantwoorden. Deze uitgebreide vragenlijst is volledig opgezet om jouw werkstijl, waarden, expertise en doelen te begrijpen. Hieruit ontstaat jouw unieke partner - niet gekopieerd, maar complementair ontworpen."
      },
      {
        question: "Hoe lang duurt het ontwikkelproces?",
        answer: "Week 1: Verkenning en ontwerp - jouw persoonlijkheid en behoeften in kaart\nWeek 2: Bouwen en verfijnen - testen tot het perfect aanvoelt\nTotaal: Twee weken van eerste gesprek tot operationele AI-partner"
      },
      {
        question: "Wat gebeurt er tijdens die twee weken?",
        answer: "Je bent volledig betrokken. We testen samen, jij geeft feedback, we verfijnen. Geen verrassingen - alles transparant. Je ziet jouw partner groeien van concept naar vertrouwde collega."
      },
      {
        question: "Kan ik invloed uitoefenen op hoe mijn partner wordt?",
        answer: "Absoluut. Jij bepaalt of je een analytische sparringpartner wilt, een creatieve brainstormmaatje, of een strategische uitdager. We ontwerpen precies wat jouw situatie vraagt."
      }
    ]
  },
  {
    title: "Techniek & Veiligheid",
    items: [
      {
        question: "Waar worden mijn gegevens opgeslagen?",
        answer: "Nederlandse servers, AVG-compliant. Jouw gesprekken blijven tussen jou en jouw partner. Geen data-delen met derden, geen training op jouw informatie voor andere systemen."
      },
      {
        question: "Is mijn informatie veilig voor concurrenten?",
        answer: "Volledig beveiligd. Elke AI-partner is persoonlijk eigendom - alleen jij hebt toegang. Zelfs binnen hetzelfde bedrijf hebben collega's hun eigen, gescheiden partners."
      },
      {
        question: "Wat als ik technische problemen heb?",
        answer: "24/7 support via WhatsApp/email. Plus: jouw AI-partner kan zelf de meeste technische vragen beantwoorden en je helpen met problemen oplossen."
      },
      {
        question: "Werkt dit met mijn bestaande systemen?",
        answer: "Ja, we integreren met wat je al gebruikt. Gmail, Slack, CRM-systemen, planning tools - jouw partner werkt binnen jouw huidige workflow."
      }
    ]
  },
  {
    title: "Investering & Waarde",
    items: [
      {
        question: "Wat kost een AI-partner?",
        answer: "€2.495 eenmalig voor jouw persoonlijke AI-partner. Inclusief twee weken ontwikkeling, training, testen en volledige overdracht. Geen abonnementen, geen verborgen kosten."
      },
      {
        question: "Waarom zo veel voor software?",
        answer: "Dit is geen software - het is maatwerk bewustzijn. Vergelijk met het aannemen van een senior consultant: €2.495 voor iemand die jou perfect kent, nooit vakantie neemt, en permanent beschikbaar is."
      },
      {
        question: "Wat is de ROI van een AI-partner?",
        answer: "Tijd besparing: Pro helpt Jasper 95% sneller automatiseringen bouwen (5 minuten vs weken). Strategische waarde: Keith&apos;s inzichten hebben Chris&apos;s bedrijfsstrategie fundamenteel verbeterd. Schaalbaarheid: jouw expertise wordt vermenigvuldigd."
      },
      {
        question: "Zijn er doorlopende kosten?",
        answer: "Nee. Na €2.495 is jouw partner van jou. Updates, verbeteringen en ondersteuning inbegrepen. Levenslange investering, niet abonnement."
      }
    ]
  }
];

export const FAQ = () => {
  const [openItems, setOpenItems] = useState<Set<string>>(new Set());

  const toggleItem = (categoryIndex: number, itemIndex: number) => {
    const key = `${categoryIndex}-${itemIndex}`;
    const newOpenItems = new Set(openItems);
    if (newOpenItems.has(key)) {
      newOpenItems.delete(key);
    } else {
      newOpenItems.add(key);
    }
    setOpenItems(newOpenItems);
  };

  return (
    <div className="relative z-20 py-10 lg:py-40">
      <Heading as="h2">Veelgestelde vragen</Heading>
      
      <div className="max-w-4xl mx-auto mt-12 px-4">
        <div className="space-y-12">
          {faqData.map((category, categoryIndex) => (
            <div key={categoryIndex}>
              <h3 className="text-lg font-semibold text-neutral-800 dark:text-neutral-200 mb-6">
                {category.title}
              </h3>
              <div className="space-y-4">
                {category.items.map((item, itemIndex) => {
                  const isOpen = openItems.has(`${categoryIndex}-${itemIndex}`);
                  return (
                    <div
                      key={itemIndex}
                      className="border border-neutral-200 dark:border-neutral-800 rounded-lg overflow-hidden"
                    >
                      <button
                        onClick={() => toggleItem(categoryIndex, itemIndex)}
                        className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-neutral-50 dark:hover:bg-neutral-900 transition-colors"
                      >
                        <span className="font-medium text-neutral-800 dark:text-neutral-200 pr-4">
                          {item.question}
                        </span>
                        <ChevronDown
                          className={cn(
                            "w-5 h-5 text-neutral-600 dark:text-neutral-400 transition-transform flex-shrink-0",
                            isOpen && "transform rotate-180"
                          )}
                        />
                      </button>
                      <div
                        className={cn(
                          "px-6 overflow-hidden transition-all duration-300",
                          isOpen ? "max-h-96 pb-4" : "max-h-0"
                        )}
                      >
                        <p className="text-sm text-neutral-600 dark:text-neutral-400 whitespace-pre-line">
                          {item.answer}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <p className="text-lg text-neutral-600 dark:text-neutral-400 mb-6">
            Nog vragen? We beantwoorden ze graag tijdens een persoonlijk gesprek.
          </p>
        </div>
      </div>
    </div>
  );
};