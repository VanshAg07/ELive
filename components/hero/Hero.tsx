"use client";

import { Menu } from "lucide-react";
import { motion } from "framer-motion";
import HeroContent from "./HeroContent";
import HeroGlobe from "./HeroGlobe";
import Navigation from "./Navigation";
import Starfield from "./Starfield";
import StatusBar from "./StatusBar";

export default function Hero() {
  return (
    <section id="top" className="relative isolate min-h-dvh overflow-hidden bg-void-deep text-white">
      <Starfield />
      <HeroGlobe />

      <div className="relative z-20 flex min-h-dvh flex-col">
        <StatusBar />
        <Navigation />
        <HeroContent />
      </div>

      <motion.button
        type="button"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-5 left-5 z-30 flex size-10 items-center justify-center rounded-full border border-white/15 bg-black/60 text-white/80 backdrop-blur-sm transition-colors hover:border-white/40 hover:text-white"
        aria-label="Open menu"
      >
        <Menu size={16} />
      </motion.button>
    </section>
  );
}
