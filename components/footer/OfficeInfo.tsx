"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { OFFICE_MAPS_URL } from "./footer-data";
import ApacMap from "./ApacMap";

export default function OfficeInfo() {
  return (
    <div className="grid gap-10 lg:grid-cols-[minmax(0,240px)_minmax(0,1fr)_minmax(0,1fr)_minmax(220px,340px)] lg:items-start lg:gap-12">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        className="overflow-hidden bg-slate-100"
      >
        <Image
          src="/footer/warehouse.jpg"
          alt="Freight corridor along an operating United Carriers route"
          width={586}
          height={372}
          className="aspect-[16/10] h-auto w-full object-cover grayscale"
        />
      </motion.div>

      <div className="flex flex-col gap-8">
        <div>
          <p className="font-mono text-[9px] font-bold tracking-[0.28em] text-slate-meta uppercase">
            Head Office
          </p>
          <p className="mt-2.5 max-w-[220px] text-[15px] leading-6 font-medium text-[#0f172a]">
            2A International Square,
            <br />
            Tullamarine VIC 3043, Australia.
          </p>
          <a
            href={OFFICE_MAPS_URL}
            target="_blank"
            rel="noreferrer"
            className="mt-3 inline-flex items-center gap-1.5 text-[13px] font-medium text-[#0f172a] underline decoration-slate-400 underline-offset-[5px] transition-colors hover:text-electric hover:decoration-electric"
          >
            <ArrowRight size={13} strokeWidth={2} />
            Direction on Google
          </a>
        </div>

        <div>
          <p className="font-mono text-[9px] font-bold tracking-[0.28em] text-slate-meta uppercase">
            Operating Across
          </p>
          <p className="mt-2.5 text-[15px] leading-6 font-medium text-[#0f172a]">
            Australia / New Zealand / Hong Kong / China
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-8">
        <div>
          <p className="font-mono text-[9px] font-bold tracking-[0.28em] text-slate-meta uppercase">
            Email
          </p>
          <a
            href="mailto:contact@unitedcarriers.com"
            className="mt-2.5 inline-block text-[15px] leading-6 font-medium text-[#0f172a] transition-colors hover:text-electric"
          >
            contact@unitedcarriers.com
          </a>
        </div>

        <div>
          <p className="font-mono text-[9px] font-bold tracking-[0.28em] text-slate-meta uppercase">
            Hotline
          </p>
          <a
            href="tel:1300000082"
            className="mt-2.5 inline-block text-[15px] leading-6 font-medium text-[#0f172a] transition-colors hover:text-electric"
          >
            1300 000 082
          </a>
        </div>

        <div>
          <p className="font-mono text-[9px] font-bold tracking-[0.28em] text-slate-meta uppercase">
            Office Hours
          </p>
          <p className="mt-2.5 text-[15px] leading-6 font-medium text-[#0f172a]">
            Monday - Friday / 8:30AM - 5PM
          </p>
        </div>
      </div>

      <ApacMap />
    </div>
  );
}
