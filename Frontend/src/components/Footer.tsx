"use client";

import { Send } from "lucide-react";
import { InstagramIcon, FacebookIcon } from "./SocialIcons";

const quickLinks = [
  { label: "About Us", href: "#about" },
  { label: "Programs", href: "#programs" },
  { label: "Trainers", href: "#trainers" },
  { label: "Pricing", href: "#pricing" },
];

const programLinks = [
  { label: "Strength Training", href: "#programs" },
  { label: "CrossFit", href: "#programs" },
  { label: "Boxing", href: "#programs" },
  { label: "Yoga & Mobility", href: "#programs" },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/10 pt-20 pb-8">
      <div className="mx-auto max-w-7xl px-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-12">
        <div>
          <a href="#home" className="font-display text-3xl text-white">
            FORGE<span className="text-accent">.</span>
          </a>
          <p className="mt-4 text-neutral-400 text-sm leading-relaxed max-w-xs">
            Premium strength & conditioning gym in Fes. Real coaching, real
            results.
          </p>
          <div className="flex gap-3 mt-6">
            <a
              href="#"
              className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-neutral-400 hover:text-white hover:border-accent transition-colors"
            >
              <InstagramIcon size={16} />
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-neutral-400 hover:text-white hover:border-accent transition-colors"
            >
              <FacebookIcon size={16} />
            </a>
          </div>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-5">Quick Links</h4>
          <ul className="space-y-3">
            {quickLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="text-neutral-400 text-sm hover:text-accent transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-5">Programs</h4>
          <ul className="space-y-3">
            {programLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="text-neutral-400 text-sm hover:text-accent transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-5">Newsletter</h4>
          <p className="text-neutral-400 text-sm mb-4">
            Subscribe for tips, offers & updates.
          </p>
          <form
            onSubmit={(e) => e.preventDefault()}
            className="flex items-center gap-2"
          >
            <input
              type="email"
              placeholder="Your email"
              className="flex-1 min-w-0 rounded-full bg-white/5 border border-white/10 px-4 py-2.5 text-sm text-white placeholder:text-neutral-500 focus:outline-none focus:border-accent"
            />
            <button
              type="submit"
              aria-label="Subscribe"
              className="shrink-0 w-10 h-10 rounded-full bg-accent flex items-center justify-center text-white hover:bg-accent-light transition-colors"
            >
              <Send size={16} />
            </button>
          </form>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-neutral-500">
        <p>&copy; 2026 Forge Fitness. All rights reserved.</p>
        <p>
          Designed & built by{" "}
          <a
            href="https://falber.agency"
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-300 hover:text-accent transition-colors"
          >
            Falber Agency
          </a>
        </p>
      </div>
    </footer>
  );
}
