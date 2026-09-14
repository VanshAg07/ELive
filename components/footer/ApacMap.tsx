"use client";

import Image from "next/image";
import { MAP_MARKERS } from "./footer-data";

export default function ApacMap() {
  return (
    <div className="relative mx-auto w-full max-w-[420px] lg:mx-0 lg:ml-auto">
      <Image
        src="/footer/world-map.png"
        alt="Dotted world map highlighting United Carriers APAC operating points"
        width={624}
        height={306}
        className="h-auto w-full object-contain opacity-[0.34]"
      />
      {MAP_MARKERS.map((marker) => (
        <span
          key={marker.id}
          className={`absolute size-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full ${
            marker.tone === "accent"
              ? "bg-electric shadow-[0_0_0_3px_rgba(37,99,235,0.18)]"
              : "bg-slate-400/70"
          }`}
          style={{ left: marker.x, top: marker.y }}
        />
      ))}
    </div>
  );
}
