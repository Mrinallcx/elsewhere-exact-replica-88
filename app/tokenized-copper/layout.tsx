import { ReactNode } from 'react';

export const metadata = {
  title: 'Tokenized Copper | Digital Copper Backed by Physical Assets | Toto Finance',
  description: 'Tokenized copper by Toto Finance. 1:1 asset-backed copper cathode tokens, always redeemable. In-Ground Copper future delivery contracts (1-12 months and 1-6 years). Instant settlement with stablecoins. The new oil of the AI era.',
  keywords: 'tokenized copper, copper tokenization, buy tokenized copper, digital copper, copper-backed tokens, RWA copper, real world asset copper, in-ground copper, copper future delivery, copper cathode token, copper instant settlement, DeFi copper, copper yield, copper collateral loans',
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
    title: 'Tokenized Copper | Digital Copper Backed by Physical Assets | Toto Finance',
    description: 'Tokenized copper by Toto Finance. 1:1 asset-backed copper cathode tokens, always redeemable. In-Ground Copper future delivery contracts. Instant settlement with stablecoins.',
    url: 'https://totofinance.co/tokenized-copper',
    siteName: 'Toto Finance',
    images: [
      {
        url: 'https://totofinance.co/assets/images/og-preview.png',
        width: 1200,
        height: 630,
        alt: 'Tokenized Copper | Toto Finance',
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
    title: 'Tokenized Copper | Digital Copper Backed by Physical Assets | Toto Finance',
    description: 'Tokenized copper by Toto Finance. 1:1 asset-backed copper cathode tokens, always redeemable. In-Ground Copper future delivery contracts. The new oil of the AI era.',
    images: [{ url: 'https://totofinance.co/assets/images/og-preview.png', width: 1200, height: 630, alt: 'Tokenized Copper | Toto Finance' }],
  },
  alternates: {
    canonical: 'https://totofinance.co/tokenized-copper',
  },
};

export default function TokenizedCopperLayout({
  children,
}: {
  children: ReactNode;
}) {
  return children;
}
