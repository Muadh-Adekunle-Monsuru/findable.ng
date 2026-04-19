import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import SocialProof from "@/components/SocialProof";
import Features from "@/components/Features";
import DeepDive from "@/components/DeepDive";
import HowItWorks from "@/components/HowItWorks";
import Pricing from "@/components/Pricing";
import Footer from "@/components/Footer";

export default function FindableLandingPage() {
  return (
    <div className="min-h-screen relative bg-background text-foreground scroll-smooth overflow-x-clip">
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
