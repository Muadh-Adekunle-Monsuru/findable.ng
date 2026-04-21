import React from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import SocialProof from "./SocialProof";
import Features from "./Features";
import DeepDive from "./DeepDive";
import HowItWorks from "./HowItWorks";
import Pricing from "./Pricing";
import Footer from "./Footer";

export default function OldPage() {
  return (
    <div className="min-h-screen bg-background mx-auto px-6 lg:px-8 text-foreground scroll-smooth">
      <Navbar />
      <main>
        <Hero />
        <SocialProof />
        <Features />
        <DeepDive />
        <HowItWorks />
        <Pricing />
      </main>
      <Footer />
    </div>
  );
}
