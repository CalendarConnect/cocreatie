import Link from "next/link";
import React from "react";
import { Logo } from "./Logo";

export const Footer = () => {
  const links = [
    {
      name: "Investering",
      href: "/investering",
    },
    {
      name: "Over ons",
      href: "/over-ons",
    },
    {
      name: "Contact",
      href: "/contact",
    },
  ];
  const legal = [
    {
      name: "Privacy Beleid",
      href: "/privacy",
    },
    {
      name: "Algemene Voorwaarden",
      href: "/voorwaarden",
    },
    {
      name: "Cookie Beleid",
      href: "/cookies",
    },
  ];
  const socials = [
    {
      name: "LinkedIn",
      href: "https://linkedin.com/company/co-creatie-ai",
    },
  ];
  return (
    <div className="relative">
      <div className="border-t border-neutral-100  dark:border-neutral-800 px-8 pt-20 pb-32 relative bg-white dark:bg-black">
        <div className="max-w-7xl mx-auto text-sm text-neutral-500 dark:text-neutral-400 flex sm:flex-row flex-col justify-between items-start ">
          <div>
            <div className="mr-4  md:flex mb-4">
              <Logo />
            </div>
            <div>Copyright &copy; 2025 Co-creatie.ai</div>
            <div className="mt-2">Alle rechten voorbehouden</div>
            <div className="mt-4 max-w-xs">
              <p className="text-xs leading-relaxed">
                Nederlandse professionals begeleiden we naar hun eerste AI-partnership 
                door zorgvuldig ontwerp van echte verbindingsmomenten.
              </p>
            </div>
            <div className="mt-4">
              <p className="text-xs font-medium">Christian Bleeker</p>
              <p className="text-xs">AI Partner Architect & Oprichter</p>
            </div>
            <div className="mt-6 pt-4 border-t border-neutral-200 dark:border-neutral-700">
              <p className="text-xs font-medium mb-2">Bedrijfsinformatie</p>
              <div className="text-xs leading-relaxed space-y-1">
                <p>Startup Nijmegen</p>
                <p>Stationsplein 26</p>
                <p>6512 AB</p>
                <p>Nijmegen, The Netherlands</p>
                <p className="mt-2">Kvk: 97026212</p>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-10 items-start mt-10 md:mt-0">
            <div className="flex justify-center space-y-4 flex-col mt-4">
              {links.map((link) => (
                <Link
                  key={link.name}
                  className="transition-colors hover:text-black text-muted dark:text-muted-dark dark:hover:text-neutral-400 text-xs sm:text-sm"
                  href={link.href}
                >
                  {link.name}
                </Link>
              ))}
            </div>
            <div className="flex justify-center space-y-4 flex-col mt-4">
              {legal.map((link) => (
                <Link
                  key={link.name}
                  className="transition-colors hover:text-black text-muted dark:text-muted-dark dark:hover:text-neutral-400 text-xs sm:text-sm"
                  href={link.href}
                >
                  {link.name}
                </Link>
              ))}
            </div>
            <div className="flex justify-center space-y-4 flex-col mt-4">
              {socials.map((link) => (
                <Link
                  key={link.name}
                  className="transition-colors hover:text-black text-muted dark:text-muted-dark dark:hover:text-neutral-400 text-xs sm:text-sm"
                  href={link.href}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
      <p className="text-center text-4xl md:text-7xl lg:text-[12rem] font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 dark:from-neutral-950 to-neutral-200 dark:to-neutral-800 inset-x-0">
        CO-CREATIE.AI
      </p>
    </div>
  );
};
