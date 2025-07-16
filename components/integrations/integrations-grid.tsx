"use client";

import { useState, useMemo, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search } from "lucide-react";
import { IntegrationCard } from "./integration-card";
import { CategoryFilter } from "./category-filter";
import { Heading } from "@/components/heading";
import { Subheading } from "@/components/subheading";
import type { Integration } from "@/types/integration";

// Import the real ACI.dev data
import integrationsData from "@/data/aci-integrations.json";

export const IntegrationsGrid = () => {
  const [integrations, setIntegrations] = useState<Integration[]>([]);
  const [selectedCategory, setSelectedCategory] = useState("Alle");
  const [searchQuery, setSearchQuery] = useState("");
  const [showAll, setShowAll] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Load integrations data
    setIntegrations(integrationsData as Integration[]);
    setIsLoading(false);
  }, []);

  // Extract unique categories from the real data
  const categories = useMemo(() => {
    const allCategories = new Set<string>();
    integrations.forEach(integration => {
      integration.categories.forEach(cat => allCategories.add(cat));
    });
    return ["Alle", ...Array.from(allCategories).sort()];
  }, [integrations]);

  // Filter integrations based on category and search
  const filteredIntegrations = useMemo(() => {
    let filtered = integrations.filter(i => i.active);
    
    if (selectedCategory !== "Alle") {
      filtered = filtered.filter(i => i.categories.includes(selectedCategory));
    }
    
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(i => 
        i.displayName.toLowerCase().includes(query) ||
        i.description.toLowerCase().includes(query) ||
        i.functions.some(f => f.toLowerCase().includes(query)) ||
        i.categories.some(c => c.toLowerCase().includes(query))
      );
    }
    
    return filtered;
  }, [selectedCategory, searchQuery, integrations]);

  const displayedIntegrations = showAll ? filteredIntegrations : filteredIntegrations.slice(0, 12);

  // Calculate category counts
  const categoryCountMap = useMemo(() => {
    const counts = new Map<string, number>();
    counts.set("Alle", integrations.filter(i => i.active).length);
    
    integrations.forEach(integration => {
      if (integration.active) {
        integration.categories.forEach(cat => {
          counts.set(cat, (counts.get(cat) || 0) + 1);
        });
      }
    });
    
    return counts;
  }, [integrations]);

  if (isLoading) {
    return (
      <div className="relative z-20 py-10 lg:py-40">
        <div className="text-center">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            className="inline-block w-8 h-8 border-2 border-black dark:border-white border-t-transparent rounded-full"
          />
        </div>
      </div>
    );
  }

  return (
    <div className="relative z-20 py-10 lg:py-40">
      <Heading as="h2">Ontdek onze integrations</Heading>
      <Subheading className="text-center mb-12">
        Jouw AI-partner heeft directe toegang tot {integrations.length}+ business tools via beveiligde OAuth2 en API integraties
      </Subheading>
      
      {/* Search Bar */}
      <div className="max-w-2xl mx-auto mb-8">
        <div className="relative">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-neutral-400" />
          <input
            type="text"
            placeholder="Zoek naar tools, functies of integraties..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-12 pr-4 py-3 rounded-lg border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
          />
        </div>
      </div>
      
      {/* Category Filter with counts */}
      <div className="flex flex-wrap gap-2 justify-center mb-8">
        {categories.map((category, index) => {
          const count = categoryCountMap.get(category) || 0;
          return (
            <motion.button
              key={category}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.02 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedCategory(category)}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium text-sm transition-all duration-200 ${
                selectedCategory === category
                  ? "bg-black dark:bg-white text-white dark:text-black shadow-lg"
                  : "bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-200 dark:hover:bg-neutral-700"
              }`}
            >
              <span>{category}</span>
              <span className="text-xs opacity-60">({count})</span>
            </motion.button>
          );
        })}
      </div>
      
      {/* Integration Cards */}
      <AnimatePresence mode="popLayout">
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8"
        >
          {displayedIntegrations.map((integration, index) => (
            <IntegrationCard
              key={integration.name}
              integration={integration}
              index={index}
            />
          ))}
        </motion.div>
      </AnimatePresence>
      
      {filteredIntegrations.length === 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center py-12"
        >
          <p className="text-neutral-600 dark:text-neutral-400">
            Geen integraties gevonden voor &ldquo;{searchQuery}&rdquo;
          </p>
        </motion.div>
      )}
      
      {filteredIntegrations.length > 12 && !showAll && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center"
        >
          <button
            onClick={() => setShowAll(true)}
            className="px-6 py-3 bg-neutral-100 dark:bg-neutral-800 hover:bg-neutral-200 dark:hover:bg-neutral-700 rounded-lg font-medium transition-colors"
          >
            Bekijk alle {filteredIntegrations.length} integraties
          </button>
        </motion.div>
      )}
      
      {/* Integration Statistics */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
      >
        <div>
          <div className="text-3xl font-light mb-2">
            {integrations.filter(i => i.authType === "oauth2").length}
          </div>
          <div className="text-sm text-neutral-600 dark:text-neutral-400">OAuth2 Secured</div>
        </div>
        <div>
          <div className="text-3xl font-light mb-2">
            {integrations.filter(i => i.authType === "api_key").length}
          </div>
          <div className="text-sm text-neutral-600 dark:text-neutral-400">API Key Auth</div>
        </div>
        <div>
          <div className="text-3xl font-light mb-2">
            {categories.length - 1}
          </div>
          <div className="text-sm text-neutral-600 dark:text-neutral-400">Categorieën</div>
        </div>
        <div>
          <div className="text-3xl font-light mb-2">
            {integrations.filter(i => i.popular).length}
          </div>
          <div className="text-sm text-neutral-600 dark:text-neutral-400">Populaire Tools</div>
        </div>
      </motion.div>
      
      {/* Coming Soon Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="mt-20 p-8 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950/20 dark:to-purple-950/20 rounded-2xl text-center"
      >
        <h3 className="text-2xl font-light mb-4">600+ Integraties Beschikbaar</h3>
        <p className="text-neutral-600 dark:text-neutral-400 mb-6 max-w-2xl mx-auto">
          Dit is slechts een selectie van de beschikbare integraties. Jouw AI-partner heeft toegang tot meer dan 600 tools en platforms. 
          Mis je een specifieke integratie? Laat het ons weten!
        </p>
        <button className="px-6 py-3 bg-black dark:bg-white text-white dark:text-black font-medium rounded-lg hover:shadow-xl transition-shadow">
          Vraag een integratie aan
        </button>
      </motion.div>
    </div>
  );
};