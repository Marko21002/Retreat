"use client";

import { useState, useEffect } from "react";
import { Button, useMediaQuery } from "@relume_io/relume-ui";
import type { ButtonProps } from "@relume_io/relume-ui";
import { AnimatePresence, motion } from "framer-motion";
import { RxChevronDown } from "react-icons/rx";
import { useRouter, usePathname } from "next/navigation";

type ImageProps = {
  url?: string;
  src: string;
  alt?: string;
};

type NavLink = {
  url: string;
  title: string;
  subMenuLinks?: NavLink[];
};

type Language = "en" | "de";

type Props = {
  logo: ImageProps;
  navLinks: NavLink[];
  buttons: ButtonProps[];
};

export type Navbar3DEProps = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

export const Navbar3DE = (props: Navbar3DEProps) => {
  const { logo, navLinks, buttons } = {
    ...Navbar3DEDefaults,
    ...props,
  };
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();
  const currentLanguage = pathname.startsWith('/de') ? 'de' : 'en';
  const isMobile = useMediaQuery("(max-width: 991px)");

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isMobileMenuOpen]);

  const toggleLanguage = () => {
    const newPath = currentLanguage === 'en' ? '/de' : '/';
    router.push(newPath);
  };

  return (
    <section
      id="relume"
      className="z-[999] grid w-full grid-cols-[1fr_max-content_1fr] items-center justify-between bg-white px-[5%] pb-4 font-serif md:min-h-18"
    >
      <button
        className="flex size-12 flex-col justify-center lg:hidden"
        onClick={() => setIsMobileMenuOpen((prev) => !prev)}
      >
        {Array(3)
          .fill(null)
          .map((_, index) => (
            <span key={index} className="my-[3px] h-0.5 w-6 bg-[#64625B] lg:hidden" />
          ))}
      </button>
      <AnimatePresence>
        <motion.div
          initial="closed"
          animate={isMobileMenuOpen ? "open" : "closed"}
          exit="closed"
          variants={{
            closed: {
              x: "-100%",
              opacity: 1,
              transition: { type: "spring", duration: 0.6, bounce: 0 },
              transitionEnd: {
                opacity: "var(--opacity-closed, 0%)",
                x: "var(--x-closed, -100%)",
              },
            },
            open: {
              x: 0,
              opacity: 1,
              transition: { type: "spring", duration: 0.4, bounce: 0 },
            },
          }}
          className="absolute left-0 top-0 z-50 flex h-dvh w-[90%] flex-col border-r border-[#64625B]/30 bg-white px-[5%] pb-4 md:w-[80%] lg:visible lg:static lg:-ml-4 lg:flex lg:h-auto lg:w-auto lg:flex-row lg:border-none lg:px-0 lg:pb-0 lg:[--opacity-closed:100%] lg:[--x-closed:0%]"
        >
          <a href={logo.url} className="mb-8 mt-10 flex flex-shrink-0 lg:hidden">
            <img src={logo.src} alt={logo.alt} className="h-16 w-auto" />
          </a>
          {navLinks.map((navLink, index) => (
            <div key={index} className="w-full lg:w-auto">
              {navLink.subMenuLinks && navLink.subMenuLinks.length > 0 ? (
                <SubMenu navLink={navLink} isMobile={isMobile} />
              ) : (
                <a
                  href={navLink.url}
                  className="relative block py-3 text-sm tracking-wide text-[#64625B] transition-colors duration-300 hover:text-[#64625B]/80 lg:px-3 lg:py-2 lg:text-sm"
                >
                  {navLink.title}
                </a>
              )}
            </div>
          ))}
          <div className="mt-6 flex flex-col gap-3 lg:hidden">
            {buttons.map((button, index) => (
              <Button 
                key={index} 
                {...button} 
                className={`w-full px-5 py-2.5 transition-all duration-300 font-serif tracking-wider text-sm shadow-sm hover:shadow ${
                  button.variant === "secondary" 
                    ? "bg-transparent text-[#64625B] border border-[#64625B]/30 hover:bg-[#64625B]/5" 
                    : "bg-[#64625B] text-white hover:bg-[#64625B]/90 border border-[#64625B]"
                }`}
              >
                {button.title}
              </Button>
            ))}
          </div>
        </motion.div>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            exit={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-black lg:hidden"
            onClick={() => setIsMobileMenuOpen(false)}
          />
        )}
      </AnimatePresence>
      <a href={logo.url} className="flex min-h-16 flex-shrink-0 items-center justify-center">
        <img src={logo.src} alt={logo.alt} className="h-14 w-auto md:h-16 lg:h-20" />
      </a>
      <div className="flex min-h-16 items-center justify-end gap-x-4">
        <div className="flex items-center border border-[#64625B]/30 rounded-md">
          <button
            onClick={toggleLanguage}
            className={`px-2 py-1 text-xs sm:px-3 sm:text-sm font-medium ${currentLanguage === "en" ? "text-white bg-[#64625B]" : "text-[#64625B] bg-transparent"} rounded-l-md transition-colors`}
          >
            EN
          </button>
          <button
            onClick={toggleLanguage}
            className={`px-2 py-1 text-xs sm:px-3 sm:text-sm font-medium ${currentLanguage === "de" ? "text-white bg-[#64625B]" : "text-[#64625B] bg-transparent"} rounded-r-md transition-colors`}
          >
            DE
          </button>
        </div>
        <div>
          {buttons.map((button, index) => (
            <Button 
              key={index} 
              {...button} 
              className={`hidden sm:inline-block px-4 py-1 md:px-5 md:py-2 transition-all duration-300 font-serif tracking-wider text-sm shadow-sm hover:shadow ${
                button.variant === "secondary" 
                  ? "bg-transparent text-[#64625B] border border-[#64625B]/30 hover:bg-[#64625B]/5" 
                  : "bg-[#64625B] text-white hover:bg-[#64625B]/90 border border-[#64625B]"
              }`}
            >
              {button.title}
            </Button>
          ))}
        </div>
      </div>
    </section>
  );
};

const SubMenu = ({ navLink, isMobile }: { navLink: NavLink; isMobile: boolean }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <div
      onMouseEnter={() => !isMobile && setIsDropdownOpen(true)}
      onMouseLeave={() => !isMobile && setIsDropdownOpen(false)}
    >
      <button
        className="flex w-full items-center justify-between gap-2 py-3 text-sm tracking-wide text-[#64625B] transition-colors duration-300 hover:text-[#64625B]/80 lg:flex-none lg:justify-start lg:px-3 lg:py-2 lg:text-sm"
        onClick={() => setIsDropdownOpen((prev) => !prev)}
      >
        <span>{navLink.title}</span>
        <AnimatePresence>
          <motion.span
            animate={isDropdownOpen ? "rotated" : "initial"}
            variants={{
              rotated: { rotate: 180 },
              initial: { rotate: 0 },
            }}
            transition={{ duration: 0.3 }}
          >
            <RxChevronDown />
          </motion.span>
        </AnimatePresence>
      </button>
      {isDropdownOpen && (
        <AnimatePresence>
          <motion.nav
            variants={{
              open: {
                visibility: "visible",
                opacity: "var(--opacity-open, 100%)",
                y: 0,
              },
              close: {
                visibility: "hidden",
                opacity: "var(--opacity-close, 0)",
                y: "var(--y-close, 0%)",
              },
            }}
            initial="close"
            exit="close"
            animate={isDropdownOpen ? "open" : "close"}
            className="bg-white lg:absolute lg:z-50 lg:border lg:border-[#64625B]/30 lg:p-2 lg:[--y-close:25%]"
          >
            {navLink.subMenuLinks?.map((subMenuLink, index) => (
              <a
                key={index}
                href={subMenuLink.url}
                className="block py-3 pl-[5%] text-sm tracking-wide text-[#64625B] transition-colors duration-300 hover:text-[#64625B]/80 lg:py-2 lg:pl-3 lg:pr-6 lg:text-left lg:text-sm"
              >
                {subMenuLink.title}
              </a>
            ))}
          </motion.nav>
        </AnimatePresence>
      )}
    </div>
  );
};

export const Navbar3DEDefaults: Props = {
  logo: {
    url: "#",
    src: "/logo.png",
    alt: "Schloss Thalheim Logo",
  },
  navLinks: [
    { title: "Startseite", url: "#" },
    { title: "Venues", url: "#" },
    {
      title: "Events",
      url: "#",
      subMenuLinks: [
        { title: "Hochzeiten", url: "#" },
        { title: "Business", url: "#" },
        { title: "Retreats", url: "#" },
      ],
    },
    { title: "Galerie", url: "#" },
    { title: "Kontakt", url: "#" },
  ],
  buttons: [
    {
      title: "Buchen",
      size: "sm",
    },
  ],
}; 