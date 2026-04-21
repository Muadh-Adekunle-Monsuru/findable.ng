import React from "react";

export default function NewTimeLine() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center">
          Get visible in days, not weeks
        </h2>

        <div className="mt-10 space-y-6">
          {[
            "Submit your details",
            "We set up your profile",
            "You start getting calls",
          ].map((step, i) => (
            <div key={i} className="flex items-center gap-4">
              <div className="w-8 h-8 flex items-center justify-center bg-black text-white rounded-full">
                {i + 1}
              </div>
              <p>{step}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
