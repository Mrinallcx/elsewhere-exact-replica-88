import { ReactNode } from 'react';

const PAGE_TITLE = 'Tokenized Praseodymium | Digital Rare Earth Backed by Physical Assets | Toto Finance';
const PAGE_DESCRIPTION =
  'Every permanent magnet in every EV motor contains praseodymium. Toto Finance brings this critical rare earth on-chain from 1:1 redeemable oxide tokens to In-Ground future delivery contracts. The other half of the NdPr alloy the world cannot electrify without. Instant stablecoin settlement. DeFi secondary markets.';
const KEYWORDS =
  'tokenized praseodymium, praseodymium tokenization, buy tokenized praseodymium, digital praseodymium, praseodymium-backed tokens, RWA praseodymium, real world asset praseodymium, in-ground praseodymium, praseodymium future delivery, praseodymium oxide token, praseodymium instant settlement, DeFi praseodymium, praseodymium yield, praseodymium collateral loans, NdPr magnet rare earth, EV magnet praseodymium, wind turbine praseodymium';

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
    url: 'https://totofinance.co/tokenized-praseodymium',
    siteName: 'Toto Finance',
    images: [
      {
        url: 'https://totofinance.co/assets/images/og-preview.png',
        width: 1200,
        height: 630,
        alt: 'Tokenized Praseodymium | Toto Finance',
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
    canonical: 'https://totofinance.co/tokenized-praseodymium',
  },
};

export default function TokenizedPraseodymiumLayout({ children }: { children: ReactNode }) {
  return children;
}
