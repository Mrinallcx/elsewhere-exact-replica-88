import { ReactNode } from 'react';

const PAGE_TITLE = 'Tokenized Europium | Digital Rare Earth Backed by Physical Assets | Toto Finance';
const PAGE_DESCRIPTION =
  'Every color on every screen starts with europium. Toto Finance brings the rarest commercial rare earth on-chain from 1:1 redeemable oxide tokens to In-Ground future delivery contracts. The element that gives displays their light. Instant stablecoin settlement. DeFi secondary markets.';
const KEYWORDS =
  'tokenized europium, europium tokenization, buy tokenized europium, digital europium, europium-backed tokens, RWA europium, real world asset europium, in-ground europium, europium future delivery, europium oxide token, europium instant settlement, DeFi europium, europium yield, europium collateral loans, red phosphor rare earth, OLED europium, LED europium display';

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
    url: 'https://totofinance.co/tokenized-europium',
    siteName: 'Toto Finance',
    images: [
      {
        url: 'https://totofinance.co/assets/images/og-preview.png',
        width: 1200,
        height: 630,
        alt: 'Tokenized Europium | Toto Finance',
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
    canonical: 'https://totofinance.co/tokenized-europium',
  },
};

export default function TokenizedEuropiumLayout({ children }: { children: ReactNode }) {
  return children;
}
