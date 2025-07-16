"use client";
import React, { useState } from "react";
import { Heading } from "./heading";
import { Subheading } from "./subheading";
import { Button } from "./button";
import { Check, Calculator, ArrowRight, X } from "lucide-react";
import { 
  SiGmail, 
  SiGooglecalendar,
  SiGoogledrive, 
  SiSlack, 
  SiNotion,
  SiAsana,
  SiHubspot,
  SiMailchimp,
  SiLinkedin,
  SiWhatsapp,
  SiZapier,
  SiAirtable,
  SiTrello,
  SiClickup,
  SiDiscord,
  SiTelegram,
  SiSalesforce,
  SiJira,
  SiGithub,
  SiGitlab,
  SiBitbucket,
  SiSupabase
} from "react-icons/si";
import { FaAutoprefixer, FaDatabase, FaEnvelope, FaCalendarAlt, FaCode, FaHeart, FaMicrosoft } from "react-icons/fa";
import { cn } from "@/lib/utils";
import Link from "next/link";

interface Tool {
  id: string;
  name: string;
  category: string;
  price: number;
}

export const PricingCalculator = () => {
  const basePrice = 2495;
  const toolPrice = 199;
  
  const [selectedTools, setSelectedTools] = useState<string[]>([]);

  // Tool icon function
  const getToolIcon = (toolId: string, className: string = "w-4 h-4") => {
    switch (toolId) {
      case "gmail": return <SiGmail className={className} />;
      case "calendar": return <SiGooglecalendar className={className} />;
      case "drive": return <SiGoogledrive className={className} />;
      case "slack": return <SiSlack className={className} />;
      case "notion": return <SiNotion className={className} />;
      case "n8n": return <FaAutoprefixer className={className} />;
      case "asana": return <SiAsana className={className} />;
      case "monday": return <FaCalendarAlt className={className} />;
      case "hubspot": return <SiHubspot className={className} />;
      case "pipedrive": return <FaDatabase className={className} />;
      case "mailchimp": return <SiMailchimp className={className} />;
      case "klaviyo": return <FaEnvelope className={className} />;
      case "linkedin": return <SiLinkedin className={className} />;
      case "whatsapp": return <SiWhatsapp className={className} />;
      case "teams": return <FaMicrosoft className={className} />;
      case "discord": return <SiDiscord className={className} />;
      case "telegram": return <SiTelegram className={className} />;
      case "zapier": return <SiZapier className={className} />;
      case "airtable": return <SiAirtable className={className} />;
      case "trello": return <SiTrello className={className} />;
      case "clickup": return <SiClickup className={className} />;
      case "salesforce": return <SiSalesforce className={className} />;
      case "jira": return <SiJira className={className} />;
      case "github": return <SiGithub className={className} />;
      case "gitlab": return <SiGitlab className={className} />;
      case "bitbucket": return <SiBitbucket className={className} />;
      case "supabase": return <SiSupabase className={className} />;
      case "convex": return <FaDatabase className={className} />;
      case "replit": return <FaCode className={className} />;
      case "loveable": return <FaHeart className={className} />;
      case "canva": return <FaAutoprefixer className={className} />; // Using a generic icon for Canva
      default: return null;
    }
  };

  // Standard integrations (always included)
  const standardIntegrations = [
    { id: "gmail", name: "Gmail" },
    { id: "calendar", name: "Google Calendar" },
    { id: "drive", name: "Google Drive" },
    { id: "notion", name: "Notion" },
    { id: "asana", name: "Asana" },
    { id: "canva", name: "Canva" }
  ];

  // Available tools for upsell
  const availableTools: Tool[] = [
    // Communication
    { id: "slack", name: "Slack", category: "Communication", price: toolPrice },
    { id: "teams", name: "Microsoft Teams", category: "Communication", price: toolPrice },
    { id: "discord", name: "Discord", category: "Communication", price: toolPrice },
    { id: "telegram", name: "Telegram", category: "Communication", price: toolPrice },
    { id: "linkedin", name: "LinkedIn", category: "Communication", price: toolPrice },
    { id: "whatsapp", name: "WhatsApp", category: "Communication", price: toolPrice },
    
    // Automation
    { id: "n8n", name: "n8n Automation", category: "Automation", price: toolPrice },
    { id: "zapier", name: "Zapier", category: "Automation", price: toolPrice },
    
    // CRM
    { id: "hubspot", name: "HubSpot", category: "CRM", price: toolPrice },
    { id: "pipedrive", name: "Pipedrive", category: "CRM", price: toolPrice },
    { id: "salesforce", name: "Salesforce", category: "CRM", price: toolPrice },
    
    // Project Management
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
    { id: "bitbucket", name: "Bitbucket", category: "Development", price: toolPrice },
    { id: "replit", name: "Replit", category: "Development", price: toolPrice },
    { id: "loveable", name: "Loveable", category: "Development", price: toolPrice },
    
    // Email Marketing
    { id: "mailchimp", name: "Mailchimp", category: "Email Marketing", price: toolPrice },
    { id: "klaviyo", name: "Klaviyo", category: "Email Marketing", price: toolPrice },
  ];

  // Group tools by category
  const toolsByCategory = availableTools.reduce((acc, tool) => {
    if (!acc[tool.category]) acc[tool.category] = [];
    acc[tool.category].push(tool);
    return acc;
  }, {} as Record<string, Tool[]>);

  const toggleTool = (toolId: string) => {
    if (selectedTools.includes(toolId)) {
      setSelectedTools(selectedTools.filter(id => id !== toolId));
    } else {
      setSelectedTools([...selectedTools, toolId]);
    }
  };

  const totalPrice = basePrice + (selectedTools.length * toolPrice);

  return (
    <div className="relative z-20 py-10 md:py-40">
      <Heading as="h2">Bouw jouw AI-partner</Heading>
      <Subheading className="text-center">
        Elke professional heeft andere behoeften. 
        Configureer jouw perfecte AI-partner met de expertise die bij jou past.
      </Subheading>

      {/* Main content with two columns */}
      <div className="max-w-7xl mx-auto px-4 mt-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left column - Three pricing tables */}
          <div className="space-y-6">
            {/* Basic Package */}
            <div className="bg-white dark:bg-neutral-900 rounded-2xl p-6 border border-neutral-200 dark:border-neutral-800">
              <h3 className="text-xl font-medium mb-2">Basis AI-Partner</h3>
              <div className="text-3xl font-light mb-4">€{basePrice.toLocaleString('nl-NL')}</div>
              <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-6">
                Standaard integraties inbegrepen
              </p>
              <ul className="space-y-2">
                {standardIntegrations.map(tool => (
                  <li key={tool.id} className="flex items-center gap-2 text-sm">
                    <Check className="w-4 h-4 text-green-600 flex-shrink-0" />
                    <span>{tool.name}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Knowledge Packages */}
            <div className="bg-white dark:bg-neutral-900 rounded-2xl p-6 border border-neutral-200 dark:border-neutral-800">
              <h3 className="text-xl font-medium mb-2">Knowledge Packages</h3>
              <div className="text-sm text-neutral-600 dark:text-neutral-400 mb-4">
                Specialistische expertise modules
              </div>
              <ul className="space-y-3">
                <li>
                  <h4 className="font-medium text-sm mb-1">Content & Marketing</h4>
                  <p className="text-xs text-neutral-600 dark:text-neutral-400">
                    LinkedIn, Sales, Thought Leadership
                  </p>
                </li>
                <li>
                  <h4 className="font-medium text-sm mb-1">Business & Compliance</h4>
                  <p className="text-xs text-neutral-600 dark:text-neutral-400">
                    GDPR, AI Ethics, Team Training
                  </p>
                </li>
                <li>
                  <h4 className="font-medium text-sm mb-1">Technical Excellence</h4>
                  <p className="text-xs text-neutral-600 dark:text-neutral-400">
                    Development best practices
                  </p>
                </li>
              </ul>
              <div className="mt-4 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                <p className="text-xs text-blue-700 dark:text-blue-300">
                  Selecteer rechts welke tools je nodig hebt
                </p>
              </div>
            </div>

            {/* Implementation */}
            <div className="bg-white dark:bg-neutral-900 rounded-2xl p-6 border border-neutral-200 dark:border-neutral-800">
              <h3 className="text-xl font-medium mb-2">2-Weken Implementatie</h3>
              <div className="text-sm text-neutral-600 dark:text-neutral-400 mb-4">
                Professionele setup inclusief
              </div>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-sm">
                  <Check className="w-4 h-4 text-green-600 flex-shrink-0" />
                  <span>Persoonlijk intake gesprek</span>
                </li>
                <li className="flex items-center gap-2 text-sm">
                  <Check className="w-4 h-4 text-green-600 flex-shrink-0" />
                  <span>100-vragen assessment</span>
                </li>
                <li className="flex items-center gap-2 text-sm">
                  <Check className="w-4 h-4 text-green-600 flex-shrink-0" />
                  <span>AI-partner configuratie</span>
                </li>
                <li className="flex items-center gap-2 text-sm">
                  <Check className="w-4 h-4 text-green-600 flex-shrink-0" />
                  <span>Integratie setup</span>
                </li>
                <li className="flex items-center gap-2 text-sm">
                  <Check className="w-4 h-4 text-green-600 flex-shrink-0" />
                  <span>Training & onboarding</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Right column - Pricing Calculator */}
          <div className="lg:sticky lg:top-8 lg:h-fit">
            <div className="bg-gradient-to-br from-blue-50 to-white dark:from-blue-900/20 dark:to-neutral-900 rounded-3xl p-6 border border-blue-200 dark:border-blue-800">
              <h3 className="text-xl font-medium mb-4 text-center">Configureer jouw integraties</h3>
              
              {/* Tool Selection by Category */}
              <div className="space-y-4 mb-6 max-h-[500px] overflow-y-auto pr-2">
                {Object.entries(toolsByCategory).map(([category, tools]) => (
                  <div key={category}>
                    <h4 className="font-medium text-sm mb-2">{category}</h4>
                    <div className="grid grid-cols-1 gap-2">
                      {tools.map((tool) => (
                        <button
                          key={tool.id}
                          onClick={() => toggleTool(tool.id)}
                          className={cn(
                            "flex items-center justify-between p-2 rounded-lg border transition-all text-left w-full",
                            selectedTools.includes(tool.id)
                              ? "border-blue-500 bg-blue-50 dark:bg-blue-900/20"
                              : "border-neutral-200 dark:border-neutral-700 hover:border-neutral-300 dark:hover:border-neutral-600"
                          )}
                        >
                          <div className="flex items-center gap-2">
                            <div className={cn(
                              "w-4 h-4",
                              selectedTools.includes(tool.id)
                                ? "text-blue-600 dark:text-blue-400"
                                : "text-neutral-500 dark:text-neutral-400"
                            )}>
                              {getToolIcon(tool.id)}
                            </div>
                            <span className="text-xs font-medium">{tool.name}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <span className="text-xs text-neutral-600 dark:text-neutral-400">+€{tool.price}</span>
                            <div className={cn(
                              "w-4 h-4 rounded border-2 flex items-center justify-center flex-shrink-0",
                              selectedTools.includes(tool.id)
                                ? "border-blue-500 bg-blue-500"
                                : "border-neutral-300 dark:border-neutral-600"
                            )}>
                              {selectedTools.includes(tool.id) && (
                                <Check className="w-2.5 h-2.5 text-white" />
                              )}
                            </div>
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>
                ))}
              </div>


              {/* Price Summary */}
              <div className="p-4 bg-white dark:bg-neutral-900 rounded-xl">
                <div className="text-center">
                  <div className="text-3xl font-light mb-1">
                    €{totalPrice.toLocaleString('nl-NL')}
                  </div>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-3">
                    Basis + {selectedTools.length} integratie{selectedTools.length !== 1 ? 's' : ''}
                  </p>
                  
                  {/* Show selected tools summary */}
                  {selectedTools.length > 0 && (
                    <div className="mb-4">
                      <p className="text-xs text-neutral-600 dark:text-neutral-400 mb-2">Geselecteerde integraties:</p>
                      <div className="flex flex-wrap gap-1 justify-center">
                        {selectedTools.map(toolId => {
                          const tool = availableTools.find(t => t.id === toolId);
                          return tool ? (
                            <div
                              key={toolId}
                              className="flex items-center gap-1 px-2 py-0.5 bg-blue-100 dark:bg-blue-900/20 rounded text-xs"
                            >
                              {getToolIcon(toolId)}
                              <span>{tool.name}</span>
                            </div>
                          ) : null;
                        })}
                      </div>
                    </div>
                  )}
                  
                  <Button size="lg" className="w-full">
                    Start jouw AI-partnership
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};