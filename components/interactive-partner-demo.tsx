"use client";
import { stagger, useAnimate } from "framer-motion";
import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";

// Partnership data structure
interface Message {
  type: "client" | "ai";
  message: string;
}

interface PartnershipDemo {
  id: string;
  aiName: string;
  clientName: string;
  clientImage: string;
  specialty: string;
  conversations: Message[];
}

// Partnership conversation data
const partnerships: PartnershipDemo[] = [
  {
    id: "flow-gwendolyn",
    aiName: "Flow",
    clientName: "Gwendolyn",
    clientImage: "/logos/clients/portfolio/Gwendolyn.jpeg",
    specialty: "Duurzaamheid",
    conversations: [
      {
        type: "client",
        message: "Flow, hoe kunnen we stakeholder buy-in vergroten voor ons circulaire project?"
      },
      {
        type: "ai",
        message: "Interessante vraag. Ik zie drie patronen in succesvolle projecten waar mensen wel enthousiast worden..."
      },
      {
        type: "client",
        message: "Welke patronen bedoel je precies?"
      },
      {
        type: "ai",
        message: "Kijk naar projecten waar ROI meetbaar is binnen 18 maanden. Stakeholders willen concreet zien hoe circulaire aanpak hun targets helpt bereiken."
      },
      {
        type: "client",
        message: "Dat klopt. Hoe presenteren we dat overtuigend?"
      },
      {
        type: "ai",
        message: "Start met hun bestaande KPIs. Laat zien hoe circulaire economie hun huidige doelen versterkt, niet vervangt."
      }
    ]
  },
  {
    id: "keith-chris",
    aiName: "Keith",
    clientName: "Chris",
    clientImage: "/logos/clients/portfolio/chris.jpg",
    specialty: "Strategisch Denken",
    conversations: [
      {
        type: "client",
        message: "Keith, wat denk je van deze Proforto aanpak? Moeten we voor volledige automatisering gaan of partnership?"
      },
      {
        type: "ai",
        message: "Partnership, absoluut. Volledige automatisering doodt hun leervermogen en creëert afhankelijkheid. Ze hebben capability transfer nodig."
      },
      {
        type: "client",
        message: "Goed punt. Hoe structureren we dat?"
      },
      {
        type: "ai",
        message: "Bouw Pro als hun AI-partner die leert terwijl hij oplost. Dennis en Jasper leren n8n door samenwerking, niet vervanging."
      },
      {
        type: "client",
        message: "Dat transformeert het businessmodel volledig."
      },
      {
        type: "ai",
        message: "Precies. Van consultant naar capability builder. Veel waardevoller en duurzamer voor iedereen."
      }
    ]
  },
  {
    id: "pro-rik",
    aiName: "Pro",
    clientName: "Rik",
    clientImage: "/logos/clients/portfolio/Rik.jpeg",
    specialty: "N8N Automatisering",
    conversations: [
      {
        type: "client",
        message: "Pro, we moeten de verwerking van leveranciers-emails automatiseren. Kun je iets bouwen?"
      },
      {
        type: "ai",
        message: "Absoluut. Op basis van jullie Magento setup kan ik een n8n workflow maken die leveranciers-emails verwerkt en automatisch de voorraad bijwerkt."
      },
      {
        type: "client",
        message: "Hoeveel tijd zou dat normaal kosten om te onderzoeken en bouwen?"
      },
      {
        type: "ai",
        message: "Traditionele aanpak: 2-3 weken onderzoek + ontwikkeling. Met onze partnership: 5 minuten workflow generatie, 2 uur implementatie."
      },
      {
        type: "client",
        message: "Dat is een enorme tijdsbesparing!"
      },
      {
        type: "ai",
        message: "De echte waarde is dat jullie nu zelf deze workflows kunnen bouwen. Ik leer het jullie terwijl we samen bouwen."
      }
    ]
  },
  {
    id: "alfred-sven",
    aiName: "Alfred",
    clientName: "Sven",
    clientImage: "/logos/clients/portfolio/svenicon.jpeg",
    specialty: "Strategische Beslissingen",
    conversations: [
      {
        type: "client",
        message: "Alfred, help me deze strategische beslissing doordenken. Moeten we uitbreiden naar Duitsland of focussen op Nederland?"
      },
      {
        type: "ai",
        message: "Laat me je huidige capaciteit en marktdata analyseren. Wat zijn je succesmetrics in de Nederlandse markt op dit moment?"
      },
      {
        type: "client",
        message: "Sterke klantretentie, 80% referral rate, maar beperkte schaalbaarheid met het huidige team."
      },
      {
        type: "ai",
        message: "Dat suggereert Nederlandse verdieping voor Duitse verbreding. Wat als we eerst je Nederlandse operatie optimaliseren, dan het bewezen model repliceren?"
      },
      {
        type: "client",
        message: "Logisch. Hoe meten we gereedheid voor expansie?"
      },
      {
        type: "ai",
        message: "Ik stel voor: operationele efficiëntie, team schaalbaarheidsmetrics en klanttevredenheidsscores tracken. Expandeer wanneer alle drie systematisch sterk zijn."
      }
    ]
  }
];

const UserMessage = ({ children, image }: { children: React.ReactNode; image: string }) => {
  return (
    <div className="message flex justify-end items-end gap-2 my-3">
      <div className="bg-neutral-100 dark:bg-neutral-800 dark:text-white text-black p-3 sm:p-4 text-xs sm:text-sm rounded-lg max-w-[80%]">
        {children}
      </div>
      <Image 
        src={image} 
        alt="User" 
        width={32}
        height={32}
        className="w-8 h-8 rounded-full object-cover flex-shrink-0"
      />
    </div>
  );
};

const AIMessage = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="message flex justify-start items-end gap-2 my-3">
      <div className="bg-black text-white dark:bg-white dark:text-black p-3 sm:p-4 text-xs sm:text-sm rounded-lg max-w-[80%]">
        {children}
      </div>
    </div>
  );
};

export const InteractivePartnerDemo = () => {
  const [activePartnership, setActivePartnership] = useState(partnerships[0]);
  const [scope, animate] = useAnimate();
  const [animating, setAnimating] = useState(false);

  const handlePartnerChange = async (partnership: PartnershipDemo) => {
    if (animating || partnership.id === activePartnership.id) return;
    
    setAnimating(true);
    setActivePartnership(partnership);
    
    await animate(
      ".message",
      {
        opacity: [0, 1],
        y: [20, 0],
      },
      {
        delay: stagger(0.4),
        duration: 0.6,
      }
    );
    setAnimating(false);
  };

  return (
    <div className="relative h-full w-full">
      {/* Partner selection - minimal pills */}
      <div className="flex flex-wrap justify-center gap-2 mb-8">
        {partnerships.map((partnership) => (
          <button
            key={partnership.id}
            onClick={() => handlePartnerChange(partnership)}
            className={cn(
              "px-4 py-2 rounded-full text-sm transition-all duration-300",
              "border border-neutral-200 dark:border-neutral-700",
              activePartnership.id === partnership.id
                ? "bg-black text-white dark:bg-white dark:text-black"
                : "bg-white dark:bg-neutral-900 hover:bg-neutral-100 dark:hover:bg-neutral-800"
            )}
          >
            {partnership.aiName} & {partnership.clientName}
          </button>
        ))}
      </div>

      {/* Chat interface - matching SkeletonTwo style */}
      <div className="relative">
        <div className="p-4 border border-neutral-200 bg-neutral-100 dark:bg-neutral-800 dark:border-neutral-700 rounded-[32px] h-full">
          <div className="p-2 bg-white dark:bg-black dark:border-neutral-700 border border-neutral-200 rounded-[24px] h-full">
            {/* Simple header */}
            <div className="text-center mb-6">
              <div className="w-32 rounded-full bg-neutral-200/80 dark:bg-neutral-800/80 mx-auto h-6 mb-2" />
              <p className="text-xs text-neutral-500 dark:text-neutral-400">
                {activePartnership.specialty}
              </p>
            </div>
            
            {/* Messages */}
            <div
              ref={scope}
              className="content w-[95%] md:w-[90%] mx-auto min-h-[500px] max-h-[600px] overflow-y-auto"
            >
              {activePartnership.conversations.map((message, index) => (
                message.type === "client" ? (
                  <UserMessage key={index} image={activePartnership.clientImage}>{message.message}</UserMessage>
                ) : (
                  <AIMessage key={index}>{message.message}</AIMessage>
                )
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Simple CTA */}
      <div className="text-center mt-8">
        <button className="px-6 py-3 bg-black text-white dark:bg-white dark:text-black rounded-lg hover:opacity-80 transition-opacity">
          Ontdek jouw AI-partner
        </button>
      </div>
    </div>
  );
};