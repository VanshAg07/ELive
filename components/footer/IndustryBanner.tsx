"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { INDUSTRIES, SERVICES } from "./footer-data";

type BannerTab = "industries" | "services";

const TABS: { id: BannerTab; label: string }[] = [
  { id: "industries", label: "Industries" },
  { id: "services", label: "Services" },
];

export default function IndustryBanner() {
  const [tab, setTab] = useState<BannerTab>("industries");
  const items = tab === "industries" ? INDUSTRIES : SERVICES;
  const loop = [...items, ...items];

  return (
    <div className="min-w-0 lg:pl-[11.75rem]">
      <div className="relative z-10 inline-flex rounded-full border border-slate-200/80 bg-white p-1 shadow-[0_1px_2px_rgba(15,23,42,0.04)]">
        {TABS.map((item) => {
          const selected = tab === item.id;
          return (
            <button
              key={item.id}
              type="button"
              onClick={() => setTab(item.id)}
              className="relative rounded-full px-3.5 py-1.5"
            >
              {selected ? (
                <motion.span
                  layoutId="footer-industry-pill"
                  className="absolute inset-0 rounded-full bg-slate-100"
                  transition={{ type: "spring", stiffness: 420, damping: 32 }}
                />
              ) : null}
              <span
                className={`relative font-mono text-[9px] font-bold tracking-[0.22em] uppercase ${
                  selected ? "text-[#0f172a]" : "text-slate-meta"
                }`}
              >
                {item.label}
              </span>
            </button>
          );
        })}
      </div>

      <div className="group relative mt-5 overflow-hidden">
        <motion.div
          key={tab}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="footer-marquee-track flex w-max items-center gap-5 whitespace-nowrap group-hover:[animation-play-state:paused]"
        >
          {loop.map((item, index) => (
            <a
              key={`${item}-${index}`}
              href={tab === "industries" ? "#industries" : "#services"}
              className="font-display text-[clamp(1.65rem,4.2vw,2.75rem)] leading-none font-semibold tracking-[-0.04em] text-slate-200 transition-colors duration-300 hover:text-slate-400"
            >
              {item}
              <span className="ml-5 text-slate-200">·</span>
            </a>
          ))}
        </motion.div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-linear-to-l from-white to-transparent" />
      </div>
    </div>
  );
}
