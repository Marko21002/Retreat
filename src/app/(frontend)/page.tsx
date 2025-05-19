import React from "react";
;
import { EventItemHeader8 } from "@/components/EventItemHeader8";
import { Footer1 } from "@/components/Footer1";
import { Portfolio16 } from "@/components/Portfolio16"; 
import { Navbar3 } from "@/components/Navbar3";
import { Contact6 } from "@/components/Contact6";
import { Cta25 } from "@/components/Cta25";
import { Layout22 } from "@/components/layout22";
export default async function Home() {
  return (
    <div>
     <Navbar3/> 
      <EventItemHeader8/>  
      <Portfolio16 />
      <Cta25/>
      {/* <Blog40/> */}
      <Layout22/>
      <Contact6/>
      <Footer1 />
    </div>
  );
}
