"use client";
import { MotionDiv } from "../ui/Motion";
import { fadeUp } from "@/lib/motion";
import { motion } from "framer-motion";

export default function NewHero() {
  return (
    <MotionDiv
      initial="hidden"
      animate="visible"
      className="relative overflow-hidden bg-surface py-24 md:py-32"
    >
      <div className="max-w-7xl mx-auto px-8 grid md:grid-cols-2 gap-20 items-center">
        <MotionDiv variants={fadeUp} className="z-10">
          <h1 className="text-5xl md:text-7xl font-extrabold text-on-background leading-[1.1] tracking-tighter mb-8">
            Be the <span className="text-primary italic">first</span> business
            people see on Google in your area
          </h1>
          <p className="text-lg md:text-xl text-on-surface-variant mb-10 max-w-xl leading-relaxed">
            We help Nigerian businesses dominate local search results, driving
            verified traffic and high-value customers directly to your
            storefront or website.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <motion.a
              whileTap={{ scale: 0.96 }}
              whileHover={{ scale: 1.02 }}
              href="#pricing"
              className="bg-primary hover:bg-primary-container text-white px-8 py-4 rounded-full font-bold text-lg transition-all shadow-xl shadow-primary/20"
            >
              Start Growing Now
            </motion.a>
            <motion.a
              whileTap={{ scale: 0.96 }}
              whileHover={{ scale: 1.02 }}
              href="#why-us"
              className="bg-surface-container-high text-on-surface px-8 py-4 rounded-full font-bold text-lg hover:bg-surface-container-highest transition-all"
            >
              Why Us
            </motion.a>
          </div>
        </MotionDiv>
        <MotionDiv variants={fadeUp} className="relative">
          <div className="absolute -top-12 -left-12 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-12 -right-12 w-64 h-64 bg-secondary/10 rounded-full blur-3xl"></div>
          <div className="relative bg-surface-container-lowest p-4 rounded-3xl shadow-2xl border border-outline-variant/10">
            <img
              alt="Digital growth and strategy session"
              className="rounded-2xl w-full aspect-[4/3] object-cover object-top"
              data-alt="Modern office interior in Lagos with professional team members discussing data on a large screen, bright natural lighting, minimalist aesthetic"
              src="/parfait.svg"
            />
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl flex items-center gap-4 border border-outline-variant/10">
              <div className="bg-primary-fixed p-3 rounded-full">
                <span
                  className="material-symbols-outlined text-on-primary-fixed"
                  data-icon="trending_up"
                >
                  trending_up
                </span>
              </div>
              <div>
                <p className="text-sm font-bold text-on-surface">
                  +142% Traffic
                </p>
                <p className="text-xs text-outline italic leading-none">
                  Last 30 days growth
                </p>
              </div>
            </div>
          </div>
        </MotionDiv>
      </div>
    </MotionDiv>
  );
}
