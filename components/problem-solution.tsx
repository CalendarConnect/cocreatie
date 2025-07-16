"use client";
import React from "react";
import { Heading } from "./heading";
import { Subheading } from "./subheading";
import { AlertTriangle, Shield, TrendingDown } from "lucide-react";
import { motion } from "framer-motion";

export const ProblemSolution = () => {
  const problems = [
    {
      icon: AlertTriangle,
      title: "Geen Fundament",
      description: "Bedrijven stapelen AI tools zonder strategie",
    },
    {
      icon: Shield,
      title: "Verlies van Controle",
      description: "Automatisering zonder menselijke oversight",
    },
    {
      icon: TrendingDown,
      title: "Gemiste Kansen",
      description: "AI als cost center, niet als strategic advantage",
    },
  ];

  return (
    <div className="relative z-20 py-10 md:py-40">
      <Heading as="h2">Waarom de meeste AI implementaties falen</Heading>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mt-12 px-4">
        {problems.map((problem, index) => {
          const Icon = problem.icon;
          return (
            <motion.div
              key={problem.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 rounded-full bg-neutral-100 dark:bg-neutral-800 flex items-center justify-center">
                  <Icon className="w-8 h-8 text-neutral-600 dark:text-neutral-400" />
                </div>
              </div>
              <h3 className="text-lg font-medium mb-2">{problem.title}</h3>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                {problem.description}
              </p>
            </motion.div>
          );
        })}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="max-w-3xl mx-auto mt-16 text-center px-4"
      >
        <p className="text-lg text-neutral-700 dark:text-neutral-300">
          Wij bouwen eerst jouw AI foundation - een partner die met jou meedenkt 
          over elke implementatie, zodat je bewust en veilig AI kunt adopteren.
        </p>
      </motion.div>
    </div>
  );
};