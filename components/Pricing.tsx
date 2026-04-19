import { CheckCircle2 } from "lucide-react";
import Link from "next/link";

export default function Pricing() {
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
    <section id="pricing" className="py-24 bg-card border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 tracking-tight">
            Simple, transparent pricing.
          </h2>
          <p className="text-lg text-gray-600">
            Invest in your online storefront. Choose the plan that fits your
            growth goals.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto items-center">
          {/* Basic Plan */}
          <div className="bg-white rounded-3xl p-8 md:p-10 shadow-sm border border-gray-200">
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Basic Setup
              </h3>
              <p className="text-gray-500 mb-6">
                Perfect for new businesses needing to get on the map.
              </p>
              <div className="flex items-baseline gap-2">
                <span className="text-5xl font-extrabold text-gray-900">
                  ₦5,000
                </span>
                <span className="text-gray-500 font-medium">/ one-time</span>
              </div>
            </div>
            <ul className="space-y-4 mb-8">
              {[
                "Complete Profile Setup",
                "Category & Keyword Optimization",
                "Initial Photo Uploads",
                "Verification Assistance",
                "Basic SEO Integration",
              ].map((feature, i) => (
                <li key={i} className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-gray-400 shrink-0" />
                  <span className="text-gray-700 font-medium">{feature}</span>
                </li>
              ))}
            </ul>
            <Link
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-4 px-5 rounded-xl border-2 border-gray-200 text-gray-700 font-bold hover:border-gray-300 hover:bg-gray-50 transition-all"
            >
              Choose Setup
            </Link>
          </div>

          {/* Pro Plan */}
          <div className="bg-white rounded-3xl p-8 md:p-10 shadow-2xl border-2 border-primary relative transform md:-translate-y-4">
            <div className="absolute top-0 inset-x-0 flex justify-center -translate-y-1/2">
              <span className="bg-primary text-white text-xs font-bold uppercase tracking-wider py-1 px-4 rounded-full">
                Most Popular
              </span>
            </div>
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Pro Management
              </h3>
              <p className="text-gray-500 mb-6">
                For businesses that want to dominate local search.
              </p>
              <div className="flex items-baseline gap-2">
                <span className="text-5xl font-extrabold text-gray-900">
                  ₦4,000
                </span>
                <span className="text-gray-500 font-medium">/ month</span>
              </div>
            </div>
            <ul className="space-y-4 mb-8">
              {[
                "Everything in Basic Setup (Waived fee)",
                "Weekly Promotional Posts",
                "Active Review Management & Responses",
                "Monthly Performance Reports",
                "Continuous Keyword Tweaking",
                "Local Pack Domination Strategy",
              ].map((feature, i) => (
                <li key={i} className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary shrink-0" />
                  <span className="text-gray-800 font-medium">{feature}</span>
                </li>
              ))}
            </ul>
            <Link
              href={proWhatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-4 px-5 rounded-xl bg-primary text-white font-bold hover:bg-primary-hover shadow-lg hover:shadow-xl transition-all"
            >
              Start Dominating
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
