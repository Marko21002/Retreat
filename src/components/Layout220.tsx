import { Button } from "@relume_io/relume-ui";
import type { ButtonProps } from "@relume_io/relume-ui";
import { RxChevronRight } from "react-icons/rx";

type ImageProps = {
  src: string;
  alt?: string;
};

type FeaturesProps = {
  icon: ImageProps;
  heading: string;
  description: string;
};

type Props = {
  heading: string;
  subheading: string;
  buttons: ButtonProps[];
  image: ImageProps;
  features: FeaturesProps[];
};

export type Layout220Props = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

export const Layout220 = (props: Layout220Props) => {
  const { heading, subheading, buttons, image, features } = {
    ...Layout220Defaults,
    ...props,
  };
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28 bg-white font-serif">
      <div className="container">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-[#64625B] tracking-wide">{heading}</h2>
          <p className="text-[#64625B]/80 font-sans text-base md:text-lg max-w-2xl mx-auto tracking-wide leading-relaxed">{subheading}</p>
        </div>
        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2 lg:gap-x-20">
          <div className="order-2 md:order-1">
            <img src={image.src} className="w-full object-cover rounded-sm shadow-md transition-transform duration-700 hover:scale-[1.02]" alt={image.alt} />
          </div>
          <div className="order-1 md:order-2">
            <div className="grid grid-cols-1 gap-x-6 gap-y-8 py-2 sm:grid-cols-2">
              {features.map((feature, index) => (
                <div key={index}>
                  <div className="mb-3 md:mb-4">
                    <img src={feature.icon.src} className="size-12" alt={feature.icon.alt} />
                  </div>
                  <h3 className="mb-3 text-xl font-bold md:mb-4 md:text-2xl text-[#64625B] tracking-wide">{feature.heading}</h3>
                  <p className="text-[#64625B]/80 font-sans tracking-wide leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>
            <div className="mt-6 flex flex-wrap gap-4 md:mt-8">
              {buttons.map((button, index) => (
                <Button 
                  key={index} 
                  {...button}
                  className={`transition-all duration-300 font-serif tracking-wider text-sm shadow-sm hover:shadow ${
                    button.variant === "secondary" 
                      ? "bg-transparent text-[#64625B] border border-[#64625B]/30 hover:bg-[#64625B]/5" 
                      : button.variant === "link" 
                        ? "text-[#64625B] hover:text-[#64625B]/80 flex items-center gap-1 px-0" 
                        : "bg-[#64625B] text-white hover:bg-[#64625B]/90 border border-[#64625B]"
                  }`}
                >
                  {button.title}
                  {button.iconRight && <span className="ml-1">{button.iconRight}</span>}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export const Layout220Defaults: Props = {
  heading: "Events We Can Host",
  subheading: "Discover a selection of events we specialize in, with many more possibilities available for your special occasion.",
  buttons: [
    { title: "View All Event Types", variant: "secondary" },
    {
      title: "Contact Us",
      variant: "link",
      size: "link",
      iconRight: <RxChevronRight />,
    },
  ],
  image: {
    src: "/events-collage.jpg",
    alt: "Events at Schloss Thalheim",
  },
  features: [
    {
      icon: { src: "/icons/wedding.svg", alt: "Wedding icon" },
      heading: "Weddings",
      description:
        "Elegant ceremonies and receptions in our historic castle with beautiful gardens for an unforgettable celebration.",
    },
    {
      icon: { src: "/icons/corporate.svg", alt: "Corporate icon" },
      heading: "Corporate Events",
      description:
        "Professional meeting spaces, team-building activities, and exclusive retreats for productive business gatherings.",
    },
    {
      icon: { src: "/icons/yoga.svg", alt: "Yoga icon" },
      heading: "Yoga Retreats",
      description:
        "Peaceful surroundings for wellness programs, with dedicated yoga studios and meditation spaces.",
    },
    {
      icon: { src: "/icons/celebration.svg", alt: "Celebration icon" },
      heading: "Private Parties",
      description:
        "Customizable spaces for birthdays, anniversaries, and special celebrations with catering and entertainment options.",
    },
  ],
};
