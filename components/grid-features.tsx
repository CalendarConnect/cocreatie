import { cn } from "@/lib/utils";
import { Heading } from "./heading";
import {
  IconBrain,
  IconShieldLock,
  IconClock,
  IconUsers,
  IconGrowth,
  IconBulb,
  IconMessage,
  IconCertificate,
} from "@tabler/icons-react";

export const GridFeatures = () => {
  const features = [
    {
      title: "Persoonlijk Fundament",
      description:
        "Ontworpen rond jouw werkstijl, waarden en doelen",
      icon: <IconBrain />,
    },
    {
      title: "Volledige Privacy",
      description:
        "Gesprekken blijven tussen jullie, AVG-compliant",
      icon: <IconShieldLock />,
    },
    {
      title: "Co-creatie Controle",
      description:
        "AI stelt voor, jij beslist, samen voeren jullie uit",
      icon: <IconUsers />,
    },
    {
      title: "Groei Partnerschap",
      description:
        "Wordt steeds waardevoller door elke interactie",
      icon: <IconGrowth />,
    },
    {
      title: "Nederlandse Kwaliteit",
      description:
        "Begrijpt lokale business cultuur en regelgeving",
      icon: <IconCertificate />,
    },
    {
      title: "Levenslange Support",
      description:
        "€2.495 eenmalig, inclusief alle updates",
      icon: <IconMessage />,
    },
    {
      title: "Strategic Foundation",
      description:
        "Basis voor al jouw toekomstige AI implementaties",
      icon: <IconBulb />,
    },
    {
      title: "24/7 Beschikbaar",
      description:
        "Altijd bereikbaar voor strategische vraagstukken",
      icon: <IconClock />,
    },
  ];
  return (
    <div className="relative z-20 py-10 md:py-40">
      <Heading as="h2">Wat jouw AI-partner jou biedt</Heading>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 relative z-10 py-10">
      {features.map((feature, index) => (
        <Feature key={feature.title} {...feature} index={index} />
      ))}
      </div>
    </div>
  );
};

const Feature = ({
  title,
  description,
  icon,
  index,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
}) => {
  return (
    <div
      className={cn(
        "flex flex-col py-10 lg:border-r relative group dark:border-neutral-800",
        (index === 0 || index === 4) && "lg:border-l dark:border-neutral-800",
        index < 4 && "lg:border-b dark:border-neutral-800"
      )}
    >
      <div className="mb-4 relative z-10 px-10 text-neutral-700 dark:text-neutral-300">
        {icon}
      </div>
      <div className="text-lg font-medium mb-2 relative z-10 px-10">
        <div className="absolute left-0 inset-y-0 h-6 w-1 rounded-tr-full rounded-br-full bg-neutral-200 dark:bg-neutral-700 group-hover:bg-neutral-300 dark:group-hover:bg-neutral-600 transition-all duration-200 origin-center" />
        <span className="group-hover:translate-x-2 transition duration-200 inline-block">
          {title}
        </span>
      </div>
      <p className="text-sm text-neutral-600 dark:text-neutral-400 max-w-xs mx-auto relative z-10 px-10">
        {description}
      </p>
    </div>
  );
};