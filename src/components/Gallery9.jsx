"use client";

import React from "react";

export function Gallery9() {
  return (
    <section id="relume" className="px-[5%] py-20 md:py-28 lg:py-32 bg-[#1a1a14] text-[#f8f3e9]">
      <div className="container mx-auto">
        <div className="mb-16 text-center md:mb-20 lg:mb-24">
          <p className="mb-4 font-serif text-[#d4b98c] tracking-widest uppercase text-sm md:text-base">Visual Journey</p>
          <div className="h-[1px] w-24 bg-[#d4b98c] mx-auto mb-8"></div>
          <h2 className="mb-6 text-5xl font-serif font-bold md:mb-8 md:text-6xl lg:text-7xl tracking-wide">
            Castle Elegance Gallery
          </h2>
          <p className="md:text-lg font-serif leading-relaxed text-[#f8f3e9]/90 max-w-2xl mx-auto">
            Explore our stunning castle and rejuvenating wellness experiences through this curated collection of royal moments.
          </p>
        </div>
        
        <div className="grid auto-cols-fr grid-cols-2 grid-rows-2 gap-6 md:auto-cols-auto md:grid-cols-[2fr_1fr_1fr] md:gap-8">
          <a
            href="#"
            className="inline-block size-full col-start-1 col-end-2 row-start-1 row-end-3 group relative overflow-hidden border border-[#d4b98c]/30"
          >
            <div className="size-full relative">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                alt="Castle Main Hall"
                className="aspect-square size-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a14]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                <h3 className="text-xl font-serif text-[#d4b98c]">Grand Castle Hall</h3>
                <p className="text-[#f8f3e9]/90 font-serif text-sm mt-2">The majestic central hall where history meets luxury</p>
              </div>
            </div>
          </a>
          
          <a href="#" className="inline-block size-full group relative overflow-hidden border border-[#d4b98c]/30">
            <div className="size-full relative">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                alt="Yoga Studio"
                className="aspect-square size-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a14]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                <h3 className="text-lg font-serif text-[#d4b98c]">Yoga Sanctuary</h3>
              </div>
            </div>
          </a>
          
          <a href="#" className="inline-block size-full group relative overflow-hidden border border-[#d4b98c]/30">
            <div className="size-full relative">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                alt="Dining Experience"
                className="aspect-square size-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a14]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                <h3 className="text-lg font-serif text-[#d4b98c]">Royal Dining</h3>
              </div>
            </div>
          </a>
          
          <a href="#" className="inline-block size-full group relative overflow-hidden border border-[#d4b98c]/30">
            <div className="size-full relative">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                alt="Spa Treatment"
                className="aspect-square size-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a14]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                <h3 className="text-lg font-serif text-[#d4b98c]">Luxurious Spa</h3>
              </div>
            </div>
          </a>
          
          <a href="#" className="inline-block size-full group relative overflow-hidden border border-[#d4b98c]/30">
            <div className="size-full relative">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                alt="Castle Gardens"
                className="aspect-square size-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a14]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                <h3 className="text-lg font-serif text-[#d4b98c]">Castle Gardens</h3>
              </div>
            </div>
          </a>
        </div>
        
        <div className="mt-12 text-center md:mt-16">
          <a href="#" className="inline-block font-serif text-[#d4b98c] hover:text-[#f8f3e9] border-b border-[#d4b98c] pb-1 transition-colors duration-300">View Full Gallery</a>
        </div>
      </div>
    </section>
  );
}
