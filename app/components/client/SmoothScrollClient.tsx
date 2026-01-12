"use client";

import { ReactNode, useEffect, useState } from 'react';

export function SmoothScrollClient({ children }: { children: ReactNode }) {
  const [shouldLoad, setShouldLoad] = useState(false);

  useEffect(() => {
    // Defer loading until after initial render and page is interactive
    // This prevents Lenis from blocking the main thread during LCP
    const timer = setTimeout(() => {
      setShouldLoad(true);
    }, 2000); // Wait 2 seconds after page load

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!shouldLoad) return;

    let lenisInstance: any = null;
    let rafId: number | null = null;

    // Dynamically import Lenis only when needed
    import('lenis').then(({ default: Lenis }) => {
      const prefersReduced = typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-reduced-motion)').matches;
      lenisInstance = new Lenis({
        smoothWheel: !prefersReduced,
        syncTouch: false,
        lerp: 0.12,
      });

      function raf(time: number) {
        if (lenisInstance) {
          lenisInstance.raf(time);
          rafId = requestAnimationFrame(raf);
        }
      }

      rafId = requestAnimationFrame(raf);
    });

    return () => {
      if (rafId !== null) {
        cancelAnimationFrame(rafId);
      }
      if (lenisInstance) {
        lenisInstance.destroy();
      }
    };
  }, [shouldLoad]);

  return <>{children}</>;
}

