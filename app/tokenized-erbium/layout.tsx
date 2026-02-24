import { ReactNode } from 'react';

export const metadata = {
  title: 'Tokenized Erbium | Digital Rare Earth Backed by Physical Assets | Toto Finance',
  description: 'Tokenized erbium by Toto Finance. 1:1 asset-backed erbium oxide tokens, always redeemable. In-Ground Erbium future delivery contracts (1-12 months and 1-6 years). Instant settlement with stablecoins. The critical element for fiber optic amplifiers, medical lasers, and nuclear technology.',
  keywords: 'tokenized erbium, erbium tokenization, buy tokenized erbium, digital erbium, erbium-backed tokens, RWA erbium, real world asset erbium, in-ground erbium, erbium future delivery, erbium oxide token, erbium instant settlement, DeFi erbium, erbium yield, erbium collateral loans, fiber optic amplifiers',
  authors: [{ name: 'Toto Finance', url: 'https://totofinance.co' }],
  applicationName: 'Toto Finance',
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
    title: 'Tokenized Erbium | Digital Rare Earth Backed by Physical Assets | Toto Finance',
    description: 'Tokenized erbium by Toto Finance. 1:1 asset-backed erbium oxide tokens, always redeemable. In-Ground Erbium future delivery contracts. Instant stablecoin settlement.',
    url: 'https://totofinance.co/tokenized-erbium',
    siteName: 'Toto Finance',
    images: [
      {
        url: 'https://totofinance.co/assets/images/og-preview.png',
        width: 1200,
        height: 630,
        alt: 'Tokenized Erbium | Toto Finance',
        type: 'image/png',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@totofinance',
    creator: '@totofinance',
    title: 'Tokenized Erbium | Digital Rare Earth Backed by Physical Assets | Toto Finance',
    description: 'Tokenized erbium by Toto Finance. 1:1 asset-backed erbium oxide tokens, always redeemable. In-Ground Erbium future delivery contracts. Instant stablecoin settlement.',
    images: [{ url: 'https://totofinance.co/assets/images/og-preview.png', width: 1200, height: 630, alt: 'Tokenized Erbium | Toto Finance' }],
  },
  alternates: {
    canonical: 'https://totofinance.co/tokenized-erbium',
  },
};

export default function TokenizedErbiumLayout({
  children,
}: {
  children: ReactNode;
}) {
  return children;
}
