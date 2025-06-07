"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BiPhoneCall, BiX } from "react-icons/bi";
import { FaWhatsapp } from "react-icons/fa";
import { Cta25Defaults } from "./Cta25";

const FloatingCallButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  const { phoneNumber, whatsappLink } = Cta25Defaults;
  const telLink = `tel:${phoneNumber.replace(/\s/g, "")}`;

  return (
    <div className="fixed bottom-8 right-8 z-50 font-serif">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            className="flex flex-col items-center gap-4 mb-4"
          >
            <a
              href={telLink}
              className="group relative flex items-center justify-center"
              aria-label="Call us"
            >
              <span className="absolute right-full mr-4 hidden whitespace-nowrap rounded-md bg-[#64625B] px-3 py-1.5 text-sm text-white shadow-md transition-opacity group-hover:block">
                Call Us
              </span>
              <div
                className="flex size-14 items-center justify-center rounded-full bg-[#64625B] text-white shadow-lg transition-colors hover:bg-[#64625B]/90"
              >
                <BiPhoneCall size={24} />
              </div>
            </a>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex items-center justify-center"
              aria-label="Chat on WhatsApp"
            >
              <span className="absolute right-full mr-4 hidden whitespace-nowrap rounded-md bg-[#25D366] px-3 py-1.5 text-sm text-white shadow-md transition-opacity group-hover:block">
                WhatsApp
              </span>
              <div
                className="flex size-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-colors hover:bg-[#25D366]/90"
              >
                <FaWhatsapp size={24} />
              </div>
            </a>
          </motion.div>
        )}
      </AnimatePresence>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex size-16 items-center justify-center rounded-full bg-[#EAE2D6] text-[#64625B] shadow-xl transition-all duration-300 hover:scale-110 hover:bg-[#d4b98c]"
        aria-label={isOpen ? "Close call options" : "Open call options"}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={isOpen ? "close" : "phone"}
            initial={{ opacity: 0, rotate: -90, scale: 0.5 }}
            animate={{ opacity: 1, rotate: 0, scale: 1 }}
            exit={{ opacity: 0, rotate: 90, scale: 0.5 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            {isOpen ? <BiX size={32} /> : <BiPhoneCall size={28} />}
          </motion.div>
        </AnimatePresence>
      </button>
    </div>
  );
};

export default FloatingCallButton; 