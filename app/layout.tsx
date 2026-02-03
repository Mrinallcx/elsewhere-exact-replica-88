// SSR: Pages use force-dynamic, so we don't need ISR here
// export const revalidate = 3600; // Removed to allow SSR on all pages

export const metadata = {
  metadataBase: new URL('https://totofinance.co'),
  title: 'Toto Finance - Asset-Backed Tokenization Platform',
  description:
    'Toto Finance is the global infrastructure for tokenized commodities. Trade tokenized gold, silver, diamonds, and energy assets with Toto Finance.',
  keywords:
    'Toto Finance, tokenized commodities, commodity tokenization, asset-backed tokenization, tokenized metals, tokenized energy, tokenized gold, tokenized silver, tokenized diamonds, tokenized copper, real world assets, RWA infrastructure, digital commodities, on-chain settlement, commodity tokenization platform, physical asset tokenization, digital ownership, Liechtenstein tokenization, LCX validation, institutional tokenization, gold bar, silver bar, platinum bar',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    // Add your Google Search Console verification code here when available
    // google: 'your-verification-code',
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/favicon.ico',
  },
  openGraph: {
    title: 'Toto Finance - Asset-Backed Tokenization Platform',
    description:
      'Toto Finance is the global infrastructure for tokenized commodities, enabling asset-backed digital ownership of metals, energy, and gems with instant settlement and real-world redemption.',
    url: 'https://totofinance.co',
    siteName: 'Toto Finance',
    images: [
      {
        url: 'https://totofinance.co/assets/images/og-preview.png',
        width: 1200,
        height: 630,
        alt: 'Toto Finance - Asset-Backed Tokenization Platform',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Toto Finance - Asset-Backed Tokenization Platform',
    description:
      "Toto Finance is the global infrastructure for tokenized commodities, enabling asset-backed digital ownership of metals, energy, and gems with instant settlement and real-world redemption.",
    images: [
      'https://totofinance.co/assets/images/og-preview.png',
    ],
  },
  alternates: {
    canonical: 'https://totofinance.co',
  },
  category: 'finance',
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

import './globals.css';
import dynamicImport from 'next/dynamic';
import { StructuredData } from './components/StructuredData';
import { TrustedTypesPolicy } from './components/TrustedTypesPolicy';
import { ServiceWorkerRegistration } from './components/ServiceWorkerRegistration';

// Dynamic imports for heavy components to reduce initial bundle size
const GTM = dynamicImport(() => import('./components/GTM'));
// Lenis smooth scroll is heavy (~50KB), load it dynamically
const SmoothScrollClient = dynamicImport(() => import('./components/client/SmoothScrollClient').then(mod => ({ default: mod.SmoothScrollClient })));

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <head>
        {/* Explicit favicon link for Google Search compatibility */}
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        {/* Preconnect only to critical origins that load immediately */}
        {/* GTM loads lazily, so no preconnect needed */}
        {/* Firebase images load lazily, so no preconnect needed */}
        <link rel="dns-prefetch" href="https://js.hs-scripts.com" />
        <link rel="dns-prefetch" href="https://api.hubapi.com" />
        <link rel="dns-prefetch" href="https://totofinance.co" />
        {/* Preload hero fallback image for LCP optimization - highest priority */}
        {/* Preload desktop version for larger screens (most common) */}
        <link
          rel="preload"
          as="image"
          href="/hero-background/hero-desktop.webp"
          type="image/webp"
          fetchPriority="high"
          media="(min-width: 768px)"
        />
        {/* Preload mobile version for smaller screens */}
        <link
          rel="preload"
          as="image"
          href="/hero-background/hero-mobile.webp"
          type="image/webp"
          fetchPriority="high"
          media="(max-width: 767px)"
        />
        {/* CRITICAL: Inline styles for hero - renders before CSS loads to eliminate render delay */}
        <style
          id="critical-css"
          dangerouslySetInnerHTML={{
            __html: `
              .hero-container,main[class*="relative"]{position:relative;min-height:90vh;min-height:100svh;overflow:hidden;display:flex;align-items:center;justify-content:center}
              .hero-bg-img,picture{position:absolute;inset:0;width:100%;height:100%;display:block;z-index:0}
              .hero-bg-img img,picture img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;z-index:-1}
              @font-face{font-family:'Inter';font-style:normal;font-weight:100 900;font-display:swap;src:local('Inter')}
            `.replace(/\s+/g, ' ').trim()
          }}
        />
      </head>
      <body>
        <ServiceWorkerRegistration />
        <TrustedTypesPolicy />
        <GTM />
        <StructuredData />
        {/* Noscript fallback - styles moved to globals.css for better CSP compliance */}
        <noscript />
        {/* Lenis smooth scroll wrapper */}
        <SmoothScrollClient>{children}</SmoothScrollClient>
      </body>
    </html>
  );
}
