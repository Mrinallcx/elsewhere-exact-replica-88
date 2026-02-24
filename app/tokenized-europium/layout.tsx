import { ReactNode } from 'react';

export const metadata = {
  title: 'Tokenized Europium | Digital Rare Earth Backed by Physical Assets | Toto Finance',
  description: 'Tokenized europium by Toto Finance. 1:1 asset-backed rare earth metal tokens, always redeemable. In-Ground Europium future delivery contracts (1-12 months and 1-6 years). Instant settlement with stablecoins. The luminescent element powering displays and lighting.',
  keywords: 'tokenized europium, europium tokenization, buy tokenized europium, digital rare earth, europium-backed tokens, RWA rare earth, real world asset europium, in-ground europium, europium future delivery, europium metal token, europium instant settlement, DeFi rare earth, europium yield, europium collateral loans, red phosphor',
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
    title: 'Tokenized Europium | Digital Rare Earth Backed by Physical Assets | Toto Finance',
    description: 'Tokenized europium by Toto Finance. 1:1 asset-backed rare earth tokens, always redeemable. In-Ground Europium future delivery contracts. Instant stablecoin settlement.',
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
    title: 'Tokenized Europium | Digital Rare Earth Backed by Physical Assets | Toto Finance',
    description: 'Tokenized europium by Toto Finance. 1:1 asset-backed rare earth tokens, always redeemable. In-Ground Europium future delivery contracts. Instant stablecoin settlement.',
    images: ['https://totofinance.co/assets/images/og-preview.png'],
  },
  alternates: {
    canonical: 'https://totofinance.co/tokenized-europium',
  },
};

export default function TokenizedEuropiumLayout({
  children,
}: {
  children: ReactNode;
}) {
  return children;
}
