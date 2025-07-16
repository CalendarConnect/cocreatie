"use client";
import React from "react";
import { Shield, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

export const GuaranteeSection = () => {
  return (
    <div className="relative z-20 py-10 md:py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-3xl mx-auto px-4"
      >
        <div className="bg-gradient-to-br from-green-50 to-white dark:from-green-900/20 dark:to-neutral-900 rounded-2xl p-8 md:p-12 border border-green-200 dark:border-green-800 text-center">
          <div className="flex justify-center mb-6">
            <div className="relative">
              <Shield className="w-16 h-16 text-green-600 dark:text-green-400" />
              <CheckCircle className="w-6 h-6 text-green-600 dark:text-green-400 absolute -bottom-1 -right-1 bg-white dark:bg-black rounded-full" />
            </div>
          </div>

          <h2 className="text-2xl md:text-3xl font-light mb-4">
            30-dagen geld-terug garantie
          </h2>
          
          <p className="text-lg text-neutral-700 dark:text-neutral-300 mb-6">
            Als jouw AI-partner niet binnen 30 dagen waarde levert 
            die je investering overtreft, krijg je je geld terug.
          </p>

          <p className="text-neutral-600 dark:text-neutral-400">
            Dat is hoe zeker we zijn van onze aanpak.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-8 pt-8 border-t border-green-200 dark:border-green-700">
            <div>
              <div className="text-2xl font-light mb-2">100%</div>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                Geld-terug garantie
              </p>
            </div>
            <div>
              <div className="text-2xl font-light mb-2">30 dagen</div>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                Om te ervaren
              </p>
            </div>
            <div>
              <div className="text-2xl font-light mb-2">0 risico</div>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                Voor jou
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};