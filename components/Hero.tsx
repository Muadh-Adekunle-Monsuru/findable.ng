"use client";

import { motion } from "framer-motion";
import { Star, Search } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="pt-20 pb-16 md:pt-32 md:pb-24 px-4 overflow-hidden">
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-7xl font-extrabold tracking-tight text-gray-900 mb-6 md:leading-15">
            Get your business discovered on
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400 px-1 ">
              {" "}
              Google
            </span>{" "}
            Search, Maps and more
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-10 max-w-2xl mx-auto leading-snug">
            Turn people who find you on Google Search and Maps into new
            customers. We build, verify, and manage your Google Business Profile
            so you can focus on running your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="#pricing"
              className="w-full sm:w-auto px-8 py-4 bg-primary text-white font-bold rounded-full text-lg shadow-[0_8px_30px_rgb(29,78,216,0.3)] hover:shadow-[0_8px_30px_rgb(29,78,216,0.5)] transition-all transform hover:-translate-y-1"
            >
              Get Listed Today
            </a>
            <a
              href="#deep-dive"
              className="w-full sm:w-auto px-8 py-4 bg-white text-gray-700 font-bold border border-gray-200 rounded-full text-lg hover:bg-gray-50 transition-all"
            >
              See how it works
            </a>
          </div>
        </motion.div>
      </div>

      {/* Floating Mockup Placeholder */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="mt-16 max-w-5xl mx-auto relative px-4 flex items-center justify-center"
      >
        <div className="relative h-96 w-full max-w-lg overflow-hidden rounded-xl">
          <Image
            src={"/parfait.svg"}
            alt="phone"
            fill
            className="object-cover object-top"
          />
        </div>
      </motion.div>
    </section>
  );
}
