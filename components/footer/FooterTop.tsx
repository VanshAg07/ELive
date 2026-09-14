"use client";

import { motion } from "framer-motion";
import { NAV_COLUMNS, SOCIAL_LINKS } from "./footer-data";
import PaymentIcons from "./PaymentIcons";
import { FacebookIcon, InstagramIcon, LinkedInIcon } from "./SocialIcons";

const SOCIAL_ICONS = {
  linkedin: LinkedInIcon,
  instagram: InstagramIcon,
  facebook: FacebookIcon,
} as const;

export default function FooterTop() {
  return (
    <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between lg:gap-12">
      <div className="shrink-0">
        <p className="font-mono text-[9px] font-bold tracking-[0.28em] text-slate-meta uppercase">
          Socials
        </p>
        <div className="mt-3.5 flex items-center gap-2.5">
          {SOCIAL_LINKS.map((social) => {
            const Icon = SOCIAL_ICONS[social.id];
            return (
              <motion.a
                key={social.id}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                aria-label={social.label}
                whileHover={{ scale: 1.06 }}
                whileTap={{ scale: 0.96 }}
                className="flex size-10 items-center justify-center rounded-full border border-slate-200 bg-white text-[#0f172a] transition-colors duration-200 hover:border-slate-400 hover:bg-slate-50"
              >
                <Icon size={15} />
              </motion.a>
            );
          })}
        </div>
      </div>

      <nav aria-label="Footer" className="min-w-0 flex-1 lg:max-w-[640px]">
        <p className="font-mono text-[9px] font-bold tracking-[0.28em] text-slate-meta uppercase">
          Company
        </p>
        <div className="mt-3.5 grid grid-cols-2 gap-x-12 gap-y-2.5 sm:grid-cols-3 sm:gap-x-16">
          {NAV_COLUMNS.map((column) => (
            <ul key={column.id} className="flex flex-col gap-2.5">
              {column.links.map((link) => (
                <li key={link.label}>
                  <motion.a
                    href={link.href}
                    whileHover={{ x: 2 }}
                    className={`inline-block font-sans text-[15px] leading-none font-medium tracking-[-0.01em] transition-colors duration-200 ${
                      "active" in link && link.active
                        ? "text-electric"
                        : "text-[#0f172a] hover:text-electric"
                    }`}
                  >
                    {link.label}
                  </motion.a>
                </li>
              ))}
            </ul>
          ))}
        </div>
      </nav>

      <div className="w-full shrink-0 lg:w-[260px]">
        <p className="font-mono text-[9px] font-bold tracking-[0.28em] text-slate-meta uppercase">
          Secure Payments
        </p>
        <p className="mt-3 max-w-[240px] text-[13px] leading-5 font-medium text-slate-meta">
          Payments secured via PCI-DSS compliant gateway.
          <br />
          Card details are not stored.
        </p>
        <div className="mt-4">
          <PaymentIcons />
        </div>
      </div>
    </div>
  );
}
