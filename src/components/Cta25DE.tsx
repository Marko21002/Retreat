import { FaWhatsapp } from "react-icons/fa";
import { BiPhone } from "react-icons/bi";

type Props = {
  heading: string;
  description: string;
  phoneNumber: string;
  whatsappLink: string;
};

export type Cta25DEProps = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

export const Cta25DE = (props: Cta25DEProps) => {
  const { heading, description, phoneNumber, whatsappLink } = {
    ...Cta25DEDefaults,
    ...props,
  };
  return (
    <section id="relume" className="relative px-[5%] py-16 md:py-24 lg:py-28 bg-white">
      <div className="container mx-auto max-w-2xl text-center">
        <div className="flex flex-col items-center">
          <h4 className="font-serif text-[#d4b98c] tracking-widest uppercase text-sm md:text-base">Zusätzliche Möglichkeiten</h4>
          <div className="h-[1px] w-16 bg-[#d4b98c] my-4"></div>
          <h2 className="mt-3 text-3xl sm:text-4xl font-serif font-bold md:mt-4 md:text-5xl lg:text-6xl tracking-wide text-[#64625B]">
            {heading}
          </h2>
        </div>
        <p className="mt-6 text-sm sm:text-base md:mt-7 md:text-lg font-sans leading-relaxed text-[#64625B]/80">
          {description}
        </p>
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 md:mt-10">
          <a
            href={`tel:${phoneNumber}`}
            className="w-full sm:w-auto px-6 py-3 bg-[#64625B] text-white hover:bg-[#64625B]/90 border border-[#64625B] font-serif tracking-wider text-sm shadow-sm hover:shadow transition-all duration-300 flex items-center justify-center gap-2 rounded"
          >
            <BiPhone size={18} />
            <span>{phoneNumber}</span>
          </a>
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-6 py-3 bg-[#25D366] text-white hover:bg-[#25D366]/90 border border-[#25D366] font-serif tracking-wider text-sm shadow-sm hover:shadow transition-all duration-300 flex items-center justify-center gap-2 rounded"
          >
            <FaWhatsapp size={18} />
            <span>WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export const Cta25DEDefaults: Props = {
  heading: "Entdecken Sie unsere exklusiven Räume",
  description:
    "Wir bieten viele weitere exklusive Bereiche, die auf unserer Website nicht vorgestellt werden. Kontaktieren Sie unseren Manager für personalisierte Empfehlungen und um zu besprechen, wie wir Ihre spezifischen Event-Anforderungen erfüllen können.",
  phoneNumber: "+43 1234 567890",
  whatsappLink: "https://wa.me/431234567890",
}; 