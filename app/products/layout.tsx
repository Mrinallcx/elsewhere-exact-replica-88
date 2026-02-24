import { ReactNode } from 'react';

export const metadata = {
  title: 'Products - Asset-Backed Tokenized Commodities | Toto Finance',
  description: 'Explore Toto Finance products: asset-backed tokenized commodities including gold, silver, diamonds, energy assets, and in-ground reserves - with on-chain ownership, instant settlement, and real-world redemption.',
  keywords: 'Tokenized commodities, asset-backed tokenization, tokenized physical assets, tokenized metals, tokenized gold, tokenized silver, tokenized diamonds, tokenized gemstones, tokenized energy assets, tokenized reserves, digital commodities, on-chain commodity ownership, physical asset tokenization, real world assets, RWA tokenization platform, commodity tokenization infrastructure, digital ownership of commodities, on-chain settlement, real-world asset redemption, institutional tokenization, Liechtenstein tokenization, LCX validation, Toto Finance products',
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
    title: 'Products - Asset-Backed Tokenized Commodities | Toto Finance',
    description: 'Explore Toto Finance products: asset-backed tokenized commodities including gold, silver, diamonds, energy assets, and in-ground reserves - with on-chain ownership, instant settlement, and real-world redemption.',
    url: 'https://totofinance.co/products',
    siteName: 'Toto Finance',
    images: [
      {
        url: 'https://totofinance.co/assets/images/og-preview.png',
        width: 1200,
        height: 630,
        alt: 'Products - Asset-Backed Tokenized Commodities | Toto Finance',
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
    title: 'Products - Asset-Backed Tokenized Commodities | Toto Finance',
    description: 'Explore Toto Finance products: asset-backed tokenized commodities including gold, silver, diamonds, energy assets, and in-ground reserves - with on-chain ownership, instant settlement, and real-world redemption.',
    images: [{ url: 'https://totofinance.co/assets/images/og-preview.png', width: 1200, height: 630, alt: 'Products | Toto Finance' }],
  },
  alternates: {
    canonical: 'https://totofinance.co/products',
  },
};

export default function ProductsLayout({
  children,
}: {
  children: ReactNode;
}) {
  return children;
}

