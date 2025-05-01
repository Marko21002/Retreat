"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";
import { RxChevronRight } from "react-icons/rx";
import { BiSpa, BiWine, BiLeaf } from "react-icons/bi";

export function Layout249() {
  return (
    <section id="relume" className="px-[5%] py-20 md:py-28 lg:py-32 bg-gradient-to-b from-[#1a1a14] to-[#2a2920]">
      <div className="container mx-auto relative">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-16 h-16 border-l-2 border-t-2 border-[#d4b98c] opacity-60"></div>
        <div className="absolute bottom-0 right-0 w-16 h-16 border-r-2 border-b-2 border-[#d4b98c] opacity-60"></div>
        
        <div className="mb-16 md:mb-24 lg:mb-28 relative">
          <div className="w-full max-w-3xl mx-auto text-center">
            <p className="mb-4 font-serif text-[#d4b98c] tracking-widest uppercase text-sm md:text-base">Royal Wellness Experience</p>
            <div className="h-[1px] w-32 bg-[#d4b98c] mx-auto mb-8"></div>
            <h2 className="mb-8 text-5xl font-serif font-bold md:text-6xl lg:text-7xl tracking-wide text-[#f8f3e9]">
              Experience Ultimate Relaxation and Rejuvenation
            </h2>
            <p className="md:text-lg font-serif leading-relaxed text-[#f8f3e9]/90 max-w-2xl mx-auto">
              Our castle retreat offers a serene escape designed to revitalize your
              mind and body. Indulge in a holistic experience that nurtures your
              well-being amid centuries of history and elegance.
            </p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 gap-16 md:grid-cols-3 md:gap-8 lg:gap-12">
          {/* Card 1 */}
          <div className="group bg-[#232218] border border-[#d4b98c]/30 p-8 rounded-sm flex flex-col transition-all duration-500 hover:shadow-[0_0_15px_rgba(212,185,140,0.15)] relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 -mt-12 -mr-12 bg-[#8b2131]/10 rounded-full transition-all duration-500 group-hover:bg-[#8b2131]/20"></div>
            
            <div className="flex justify-center items-center w-16 h-16 rounded-full bg-[#8b2131]/10 text-[#d4b98c] mb-8">
              <BiSpa className="w-8 h-8" />
            </div>
            
            <h3 className="mb-5 text-2xl font-serif font-bold md:text-3xl text-[#d4b98c]">
              Invigorating Yoga Sessions
            </h3>
            
            <p className="font-serif leading-relaxed text-[#f8f3e9] mb-8 flex-grow">
              Join our expert instructors for daily yoga classes that cater to
              every skill level in our historic castle surroundings. Experience tranquility
              in majestic halls with centuries of history.
            </p>
            
            <Button 
              iconRight={<RxChevronRight />} 
              variant="link" 
              size="link"
              className="font-serif text-[#d4b98c] self-start hover:text-[#f8f3e9] transition-colors duration-300"
            >
              Learn more
            </Button>
          </div>
          
          {/* Card 2 */}
          <div className="group bg-[#232218] border border-[#d4b98c]/30 p-8 rounded-sm flex flex-col transition-all duration-500 hover:shadow-[0_0_15px_rgba(212,185,140,0.15)] relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 -mt-12 -mr-12 bg-[#8b2131]/10 rounded-full transition-all duration-500 group-hover:bg-[#8b2131]/20"></div>
            
            <div className="flex justify-center items-center w-16 h-16 rounded-full bg-[#8b2131]/10 text-[#d4b98c] mb-8">
              <BiWine className="w-8 h-8" />
            </div>
            
            <h3 className="mb-5 text-2xl font-serif font-bold md:text-3xl text-[#d4b98c]">
              Gourmet Culinary Experiences
            </h3>
            
            <p className="font-serif leading-relaxed text-[#f8f3e9] mb-8 flex-grow">
              Savor delicious, nutritious meals prepared with fresh, local
              ingredients by our castle's master chefs. Dine like royalty in our
              grand dining hall with views of the countryside.
            </p>
            
            <Button 
              iconRight={<RxChevronRight />} 
              variant="link" 
              size="link"
              className="font-serif text-[#d4b98c] self-start hover:text-[#f8f3e9] transition-colors duration-300"
            >
              View menu
            </Button>
          </div>
          
          {/* Card 3 */}
          <div className="group bg-[#232218] border border-[#d4b98c]/30 p-8 rounded-sm flex flex-col transition-all duration-500 hover:shadow-[0_0_15px_rgba(212,185,140,0.15)] relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 -mt-12 -mr-12 bg-[#8b2131]/10 rounded-full transition-all duration-500 group-hover:bg-[#8b2131]/20"></div>
            
            <div className="flex justify-center items-center w-16 h-16 rounded-full bg-[#8b2131]/10 text-[#d4b98c] mb-8">
              <BiLeaf className="w-8 h-8" />
            </div>
            
            <h3 className="mb-5 text-2xl font-serif font-bold md:text-3xl text-[#d4b98c]">
              Luxurious Spa Treatments
            </h3>
            
            <p className="font-serif leading-relaxed text-[#f8f3e9] mb-8 flex-grow">
              Pamper yourself with our range of soothing spa services in our ancient 
              stone chambers. Our treatments combine modern techniques with 
              traditional remedies used by royalty.
            </p>
            
            <Button 
              iconRight={<RxChevronRight />} 
              variant="link" 
              size="link"
              className="font-serif text-[#d4b98c] self-start hover:text-[#f8f3e9] transition-colors duration-300"
            >
              Book treatment
            </Button>
          </div>
        </div>
        
        <div className="mt-20 text-center">
          <Button 
            variant="secondary"
            className="px-10 py-4 bg-[#8b2131] hover:bg-[#6a1926] text-[#f8f3e9] border border-[#d4b98c] font-serif tracking-wider transition-all duration-300 shadow-lg"
          >
            Explore All Experiences
          </Button>
        </div>
      </div>
    </section>
  );
}
