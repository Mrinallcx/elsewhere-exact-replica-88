import { ReactNode } from 'react';

export const metadata = {
  title: 'Tokenized Promethium | Radioactive Rare Earth for Nuclear & Space Power | Toto Finance',
  description: 'Tokenized promethium by Toto Finance. 1:1 asset-backed promethium isotope tokens, always redeemable. In-Ground Promethium future delivery contracts (1-12 months and 1-6 years). Instant settlement with stablecoins. The only radioactive rare earth for nuclear batteries, space power, and specialized applications.',
  keywords: 'tokenized promethium, promethium tokenization, buy tokenized promethium, digital promethium, promethium-backed tokens, RWA promethium, real world asset promethium, in-ground promethium, promethium future delivery, promethium isotope token, promethium instant settlement, DeFi promethium, promethium yield, promethium collateral loans, nuclear batteries',
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
    title: 'Tokenized Promethium | Radioactive Rare Earth for Nuclear & Space Power | Toto Finance',
    description: 'Tokenized promethium by Toto Finance. 1:1 asset-backed promethium isotope tokens, always redeemable. In-Ground Promethium future delivery contracts. Instant stablecoin settlement.',
    url: 'https://totofinance.co/tokenized-promethium',
    siteName: 'Toto Finance',
    images: [{ url: 'https://totofinance.co/assets/images/og-preview.png', width: 1200, height: 630, alt: 'Tokenized Promethium | Toto Finance' }],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tokenized Promethium | Radioactive Rare Earth for Nuclear & Space Power | Toto Finance',
    description: 'Tokenized promethium by Toto Finance. 1:1 asset-backed promethium isotope tokens, always redeemable. In-Ground Promethium future delivery contracts. Instant stablecoin settlement.',
    images: ['https://totofinance.co/assets/images/og-preview.png'],
  },
  alternates: { canonical: 'https://totofinance.co/tokenized-promethium' },
};

export default function TokenizedPromethiumLayout({ children }: { children: ReactNode }) {
  return children;
}
