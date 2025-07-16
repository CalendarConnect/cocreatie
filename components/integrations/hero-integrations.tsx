"use client";

import { motion } from "framer-motion";

export const HeroIntegrations = () => {
  return (
    <div className="flex flex-col min-h-[60vh] pt-20 md:pt-40 relative overflow-hidden">
      <motion.h1
        initial={{
          y: 40,
          opacity: 0,
        }}
        animate={{
          y: 0,
          opacity: 1,
        }}
        transition={{
          ease: "easeOut",
          duration: 0.5,
        }}
        className="text-3xl md:text-5xl lg:text-7xl font-light max-w-5xl mx-auto text-center mb-6 relative z-10 px-4"
      >
        Ontdek onze integrations
      </motion.h1>
    </div>
  );
};