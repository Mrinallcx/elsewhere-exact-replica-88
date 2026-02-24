"use client";

import { useEffect, useRef, useState } from 'react';

export function TotoTokenStats() {
  const [animatedStats, setAnimatedStats] = useState({
    marketCap: 0,
    fdv: 0,
    circulatingSupply: 0,
    totalSupply: 0
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
            marketCap: 0,
            fdv: 0,
            circulatingSupply: 0,
            totalSupply: 0
          });
          
          // Animate each stat
          const animateValue = (key: keyof typeof animatedStats, endValue: number, duration: number = 2000, isDecimal: boolean = false) => {
            const startTime = Date.now();
            const startValue = 0;
            
            const animate = () => {
              const elapsed = Date.now() - startTime;
              const progress = Math.min(elapsed / duration, 1);
              
              // Easing function for smooth animation
              const easeOutQuart = 1 - Math.pow(1 - progress, 4);
              const currentValue = startValue + (endValue - startValue) * easeOutQuart;
              
              // Use appropriate rounding based on whether it's a decimal value
              const finalValue = isDecimal ? Math.round(currentValue * 100) / 100 : Math.floor(currentValue);
              
              setAnimatedStats(prev => ({ ...prev, [key]: finalValue }));
              
              if (progress < 1) {
                requestAnimationFrame(animate);
              }
            };
            
            requestAnimationFrame(animate);
          };

          // Start animations with slight delays
          setTimeout(() => animateValue('marketCap', 675, 2000), 100);
          setTimeout(() => animateValue('fdv', 2.16, 2000, true), 200);
          setTimeout(() => animateValue('circulatingSupply', 296, 2000), 300);
          setTimeout(() => animateValue('totalSupply', 949.9, 2000, true), 400);
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(target);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={statsRef} className="stats-grid">
      <div className="stat-item">
        <div className="stat-number">{animatedStats.circulatingSupply}M</div>
        <div className="stat-label">Circulating Supply</div>
      </div>
      
      <div className="stat-item">
        <div className="stat-number">${animatedStats.fdv.toFixed(2)}M</div>
        <div className="stat-label">FDV</div>
      </div>
      
      <div className="stat-item">
        <div className="stat-number">${animatedStats.marketCap}K</div>
        <div className="stat-label">Market Cap</div>
      </div>
      
      <div className="stat-item">
        <div className="stat-number">{animatedStats.totalSupply.toFixed(1)}M</div>
        <div className="stat-label">Total Supply</div>
      </div>
    </div>
  );
}

