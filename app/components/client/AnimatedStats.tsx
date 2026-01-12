"use client";

import { useEffect, useRef, useState } from 'react';

interface AnimatedStatsProps {
  stats: {
    projectSize: number;
    tokenizedTranche: number;
    expectedYield: number;
    term: number;
  };
}

export function AnimatedStats({ stats }: AnimatedStatsProps) {
  const [animatedStats, setAnimatedStats] = useState({
    projectSize: 0,
    tokenizedTranche: 0,
    expectedYield: 0,
    term: 0
  });
  const statsRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const target = statsRef.current;
    if (!target) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Reset stats to 0 before animating
          setAnimatedStats({
            projectSize: 0,
            tokenizedTranche: 0,
            expectedYield: 0,
            term: 0
          });
          
          // Animate each stat
          const animateValue = (key: keyof typeof animatedStats, endValue: number, duration: number = 2000) => {
            const startTime = Date.now();
            const startValue = 0;
            
            const animate = () => {
              const elapsed = Date.now() - startTime;
              const progress = Math.min(elapsed / duration, 1);
              
              // Easing function for smooth animation
              const easeOutQuart = 1 - Math.pow(1 - progress, 4);
              const currentValue = startValue + (endValue - startValue) * easeOutQuart;
              
              // Use Math.floor for integers, keep decimals for tokenizedTranche and projectSize
              const finalValue = (key === 'tokenizedTranche' || key === 'projectSize') ? Math.round(currentValue * 10) / 10 : Math.floor(currentValue);
              
              setAnimatedStats(prev => ({ ...prev, [key]: finalValue }));
              
              if (progress < 1) {
                requestAnimationFrame(animate);
              }
            };
            
            requestAnimationFrame(animate);
          };

          // Start animations with slight delays
          setTimeout(() => animateValue('projectSize', stats.projectSize, 2500), 100);
          setTimeout(() => animateValue('tokenizedTranche', stats.tokenizedTranche, 2500), 200);
          setTimeout(() => animateValue('expectedYield', stats.expectedYield), 300);
          setTimeout(() => animateValue('term', stats.term), 400);
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(target);
    return () => observer.disconnect();
  }, [stats]);

  return (
    <div ref={statsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
        <div className="text-3xl font-bold text-gray-900 mb-2">
          ${animatedStats.projectSize.toLocaleString()}M
        </div>
        <div className="text-gray-600">Project Size</div>
      </div>
      <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
        <div className="text-3xl font-bold text-gray-900 mb-2">
          ${animatedStats.tokenizedTranche.toLocaleString()}M
        </div>
        <div className="text-gray-600">Tokenized Tranche</div>
      </div>
      <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
        <div className="text-3xl font-bold text-gray-900 mb-2">
          {animatedStats.expectedYield}%
        </div>
        <div className="text-gray-600">Expected Yield</div>
      </div>
      <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
        <div className="text-3xl font-bold text-gray-900 mb-2">
          {animatedStats.term}Y
        </div>
        <div className="text-gray-600">Term</div>
      </div>
    </div>
  );
}

