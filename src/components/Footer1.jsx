"use client";

import { Button, Input } from "@relume_io/relume-ui";
import React, { useState } from "react";
import {
  BiLogoFacebookCircle,
  BiLogoInstagram,
  BiLogoLinkedinSquare,
} from "react-icons/bi";

const useForm = () => {
  const [email, setEmail] = useState("");
  const handleSetEmail = (event) => {
    setEmail(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log({ email });
  };
  return {
    email,
    handleSetEmail,
    handleSubmit,
  };
};

export function Footer1() {
  return (
    <footer id="relume" className="px-[5%] py-12 md:py-16 lg:py-20 bg-white font-serif border-t border-[#64625B]/20">
      <div className="container">
        <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-3">
          <div className="flex flex-col">
            <a href="#" className="mb-6">
              <img
                src="/logo.png"
                alt="Schloss Thalheim Logo"
                className="h-16 w-auto"
              />
            </a>
            <p className="text-sm text-[#64625B]/80 font-sans">
              Experience the timeless elegance of Schloss Thalheim.
            </p>
          </div>
          
          <div className="flex flex-col">
            <h2 className="mb-4 text-lg text-[#64625B] font-medium">Contact</h2>
            <ul className="space-y-2 text-sm text-[#64625B]/80 font-sans">
              <li>Thalheim 1</li>
              <li>3141 Kapelln, Austria</li>
              <li>+43 2275 5575</li>
              <li>reservierung@schlossthalheim.at</li>
            </ul>
          </div>
          
          <div className="flex flex-col">
            <h2 className="mb-4 text-lg text-[#64625B] font-medium">Navigation</h2>
            <ul className="space-y-2 text-sm text-[#64625B]/80 font-sans">
              <li><a href="#" className="hover:text-[#64625B] transition-colors">Home</a></li>
              <li><a href="#" className="hover:text-[#64625B] transition-colors">Venues</a></li>
              <li><a href="#" className="hover:text-[#64625B] transition-colors">Events</a></li>
              <li><a href="#" className="hover:text-[#64625B] transition-colors">Gallery</a></li>
              <li><a href="#" className="hover:text-[#64625B] transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-[#64625B]/20 mt-10 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-y-4 text-xs text-[#64625B]/60 font-sans">
            <p>© 2024 Schloss Thalheim. All rights reserved.</p>
            <div className="flex gap-x-6">
              <a href="/privacy-policy" className="hover:text-[#64625B] transition-colors">Privacy Policy</a>
              <a href="/terms-and-conditions" className="hover:text-[#64625B] transition-colors">Terms & Conditions</a>
              <a href="/impressum" className="hover:text-[#64625B] transition-colors">Impressum</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
