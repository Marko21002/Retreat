"use client";

import {
  Button,
  Dialog,
  DialogContent,
  DialogTrigger,
  VideoIframe,
} from "@relume_io/relume-ui";
import React from "react";
import { FaCirclePlay } from "react-icons/fa6";
import { RxChevronRight } from "react-icons/rx";

export function Layout5() {
  return (
    <section id="relume" className="px-[5%] py-20 md:py-28 lg:py-32 bg-gradient-to-b from-[#1a1a14] to-[#232218] text-[#f8f3e9]">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 gap-y-16 md:grid-flow-row md:grid-cols-2 md:items-center md:gap-x-16 lg:gap-x-24">
          <div className="relative">
            <div className="absolute top-0 left-0 w-16 h-16 border-l-2 border-t-2 border-[#d4b98c] opacity-60 -ml-6 -mt-6"></div>
            <p className="mb-4 font-serif text-[#d4b98c] tracking-widest uppercase text-sm md:text-base">Royal Revitalization</p>
            <div className="h-[1px] w-16 bg-[#d4b98c] mb-6"></div>
            <h1 className="mb-6 text-5xl font-serif font-bold md:mb-8 md:text-6xl lg:text-7xl tracking-wide">
              Experience Unmatched Wellness in a Luxurious Castle Setting
            </h1>
            <p className="mb-8 md:mb-10 md:text-lg font-serif leading-relaxed">
              Indulge in a transformative retreat designed to rejuvenate your
              mind, body, and spirit. Discover the perfect blend of relaxation
              and luxury in our historic castle surroundings.
            </p>
            <div className="grid grid-cols-1 gap-8 py-2 sm:grid-cols-2 border-t border-b border-[#d4b98c]/30 py-8 my-8">
              <div>
                <h6 className="mb-4 text-md leading-[1.4] font-serif font-bold md:mb-4 md:text-xl text-[#d4b98c]">
                  Holistic Healing
                </h6>
                <p className="font-serif leading-relaxed">
                  Reconnect with yourself through personalized wellness programs
                  and guidance from our royal therapists.
                </p>
              </div>
              <div>
                <h6 className="mb-4 text-md leading-[1.4] font-serif font-bold md:mb-4 md:text-xl text-[#d4b98c]">
                  Luxury Accommodations
                </h6>
                <p className="font-serif leading-relaxed">
                  Enjoy exquisite castle surroundings that enhance your relaxation and
                  create a truly noble experience.
                </p>
              </div>
            </div>
            <div className="mt-8 flex flex-wrap items-center gap-6 md:mt-10">
              <Button 
                title="Learn More" 
                variant="secondary"
                className="px-8 py-3 bg-[#8b2131] hover:bg-[#6a1926] text-[#f8f3e9] border border-[#d4b98c] font-serif tracking-wider transition-all duration-300 shadow-md"
              >
                Learn More
              </Button>
              <Button
                title="Reserve Now"
                variant="link"
                size="link"
                iconRight={<RxChevronRight className="ml-1" />}
                className="font-serif text-[#d4b98c] hover:text-[#f8f3e9] transition-colors duration-300"
              >
                Reserve Now
              </Button>
            </div>
          </div>
          <Dialog>
            <DialogTrigger className="relative flex w-full max-w-full items-center justify-center overflow-hidden border border-[#d4b98c]/30 group">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                className="w-full object-cover transition-transform duration-1000 group-hover:scale-105"
                alt="Castle Wellness Experience"
              />
              <FaCirclePlay className="absolute z-20 size-16 text-[#d4b98c] group-hover:text-[#f8f3e9] transition-colors duration-500 drop-shadow-lg" />
              <span className="absolute inset-0 z-10 bg-gradient-to-t from-[#1a1a14]/80 via-[#1a1a14]/30 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-500" />
              <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 z-20">
                <h3 className="text-xl font-serif text-[#d4b98c]">Watch Castle Tour</h3>
                <p className="text-[#f8f3e9]/90 font-serif text-sm mt-2">Experience the majesty of our wellness castle retreat</p>
              </div>
            </DialogTrigger>
            <DialogContent>
              <VideoIframe video="https://www.youtube.com/embed/8DKLYsikxTs?si=Ch9W0KrDWWUiCMMW" />
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </section>
  );
}
