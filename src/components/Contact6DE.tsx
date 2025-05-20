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
import { BiCheckCircle } from "react-icons/bi";

type Props = {
  tagline: string;
  heading: string;
  description: string;
  email: string;
  phone: string;
  address: string;
  button: ButtonProps;
};

export type Contact6DEProps = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

export const Contact6DE = (props: Contact6DEProps) => {
  const { tagline, heading, description, email, phone, address, button } = {
    ...Contact6DEDefaults,
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
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    
    const formData = {
      firstName: firstNameInput,
      lastName: lastNameInput,
      email: emailInput,
      phone: phoneInput,
      eventType: selectedEventType,
      guestCount: guestCount,
      message: messageInput,
      terms: acceptTerms,
    };

    try {
      const response = await fetch("https://submit-form.com/Js4n9tHHJ", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // Clear form after successful submission
        setFirstNameInput("");
        setLastNameInput("");
        setEmailInput("");
        setPhoneInput("");
        setSelectedEventType("");
        setGuestCount("");
        setMessageInput("");
        setAcceptTerms(false);
        setShowSuccess(true);
        // Hide success message after 5 seconds
        setTimeout(() => setShowSuccess(false), 5000);
      } else {
        throw new Error("Form submission failed");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Bei der Übermittlung des Formulars ist ein Fehler aufgetreten. Bitte versuchen Sie es erneut.");
    }
  };

  const eventTypes = [
    { value: "wedding", label: "Hochzeit" },
    { value: "corporate", label: "Firmenveranstaltung" },
    { value: "retreat", label: "Retreat" },
    { value: "workshop", label: "Workshop/Seminar" },
    { value: "celebration", label: "Private Feier" },
    { value: "other", label: "Sonstiges" },
  ];

  const guestOptions = [
    { value: "1-10", label: "1-10 Gäste" },
    { value: "11-25", label: "11-25 Gäste" },
    { value: "26-50", label: "26-50 Gäste" },
    { value: "51-75", label: "51-75 Gäste" },
    { value: "76-100", label: "76-100 Gäste" },
    { value: "101-150", label: "101-150 Gäste" },
    { value: "150+", label: "Mehr als 150 Gäste" },
  ];

  return (
    <section id="contact" className="px-[5%] py-16 md:py-24 lg:py-28 bg-white relative">
      {showSuccess && (
        <div className="fixed top-4 right-4 z-50 animate-fade-in">
          <div className="bg-white rounded-lg shadow-lg p-6 border border-[#d4b98c] max-w-md">
            <div className="flex items-center gap-4">
              <BiCheckCircle className="text-[#d4b98c] text-3xl" />
              <div>
                <h3 className="text-lg font-serif font-semibold text-[#64625B]">Vielen Dank!</h3>
                <p className="text-[#64625B]/80">Ihre Anfrage wurde erfolgreich übermittelt. Wir werden uns in Kürze bei Ihnen melden.</p>
              </div>
            </div>
          </div>
        </div>
      )}
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

        <form 
          className="grid grid-cols-1 grid-rows-[auto_auto] gap-6" 
          onSubmit={handleSubmit}
          action="https://submit-form.com/Js4n9tHHJ"
        >
          <div className="grid grid-cols-2 gap-6">
            <div className="grid w-full items-center">
              <Label htmlFor="firstName" className="mb-2 text-[#64625B] font-medium">
                Vorname
              </Label>
              <Input
                type="text"
                id="firstName"
                name="firstName"
                value={firstNameInput}
                onChange={(e) => setFirstNameInput(e.target.value)}
                className="border-[#64625B]/30 focus:border-[#64625B] focus:ring-[#64625B]/20 bg-gray-50"
              />
            </div>

            <div className="grid w-full items-center">
              <Label htmlFor="lastName" className="mb-2 text-[#64625B] font-medium">
                Nachname
              </Label>
              <Input
                type="text"
                id="lastName"
                name="lastName"
                value={lastNameInput}
                onChange={(e) => setLastNameInput(e.target.value)}
                className="border-[#64625B]/30 focus:border-[#64625B] focus:ring-[#64625B]/20 bg-gray-50"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className="grid w-full items-center">
              <Label htmlFor="email" className="mb-2 text-[#64625B] font-medium">
                E-Mail
              </Label>
              <Input
                type="email"
                id="email"
                name="email"
                value={emailInput}
                onChange={(e) => setEmailInput(e.target.value)}
                className="border-[#64625B]/30 focus:border-[#64625B] focus:ring-[#64625B]/20 bg-gray-50"
              />
            </div>

            <div className="grid w-full items-center">
              <Label htmlFor="phone" className="mb-2 text-[#64625B] font-medium">
                Telefonnummer
              </Label>
              <Input
                type="text"
                id="phone"
                name="phone"
                value={phoneInput}
                onChange={(e) => setPhoneInput(e.target.value)}
                className="border-[#64625B]/30 focus:border-[#64625B] focus:ring-[#64625B]/20 bg-gray-50"
              />
            </div>
          </div>

          <div className="grid w-full items-center">
            <Label className="mb-2 text-[#64625B] font-medium">Veranstaltungstyp</Label>
            <Select onValueChange={setSelectedEventType} name="eventType">
              <SelectTrigger className="border-[#64625B]/30 focus:border-[#64625B] focus:ring-[#64625B]/20 bg-gray-50">
                <SelectValue placeholder="Veranstaltungstyp auswählen..." />
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
            <Label className="mb-2 text-[#64625B] font-medium">Geschätzte Gästezahl</Label>
            <Select onValueChange={setGuestCount} name="guestCount">
              <SelectTrigger className="border-[#64625B]/30 focus:border-[#64625B] focus:ring-[#64625B]/20 bg-gray-50">
                <SelectValue placeholder="Gästezahl auswählen..." />
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
              Ihre Anfrage
            </Label>
            <Textarea
              id="message"
              name="message"
              placeholder="Beschreiben Sie Ihre Veranstaltungsanforderungen..."
              className="min-h-[11.25rem] overflow-auto border-[#64625B]/30 focus:border-[#64625B] focus:ring-[#64625B]/20 bg-gray-50"
              value={messageInput}
              onChange={(e) => setMessageInput(e.target.value)}
            />
          </div>

          <div className="mb-3 flex items-center space-x-2 text-sm md:mb-4">
            <Checkbox 
              id="terms" 
              name="terms"
              checked={acceptTerms} 
              onCheckedChange={setAcceptTerms} 
              className="text-[#64625B] border-[#64625B]/50 focus:ring-[#64625B]/20" 
            />
            <Label htmlFor="terms" className="cursor-pointer text-[#64625B]/80">
              Ich akzeptiere die{" "}
              <a className="text-[#d4b98c] underline" href="#">
                Allgemeinen Geschäftsbedingungen
              </a>
            </Label>
          </div>

          <div>
            <Button 
              {...button} 
              type="submit"
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

export const Contact6DEDefaults: Props = {
  tagline: "Kontakt",
  heading: "Planen Sie Ihre perfekte Veranstaltung",
  description: "Kontaktieren Sie uns, um die Möglichkeiten für Ihre nächste Veranstaltung im Schloss Thalheim zu erkunden. Unser Team hilft Ihnen, ein unvergessliches Erlebnis in unserem historischen Veranstaltungsort zu schaffen.",
  email: "reservierung@schlossthalheim.at",
  phone: "+43 2274 7844",
  address: "Schloss Thalheim, Thalheim 1, 3141 Kapelln, Österreich",
  button: { title: "Anfrage senden" },
}; 