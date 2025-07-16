"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { 
  MessageSquare, 
  Briefcase, 
  Code, 
  TrendingUp, 
  Search, 
  CreditCard, 
  Palette, 
  BarChart3,
  Package
} from "lucide-react";

interface CategoryFilterProps {
  categories: string[];
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

const categoryIcons: Record<string, React.ReactNode> = {
  "Alle": <Package className="w-4 h-4" />,
  "Communicatie": <MessageSquare className="w-4 h-4" />,
  "Productiviteit": <Briefcase className="w-4 h-4" />,
  "Development": <Code className="w-4 h-4" />,
  "Sales & Marketing": <TrendingUp className="w-4 h-4" />,
  "Search & Scraping": <Search className="w-4 h-4" />,
  "Finance": <CreditCard className="w-4 h-4" />,
  "Design & Creative": <Palette className="w-4 h-4" />,
  "Data & Analytics": <BarChart3 className="w-4 h-4" />,
};

export const CategoryFilter = ({ 
  categories, 
  selectedCategory, 
  onCategoryChange 
}: CategoryFilterProps) => {
  return (
    <div className="flex flex-wrap gap-2 justify-center mb-8">
      {categories.map((category, index) => (
        <motion.button
          key={category}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3, delay: index * 0.05 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => onCategoryChange(category)}
          className={cn(
            "flex items-center gap-2 px-4 py-2 rounded-lg font-medium text-sm transition-all duration-200",
            selectedCategory === category
              ? "bg-black dark:bg-white text-white dark:text-black shadow-lg"
              : "bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-200 dark:hover:bg-neutral-700"
          )}
        >
          {categoryIcons[category] || categoryIcons["Alle"]}
          <span>{category}</span>
          {category === "Alle" && (
            <span className="text-xs opacity-60">600+</span>
          )}
        </motion.button>
      ))}
    </div>
  );
};