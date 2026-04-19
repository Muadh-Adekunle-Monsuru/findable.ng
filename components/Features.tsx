"use client";

import { motion } from "framer-motion";
import { Search, MapPin, MessageSquare, Star } from "lucide-react";

export default function Features() {
  return (
    <section id="features" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16 flex flex-col items-center justify-center">
          <h2 className="text-3xl md:text-6xl font-bold text-gray-900 mb-4 tracking-tight">
            The difference is{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">
              visibility.
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-lg text-center">
            Turn every Google search in your neighborhood into an opportunity.
            We build your local presence so customers choose you over the
            competition.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 relative">
          <div className="absolute inset-0 bg-primary/5 blur-3xl rounded-[100px] z-0 pointer-events-none"></div>

          <motion.div
            whileHover={{ y: -5 }}
            className="bg-card p-8 md:p-10 rounded-3xl border border-gray-200 transition-all z-10 relative overflow-hidden group"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-blue-300 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="h-14 w-14 bg-white rounded-2xl flex items-center justify-center shadow-sm mb-6 border border-gray-100 group-hover:scale-110 transition-transform">
              <Search className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">
              Stand Out Locally
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Take charge of your first impression. We optimize your profile so
              your business appears right at the top when locals search for your
              services.
            </p>
          </motion.div>

          <motion.div
            whileHover={{ y: -5 }}
            className="bg-card p-8 md:p-10 rounded-3xl border border-gray-200 transition-all z-10 relative overflow-hidden group"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-blue-300 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="h-14 w-14 bg-white rounded-2xl flex items-center justify-center shadow-sm mb-6 border border-gray-100 group-hover:scale-110 transition-transform">
              <MapPin className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">
              Drive Foot Traffic
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Make it incredibly easy for customers to find your exact location
              with accurate, verified pin placements and updated opening hours.
            </p>
          </motion.div>

          <motion.div
            whileHover={{ y: -5 }}
            className="bg-card p-8 md:p-10 rounded-3xl border border-gray-200 transition-all z-10 relative overflow-hidden group"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-blue-300 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="h-14 w-14 bg-white rounded-2xl flex items-center justify-center shadow-sm mb-6 border border-gray-100 group-hover:scale-110 transition-transform">
              <MessageSquare className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">
              Capture Leads
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Let customers call, message, or book directly from search results.
              Remove friction and convert lookers into buyers instantly.
            </p>
          </motion.div>

          <motion.div
            whileHover={{ y: -5 }}
            className="bg-card p-8 md:p-10 rounded-3xl border border-gray-200 transition-all z-10 relative overflow-hidden group"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-blue-300 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="h-14 w-14 bg-white rounded-2xl flex items-center justify-center shadow-sm mb-6 border border-gray-100 group-hover:scale-110 transition-transform">
              <Star className="h-6 w-6 text-primary fill-primary" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">
              Build Trust
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Manage and showcase customer reviews effectively. Authentic
              reviews builds a flawless local online reputation.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
