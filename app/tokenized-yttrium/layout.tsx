import { ReactNode } from 'react';

export const metadata = {
  title: 'Tokenized Yttrium | Digital Rare Earth Backed by Physical Assets | Toto Finance',
  description: 'Tokenized yttrium by Toto Finance. 1:1 asset-backed rare earth metal tokens, always redeemable. In-Ground Yttrium future delivery contracts (1-12 months and 1-6 years). Instant settlement with stablecoins. The critical element for lasers, superconductors, and LED phosphors.',
  keywords: 'tokenized yttrium, yttrium tokenization, buy tokenized yttrium, digital rare earth, yttrium-backed tokens, RWA rare earth, real world asset yttrium, in-ground yttrium, yttrium future delivery, yttrium metal token, yttrium instant settlement, DeFi rare earth, yttrium yield, yttrium collateral loans, YAG lasers',
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
    title: 'Tokenized Yttrium | Digital Rare Earth Backed by Physical Assets | Toto Finance',
    description: 'Tokenized yttrium by Toto Finance. 1:1 asset-backed rare earth metal tokens, always redeemable. In-Ground Yttrium future delivery contracts. Instant stablecoin settlement.',
    url: 'https://totofinance.co/tokenized-yttrium',
    siteName: 'Toto Finance',
    images: [{ url: 'https://totofinance.co/assets/images/og-preview.png', width: 1200, height: 630, alt: 'Tokenized Yttrium | Toto Finance' }],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@totofinance',
    creator: '@totofinance',
    title: 'Tokenized Yttrium | Digital Rare Earth Backed by Physical Assets | Toto Finance',
    description: 'Tokenized yttrium by Toto Finance. 1:1 asset-backed rare earth metal tokens, always redeemable. In-Ground Yttrium future delivery contracts. Instant stablecoin settlement.',
    images: [{ url: 'https://totofinance.co/assets/images/og-preview.png', width: 1200, height: 630, alt: 'Tokenized Yttrium | Toto Finance' }],
  },
  alternates: { canonical: 'https://totofinance.co/tokenized-yttrium' },
};

export default function TokenizedYttriumLayout({ children }: { children: ReactNode }) {
  return children;
}
