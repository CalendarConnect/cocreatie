"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

// Types
interface Message {
  type: "client" | "ai";
  content: string;
  delay?: number;
}

interface UseCasePill {
  label: string;
  id: string;
}

interface Partnership {
  id: string;
  aiName: string;
  clientName: string;
  clientImage: string;
  specialty: string;
  useCases: UseCasePill[];
  conversation: Message[];
}

// Partnership data from herosectieupdate.md
const partnerships: Partnership[] = [
  {
    id: "flow-gwendolyn",
    aiName: "Flow",
    clientName: "Gwendolyn",
    clientImage: "/logos/clients/portfolio/Gwendolyn.jpeg",
    specialty: "Strategische subsidie expertise",
    useCases: [
      { id: "subsidies", label: "Subsidieaanvragen" },
      { id: "stakeholder", label: "Stakeholder buy-in" },
      { id: "duurzaamheid", label: "Duurzaamheidsstrategie" },
      { id: "eu", label: "EU-regelgeving" }
    ],
    conversation: [
      {
        type: "client",
        content: "Flow, ik moet een subsidieaanvraag schrijven voor ons nieuwe circulaire voedselproject. Kun je me helpen?"
      },
      {
        type: "ai",
        content: "Natuurlijk! Op basis van VoedselHub&apos;s missie en jouw duurzaamheidsexpertise schrijf ik een sterke aanvraag. Welke subsidieregeling had je in gedachten?",
        delay: 1000
      },
      {
        type: "client",
        content: "De Europese Green Deal subsidie, maar ik weet niet goed hoe ik onze impact moet kwantificeren."
      },
      {
        type: "ai",
        content: "Perfect. Ik ken die regeling door en door. Ik focus op CO2-reductie, lokale economische impact, en innovatieve samenwerkingsmodellen - precies wat zij zoeken. Kijk naar projecten waar ROI meetbaar is binnen 18 maanden.",
        delay: 1500
      },
      {
        type: "client",
        content: "Dat klopt precies. Hoe presenteren we dat overtuigend?"
      },
      {
        type: "ai",
        content: "Start met hun bestaande KPIs. Laat zien hoe circulaire economie hun huidige doelen versterkt, niet vervangt.",
        delay: 800
      },
      {
        type: "client",
        content: "Normaal had ik een subsidieadviseur moeten inhuren die eerst onze organisatie moet leren kennen. Jij snapt meteen wat we doen."
      }
    ]
  },
  {
    id: "keith-chris",
    aiName: "Keith",
    clientName: "Chris",
    clientImage: "/logos/clients/portfolio/chris.jpg",
    specialty: "Strategische CEO beslissingen",
    useCases: [
      { id: "strategy", label: "Strategische beslissingen" },
      { id: "markt", label: "Marktanalyse" },
      { id: "funding", label: "Funding opportunities" },
      { id: "business", label: "Businessmodel innovatie" }
    ],
    conversation: [
      {
        type: "client",
        content: "Keith, ik zit te denken over deze hele Europese AI-markt. Die is €200 miljard waard. Hoe kunnen we Co-creatie.ai positioneren voor InvestNL funding?"
      },
      {
        type: "ai",
        content: "Interessante kans. InvestNL zoekt Nederlandse AI-soevereiniteit projecten. Jouw AI-partnership aanpak past perfect - het houdt Nederlandse bedrijven onafhankelijk van Amerikaanse platforms.",
        delay: 1200
      },
      {
        type: "client",
        content: "Hoe zou je dat als business case presenteren?"
      },
      {
        type: "ai",
        content: "Drie pijlers: Nederlandse data-soevereiniteit, MKB AI-adoptie, en capability building versus tool-afhankelijkheid. Positioneer Co-creatie.ai als de Nederlandse bridge naar AI-partnership.",
        delay: 1400
      },
      {
        type: "client",
        content: "En wat denk je van de Proforto aanpak? Volledige automatisering of partnership?"
      },
      {
        type: "ai",
        content: "Partnership, absoluut. Volledige automatisering doodt hun leervermogen. Ze hebben capability transfer nodig - Pro als AI-partner die leert terwijl hij oplost.",
        delay: 1000
      },
      {
        type: "client",
        content: "Dat transformeert het businessmodel volledig. Van consultant naar capability builder."
      },
      {
        type: "ai",
        content: "Precies. Veel waardevoller en duurzamer voor iedereen.",
        delay: 600
      }
    ]
  },
  {
    id: "pro-rik",
    aiName: "Pro",
    clientName: "Rik",
    clientImage: "/logos/clients/portfolio/Rik.jpeg",
    specialty: "Email automatisering & communicatie",
    useCases: [
      { id: "email", label: "Email beheer" },
      { id: "automatisering", label: "Workflow automatisering" },
      { id: "communicatie", label: "Klantcommunicatie" },
      { id: "inbox", label: "Inbox management" }
    ],
    conversation: [
      {
        type: "client",
        content: "Pro, kun je kijken welke emails ik heb ontvangen?"
      },
      {
        type: "ai",
        content: "Natuurlijk Rik! Je hebt nog 3 mails open staan die aandacht nodig hebben. Een leveranciersupdate van TechSupply, een klantverzoek van Digital Solutions, en een factuurherinnering van MarketingPro.",
        delay: 1000
      },
      {
        type: "client",
        content: "Oké, wil je de eerste beantwoorden? Hier als draft?"
      },
      {
        type: "ai",
        content: "Hier is de draft mail voor TechSupply:\n\n\"Beste Mark,\n\nBedankt voor jullie update over de nieuwe productlijn. We zijn geïnteresseerd in de voorraadmogelijkheden voor Q2. Kunnen jullie een gedetailleerd voorstel opsturen met bulkkortingen?\n\nGraag hoor ik van je.\n\nMet vriendelijke groet,\nRik\"\n\nAanpassen of sturen?",
        delay: 1400
      },
      {
        type: "client",
        content: "Perfect Pro, stuur maar door."
      },
      {
        type: "ai",
        content: "Mail is verstuurd! De andere twee emails zijn ook belangrijk - zal ik die ook voor je voorbereiden?",
        delay: 600
      }
    ]
  },
  {
    id: "alfred-sven",
    aiName: "Alfred",
    clientName: "Sven",
    clientImage: "/logos/clients/portfolio/svenicon.jpeg",
    specialty: "Authentieke content in jouw stem",
    useCases: [
      { id: "linkedin", label: "LinkedIn content" },
      { id: "thought", label: "Thought leadership" },
      { id: "mkb", label: "MKB-strategie" },
      { id: "personal", label: "Personal branding" }
    ],
    conversation: [
      {
        type: "client",
        content: "Alfred, ik wil een LinkedIn post schrijven over waarom MKB-bedrijven strategisch advies vaak verkeerd aanpakken."
      },
      {
        type: "ai",
        content: "Goed onderwerp! Ik schrijf in jouw directe, no-nonsense stijl. Focus op de S-Quisse methodiek: praktische stappen zonder consultant-jargon.",
        delay: 900
      },
      {
        type: "client",
        content: "Ja, precies die aanpak."
      },
      {
        type: "ai",
        content: "Klaar! 'Stop met dure strategieën die niemand snapt' - met concrete voorbeelden van hoe kleine bedrijven zelf strategischer kunnen denken.",
        delay: 1000
      },
      {
        type: "client",
        content: "Perfect, dat klinkt precies zoals ik schrijf."
      },
      {
        type: "ai",
        content: "Dat komt omdat ik jouw consultancy filosofie ken - praktisch advies dat MKB direct kan toepassen, zonder corporate buzzwords.",
        delay: 800
      },
      {
        type: "client",
        content: "Normaal had ik een LinkedIn copywriter moeten inhuren die eerst mijn tone of voice moet leren. Jij snapt meteen hoe ik denk."
      }
    ]
  }
];

// Components
const UseCasePills: React.FC<{ pills: UseCasePill[]; activeFilter?: string }> = ({ pills, activeFilter }) => {
  return (
    <div className="flex flex-wrap gap-2 mb-4 justify-center">
      {pills.map((pill) => (
        <span
          key={pill.id}
          className={cn(
            "px-3 py-1 text-xs rounded-full transition-all duration-200",
            "bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400",
            activeFilter === pill.id && "bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300"
          )}
        >
          {pill.label}
        </span>
      ))}
    </div>
  );
};

const ChatMessage: React.FC<{ message: Message; clientImage?: string; isTyping?: boolean }> = ({ 
  message, 
  clientImage,
  isTyping = false 
}) => {
  const [displayedText, setDisplayedText] = useState(isTyping ? "" : message.content);

  useEffect(() => {
    if (isTyping && message.type === "ai") {
      setDisplayedText(""); // Reset text when typing starts
      let currentIndex = 0;
      const interval = setInterval(() => {
        if (currentIndex < message.content.length) {
          setDisplayedText(message.content.slice(0, currentIndex + 1));
          currentIndex++;
        } else {
          clearInterval(interval);
        }
      }, 15); // Typing speed

      return () => clearInterval(interval);
    } else if (!isTyping) {
      setDisplayedText(message.content);
    }
  }, [isTyping, message.content, message.type]);

  if (message.type === "client") {
    return (
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex justify-end items-end gap-3 mb-4"
      >
        <div className="bg-neutral-100 dark:bg-neutral-800 p-4 rounded-2xl rounded-br-sm max-w-[70%]">
          <p className="text-sm text-neutral-800 dark:text-neutral-200">{message.content}</p>
        </div>
        {clientImage && (
          <Image
            src={clientImage}
            alt="Client"
            width={36}
            height={36}
            className="w-9 h-9 rounded-full object-cover"
          />
        )}
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: message.delay ? message.delay / 1000 : 0 }}
      className="flex justify-start items-end gap-3 mb-4"
    >
      <div className="w-9 h-9 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center">
        <span className="text-white text-xs font-medium">AI</span>
      </div>
      <div className="bg-black dark:bg-white text-white dark:text-black p-4 rounded-2xl rounded-bl-sm max-w-[70%]">
        <p className="text-sm">{displayedText}</p>
      </div>
    </motion.div>
  );
};

export const PartnershipChatDemo: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [visibleMessages, setVisibleMessages] = useState(0);
  const [isTyping, setIsTyping] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const chatContainerRef = React.useRef<HTMLDivElement>(null);
  const activePartnership = partnerships[activeTab];

  useEffect(() => {
    // Reset when tab changes
    setVisibleMessages(0);
    setIsTyping(false);
    setIsPaused(false);
    
    // Start showing messages one by one
    const showNextMessage = () => {
      if (isPaused) return;
      
      setVisibleMessages(prev => {
        if (prev >= activePartnership.conversation.length) {
          return prev;
        }
        
        // Start typing animation for AI messages
        if (prev < activePartnership.conversation.length && 
            activePartnership.conversation[prev].type === "ai") {
          setIsTyping(true);
        }
        
        return prev + 1;
      });
    };

    // Initial delay before starting
    const initialTimer = setTimeout(showNextMessage, 500);
    
    // Set up interval for subsequent messages
    const interval = setInterval(() => {
      if (!isPaused) {
        showNextMessage();
      }
    }, 2500); // Time between messages

    return () => {
      clearTimeout(initialTimer);
      clearInterval(interval);
    };
  }, [activeTab, activePartnership.conversation.length, isPaused]);

  // Stop typing animation after message is complete
  useEffect(() => {
    if (isTyping) {
      const typingDuration = visibleMessages > 0 
        ? (activePartnership.conversation[visibleMessages - 1].content.length * 15) + 500
        : 1000;
      
      const timer = setTimeout(() => {
        setIsTyping(false);
      }, typingDuration);
      
      return () => clearTimeout(timer);
    }
  }, [isTyping, visibleMessages, activePartnership.conversation]);

  // Auto-scroll to bottom when new messages appear
  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [visibleMessages]);

  return (
    <div className="w-full max-w-5xl mx-auto">
      {/* Tab Navigation */}
      <div className="flex flex-wrap justify-center gap-2 mb-8">
        {partnerships.map((partnership, index) => (
          <button
            key={partnership.id}
            onClick={() => setActiveTab(index)}
            className={cn(
              "px-4 py-2 rounded-full text-sm font-medium transition-all duration-300",
              "border border-neutral-200 dark:border-neutral-700",
              activeTab === index
                ? "bg-black text-white dark:bg-white dark:text-black"
                : "bg-white dark:bg-neutral-900 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-50 dark:hover:bg-neutral-800"
            )}
          >
            {partnership.aiName} & {partnership.clientName}
          </button>
        ))}
      </div>

      {/* Chat Interface */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activePartnership.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="bg-white dark:bg-neutral-900 rounded-3xl shadow-lg border border-neutral-200 dark:border-neutral-800 p-6 md:p-8"
        >
          {/* Header */}
          <div className="text-center mb-6">
            <h3 className="text-lg font-medium text-neutral-800 dark:text-neutral-200 mb-2">
              {activePartnership.specialty}
            </h3>
            <UseCasePills pills={activePartnership.useCases} />
          </div>

          {/* Messages */}
          <div ref={chatContainerRef} className="min-h-[400px] max-h-[500px] overflow-y-auto pr-2 relative">
            {activePartnership.conversation.slice(0, visibleMessages).map((message, index) => (
              <ChatMessage
                key={index}
                message={message}
                clientImage={message.type === "client" ? activePartnership.clientImage : undefined}
                isTyping={isTyping && index === visibleMessages - 1 && message.type === "ai"}
              />
            ))}
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Bottom Message */}
      <div className="text-center mt-12">
        <h3 className="text-2xl font-light mb-4 text-neutral-800 dark:text-neutral-200">
          Geen externe experts meer inhuren. Jouw AI-partner kent jou al.
        </h3>
        <Link href="/pricing" className="inline-block px-8 py-3 bg-black text-white dark:bg-white dark:text-black rounded-lg font-medium hover:opacity-90 transition-opacity">
          Ontdek jouw AI-partner
        </Link>
      </div>
    </div>
  );
};