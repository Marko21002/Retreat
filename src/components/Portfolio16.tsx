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

export type Portfolio16Props = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

export const Portfolio16 = (props: Portfolio16Props) => {
  const { tagline, heading, description, venues, button } = {
    ...Portfolio16Defaults,
    ...props,
  };
  
  const [showAllVenues, setShowAllVenues] = useState(false);
  const visibleVenues = showAllVenues ? venues : venues.slice(0, 3);
  const sectionRef = useRef<HTMLElement>(null);

  const toggleVenues = () => {
    // Save the current scroll position before changing state
    const scrollPosition = window.scrollY;
    
    setShowAllVenues(!showAllVenues);
    
    // If we're hiding venues, maintain scroll position
    if (showAllVenues) {
      // Use setTimeout to execute after state update and re-render
      setTimeout(() => {
        window.scrollTo({
          top: scrollPosition - (venues.length - 3) * 100, // Approximate adjustment
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
            {showAllVenues ? "Hide spaces" : "See all spaces"}
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

  // Preload images for smoother transitions
  React.useEffect(() => {
    // Preload all images
    images.forEach(image => {
      const img = new Image();
      img.src = image.src;
    });
  }, [images]);

  const handleNext = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    setTimeout(() => setIsAnimating(false), 400); // Match transition duration
  };

  const handlePrev = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    setTimeout(() => setIsAnimating(false), 400); // Match transition duration
  };

  return (
    <article className="grid grid-cols-1 items-center gap-x-12 gap-y-8 border-t border-[#64625B]/30 py-10 md:grid-cols-2 md:gap-y-0 lg:gap-x-[5rem] lg:py-14">
      <div className="relative">
        <div 
          className="relative w-full pt-[75%] shadow-md rounded-sm overflow-hidden transition-transform duration-500 hover:scale-[1.02]"
        >
          <div className="absolute inset-0 bg-[#64625B]/10">
            {/* Background placeholder to prevent white flash */}
          </div>
          
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
                aria-label="Previous image"
              >
                <IoChevronBackOutline className="size-4" />
              </button>
              <button 
                onClick={handleNext}
                className="absolute right-3 top-1/2 -translate-y-1/2 size-9 flex items-center justify-center bg-white/20 backdrop-blur-sm hover:bg-white/30 rounded-full text-white transition-all z-10 border border-white/10 shadow-md"
                aria-label="Next image"
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
                    aria-label={`Go to image ${index + 1}`}
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
            <span className="font-semibold text-[#64625B]">Capacity:</span> {capacity}
          </div>
          <div>
            <span className="font-semibold text-[#64625B]">Area:</span> {pricing}
          </div>
        </div>
        
        <div className="mt-4">
          <h4 className="text-lg font-semibold text-[#64625B] mb-3">Key Features:</h4>
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
  title: "Hall Lakshmi I",
  description:
    "An elegant banquet and seminar hall set in a unique historical ambiance with modern equipment. The exquisite vaulted ceiling and soft acoustics create ideal conditions for seminars, workshops, and private events.",
  images: [
    {
      src: "/lakshmi1/20180115-Capture0046-HDR.jpg",
      alt: "Hall Lakshmi I",
    },
    {
      src: "/lakshmi1/20180115-Capture0002-HDR-Pano.jpg",
      alt: "Hall Lakshmi I Panorama",
    },
    {
      src: "/lakshmi1/20180115-Capture0021-HDR.jpg",
      alt: "Hall Lakshmi I Interior",
    }
  ],
  capacity: "Up to 50 people",
  pricing: "100 sq. m",
  keyPoints: [
    { label: "Unique historical ambiance" },
    { label: "Modern technical equipment" },
    { label: "Exquisite vaulted ceiling" },
    { label: "Soft acoustics" },
    { label: "Ideal for seminars & workshops" },
    { label: "Perfect for private events" },
  ],
};

const venue2 = {
  title: "Hall Lakshmi II",
  description:
    "A spacious hall for seminars, conferences, and corporate events. Modern technology blends with elegant historical charm, creating an inspiring atmosphere.",
  images: [
    {
      src: "/lakshmi2/_NAG4361-HDR.jpg",
      alt: "Hall Lakshmi II",
    },
    {
      src: "/lakshmi2/_NAG4358-HDR-Pano.jpg",
      alt: "Hall Lakshmi II Panorama",
    },
    {
      src: "/lakshmi2/_NAG4364-HDR-Pano.JPEG",
      alt: "Hall Lakshmi II Wide View",
    }
  ],
  capacity: "Up to 150 people",
  pricing: "150 sq. m",
  keyPoints: [
    { label: "Spacious conference setup" },
    { label: "Modern technology" },
    { label: "Elegant historical charm" },
    { label: "Inspiring atmosphere" },
    { label: "Ideal for corporate events" },
    { label: "Suitable for large seminars" },
  ],
};

const venue3 = {
  title: "Grotto Schloss Thalheim",
  description:
    "A unique underground sanctuary restored to its ancient essence. Exposed frescoes, baroque ornaments, and timeless stonework create an atmosphere ideal for deep meditation, self-discovery, and energy harmonization.",
  images: [
    {
      src: "/grotte/_NAG5371-HDR-Pano.jpeg",
      alt: "Grotto Schloss Thalheim",
    },
    {
      src: "/grotte/_NAG4485-Pano.jpeg",
      alt: "Grotto Interior",
    },
    {
      src: "/grotte/_NAG5411-HDR-Pano.jpeg",
      alt: "Grotto Detail",
    }
  ],
  capacity: "For meditation and small gatherings",
  pricing: "250 sq. m",
  keyPoints: [
    { label: "Ancient underground sanctuary" },
    { label: "Exposed historical frescoes" },
    { label: "Baroque ornamental details" },
    { label: "Timeless stonework" },
    { label: "Perfect for meditation" },
    { label: "Energy harmonization space" },
  ],
};

const venue4 = {
  title: "Yoga Barn",
  description:
    "An energetically powerful space built above an underground water stream. The solid oak floor and ancient beams provide ideal conditions for yoga retreats, seminars, and even overnight stays as part of events.",
  images: [
    {
      src: "/yoga/_NAG4676.jpeg",
      alt: "Yoga Barn",
    },
    {
      src: "/yoga/_NAG4648.jpeg",
      alt: "Yoga Session Setup",
    },
    {
      src: "/yoga/_NAG4696.jpeg",
      alt: "Yoga Barn Interior",
    }
  ],
  capacity: "50–60 people",
  pricing: "250 sq. m",
  keyPoints: [
    { label: "Energetically powerful space" },
    { label: "Built above natural water stream" },
    { label: "Solid oak flooring" },
    { label: "Historic wooden beam ceiling" },
    { label: "Ideal for yoga retreats" },
    { label: "Overnight stay capability" },
  ],
};

const venue5 = {
  title: "Room for Meditation",
  description:
    "A serene, minimalist space designed for yoga, meditation, and wellness retreats. Features bamboo flooring and soft natural lighting.",
  images: [
    {
      src: "/meditation/_NAG4374-HDR-Pano.jpg",
      alt: "Room for Meditation",
    },
    {
      src: "/meditation/_NAG4451.jpeg",
      alt: "Meditation Session Setup",
    },
    {
      src: "/meditation/_NAG4463.jpeg",
      alt: "Room Detail",
    }
  ],
  capacity: "20-30 people",
  pricing: "65 sq. m",
  keyPoints: [
    { label: "Serene environment" },
    { label: "Minimalist design" },
    { label: "Natural light throughout" },
    { label: "Sustainable bamboo flooring" },
    { label: "Perfect for wellness retreats" },
    { label: "Meditation-focused setup" },
  ],
};

const venue7 = {
  title: "Tea House",
  description:
    "A cozy Chinese-style venue with a fireplace, offering a warm and harmonious atmosphere. It's the ideal setting for traditional tea ceremonies and intimate gatherings.",
  images: [
    {
      src: "/tea/_NAG4264-HDR-Pano.jpg",
      alt: "Tea House",
    },
    {
      src: "/tea/_NAG4306.jpg",
      alt: "Tea House Interior",
    },
    {
      src: "/tea/20180115-Capture0028-HDR (1).jpg",
      alt: "Tea Ceremony Setup",
    }
  ],
  capacity: "Up to 25 guests",
  pricing: "75 sq. m",
  keyPoints: [
    { label: "Chinese-style design" },
    { label: "Cozy fireplace" },
    { label: "Warm, harmonious atmosphere" },
    { label: "Traditional tea ceremonies" },
    { label: "Intimate gathering space" },
    { label: "Authentic experience" },
  ],
};

const venue8 = {
  title: "Restaurant \"Zum Weißen Ritter\"",
  description:
    "An authentic restaurant styled in a historic knightly theme, where modern comfort blends seamlessly with the spirit of centuries past. It's the perfect venue for celebrations, workshops, and wine tastings, which can be held in the cozy wine cellar beneath the restaurant.",
  images: [
    {
      src: "/restaurant/_NAG4307-Pano.jpg",
      alt: "Restaurant Zum Weißen Ritter",
    },
    {
      src: "/restaurant/_NAG4310 (1).jpg",
      alt: "Restaurant Interior",
    },
    {
      src: "/restaurant/20180115-Capture0003-HDR-Pano.jpg",
      alt: "Restaurant Dining Area",
    }
  ],
  capacity: "Up to 80 guests",
  pricing: "200 sq. m",
  keyPoints: [
    { label: "Historic knightly theme" },
    { label: "Modern comfort amenities" },
    { label: "Perfect for celebrations" },
    { label: "Workshop-friendly space" },
    { label: "Wine cellar for tastings" },
    { label: "Authentic atmosphere" },
  ],
};

export const Portfolio16Defaults: Props = {
  tagline: "Our Venues",
  heading: "Extraordinary Spaces for Unforgettable Events",
  description: "Discover our collection of stunning, versatile venues perfect for weddings, corporate events, retreats, and cultural gatherings. Each space offers unique character and amenities to make your event truly special.",
  venues: [venue3, venue8, venue5, venue2, venue4, venue, venue7],
  button: {
    title: "See all spaces",
    variant: "primary" as const,
  },
};
