"use client";
import { Heading } from "./heading";
import { Subheading } from "./subheading";
import Image from "next/image";
import { motion } from "framer-motion";

const clients = [
  {
    name: "Eric McLean",
    partner: "Edward",
    role: "Managing Director @ TCEL",
    image: "/logos/clients/portfolio/Eric.jpeg",
  },
  {
    name: "Jeroen Stolk",
    partner: "Troy",
    role: "LinkedIn Sales Expert",
    image: "/logos/clients/portfolio/Jeroen.jpeg",
  },
  {
    name: "Rik Burgersdijk",
    partner: "Pro",
    role: "Founder & CEO @ Proforto",
    image: "/logos/clients/portfolio/Rik.jpeg",
  },
  {
    name: "Els Verheirstraeten",
    partner: "Pietje",
    role: "Jouw partner rond AI wetgeving",
    image: "/logos/clients/portfolio/Els.jpeg",
  },
  {
    name: "Gwendolyn Verburg",
    partner: "Flow",
    role: "Projectcoördinator VoedselHub Nijmegen",
    image: "/logos/clients/portfolio/Gwendolyn.jpeg",
  },
  {
    name: "Gina Schinkel",
    partner: "Gigi",
    role: "Founder @ Driftawave",
    image: "/logos/clients/portfolio/Gina.jpeg",
  },
  {
    name: "Sven Dresen",
    partner: "Alfred",
    role: "Eigenaar @ S-Quisse Consulting",
    image: "/logos/clients/portfolio/svenicon.jpeg",
  },
];

export const Companies = () => {
  return (
    <div className="relative z-20 py-10 md:py-40">
      <Heading as="h2">Professionals met hun AI-partner</Heading>
      <Subheading className="text-center">
        Nederlandse ondernemers die al samenwerken met hun persoonlijke AI-partner
      </Subheading>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 max-w-6xl mx-auto mt-20 px-4">
        {clients.map((client, idx) => (
          <motion.div
            key={client.name}
            initial={{
              y: 20,
              opacity: 0,
            }}
            animate={{
              y: 0,
              opacity: 1,
            }}
            transition={{
              duration: 0.5,
              delay: 0.1 * idx,
              ease: [0.4, 0, 0.2, 1],
            }}
            className="flex flex-col items-center text-center group"
          >
            <div className="relative mb-4">
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/10 rounded-full z-10" />
              <Image
                src={client.image}
                alt={client.name}
                width={120}
                height={120}
                className="rounded-full object-cover w-24 h-24 md:w-32 md:h-32 border-2 border-neutral-200 dark:border-neutral-700 group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <h3 className="font-medium text-sm md:text-base">
              {client.name}
            </h3>
            <p className="text-xs md:text-sm text-neutral-600 dark:text-neutral-400 mt-1">
              met AI-partner <span className="font-medium">{client.partner}</span>
            </p>
            <p className="text-xs text-neutral-500 dark:text-neutral-500 mt-2 line-clamp-2">
              {client.role}
            </p>
          </motion.div>
        ))}
      </div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="text-center mt-12 text-sm text-neutral-500 dark:text-neutral-400"
      >
        Van directeur tot consultant, van coach tot projectcoördinator - 
        iedereen werkt effectiever met een AI-partner
      </motion.p>
    </div>
  );
};