import Image from "next/image";
import { galleryImages } from "@/lib/data";
import Reveal from "./Reveal";

export default function Gallery() {
  return (
    <section className="py-28 sm:py-36 bg-ink-soft">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-accent font-semibold tracking-[0.25em] text-xs uppercase mb-4">
            Inside The Gym
          </p>
          <h2 className="font-display text-4xl sm:text-5xl text-white">
            Take A <span className="text-accent">Look Around</span>
          </h2>
        </Reveal>
      </div>

      <div className="mx-auto max-w-7xl px-6 grid grid-cols-2 sm:grid-cols-3 gap-4">
        {galleryImages.map((src, i) => (
          <Reveal
            key={src}
            delay={(i % 3) * 0.08}
            className="relative aspect-square rounded-2xl overflow-hidden group"
          >
            <Image
              src={src}
              alt="NextLevel Fitness gym"
              fill
              sizes="(max-width: 640px) 45vw, 30vw"
              className="object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
