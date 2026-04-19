export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 bg-white relative">
      <div className="max-w-3xl mx-auto px-4 z-10 relative">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 tracking-tight">The path to being found.</h2>
          <p className="text-lg text-gray-600">A clear, foolproof process to get your business on the map in days, not weeks.</p>
        </div>

        <div className="relative">
          {/* Vertical line constraint */}
          <div className="absolute left-8 md:left-24 top-10 bottom-10 w-0.5 bg-gray-100"></div>

          <div className="space-y-16">
            {/* Step 1 */}
            <div className="relative flex items-start gap-6 md:gap-12 group">
              <div className="h-16 w-16 rounded-full bg-blue-50 border-4 border-white shadow-sm flex items-center justify-center shrink-0 z-10 group-hover:bg-primary transition-colors duration-300">
                <span className="text-xl font-bold text-primary group-hover:text-white transition-colors duration-300">1</span>
              </div>
              <div className="pt-3">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Submit your details</h3>
                <p className="text-gray-600 text-lg leading-relaxed">Fill out our quick digital intake form with your business info, address, category, and what makes you unique. It takes just 5 minutes.</p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="relative flex items-start gap-6 md:gap-12 group">
              <div className="h-16 w-16 rounded-full bg-blue-50 border-4 border-white shadow-sm flex items-center justify-center shrink-0 z-10 group-hover:bg-primary transition-colors duration-300">
                <span className="text-xl font-bold text-primary group-hover:text-white transition-colors duration-300">2</span>
              </div>
              <div className="pt-3">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">We build & verify</h3>
                <p className="text-gray-600 text-lg leading-relaxed">We optimize your entire Google Business Profile profile and handle the complex verification process on-site, saving you weeks of waiting.</p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="relative flex items-start gap-6 md:gap-12 group">
              <div className="h-16 w-16 rounded-full bg-blue-50 border-4 border-white shadow-sm flex items-center justify-center shrink-0 z-10 group-hover:bg-primary transition-colors duration-300">
                <span className="text-xl font-bold text-primary group-hover:text-white transition-colors duration-300">3</span>
              </div>
              <div className="pt-3">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">You get found</h3>
                <p className="text-gray-600 text-lg leading-relaxed">Watch your local interactions, phone calls, and customer inquiries grow as we continually manage and boost your search ranking.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
