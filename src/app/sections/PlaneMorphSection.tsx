"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ScrollCanvas } from "@/components/ScrollCanvas";
import { useImagePreloader } from "@/hooks/useImagePreloader";

const SEQUENCE_COUNT = 121;

export const PlaneMorphSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { images, loaded } = useImagePreloader("1", SEQUENCE_COUNT);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const leftTextOpacity = useTransform(scrollYProgress, [0.1, 0.3], [0, 1]);
  const leftTextX = useTransform(scrollYProgress, [0.1, 0.3], [-50, 0]);
  
  const rightTextOpacity = useTransform(scrollYProgress, [0.2, 0.4], [0, 1]);
  const rightTextX = useTransform(scrollYProgress, [0.2, 0.4], [50, 0]);
  
  const glowOpacity = useTransform(scrollYProgress, [0.3, 0.6], [0, 1]);

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
          className="absolute left-8 md:left-16 top-1/2 -translate-y-1/2 max-w-xs"
          style={{ opacity: leftTextOpacity, x: leftTextX }}
        >
          <p className="text-white/40 text-xs tracking-widest mb-2">01</p>
          <h2 className="text-white text-2xl md:text-4xl font-light tracking-wide mb-4">
            AERODYNAMIC PRECISION
          </h2>
          <p className="text-white/60 text-sm font-light leading-relaxed">
            Advanced composite engineering meets computational fluid dynamics. 
            Every curve optimized for minimal drag and maximum efficiency.
          </p>
        </motion.div>

        <motion.div
          className="absolute right-8 md:right-16 top-1/2 -translate-y-1/2 max-w-xs text-right"
          style={{ opacity: rightTextOpacity, x: rightTextX }}
        >
          <p className="text-white/40 text-xs tracking-widest mb-2">02</p>
          <h2 className="text-white text-2xl md:text-4xl font-light tracking-wide mb-4">
            0.92 MACH
          </h2>
          <p className="text-white/60 text-sm font-light leading-relaxed">
            Cruise at near-supersonic speeds. The J-1 delivers uncompromising 
            performance across transcontinental routes.
          </p>
        </motion.div>

        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-center"
          style={{ opacity: glowOpacity }}
        >
          <p className="text-cyan-400/60 text-xs tracking-widest">
            WIREFRAME VIEW ACTIVE
          </p>
        </motion.div>
      </div>
    </section>
  );
};
