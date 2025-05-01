"use client";

import { Button, Checkbox, Input, Label, Textarea } from "@relume_io/relume-ui";
import React from "react";
import { motion } from "framer-motion";

export function Contact10() {
  return (
    <section id="relume" className="relative px-[5%] py-16 md:py-24 lg:py-28 bg-white font-serif overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#64625B]/30 to-transparent opacity-40"></div>
      <div className="container mx-auto grid grid-cols-1 gap-y-12 md:gap-y-16 md:grid-flow-row md:grid-cols-2 md:gap-x-16 lg:gap-x-24">
        <motion.div 
          className="relative"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="absolute -top-4 -left-4 w-16 h-16 border-l-2 border-t-2 border-[#64625B] opacity-40"></div>
          <div className="absolute -bottom-4 -right-4 w-16 h-16 border-r-2 border-b-2 border-[#64625B] opacity-40"></div>
          <div className="border border-[#64625B]/30 overflow-hidden shadow-md rounded-sm transition-transform duration-500 hover:scale-[1.01] group">
            <img
              src="https://relume-assets.s3.us-east-1.amazonaws.com/placeholder-map-image.svg"
              alt="Castle Location Map"
              className="size-full object-cover opacity-90 group-hover:opacity-100 transition-all duration-500"
            />
          </div>
          <div className="bg-white border border-[#64625B]/30 p-6 md:p-8 mt-6 md:mt-8 shadow-md rounded-sm">
            <h4 className="font-serif text-xl text-[#64625B] mb-4 tracking-wide">Castle Retreat Location</h4>
            <p className="font-sans text-[#64625B]/80 mb-4 tracking-wide leading-relaxed">1234 Royal Estate Drive<br/>Castleton, CA 95123</p>
            <p className="font-sans text-[#64625B]/80 mb-2 tracking-wide leading-relaxed">contact@castleretreat.com</p>
            <p className="font-sans text-[#64625B]/80 tracking-wide leading-relaxed">+1 (555) 123-4567</p>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="mb-8 md:mb-10">
            <p className="mb-3 font-semibold md:mb-4 text-[#64625B] tracking-wide">{`Let's Connect`}</p>
            <h2 className="mb-5 text-4xl sm:text-5xl font-bold md:mb-6 md:text-6xl text-[#64625B] tracking-wide drop-shadow-sm leading-tight">
              Get in Touch
            </h2>
            <p className="text-sm sm:text-base text-[#64625B]/80 font-sans tracking-wide leading-relaxed">{`We'd be honored to assist with your event planning needs and answer any questions you may have.`}</p>
          </div>
          <form className="grid grid-cols-1 gap-6">
            <div className="grid w-full items-center">
              <Label htmlFor="name" className="mb-2 font-serif text-[#64625B] font-semibold">
                Name
              </Label>
              <Input 
                type="text" 
                id="name" 
                className="bg-white border-[#64625B]/30 p-3 font-sans focus:border-[#64625B] focus:ring-[#64625B]/20 text-[#64625B] transition-colors duration-300" 
              />
            </div>
            <div className="grid w-full items-center">
              <Label htmlFor="email" className="mb-2 font-serif text-[#64625B] font-semibold">
                Email
              </Label>
              <Input 
                type="email" 
                id="email" 
                className="bg-white border-[#64625B]/30 p-3 font-sans focus:border-[#64625B] focus:ring-[#64625B]/20 text-[#64625B] transition-colors duration-300" 
              />
            </div>
            <div className="grid w-full items-center">
              <Label htmlFor="message" className="mb-2 font-serif text-[#64625B] font-semibold">
                Message
              </Label>
              <Textarea
                id="message"
                placeholder="Share your message..."
                className="min-h-[11.25rem] overflow-auto bg-white border-[#64625B]/30 p-3 font-sans focus:border-[#64625B] focus:ring-[#64625B]/20 text-[#64625B] transition-colors duration-300"
              />
            </div>
            <div className="mb-2 flex items-center space-x-4 text-sm">
              <Checkbox id="terms" className="border-[#64625B] text-[#64625B] focus:ring-[#64625B]/20" />
              <Label htmlFor="terms" className="cursor-pointer font-sans text-[#64625B]/80 tracking-wide">
                I agree to the Terms and Conditions
              </Label>
            </div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Button 
                title="Submit Inquiry"
                className="w-auto px-5 sm:px-7 py-2.5 sm:py-3 transition-all duration-300 font-serif tracking-wider text-sm shadow-sm hover:shadow bg-[#64625B] text-white hover:bg-[#64625B]/90 border border-[#64625B]"
              >
                Submit Inquiry
              </Button>
            </motion.div>
          </form>
        </motion.div>
      </div>
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#64625B]/30 to-transparent opacity-40"></div>
    </section>
  );
}
