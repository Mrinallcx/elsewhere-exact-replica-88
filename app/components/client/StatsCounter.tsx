"use client";

import { useState, useEffect, useRef } from 'react';

interface StatItem {
  key: string;
  value: number;
  suffix?: string;
  prefix?: string;
  label: string;
  isDecimal?: boolean;
}

interface StatsCounterProps {
  stats: StatItem[];
  introText?: string;
  className?: string;
}

export function StatsCounter({ stats, introText, className = "" }: StatsCounterProps) {
  const [animatedStats, setAnimatedStats] = useState<Record<string, number>>({});
  const [hasAnimated, setHasAnimated] = useState(false);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          animateStats();
        }
      },
      { threshold: 0.3 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  const animateStats = () => {
    stats.forEach((stat, index) => {
      const duration = 2000;
      const startTime = Date.now();
      const startValue = 0;
      const endValue = stat.value;

      const animate = () => {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(elapsed / duration, 1);

        // Easing function for smooth animation
        const easeOutQuart = 1 - Math.pow(1 - progress, 4);
        const currentValue = startValue + (endValue - startValue) * easeOutQuart;

        // Use appropriate rounding based on whether it's a decimal value
        const finalValue = stat.isDecimal
          ? Math.round(currentValue * 10) / 10
          : Math.floor(currentValue);

        setAnimatedStats((prev) => ({
          ...prev,
          [stat.key]: finalValue,
        }));

        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };

      setTimeout(() => requestAnimationFrame(animate), index * 100);
    });
  };

  return (
    <div ref={statsRef} className={className}>
      {introText && (
        <div className="mb-12">
          <p className="stats-intro-text">{introText}</p>
        </div>
      )}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-12 lg:gap-16 w-full">
        {stats.map((stat) => (
          <div key={stat.key} className="stat-item">
            <div className="stat-number">
              {stat.prefix}
              {animatedStats[stat.key] ?? 0}
              {stat.suffix}
            </div>
            <div className="stat-label">{stat.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

