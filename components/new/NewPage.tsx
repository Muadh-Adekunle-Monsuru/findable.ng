import React from "react";
import NewNav from "./NewNav";
import NewHero from "./NewHero";
import NewHowItWorks from "./NewHowItWorks";
import NewProof from "./NewProof";
import NewWhyYou from "./NewWhyYou";
import NewPricing from "./NewPricing";
import NewFAQ from "./NewFAQ";
import NewFinalCTA from "./NewFinalCTA";
import NewFooter from "./NewFooter";
import Footer from "../Footer";

export default function NewPage() {
  return (
    <>
      <NewNav />
      <main className="pt-20">
        <NewHero />
        <NewProof />
        <NewHowItWorks />
        <NewWhyYou />
        <NewPricing />
        <NewFAQ />
        {/* <NewFinalCTA /> */}
      </main>
      <Footer />
    </>
  );
}
