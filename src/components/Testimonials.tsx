"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Quote, Star, ChevronLeft, ChevronRight } from "lucide-react";
import { testimonials } from "@/lib/data";
import Reveal from "./Reveal";

export default function Testimonials() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(id);
  }, []);

  const testimonial = testimonials[index];

  return (
    <section id="testimonials" className="py-28 sm:py-36">
      <div className="mx-auto max-w-3xl px-6">
        <Reveal className="text-center mb-16">
          <p className="text-accent font-semibold tracking-[0.25em] text-xs uppercase mb-4">
            Success Stories
          </p>
          <h2 className="font-display text-4xl sm:text-5xl text-white">
            What Our <span className="text-accent">Members Say</span>
          </h2>
        </Reveal>

        <div className="relative rounded-3xl border border-white/10 bg-ink-soft p-8 sm:p-12 text-center">
          <Quote className="text-accent mx-auto mb-6" size={36} />
          <p className="text-lg sm:text-xl text-neutral-200 leading-relaxed">
            &ldquo;{testimonial.quote}&rdquo;
          </p>

          <div className="mt-8 flex items-center justify-center gap-4">
            <div className="relative w-12 h-12 rounded-full overflow-hidden">
              <Image
                src={testimonial.image}
                alt={testimonial.name}
                fill
                sizes="48px"
                className="object-cover"
              />
            </div>
            <div className="text-left">
              <h5 className="text-white font-semibold">{testimonial.name}</h5>
              <span className="text-sm text-neutral-400">{testimonial.since}</span>
            </div>
          </div>

          <div className="flex justify-center gap-1 mt-4 text-accent">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} size={16} fill="currentColor" />
            ))}
          </div>

          <button
            onClick={() =>
              setIndex((i) => (i - 1 + testimonials.length) % testimonials.length)
            }
            className="hidden sm:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-10 h-10 rounded-full border border-white/10 bg-black items-center justify-center text-white hover:border-accent hover:text-accent transition-colors"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={18} />
          </button>
          <button
            onClick={() => setIndex((i) => (i + 1) % testimonials.length)}
            className="hidden sm:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-10 h-10 rounded-full border border-white/10 bg-black items-center justify-center text-white hover:border-accent hover:text-accent transition-colors"
            aria-label="Next testimonial"
          >
            <ChevronRight size={18} />
          </button>
        </div>

        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((t, i) => (
            <button
              key={t.name}
              onClick={() => setIndex(i)}
              aria-label={`Go to testimonial ${i + 1}`}
              className={`h-2 rounded-full transition-all ${
                i === index ? "w-8 bg-accent" : "w-2 bg-white/20"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
