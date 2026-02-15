"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ScrollCanvas } from "@/components/ScrollCanvas";
import { useImagePreloader } from "@/hooks/useImagePreloader";

const SEQUENCE_COUNT = 120;

export const HeroSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { images, loaded } = useImagePreloader("2", SEQUENCE_COUNT);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const titleOpacity = useTransform(scrollYProgress, [0, 0.15], [1, 0]);
  const titleY = useTransform(scrollYProgress, [0, 0.15], [0, -50]);
  
  const subtitleOpacity = useTransform(scrollYProgress, [0.05, 0.2], [1, 0]);
  const subtitleY = useTransform(scrollYProgress, [0.05, 0.2], [0, -30]);

  return (
    <section
      ref={containerRef}
      className="relative h-[400vh] bg-[#050505]"
    >
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        {loaded && images.length > 0 && (
          <ScrollCanvas
            images={images}
            scrollProgress={scrollYProgress}
          />
        )}

        <motion.div
          className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none"
          style={{ opacity: titleOpacity, y: titleY }}
        >
          <motion.h1
            className="text-white text-5xl md:text-7xl lg:text-9xl font-light tracking-luxury text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            JESKO JETS
          </motion.h1>
        </motion.div>

        <motion.div
          className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none pt-32"
          style={{ opacity: subtitleOpacity, y: subtitleY }}
        >
          <motion.p
            className="text-white/60 text-sm md:text-base tracking-widest font-light text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            THE NEW STANDARD OF PRIVATE AVIATION
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};
