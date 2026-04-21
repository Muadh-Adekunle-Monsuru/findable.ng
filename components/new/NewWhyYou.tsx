"use client";
import { MotionDiv } from "../ui/Motion";
import { fadeUp } from "@/lib/motion";
import { motion } from "framer-motion";

export default function NewWhyYou() {
  return (
    <MotionDiv
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      id="why-us"
      className="py-24 bg-surface-container-low"
    >
      <MotionDiv variants={fadeUp} className="max-w-7xl mx-auto px-8">
        <div className="grid lg:grid-cols-12 gap-6">
          <div className="lg:col-span-5 flex flex-col justify-center">
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-8">
              Why businesses choose Findable
            </h2>
            <p className="text-lg text-on-surface-variant mb-8 leading-relaxed">
              We don't just "do SEO." We build digital authority that translates
              into real-world revenue for Nigerian entrepreneurs.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <span
                  className="material-symbols-outlined text-primary"
                  data-icon="check_circle"
                >
                  check_circle
                </span>
                <span className="font-medium">
                  100% Focused on Local Nigerian Market
                </span>
              </div>
              <div className="flex items-center gap-3">
                <span
                  className="material-symbols-outlined text-primary"
                  data-icon="check_circle"
                >
                  check_circle
                </span>
                <span className="font-medium">
                  Transparent ROI &amp; Reporting
                </span>
              </div>
            </div>
          </div>
          <div className="lg:col-span-7 grid md:grid-cols-2 gap-6">
            <motion.div
              whileHover={{ y: -4 }}
              transition={{ duration: 0.2 }}
              className="bg-surface-container-lowest p-8 rounded-3xl shadow-sm hover:shadow-md transition-shadow"
            >
              <span
                className="material-symbols-outlined text-primary text-4xl mb-6"
                data-icon="hub"
              >
                hub
              </span>
              <h4 className="text-xl font-bold mb-3">
                Built for Nigerian businesses
              </h4>
              <p className="text-sm text-on-surface-variant">
                Designed specifically for the local ecosystem, accounting for
                regional search habits and connectivity patterns.
              </p>
            </motion.div>
            <motion.div
              whileHover={{ y: -4 }}
              transition={{ duration: 0.2 }}
              className="bg-surface-container-lowest p-8 rounded-3xl shadow-sm hover:shadow-md transition-shadow"
            >
              <span
                className="material-symbols-outlined text-primary text-4xl mb-6"
                data-icon="speed"
              >
                speed
              </span>
              <h4 className="text-xl font-bold mb-3">Fast setup</h4>
              <p className="text-sm text-on-surface-variant">
                No long delays. Get your foundation ready and optimized in as
                little as 72 hours.
              </p>
            </motion.div>
            <motion.div
              whileHover={{ y: -4 }}
              transition={{ duration: 0.2 }}
              className="bg-surface-container-lowest p-8 rounded-3xl shadow-sm hover:shadow-md transition-shadow"
            >
              <span
                className="material-symbols-outlined text-primary text-4xl mb-6"
                data-icon="location_on"
              >
                location_on
              </span>
              <h4 className="text-xl font-bold mb-3">Local SEO expertise</h4>
              <p className="text-sm text-on-surface-variant">
                Deep knowledge of Google Maps, local directories, and citation
                building specific to Nigerian cities.
              </p>
            </motion.div>
            <motion.div
              whileHover={{ y: -4 }}
              transition={{ duration: 0.2 }}
              className="bg-surface-container-lowest p-8 rounded-3xl shadow-sm hover:shadow-md transition-shadow"
            >
              <span
                className="material-symbols-outlined text-primary text-4xl mb-6"
                data-icon="autorenew"
              >
                autorenew
              </span>
              <h4 className="text-xl font-bold mb-3">Ongoing optimization</h4>
              <p className="text-sm text-on-surface-variant">
                SEO isn't a one-time task. We constantly refine your presence to
                maintain and improve rankings.
              </p>
            </motion.div>
          </div>
        </div>
      </MotionDiv>
    </MotionDiv>
  );
}
