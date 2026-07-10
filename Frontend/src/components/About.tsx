import Image from "next/image";
import { CircleCheck } from "lucide-react";
import Reveal from "./Reveal";

const points = [
  "Certified & experienced coaching staff",
  "Modern equipment, cleaned daily",
  "Nutrition guidance included",
  "Flexible plans, no long-term lock-in",
];

export default function About() {
  return (
    <section id="about" className="py-28 sm:py-36 bg-ink-soft">
      <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-16 items-center">
        <Reveal className="relative">
          <div className="relative aspect-[4/5] rounded-3xl overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1000&auto=format&fit=crop"
              alt="Gym training floor"
              fill
              sizes="(max-width: 1024px) 90vw, 40vw"
              className="object-cover"
            />
          </div>
          <div className="hidden sm:block absolute -bottom-10 -right-6 w-48 aspect-[4/5] rounded-2xl overflow-hidden border-4 border-ink-soft shadow-2xl">
            <Image
              src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=600&auto=format&fit=crop"
              alt="Personal trainer coaching"
              fill
              sizes="200px"
              className="object-cover"
            />
          </div>
          <div className="absolute -top-6 -left-6 bg-accent text-white rounded-2xl px-6 py-4 shadow-xl">
            <p className="font-display text-3xl leading-none">8+</p>
            <p className="text-xs mt-1 opacity-90">Years of Excellence</p>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="text-accent font-semibold tracking-[0.25em] text-xs uppercase mb-4">
            Who We Are
          </p>
          <h2 className="font-display text-4xl sm:text-5xl leading-[1.05] text-white">
            Not Just A Gym.
            <br />A <span className="text-accent">Transformation</span> Hub.
          </h2>
          <p className="mt-6 text-neutral-400 text-base sm:text-lg leading-relaxed">
            At Forge Fitness, we combine science-backed training methods with
            genuine human coaching. Whether your goal is fat loss, muscle
            gain or athletic performance, our team builds a plan around your
            life — not the other way around.
          </p>
          <ul className="mt-8 space-y-3">
            {points.map((point) => (
              <li key={point} className="flex items-center gap-3 text-neutral-200">
                <CircleCheck className="text-accent shrink-0" size={20} />
                {point}
              </li>
            ))}
          </ul>
          <a
            href="#contact"
            className="mt-10 inline-flex items-center rounded-full bg-accent px-7 py-3.5 text-sm font-semibold text-white hover:bg-accent-light transition-colors"
          >
            Book A Free Tour
          </a>
        </Reveal>
      </div>
    </section>
  );
}
