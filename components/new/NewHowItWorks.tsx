import { MotionDiv } from "../ui/Motion";
import { fadeUp } from "@/lib/motion";
export default function NewHowItWorks() {
  return (
    <MotionDiv
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="py-24 md:py-32 bg-surface"
    >
      <div className="max-w-7xl mx-auto px-8 text-center mb-20">
        <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
          Simplified growth for your brand
        </h2>
        <p className="text-on-surface-variant max-w-2xl mx-auto">
          Our proven 3-step strategy removes the complexity from SEO, delivering
          results you can see and measure.
        </p>
      </div>
      <div className="max-w-7xl mx-auto px-8 grid md:grid-cols-3 gap-8">
        {/* Step 1 */}
        <MotionDiv
          key={1}
          variants={fadeUp}
          className="group relative p-10 rounded-3xl bg-surface-container-low hover:bg-surface-container-lowest transition-all duration-300"
        >
          <div className="w-16 h-16 bg-primary-container rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
            <span
              className="material-symbols-outlined text-on-primary-container text-3xl"
              data-icon="account_circle"
            >
              account_circle
            </span>
          </div>
          <h3 className="text-2xl font-bold mb-4">Setup Profile</h3>
          <p className="text-on-surface-variant leading-relaxed">
            We audit your digital presence and create a high-performance
            business profile optimized for Nigerian search intent.
          </p>
          <div className="absolute top-8 right-8 text-5xl font-black text-outline/5 select-none">
            01
          </div>
        </MotionDiv>
        {/* Step 2 */}
        <MotionDiv
          key={2}
          variants={fadeUp}
          className="group relative p-10 rounded-3xl bg-surface-container-low hover:bg-surface-container-lowest transition-all duration-300"
        >
          <div className="w-16 h-16 bg-primary-container rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
            <span
              className="material-symbols-outlined text-on-primary-container text-3xl"
              data-icon="verified"
              data-weight="fill"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              verified
            </span>
          </div>
          <h3 className="text-2xl font-bold mb-4">Verify &amp; Rank</h3>
          <p className="text-on-surface-variant leading-relaxed">
            Our experts handle verification and technical optimization to propel
            your business to the first page of results.
          </p>
          <div className="absolute top-8 right-8 text-5xl font-black text-outline/5 select-none">
            02
          </div>
        </MotionDiv>
        {/* Step 3 */}
        <MotionDiv
          key={3}
          variants={fadeUp}
          className="group relative p-10 rounded-3xl bg-surface-container-low hover:bg-surface-container-lowest transition-all duration-300"
        >
          <div className="w-16 h-16 bg-primary-container rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
            <span
              className="material-symbols-outlined text-on-primary-container text-3xl"
              data-icon="insights"
            >
              insights
            </span>
          </div>
          <h3 className="text-2xl font-bold mb-4">Grow Visibility</h3>
          <p className="text-on-surface-variant leading-relaxed">
            Continuous monitoring and optimization ensure you stay ahead of
            competitors and capture local market share.
          </p>
          <div className="absolute top-8 right-8 text-5xl font-black text-outline/5 select-none">
            03
          </div>
        </MotionDiv>
      </div>
    </MotionDiv>
  );
}
