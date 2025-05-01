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
  image: ImageProps;
};

export type Header26Props = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

export const Header26 = (props: Header26Props) => {
  const { heading, description, buttons, image } = {
    ...Header26Defaults,
    ...props,
  };
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28 bg-white font-serif">
      <div className="container">
        <div className="flex flex-col items-center">
          <div className="mb-12 text-center md:mb-18 lg:mb-20">
            <div className="w-full max-w-xl md:max-w-2xl">
              <h1 className="mb-5 text-4xl sm:text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl text-[#64625B] tracking-wide drop-shadow-sm leading-tight">
                {heading}
              </h1>
              <p className="text-sm sm:text-base md:text-lg text-[#64625B]/80 font-sans tracking-wide leading-relaxed">{description}</p>
              <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-y-3 gap-x-5 md:mt-8">
                {buttons.map((button, index) => (
                  <Button 
                    key={index} 
                    {...button} 
                    className={`w-full sm:w-auto px-5 sm:px-7 py-2.5 sm:py-3 transition-all duration-300 font-serif tracking-wider text-sm shadow-sm hover:shadow ${
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
          </div>
          <div className="overflow-hidden rounded-sm shadow-lg transition-transform duration-700 hover:scale-[1.02]">
            <img src={image.src} className="w-full object-cover" alt={image.alt} />
            <div className="absolute inset-0 bg-gradient-to-t from-[#64625B]/20 to-transparent"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export const Header26Defaults: Props = {
  heading: "Historic Castle Retreat in Scenic Countryside",
  description:
    "Discover the tranquility and elegance of our meticulously restored castle estate. Perfect for exclusive events, memorable weddings, and rejuvenating yoga retreats in a breathtaking natural setting.",
  buttons: [
    { title: "Book Your Stay" }, 
    { title: "Take a Tour", variant: "secondary" }
  ],
  image: {
    src: "/hero/castle.jpg",
    alt: "Aerial view of historic castle and grounds",
  },
};
