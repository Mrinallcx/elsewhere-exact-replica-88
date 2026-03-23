import { ReactNode } from 'react';

const PAGE_TITLE = 'Tokenized Copper | Digital Copper Backed by Physical Assets | Toto Finance';
const PAGE_DESCRIPTION =
  "The world is running out of the metal that powers the future. Toto Finance exists to make copper ownership borderless, instant, and fair from 1:1 redeemable cathode tokens to In-Ground future delivery contracts. Settle in stablecoins. Trade on DeFi. Own the metal that matters.";
const KEYWORDS =
  'tokenized copper, copper tokenization, buy tokenized copper, digital copper, copper-backed tokens, RWA copper, real world asset copper, in-ground copper, copper future delivery, copper cathode token, copper instant settlement, DeFi copper, copper yield, copper collateral loans';

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
    url: 'https://totofinance.co/tokenized-copper',
    siteName: 'Toto Finance',
    images: [
      {
        url: 'https://totofinance.co/assets/images/og-preview.png',
        width: 1200,
        height: 630,
        alt: 'Tokenized Copper | Toto Finance',
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
    canonical: 'https://totofinance.co/tokenized-copper',
  },
};

export default function TokenizedCopperLayout({ children }: { children: ReactNode }) {
  return children;
}
