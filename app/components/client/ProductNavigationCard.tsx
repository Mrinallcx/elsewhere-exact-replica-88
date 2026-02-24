"use client";

import Image from 'next/image';
import { ReactNode } from 'react';

interface ProductNavigationCardProps {
  imageSrc: string;
  imageAlt: string;
  title: string;
  description: string;
  linkText: string;
  linkHref?: string;
  scrollToId?: string;
  onLinkClick?: (e: React.MouseEvent) => void;
  disabled?: boolean;
  badge?: string;
  imageClassName?: string;
}

export function ProductNavigationCard({
  imageSrc,
  imageAlt,
  title,
  description,
  linkText,
  linkHref,
  scrollToId,
  onLinkClick,
  disabled = false,
  badge,
  imageClassName
}: ProductNavigationCardProps) {
  const handleCardClick = () => {
    if (disabled || !scrollToId) return;
    const element = document.getElementById(scrollToId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleLinkClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (onLinkClick) {
      onLinkClick(e);
    } else if (linkHref) {
      window.open(linkHref, '_blank');
    }
  };

  return (
    <div 
      className={`bg-white p-8 rounded-2xl transition-all duration-300 group border border-gray-200 relative ${
        disabled ? 'cursor-not-allowed' : 'cursor-pointer'
      }`}
      onClick={handleCardClick}
    >
      {badge && (
        <div className="absolute top-4 right-4 z-10 bg-black text-white px-4 py-2 rounded-full text-sm font-semibold">
          {badge}
        </div>
      )}
      <div className={disabled ? 'blur-md opacity-75' : ''}>
        <div className="mb-6">
          <div className="w-full h-48 rounded-xl mb-6 overflow-hidden">
            <Image 
              src={imageSrc} 
              alt={imageAlt} 
              width={400}
              height={192}
              className={`w-full h-full object-cover ${imageClassName || ''}`}
            />
          </div>
          <h3 className="text-2xl font-medium text-gray-900 mb-4">{title}</h3>
          <p className="text-gray-600 leading-relaxed">
            {description}
          </p>
        </div>
        <div 
          className="flex items-center text-black font-medium group-hover:text-gray-800 transition-colors"
          onClick={handleLinkClick}
        >
          <span>{linkText}</span>
          <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </div>
    </div>
  );
}

