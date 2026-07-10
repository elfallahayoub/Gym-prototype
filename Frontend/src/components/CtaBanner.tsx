import Reveal from "./Reveal";

export default function CtaBanner() {
  return (
    <section className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-accent" />
      <div className="absolute inset-0 bg-noise mix-blend-overlay opacity-30" />
      <Reveal className="relative mx-auto max-w-3xl px-6 text-center">
        <h2 className="font-display text-4xl sm:text-6xl text-white leading-tight">
          Ready To Start Your Transformation?
        </h2>
        <p className="mt-6 text-white/85 text-lg">
          Book a free tour and first session on us — no commitment, no pressure.
        </p>
        <a
          href="#contact"
          className="mt-10 inline-flex items-center rounded-full bg-black px-8 py-4 text-sm font-semibold text-white hover:bg-neutral-900 transition-colors"
        >
          Claim Your Free Session
        </a>
      </Reveal>
    </section>
  );
}
