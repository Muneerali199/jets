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

  return (
    <section
      ref={containerRef}
      className="relative h-screen bg-[#050505] overflow-hidden"
    >
      <div className="absolute inset-0 flex items-center justify-center">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-60"
          style={{ mixBlendMode: "screen" }}
        >
          <source src="/global-loop.gif" type="image/gif" />
          <img
            src="/global-loop.gif"
            alt="Global Network"
            className="w-full h-full object-cover"
          />
        </video>
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-[#050505]" />

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
    </section>
  );
};
