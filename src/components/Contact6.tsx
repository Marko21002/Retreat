"use client";

import { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  Input,
  Label,
  Checkbox,
  Textarea,
  Button,
} from "@relume_io/relume-ui";
import type { ButtonProps } from "@relume_io/relume-ui";
import { BiEnvelope, BiMap, BiPhone } from "react-icons/bi";

type Props = {
  tagline: string;
  heading: string;
  description: string;
  email: string;
  phone: string;
  address: string;
  button: ButtonProps;
};

export type Contact6Props = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

export const Contact6 = (props: Contact6Props) => {
  const { tagline, heading, description, email, phone, address, button } = {
    ...Contact6Defaults,
    ...props,
  };

  const [firstNameInput, setFirstNameInput] = useState("");
  const [lastNameInput, setLastNameInput] = useState("");

  const [emailInput, setEmailInput] = useState("");
  const [phoneInput, setPhoneInput] = useState("");

  const [selectedEventType, setSelectedEventType] = useState("");
  const [guestCount, setGuestCount] = useState("");

  const [messageInput, setMessageInput] = useState("");
  const [acceptTerms, setAcceptTerms] = useState<boolean | "indeterminate">(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log({
      firstNameInput,
      lastNameInput,
      emailInput,
      phoneInput,
      selectedEventType,
      guestCount,
      messageInput,
      acceptTerms,
    });
  };

  const eventTypes = [
    { value: "wedding", label: "Wedding" },
    { value: "corporate", label: "Corporate Event" },
    { value: "retreat", label: "Retreat" },
    { value: "workshop", label: "Workshop/Seminar" },
    { value: "celebration", label: "Private Celebration" },
    { value: "other", label: "Other" },
  ];

  const guestOptions = [
    { value: "1-10", label: "1-10 guests" },
    { value: "11-25", label: "11-25 guests" },
    { value: "26-50", label: "26-50 guests" },
    { value: "51-75", label: "51-75 guests" },
    { value: "76-100", label: "76-100 guests" },
    { value: "101-150", label: "101-150 guests" },
    { value: "150+", label: "More than 150 guests" },
  ];

  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28 bg-white">
      <div className="container grid grid-cols-1 items-start gap-y-12 md:grid-flow-row md:grid-cols-2 md:gap-x-12 lg:grid-flow-col lg:gap-x-20 lg:gap-y-16">
        <div>
          <p className="mb-3 font-serif font-semibold md:mb-4 text-[#d4b98c] tracking-wide">{tagline}</p>
          <div className="rb-6 mb-6 md:mb-8">
            <h2 className="rb-5 mb-5 text-4xl font-serif font-bold md:mb-6 md:text-6xl text-[#64625B] tracking-wide">
              {heading}
            </h2>
            <p className="md:text-md font-sans text-[#64625B]/80">{description}</p>
          </div>

          <div className="grid grid-cols-1 gap-4 py-2">
            <div className="flex items-center gap-4">
              <BiEnvelope className="size-6 flex-none text-[#64625B]" />
              <p className="text-[#64625B]">{email}</p>
            </div>
            <div className="flex items-center gap-4">
              <BiPhone className="size-6 flex-none text-[#64625B]" />
              <p className="text-[#64625B]">{phone}</p>
            </div>
            <div className="flex items-center gap-4">
              <BiMap className="size-6 flex-none text-[#64625B]" />
              <p className="text-[#64625B]">{address}</p>
            </div>
          </div>
        </div>

        <form className="grid grid-cols-1 grid-rows-[auto_auto] gap-6" onSubmit={handleSubmit}>
          <div className="grid grid-cols-2 gap-6">
            <div className="grid w-full items-center">
              <Label htmlFor="firstName" className="mb-2 text-[#64625B] font-medium">
                First name
              </Label>
              <Input
                type="text"
                id="firstName"
                value={firstNameInput}
                onChange={(e) => setFirstNameInput(e.target.value)}
                className="border-[#64625B]/30 focus:border-[#64625B] focus:ring-[#64625B]/20"
              />
            </div>

            <div className="grid w-full items-center">
              <Label htmlFor="lastName" className="mb-2 text-[#64625B] font-medium">
                Last name
              </Label>
              <Input
                type="text"
                id="lastName"
                value={lastNameInput}
                onChange={(e) => setLastNameInput(e.target.value)}
                className="border-[#64625B]/30 focus:border-[#64625B] focus:ring-[#64625B]/20"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className="grid w-full items-center">
              <Label htmlFor="email" className="mb-2 text-[#64625B] font-medium">
                Email
              </Label>
              <Input
                type="email"
                id="email"
                value={emailInput}
                onChange={(e) => setEmailInput(e.target.value)}
                className="border-[#64625B]/30 focus:border-[#64625B] focus:ring-[#64625B]/20"
              />
            </div>

            <div className="grid w-full items-center">
              <Label htmlFor="phone" className="mb-2 text-[#64625B] font-medium">
                Phone number
              </Label>
              <Input
                type="text"
                id="phone"
                value={phoneInput}
                onChange={(e) => setPhoneInput(e.target.value)}
                className="border-[#64625B]/30 focus:border-[#64625B] focus:ring-[#64625B]/20"
              />
            </div>
          </div>

          <div className="grid w-full items-center">
            <Label className="mb-2 text-[#64625B] font-medium">Event Type</Label>
            <Select onValueChange={setSelectedEventType}>
              <SelectTrigger className="border-[#64625B]/30 focus:border-[#64625B] focus:ring-[#64625B]/20">
                <SelectValue placeholder="Select event type..." />
              </SelectTrigger>
              <SelectContent>
                {eventTypes.map((item, index) => (
                  <SelectItem key={index} value={item.value}>
                    {item.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="grid w-full items-center">
            <Label className="mb-2 text-[#64625B] font-medium">Estimated Number of Guests</Label>
            <Select onValueChange={setGuestCount}>
              <SelectTrigger className="border-[#64625B]/30 focus:border-[#64625B] focus:ring-[#64625B]/20">
                <SelectValue placeholder="Select guest count..." />
              </SelectTrigger>
              <SelectContent>
                {guestOptions.map((item, index) => (
                  <SelectItem key={index} value={item.value}>
                    {item.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="grid w-full items-center">
            <Label htmlFor="message" className="mb-2 text-[#64625B] font-medium">
              Your Request
            </Label>
            <Textarea
              id="message"
              placeholder="Tell us about your event requirements..."
              className="min-h-[11.25rem] overflow-auto border-[#64625B]/30 focus:border-[#64625B] focus:ring-[#64625B]/20"
              value={messageInput}
              onChange={(e) => setMessageInput(e.target.value)}
            />
          </div>

          <div className="mb-3 flex items-center space-x-2 text-sm md:mb-4">
            <Checkbox id="terms" checked={acceptTerms} onCheckedChange={setAcceptTerms} className="text-[#64625B] border-[#64625B]/50 focus:ring-[#64625B]/20" />
            <Label htmlFor="terms" className="cursor-pointer text-[#64625B]/80">
              I accept the{" "}
              <a className="text-[#d4b98c] underline" href="#">
                Terms and Conditions
              </a>
            </Label>
          </div>

          <div>
            <Button 
              {...button} 
              className="w-auto px-5 sm:px-7 py-2.5 sm:py-3 transition-all duration-300 font-serif tracking-wider text-sm shadow-sm hover:shadow bg-[#64625B] text-white hover:bg-[#64625B]/90 border border-[#64625B]"
            >
              {button.title}
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
};

export const Contact6Defaults: Props = {
  tagline: "Get in Touch",
  heading: "Plan Your Perfect Event",
  description: "Contact us to explore the possibilities for your next event at Schloss Thalheim. Our team will help you create an unforgettable experience in our historic venue.",
  email: "events@schlossthalheim.at",
  phone: "+43 2274 7844",
  address: "Schloss Thalheim, Thalheim 1, 3141 Kapelln, Austria",
  button: { title: "Submit Inquiry" },
};
