"use client";

import { Store, UtensilsCrossed, Briefcase, Heart, GraduationCap, Car, ShoppingBag, Scissors } from "lucide-react";
import { motion } from "framer-motion";

const icons = [
  { Icon: Store, label: "Retail" },
  { Icon: UtensilsCrossed, label: "Restaurants" },
  { Icon: Briefcase, label: "Services" },
  { Icon: Heart, label: "Health" },
  { Icon: GraduationCap, label: "Education" },
  { Icon: Car, label: "Auto" },
  { Icon: ShoppingBag, label: "Shopping" },
  { Icon: Scissors, label: "Beauty" },
];

const SocialProof = () => (
  <section className="py-12 overflow-hidden flex flex-col w-full relative">
    <p className="text-center text-sm text-muted-foreground mb-8">
      Join the growing network of findable local businesses
    </p>
    
    <div className="w-full flex overflow-hidden border-y border-border py-10 relative">
      {/* Optional gradient fade at edges for a smoother look */}
      <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

      <motion.div 
        className="flex w-max"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ ease: "linear", duration: 30, repeat: Infinity }}
      >
        {/* We duplicate the icons 4 times to ensure it covers very wide screens seamlessly */}
        {[...icons, ...icons, ...icons, ...icons].map(({ Icon, label }, i) => (
          <div key={i} className="flex items-center gap-2 px-8 text-muted-foreground/50 hover:text-foreground transition-colors cursor-pointer shrink-0">
            <Icon className="h-6 w-6" />
            <span className="font-light whitespace-nowrap">{label}</span>
          </div>
        ))}
      </motion.div>
    </div>
  </section>
);

export default SocialProof;
