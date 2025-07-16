"use client";
import Link from "next/link";
import React from "react";
import Image from "next/image";

export const Logo = () => {
  return (
    <Link
      href="/"
      className="font-normal flex space-x-3 items-center text-sm mr-4 text-black px-2 py-1 relative z-20"
    >
      <Image
        src="/logos/cocreatielogopng.png"
        alt="co-creatie.ai"
        width={120}
        height={40}
        className="h-8 w-auto dark:invert"
      />
      <span className="font-poppins font-medium text-lg text-black dark:text-white">
        co-creatie
      </span>
    </Link>
  );
};