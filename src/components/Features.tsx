import { features } from "@/lib/data";
import Reveal from "./Reveal";

export default function Features() {
  return (
    <section className="py-24 border-y border-white/10 bg-ink-soft">
      <div className="mx-auto max-w-7xl px-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {features.map((feature, i) => (
          <Reveal key={feature.title} delay={i * 0.08} className="text-center sm:text-left">
            <feature.icon className="text-accent mx-auto sm:mx-0" size={32} />
            <h4 className="font-display text-xl text-white mt-4 tracking-wide">
              {feature.title}
            </h4>
            <p className="mt-2 text-sm text-neutral-400 leading-relaxed">
              {feature.desc}
            </p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
