"use client";

import { motion } from "framer-motion";

export default function Navigation() {
  return (
    <header className="relative z-20 flex items-center justify-between gap-8 px-6 pt-6 sm:px-10 lg:px-12">
      <motion.a
        href="#top"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
        className="font-display text-[15px] font-bold tracking-[0.34em] text-white uppercase sm:text-base"
      >
        UnitedCarriers
      </motion.a>

      <motion.a
        href="#contact"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        className="rounded-full bg-white px-5 py-2 font-display text-[11px] font-semibold tracking-[0.18em] text-black uppercase transition-transform duration-300 hover:scale-[1.03] hover:bg-zinc-100"
      >
        Work With Us
      </motion.a>
    </header>
  );
}
