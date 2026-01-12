'use client';

import Script from 'next/script';
import { useEffect, useState } from 'react';
import { GTM_ID, gtmScript } from '../gtm-script';

export default function GTM() {
  const [shouldLoad, setShouldLoad] = useState(false);

  useEffect(() => {
    // Ensure GTM only loads once and doesn't block
    if (typeof window === 'undefined') return;
    
    // Prevent multiple GTM initializations
    if ((window as any).dataLayer && (window as any).dataLayer.length > 0) {
      return;
    }

    // Initialize dataLayer if it doesn't exist
    if (!(window as any).dataLayer) {
      (window as any).dataLayer = [];
    }

    // Delay GTM loading until after LCP (typically 2-3 seconds)
    // This ensures analytics don't compete with critical resources
    const timer = setTimeout(() => {
      setShouldLoad(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* Google Tag Manager - loaded with lazyOnload and delayed to reduce blocking */}
      {shouldLoad && (
        <Script
          id="gtm-script"
          strategy="lazyOnload"
          dangerouslySetInnerHTML={{
            __html: gtmScript,
          }}
        />
      )}
      {/* Google Tag Manager (noscript) */}
      <noscript>
        <iframe
          src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
          height="0"
          width="0"
          style={{ display: 'none', visibility: 'hidden' }}
        />
      </noscript>
    </>
  );
}

