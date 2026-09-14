"use client";

import { useMemo } from "react";

type Star = {
  id: number;
  left: string;
  top: string;
  size: number;
  opacity: number;
  delay: string;
};

function createStars(count: number): Star[] {
  const stars: Star[] = [];
  for (let i = 0; i < count; i += 1) {
    stars.push({
      id: i,
      left: `${(i * 47.3) % 100}%`,
      top: `${(i * 23.7 + (i % 17) * 4.1) % 100}%`,
      size: i % 9 === 0 ? 2 : 1,
      opacity: 0.12 + ((i * 13) % 40) / 100,
      delay: `${(i % 12) * 0.35}s`,
    });
  }
  return stars;
}

export default function Starfield() {
  const stars = useMemo(() => createStars(160), []);

  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_20%_40%,rgba(15,23,42,0.55),transparent_55%),radial-gradient(ellipse_at_80%_70%,rgba(37,99,235,0.12),transparent_50%),linear-gradient(180deg,#030508_0%,#000000_70%)]" />
      <div className="absolute inset-0 opacity-70 mix-blend-screen [background-image:radial-gradient(1.2px_1.2px_at_18%_22%,rgba(255,255,255,0.35),transparent),radial-gradient(1px_1px_at_42%_68%,rgba(255,255,255,0.22),transparent),radial-gradient(1.4px_1.4px_at_72%_18%,rgba(255,255,255,0.28),transparent),radial-gradient(1px_1px_at_88%_46%,rgba(255,255,255,0.18),transparent),radial-gradient(1px_1px_at_12%_78%,rgba(255,255,255,0.2),transparent)]" />
      {stars.map((star) => (
        <span
          key={star.id}
          className="absolute rounded-full bg-white motion-safe:animate-pulse"
          style={{
            left: star.left,
            top: star.top,
            width: star.size,
            height: star.size,
            opacity: star.opacity,
            animationDelay: star.delay,
            animationDuration: "4.5s",
          }}
        />
      ))}
    </div>
  );
}
