"use client";

import { useRef, useEffect } from "react";
import { useTransform, MotionValue } from "framer-motion";

interface ScrollCanvasProps {
  images: HTMLImageElement[];
  scrollProgress: MotionValue<number>;
  className?: string;
}

export const ScrollCanvas = ({
  images,
  scrollProgress,
  className = "",
}: ScrollCanvasProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const frameRef = useRef<number>(0);

  const imageIndex = useTransform(
    scrollProgress,
    [0, 1],
    [0, Math.max(0, images.length - 1)]
  );

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || images.length === 0) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const dpr = window.devicePixelRatio || 1;
    
    const resizeCanvas = () => {
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.scale(dpr, dpr);
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    const unsubscribe = imageIndex.on("change", (latest) => {
      const index = Math.round(latest);
      const img = images[index];
      
      if (img && img.complete) {
        cancelAnimationFrame(frameRef.current);
        frameRef.current = requestAnimationFrame(() => {
          const rect = canvas.getBoundingClientRect();
          ctx.clearRect(0, 0, rect.width, rect.height);
          
          const scale = Math.max(
            rect.width / img.width,
            rect.height / img.height
          );
          const x = (rect.width - img.width * scale) / 2;
          const y = (rect.height - img.height * scale) / 2;
          
          ctx.drawImage(img, x, y, img.width * scale, img.height * scale);
        });
      }
    });

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      unsubscribe();
      cancelAnimationFrame(frameRef.current);
    };
  }, [images, imageIndex]);

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 w-full h-full ${className}`}
      style={{ imageRendering: "crisp-edges" }}
    />
  );
};
