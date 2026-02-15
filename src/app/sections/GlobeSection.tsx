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

  return (
    <section
      ref={containerRef}
      className="relative h-[150vh] bg-[#050505] overflow-hidden"
    >
      <motion.div 
        className="sticky top-0 h-screen w-full overflow-hidden"
        style={{ opacity: globeOpacity }}
      >
        <div className="absolute inset-0 flex items-center justify-center">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/global-loop.gif"
            alt="Global Network"
            className="w-full h-full object-contain opacity-80"
            style={{ 
              mixBlendMode: "screen",
              filter: "brightness(1.2) contrast(1.1)"
            }}
          />
        </div>

        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/50 to-[#050505]" />

        <motion.div
          className="absolute bottom-16 md:bottom-24 left-0 right-0 text-center px-6"
          style={{ opacity: contentOpacity, y: contentY }}
        >
          <motion.p
            className="text-white/40 text-xs tracking-widest mb-4"
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
