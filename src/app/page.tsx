"use client";

import { useState } from "react";
import { HeroSection } from "./sections/HeroSection";
import { PlaneMorphSection } from "./sections/PlaneMorphSection";
import { GlobeSection } from "./sections/GlobeSection";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { LoadingScreen } from "@/components/LoadingScreen";
import { useImagePreloader } from "@/hooks/useImagePreloader";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const { progress: progress1 } = useImagePreloader("1", 121);
  const { progress: progress2 } = useImagePreloader("2", 120);

  const totalProgress = (progress1 + progress2) / 2;

  return (
    <>
      {isLoading && (
        <LoadingScreen
          progress={totalProgress}
          onComplete={() => setIsLoading(false)}
        />
      )}
      <Navbar />
      <main className="relative">
        <HeroSection />
        <PlaneMorphSection />
        <GlobeSection />
      </main>
      <Footer />
    </>
  );
}
