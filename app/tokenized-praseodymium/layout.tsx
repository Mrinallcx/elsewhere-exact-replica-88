import { ReactNode } from 'react';

export const metadata = {
  title: 'Tokenized Praseodymium | Digital Rare Earth Backed by Physical Assets | Toto Finance',
  description: 'Tokenized praseodymium by Toto Finance. 1:1 asset-backed rare earth metal tokens, always redeemable. In-Ground Praseodymium future delivery contracts (1-12 months and 1-6 years). Instant settlement with stablecoins. The critical element powering electric vehicles and green energy.',
  keywords: 'tokenized praseodymium, praseodymium tokenization, buy tokenized praseodymium, digital rare earth, praseodymium-backed tokens, RWA rare earth, real world asset praseodymium, in-ground praseodymium, praseodymium future delivery, praseodymium metal token, praseodymium instant settlement, DeFi rare earth, praseodymium yield, praseodymium collateral loans',
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
    title: 'Tokenized Praseodymium | Digital Rare Earth Backed by Physical Assets | Toto Finance',
    description: 'Tokenized praseodymium by Toto Finance. 1:1 asset-backed rare earth metal tokens, always redeemable. In-Ground Praseodymium future delivery contracts. Instant stablecoin settlement.',
    url: 'https://totofinance.co/tokenized-praseodymium',
    siteName: 'Toto Finance',
    images: [{ url: 'https://totofinance.co/assets/images/og-preview.png', width: 1200, height: 630, alt: 'Tokenized Praseodymium | Toto Finance' }],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tokenized Praseodymium | Digital Rare Earth Backed by Physical Assets | Toto Finance',
    description: 'Tokenized praseodymium by Toto Finance. 1:1 asset-backed rare earth metal tokens, always redeemable. In-Ground Praseodymium future delivery contracts. Instant stablecoin settlement.',
    images: ['https://totofinance.co/assets/images/og-preview.png'],
  },
  alternates: { canonical: 'https://totofinance.co/tokenized-praseodymium' },
};

export default function TokenizedPraseodymiumLayout({ children }: { children: ReactNode }) {
  return children;
}
