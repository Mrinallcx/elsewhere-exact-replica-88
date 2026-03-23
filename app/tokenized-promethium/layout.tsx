import { ReactNode } from 'react';

const PAGE_TITLE = 'Tokenized Promethium | Digital Rare Earth Backed by Physical Assets | Toto Finance';
const PAGE_DESCRIPTION =
  'Every gram of promethium must be created inside a nuclear reactor. Toto Finance brings the only radioactive rare earth on-chain from 1:1 redeemable isotope tokens to In-Ground future delivery contracts. The element that powers nuclear batteries, deep-space probes, and next-generation betavoltaic devices. Instant stablecoin settlement. DeFi secondary markets.';
const KEYWORDS =
  'tokenized promethium, promethium tokenization, buy tokenized promethium, digital promethium, promethium-backed tokens, RWA promethium, real world asset promethium, in-ground promethium, promethium future delivery, promethium isotope token, promethium instant settlement, DeFi promethium, promethium yield, promethium collateral loans, nuclear batteries, betavoltaic promethium, space power promethium';

export const metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  keywords: KEYWORDS,
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
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    url: 'https://totofinance.co/tokenized-promethium',
    siteName: 'Toto Finance',
    images: [
      {
        url: 'https://totofinance.co/assets/images/og-preview.png',
        width: 1200,
        height: 630,
        alt: 'Tokenized Promethium | Toto Finance',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    images: ['https://totofinance.co/assets/images/og-preview.png'],
  },
  alternates: {
    canonical: 'https://totofinance.co/tokenized-promethium',
  },
};

export default function TokenizedPromethiumLayout({ children }: { children: ReactNode }) {
  return children;
}
