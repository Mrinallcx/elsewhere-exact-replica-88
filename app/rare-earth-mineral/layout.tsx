import { ReactNode } from 'react';

const pageDescription =
  'Institutional-grade access to critical minerals driving AI, energy transition, and global infrastructure tokenized directly from verified in-ground reserves with compliant ownership, audited custody, and on-chain settlement.';

export const metadata = {
  title: 'Critical Minerals Tokenization | Toto Finance',
  description: pageDescription,
  keywords: 'critical minerals tokenization, rare earth tokenization, tokenized critical minerals, lithium tokenization, copper tokenization, nickel tokenization, in-ground mineral tokenization, asset-backed mineral tokenization, commodity reserve tokenization, real-world asset tokenization, RWA commodities, strategic minerals tokenization, institutional commodity tokenization, on-chain mineral ownership, physical commodity tokenization, Liechtenstein tokenization framework',
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
    description: pageDescription,
    url: 'https://totofinance.co/rare-earth-mineral',
    siteName: 'Toto Finance',
    images: [
      {
        url: 'https://totofinance.co/assets/images/og-preview.png',
        width: 1200,
        height: 630,
        alt: 'Critical Minerals Tokenization - Rare Earths & Metals | Toto Finance',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Critical Minerals Tokenization | Toto Finance',
    description: pageDescription,
    images: ['https://totofinance.co/assets/images/og-preview.png'],
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

