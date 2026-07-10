import Image from "next/image";
import { InstagramIcon, FacebookIcon, LinkedinIcon } from "./SocialIcons";
import { trainers } from "@/lib/data";
import Reveal from "./Reveal";

export default function Trainers() {
  return (
    <section id="trainers" className="py-28 sm:py-36">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-accent font-semibold tracking-[0.25em] text-xs uppercase mb-4">
            Meet The Team
          </p>
          <h2 className="font-display text-4xl sm:text-5xl text-white">
            Coaches Who <span className="text-accent">Push You Further</span>
          </h2>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {trainers.map((trainer, i) => (
            <Reveal
              key={trainer.name}
              delay={(i % 4) * 0.1}
              className="group rounded-2xl overflow-hidden border border-white/10 bg-ink-soft"
            >
              <div className="relative aspect-[3/4]">
                <Image
                  src={trainer.image}
                  alt={trainer.name}
                  fill
                  sizes="(max-width: 1024px) 45vw, 22vw"
                  className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/0 to-black/0" />
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <h3 className="text-white font-semibold text-lg">
                    {trainer.name}
                  </h3>
                  <span className="text-accent text-sm">{trainer.role}</span>
                  <div className="flex gap-3 mt-3">
                    <InstagramIcon size={16} className="text-neutral-300 hover:text-white" />
                    <FacebookIcon size={16} className="text-neutral-300 hover:text-white" />
                    <LinkedinIcon size={16} className="text-neutral-300 hover:text-white" />
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
