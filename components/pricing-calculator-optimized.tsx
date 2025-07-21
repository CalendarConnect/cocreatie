"use client";
import React, { useState } from "react";
import { Heading } from "./heading";
import { Subheading } from "./subheading";
import { Button } from "./button";
import { Check, Calculator, ArrowRight, Brain, Zap, Target, Pen, X } from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import dynamic from "next/dynamic";

// Lazy load the heavy form component
const ContactForm = dynamic(() => import("./pricing-contact-form"), {
  loading: () => <div className="text-center p-8">Laden...</div>,
});

interface Tool {
  id: string;
  name: string;
  category: string;
  price: number;
}

interface KnowledgePackage {
  id: string;
  name: string;
  description: string;
  icon: React.ReactNode;
  requiredIntegrations?: string[];
  price: number;
}

export const PricingCalculator = () => {
  const basePrice = 2495;
  const packagePrice = 199;
  const toolPrice = 199;
  
  const [selectedPackages, setSelectedPackages] = useState<string[]>([]);
  const [selectedTools, setSelectedTools] = useState<string[]>([]);
  const [showContactForm, setShowContactForm] = useState(false);

  // Standard integrations included in base price
  const standardIntegrations = [
    "Gmail",
    "Google Calendar", 
    "Google Drive",
    "Notion",
    "Asana",
    "Canva"
  ];

  // Knowledge packages - using lucide icons which are already loaded
  const packages: KnowledgePackage[] = [
    {
      id: "automation",
      name: "Automation Excellence",
      description: "AI-partner die complexe automatiseringen bouwt en beheert",
      icon: <Zap className="w-5 h-5" />,
      requiredIntegrations: ["n8n"],
      price: packagePrice
    },
    {
      id: "linkedin",
      name: "LinkedIn Thought Leadership",
      description: "AI-partner die jouw LinkedIn strategie en implementatie uitvoert",
      icon: <Target className="w-5 h-5" />,
      requiredIntegrations: ["linkedin"],
      price: packagePrice
    },
    {
      id: "sales",
      name: "Sales Optimization",
      description: "AI-partner die je helpt conversies te verhogen",
      icon: <Target className="w-5 h-5" />,
      requiredIntegrations: [],
      price: packagePrice
    },
    {
      id: "neuromarketing",
      name: "Neuromarketing 2025",
      description: "AI-partner die copywriting optimaliseert met neuromarketing strategieën",
      icon: <Brain className="w-5 h-5" />,
      requiredIntegrations: [],
      price: packagePrice
    },
    {
      id: "content-creation",
      name: "Content Creation Pro",
      description: "AI-partner voor professionele content creatie",
      icon: <Pen className="w-5 h-5" />,
      requiredIntegrations: [],
      price: packagePrice
    },
    {
      id: "project-management",
      name: "Project Management",
      description: "AI-partner die projecten beheert en teams coördineert",
      icon: <Calculator className="w-5 h-5" />,
      requiredIntegrations: [],
      price: packagePrice
    }
  ];

  // Simplified tools without icons - icons loaded on demand
  const tools: Tool[] = [
    // Communication
    { id: "slack", name: "Slack", category: "Communication", price: toolPrice },
    { id: "teams", name: "Microsoft Teams", category: "Communication", price: toolPrice },
    { id: "discord", name: "Discord", category: "Communication", price: toolPrice },
    { id: "telegram", name: "Telegram", category: "Communication", price: toolPrice },
    { id: "linkedin", name: "LinkedIn", category: "Communication", price: toolPrice },
    { id: "whatsapp", name: "WhatsApp", category: "Communication", price: toolPrice },
    
    // Automation
    { id: "n8n", name: "n8n", category: "Automation", price: toolPrice },
    { id: "zapier", name: "Zapier", category: "Automation", price: toolPrice },
    
    // CRM
    { id: "hubspot", name: "HubSpot", category: "CRM", price: toolPrice },
    { id: "pipedrive", name: "Pipedrive", category: "CRM", price: toolPrice },
    { id: "salesforce", name: "Salesforce", category: "CRM", price: toolPrice },
    { id: "notion", name: "Notion (als CRM)", category: "CRM", price: toolPrice },
    
    // Project Management
    { id: "notion", name: "Notion (als PM)", category: "Project Management", price: toolPrice },
    { id: "monday", name: "Monday.com", category: "Project Management", price: toolPrice },
    { id: "trello", name: "Trello", category: "Project Management", price: toolPrice },
    { id: "clickup", name: "ClickUp", category: "Project Management", price: toolPrice },
    { id: "jira", name: "Jira", category: "Project Management", price: toolPrice },
    
    // Database
    { id: "airtable", name: "Airtable", category: "Database", price: toolPrice },
    { id: "supabase", name: "Supabase", category: "Database", price: toolPrice },
    { id: "convex", name: "Convex", category: "Database", price: toolPrice },
    
    // Development
    { id: "github", name: "GitHub", category: "Development", price: toolPrice },
    { id: "gitlab", name: "GitLab", category: "Development", price: toolPrice },
    { id: "replit", name: "Replit", category: "Development", price: toolPrice },
    { id: "loveable", name: "Loveable", category: "Development", price: toolPrice },
    
    // Email Marketing
    { id: "mailchimp", name: "Mailchimp", category: "Email Marketing", price: toolPrice },
    { id: "klaviyo", name: "Klaviyo", category: "Email Marketing", price: toolPrice },
    { id: "sendgrid", name: "SendGrid", category: "Email Marketing", price: toolPrice },
  ];

  // Group tools by category
  const toolsByCategory = tools.reduce((acc, tool) => {
    if (!acc[tool.category]) {
      acc[tool.category] = [];
    }
    acc[tool.category].push(tool);
    return acc;
  }, {} as Record<string, Tool[]>);

  // Handle package selection
  const togglePackage = (packageId: string) => {
    setSelectedPackages(prev => {
      const newSelection = prev.includes(packageId)
        ? prev.filter(id => id !== packageId)
        : [...prev, packageId];
      
      // Auto-select required integrations
      const selectedPackageObjs = packages.filter(p => newSelection.includes(p.id));
      const requiredTools = new Set<string>();
      
      selectedPackageObjs.forEach(pkg => {
        pkg.requiredIntegrations?.forEach(toolId => requiredTools.add(toolId));
      });
      
      setSelectedTools(prev => {
        const newTools = new Set([...prev, ...Array.from(requiredTools)]);
        return Array.from(newTools);
      });
      
      return newSelection;
    });
  };

  // Handle tool selection
  const toggleTool = (toolId: string) => {
    // Check if this tool is required by any selected package
    const isRequired = packages
      .filter(p => selectedPackages.includes(p.id))
      .some(p => p.requiredIntegrations?.includes(toolId));
    
    if (isRequired) return; // Cannot deselect required tools
    
    setSelectedTools(prev =>
      prev.includes(toolId)
        ? prev.filter(id => id !== toolId)
        : [...prev, toolId]
    );
  };

  // Calculate total price
  const packageTotal = selectedPackages.length * packagePrice;
  const toolTotal = selectedTools.length * toolPrice;
  const totalPrice = basePrice + packageTotal + toolTotal;

  return (
    <div className="relative z-20 py-10 lg:py-20">
      <div className="text-center mb-12">
        <Heading as="h1">Bouw jouw AI-partner op maat</Heading>
        <Subheading>
          Start met de basis, voeg knowledge packages toe, en selecteer extra integraties
        </Subheading>
      </div>

      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Column 1: Base AI Partner */}
          <div className="space-y-6">
            <div className="bg-white dark:bg-neutral-900 rounded-xl p-6 shadow-sm border border-neutral-200 dark:border-neutral-800">
              <h2 className="text-xl font-semibold mb-4">1. Basis AI-Partner</h2>
              <div className="text-3xl font-bold mb-4">€{basePrice.toLocaleString()}</div>
              <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-6">
                Inclusief standaard integraties en volledige implementatie
              </p>
              
              <div className="space-y-3">
                <div className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-neutral-800 dark:text-neutral-200 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Persoonlijke AI-partner op basis van jouw bedrijfsidentiteit</span>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-neutral-800 dark:text-neutral-200 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">2-weken implementatie traject</span>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-neutral-800 dark:text-neutral-200 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Standaard integraties inbegrepen:</span>
                </div>
                <div className="ml-7 space-y-1">
                  {standardIntegrations.map((integration) => (
                    <div key={integration} className="text-sm text-neutral-600 dark:text-neutral-400">
                      • {integration}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Column 2: Knowledge Packages */}
          <div className="space-y-6">
            <div className="bg-white dark:bg-neutral-900 rounded-xl p-6 shadow-sm border border-neutral-200 dark:border-neutral-800">
              <h2 className="text-xl font-semibold mb-4">2. Knowledge Packages</h2>
              <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-6">
                Voeg specialistische kennis toe aan jouw AI-partner
              </p>
              
              <div className="space-y-3">
                {packages.map((pkg) => (
                  <div
                    key={pkg.id}
                    className={cn(
                      "p-4 rounded-lg border cursor-pointer transition-all",
                      selectedPackages.includes(pkg.id)
                        ? "border-neutral-800 dark:border-neutral-200 bg-neutral-50 dark:bg-neutral-800"
                        : "border-neutral-200 dark:border-neutral-700 hover:border-neutral-300 dark:hover:border-neutral-600"
                    )}
                    onClick={() => togglePackage(pkg.id)}
                  >
                    <div className="flex items-start gap-3">
                      <div className="mt-0.5">{pkg.icon}</div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <h3 className="font-medium">{pkg.name}</h3>
                          <span className="text-sm font-medium">€{pkg.price}</span>
                        </div>
                        <p className="text-sm text-neutral-600 dark:text-neutral-400 mt-1">
                          {pkg.description}
                        </p>
                        {pkg.requiredIntegrations && pkg.requiredIntegrations.length > 0 && (
                          <p className="text-xs text-neutral-500 mt-2">
                            Vereist: {pkg.requiredIntegrations.join(", ")}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Column 3: Extra Integrations */}
          <div className="space-y-6">
            <div className="bg-white dark:bg-neutral-900 rounded-xl p-6 shadow-sm border border-neutral-200 dark:border-neutral-800">
              <h2 className="text-xl font-semibold mb-4">3. Extra Integraties</h2>
              <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-6">
                Koppel extra tools die je dagelijks gebruikt (€{toolPrice} per tool)
              </p>
              
              <div className="space-y-4 max-h-[500px] overflow-y-auto">
                {Object.entries(toolsByCategory).map(([category, categoryTools]) => (
                  <div key={category}>
                    <h3 className="text-sm font-semibold text-neutral-600 dark:text-neutral-400 mb-2">
                      {category}
                    </h3>
                    <div className="grid grid-cols-1 gap-2">
                      {categoryTools.map((tool) => {
                        const isRequired = packages
                          .filter(p => selectedPackages.includes(p.id))
                          .some(p => p.requiredIntegrations?.includes(tool.id));
                        
                        return (
                          <label
                            key={`${tool.category}-${tool.id}`}
                            className={cn(
                              "flex items-center gap-2 p-2 rounded cursor-pointer text-sm",
                              selectedTools.includes(tool.id)
                                ? "bg-neutral-100 dark:bg-neutral-800"
                                : "hover:bg-neutral-50 dark:hover:bg-neutral-800/50",
                              isRequired && "opacity-50 cursor-not-allowed"
                            )}
                          >
                            <input
                              type="checkbox"
                              checked={selectedTools.includes(tool.id)}
                              onChange={() => toggleTool(tool.id)}
                              disabled={isRequired}
                              className="rounded"
                            />
                            <span className="flex-1">{tool.name}</span>
                            {isRequired && (
                              <span className="text-xs text-neutral-500">(vereist)</span>
                            )}
                          </label>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Total Price Summary */}
        <div className="mt-8 bg-neutral-100 dark:bg-neutral-800 rounded-xl p-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div className="space-y-1">
              <h3 className="text-lg font-semibold">Jouw investering</h3>
              <div className="text-sm text-neutral-600 dark:text-neutral-400 space-y-1">
                <div>Basis AI-Partner: €{basePrice.toLocaleString()}</div>
                {packageTotal > 0 && (
                  <div>{selectedPackages.length} Knowledge Package(s): €{packageTotal.toLocaleString()}</div>
                )}
                {toolTotal > 0 && (
                  <div>{selectedTools.length} Extra integratie(s): €{toolTotal.toLocaleString()}</div>
                )}
              </div>
            </div>
            <div className="text-right">
              <div className="text-3xl font-bold">€{totalPrice.toLocaleString()}</div>
              <div className="text-sm text-neutral-600 dark:text-neutral-400">eenmalig, excl. BTW</div>
            </div>
          </div>
          
          <div className="mt-6 flex flex-col sm:flex-row gap-4">
            <Button 
              onClick={() => setShowContactForm(true)}
              className="flex-1"
            >
              Start jouw AI-partner traject
              <ArrowRight className="w-4 h-4 ml-2 inline-block" />
            </Button>
            <Link href="/contact" className="flex-1">
              <Button variant="outline" className="w-full">
                Stel een vraag
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Lazy-loaded Contact Form Modal */}
      {showContactForm && (
        <ContactForm
          totalPrice={totalPrice}
          selectedPackages={selectedPackages}
          selectedTools={selectedTools}
          packages={packages}
          tools={tools}
          onClose={() => setShowContactForm(false)}
        />
      )}
    </div>
  );
};