"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { 
  Package, 
  FolderOpen, 
  Shield, 
  Zap 
} from "lucide-react";

interface StatProps {
  number: string;
  label: string;
  icon: React.ReactNode;
  delay: number;
}

const AnimatedStat = ({ number, label, icon, delay }: StatProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [displayNumber, setDisplayNumber] = useState("0");
  
  useEffect(() => {
    if (isInView) {
      const targetNumber = parseInt(number.replace(/\+/g, ""));
      const duration = 2000; // 2 seconds
      const steps = 60;
      const increment = targetNumber / steps;
      let current = 0;
      
      const timer = setInterval(() => {
        current += increment;
        if (current >= targetNumber) {
          current = targetNumber;
          clearInterval(timer);
        }
        setDisplayNumber(Math.floor(current).toString() + (number.includes("+") ? "+" : ""));
      }, duration / steps);
      
      return () => clearInterval(timer);
    }
  }, [isInView, number]);
  
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay }}
      className="flex flex-col items-center"
    >
      <div className="mb-4 p-3 bg-neutral-100 dark:bg-neutral-800 rounded-lg">
        {icon}
      </div>
      <div className="text-3xl md:text-4xl font-light mb-2">{displayNumber}</div>
      <div className="text-sm text-neutral-600 dark:text-neutral-400">{label}</div>
    </motion.div>
  );
};

export const StatsSection = () => {
  const stats = [
    {
      number: "600+",
      label: "Tools beschikbaar",
      icon: <Package className="w-6 h-6" />,
      delay: 0,
    },
    {
      number: "50+",
      label: "Categorieën",
      icon: <FolderOpen className="w-6 h-6" />,
      delay: 0.1,
    },
    {
      number: "OAuth2",
      label: "Beveiliging",
      icon: <Shield className="w-6 h-6" />,
      delay: 0.2,
    },
    {
      number: "Real-time",
      label: "Synchronisatie",
      icon: <Zap className="w-6 h-6" />,
      delay: 0.3,
    },
  ];
  
  return (
    <div className="relative z-20 py-10 lg:py-20">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-16">
        {stats.map((stat, index) => (
          <AnimatedStat
            key={index}
            number={stat.number}
            label={stat.label}
            icon={stat.icon}
            delay={stat.delay}
          />
        ))}
      </div>
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="mt-12 text-center"
      >
        <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-3xl mx-auto">
          Terwijl andere AI-platforms je basic tools geven, krijg je bij Co-creatie.ai toegang tot 600+ business integrations die jouw AI-partner echt productief maken.
        </p>
      </motion.div>
    </div>
  );
};