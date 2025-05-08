"use client";

import { Button } from "@relume_io/relume-ui";
import type { ButtonProps } from "@relume_io/relume-ui";
import { RxChevronRight } from "react-icons/rx";
import { motion } from "framer-motion";

type ImageProps = {
  src: string;
  alt?: string;
};

type Props = {
  heading: string;
  description: string;
  buttons: ButtonProps[];
  image: ImageProps;
};

export type Layout22Props = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

export const Layout22 = (props: Layout22Props) => {
  const { heading, description, buttons, image } = {
    ...Layout22Defaults,
    ...props,
  };
  return (
    <section id="relume" className="relative px-[5%] py-16 md:py-24 lg:py-28 font-serif bg-white overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#64625B]/30 to-transparent opacity-40"></div>
      <div className="container">
        <motion.div 
          className="grid grid-cols-1 gap-y-12 md:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div>
            <h2 className="mb-5 text-4xl sm:text-5xl font-bold md:mb-6 md:text-6xl lg:text-7xl text-[#64625B] tracking-wide drop-shadow-sm leading-tight">
              {heading}
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-[#64625B]/80 font-sans tracking-wide leading-relaxed">{description}</p>
            
            <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
              {buttons.map((button, index) => (
                <Button 
                  key={index} 
                  {...button}
                  className={`w-auto px-5 py-2.5 transition-all duration-300 font-serif tracking-wider text-sm shadow-sm hover:shadow ${
                    button.variant === "secondary" 
                      ? "bg-transparent text-[#64625B] border border-[#64625B]/30 hover:bg-[#64625B]/5" 
                      : button.variant === "link"
                        ? "p-0 text-[#64625B] hover:text-[#64625B]/80 font-medium flex items-center gap-1"
                        : "bg-[#64625B] text-white hover:bg-[#64625B]/90 border border-[#64625B]"
                  }`}
                >
                  {button.title}
                </Button>
              ))}
            </div>
          </div>
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="overflow-hidden rounded-sm shadow-lg transition-transform duration-500 hover:scale-[1.01]">
              <img 
                src={image.src} 
                className="w-full h-auto object-cover" 
                alt={image.alt} 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#64625B]/30 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          </motion.div>
        </motion.div>
      </div>
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#64625B]/30 to-transparent opacity-40"></div>
    </section>
  );
};

export const Layout22Defaults: Props = {
  heading: "Luxury Accommodation",
  description:
    "Experience unparalleled comfort in our elegantly designed guest rooms. Each accommodation offers a perfect blend of historical charm and modern amenities, creating a haven of tranquility for our guests. Whether you're planning a retreat, attending a wedding, or hosting a corporate event, our variety of room options ensures everyone finds their perfect space.",
  buttons: [
    { title: "View All Rooms", variant: "primary" as const },
    {
      title: "Learn More",
      variant: "link" as const,
      size: "link" as const,
      iconRight: <RxChevronRight />,
    },
  ],
  image: {
    src: "/room.jpeg",
    alt: "Luxury Guest Room at Schloss Thalheim",
  },
};
