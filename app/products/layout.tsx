import { ReactNode } from 'react';

export const metadata = {
  title: 'Products - Asset-Backed Tokenized Commodities | Toto Finance',
  description:
    'Toto Finance provides asset-backed tokenized commodities in diamonds, precious metals, and institutional assets that combine compliant ownership, instant on-chain settlement, and global market access through institutional-grade infrastructure.',
  keywords: 'Tokenized commodities, asset-backed tokenization, tokenized physical assets, tokenized metals, tokenized gold, tokenized silver, tokenized diamonds, tokenized gemstones, tokenized energy assets, tokenized reserves, digital commodities, on-chain commodity ownership, physical asset tokenization, real world assets, RWA tokenization platform, commodity tokenization infrastructure, digital ownership of commodities, on-chain settlement, real-world asset redemption, institutional tokenization, Liechtenstein tokenization, LCX validation, Toto Finance products',
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
    description:
    'Toto Finance provides asset-backed tokenized commodities in diamonds, precious metals, and institutional assets that combine compliant ownership, instant on-chain settlement, and global market access through institutional-grade infrastructure.',
    url: 'https://totofinance.co/products',
    siteName: 'Toto Finance',
    images: [
      {
        url: 'https://totofinance.co/assets/images/og-preview.png',
        width: 1200,
        height: 630,
        alt: 'Products - Asset-Backed Tokenized Commodities | Toto Finance',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Products - Asset-Backed Tokenized Commodities | Toto Finance',
    description:
    'Toto Finance provides asset-backed tokenized commodities in diamonds, precious metals, and institutional assets that combine compliant ownership, instant on-chain settlement, and global market access through institutional-grade infrastructure.',
    images: ['https://totofinance.co/assets/images/og-preview.png'],
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

