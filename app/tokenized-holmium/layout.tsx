import { ReactNode } from 'react';

export const metadata = {
  title: 'Tokenized Holmium | Digital Rare Earth Backed by Physical Assets | Toto Finance',
  description: 'Tokenized holmium by Toto Finance. 1:1 asset-backed holmium oxide tokens, always redeemable. In-Ground Holmium future delivery contracts (1-12 months and 1-6 years). Instant settlement with stablecoins. The critical element for medical lasers, nuclear reactors, and magnetic materials.',
  keywords: 'tokenized holmium, holmium tokenization, buy tokenized holmium, digital holmium, holmium-backed tokens, RWA holmium, real world asset holmium, in-ground holmium, holmium future delivery, holmium oxide token, holmium instant settlement, DeFi holmium, holmium yield, holmium collateral loans, holmium lasers',
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
    title: 'Tokenized Holmium | Digital Rare Earth Backed by Physical Assets | Toto Finance',
    description: 'Tokenized holmium by Toto Finance. 1:1 asset-backed holmium oxide tokens, always redeemable. In-Ground Holmium future delivery contracts. Instant stablecoin settlement.',
    url: 'https://totofinance.co/tokenized-holmium',
    siteName: 'Toto Finance',
    images: [{ url: 'https://totofinance.co/assets/images/og-preview.png', width: 1200, height: 630, alt: 'Tokenized Holmium | Toto Finance' }],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tokenized Holmium | Digital Rare Earth Backed by Physical Assets | Toto Finance',
    description: 'Tokenized holmium by Toto Finance. 1:1 asset-backed holmium oxide tokens, always redeemable. In-Ground Holmium future delivery contracts. Instant stablecoin settlement.',
    images: ['https://totofinance.co/assets/images/og-preview.png'],
  },
  alternates: { canonical: 'https://totofinance.co/tokenized-holmium' },
};

export default function TokenizedHolmiumLayout({ children }: { children: ReactNode }) {
  return children;
}
