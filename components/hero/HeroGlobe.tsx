"use client";

import createGlobe from "cobe";
import { useMotionValue, useSpring } from "framer-motion";
import { useEffect, useRef } from "react";
import { HUBS, ROUTES } from "./locations";

const ARC_COLOR: [number, number, number] = [0.98, 0.42, 0.08];
const MARKER_COLOR: [number, number, number] = [0.97, 0.45, 0.08];
const GLOW_COLOR: [number, number, number] = [0.15, 0.35, 0.95];
const BASE_COLOR: [number, number, number] = [0.72, 0.76, 0.84];

export default function HeroGlobe() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const pointerStartX = useRef<number | null>(null);
  const dragOffset = useRef(0);
  const phiRef = useRef(4.05);
  const autoRotate = useRef(true);
  const rotation = useMotionValue(0);
  const springRotation = useSpring(rotation, {
    mass: 1,
    stiffness: 280,
    damping: 40,
    restDelta: 0.001,
  });

  useEffect(() => {
    const canvas = canvasRef.current;
    const wrapper = wrapperRef.current;
    if (!canvas || !wrapper) return;

    const size = () => ({
      width: wrapper.offsetWidth || 800,
      height: wrapper.offsetHeight || 800,
    });

    let { width, height } = size();

    const globe = createGlobe(canvas, {
      devicePixelRatio: Math.min(window.devicePixelRatio || 2, 2),
      width,
      height,
      phi: phiRef.current,
      theta: -0.36,
      dark: 1,
      diffuse: 1.28,
      mapSamples: 32000,
      mapBrightness: 3.8,
      mapBaseBrightness: 0.028,
      baseColor: BASE_COLOR,
      markerColor: MARKER_COLOR,
      glowColor: GLOW_COLOR,
      scale: 1.16,
      opacity: 0.95,
      offset: [width * 0.1, height * 0.04],
      markerElevation: 0.028,
      arcColor: ARC_COLOR,
      arcWidth: 0.28,
      arcHeight: 0.26,
      markers: HUBS.map((hub) => ({
        id: hub.id,
        location: hub.location,
        size: hub.size ?? 0.04,
      })),
      arcs: ROUTES.map((route) => ({
        id: route.id,
        from: route.from,
        to: route.to,
        color: ARC_COLOR,
      })),
    });

    canvas.style.width = "100%";
    canvas.style.height = "100%";
    canvas.style.opacity = "1";

    const resizeObserver = new ResizeObserver(() => {
      const next = size();
      width = next.width;
      height = next.height;
    });
    resizeObserver.observe(wrapper);

    const labelNodes = HUBS.map((hub) =>
      document.querySelector<HTMLElement>(`.label-${hub.id}`),
    );

    let frame = 0;
    const animate = () => {
      if (autoRotate.current) {
        phiRef.current += 0.00135;
      }
      globe.update({
        phi: phiRef.current + springRotation.get(),
        theta: -0.36,
        width,
        height,
      });
      const root = getComputedStyle(document.documentElement);
      labelNodes.forEach((node, index) => {
        if (!node) return;
        const visible =
          root.getPropertyValue(`--cobe-visible-${HUBS[index].id}`).trim() ===
          "N";
        const rect = node.getBoundingClientRect();
        const onScreen =
          visible &&
          rect.top > 56 &&
          rect.bottom < window.innerHeight - 28 &&
          rect.left > 24 &&
          rect.right < window.innerWidth - 48;
        node.style.opacity = onScreen ? "1" : "0";
      });
      frame = window.requestAnimationFrame(animate);
    };
    frame = window.requestAnimationFrame(animate);

    return () => {
      window.cancelAnimationFrame(frame);
      resizeObserver.disconnect();
      globe.destroy();
    };
  }, [springRotation]);

  return (
    <div className="pointer-events-none absolute inset-0 z-10 overflow-hidden">
      <div className="pointer-events-none absolute top-[4%] right-[-22%] h-[125%] w-[92%] md:w-[78%] lg:w-[72%]">
        <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_28%_34%,rgba(249,115,22,0.55),transparent_42%),radial-gradient(circle_at_70%_76%,rgba(37,99,235,0.72),transparent_46%),radial-gradient(circle_at_55%_55%,rgba(56,189,248,0.18),transparent_58%)] blur-2xl" />
        <div className="absolute inset-[7%] rounded-full bg-[radial-gradient(circle_at_center,transparent_48%,rgba(37,99,235,0.42)_64%,transparent_74%)]" />
        <div
          className="pointer-events-none absolute inset-[4%] rounded-full opacity-80"
          style={{
            background:
              "conic-gradient(from 198deg, transparent 0deg, rgba(249,115,22,0) 8deg, rgba(249,115,22,0.95) 22deg, rgba(251,146,60,0.55) 38deg, transparent 62deg, transparent 360deg)",
            maskImage:
              "radial-gradient(circle, transparent 64%, black 65.2%, black 68.8%, transparent 70%)",
            WebkitMaskImage:
              "radial-gradient(circle, transparent 64%, black 65.2%, black 68.8%, transparent 70%)",
          }}
        />
        <div className="absolute top-[10%] left-[-8%] h-[62%] w-[46%] bg-[radial-gradient(ellipse_at_left,rgba(251,146,60,0.7),transparent_62%)] blur-3xl" />
        <div className="absolute right-[8%] bottom-[6%] h-[48%] w-[42%] bg-[radial-gradient(ellipse_at_center,rgba(37,99,235,0.55),transparent_70%)] blur-3xl" />
      </div>

      <div
        ref={wrapperRef}
        className="absolute top-[-8%] right-[-18%] h-[120%] w-[95%] md:w-[80%] lg:w-[74%]"
      >
        <canvas
          ref={canvasRef}
          className="pointer-events-auto relative z-10 h-full w-full cursor-grab touch-none opacity-0 transition-opacity duration-700 active:cursor-grabbing"
          onPointerDown={(event) => {
            pointerStartX.current = event.clientX;
            dragOffset.current = springRotation.get();
            autoRotate.current = false;
            event.currentTarget.setPointerCapture(event.pointerId);
          }}
          onPointerMove={(event) => {
            if (pointerStartX.current === null) return;
            rotation.set(
              dragOffset.current + (event.clientX - pointerStartX.current) / 220,
            );
          }}
          onPointerUp={(event) => {
            pointerStartX.current = null;
            autoRotate.current = true;
            if (event.currentTarget.hasPointerCapture(event.pointerId)) {
              event.currentTarget.releasePointerCapture(event.pointerId);
            }
          }}
          onPointerCancel={() => {
            pointerStartX.current = null;
            autoRotate.current = true;
          }}
        />
      </div>

      <style>{`${HUBS.map(
        (hub) => `
          .label-${hub.id} {
            position-anchor: --cobe-${hub.id};
          }
        `,
      ).join("")}
          .label-argentina { translate: -18px -16px; }
          .label-chile { translate: -18px 12px; }
      `}</style>

      {HUBS.map((hub) => (
        <span key={hub.id} className={`globe-marker-label label-${hub.id}`}>
          {hub.label}
        </span>
      ))}
    </div>
  );
}
