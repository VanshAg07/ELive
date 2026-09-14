"use client";

import { motion } from "framer-motion";
import { NEWS_ITEMS } from "./locations";

export default function StatusBar() {
  const ticker = [...NEWS_ITEMS, ...NEWS_ITEMS];

  return (
    <motion.div
      initial={{ opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="relative z-30 flex h-8 items-center justify-between gap-6 border-b border-white/5 px-5 font-mono text-[9px] font-bold tracking-[0.22em] text-slate-meta uppercase sm:px-7"
    >
      <div className="relative min-w-0 flex-1 overflow-hidden">
        <div className="news-marquee-track flex w-max gap-16 whitespace-nowrap">
          {ticker.map((item, index) => (
            <span key={`${item}-${index}`} className="text-slate-muted/80">
              {item}
            </span>
          ))}
        </div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-linear-to-l from-void-deep to-transparent" />
      </div>

      <div className="hidden shrink-0 items-center gap-5 text-slate-muted/90 sm:flex">
        <a href="#carbon" className="flex items-center gap-2 transition-colors hover:text-white">
          <span className="size-1 rounded-full bg-sky-glow shadow-[0_0_8px_#38bdf8]" />
          Carbon_Calculator
        </a>
        <a href="#tracking" className="flex items-center gap-2 transition-colors hover:text-white">
          <span className="size-1 rounded-full bg-amber shadow-[0_0_8px_#f97316]" />
          Live Tracking Portal
        </a>
      </div>
    </motion.div>
  );
}
