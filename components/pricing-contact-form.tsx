"use client";
import React, { useState } from "react";
import { Button } from "./button";
import { X } from "lucide-react";

interface ContactFormProps {
  totalPrice: number;
  selectedPackages: string[];
  selectedTools: string[];
  packages: any[];
  tools: any[];
  onClose: () => void;
}

const ContactForm: React.FC<ContactFormProps> = ({
  totalPrice,
  selectedPackages,
  selectedTools,
  packages,
  tools,
  onClose,
}) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
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

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Show success message
      alert("Bedankt voor je interesse! We nemen binnen 24 uur contact met je op.");
      onClose();
    } catch (error) {
      alert("Er ging iets mis. Probeer het opnieuw of stuur een email naar info@co-creatie.ai");
    } finally {
      setIsSubmitting(false);
    }
  };

  const departmentOptions = [
    "Sales",
    "Marketing", 
    "Operations",
    "HR",
    "Finance",
    "IT",
    "Customer Service",
    "Product Development",
    "Management/C-Suite"
  ];

  const outcomeOptions = [
    "Tijdsbesparing (20+ uur per week)",
    "Consistente merkuitstraling",
    "Betere klantcommunicatie",
    "Snellere sales cycles",
    "Data-gedreven beslissingen",
    "Schaalbare processen",
    "Hogere teamproductiviteit",
    "Innovatieve AI-implementaties"
  ];

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
      <div className="bg-white dark:bg-neutral-900 rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-white dark:bg-neutral-900 border-b border-neutral-200 dark:border-neutral-800 p-6 flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold">Start jouw AI-partner traject</h2>
            <p className="text-sm text-neutral-600 dark:text-neutral-400 mt-1">
              Jouw investering: €{totalPrice.toLocaleString()} eenmalig
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded-lg transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
        
        <form onSubmit={handleFormSubmit} className="p-6 space-y-8">
          {/* Company Information */}
          <div>
            <h3 className="text-lg font-semibold mb-4">1. Bedrijfsinformatie</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-2">
                  Bedrijfsnaam *
                </label>
                <input
                  type="text"
                  required
                  value={formData.companyName}
                  onChange={(e) => setFormData({...formData, companyName: e.target.value})}
                  className="w-full px-4 py-2 border border-neutral-200 dark:border-neutral-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-neutral-800 dark:focus:ring-neutral-200 bg-white dark:bg-neutral-800"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">
                  Contactpersoon *
                </label>
                <input
                  type="text"
                  required
                  value={formData.contactName}
                  onChange={(e) => setFormData({...formData, contactName: e.target.value})}
                  className="w-full px-4 py-2 border border-neutral-200 dark:border-neutral-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-neutral-800 dark:focus:ring-neutral-200 bg-white dark:bg-neutral-800"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full px-4 py-2 border border-neutral-200 dark:border-neutral-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-neutral-800 dark:focus:ring-neutral-200 bg-white dark:bg-neutral-800"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">
                  Telefoon
                </label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  className="w-full px-4 py-2 border border-neutral-200 dark:border-neutral-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-neutral-800 dark:focus:ring-neutral-200 bg-white dark:bg-neutral-800"
                />
              </div>
            </div>
          </div>

          {/* Team Information */}
          <div>
            <h3 className="text-lg font-semibold mb-4">2. Team & Organisatie</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">
                  Teamgrootte
                </label>
                <select
                  value={formData.teamSize}
                  onChange={(e) => setFormData({...formData, teamSize: e.target.value})}
                  className="w-full px-4 py-2 border border-neutral-200 dark:border-neutral-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-neutral-800 dark:focus:ring-neutral-200 bg-white dark:bg-neutral-800"
                >
                  <option value="">Selecteer...</option>
                  <option value="1-5">1-5 medewerkers</option>
                  <option value="6-20">6-20 medewerkers</option>
                  <option value="21-50">21-50 medewerkers</option>
                  <option value="51-100">51-100 medewerkers</option>
                  <option value="100+">100+ medewerkers</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">
                  Welke afdelingen gaan met de AI-partner werken?
                </label>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                  {departmentOptions.map((dept) => (
                    <label key={dept} className="flex items-center gap-2">
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
                        className="rounded"
                      />
                      <span className="text-sm">{dept}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* AI Goals */}
          <div>
            <h3 className="text-lg font-semibold mb-4">3. AI Doelstellingen</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">
                  Huidige uitdagingen die je wilt oplossen
                </label>
                <textarea
                  value={formData.currentChallenges}
                  onChange={(e) => setFormData({...formData, currentChallenges: e.target.value})}
                  rows={3}
                  className="w-full px-4 py-2 border border-neutral-200 dark:border-neutral-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-neutral-800 dark:focus:ring-neutral-200 bg-white dark:bg-neutral-800"
                  placeholder="Bijvoorbeeld: Te veel tijd kwijt aan repetitieve taken, inconsistente communicatie, etc."
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">
                  Eerdere ervaring met AI
                </label>
                <select
                  value={formData.aiExperience}
                  onChange={(e) => setFormData({...formData, aiExperience: e.target.value})}
                  className="w-full px-4 py-2 border border-neutral-200 dark:border-neutral-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-neutral-800 dark:focus:ring-neutral-200 bg-white dark:bg-neutral-800"
                >
                  <option value="">Selecteer...</option>
                  <option value="none">Geen ervaring</option>
                  <option value="basic">Basis (ChatGPT, etc.)</option>
                  <option value="intermediate">Gemiddeld (enkele tools gebruikt)</option>
                  <option value="advanced">Gevorderd (AI geïntegreerd in processen)</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">
                  Gewenste resultaten (selecteer alle relevante opties)
                </label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {outcomeOptions.map((outcome) => (
                    <label key={outcome} className="flex items-center gap-2">
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
                        className="rounded"
                      />
                      <span className="text-sm">{outcome}</span>
                    </label>
                  ))}
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">
                  Specifieke use cases die je voor ogen hebt
                </label>
                <textarea
                  value={formData.specificUseCases}
                  onChange={(e) => setFormData({...formData, specificUseCases: e.target.value})}
                  rows={3}
                  className="w-full px-4 py-2 border border-neutral-200 dark:border-neutral-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-neutral-800 dark:focus:ring-neutral-200 bg-white dark:bg-neutral-800"
                  placeholder="Bijvoorbeeld: Automatisch LinkedIn posts schrijven, sales emails personaliseren, etc."
                />
              </div>
            </div>
          </div>

          {/* Investment & Timeline */}
          <div>
            <h3 className="text-lg font-semibold mb-4">4. Investering & Planning</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-2">
                  Huidige maandelijkse AI-tool uitgaven
                </label>
                <select
                  value={formData.monthlyInvestment}
                  onChange={(e) => setFormData({...formData, monthlyInvestment: e.target.value})}
                  className="w-full px-4 py-2 border border-neutral-200 dark:border-neutral-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-neutral-800 dark:focus:ring-neutral-200 bg-white dark:bg-neutral-800"
                >
                  <option value="">Selecteer...</option>
                  <option value="0">€0 - Geen AI tools</option>
                  <option value="1-50">€1-50 per maand</option>
                  <option value="51-200">€51-200 per maand</option>
                  <option value="201-500">€201-500 per maand</option>
                  <option value="500+">€500+ per maand</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">
                  Wanneer wil je starten?
                </label>
                <select
                  value={formData.timelineUrgency}
                  onChange={(e) => setFormData({...formData, timelineUrgency: e.target.value})}
                  className="w-full px-4 py-2 border border-neutral-200 dark:border-neutral-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-neutral-800 dark:focus:ring-neutral-200 bg-white dark:bg-neutral-800"
                >
                  <option value="">Selecteer...</option>
                  <option value="immediate">Direct (binnen 1 week)</option>
                  <option value="month">Binnen een maand</option>
                  <option value="quarter">Binnen 3 maanden</option>
                  <option value="exploring">Nog aan het verkennen</option>
                </select>
              </div>
            </div>
          </div>

          {/* Selected Configuration Summary */}
          <div className="bg-neutral-50 dark:bg-neutral-800 rounded-lg p-4">
            <h4 className="font-semibold mb-2">Jouw configuratie:</h4>
            <div className="text-sm space-y-1">
              <div>Basis AI-Partner: €2,495</div>
              {selectedPackages.length > 0 && (
                <div>
                  Knowledge Packages: {packages.filter(p => selectedPackages.includes(p.id)).map(p => p.name).join(", ")}
                </div>
              )}
              {selectedTools.length > 0 && (
                <div>
                  Extra integraties: {tools.filter(t => selectedTools.includes(t.id)).map(t => t.name).join(", ")}
                </div>
              )}
              <div className="font-semibold mt-2">Totaal: €{totalPrice.toLocaleString()} eenmalig</div>
            </div>
          </div>

          {/* Submit */}
          <div className="flex gap-4">
            <Button 
              type="submit" 
              disabled={isSubmitting}
              className="flex-1"
            >
              {isSubmitting ? "Verzenden..." : "Verstuur aanvraag"}
            </Button>
            <Button 
              type="button" 
              variant="outline"
              onClick={onClose}
              className="flex-1"
            >
              Annuleren
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;