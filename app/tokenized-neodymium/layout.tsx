import { ReactNode } from 'react';

const PAGE_TITLE = 'Tokenized Neodymium | Digital Rare Earth Backed by Physical Assets | Toto Finance';
const PAGE_DESCRIPTION =
  'Every EV motor, every wind turbine, every AI data center cooling fan depends on neodymium magnets. Toto Finance brings this critical rare earth on-chain from 1:1 redeemable oxide tokens to In-Ground future delivery contracts. The element that moves the modern economy. Instant stablecoin settlement. DeFi secondary markets.';
const KEYWORDS =
  'tokenized neodymium, neodymium tokenization, buy tokenized neodymium, digital neodymium, neodymium-backed tokens, RWA neodymium, real world asset neodymium, in-ground neodymium, neodymium future delivery, neodymium oxide token, neodymium instant settlement, DeFi neodymium, neodymium yield, neodymium collateral loans, NdFeB magnet rare earth, EV motor neodymium, wind turbine neodymium';

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
    url: 'https://totofinance.co/tokenized-neodymium',
    siteName: 'Toto Finance',
    images: [
      {
        url: 'https://totofinance.co/assets/images/og-preview.png',
        width: 1200,
        height: 630,
        alt: 'Tokenized Neodymium | Toto Finance',
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
    canonical: 'https://totofinance.co/tokenized-neodymium',
  },
};

export default function TokenizedNeodymiumLayout({ children }: { children: ReactNode }) {
  return children;
}
