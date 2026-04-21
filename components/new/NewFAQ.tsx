import { MotionDiv } from "../ui/Motion";
import { fadeUp, stagger } from "@/lib/motion";

export default function NewFAQ() {
  return (
    <section className="py-24 bg-surface-container-low">
      <MotionDiv
        variants={stagger}
        initial="hidden"
        animate="visible"
        className="max-w-4xl mx-auto px-8"
      >
        <h2 className="text-4xl font-extrabold tracking-tight mb-16 text-center">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          <MotionDiv
            variants={fadeUp}
            className="bg-surface-container-lowest p-8 rounded-2xl"
          >
            <div className="flex justify-between items-center cursor-pointer">
              <h4 className="font-bold text-lg">
                How long until I see results on Google?
              </h4>
              <span
                className="material-symbols-outlined text-outline"
                data-icon="expand_more"
              >
                expand_more
              </span>
            </div>
            <p className="mt-4 text-on-surface-variant  leading-relaxed">
              While SEO is a long-term game, our clients typically start seeing
              movement in rankings within the first 30-45 days after the initial
              setup phase is complete.
            </p>
          </MotionDiv>
          <MotionDiv
            variants={fadeUp}
            className="bg-surface-container-lowest p-8 rounded-2xl"
          >
            <div className="flex justify-between items-center cursor-pointer">
              <h4 className="font-bold text-lg">
                Is this service only for Lagos businesses?
              </h4>
              <span
                className="material-symbols-outlined text-outline"
                data-icon="expand_more"
              >
                expand_more
              </span>
            </div>
            <p className="mt-4 text-on-surface-variant  leading-relaxed">
              No, we serve businesses across all 36 states in Nigeria. Whether
              you're in Port Harcourt, Abuja, or Kano, our local SEO strategies
              work nationwide.
            </p>
          </MotionDiv>
          <MotionDiv
            variants={fadeUp}
            className="bg-surface-container-lowest p-8 rounded-2xl"
          >
            <div className="flex justify-between items-center cursor-pointer">
              <h4 className="font-bold text-lg">
                What if I already have a Google Business Profile?
              </h4>
              <span
                className="material-symbols-outlined text-outline"
                data-icon="expand_more"
              >
                expand_more
              </span>
            </div>
            <p className="mt-4 text-on-surface-variant leading-relaxed">
              Perfect. We will perform a deep audit of your existing profile,
              optimize it for maximum reach, and fix any technical errors that
              might be holding you back.
            </p>
          </MotionDiv>
        </div>
      </MotionDiv>
    </section>
  );
}
