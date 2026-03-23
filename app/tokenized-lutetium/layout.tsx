import { ReactNode } from 'react';

const PAGE_TITLE = 'Tokenized Lutetium | Digital Rare Earth Backed by Physical Assets | Toto Finance';
const PAGE_DESCRIPTION =
  'Every PET scanner that detects cancer depends on lutetium. Toto Finance brings the rarest and most expensive rare earth on-chain from 1:1 redeemable oxide tokens to In-Ground future delivery contracts. The element that finds cancer before it spreads. Instant stablecoin settlement. DeFi secondary markets.';
const KEYWORDS =
  'tokenized lutetium, lutetium tokenization, buy tokenized lutetium, digital lutetium, lutetium-backed tokens, RWA lutetium, real world asset lutetium, in-ground lutetium, lutetium future delivery, lutetium oxide token, lutetium instant settlement, DeFi lutetium, lutetium yield, lutetium collateral loans, PET scanner lutetium, Lu-177 cancer therapy, LSO scintillator rare earth';

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
    url: 'https://totofinance.co/tokenized-lutetium',
    siteName: 'Toto Finance',
    images: [
      {
        url: 'https://totofinance.co/assets/images/og-preview.png',
        width: 1200,
        height: 630,
        alt: 'Tokenized Lutetium | Toto Finance',
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
    canonical: 'https://totofinance.co/tokenized-lutetium',
  },
};

export default function TokenizedLutetiumLayout({ children }: { children: ReactNode }) {
  return children;
}
