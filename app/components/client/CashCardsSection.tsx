"use client";

import { useEffect, useRef, ReactNode } from 'react';
import { AnimatedSection } from './AnimatedSection';

interface CashCard {
  title: string;
  subtitle: string;
  variant: string;
}

interface CashCardsSectionProps {
  cards: CashCard[];
}

export function CashCardsSection({ cards }: CashCardsSectionProps) {
  const cashRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const root = cashRef.current;
    if (!root) return;
    const cards = Array.from(
      root.querySelectorAll<HTMLElement>('.cash-card-reveal')
    );
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement;
            el.classList.add('cash-in');
          }
        });
      },
      { threshold: 0.2 }
    );
    cards.forEach((c, idx) => {
      c.style.transitionDelay = `${idx * 120}ms`;
      io.observe(c);
    });
    return () => io.disconnect();
  }, []);

  return (
    <div className="cash-right" ref={cashRef}>
      {cards.map((card, idx) => (
        <AnimatedSection
          key={`${idx}-${card.title}`}
          className={`cash-card ${card.variant} cash-card-reveal`}
          threshold={0.2}
          delay={idx * 120}
        >
          <div className="cash-feature">
            <h3 className="cash-feature-title">{card.title}</h3>
            <p className="cash-feature-sub">{card.subtitle}</p>
          </div>
        </AnimatedSection>
      ))}
    </div>
  );
}

