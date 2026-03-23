import { ReactNode } from 'react';

const PAGE_TITLE = 'Tokenized Gadolinium | Digital Rare Earth Backed by Physical Assets | Toto Finance';
const PAGE_DESCRIPTION =
  'Every MRI scan that detects cancer depends on gadolinium. Toto Finance brings this critical rare earth on-chain from 1:1 redeemable oxide tokens to In-Ground future delivery contracts. The element modern medicine physically cannot diagnose without. Instant stablecoin settlement. DeFi secondary markets.';
const KEYWORDS =
  'tokenized gadolinium, gadolinium tokenization, buy tokenized gadolinium, digital gadolinium, gadolinium-backed tokens, RWA gadolinium, real world asset gadolinium, in-ground gadolinium, gadolinium future delivery, gadolinium oxide token, gadolinium instant settlement, DeFi gadolinium, gadolinium yield, gadolinium collateral loans, MRI contrast agent rare earth, GBCA gadolinium, nuclear gadolinium';

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
    url: 'https://totofinance.co/tokenized-gadolinium',
    siteName: 'Toto Finance',
    images: [
      {
        url: 'https://totofinance.co/assets/images/og-preview.png',
        width: 1200,
        height: 630,
        alt: 'Tokenized Gadolinium | Toto Finance',
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
    canonical: 'https://totofinance.co/tokenized-gadolinium',
  },
};

export default function TokenizedGadoliniumLayout({ children }: { children: ReactNode }) {
  return children;
}
