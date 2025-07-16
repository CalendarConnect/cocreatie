"use client";
import React from "react";
import { Heading } from "./heading";
import { Subheading } from "./subheading";
import { Calculator, TrendingUp, Clock, Euro } from "lucide-react";
import { motion } from "framer-motion";

export const ROISection = () => {
  const calculations = [
    {
      icon: Clock,
      title: "Tijdsbesparing",
      calculation: "10 uur/week × €150/uur",
      monthly: "€6.000+",
      description: "Gemiddelde besparing per maand",
    },
    {
      icon: Euro,
      title: "Terugverdiend in",
      calculation: "€3.495 ÷ €6.000",
      monthly: "2 weken",
      description: "Development tijd = break-even",
    },
    {
      icon: TrendingUp,
      title: "Jaarlijkse waarde",
      calculation: "€6.000 × 12 maanden",
      monthly: "€72.000+",
      description: "Potentiële jaarlijkse besparing",
    },
  ];

  const alternatives = [
    {
      option: "Freelance AI expert",
      cost: "€16.000-€48.000",
      period: "per maand",
    },
    {
      option: "In-house AI team",
      cost: "€300.000-€500.000",
      period: "per jaar",
    },
    {
      option: "Jouw AI-partner",
      cost: "€3.495",
      period: "eenmalig",
      highlight: true,
    },
  ];

  return (
    <div className="relative z-20 py-10 md:py-40">
      <Heading as="h2">Waarom €3.495 de beste investering is die je dit jaar doet</Heading>
      <Subheading className="text-center">
        Nederlandse bedrijven besparen gemiddeld €6.24 miljoen door AI implementatie - 
        start met een partner die jou begrijpt
      </Subheading>

      {/* ROI Calculations */}
      <div className="max-w-5xl mx-auto mt-12 px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {calculations.map((calc, index) => {
            const Icon = calc.icon;
            return (
              <motion.div
                key={calc.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white dark:bg-neutral-900 rounded-2xl p-6 border border-neutral-200 dark:border-neutral-800"
              >
                <div className="flex items-center justify-between mb-4">
                  <Icon className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                  <Calculator className="w-5 h-5 text-neutral-400" />
                </div>
                <h3 className="font-medium mb-2">{calc.title}</h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-3">
                  {calc.calculation}
                </p>
                <div className="text-3xl font-light text-blue-600 dark:text-blue-400 mb-1">
                  {calc.monthly}
                </div>
                <p className="text-sm text-neutral-600 dark:text-neutral-400">
                  {calc.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Alternatives Comparison */}
        <div className="bg-neutral-50 dark:bg-neutral-900 rounded-2xl p-8">
          <h3 className="text-xl font-medium mb-6 text-center">
            Versus alternatieven
          </h3>
          <div className="space-y-4">
            {alternatives.map((alt, index) => (
              <motion.div
                key={alt.option}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 + index * 0.1 }}
                className={`flex items-center justify-between p-4 rounded-lg ${
                  alt.highlight 
                    ? "bg-blue-50 dark:bg-blue-900/20 border-2 border-blue-200 dark:border-blue-800" 
                    : "bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700"
                }`}
              >
                <span className={`font-medium ${alt.highlight ? "text-blue-700 dark:text-blue-300" : ""}`}>
                  {alt.option}
                </span>
                <div className="text-right">
                  <span className={`text-xl font-light ${alt.highlight ? "text-blue-700 dark:text-blue-300" : ""}`}>
                    {alt.cost}
                  </span>
                  <span className={`text-sm text-neutral-600 dark:text-neutral-400 ml-2 ${
                    alt.highlight ? "text-blue-600 dark:text-blue-400" : ""
                  }`}>
                    {alt.period}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Success Stat */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="text-center mt-12 p-6 bg-gradient-to-r from-blue-50 to-white dark:from-blue-900/20 dark:to-neutral-900 rounded-2xl"
        >
          <div className="flex items-center justify-center gap-2 mb-2">
            <TrendingUp className="w-6 h-6 text-blue-600 dark:text-blue-400" />
            <span className="text-3xl font-light">€6.24 miljoen</span>
          </div>
          <p className="text-neutral-600 dark:text-neutral-400">
            Gemiddelde besparing voor Nederlandse bedrijven door AI implementatie
          </p>
          <p className="text-sm text-neutral-500 dark:text-neutral-500 mt-2">
            Start met een partner die jouw business begrijpt
          </p>
        </motion.div>
      </div>
    </div>
  );
};