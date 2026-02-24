import { ReactNode } from 'react';

export const metadata = {
  title: 'Critical Minerals Tokenization | Toto Finance',
  description: 'Toto Finance enables compliant, asset-backed tokenization of critical minerals including lithium, copper, and nickel - with on-chain ownership, institutional custody, and legally structured redemption.',
  keywords: 'critical minerals tokenization, rare earth tokenization, tokenized critical minerals, lithium tokenization, copper tokenization, nickel tokenization, in-ground mineral tokenization, asset-backed mineral tokenization, commodity reserve tokenization, real-world asset tokenization, RWA commodities, strategic minerals tokenization, institutional commodity tokenization, on-chain mineral ownership, physical commodity tokenization, Liechtenstein tokenization framework',
  authors: [{ name: 'Toto Finance', url: 'https://totofinance.co' }],
  applicationName: 'Toto Finance',
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
  openGraph: {
    title: 'Critical Minerals Tokenization | Toto Finance',
    description: 'Toto Finance enables compliant, asset-backed tokenization of critical minerals including lithium, copper, and nickel - with on-chain ownership, institutional custody, and legally structured redemption.',
    url: 'https://totofinance.co/rare-earth-mineral',
    siteName: 'Toto Finance',
    images: [
      {
        url: 'https://totofinance.co/assets/images/og-preview.png',
        width: 1200,
        height: 630,
        alt: 'Critical Minerals Tokenization - Rare Earths & Metals | Toto Finance',
        type: 'image/png',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@totofinance',
    creator: '@totofinance',
    title: 'Critical Minerals Tokenization | Toto Finance',
    description: 'Toto Finance enables compliant, asset-backed tokenization of critical minerals including lithium, copper, and nickel - with on-chain ownership, institutional custody, and legally structured redemption.',
    images: [{ url: 'https://totofinance.co/assets/images/og-preview.png', width: 1200, height: 630, alt: 'Critical Minerals | Toto Finance' }],
  },
  alternates: {
    canonical: 'https://totofinance.co/rare-earth-mineral',
  },
};

export default function RareEarthMineralLayout({
  children,
}: {
  children: ReactNode;
}) {
  return children;
}

