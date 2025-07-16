"use client";
import React, { useState } from "react";
import { Heading } from "./heading";
import { Subheading } from "./subheading";
import { Button } from "./button";
import { Check, Calculator, ArrowRight, Brain, Zap, Target, Pen, X } from "lucide-react";
import { useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";
import { 
  SiGmail, 
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
  SiSupabase,
  SiVercel,
  SiCloudflare,
  SiSentry,
  SiGoogleanalytics,
  SiFigma,
  SiReddit,
  SiYoutube,
  SiCoda,
  SiZoho
} from "react-icons/si";
import { FaAutoprefixer, FaDatabase, FaEnvelope, FaCalendarAlt, FaCode, FaHeart, FaMicrosoft, FaCloud, FaRobot, FaSearch, FaUsers, FaPalette, FaChartBar, FaBrain, FaLock, FaGlobe, FaCube } from "react-icons/fa";
import { cn } from "@/lib/utils";
import Link from "next/link";

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
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  // Form state
  const [formData, setFormData] = useState({
    companyName: "",
    contactName: "",
    email: "",
    phone: "",
    teamSize: "",
    departments: [] as string[],
    currentChallenges: "",
    aiExperience: "",
    desiredOutcomes: [] as string[],
    specificUseCases: "",
    monthlyInvestment: "",
    expectedROI: "",
    timelineUrgency: "",
  });
  
  const createSubmission = useMutation(api.pricingCalculator.createSubmission);

  // Form submission handler
  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      await createSubmission({
        ...formData,
        calculatedPrice: totalPrice,
        packageType: `${selectedPackages.length} packages, ${selectedTools.length} integraties`,
      });
      
      // Reset form and close modal
      setShowContactForm(false);
      setFormData({
        companyName: "",
        contactName: "",
        email: "",
        phone: "",
        teamSize: "",
        departments: [],
        currentChallenges: "",
        aiExperience: "",
        desiredOutcomes: [],
        specificUseCases: "",
        monthlyInvestment: "",
        expectedROI: "",
        timelineUrgency: "",
      });
      
      // Show success message or redirect
      alert("Bedankt voor je aanvraag! We nemen binnen 24 uur contact met je op.");
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Er is iets misgegaan. Probeer het opnieuw.");
    } finally {
      setIsSubmitting(false);
    }
  };

  // Knowledge Packages available
  const knowledgePackages: KnowledgePackage[] = [
    {
      id: "automation",
      name: "Automation Excellence",
      description: "AI-partner die jouw n8n automations kan bouwen",
      icon: <Zap className="w-5 h-5" />,
      requiredIntegrations: ["n8n"],
      price: packagePrice
    },
    {
      id: "linkedin-leadership",
      name: "LinkedIn Thought Leadership",
      description: "AI-partner die jouw LinkedIn strategie en implementatie uitvoert",
      icon: <SiLinkedin className="w-5 h-5" />,
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
      icon: <FaCalendarAlt className="w-5 h-5" />,
      requiredIntegrations: [],
      price: packagePrice
    }
  ];

  // Tool icon function
  const getToolIcon = (toolId: string, className: string = "w-4 h-4") => {
    switch (toolId) {
      // Communication
      case "gmail": return <SiGmail className={className} />;
      case "slack": return <SiSlack className={className} />;
      case "teams": 
      case "microsoft_teams": return <FaMicrosoft className={className} />;
      case "discord": return <SiDiscord className={className} />;
      case "telegram": return <SiTelegram className={className} />;
      case "linkedin": return <SiLinkedin className={className} />;
      case "whatsapp": return <SiWhatsapp className={className} />;
      case "ultra_msg": return <FaEnvelope className={className} />;
      case "feishu": return <FaEnvelope className={className} />;
      case "fireflies": return <FaEnvelope className={className} />;
      case "google_meet": return <FaCalendarAlt className={className} />;
      
      // Calendar & Planning
      case "calendar": 
      case "google_calendar": return <FaCalendarAlt className={className} />;
      case "calendly": return <FaCalendarAlt className={className} />;
      case "cal": return <FaCalendarAlt className={className} />;
      case "google_tasks": return <FaCalendarAlt className={className} />;
      
      // Document Management
      case "drive": 
      case "google_drive": return <FaCloud className={className} />;
      case "google_docs": return <FaCode className={className} />;
      case "google_sheets": return <FaDatabase className={className} />;
      case "share_point": return <FaMicrosoft className={className} />;
      case "notion": return <SiNotion className={className} />;
      case "coda": return <SiCoda className={className} />;
      case "accredible": return <FaCode className={className} />;
      case "cognito_forms": return <FaCode className={className} />;
      
      // Project Management
      case "asana": return <SiAsana className={className} />;
      case "monday": return <FaCalendarAlt className={className} />;
      case "trello": return <SiTrello className={className} />;
      case "clickup": return <SiClickup className={className} />;
      case "jira": return <SiJira className={className} />;
      case "wrike": return <FaCalendarAlt className={className} />;
      case "rocketlane": return <FaCalendarAlt className={className} />;
      
      // CRM & Sales
      case "hubspot": return <SiHubspot className={className} />;
      case "pipedrive": return <FaDatabase className={className} />;
      case "salesforce": return <SiSalesforce className={className} />;
      case "active_campaign": return <FaEnvelope className={className} />;
      case "one_page_crm": return <FaDatabase className={className} />;
      case "zoho_desk": return <SiZoho className={className} />;
      
      // Email Marketing
      case "mailchimp": return <SiMailchimp className={className} />;
      case "klaviyo": return <FaEnvelope className={className} />;
      case "sendgrid": return <FaEnvelope className={className} />;
      case "resend": return <FaEnvelope className={className} />;
      case "agent_mail": return <FaEnvelope className={className} />;
      case "one_signal": return <FaEnvelope className={className} />;
      
      // Automation
      case "n8n": return <FaAutoprefixer className={className} />;
      case "zapier": return <SiZapier className={className} />;
      case "aero_workflow": return <FaAutoprefixer className={className} />;
      case "tines": return <FaAutoprefixer className={className} />;
      
      // Database
      case "airtable": return <SiAirtable className={className} />;
      case "supabase": return <SiSupabase className={className} />;
      case "convex": return <FaDatabase className={className} />;
      case "baserow": return <FaDatabase className={className} />;
      case "neon": return <FaDatabase className={className} />;
      
      // Development
      case "github": return <SiGithub className={className} />;
      case "gitlab": return <SiGitlab className={className} />;
      case "bitbucket": return <SiBitbucket className={className} />;
      case "replit": return <FaCode className={className} />;
      case "loveable": return <FaHeart className={className} />;
      case "vercel": return <SiVercel className={className} />;
      case "cloudflare": return <SiCloudflare className={className} />;
      case "daytona": return <FaCode className={className} />;
      case "e2b": return <FaCode className={className} />;
      case "sentry": return <SiSentry className={className} />;
      
      // Analytics
      case "google_analytics_admin": return <SiGoogleanalytics className={className} />;
      case "posthog": return <FaChartBar className={className} />;
      case "paddle": return <FaChartBar className={className} />;
      case "dexscreener": return <FaChartBar className={className} />;
      case "coinmarketcap": return <FaChartBar className={className} />;
      case "coin_gecko": return <FaChartBar className={className} />;
      case "etherscan": return <FaCube className={className} />;
      case "solscan": return <FaCube className={className} />;
      
      // AI Tools
      case "dify": return <FaRobot className={className} />;
      case "replicate": return <FaRobot className={className} />;
      case "eleven_labs": return <FaRobot className={className} />;
      case "lmnt": return <FaRobot className={className} />;
      case "akkio": return <FaBrain className={className} />;
      case "aidbase": return <FaRobot className={className} />;
      
      // Search & Scraping
      case "brave_search": return <FaSearch className={className} />;
      case "exa_ai": return <FaSearch className={className} />;
      case "firecrawl": return <FaSearch className={className} />;
      case "serpapi": return <FaSearch className={className} />;
      case "tavily": return <FaSearch className={className} />;
      case "scrapybara": return <FaSearch className={className} />;
      case "zenrows": return <FaSearch className={className} />;
      case "steel": return <FaSearch className={className} />;
      case "browserbase": return <FaGlobe className={className} />;
      
      // Social Media
      case "reddit": return <SiReddit className={className} />;
      case "youtube": return <SiYoutube className={className} />;
      case "typefully": return <FaCode className={className} />;
      case "hackernews": return <FaCode className={className} />;
      
      // Design
      case "figma": return <SiFigma className={className} />;
      case "all_images": return <FaPalette className={className} />;
      case "canva": return <FaPalette className={className} />;
      
      // HR
      case "breezy": return <FaUsers className={className} />;
      case "factorialhr": return <FaUsers className={className} />;
      case "goco": return <FaUsers className={className} />;
      case "holded": return <FaUsers className={className} />;
      
      // Other
      case "arxiv": return <FaCode className={className} />;
      case "baidu_map": return <FaGlobe className={className} />;
      case "google_maps": return <FaGlobe className={className} />;
      case "open_weather_map": return <FaCode className={className} />;
      case "anchor_browser": return <FaCode className={className} />;
      case "apaleo": return <FaCode className={className} />;
      case "api_template": return <FaCode className={className} />;
      case "rossum": return <FaCode className={className} />;
      case "notte": return <FaCode className={className} />;
      case "agent_secrets_manager": return <FaLock className={className} />;
      
      default: return <FaCode className={className} />;
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

  // Available tools for extra integrations
  const availableTools: Tool[] = [
    // Communication
    { id: "slack", name: "Slack", category: "Communicatie", price: toolPrice },
    { id: "teams", name: "Microsoft Teams", category: "Communicatie", price: toolPrice },
    { id: "discord", name: "Discord", category: "Communicatie", price: toolPrice },
    { id: "telegram", name: "Telegram", category: "Communicatie", price: toolPrice },
    { id: "linkedin", name: "LinkedIn", category: "Communicatie", price: toolPrice },
    { id: "whatsapp", name: "WhatsApp", category: "Communicatie", price: toolPrice },
    { id: "ultra_msg", name: "Ultra MSG", category: "Communicatie", price: toolPrice },
    { id: "feishu", name: "Feishu", category: "Communicatie", price: toolPrice },
    { id: "fireflies", name: "Fireflies", category: "Communicatie", price: toolPrice },
    { id: "google_meet", name: "Google Meet", category: "Communicatie", price: toolPrice },
    
    // Automation & Workflow
    { id: "n8n", name: "n8n Automation", category: "Automatisering", price: toolPrice },
    { id: "zapier", name: "Zapier", category: "Automatisering", price: toolPrice },
    { id: "aero_workflow", name: "Aero Workflow", category: "Automatisering", price: toolPrice },
    { id: "tines", name: "Tines", category: "Automatisering", price: toolPrice },
    { id: "wrike", name: "Wrike", category: "Automatisering", price: toolPrice },
    
    // CRM & Sales
    { id: "hubspot", name: "HubSpot", category: "CRM", price: toolPrice },
    { id: "pipedrive", name: "Pipedrive", category: "CRM", price: toolPrice },
    { id: "salesforce", name: "Salesforce", category: "CRM", price: toolPrice },
    { id: "active_campaign", name: "ActiveCampaign", category: "CRM", price: toolPrice },
    { id: "one_page_crm", name: "OnePage CRM", category: "CRM", price: toolPrice },
    { id: "zoho_desk", name: "Zoho Desk", category: "CRM", price: toolPrice },
    
    // Project Management
    { id: "monday", name: "Monday.com", category: "Projectmanagement", price: toolPrice },
    { id: "trello", name: "Trello", category: "Projectmanagement", price: toolPrice },
    { id: "clickup", name: "ClickUp", category: "Projectmanagement", price: toolPrice },
    { id: "jira", name: "Jira", category: "Projectmanagement", price: toolPrice },
    { id: "coda", name: "Coda", category: "Projectmanagement", price: toolPrice },
    { id: "rocketlane", name: "Rocketlane", category: "Projectmanagement", price: toolPrice },
    
    // Database & Data
    { id: "airtable", name: "Airtable", category: "Database", price: toolPrice },
    { id: "supabase", name: "Supabase", category: "Database", price: toolPrice },
    { id: "convex", name: "Convex", category: "Database", price: toolPrice },
    { id: "baserow", name: "Baserow", category: "Database", price: toolPrice },
    { id: "neon", name: "Neon", category: "Database", price: toolPrice },
    
    // Development & DevOps
    { id: "github", name: "GitHub", category: "Development", price: toolPrice },
    { id: "gitlab", name: "GitLab", category: "Development", price: toolPrice },
    { id: "bitbucket", name: "Bitbucket", category: "Development", price: toolPrice },
    { id: "replit", name: "Replit", category: "Development", price: toolPrice },
    { id: "loveable", name: "Loveable", category: "Development", price: toolPrice },
    { id: "vercel", name: "Vercel", category: "Development", price: toolPrice },
    { id: "cloudflare", name: "Cloudflare", category: "Development", price: toolPrice },
    { id: "daytona", name: "Daytona", category: "Development", price: toolPrice },
    { id: "e2b", name: "E2B", category: "Development", price: toolPrice },
    { id: "sentry", name: "Sentry", category: "Development", price: toolPrice },
    
    // Email Marketing
    { id: "mailchimp", name: "Mailchimp", category: "Email Marketing", price: toolPrice },
    { id: "klaviyo", name: "Klaviyo", category: "Email Marketing", price: toolPrice },
    { id: "sendgrid", name: "SendGrid", category: "Email Marketing", price: toolPrice },
    { id: "resend", name: "Resend", category: "Email Marketing", price: toolPrice },
    { id: "agent_mail", name: "Agent Mail", category: "Email Marketing", price: toolPrice },
    { id: "one_signal", name: "OneSignal", category: "Email Marketing", price: toolPrice },
    
    // Calendar & Scheduling
    { id: "calendly", name: "Calendly", category: "Planning", price: toolPrice },
    { id: "cal", name: "Cal.com", category: "Planning", price: toolPrice },
    { id: "google_tasks", name: "Google Tasks", category: "Planning", price: toolPrice },
    
    // Document Management
    { id: "google_docs", name: "Google Docs", category: "Documenten", price: toolPrice },
    { id: "google_sheets", name: "Google Sheets", category: "Documenten", price: toolPrice },
    { id: "share_point", name: "SharePoint", category: "Documenten", price: toolPrice },
    { id: "accredible", name: "Accredible", category: "Documenten", price: toolPrice },
    { id: "cognito_forms", name: "Cognito Forms", category: "Documenten", price: toolPrice },
    
    // Analytics & Monitoring
    { id: "google_analytics_admin", name: "Google Analytics", category: "Analytics", price: toolPrice },
    { id: "posthog", name: "PostHog", category: "Analytics", price: toolPrice },
    { id: "paddle", name: "Paddle", category: "Analytics", price: toolPrice },
    { id: "dexscreener", name: "DexScreener", category: "Analytics", price: toolPrice },
    { id: "coinmarketcap", name: "CoinMarketCap", category: "Analytics", price: toolPrice },
    { id: "coin_gecko", name: "CoinGecko", category: "Analytics", price: toolPrice },
    { id: "etherscan", name: "Etherscan", category: "Analytics", price: toolPrice },
    { id: "solscan", name: "Solscan", category: "Analytics", price: toolPrice },
    
    // AI & Machine Learning
    { id: "dify", name: "Dify", category: "AI Tools", price: toolPrice },
    { id: "replicate", name: "Replicate", category: "AI Tools", price: toolPrice },
    { id: "eleven_labs", name: "ElevenLabs", category: "AI Tools", price: toolPrice },
    { id: "lmnt", name: "LMNT", category: "AI Tools", price: toolPrice },
    { id: "akkio", name: "Akkio", category: "AI Tools", price: toolPrice },
    { id: "aidbase", name: "Aidbase", category: "AI Tools", price: toolPrice },
    
    // Search & Web Scraping
    { id: "brave_search", name: "Brave Search", category: "Zoeken & Scraping", price: toolPrice },
    { id: "exa_ai", name: "Exa AI", category: "Zoeken & Scraping", price: toolPrice },
    { id: "firecrawl", name: "Firecrawl", category: "Zoeken & Scraping", price: toolPrice },
    { id: "serpapi", name: "SerpAPI", category: "Zoeken & Scraping", price: toolPrice },
    { id: "tavily", name: "Tavily", category: "Zoeken & Scraping", price: toolPrice },
    { id: "scrapybara", name: "Scrapybara", category: "Zoeken & Scraping", price: toolPrice },
    { id: "zenrows", name: "ZenRows", category: "Zoeken & Scraping", price: toolPrice },
    { id: "steel", name: "Steel", category: "Zoeken & Scraping", price: toolPrice },
    { id: "browserbase", name: "Browserbase", category: "Zoeken & Scraping", price: toolPrice },
    
    // Social Media & Content
    { id: "reddit", name: "Reddit", category: "Social Media", price: toolPrice },
    { id: "youtube", name: "YouTube", category: "Social Media", price: toolPrice },
    { id: "typefully", name: "Typefully", category: "Social Media", price: toolPrice },
    { id: "hackernews", name: "Hacker News", category: "Social Media", price: toolPrice },
    
    // Design & Creative
    { id: "figma", name: "Figma", category: "Design", price: toolPrice },
    { id: "all_images", name: "All Images", category: "Design", price: toolPrice },
    
    // HR & People Management
    { id: "breezy", name: "Breezy HR", category: "HR", price: toolPrice },
    { id: "factorialhr", name: "Factorial HR", category: "HR", price: toolPrice },
    { id: "goco", name: "GoCo", category: "HR", price: toolPrice },
    { id: "holded", name: "Holded", category: "HR", price: toolPrice },
    
    // Other Tools
    { id: "arxiv", name: "arXiv", category: "Overige", price: toolPrice },
    { id: "baidu_map", name: "Baidu Maps", category: "Overige", price: toolPrice },
    { id: "google_maps", name: "Google Maps", category: "Overige", price: toolPrice },
    { id: "open_weather_map", name: "OpenWeatherMap", category: "Overige", price: toolPrice },
    { id: "anchor_browser", name: "Anchor Browser", category: "Overige", price: toolPrice },
    { id: "apaleo", name: "Apaleo", category: "Overige", price: toolPrice },
    { id: "api_template", name: "API Template", category: "Overige", price: toolPrice },
    { id: "rossum", name: "Rossum", category: "Overige", price: toolPrice },
    { id: "notte", name: "Notte", category: "Overige", price: toolPrice },
    { id: "agent_secrets_manager", name: "Agent Secrets Manager", category: "Overige", price: toolPrice },
  ];

  // Group tools by category
  const toolsByCategory = availableTools.reduce((acc, tool) => {
    if (!acc[tool.category]) acc[tool.category] = [];
    acc[tool.category].push(tool);
    return acc;
  }, {} as Record<string, Tool[]>);

  const togglePackage = (packageId: string) => {
    if (selectedPackages.includes(packageId)) {
      setSelectedPackages(selectedPackages.filter(id => id !== packageId));
      // Remove required integrations when package is deselected
      const pkg = knowledgePackages.find(p => p.id === packageId);
      if (pkg?.requiredIntegrations) {
        setSelectedTools(selectedTools.filter(id => !pkg.requiredIntegrations?.includes(id)));
      }
    } else {
      setSelectedPackages([...selectedPackages, packageId]);
      // Automatically add required integrations
      const pkg = knowledgePackages.find(p => p.id === packageId);
      if (pkg?.requiredIntegrations) {
        const newTools = pkg.requiredIntegrations.filter(id => !selectedTools.includes(id));
        setSelectedTools([...selectedTools, ...newTools]);
      }
    }
  };

  const toggleTool = (toolId: string) => {
    // Check if this tool is required by any selected package
    const isRequired = selectedPackages.some(pkgId => {
      const pkg = knowledgePackages.find(p => p.id === pkgId);
      return pkg?.requiredIntegrations?.includes(toolId);
    });

    if (isRequired) {
      return; // Can't deselect required tools
    }

    if (selectedTools.includes(toolId)) {
      setSelectedTools(selectedTools.filter(id => id !== toolId));
    } else {
      setSelectedTools([...selectedTools, toolId]);
    }
  };

  const totalPrice = basePrice + (selectedPackages.length * packagePrice) + (selectedTools.length * toolPrice);

  return (
    <div className="relative z-20 py-10 md:py-40">
      <Heading as="h2">Bouw jouw AI-partner op maat</Heading>
      <Subheading className="text-center">
        Stel je perfecte AI-partner samen met de expertise en tools die bij jouw business passen
      </Subheading>

      {/* Main content with two columns */}
      <div className="max-w-7xl mx-auto px-4 mt-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left column - Packages */}
          <div className="space-y-6">
            {/* Basic Package */}
            <div className="bg-white dark:bg-neutral-900 rounded-2xl p-6 border border-neutral-200 dark:border-neutral-800">
              <h3 className="text-xl font-medium mb-2">Basis AI-Partner</h3>
              <div className="text-3xl font-light mb-4">€{basePrice.toLocaleString('nl-NL')}</div>
              <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-6">
                Jouw persoonlijke AI-partner met bedrijfsidentiteit, visie & missie
              </p>
              <div className="space-y-3 mb-6">
                <div className="p-3 bg-neutral-50 dark:bg-neutral-800 rounded-lg">
                  <p className="text-sm font-medium mb-2">Inclusief standaard integraties:</p>
                  <div className="grid grid-cols-2 gap-2">
                    {standardIntegrations.map(tool => (
                      <div key={tool.id} className="flex items-center gap-2 text-sm">
                        <Check className="w-4 h-4 text-green-600 flex-shrink-0" />
                        <span>{tool.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-sm">
                    <Check className="w-4 h-4 text-green-600 flex-shrink-0" />
                    <span>Volledige bedrijfsidentiteit integratie</span>
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <Check className="w-4 h-4 text-green-600 flex-shrink-0" />
                    <span>Tone of voice & communicatiestijl</span>
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <Check className="w-4 h-4 text-green-600 flex-shrink-0" />
                    <span>2 weken implementatie & training</span>
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <Check className="w-4 h-4 text-green-600 flex-shrink-0" />
                    <span>Levenslange updates & support</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Knowledge Packages */}
            <div className="bg-white dark:bg-neutral-900 rounded-2xl p-6 border border-neutral-200 dark:border-neutral-800">
              <h3 className="text-xl font-medium mb-4">Knowledge Packages</h3>
              <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-6">
                Voeg specialistische expertise toe aan jouw AI-partner
              </p>
              <div className="space-y-3">
                {knowledgePackages.map((pkg) => (
                  <button
                    key={pkg.id}
                    onClick={() => togglePackage(pkg.id)}
                    className={cn(
                      "w-full flex items-start gap-3 p-4 rounded-lg border transition-all text-left",
                      selectedPackages.includes(pkg.id)
                        ? "border-blue-500 bg-blue-50 dark:bg-blue-900/20"
                        : "border-neutral-200 dark:border-neutral-700 hover:border-neutral-300 dark:hover:border-neutral-600"
                    )}
                  >
                    <div className={cn(
                      "w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0",
                      selectedPackages.includes(pkg.id)
                        ? "bg-blue-500 text-white"
                        : "bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400"
                    )}>
                      {pkg.icon}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <h4 className="font-medium text-sm">{pkg.name}</h4>
                        <span className="text-sm text-neutral-600 dark:text-neutral-400">+€{pkg.price}</span>
                      </div>
                      <p className="text-xs text-neutral-600 dark:text-neutral-400">
                        {pkg.description}
                      </p>
                      {pkg.requiredIntegrations && pkg.requiredIntegrations.length > 0 && (
                        <p className="text-xs text-blue-600 dark:text-blue-400 mt-1">
                          Vereist: {pkg.requiredIntegrations.map(id => 
                            availableTools.find(t => t.id === id)?.name
                          ).join(', ')}
                        </p>
                      )}
                    </div>
                    <div className={cn(
                      "w-5 h-5 rounded border-2 flex items-center justify-center flex-shrink-0 mt-0.5",
                      selectedPackages.includes(pkg.id)
                        ? "border-blue-500 bg-blue-500"
                        : "border-neutral-300 dark:border-neutral-600"
                    )}>
                      {selectedPackages.includes(pkg.id) && (
                        <Check className="w-3 h-3 text-white" />
                      )}
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Right column - Integrations & Summary */}
          <div className="space-y-6">
            {/* Extra Integrations */}
            <div className="bg-white dark:bg-neutral-900 rounded-2xl p-6 border border-neutral-200 dark:border-neutral-800">
              <h3 className="text-xl font-medium mb-4">Extra Integraties</h3>
              <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-6">
                Koppel aanvullende tools (€199 per integratie)
              </p>
              
              <div className="space-y-4 max-h-[400px] overflow-y-auto pr-2">
                {Object.entries(toolsByCategory).map(([category, tools]) => (
                  <div key={category}>
                    <h4 className="font-medium text-sm mb-2">{category}</h4>
                    <div className="grid grid-cols-1 gap-2">
                      {tools.map((tool) => {
                        const isRequired = selectedPackages.some(pkgId => {
                          const pkg = knowledgePackages.find(p => p.id === pkgId);
                          return pkg?.requiredIntegrations?.includes(tool.id);
                        });
                        
                        return (
                          <button
                            key={tool.id}
                            onClick={() => toggleTool(tool.id)}
                            disabled={isRequired}
                            className={cn(
                              "flex items-center justify-between p-2 rounded-lg border transition-all text-left w-full",
                              selectedTools.includes(tool.id)
                                ? "border-blue-500 bg-blue-50 dark:bg-blue-900/20"
                                : "border-neutral-200 dark:border-neutral-700 hover:border-neutral-300 dark:hover:border-neutral-600",
                              isRequired && "opacity-50 cursor-not-allowed"
                            )}
                          >
                            <div className="flex items-center gap-2">
                              {getToolIcon(tool.id, cn(
                                "w-4 h-4",
                                selectedTools.includes(tool.id)
                                  ? "text-blue-600 dark:text-blue-400"
                                  : "text-neutral-500 dark:text-neutral-400"
                              ))}
                              <span className="text-xs font-medium">{tool.name}</span>
                              {isRequired && (
                                <span className="text-xs text-blue-600 dark:text-blue-400">(vereist)</span>
                              )}
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
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Price Summary */}
            <div className="bg-gradient-to-br from-blue-50 to-white dark:from-blue-900/20 dark:to-neutral-900 rounded-3xl p-6 border border-blue-200 dark:border-blue-800">
              <h3 className="text-xl font-medium mb-4 text-center">Jouw AI-Partner Configuratie</h3>
              
              {/* Selected items summary */}
              <div className="space-y-3 mb-6">
                <div className="flex justify-between items-center py-2 border-b border-neutral-200 dark:border-neutral-700">
                  <span className="text-sm">Basis AI-Partner</span>
                  <span className="text-sm font-medium">€{basePrice.toLocaleString('nl-NL')}</span>
                </div>
                
                {selectedPackages.length > 0 && (
                  <div>
                    <p className="text-xs text-neutral-600 dark:text-neutral-400 mb-2">Knowledge Packages:</p>
                    {selectedPackages.map(pkgId => {
                      const pkg = knowledgePackages.find(p => p.id === pkgId);
                      return pkg ? (
                        <div key={pkgId} className="flex justify-between items-center py-1">
                          <span className="text-sm">{pkg.name}</span>
                          <span className="text-sm">€{pkg.price}</span>
                        </div>
                      ) : null;
                    })}
                  </div>
                )}
                
                {selectedTools.length > 0 && (
                  <div>
                    <p className="text-xs text-neutral-600 dark:text-neutral-400 mb-2">Extra integraties:</p>
                    {selectedTools.map(toolId => {
                      const tool = availableTools.find(t => t.id === toolId);
                      return tool ? (
                        <div key={toolId} className="flex justify-between items-center py-1">
                          <span className="text-sm">{tool.name}</span>
                          <span className="text-sm">€{tool.price}</span>
                        </div>
                      ) : null;
                    })}
                  </div>
                )}
              </div>
              
              <div className="p-4 bg-white dark:bg-neutral-900 rounded-xl">
                <div className="text-center">
                  <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-2">
                    Totale investering
                  </p>
                  <div className="text-4xl font-light mb-4">
                    €{totalPrice.toLocaleString('nl-NL')}
                  </div>
                  <p className="text-xs text-neutral-600 dark:text-neutral-400 mb-4">
                    {selectedPackages.length} knowledge package{selectedPackages.length !== 1 ? 's' : ''} • 
                    {selectedTools.length} extra integratie{selectedTools.length !== 1 ? 's' : ''}
                  </p>
                  
                  <Button size="lg" className="w-full" onClick={() => setShowContactForm(true)}>
                    Start jouw AI-partnership
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Contact Form Modal */}
      {showContactForm && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white dark:bg-neutral-900 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-8">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-medium">Laatste stap naar jouw AI-partner</h2>
                <button
                  onClick={() => setShowContactForm(false)}
                  className="p-2 hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded-lg transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              
              <form onSubmit={handleFormSubmit} className="space-y-6">
                {/* Company Information */}
                <div className="space-y-4">
                  <h3 className="text-lg font-medium">Bedrijfsinformatie</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Bedrijfsnaam *</label>
                      <input
                        type="text"
                        required
                        value={formData.companyName}
                        onChange={(e) => setFormData({...formData, companyName: e.target.value})}
                        className="w-full px-4 py-2 border border-neutral-300 dark:border-neutral-700 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-neutral-800"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Contactpersoon *</label>
                      <input
                        type="text"
                        required
                        value={formData.contactName}
                        onChange={(e) => setFormData({...formData, contactName: e.target.value})}
                        className="w-full px-4 py-2 border border-neutral-300 dark:border-neutral-700 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-neutral-800"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">E-mail *</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        className="w-full px-4 py-2 border border-neutral-300 dark:border-neutral-700 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-neutral-800"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Telefoon</label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        className="w-full px-4 py-2 border border-neutral-300 dark:border-neutral-700 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-neutral-800"
                      />
                    </div>
                  </div>
                </div>
                
                {/* Team Information */}
                <div className="space-y-4">
                  <h3 className="text-lg font-medium">Team & Organisatie</h3>
                  <div>
                    <label className="block text-sm font-medium mb-2">Teamgrootte *</label>
                    <select
                      required
                      value={formData.teamSize}
                      onChange={(e) => setFormData({...formData, teamSize: e.target.value})}
                      className="w-full px-4 py-2 border border-neutral-300 dark:border-neutral-700 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-neutral-800"
                    >
                      <option value="">Selecteer teamgrootte</option>
                      <option value="1-5">1-5 medewerkers</option>
                      <option value="6-10">6-10 medewerkers</option>
                      <option value="11-25">11-25 medewerkers</option>
                      <option value="26-50">26-50 medewerkers</option>
                      <option value="50+">50+ medewerkers</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">Afdelingen die AI gaan gebruiken</label>
                    <div className="space-y-2">
                      {["Marketing", "Sales", "Operations", "HR", "Finance", "IT", "Klantenservice"].map((dept) => (
                        <label key={dept} className="flex items-center">
                          <input
                            type="checkbox"
                            checked={formData.departments.includes(dept)}
                            onChange={(e) => {
                              if (e.target.checked) {
                                setFormData({...formData, departments: [...formData.departments, dept]});
                              } else {
                                setFormData({...formData, departments: formData.departments.filter(d => d !== dept)});
                              }
                            }}
                            className="mr-2"
                          />
                          <span className="text-sm">{dept}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                </div>
                
                {/* AI Experience */}
                <div className="space-y-4">
                  <h3 className="text-lg font-medium">AI Ervaring & Doelen</h3>
                  <div>
                    <label className="block text-sm font-medium mb-2">Huidige AI-ervaring *</label>
                    <select
                      required
                      value={formData.aiExperience}
                      onChange={(e) => setFormData({...formData, aiExperience: e.target.value})}
                      className="w-full px-4 py-2 border border-neutral-300 dark:border-neutral-700 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-neutral-800"
                    >
                      <option value="">Selecteer ervaring</option>
                      <option value="geen">Geen ervaring met AI</option>
                      <option value="basis">Basis (ChatGPT, etc.)</option>
                      <option value="gemiddeld">Gemiddeld (meerdere tools)</option>
                      <option value="gevorderd">Gevorderd (AI in workflows)</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">Gewenste resultaten</label>
                    <div className="space-y-2">
                      {["Tijdsbesparing", "Kostenreductie", "Kwaliteitsverbetering", "Innovatie", "Schaalvergroting"].map((outcome) => (
                        <label key={outcome} className="flex items-center">
                          <input
                            type="checkbox"
                            checked={formData.desiredOutcomes.includes(outcome)}
                            onChange={(e) => {
                              if (e.target.checked) {
                                setFormData({...formData, desiredOutcomes: [...formData.desiredOutcomes, outcome]});
                              } else {
                                setFormData({...formData, desiredOutcomes: formData.desiredOutcomes.filter(o => o !== outcome)});
                              }
                            }}
                            className="mr-2"
                          />
                          <span className="text-sm">{outcome}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">Timeline urgentie *</label>
                    <select
                      required
                      value={formData.timelineUrgency}
                      onChange={(e) => setFormData({...formData, timelineUrgency: e.target.value})}
                      className="w-full px-4 py-2 border border-neutral-300 dark:border-neutral-700 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-neutral-800"
                    >
                      <option value="">Selecteer timeline</option>
                      <option value="direct">Direct beginnen</option>
                      <option value="1-maand">Binnen 1 maand</option>
                      <option value="3-maanden">Binnen 3 maanden</option>
                      <option value="exploratie">Alleen exploratie</option>
                    </select>
                  </div>
                </div>
                
                {/* Additional Information */}
                <div>
                  <label className="block text-sm font-medium mb-2">Specifieke uitdagingen of use cases (optioneel)</label>
                  <textarea
                    value={formData.specificUseCases}
                    onChange={(e) => setFormData({...formData, specificUseCases: e.target.value})}
                    rows={4}
                    className="w-full px-4 py-2 border border-neutral-300 dark:border-neutral-700 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-neutral-800"
                    placeholder="Vertel ons meer over wat je wilt bereiken met AI..."
                  />
                </div>
                
                {/* Price Summary */}
                <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4">
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Jouw AI-partner configuratie:</span>
                    <span className="text-2xl font-light">€{totalPrice.toLocaleString('nl-NL')}</span>
                  </div>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400 mt-1">
                    {selectedPackages.length} knowledge packages • {selectedTools.length} integraties
                  </p>
                </div>
                
                {/* Submit Button */}
                <div className="flex gap-4">
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => setShowContactForm(false)}
                    className="flex-1"
                  >
                    Terug
                  </Button>
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="flex-1"
                  >
                    {isSubmitting ? "Versturen..." : "Verstuur aanvraag"}
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};