"use client";
import { Button } from "@relume_io/relume-ui";
import type { ButtonProps } from "@relume_io/relume-ui";
import { RxChevronRight, RxChevronLeft } from "react-icons/rx";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

type ImageProps = {
  src: string;
  alt?: string;
};

type Bedroom = {
  url: string;
  images: ImageProps[];
  roomType: string;
  capacity: string;
  title: string;
  description: string;
  button: ButtonProps;
};

type Props = {
  tagline: string;
  heading: string;
  description: string;
  button: ButtonProps;
  bedrooms: Bedroom[];
};

export type Bedrooms40Props = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

// Image carousel component for each bedroom
const ImageCarousel = ({ images }: { images: ImageProps[] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  // Preload images for smoother transitions
  useEffect(() => {
    images.forEach(image => {
      const img = new Image();
      img.src = image.src;
    });
  }, [images]);

  const goToPrevious = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
    setTimeout(() => setIsAnimating(false), 400);
  };

  const goToNext = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    const isLastSlide = currentIndex === images.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
    setTimeout(() => setIsAnimating(false), 400);
  };

  return (
    <div className="relative w-full">
      <div className="relative aspect-[3/2] w-full overflow-hidden shadow-md rounded-sm">
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
              alt={images[currentIndex].alt || "Room image"}
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
              onClick={goToPrevious}
              className="absolute left-3 top-1/2 -translate-y-1/2 size-9 flex items-center justify-center bg-white/20 backdrop-blur-sm hover:bg-white/30 rounded-full text-white transition-all z-10 border border-white/10 shadow-md"
              aria-label="Previous image"
            >
              <RxChevronLeft className="size-4" />
            </button>
            <button
              onClick={goToNext}
              className="absolute right-3 top-1/2 -translate-y-1/2 size-9 flex items-center justify-center bg-white/20 backdrop-blur-sm hover:bg-white/30 rounded-full text-white transition-all z-10 border border-white/10 shadow-md"
              aria-label="Next image"
            >
              <RxChevronRight className="size-4" />
            </button>
            
            <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 z-10">
              {images.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`size-1.5 rounded-full transition-all duration-300 ${
                    idx === currentIndex ? "bg-white scale-125 shadow-md" : "bg-white/40 hover:bg-white/70"
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export const Blog40 = (props: Bedrooms40Props) => {
  const { tagline, heading, description, button, bedrooms } = {
    ...Bedrooms40Defaults,
    ...props,
  };
  return (
    <section id="relume" className="relative px-[5%] py-16 md:py-24 lg:py-28 bg-white font-serif overflow-hidden">
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
        
        <div className="grid grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-2 md:gap-y-16 lg:grid-cols-3">
          {bedrooms.map((room, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex size-full flex-col items-center justify-start border border-[#64625B]/30 shadow-sm overflow-hidden hover:shadow transition-all duration-300"
            >
              <div className="w-full transition-transform duration-500 hover:scale-[1.02]">
                <ImageCarousel images={room.images} />
              </div>
              <div className="px-5 py-6 md:p-6 w-full">
                <div className="mb-4 flex w-full items-center justify-between">
                  <p className="bg-[#64625B]/10 px-2 py-1 text-sm font-semibold text-[#64625B]">
                    {room.roomType}
                  </p>
                  <p className="inline text-sm font-semibold text-[#64625B]/90">{room.capacity}</p>
                </div>
                <div className="flex w-full flex-col items-start justify-start">
                  <a className="mb-2 hover:opacity-80 transition-opacity duration-200" href={room.url}>
                    <h3 className="text-xl font-bold md:text-2xl text-[#64625B] tracking-wide">{room.title}</h3>
                  </a>
                  <p className="text-sm sm:text-base text-[#64625B]/80 font-sans tracking-wide leading-relaxed">{room.description}</p>
                  <Button
                    {...room.button}
                    className={`mt-6 flex items-center justify-center gap-x-2 transition-all duration-300 font-serif tracking-wider text-sm ${
                      room.button.variant === "secondary" || room.button.variant === "link"
                        ? "text-[#64625B] hover:text-[#64625B]/90" 
                        : "bg-[#64625B] text-white hover:bg-[#64625B]/90 border border-[#64625B] px-5 py-2.5"
                    }`}
                  >
                    {room.button.title}
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.footer 
          className="flex items-center justify-end"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Button 
            {...button} 
            className={`mt-10 md:mt-14 lg:mt-16 w-auto px-5 sm:px-7 py-2.5 sm:py-3 transition-all duration-300 font-serif tracking-wider text-sm shadow-sm hover:shadow ${
              button.variant === "secondary" 
                ? "bg-transparent text-[#64625B] border border-[#64625B]/30 hover:bg-[#64625B]/5" 
                : "bg-[#64625B] text-white hover:bg-[#64625B]/90 border border-[#64625B]"
            }`}
          >
            {button.title}
          </Button>
        </motion.footer>
      </div>
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#64625B]/30 to-transparent opacity-40"></div>
    </section>
  );
};

// Sample image data for each bedroom
const bedroomImages = [
  {
    src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg",
    alt: "Luxury bedroom in our castle",
  },
  {
    src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg",
    alt: "Bathroom of the luxury suite",
  },
  {
    src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg",
    alt: "View from the luxury suite",
  }
];

const bedroom: Bedroom = {
  url: "#",
  images: bedroomImages,
  roomType: "Deluxe",
  capacity: "Up to 2 guests",
  title: "Royal Suite",
  description:
    "Experience royal luxury in our beautifully appointed suites with period furniture and modern amenities.",
  button: {
    title: "Book Now",
    variant: "link",
    size: "link",
    iconRight: <RxChevronRight />,
  },
};

export const Bedrooms40Defaults: Props = {
  tagline: "Accommodations",
  heading: "Luxurious Castle Rooms",
  description: "Experience the perfect blend of historical elegance and modern comfort in our beautifully appointed castle rooms.",
  button: { title: "View All Rooms", variant: "secondary" },
  bedrooms: [
    {
      ...bedroom,
      roomType: "Standard Room",
      capacity: "Up to 2 guests",
      title: "Comfort Standard",
      description: "Our standard rooms offer both comfort and elegance with carefully selected furniture and a warm atmosphere for a perfect night's sleep.",
      images: [
        {
          src: "/standart/DSC_2802_final.jpg",
          alt: "Standard Room Main View"
        },
        {
          src: "/standart/DSC_2898.jpg",
          alt: "Standard Room Detail"
        },
        {
          src: "/standart/DSC_2833_final2.jpg",
          alt: "Standard Room Another Angle"
        }
      ]
    }, 
    {
      ...bedroom,
      roomType: "Deluxe Suite",
      capacity: "Up to 4 guests",
      title: "The Queen's Quarters"
    }, 
    {
      ...bedroom,
      roomType: "Tower Room",
      capacity: "Up to 2 guests",
      title: "The Knight's Tower"
    }
  ],
};
