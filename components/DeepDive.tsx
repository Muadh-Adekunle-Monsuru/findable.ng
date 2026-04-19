"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, MapPin, CheckCircle2 } from "lucide-react";

export default function DeepDive() {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    {
      id: "setup",
      title: "Setup",
      description: "We optimize your business profile with exact category mapping, local keywords, and compelling descriptions to match what customers search for in your area.",
      imagePlaceholder: "Setup Dashboard Mockup"
    },
    {
      id: "verification",
      title: "Verification",
      description: "Skip the waiting. We handle Google's strict verification process, ensuring your physical location is recognized instantly without postcard delays.",
      imagePlaceholder: "Verification Progress Mockup"
    },
    {
      id: "management",
      title: "Ongoing Management",
      description: "Stay ahead with optional photo updates, promotional posts, and instant review responses that signal trust to Google and your future customers.",
      imagePlaceholder: "Management Analytics Mockup"
    }
  ];

  return (
    <section id='deep-dive' className="py-24 bg-black text-white overflow-hidden relative">
      {/* Abstract background glow */}
      <div className="absolute top-0 -right-40 w-96 h-96 bg-primary/20 blur-[100px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-0 -left-20 w-80 h-80 bg-blue-600/20 blur-[100px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <h2 className="text-3xl md:text-5xl font-bold mb-16 text-center tracking-tight">Everything you need to <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">dominate local search.</span></h2>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Tab Menu */}
          <div className="space-y-4">
            {tabs.map((tab, index) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(index)}
                className={`w-full text-left p-6 md:p-8 rounded-2xl transition-all duration-300 border ${activeTab === index
                    ? 'bg-gray-900 border-gray-700 shadow-[0_0_30px_rgb(29,78,216,0.1)]'
                    : 'bg-transparent border-transparent hover:bg-gray-900/50 hover:border-gray-800'
                  }`}
              >
                <h3 className={`text-2xl font-bold mb-3 flex justify-between items-center ${activeTab === index ? 'text-white' : 'text-gray-400'}`}>
                  {tab.title}
                  {activeTab === index && <ChevronRight className="h-6 w-6 text-primary" />}
                </h3>
                <AnimatePresence>
                  {activeTab === index && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <p className="text-gray-400 leading-relaxed text-lg pt-2">
                        {tab.description}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </button>
            ))}
          </div>

          {/* Right: Dynamic Image Placeholder */}
          <div className="relative aspect-square lg:aspect-[4/5] bg-gray-900 rounded-3xl border border-gray-800 overflow-hidden shadow-2xl flex items-center justify-center p-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="w-full h-full relative"
              >
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-800/50 via-gray-900/0 to-transparent"></div>

                <div className="w-full h-full border border-gray-800 bg-black/50 rounded-2xl backdrop-blur-sm flex flex-col items-center justify-center p-8 text-center shadow-2xl z-10 relative">
                  {activeTab === 0 && (
                    <div className="space-y-6 w-full max-w-sm">
                      <div className="h-12 w-12 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto">
                        <MapPin className="h-6 w-6 text-blue-400" />
                      </div>
                      <h4 className="text-xl font-bold text-white">Profile Setup</h4>
                      <div className="space-y-3">
                        <div className="h-8 w-full bg-gray-800 rounded-md"></div>
                        <div className="h-8 w-5/6 bg-gray-800 rounded-md mx-auto"></div>
                        <div className="h-24 w-full bg-gray-800 rounded-md mt-6"></div>
                      </div>
                    </div>
                  )}
                  {activeTab === 1 && (
                    <div className="space-y-8 w-full max-w-sm">
                      <div className="h-16 w-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto">
                        <CheckCircle2 className="h-8 w-8 text-green-400" />
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-white mb-2">Verification Fast-Track</h4>
                        {/* <p className="text-sm text-gray-500">Bypassing postal delays with priority on-site proxy verification.</p> */}
                      </div>
                      <div className="h-2 w-full bg-gray-800 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: "100%" }}
                          transition={{ duration: 1.5, ease: "easeOut" }}
                          className="h-full bg-green-500"
                        />
                      </div>
                    </div>
                  )}
                  {activeTab === 2 && (
                    <div className="space-y-6 w-full max-w-sm">
                      <div className="flex gap-4 mb-8">
                        <div className="flex-1 bg-gray-800 rounded-xl p-4 text-left">
                          <div className="text-2xl font-bold text-white">412</div>
                          <div className="text-xs text-blue-400 uppercase tracking-widest mt-1">Visits</div>
                        </div>
                        <div className="flex-1 bg-gray-800 rounded-xl p-4 text-left">
                          <div className="text-2xl font-bold text-white">38</div>
                          <div className="text-xs text-blue-400 uppercase tracking-widest mt-1">Calls</div>
                        </div>
                      </div>
                      <div className="h-32 w-full bg-gray-800 rounded-xl flex items-end p-4 gap-2">
                        {/* Fake Bar Chart */}
                        <div className="h-[40%] flex-1 bg-blue-500/40 rounded-t-sm"></div>
                        <div className="h-[60%] flex-1 bg-blue-500/40 rounded-t-sm"></div>
                        <div className="h-[30%] flex-1 bg-blue-500/40 rounded-t-sm"></div>
                        <div className="h-[80%] flex-1 bg-blue-500/40 rounded-t-sm"></div>
                        <div className="h-[100%] flex-1 bg-primary rounded-t-sm"></div>
                      </div>
                    </div>
                  )}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
