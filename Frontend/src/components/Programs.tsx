import { ArrowRight } from "lucide-react";
import { programs } from "@/lib/data";
import Reveal from "./Reveal";

export default function Programs() {
  return (
    <section id="programs" className="py-28 sm:py-36">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-accent font-semibold tracking-[0.25em] text-xs uppercase mb-4">
            What We Offer
          </p>
          <h2 className="font-display text-4xl sm:text-5xl text-white">
            Programs Built Around <span className="text-accent">Your Goal</span>
          </h2>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {programs.map((program, i) => (
            <Reveal
              key={program.title}
              delay={(i % 3) * 0.1}
              className="group rounded-2xl border border-white/10 bg-ink-soft p-8 hover:border-accent/50 transition-colors"
            >
              <div className="w-14 h-14 rounded-xl bg-accent/10 text-accent flex items-center justify-center mb-6 group-hover:bg-accent group-hover:text-white transition-colors">
                <program.icon size={26} />
              </div>
              <h3 className="font-display text-2xl text-white tracking-wide">
                {program.title}
              </h3>
              <p className="mt-3 text-neutral-400 leading-relaxed">
                {program.desc}
              </p>
              <a
                href="#contact"
                className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-accent"
              >
                Learn more <ArrowRight size={16} />
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
