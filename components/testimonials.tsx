"use client";

import { Heading } from "./heading";
import { Subheading } from "./subheading";
import { cn } from "@/lib/utils";
import { InViewDiv } from "./in-view-div";
import { useMemo } from "react";
import Image from "next/image";

export const Testimonials = () => {
  return (
    <div className="relative z-20 py-10 md:py-40">
      <Heading as="h2">Wat onze partners ervaren</Heading>
      <Subheading className="text-center max-w-lg mx-auto">
        Nederlandse professionals over hun 2-weken implementatie ervaring. 
        Meetbare resultaten vanaf dag 14.
      </Subheading>
      <TestimonialGrid />
    </div>
  );
};

interface Testimonial {
  name: string;
  quote: string;
  src: string;
  designation?: string;
  partner?: string;
}

const testimonials = [
  {
    name: "Eric McLean",
    partner: "Edward",
    quote:
      "Binnen 2 weken volledig operationeel. Edward bespaart me minimaal 40 uur per maand. ROI binnen eerste maand al behaald.",
    src: "/logos/clients/portfolio/Eric.jpeg",
    designation: "Managing Director @ TCEL",
  },
  {
    name: "Jeroen Stolk",
    partner: "Troy",
    quote:
      "Van eerste gesprek tot werkende AI-partner in 14 dagen. Troy genereert nu 80% van mijn LinkedIn content - allemaal in mijn stijl.",
    src: "/logos/clients/portfolio/Jeroen.jpeg",
    designation: "LinkedIn Sales Expert",
  },
  {
    name: "Rik Burgersdijk",
    partner: "Pro",
    quote:
      "€2.495 investering, €10.000+ aan ontwikkelkosten bespaard in eerste maand. Pro bouwt workflows sneller dan ons hele team.",
    src: "/logos/clients/portfolio/Rik.jpeg",
    designation: "Founder & CEO @ Proforto",
  },
  {
    name: "Els Verheirstraeten",
    partner: "Pietje",
    quote:
      "Gestandaardiseerd proces, persoonlijke uitkomst. Pietje was binnen 2 weken perfect afgestemd op mijn juridische expertise.",
    src: "/logos/clients/portfolio/Els.jpeg",
    designation: "Jouw partner rond AI wetgeving",
  },
  {
    name: "Gwendolyn Verburg",
    partner: "Flow",
    quote:
      "2 weken implementatie, maanden aan voorbereiding bespaard. Flow schrijft nu al mijn projectvoorstellen - beter dan ik zelf zou kunnen.",
    src: "/logos/clients/portfolio/Gwendolyn.jpeg",
    designation: "Projectcoördinator VoedselHub Nijmegen",
  },
  {
    name: "Gina Schinkel",
    partner: "Gigi",
    quote:
      "Direct waarde vanaf dag 14. Gigi verdubbelde mijn creatieve output terwijl ik juist minder uren werk.",
    src: "/logos/clients/portfolio/Gina.jpeg",
    designation: "Founder @ Driftawave",
  },
  {
    name: "Sven Dresen",
    partner: "Alfred",
    quote:
      "Inclusief alle knowledge packages was de keuze makkelijk. Alfred gebruikt alles wat nodig is voor strategisch advies op maat.",
    src: "/logos/clients/portfolio/svenicon.jpeg",
    designation: "Eigenaar @ S-Quisse Consulting",
  },
];

function Testimonial({
  name,
  quote,
  src,
  designation,
  partner,
  className,
  ...props
}: Omit<React.ComponentPropsWithoutRef<"figure">, keyof Testimonial> &
  Testimonial) {
  let animationDelay = useMemo(() => {
    let possibleAnimationDelays = [
      "0s",
      "0.1s",
      "0.2s",
      "0.3s",
      "0.4s",
      "0.5s",
    ];
    return possibleAnimationDelays[
      Math.floor(Math.random() * possibleAnimationDelays.length)
    ];
  }, []);

  const boxStyle = {};
  return (
    <figure
      className={cn(
        "animate-fade-in rounded-3xl bg-white p-6 opacity-0 shadow-lg dark:bg-neutral-900",
        className
      )}
      style={{
        animationDelay,
      }}
      {...props}
    >
      <div className="flex flex-col">
        <div className="flex gap-3 items-center mb-4">
          <Image
            src={src}
            width={150}
            height={150}
            className="h-12 w-12 rounded-full object-cover"
            alt={name}
          />
          <div>
            <h3 className="text-sm font-medium text-neutral-800 dark:text-neutral-200">
              {name}
            </h3>
            {partner && (
              <p className="text-xs text-neutral-600 dark:text-neutral-400">
                met AI-partner {partner}
              </p>
            )}
            <p className="text-xs text-neutral-500 dark:text-neutral-500">
              {designation}
            </p>
          </div>
        </div>
        <blockquote className="text-sm text-neutral-700 dark:text-neutral-300 italic">
          &ldquo;{quote}&rdquo;
        </blockquote>
      </div>
    </figure>
  );
}


function TestimonialGrid() {
  return (
    <InViewDiv className="relative mt-16 sm:mt-20">
      <div className="overflow-hidden">
        <div className="animate-marquee flex gap-8 py-4">
          {testimonials.concat(testimonials).map((testimonial, index) => (
            <Testimonial
              key={index}
              name={testimonial.name}
              quote={testimonial.quote}
              src={testimonial.src}
              designation={testimonial.designation}
              partner={testimonial.partner}
              className="flex-shrink-0 w-[400px]"
            />
          ))}
        </div>
      </div>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white dark:from-black to-transparent z-10" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white dark:from-black to-transparent z-10" />
    </InViewDiv>
  );
}