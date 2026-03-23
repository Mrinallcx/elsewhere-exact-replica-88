import { ReactNode } from 'react';

const PAGE_TITLE = 'Tokenized Erbium | Digital Rare Earth Backed by Physical Assets | Toto Finance';
const PAGE_DESCRIPTION =
  "Every internet signal traveling through fiber depends on erbium. Toto Finance brings this critical rare earth on-chain from 1:1 redeemable oxide tokens to In-Ground future delivery contracts. The element the global internet physically cannot function without. Instant stablecoin settlement. DeFi secondary markets.";
const KEYWORDS =
  'tokenized erbium, erbium tokenization, buy tokenized erbium, digital erbium, erbium-backed tokens, RWA erbium, real world asset erbium, in-ground erbium, erbium future delivery, erbium oxide token, erbium instant settlement, DeFi erbium, erbium yield, erbium collateral loans, fiber optic amplifiers, EDFA rare earth';

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
    url: 'https://totofinance.co/tokenized-erbium',
    siteName: 'Toto Finance',
    images: [
      {
        url: 'https://totofinance.co/assets/images/og-preview.png',
        width: 1200,
        height: 630,
        alt: 'Tokenized Erbium | Toto Finance',
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
    canonical: 'https://totofinance.co/tokenized-erbium',
  },
};

export default function TokenizedErbiumLayout({ children }: { children: ReactNode }) {
  return children;
}
