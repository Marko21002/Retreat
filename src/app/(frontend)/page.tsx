import React from "react";
;
import { EventItemHeader8 } from "@/components/EventItemHeader8";
import { Footer1 } from "@/components/Footer1";
import { Portfolio16 } from "@/components/Portfolio16"; 
import { Navbar3 } from "@/components/Navbar3";
import { Contact6 } from "@/components/Contact6";
import { Cta25 } from "@/components/Cta25";
import { Contact1 } from "@/components/contact1";
export default async function Home() {
  return (
    <div>
     <Navbar3/> 
      <EventItemHeader8/>  
      <Portfolio16 />
      <Cta25/>
      <Contact6/>
      <Contact1/>
      <Footer1 />
    </div>
  );
}
