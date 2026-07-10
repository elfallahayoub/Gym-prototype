import { Check, X } from "lucide-react";
import { pricingPlans } from "@/lib/data";
import Reveal from "./Reveal";

export default function Pricing() {
  return (
    <section id="pricing" className="py-28 sm:py-36 bg-ink-soft">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-accent font-semibold tracking-[0.25em] text-xs uppercase mb-4">
            Membership
          </p>
          <h2 className="font-display text-4xl sm:text-5xl text-white">
            Simple, Honest <span className="text-accent">Pricing</span>
          </h2>
        </Reveal>

        <div className="grid lg:grid-cols-3 gap-8">
          {pricingPlans.map((plan, i) => (
            <Reveal
              key={plan.name}
              delay={i * 0.1}
              className={`relative rounded-3xl p-8 flex flex-col ${
                plan.featured
                  ? "bg-accent text-white lg:-translate-y-4 shadow-2xl shadow-accent/20"
                  : "bg-black/40 border border-white/10 text-white"
              }`}
            >
              {plan.featured && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-white text-black text-xs font-bold px-4 py-1.5 rounded-full">
                  Most Popular
                </span>
              )}
              <h3 className="font-display text-2xl tracking-wide">{plan.name}</h3>
              <div className="mt-4 flex items-baseline gap-1">
                <span className="text-sm opacity-70">MAD</span>
                <span className="font-display text-5xl">{plan.price}</span>
                <span className="text-sm opacity-70">/mo</span>
              </div>
              <p className={`mt-2 text-sm ${plan.featured ? "text-white/80" : "text-neutral-400"}`}>
                {plan.desc}
              </p>

              <ul className="mt-8 space-y-3 flex-1">
                {plan.included.map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm">
                    <Check size={16} className={plan.featured ? "text-white" : "text-accent"} />
                    {item}
                  </li>
                ))}
                {plan.excluded.map((item) => (
                  <li
                    key={item}
                    className={`flex items-center gap-3 text-sm ${
                      plan.featured ? "text-white/50" : "text-neutral-500"
                    }`}
                  >
                    <X size={16} />
                    {item}
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className={`mt-8 inline-flex items-center justify-center rounded-full px-6 py-3.5 text-sm font-semibold transition-colors ${
                  plan.featured
                    ? "bg-white text-black hover:bg-neutral-200"
                    : "border border-white/20 text-white hover:bg-white/10"
                }`}
              >
                Choose Plan
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
