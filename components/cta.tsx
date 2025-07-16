"use client";
import React from "react";
import Balancer from "react-wrap-balancer";
import Link from "next/link";
import { Button } from "./button";

export const CTA = () => {
  return (
    <section className="py-40 w-full overflow-hidden relative z-30">
      <div className="bg-white dark:bg-black">
        <div className="mx-auto w-full relative z-20 sm:max-w-[40rem] md:max-w-[48rem] lg:max-w-[64rem] xl:max-w-[80rem] bg-black dark:bg-white sm:rounded-2xl">
          <div className="relative -mx-6 sm:mx-0 sm:rounded-2xl overflow-hidden px-6 md:px-8">
            <div
              className="absolute inset-0 w-full h-full opacity-5 bg-noise fade-vignette [mask-image:radial-gradient(#fff,transparent,75%)]"
              style={{
                backgroundImage: "url(/noise.webp)",
                backgroundSize: "30%",
              }}
            ></div>
            <div
              className="pointer-events-none absolute inset-y-0 right-0 select-none overflow-hidden rounded-2xl"
              style={{
                mask: "radial-gradient(33.875rem 33.875rem at calc(100% - 8.9375rem) 0, white 3%, transparent 70%)",
              }}
            ></div>

            <div className="relative px-6 pb-14 pt-20 sm:px-10 sm:pb-20 lg:px-[4.5rem]">
              <h2 className="text-center text-balance mx-auto text-3xl md:text-5xl font-light tracking-[-0.015em] text-white dark:text-black">
                Klaar voor jouw AI-partner?
              </h2>
              <p className="mt-4 max-w-[32rem] text-center mx-auto text-base/6 text-neutral-200 dark:text-neutral-800">
                <Balancer>
                  Begin met een vrijblijvend gesprek. We ontdekken samen welke AI-partner 
                  bij jou past en hoe deze jouw werk kan versterken.
                </Balancer>
              </p>

              <div className="relative z-10 mx-auto flex flex-col sm:flex-row gap-4 justify-center mt-8">
                <Button 
                  as={Link} 
                  href="/pricing"
                  className="bg-white text-black hover:bg-neutral-100 dark:bg-black dark:text-white dark:hover:bg-neutral-900"
                >
                  Ontdek jouw AI-partner
                </Button>
                <Button 
                  variant="simple" 
                  className="text-white dark:text-black border-white dark:border-black hover:bg-white/10 dark:hover:bg-black/10"
                >
                  Lees meer over het proces
                </Button>
              </div>

              <p className="text-center mt-8 text-sm text-neutral-300 dark:text-neutral-700">
                €2.495 eenmalige investering • Twee weken bouwtijd • Levenslange support
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};