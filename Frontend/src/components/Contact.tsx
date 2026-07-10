"use client";

import { useState, type FormEvent } from "react";
import { MapPin, Phone, Mail, Clock, Send, CircleCheck } from "lucide-react";
import Reveal from "./Reveal";

const infoItems = [
  { icon: MapPin, title: "Location", detail: "Route de Sefrou, Fes, Morocco" },
  { icon: Phone, title: "Phone", detail: "+212 6 00 00 00 00" },
  { icon: Mail, title: "Email", detail: "hello@nextlevelfitness.ma" },
  { icon: Clock, title: "Hours", detail: "Mon – Sun: 5:00 AM – 11:00 PM" },
];

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-28 sm:py-36 bg-ink-soft">
      <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-16">
        <Reveal>
          <p className="text-accent font-semibold tracking-[0.25em] text-xs uppercase mb-4">
            Get In Touch
          </p>
          <h2 className="font-display text-4xl sm:text-5xl text-white">
            Let&apos;s Start Your <span className="text-accent">Journey</span>
          </h2>
          <p className="mt-6 text-neutral-400 text-lg leading-relaxed">
            Have a question or ready to join? Reach out and our team will get
            back to you within 24 hours.
          </p>

          <div className="mt-10 space-y-6">
            {infoItems.map((item) => (
              <div key={item.title} className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-accent/10 text-accent flex items-center justify-center shrink-0">
                  <item.icon size={20} />
                </div>
                <div>
                  <h5 className="text-white font-semibold">{item.title}</h5>
                  <p className="text-neutral-400 text-sm">{item.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          {submitted ? (
            <div className="rounded-3xl border border-accent/30 bg-black/40 p-10 text-center h-full flex flex-col items-center justify-center">
              <CircleCheck className="text-accent" size={48} />
              <h3 className="mt-4 font-display text-2xl text-white">
                Message Sent!
              </h3>
              <p className="mt-2 text-neutral-400">
                Thanks for reaching out — our team will contact you within 24
                hours.
              </p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="rounded-3xl border border-white/10 bg-black/40 p-8 space-y-5"
            >
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm text-neutral-400 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Your name"
                    className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-white placeholder:text-neutral-500 focus:outline-none focus:border-accent"
                  />
                </div>
                <div>
                  <label className="block text-sm text-neutral-400 mb-2">
                    Phone
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="Your phone"
                    className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-white placeholder:text-neutral-500 focus:outline-none focus:border-accent"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm text-neutral-400 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  required
                  placeholder="you@example.com"
                  className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-white placeholder:text-neutral-500 focus:outline-none focus:border-accent"
                />
              </div>
              <div>
                <label className="block text-sm text-neutral-400 mb-2">
                  Interested Program
                </label>
                <select className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-white focus:outline-none focus:border-accent">
                  <option>Strength Training</option>
                  <option>Cardio & HIIT</option>
                  <option>CrossFit</option>
                  <option>Boxing</option>
                  <option>Yoga & Mobility</option>
                  <option>Personal Training</option>
                </select>
              </div>
              <div>
                <label className="block text-sm text-neutral-400 mb-2">
                  Message
                </label>
                <textarea
                  rows={4}
                  placeholder="Tell us about your goals..."
                  className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-white placeholder:text-neutral-500 focus:outline-none focus:border-accent resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-accent px-6 py-4 text-sm font-semibold text-white hover:bg-accent-light transition-colors"
              >
                Send Message <Send size={16} />
              </button>
            </form>
          )}
        </Reveal>
      </div>
    </section>
  );
}
