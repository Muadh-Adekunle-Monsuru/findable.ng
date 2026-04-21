import Link from "next/link";

export default function NewPricing() {
  const whatsappNumber = "2349132250201"; // Ensure there is no '+' symbol
  const message =
    "Hello Findable.ng team! 👋 I'm interested in the Basic Plan to get my business set up and verified on Google Maps. Can we discuss the next steps?";
  const encodedMessage = encodeURIComponent(message);

  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

  const proMessage =
    "Hello Findable.ng team! 👋 I'm interested in the Pro Plan to get my business set up and verified on Google Maps. Can we discuss the next steps?";
  const proEncodedMessage = encodeURIComponent(proMessage);

  const proWhatsappUrl = `https://wa.me/${whatsappNumber}?text=${proEncodedMessage}`;

  return (
    <section id="pricing" className="py-24 md:py-32 bg-surface">
      <div className="max-w-7xl mx-auto px-8 text-center mb-20">
        <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
          Transparent Pricing for Growth
        </h2>
        <p className="text-on-surface-variant max-w-2xl mx-auto">
          No hidden fees. Professional SEO services scaled to fit your business
          size.
        </p>
      </div>
      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
        {/* Plan 1 */}
        <div className="bg-surface-container-low p-12 rounded-[2rem] border border-outline-variant/10 flex flex-col">
          <h3 className="text-2xl font-bold mb-2">Setup</h3>
          <p className="text-on-surface-variant mb-8 text-sm">
            One-time foundational audit and optimization
          </p>
          <div className="flex items-baseline gap-2 mb-10">
            <span className="text-4xl font-extrabold">₦5,000</span>
            <span className="text-outline text-sm">One-time</span>
          </div>
          <ul className="space-y-4 mb-12 flex-grow">
            <li className="flex items-center gap-3 text-sm">
              <span
                className="material-symbols-outlined text-primary text-lg"
                data-icon="done"
              >
                done
              </span>{" "}
              Profile Audit &amp; Creation
            </li>
            <li className="flex items-center gap-3 text-sm">
              <span
                className="material-symbols-outlined text-primary text-lg"
                data-icon="done"
              >
                done
              </span>{" "}
              Keyword Research
            </li>
            <li className="flex items-center gap-3 text-sm">
              <span
                className="material-symbols-outlined text-primary text-lg"
                data-icon="done"
              >
                done
              </span>{" "}
              Google Maps Integration
            </li>
          </ul>
          <Link
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-4 flex items-center justify-center rounded-full font-bold border-2 border-primary text-primary hover:bg-primary-container hover:text-white transition-all"
          >
            Choose Setup
          </Link>
        </div>
        {/* Plan 2 */}
        <div className="bg-primary p-12 rounded-[2rem] text-white flex flex-col relative overflow-hidden shadow-2xl shadow-primary/30">
          <div className="absolute top-0 right-0 bg-primary-fixed text-on-primary-fixed px-6 py-2 rounded-bl-2xl font-bold text-xs uppercase tracking-widest font-label">
            Most Popular
          </div>
          <h3 className="text-2xl font-bold mb-2">Growth</h3>
          <p className="text-primary-fixed mb-8 text-sm">
            Ongoing management and dominance
          </p>
          <div className="flex items-baseline gap-2 mb-10">
            <span className="text-4xl font-extrabold">₦4,000</span>
            <span className="text-primary-fixed text-sm">/ mo</span>
          </div>
          <ul className="space-y-4 mb-12 flex-grow">
            <li className="flex items-center gap-3 text-sm">
              <span
                className="material-symbols-outlined text-primary-fixed text-lg"
                data-icon="done"
              >
                done
              </span>{" "}
              Weekly Performance Reports
            </li>
            <li className="flex items-center gap-3 text-sm">
              <span
                className="material-symbols-outlined text-primary-fixed text-lg"
                data-icon="done"
              >
                done
              </span>{" "}
              Citation Management
            </li>
            <li className="flex items-center gap-3 text-sm">
              <span
                className="material-symbols-outlined text-primary-fixed text-lg"
                data-icon="done"
              >
                done
              </span>{" "}
              Backlink Building
            </li>
            <li className="flex items-center gap-3 text-sm">
              <span
                className="material-symbols-outlined text-primary-fixed text-lg"
                data-icon="done"
              >
                done
              </span>{" "}
              Priority Support
            </li>
          </ul>
          <Link
            href={proWhatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-4 rounded-full font-bold bg-white text-primary hover:bg-primary-fixed transition-all  flex items-center justify-center "
          >
            Start Growth Plan
          </Link>
        </div>
      </div>
    </section>
  );
}
