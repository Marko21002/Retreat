import React from "react";
import { BiEnvelope, BiMap, BiPhone } from "react-icons/bi";

type LinkProps = {
  label: string;
  url: string;
};

type Contact = {
  icon: React.ReactNode;
  title: string;
  description: string;
  link: LinkProps;
};

type Props = {
  contacts: Contact[];
};

export type Contact18Props = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

export const Contact18 = (props: Contact18Props) => {
  const { contacts } = {
    ...Contact18Defaults,
    ...props,
  };
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28 bg-white font-serif">
      <div className="container">
        <div className="grid auto-cols-fr grid-cols-1 items-center gap-x-12 gap-y-12 md:grid-cols-3 md:gap-y-16">
          {contacts.map((contact, index) => (
            <div key={index} className="flex flex-col items-center justify-start text-center">
              <div className="mb-5 lg:mb-6 text-[#64625B]">{contact.icon}</div>
              <h3 className="mb-3 text-2xl font-bold leading-[1.4] md:text-3xl lg:mb-4 lg:text-4xl text-[#64625B] tracking-wide">
                {contact.title}
              </h3>
              <p className="mb-5 text-center md:mb-6 text-[#64625B]/80 font-sans tracking-wide leading-relaxed">
                {contact.description}
              </p>
              <a 
                className="underline text-[#64625B] transition-colors duration-300 hover:text-[#64625B]/80 font-serif tracking-wide text-sm" 
                href={contact.link?.url}
              >
                {contact.link?.label}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const Contact18Defaults: Props = {
  contacts: [
    {
      icon: <BiEnvelope className="size-12" />,
      title: "Email",
      description:
        "Contact us directly via email for any inquiries about our services, venues, or booking information.",
      link: {
        label: "info@schloss-thalheim.com",
        url: "mailto:info@schloss-thalheim.com",
      },
    },
    {
      icon: <BiPhone className="size-12" />,
      title: "Phone",
      description:
        "Speak with our friendly team directly who can answer your questions and help plan your perfect event.",
      link: {
        label: "+43 (0) 123 456 789",
        url: "tel:+43123456789",
      },
    },
    {
      icon: <BiMap className="size-12" />,
      title: "Location",
      description:
        "Visit our historic castle venue located in the beautiful countryside with stunning panoramic views.",
      link: {
        label: "Schloss Thalheim, Austria",
        url: "https://maps.google.com",
      },
    },
  ],
};

