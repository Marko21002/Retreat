"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";
import { BiCalendarAlt, BiMap, BiUser } from "react-icons/bi";

export function EventItemHeader8() {
  return (
    <section id="relume" className="relative px-[5%] py-20 md:py-28 lg:py-32">
      <div className="relative z-10 container">
        <div className="mx-auto flex w-full max-w-xl md:max-w-2xl flex-col items-center text-center text-white">
          <div className="flex flex-col items-center">
            <h4 className="font-serif text-[#d4b98c] tracking-widest uppercase text-sm md:text-base">Exclusive Venue Rental</h4>
            <div className="h-[1px] w-16 bg-[#d4b98c] my-4"></div>
            <h1 className="mt-3 text-4xl sm:text-5xl font-serif font-bold md:mt-4 md:text-7xl lg:text-8xl tracking-wide">
              Historic Austrian Castle for Your Events
            </h1>
          </div>
          <p className="mt-6 text-sm sm:text-base md:mt-7 md:text-lg font-sans leading-relaxed text-white/90">
            Schloss Thalheim offers a luxury historical venue for private events, corporate 
            retreats, and wellness gatherings. Book this exclusive castle and its grounds 
            for an unforgettable experience with world-class amenities and personalized service.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm md:mt-9 text-[#d4b98c] font-serif">
            <div className="flex items-center gap-3 border-b border-[#d4b98c] pb-1">
              <BiCalendarAlt className="size-5 flex-none" />
              Available Year-Round
            </div>
            <div className="flex items-center gap-3 border-b border-[#d4b98c] pb-1">
              <BiMap className="size-5 flex-none" />
              <span>Kapelln, Austria</span>
            </div>
            <div className="flex items-center gap-3 border-b border-[#d4b98c] pb-1">
              <div className="flex h-5 items-center">
                <BiUser size={20} />
              </div>
              <span>Profesional staff</span>
            </div>
          </div>
          <div className="mt-10 md:mt-12">
            <Button 
              title="Book Now" 
              className="px-8 py-3 bg-[#64625B] text-white hover:bg-[#64625B]/90 border border-[#64625B] font-serif tracking-wider text-sm shadow-sm hover:shadow transition-all duration-300"
              onClick={() => {
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Book Your Event
            </Button>
          </div>
        </div>
      </div>
      <div className="absolute inset-0 z-0">
        <img
          src="/hero/castle.JPG"
          className="size-full object-cover"
          alt="Schloss Thalheim Luxury Castle"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#000]/60 via-[#000]/50 to-[#000]/60" />
        <div className="absolute inset-0 bg-[#000]/20" />
      </div>
    </section>
  );
}
