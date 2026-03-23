import { ReactNode } from 'react';

const PAGE_TITLE = 'Tokenized Holmium | Digital Rare Earth Backed by Physical Assets | Toto Finance';
const PAGE_DESCRIPTION =
  'Every laser that removes a kidney stone depends on holmium. Toto Finance brings this ultra-rare heavy earth on-chain from 1:1 redeemable oxide tokens to In-Ground future delivery contracts. The element surgeons physically cannot operate without. Instant stablecoin settlement. DeFi secondary markets.';
const KEYWORDS =
  'tokenized holmium, holmium tokenization, buy tokenized holmium, digital holmium, holmium-backed tokens, RWA holmium, real world asset holmium, in-ground holmium, holmium future delivery, holmium oxide token, holmium instant settlement, DeFi holmium, holmium yield, holmium collateral loans, holmium YAG laser rare earth, medical laser holmium, nuclear holmium';

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
    url: 'https://totofinance.co/tokenized-holmium',
    siteName: 'Toto Finance',
    images: [
      {
        url: 'https://totofinance.co/assets/images/og-preview.png',
        width: 1200,
        height: 630,
        alt: 'Tokenized Holmium | Toto Finance',
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
    canonical: 'https://totofinance.co/tokenized-holmium',
  },
};

export default function TokenizedHolmiumLayout({ children }: { children: ReactNode }) {
  return children;
}
