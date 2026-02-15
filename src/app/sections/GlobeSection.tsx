"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export const GlobeSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const contentOpacity = useTransform(scrollYProgress, [0.2, 0.4], [0, 1]);
  const contentY = useTransform(scrollYProgress, [0.2, 0.4], [50, 0]);
  const globeOpacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);
  const globeScale = useTransform(scrollYProgress, [0, 0.5], [0.8, 1.1]);

  return (
    <section
      ref={containerRef}
      className="relative h-[200vh] bg-[#050505] overflow-hidden"
    >
      <motion.div 
        className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center"
        style={{ opacity: globeOpacity }}
      >
        {/* Background glow effect */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-[800px] h-[800px] rounded-full bg-gradient-radial from-cyan-900/20 via-transparent to-transparent blur-3xl" />
        </div>

        {/* Globe image */}
        <motion.div 
          className="relative w-full h-full flex items-center justify-center"
          style={{ scale: globeScale }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/global-loop.gif"
            alt="Global Network"
            className="w-full h-full object-cover"
            style={{ 
              filter: "brightness(1.3) contrast(1.2) saturate(1.2)"
            }}
          />
        </motion.div>

        {/* Gradient overlays for depth */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-[#050505] pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#050505]/80 via-transparent to-[#050505]/80 pointer-events-none" />

        {/* Content overlay */}
        <motion.div
          className="absolute bottom-16 md:bottom-24 left-0 right-0 text-center px-6 z-10"
          style={{ opacity: contentOpacity, y: contentY }}
        >
          <motion.p
            className="text-cyan-400/60 text-xs tracking-widest mb-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            GLOBAL PRESENCE
          </motion.p>
          <motion.h2
            className="text-white text-3xl md:text-5xl lg:text-6xl font-light tracking-wide mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            BEYOND BOUNDARIES
          </motion.h2>
          <motion.p
            className="text-white/60 text-sm md:text-base font-light tracking-wider"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            JOIN THE ELITE
          </motion.p>
        </motion.div>
      </motion.div>
    </section>
  );
};
