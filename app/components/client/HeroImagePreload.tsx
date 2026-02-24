"use client";

import { useEffect } from 'react';

interface HeroImagePreloadProps {
  imagePath: string;
}

export function HeroImagePreload({ imagePath }: HeroImagePreloadProps) {
  useEffect(() => {
    // Check if link already exists
    const existingLink = document.querySelector(`link[rel="preload"][href="${imagePath}"]`);
    if (existingLink) return;

    // Create and add preload link
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'image';
    link.href = imagePath;
    link.setAttribute('fetchpriority', 'high');
    document.head.appendChild(link);

    // Cleanup on unmount
    return () => {
      const linkToRemove = document.querySelector(`link[rel="preload"][href="${imagePath}"]`);
      if (linkToRemove) {
        document.head.removeChild(linkToRemove);
      }
    };
  }, [imagePath]);

  return null;
}

