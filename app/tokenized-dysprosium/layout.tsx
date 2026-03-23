import { ReactNode } from 'react';

const PAGE_TITLE = 'Tokenized Dysprosium | Critical Rare Earth for EV & Defense Magnets | Toto Finance';
const PAGE_DESCRIPTION =
  'The hidden bottleneck of electrification. Toto Finance brings dysprosium ownership on-chain from 1:1 redeemable rare earth tokens to In-Ground future delivery contracts. The magnet metal that EVs, defense systems, and wind turbines cannot function without. Instant stablecoin settlement. DeFi secondary markets.';
const KEYWORDS =
  'tokenized dysprosium, dysprosium tokenization, buy tokenized dysprosium, digital dysprosium, dysprosium-backed tokens, RWA dysprosium, rare earth magnets, EV motor magnets, defense magnets, high-temperature magnets, strategic rare earths, in-ground dysprosium, dysprosium future delivery, DeFi dysprosium, dysprosium collateral';

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
    url: 'https://totofinance.co/tokenized-dysprosium',
    siteName: 'Toto Finance',
    images: [
      {
        url: 'https://totofinance.co/assets/images/og-preview.png',
        width: 1200,
        height: 630,
        alt: 'Tokenized Dysprosium | Toto Finance',
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
    canonical: 'https://totofinance.co/tokenized-dysprosium',
  },
};

export default function TokenizedDysprosiumLayout({ children }: { children: ReactNode }) {
  return children;
}
