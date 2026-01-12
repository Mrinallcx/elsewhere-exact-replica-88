"use client";

import { useState, useEffect } from 'react';

interface DescriptionRotatorProps {
  descriptions: string[];
  interval?: number;
  className?: string;
  onHover?: (isHovered: boolean) => void;
  formatText?: (text: string) => string;
  boldTerms?: string[];
}

export function DescriptionRotator({
  descriptions,
  interval = 4500,
  className = "",
  onHover,
  formatText,
  boldTerms
}: DescriptionRotatorProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (isHovered) return;

    const timer = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % descriptions.length);
        setIsTransitioning(false);
      }, 250);
    }, interval);

    return () => clearInterval(timer);
  }, [descriptions.length, interval, isHovered]);

  const handleDescriptionChange = (index: number) => {
    if (index === currentIndex) return;

    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex(index);
      setIsTransitioning(false);
    }, 250);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
    onHover?.(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    onHover?.(false);
  };

  const formatTextInternal = (text: string): string => {
    if (formatText) {
      return formatText(text);
    }
    if (boldTerms && boldTerms.length > 0) {
      let formattedText = text;
      boldTerms.forEach((term) => {
        const regex = new RegExp(`(${term})`, 'g');
        formattedText = formattedText.replace(regex, '<strong>$1</strong>');
      });
      return formattedText;
    }
    return text;
  };

  const displayText = formatTextInternal(descriptions[currentIndex]);

  return (
    <div
      className={className}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className={`transition-opacity duration-300 ${
          isTransitioning ? 'opacity-0' : 'opacity-100'
        }`}
        dangerouslySetInnerHTML={{ __html: displayText }}
      />
      <div className="flex gap-2 mt-4">
        {descriptions.map((_, index) => (
          <button
            key={index}
            type="button"
            className={`w-6 h-6 rounded-full transition-colors ${
              index === currentIndex ? 'bg-white' : 'bg-white/40'
            }`}
            onClick={() => handleDescriptionChange(index)}
            aria-label={`Go to description ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

