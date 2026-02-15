"use client";

import { useState, useEffect } from "react";

interface UseImagePreloaderReturn {
  images: HTMLImageElement[];
  loaded: boolean;
  progress: number;
}

export const useImagePreloader = (
  sequence: string,
  count: number
): UseImagePreloaderReturn => {
  const [images, setImages] = useState<HTMLImageElement[]>([]);
  const [loaded, setLoaded] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let loadedCount = 0;
    const loadedImages: HTMLImageElement[] = [];

    const loadImage = (index: number): Promise<void> => {
      return new Promise((resolve) => {
        const img = new Image();
        const frameNumber = (index + 1).toString().padStart(3, "0");
        img.src = `/sequence-${sequence}/ezgif-frame-${frameNumber}.jpg`;
        
        img.onload = () => {
          loadedCount++;
          setProgress((loadedCount / count) * 100);
          resolve();
        };
        
        img.onerror = () => {
          loadedCount++;
          setProgress((loadedCount / count) * 100);
          resolve();
        };
        
        loadedImages[index] = img;
      });
    };

    const loadAllImages = async () => {
      const promises = Array.from({ length: count }, (_, i) => loadImage(i));
      await Promise.all(promises);
      setImages(loadedImages);
      setLoaded(true);
    };

    loadAllImages();
  }, [sequence, count]);

  return { images, loaded, progress };
};
