"use client";

import { useEffect, useState } from "react";
import ParticleText from "@/components/originkit/ui/pixeldrift-custom-style";

export default function FooterPixelDrift() {
  const [fontsReady, setFontsReady] = useState(false);

  useEffect(() => {
    let active = true;
    const ready =
      typeof document !== "undefined" && document.fonts
        ? document.fonts.ready
        : Promise.resolve();
    ready.then(() => {
      if (active) setFontsReady(true);
    });
    return () => {
      active = false;
    };
  }, []);

  return (
    <div
      className="relative -mx-5 h-[132px] overflow-hidden sm:-mx-8 sm:h-[168px] lg:-mx-12 lg:h-[210px] xl:-mx-16 xl:h-[236px]"
      aria-label="United Carriers"
    >
      {fontsReady ? (
        <ParticleText
          text="UNITED CARRIERS"
          colors={["#8b939c"]}
          mode="onEnter"
          replay={false}
          position="middle"
          particleCount={36}
          particleSize={16}
          fontSize={260}
          autoFit
          mouseEnabled
          mouseForce={26}
          mouseRadius={90}
          transition={{ type: "tween", duration: 0.85, ease: "easeOut" }}
          style={{
            minWidth: 0,
            minHeight: 0,
            width: "100%",
            height: "100%",
            cursor: "crosshair",
          }}
        />
      ) : (
        <div className="h-full w-full" />
      )}
    </div>
  );
}
