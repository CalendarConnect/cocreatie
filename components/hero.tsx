"use client";

import { motion } from "framer-motion";
import { PartnershipChatDemo } from "./partnership-chat-demo";

export const Hero = () => {
  return (
    <div className="flex flex-col min-h-screen pt-20 md:pt-40 relative overflow-hidden">
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
        Van dagelijkse taken tot strategische doorbraken
      </motion.h1>
      <motion.p
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
          delay: 0.2,
        }}
        className="text-center text-lg md:text-xl text-neutral-600 dark:text-neutral-400 max-w-3xl mx-auto mb-12 relative z-10 px-4"
      >
        Zie hoe Nederlandse professionals dagelijks samenwerken met hun AI-partner
      </motion.p>
      
      <motion.div
        initial={{
          y: 60,
          opacity: 0,
        }}
        animate={{
          y: 0,
          opacity: 1,
        }}
        transition={{
          ease: "easeOut",
          duration: 0.5,
          delay: 0.4,
        }}
        className="relative z-10 mt-8"
      >
        <PartnershipChatDemo />
      </motion.div>
    </div>
  );
};
