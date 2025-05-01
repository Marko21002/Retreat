import { Button } from "@relume_io/relume-ui";
import type { ButtonProps } from "@relume_io/relume-ui";

type ImageProps = {
  src: string;
  alt?: string;
};

type Props = {
  heading: string;
  description: string;
  buttons: ButtonProps[];
  images: ImageProps[];
};

export type Header78Props = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

export const Header78 = (props: Header78Props) => {
  const { heading, description, buttons, images } = {
    ...Header78Defaults,
    ...props,
  };
  return (
    <section id="relume" className="relative px-[5%] py-16 md:py-28 lg:py-32 bg-white font-serif overflow-hidden">
      <div className="container flex flex-col items-center relative z-10">
        <div className="mb-12 max-w-[95%] sm:max-w-xl md:max-w-2xl text-center md:mb-20 lg:mb-24 relative">
          <h1 className="mb-4 text-4xl sm:text-5xl font-bold md:mb-8 md:text-7xl lg:text-9xl text-[#64625B] tracking-wide drop-shadow-sm leading-tight">{heading}</h1>
          <p className="text-sm sm:text-base md:text-lg text-[#64625B]/80 font-sans tracking-wide leading-relaxed px-2 sm:px-0">{description}</p>
          <div className="mt-6 md:mt-8 flex flex-col sm:flex-row items-center justify-center gap-y-3 gap-x-5">
            {buttons.map((button, index) => (
              <Button 
                key={index} 
                className={`w-full sm:w-auto px-5 sm:px-7 py-2.5 sm:py-3 transition-all duration-300 font-serif tracking-wider text-sm shadow-sm hover:shadow ${
                  button.variant === "secondary" 
                    ? "bg-transparent text-[#64625B] border border-[#64625B]/30 hover:bg-[#64625B]/5" 
                    : "bg-[#64625B] text-white hover:bg-[#64625B]/90 border border-[#64625B]"
                }`}
                {...button}
              >
                {button.title}
              </Button>
            ))}
          </div>
        </div>

        <div className="flex w-screen justify-start overflow-hidden">
          <div className="grid shrink-0 grid-cols-1 gap-y-6">
            <div className="grid w-full animate-marquee-top auto-cols-fr grid-cols-2 gap-6 self-center">
              {[...new Array(2)].map((e, index) => (
                <div key={index} className="grid w-full grid-flow-col gap-6">
                  {images.map((image, imageIndex) => (
                    <div
                      key={imageIndex}
                      className="relative w-[60vw] pt-[75%] sm:w-[18rem] md:w-[26rem] shadow-md rounded-sm overflow-hidden transition-transform duration-700 hover:scale-[1.02]"
                    >
                      <img
                        className="absolute inset-0 size-full object-cover"
                        src={image.src}
                        alt={image.alt}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#64625B]/20 to-transparent"></div>
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <div className="grid w-full animate-marquee-bottom grid-cols-2 gap-6 self-center">
              {[...new Array(2)].map((e, index) => (
                <div key={index} className="grid w-full grid-flow-col gap-6">
                  {images.map((image, imageIndex) => (
                    <div
                      key={imageIndex}
                      className="relative w-[60vw] pt-[75%] sm:w-[18rem] md:w-[26rem] shadow-md rounded-sm overflow-hidden transition-transform duration-700 hover:scale-[1.02]"
                    >
                      <img
                        className="absolute inset-0 size-full object-cover"
                        src={image.src}
                        alt={image.alt}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#64625B]/20 to-transparent"></div>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export const Header78Defaults: Props = {
  heading: "Schloss Thalheim - Luxury Venue for Special Events",
  description:
    "Experience the timeless elegance of our historic castle. We offer exclusive spaces for weddings, corporate events, yoga retreats, and cultural gatherings.",
  buttons: [
    { title: "Explore Venues" }, 
    { title: "Request Information", variant: "secondary" }
  ],
  images: [
    {
      src: "/hero/20180115-Capture0028-HDR.jpg",
      alt: "Villa Seligmann Yoga Studio",
    },
    {
      src: "/hero/20180115-Capture0033-HDR-Pano.jpg",
      alt: "Villa Seligmann Panorama",
    },
    {
      src: "/hero/_NAG4443-Pano.jpeg",
      alt: "Panorama View of Villa Seligmann",
    },
    {
      src: "/hero/Amphitheater.jpg",
      alt: "Amphitheater at Villa Seligmann",
    },
    {
      src: "/hero/Raum Provence.jpeg",
      alt: "Provence Room at Villa Seligmann",
    },
    {
      src: "/hero/_NAG5331-HDR.jpeg",
      alt: "Villa Seligmann Interior",
    },
    {
        src: "/hero/castle.jpg",
        alt: "Castle",
      },
      {
        src: "/hero/castle2.jpg",
        alt: "Castle",
      },
  ],
};
