import { ReactNode } from 'react';

const PAGE_TITLE = 'Tokenized Cerium | Digital Rare Earth Backed by Physical Assets | Toto Finance';
const PAGE_DESCRIPTION =
  "The world is running out of the rare earth that keeps every car clean and every screen polished. Toto Finance exists to make cerium ownership borderless, instant, and fair from 1:1 redeemable oxide tokens to In-Ground future delivery contracts. Settle in stablecoins. Trade on DeFi. Own the element the world can't replace.";
const KEYWORDS =
  'tokenized cerium, cerium tokenization, buy tokenized cerium, digital cerium, cerium-backed tokens, RWA cerium, real world asset cerium, in-ground cerium, cerium future delivery, cerium oxide token, cerium instant settlement, DeFi cerium, cerium yield, cerium collateral loans, catalytic converters';

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
    url: 'https://totofinance.co/tokenized-cerium',
    siteName: 'Toto Finance',
    images: [
      {
        url: 'https://totofinance.co/assets/images/og-preview.png',
        width: 1200,
        height: 630,
        alt: 'Tokenized Cerium | Toto Finance',
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
    canonical: 'https://totofinance.co/tokenized-cerium',
  },
};

export default function TokenizedCeriumLayout({ children }: { children: ReactNode }) {
  return children;
}
