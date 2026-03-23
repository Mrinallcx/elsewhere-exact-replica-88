import { ReactNode } from 'react';

const PAGE_TITLE = 'Tokenized Lanthanum | Digital Rare Earth Backed by Physical Assets | Toto Finance';
const PAGE_DESCRIPTION =
  'Every barrel of gasoline refined passes through lanthanum. Toto Finance brings this industrial rare earth on-chain from 1:1 redeemable oxide tokens to In-Ground future delivery contracts. The element that refines the world\'s fuel, sharpens its lenses, and powers its hybrid vehicles. Instant stablecoin settlement. DeFi secondary markets.';
const KEYWORDS =
  'tokenized lanthanum, lanthanum tokenization, buy tokenized lanthanum, digital lanthanum, lanthanum-backed tokens, RWA lanthanum, real world asset lanthanum, in-ground lanthanum, lanthanum future delivery, lanthanum oxide token, lanthanum instant settlement, DeFi lanthanum, lanthanum yield, lanthanum collateral loans, FCC catalyst rare earth, NiMH battery lanthanum, optical glass lanthanum';

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
    url: 'https://totofinance.co/tokenized-lanthanum',
    siteName: 'Toto Finance',
    images: [
      {
        url: 'https://totofinance.co/assets/images/og-preview.png',
        width: 1200,
        height: 630,
        alt: 'Tokenized Lanthanum | Toto Finance',
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
    canonical: 'https://totofinance.co/tokenized-lanthanum',
  },
};

export default function TokenizedLanthanumLayout({ children }: { children: ReactNode }) {
  return children;
}
