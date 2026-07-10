const words = ["STRENGTH", "ENDURANCE", "DISCIPLINE", "RESULTS"];

export default function Marquee() {
  const items = [...words, ...words];

  return (
    <div className="bg-accent overflow-hidden py-4 border-y border-black/10">
      <div className="flex whitespace-nowrap animate-marquee w-max">
        {[...items, ...items].map((word, i) => (
          <span
            key={i}
            className="mx-4 font-display text-2xl sm:text-3xl text-black tracking-wider flex items-center gap-4"
          >
            {word}
            <span className="text-white/70">•</span>
          </span>
        ))}
      </div>
    </div>
  );
}
