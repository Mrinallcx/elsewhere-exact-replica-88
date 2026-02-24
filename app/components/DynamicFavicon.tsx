'use client';

import { useEffect } from 'react';

export default function DynamicFavicon() {
  useEffect(() => {
    const updateFavicon = () => {
      const htmlElement = document.documentElement;
      const isDark = htmlElement.classList.contains('dark');
      
      // Update all icon link elements (favicon.ico, favicon.svg, etc.)
      // This ensures the version parameter is included for Google Search
      const iconLinks = document.querySelectorAll("link[rel='icon'], link[rel='shortcut icon']") as NodeListOf<HTMLLinkElement>;
      
      iconLinks.forEach((linkElement) => {
        // Remove any cache-busted favicon URLs (e.g., ?favicon.71ccf052.ico)
        if (linkElement.href.includes('favicon.ico?favicon.') || linkElement.href.includes('?favicon.')) {
          // Remove the old cache-busted favicon link
          linkElement.remove();
          return;
        }
        
        // Only update SVG icons (not .ico files) for dark mode switching
        // Keep favicon.ico with version parameter from metadata
        if (linkElement.href.includes('.svg')) {
          linkElement.href = isDark ? '/toto-icon-white.svg?v=2' : '/toto-icon.svg?v=2';
        } else if (linkElement.href.includes('favicon.ico') && !linkElement.href.includes('?v=2')) {
          // Ensure favicon.ico has version parameter if missing
          linkElement.href = '/favicon.ico?v=2';
        }
      });
    };

    // Initial check - delay to ensure metadata icons are rendered first
    const timer = setTimeout(() => {
      updateFavicon();
    }, 100);

    // Watch for class changes
    const observer = new MutationObserver(updateFavicon);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class'],
    });

    return () => {
      clearTimeout(timer);
      observer.disconnect();
    };
  }, []);

  return null;
}

