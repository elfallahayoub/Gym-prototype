import { ArrowRight, Play } from "lucide-react";
import Image from "next/image";
import Counter from "./Counter";
import { stats } from "@/lib/data";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative isolate min-h-screen flex flex-col justify-center overflow-hidden pt-32 pb-24"
    >
      <div className="absolute inset-0 -z-20">
        <Image
          src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1920&auto=format&fit=crop"
          alt="Gym training floor"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </div>
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-black/80 via-black/70 to-black" />
      <div className="absolute inset-0 -z-10 bg-noise mix-blend-overlay opacity-40" />

      <div className="mx-auto max-w-7xl px-6 w-full">
        <p className="text-accent font-semibold tracking-[0.3em] text-xs sm:text-sm uppercase mb-6">
          Fes, Morocco — Open 7 Days a Week
        </p>
        <h1 className="font-display leading-[0.9] text-white text-[15vw] sm:text-7xl md:text-8xl lg:text-[7.5rem] tracking-wide">
          FORGE YOUR
          <br />
          <span className="text-stroke">STRONGEST</span> SELF
        </h1>
        <p className="mt-8 max-w-xl text-neutral-300 text-base sm:text-lg">
          Premium equipment. Expert coaches. Personalized programs built to
          get you real results — not just a membership card.
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-4">
          <a
            href="#pricing"
            className="inline-flex items-center gap-2 rounded-full bg-accent px-7 py-3.5 text-sm font-semibold text-white hover:bg-accent-light transition-colors"
          >
            Start Free Trial <ArrowRight size={18} />
          </a>
          <a
            href="#programs"
            className="inline-flex items-center gap-2 rounded-full border border-white/20 px-7 py-3.5 text-sm font-semibold text-white hover:bg-white/10 transition-colors"
          >
            <Play size={16} /> Explore Programs
          </a>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 w-full mt-20 grid grid-cols-2 sm:grid-cols-4 gap-8 border-t border-white/10 pt-10">
        {stats.map((stat) => (
          <div key={stat.label}>
            <div className="font-display text-4xl sm:text-5xl text-white">
              <Counter value={stat.value} suffix={stat.suffix} />
            </div>
            <p className="mt-1 text-xs sm:text-sm text-neutral-400">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
