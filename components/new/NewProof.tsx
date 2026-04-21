import { MotionDiv } from "../ui/Motion";
import { fadeUp, fadeIn } from "@/lib/motion";

export default function NewProof() {
  return (
    <section className="bg-surface-container-low py-16">
      <div className="max-w-7xl mx-auto px-8">
        <p className="text-center font-label text-sm font-bold tracking-[0.2em] text-outline uppercase mb-10">
          Trusted by Nigerian businesses
        </p>
        <MotionDiv
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="flex flex-wrap justify-center gap-12 md:gap-24 opacity-20 grayscale hover:grayscale-0 transition-all"
        >
          <div className="text-2xl font-bold tracking-tighter text-on-surface opacity-40">
            LAGOSBIZ
          </div>
          <div className="text-2xl font-bold tracking-tighter text-on-surface opacity-40">
            ABUJATECH
          </div>
          <div className="text-2xl font-bold tracking-tighter text-on-surface opacity-40">
            MAINLAND.NG
          </div>
          <div className="text-2xl font-bold tracking-tighter text-on-surface opacity-40">
            RIVERSHUB
          </div>
          <div className="text-2xl font-bold tracking-tighter text-on-surface opacity-40">
            ENTREPRENEUR.NG
          </div>
        </MotionDiv>
      </div>
    </section>
  );
}
