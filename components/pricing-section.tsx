"use client";
import React from "react";
import { Heading } from "./heading";
import { Subheading } from "./subheading";
import { Button } from "./button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export const PricingSection = () => {
  return (
    <div className="relative z-20 py-10 md:py-40">
      <Heading as="h2">Investering in jouw AI-partner</Heading>
      <Subheading className="text-center">
        Eén duidelijke prijs, alle mogelijkheden inclusief
      </Subheading>

      <div className="max-w-3xl mx-auto mt-12 px-4 text-center">
        <div className="bg-white dark:bg-neutral-900 rounded-2xl p-8 border border-neutral-200 dark:border-neutral-800">
          <h3 className="text-3xl font-light mb-4">Bouw jouw AI-partner</h3>
          <p className="text-lg text-neutral-600 dark:text-neutral-400 mb-8">
            Elke professional heeft andere behoeften. 
            Configureer jouw perfecte AI-partner met de expertise die bij jou past.
          </p>

          <div className="mb-8 py-6 border-t border-b border-neutral-200 dark:border-neutral-800">
            <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-2">
              Basis AI-Partner inclusief standaard integraties
            </p>
            <div className="flex items-baseline justify-center gap-2">
              <span className="text-4xl font-light">Vanaf €2.495</span>
              <span className="text-neutral-600 dark:text-neutral-400">eenmalig</span>
            </div>
          </div>

          <Button as={Link} href="/pricing" size="lg" className="w-full sm:w-auto">
            Bouw je eigen AI-partner
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>

        {/* Value Props */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12">
          <div className="text-center">
            <div className="text-2xl font-light mb-2">2 weken</div>
            <p className="text-sm text-neutral-600 dark:text-neutral-400">
              Van intake tot operationele AI-partner
            </p>
          </div>
          <div className="text-center">
            <div className="text-2xl font-light mb-2">100%</div>
            <p className="text-sm text-neutral-600 dark:text-neutral-400">
              Persoonlijk afgestemd op jou
            </p>
          </div>
          <div className="text-center">
            <div className="text-2xl font-light mb-2">Levenslang</div>
            <p className="text-sm text-neutral-600 dark:text-neutral-400">
              Updates en support inclusief
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};