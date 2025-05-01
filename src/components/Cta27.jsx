"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";

export function Cta27() {
  return (
    <section id="relume" className="relative px-[5%] py-20 md:py-28 lg:py-32">
      <div className="relative z-10 container max-w-2xl text-center">
        <div className="flex flex-col items-center">
          <div className="w-20 h-[1px] bg-[#d4b98c] mb-6"></div>
          <h2 className="mb-6 text-5xl font-serif font-bold text-[#f8f3e9] md:mb-8 md:text-6xl lg:text-7xl tracking-wide">
            Escape to Wellness at the Castle
          </h2>
          <p className="text-[#d4b98c] font-serif md:text-lg max-w-xl mx-auto">
            Join us for a transformative retreat in a luxurious castle surrounded
            by nature and tranquility. Experience royal treatment and centuries of heritage.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-6 md:mt-12">
            <Button 
              title="Reserve Your Stay" 
              className="px-8 py-3 bg-[#8b2131] hover:bg-[#6a1926] text-[#f8f3e9] border border-[#d4b98c] font-serif tracking-wider transition-all duration-300 shadow-md"
            >
              Reserve Your Stay
            </Button>
            <Button 
              title="Explore Packages" 
              variant="secondary-alt"
              className="px-8 py-3 bg-transparent hover:bg-[#d4b98c]/10 text-[#d4b98c] border border-[#d4b98c] font-serif tracking-wider transition-all duration-300"
            >
              Explore Packages
            </Button>
          </div>
        </div>
      </div>
      <div className="absolute inset-0 z-0">
        <img
          src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
          className="size-full object-cover"
          alt="Castle Wellness Retreat"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a14] via-[#1a1a14]/70 to-[#1a1a14]/80" />
        <div className="absolute inset-0 border-8 border-[#d4b98c]/10 m-8 pointer-events-none" />
      </div>
    </section>
  );
}
