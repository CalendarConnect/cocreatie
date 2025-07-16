"use client";
import React from "react";
import { Heading } from "./heading";
import { Subheading } from "./subheading";
import { motion } from "framer-motion";

export const ProcessTimeline = () => {
  const weeks = [
    {
      title: "Week 1: Foundation & Design",
      days: [
        { period: "Dag 1-2", task: "Kennismakingsgesprek en doelen vaststellen" },
        { period: "Dag 3-4", task: "100-vragen assessment van jouw persoonlijkheid en expertise" },
        { period: "Dag 5-7", task: "AI-partner architectuur ontwerp en eerste tests" },
      ],
    },
    {
      title: "Week 2: Integration & Launch",
      days: [
        { period: "Dag 8-10", task: "Tech stack integraties en knowledge packages implementation" },
        { period: "Dag 11-12", task: "Samen testen en verfijnen tot het perfect aanvoelt" },
        { period: "Dag 13-14", task: "Launch en eerste week partnership begeleiding" },
      ],
    },
  ];

  return (
    <div className="relative z-20 py-10 md:py-40">
      <Heading as="h2">Van kennismaking tot AI partnership in twee weken</Heading>
      <Subheading className="text-center">
        Gestandaardiseerde methode, persoonlijke intelligentie
      </Subheading>

      <div className="max-w-5xl mx-auto mt-16 px-4">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {weeks.map((week, weekIndex) => (
            <motion.div
              key={week.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: weekIndex * 0.2 }}
              className="relative"
            >
              <div className="text-center mb-8">
                <h3 className="text-2xl font-light">{week.title}</h3>
              </div>
              
              <div className="space-y-6">
                {week.days.map((day, dayIndex) => (
                  <motion.div
                    key={day.period}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: weekIndex * 0.2 + dayIndex * 0.1 }}
                    className="bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-lg p-6 text-center hover:shadow-lg transition-shadow"
                  >
                    <div className="text-sm font-medium text-neutral-900 dark:text-neutral-100 mb-2">
                      {day.period}
                    </div>
                    <div className="text-neutral-600 dark:text-neutral-400">
                      {day.task}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="inline-block">
            <div className="bg-gradient-to-r from-neutral-100 to-neutral-200 dark:from-neutral-800 dark:to-neutral-700 rounded-2xl p-8 md:p-12">
              <h3 className="text-2xl font-light mb-4">Het resultaat</h3>
              <p className="text-lg text-neutral-700 dark:text-neutral-300 max-w-2xl">
                Jouw persoonlijke AI-partner, klaar om jouw strategische foundation te zijn 
                voor alle toekomstige AI implementaties.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};