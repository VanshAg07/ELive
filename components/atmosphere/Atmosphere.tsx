"use client";

import { motion } from "framer-motion";

export default function Atmosphere() {
  return (
    <section
      aria-label="Atmospheric horizon"
      className="relative isolate min-h-dvh overflow-hidden bg-[radial-gradient(ellipse_150%_90%_at_50%_125%,#ffffff_0%,#ffffff_16%,#dbeafe_28%,#38bdf8_40%,#2563eb_54%,#1e3a8a_68%,#000000_84%)]"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.86 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="absolute top-[42%] left-[24%] z-10 sm:left-[27%]"
      >
        <span className="absolute top-1/2 left-1/2 size-10.5 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/45" />
        <span className="absolute top-1/2 left-[calc(50%+11px)] size-1.5 -translate-y-1/2 rounded-full bg-[#f5c542] shadow-[0_0_10px_rgba(245,197,66,0.9)]" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{ duration: 0.7, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
        className="absolute top-[43%] left-[52%] z-10 flex items-center gap-2.5"
      >
        <span className="size-1.5 rotate-45 border border-white/30" />
        <span className="font-mono text-[9px] font-bold tracking-[0.32em] text-white/50 uppercase">
          New Zealand
        </span>
      </motion.div>
    </section>
  );
}
