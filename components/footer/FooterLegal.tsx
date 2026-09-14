"use client";

import { motion } from "framer-motion";
import { LEGAL_LINKS } from "./footer-data";

export default function FooterLegal() {
  return (
    <div className="flex flex-col gap-4 border-t border-slate-200 pt-5 lg:flex-row lg:items-center lg:justify-between lg:gap-6">
      <p className="font-mono text-[9px] font-bold tracking-[0.18em] text-slate-meta uppercase">
        © 2026 United Carriers APAC Pty Ltd. Crafted by{" "}
        <a
          href="https://www.bear.plus/"
          target="_blank"
          rel="noreferrer"
          className="text-[#0f172a] underline decoration-slate-400 underline-offset-2 transition-colors hover:text-electric hover:decoration-electric"
        >
          Bearplus
        </a>
      </p>

      <nav
        aria-label="Legal"
        className="flex flex-wrap items-center gap-x-4 gap-y-2 lg:justify-center"
      >
        {LEGAL_LINKS.map((link) => (
          <motion.a
            key={link.href}
            href={link.href}
            whileHover={{ y: -1 }}
            className="font-mono text-[9px] font-bold tracking-[0.16em] text-slate-meta uppercase transition-colors hover:text-[#0f172a]"
          >
            {link.label}
          </motion.a>
        ))}
        <button
          type="button"
          className="font-mono text-[9px] font-bold tracking-[0.16em] text-slate-meta uppercase transition-colors hover:text-[#0f172a]"
        >
          Cookie Settings
        </button>
      </nav>

      <p className="font-mono text-[9px] font-bold tracking-[0.16em] text-slate-meta uppercase lg:text-right">
        All prices in AUD, inclusive of GST. Powered by Stripe.
      </p>
    </div>
  );
}
