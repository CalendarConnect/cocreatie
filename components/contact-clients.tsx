"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const clients = [
  {
    name: "Jeroen Stolk",
    partner: "Troy",
    role: "LinkedIn Sales Expert",
    image: "/logos/clients/portfolio/Jeroen.jpeg",
  },
  {
    name: "Gwendolyn Verburg",
    partner: "Flow",
    role: "Projectcoördinator VoedselHub Nijmegen",
    image: "/logos/clients/portfolio/Gwendolyn.jpeg",
  },
  {
    name: "Sven Dresen",
    partner: "Alfred",
    role: "Eigenaar @ S-Quisse Consulting",
    image: "/logos/clients/portfolio/svenicon.jpeg",
  },
  {
    name: "Rik Burgersdijk",
    partner: "Pro",
    role: "Founder & CEO @ Proforto",
    image: "/logos/clients/portfolio/Rik.jpeg",
  },
  {
    name: "Eric McLean",
    partner: "Edward",
    role: "Managing Director @ TCEL",
    image: "/logos/clients/portfolio/Eric.jpeg",
  },
  {
    name: "Gina Schinkel",
    partner: "Gigi",
    role: "Founder @ Driftawave",
    image: "/logos/clients/portfolio/Gina.jpeg",
  },
];

export const ContactClients = () => {
  return (
    <div className="relative z-20 flex flex-col justify-center">
      <div className="mb-8">
        <h2 className="text-2xl md:text-3xl font-light mb-4 text-neutral-900 dark:text-neutral-100">
          Nederlandse professionals met hun AI-partner
        </h2>
        <p className="text-lg text-neutral-600 dark:text-neutral-400">
          Van consultant tot directeur - zij werken dagelijks effectiever door echte AI-partnerschap
        </p>
      </div>

      <div className="grid grid-cols-2 gap-6 mb-8">
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
            <div className="relative mb-3">
              <Image
                src={client.image}
                alt={client.name}
                width={80}
                height={80}
                className="rounded-full object-cover w-16 h-16 md:w-20 md:h-20 border-2 border-neutral-200 dark:border-neutral-700 group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <h3 className="font-medium text-sm md:text-base text-neutral-900 dark:text-neutral-100">
              {client.name}
            </h3>
            <p className="text-xs md:text-sm text-blue-600 dark:text-blue-400 mt-1">
              + AI-partner <span className="font-medium">{client.partner}</span>
            </p>
            <p className="text-xs text-neutral-500 dark:text-neutral-500 mt-1 line-clamp-2">
              {client.role}
            </p>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.5 }}
        className="space-y-4"
      >
        <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg border border-blue-200 dark:border-blue-700">
          <p className="text-sm text-blue-800 dark:text-blue-200 mb-2 font-medium">
            ✨ Wat onze professionals zeggen:
          </p>
          <p className="text-sm text-blue-700 dark:text-blue-300 italic">
            &ldquo;Mijn AI-partner begrijpt niet alleen wat ik doe, maar helpt me ook beter nadenken over hoe ik het doe.&rdquo;
          </p>
          <p className="text-xs text-blue-600 dark:text-blue-400 mt-2">
            - Een van onze AI-partnership pioniers
          </p>
        </div>

        <div className="text-center">
          <p className="text-sm text-neutral-600 dark:text-neutral-400">
            <strong className="text-neutral-800 dark:text-neutral-200">Sluit je aan bij 47+ Nederlandse professionals</strong><br />
            die dagelijks samenwerken met hun persoonlijke AI-partner
          </p>
        </div>

        <div className="bg-neutral-50 dark:bg-neutral-900 p-4 rounded-lg border border-neutral-200 dark:border-neutral-700">
          <p className="text-xs text-neutral-600 dark:text-neutral-400 text-center">
            🔒 Nederlandse data privacy · AVG/GDPR compliant<br />
            🤝 Persoonlijke begeleiding · Geen automatisering zonder begrip
          </p>
        </div>
      </motion.div>
    </div>
  );
};