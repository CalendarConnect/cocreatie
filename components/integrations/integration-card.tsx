"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Shield, Key, LockOpen } from "lucide-react";

import type { Integration } from "@/types/integration";

interface IntegrationCardProps {
  integration: Integration;
  index: number;
  onClick?: () => void;
}

const authIcons = {
  oauth2: <Shield className="w-3 h-3" />,
  api_key: <Key className="w-3 h-3" />,
  no_auth: <LockOpen className="w-3 h-3" />,
};

const authLabels = {
  oauth2: "OAuth2",
  api_key: "API Key",
  no_auth: "No Auth",
};

export const IntegrationCard = ({ integration, index, onClick }: IntegrationCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
      onClick={onClick}
      className={cn(
        "relative p-6 rounded-xl cursor-pointer group",
        "bg-white/50 dark:bg-neutral-900/50",
        "backdrop-blur-md backdrop-saturate-150",
        "border border-neutral-200/50 dark:border-neutral-800/50",
        "hover:border-neutral-300 dark:hover:border-neutral-700",
        "hover:shadow-xl transition-all duration-300",
        integration.popular && "ring-2 ring-blue-500/20"
      )}
    >
      {integration.popular && (
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 px-3 py-1 bg-blue-500 text-white text-xs font-medium rounded-full">
          Populair
        </div>
      )}
      
      <div className="flex items-start gap-4">
        <div className="relative w-12 h-12 flex-shrink-0">
          <div className="absolute inset-0 bg-gradient-to-br from-neutral-100 to-neutral-200 dark:from-neutral-800 dark:to-neutral-700 rounded-lg" />
          <Image
            src={integration.logo}
            alt={`${integration.displayName} logo`}
            width={48}
            height={48}
            className="relative z-10 rounded-lg p-2"
            onError={(e) => {
              // Fallback if logo fails to load
              e.currentTarget.style.display = 'none';
              e.currentTarget.parentElement?.classList.add('flex', 'items-center', 'justify-center');
              e.currentTarget.parentElement!.innerHTML = `<span class="text-xl font-bold">${integration.displayName.charAt(0)}</span>`;
            }}
          />
        </div>
        
        <div className="flex-1 min-w-0">
          <h3 className="font-medium text-neutral-900 dark:text-neutral-100 mb-1">
            {integration.displayName}
          </h3>
          <p className="text-sm text-neutral-600 dark:text-neutral-400 line-clamp-2 mb-3">
            {integration.description}
          </p>
          
          <div className="flex flex-wrap items-center gap-2 mb-3">
            <div className="flex items-center gap-1 px-2 py-1 bg-neutral-100 dark:bg-neutral-800 rounded text-xs">
              {authIcons[integration.authType]}
              <span>{authLabels[integration.authType]}</span>
            </div>
            {integration.categories.slice(0, 2).map((cat, idx) => (
              <div key={idx} className="px-2 py-1 bg-neutral-100 dark:bg-neutral-800 rounded text-xs">
                {cat}
              </div>
            ))}
          </div>
          
          {integration.functions.length > 0 && (
            <div className="space-y-1">
              <p className="text-xs font-medium text-neutral-500 dark:text-neutral-500">
                Populaire functies:
              </p>
              <ul className="text-xs text-neutral-600 dark:text-neutral-400 space-y-0.5">
                {integration.functions.slice(0, 3).map((func, idx) => (
                  <li key={idx} className="truncate">• {func}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
      
      <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
    </motion.div>
  );
};