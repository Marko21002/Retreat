"use client";

import { Button } from "@relume_io/relume-ui";
import type { ButtonProps } from "@relume_io/relume-ui";
import { useState, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { IoChevronForwardOutline, IoChevronBackOutline } from "react-icons/io5";
import React from "react";

type ImageProps = {
  src: string;
  alt?: string;
};

type KeyPoint = {
  label: string;
};

type VenueProps = {
  title: string;
  description: string;
  images: ImageProps[];
  capacity: string;
  pricing: string;
  keyPoints: KeyPoint[];
};

type Props = {
  tagline: string;
  heading: string;
  description: string;
  venues: VenueProps[];
  button: ButtonProps;
};

export type Portfolio16DEProps = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

export const Portfolio16DE = (props: Portfolio16DEProps) => {
  const { tagline, heading, description, venues, button } = {
    ...Portfolio16DEDefaults,
    ...props,
  };
  
  const [showAllVenues, setShowAllVenues] = useState(false);
  const visibleVenues = showAllVenues ? venues : venues.slice(0, 3);
  const sectionRef = useRef<HTMLElement>(null);

  const toggleVenues = () => {
    const scrollPosition = window.scrollY;
    setShowAllVenues(!showAllVenues);
    
    if (showAllVenues) {
      setTimeout(() => {
        window.scrollTo({
          top: scrollPosition - (venues.length - 3) * 100,
          behavior: "auto"
        });
      }, 10);
    }
  };

  return (
    <section 
      id="relume" 
      className="relative px-[5%] py-16 md:py-24 lg:py-28 bg-white font-serif overflow-hidden"
      ref={sectionRef}
    >
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#64625B]/30 to-transparent opacity-40"></div>
      <div className="container">
        <motion.header 
          className="mb-12 max-w-[95%] sm:max-w-xl md:max-w-2xl text-center mx-auto md:mb-20 lg:mb-24 relative"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="mb-3 font-semibold md:mb-4 text-[#64625B] tracking-wide">{tagline}</p>
          <h2 className="mb-5 text-4xl sm:text-5xl font-bold md:mb-6 md:text-6xl lg:text-7xl text-[#64625B] tracking-wide drop-shadow-sm leading-tight">{heading}</h2>
          <p className="text-sm sm:text-base md:text-lg text-[#64625B]/80 font-sans tracking-wide leading-relaxed">{description}</p>
        </motion.header>
        <div>
          {visibleVenues.map((venue, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Venue {...venue} />
            </motion.div>
          ))}
        </div>
        <motion.footer 
          className="mt-12 flex justify-center md:mt-16 lg:mt-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Button 
            className={`w-auto px-5 sm:px-7 py-2.5 sm:py-3 transition-all duration-300 font-serif tracking-wider text-sm shadow-sm hover:shadow ${
              button.variant === "secondary" 
                ? "bg-transparent text-[#64625B] border border-[#64625B]/30 hover:bg-[#64625B]/5" 
                : "bg-[#64625B] text-white hover:bg-[#64625B]/90 border border-[#64625B]"
            }`}
            onClick={toggleVenues}
            {...button}
          >
            {showAllVenues ? "Weniger anzeigen" : "Alle Räume anzeigen"}
          </Button>
        </motion.footer>
      </div>
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#64625B]/30 to-transparent opacity-40"></div>
    </section>
  );
};

const Venue: React.FC<VenueProps> = ({ title, description, images, capacity, pricing, keyPoints }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  React.useEffect(() => {
    images.forEach(image => {
      const img = new Image();
      img.src = image.src;
    });
  }, [images]);

  const handleNext = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    setTimeout(() => setIsAnimating(false), 400);
  };

  const handlePrev = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    setTimeout(() => setIsAnimating(false), 400);
  };

  return (
    <article className="grid grid-cols-1 items-center gap-x-12 gap-y-8 border-t border-[#64625B]/30 py-10 md:grid-cols-2 md:gap-y-0 lg:gap-x-[5rem] lg:py-14">
      <div className="relative">
        <div 
          className="relative w-full pt-[75%] shadow-md rounded-sm overflow-hidden transition-transform duration-500 hover:scale-[1.02]"
        >
          <div className="absolute inset-0 bg-[#64625B]/10"></div>
          
          <AnimatePresence initial={false}>
            <motion.div
              key={currentIndex}
              className="absolute inset-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <motion.img
                src={images[currentIndex].src}
                alt={images[currentIndex].alt || title}
                className="absolute inset-0 size-full object-cover"
                initial={{ scale: 1.02 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.4 }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#64625B]/30 to-transparent"></div>
            </motion.div>
          </AnimatePresence>
          
          {images.length > 1 && (
            <>
              <button 
                onClick={handlePrev}
                className="absolute left-3 top-1/2 -translate-y-1/2 size-9 flex items-center justify-center bg-white/20 backdrop-blur-sm hover:bg-white/30 rounded-full text-white transition-all z-10 border border-white/10 shadow-md"
                aria-label="Vorheriges Bild"
              >
                <IoChevronBackOutline className="size-4" />
              </button>
              <button 
                onClick={handleNext}
                className="absolute right-3 top-1/2 -translate-y-1/2 size-9 flex items-center justify-center bg-white/20 backdrop-blur-sm hover:bg-white/30 rounded-full text-white transition-all z-10 border border-white/10 shadow-md"
                aria-label="Nächstes Bild"
              >
                <IoChevronForwardOutline className="size-4" />
              </button>
              
              <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 z-10">
                {images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setCurrentIndex(index);
                    }}
                    className={`size-1.5 rounded-full transition-all duration-300 ${
                      index === currentIndex ? "bg-white scale-125 shadow-md" : "bg-white/40 hover:bg-white/70"
                    }`}
                    aria-label={`Zu Bild ${index + 1}`}
                  />
                ))}
              </div>
            </>
          )}
        </div>
      </div>
      <div>
        <h3 className="mb-3 text-2xl font-bold md:text-3xl md:leading-[1.3] lg:text-4xl text-[#64625B] tracking-wide">
          {title}
        </h3>
        <p className="mb-5 text-sm sm:text-base text-[#64625B]/80 font-sans tracking-wide leading-relaxed">{description}</p>
        
        <div className="mb-5">
          <div className="mb-2">
            <span className="font-semibold text-[#64625B]">Kapazität:</span> {capacity}
          </div>
          <div>
            <span className="font-semibold text-[#64625B]">Fläche:</span> {pricing}
          </div>
        </div>
        
        <div className="mt-4">
          <h4 className="text-lg font-semibold text-[#64625B] mb-3">Hauptmerkmale:</h4>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {keyPoints.map((point, index) => (
              <li key={index} className="flex items-center text-sm text-[#64625B]/80">
                <span className="mr-2 text-[#64625B]">•</span>
                {point.label}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </article>
  );
};

const venue = {
  title: "Saal Lakshmi I",
  description:
    "Ein eleganter Bankett- und Seminarsaal in einzigartiger historischer Atmosphäre mit moderner Ausstattung. Die exquisite Gewölbedecke und die weiche Akustik schaffen ideale Bedingungen für Seminare, Workshops und private Veranstaltungen.",
  images: [
    {
      src: "/lakshmi1/20180115-Capture0046-HDR.jpg",
      alt: "Saal Lakshmi I",
    },
    {
      src: "/lakshmi1/20180115-Capture0002-HDR-Pano.jpg",
      alt: "Saal Lakshmi I Panorama",
    },
    {
      src: "/lakshmi1/20180115-Capture0021-HDR.jpg",
      alt: "Saal Lakshmi I Innenansicht",
    }
  ],
  capacity: "Bis zu 50 Personen",
  pricing: "100 qm",
  keyPoints: [
    { label: "Einzigartige historische Atmosphäre" },
    { label: "Moderne technische Ausstattung" },
    { label: "Exquisite Gewölbedecke" },
    { label: "Weiche Akustik" },
    { label: "Ideal für Seminare & Workshops" },
    { label: "Perfekt für private Events" },
  ],
};

const venue2 = {
  title: "Saal Lakshmi II",
  description:
    "Ein geräumiger Saal für Seminare, Konferenzen und Firmenevents. Moderne Technologie verbindet sich mit elegantem historischen Charme und schafft eine inspirierende Atmosphäre.",
  images: [
    {
      src: "/lakshmi2/_NAG4361-HDR.jpg",
      alt: "Saal Lakshmi II",
    },
    {
      src: "/lakshmi2/_NAG4358-HDR-Pano.jpg",
      alt: "Saal Lakshmi II Panorama",
    },
    {
      src: "/lakshmi2/_NAG4364-HDR-Pano.JPEG",
      alt: "Saal Lakshmi II Weitwinkel",
    }
  ],
  capacity: "Bis zu 150 Personen",
  pricing: "150 qm",
  keyPoints: [
    { label: "Geräumige Konferenzausstattung" },
    { label: "Moderne Technologie" },
    { label: "Eleganter historischer Charme" },
    { label: "Inspirierende Atmosphäre" },
    { label: "Ideal für Firmenevents" },
    { label: "Geeignet für große Seminare" },
  ],
};

const venue3 = {
  title: "Grotte Schloss Thalheim",
  description:
    "Ein einzigartiger unterirdischer Raum, der in seinem ursprünglichen Wesen restauriert wurde. Freigelegte Fresken, barocke Ornamente und zeitlose Steinmetzarbeiten schaffen eine Atmosphäre, die ideal ist für tiefe Meditation, Selbsterkenntnis und Energieharmonisierung.",
  images: [
    {
      src: "/grotte/_NAG5371-HDR-Pano.jpeg",
      alt: "Grotte Schloss Thalheim",
    },
    {
      src: "/grotte/_NAG4485-Pano.jpeg",
      alt: "Grotte Innenansicht",
    },
    {
      src: "/grotte/_NAG5411-HDR-Pano.jpeg",
      alt: "Grotte Detail",
    }
  ],
  capacity: "Für Meditation und kleine Gruppen",
  pricing: "250 qm",
  keyPoints: [
    { label: "Antiker unterirdischer Raum" },
    { label: "Freigelegte historische Fresken" },
    { label: "Barocke Ornamentdetails" },
    { label: "Zeitlose Steinmetzarbeiten" },
    { label: "Perfekt für Meditation" },
    { label: "Raum für Energieharmonisierung" },
  ],
};

const venue4 = {
  title: "Yoga Scheune",
  description:
    "Ein energetisch kraftvoller Raum, erbaut über einem unterirdischen Wasserlauf. Der massive Eichenboden und die alten Balken bieten ideale Bedingungen für Yoga-Retreats, Seminare und sogar Übernachtungen im Rahmen von Events.",
  images: [
    {
      src: "/yoga/_NAG4676.jpeg",
      alt: "Yoga Scheune",
    },
    {
      src: "/yoga/_NAG4648.jpeg",
      alt: "Yoga Session Aufbau",
    },
    {
      src: "/yoga/_NAG4696.jpeg",
      alt: "Yoga Scheune Innenansicht",
    }
  ],
  capacity: "50–60 Personen",
  pricing: "250 qm",
  keyPoints: [
    { label: "Energetisch kraftvoller Raum" },
    { label: "Über natürlichem Wasserlauf" },
    { label: "Massiver Eichenboden" },
    { label: "Historische Holzbalkendecke" },
    { label: "Ideal für Yoga-Retreats" },
    { label: "Übernachtungsmöglichkeit" },
  ],
};

const venue5 = {
  title: "Meditationsraum",
  description:
    "Ein ruhiger, minimalistischer Raum, der für Yoga, Meditation und Wellness-Retreats konzipiert ist. Ausgestattet mit Bambusboden und sanftem natürlichem Licht.",
  images: [
    {
      src: "/meditation/_NAG4374-HDR-Pano.jpg",
      alt: "Meditationsraum",
    },
    {
      src: "/meditation/_NAG4451.jpeg",
      alt: "Meditation Session Aufbau",
    },
    {
      src: "/meditation/_NAG4463.jpeg",
      alt: "Raum Detail",
    }
  ],
  capacity: "20-30 Personen",
  pricing: "65 qm",
  keyPoints: [
    { label: "Ruhige Umgebung" },
    { label: "Minimalistisches Design" },
    { label: "Natürliches Licht" },
    { label: "Nachhaltiger Bambusboden" },
    { label: "Perfekt für Wellness-Retreats" },
    { label: "Meditationsfokussierter Aufbau" },
  ],
};

const venue7 = {
  title: "Teehaus",
  description:
    "Ein gemütlicher Raum im chinesischen Stil mit Kamin, der eine warme und harmonische Atmosphäre bietet. Es ist der ideale Ort für traditionelle Teezeremonien und intime Zusammenkünfte.",
  images: [
    {
      src: "/tea/_NAG4264-HDR-Pano.jpg",
      alt: "Teehaus",
    },
    {
      src: "/tea/_NAG4306.jpg",
      alt: "Teehaus Innenansicht",
    },
    {
      src: "/tea/20180115-Capture0028-HDR (1).jpg",
      alt: "Teezeremonie Aufbau",
    }
  ],
  capacity: "Bis zu 25 Gäste",
  pricing: "75 qm",
  keyPoints: [
    { label: "Chinesisches Design" },
    { label: "Gemütlicher Kamin" },
    { label: "Warme, harmonische Atmosphäre" },
    { label: "Traditionelle Teezeremonien" },
    { label: "Intimer Versammlungsraum" },
    { label: "Authentisches Erlebnis" },
  ],
};

const venue8 = {
  title: "Restaurant \"Zum Weißen Ritter\"",
  description:
    "Ein authentisches Restaurant im historischen Ritterstil, in dem moderner Komfort nahtlos mit dem Geist vergangener Jahrhunderte verschmilzt. Es ist der perfekte Ort für Feiern, Workshops und Weinverkostungen, die im gemütlichen Weinkeller unter dem Restaurant stattfinden können.",
  images: [
    {
      src: "/restaurant/_NAG4307-Pano.jpg",
      alt: "Restaurant Zum Weißen Ritter",
    },
    {
      src: "/restaurant/_NAG4310 (1).jpg",
      alt: "Restaurant Innenansicht",
    },
    {
      src: "/restaurant/20180115-Capture0003-HDR-Pano.jpg",
      alt: "Restaurant Speisebereich",
    }
  ],
  capacity: "Bis zu 80 Gäste",
  pricing: "200 qm",
  keyPoints: [
    { label: "Historisches Ritterthema" },
    { label: "Moderne Komfortausstattung" },
    { label: "Perfekt für Feiern" },
    { label: "Workshop-freundlicher Raum" },
    { label: "Weinkeller für Verkostungen" },
    { label: "Authentische Atmosphäre" },
  ],
};

export const Portfolio16DEDefaults: Props = {
  tagline: "Unsere Locations",
  heading: "Außergewöhnliche Räume für unvergessliche Events",
  description: "Entdecken Sie unsere Sammlung beeindruckender, vielseitiger Locations, perfekt für Hochzeiten, Firmenevents, Retreats und kulturelle Veranstaltungen. Jeder Raum bietet einzigartigen Charakter und Annehmlichkeiten, um Ihr Event wirklich besonders zu machen.",
  venues: [venue3, venue8, venue5, venue2, venue4, venue, venue7],
  button: {
    title: "Alle Räume anzeigen",
    variant: "primary" as const,
  },
}; 