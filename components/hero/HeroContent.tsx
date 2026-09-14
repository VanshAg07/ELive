"use client";

import { motion } from "framer-motion";
import { NAV_LINKS } from "./locations";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export default function HeroContent() {
  return (
    <div className="relative z-20 flex min-h-0 flex-1 flex-col px-6 pt-8 sm:px-10 lg:ml-[22%] lg:w-[54%] lg:px-0 lg:pt-2">
      <nav className="hidden flex-col gap-2.5 md:flex">
        {NAV_LINKS.map((link, index) => (
          <motion.a
            key={link.href}
            href={link.href}
            initial={{ opacity: 0, x: -12 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.45,
              delay: 0.22 + index * 0.05,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="w-fit font-display text-[11px] font-medium tracking-[0.28em] text-white/78 uppercase transition-all duration-300 hover:translate-x-1.5 hover:text-white hover:drop-shadow-[0_0_12px_rgba(56,189,248,0.55)]"
          >
            {link.label}
          </motion.a>
        ))}
      </nav>

      <motion.div
        initial="hidden"
        animate="show"
        variants={{
          hidden: {},
          show: { transition: { staggerChildren: 0.12, delayChildren: 0.35 } },
        }}
        className="mt-auto mb-16 sm:mb-20 lg:mt-[18vh] lg:mb-auto lg:pb-8"
      >
        <motion.p
          variants={fadeUp}
          className="font-display text-[13px] font-semibold tracking-[0.32em] text-white uppercase sm:text-sm"
        >
          One Operator
        </motion.p>

        <motion.h1
          variants={fadeUp}
          className="mt-4 font-display text-[clamp(2.85rem,6.6vw,6.85rem)] leading-[0.84] font-bold tracking-[-0.045em] text-white uppercase"
        >
          <span className="block whitespace-nowrap">Every</span>
          <span className="block whitespace-nowrap">Leg of the</span>
          <span className="block whitespace-nowrap">Journey</span>
        </motion.h1>

        <motion.p
          variants={fadeUp}
          className="mt-7 max-w-88 text-[13px] leading-6 text-slate-muted sm:text-sm"
        >
          Freight forwarding, land transport, and customs brokerage, unified
          across APAC under one accountable team.
        </motion.p>

        <motion.div variants={fadeUp} className="mt-9 flex flex-wrap items-center gap-3">
          <a
            href="#contact"
            className="rounded-full bg-white px-6 py-2.5 font-display text-[11px] font-semibold tracking-[0.18em] text-black uppercase transition-transform duration-300 hover:scale-[1.03] hover:bg-zinc-100"
          >
            Talk With Us
          </a>
          <a
            href="#services"
            className="rounded-full border border-white/25 px-6 py-2.5 font-display text-[11px] font-semibold tracking-[0.18em] text-white uppercase transition-colors duration-300 hover:border-white/60 hover:bg-white/5"
          >
            Our Services
          </a>
        </motion.div>
      </motion.div>
    </div>
  );
}
