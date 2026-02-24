import { ReactNode } from 'react';

export const metadata = {
  title: 'Tokenized Gold | Digital Gold Backed by Physical Bullion | Toto Finance',
  description: 'Tokenized gold by Toto Finance. 1:1 asset-backed gold bullion tokens, always redeemable. Physical gold vaulted in secure facilities. Instant settlement with stablecoins. 863 tonnes central bank buying in 2025. $5,000/oz forecast 2026.',
  keywords: 'tokenized gold, gold tokenization, buy tokenized gold, digital gold, gold-backed tokens, RWA gold, real world asset gold, physical gold tokens, gold instant settlement, DeFi gold, gold yield, gold collateral loans, blockchain gold',
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
    title: 'Tokenized Gold | Digital Gold Backed by Physical Bullion | Toto Finance',
    description: 'Tokenized gold by Toto Finance. 1:1 asset-backed gold bullion tokens, always redeemable. 863 tonnes central bank buying in 2025. $5,000/oz forecast 2026.',
    url: 'https://totofinance.co/tokenized-gold',
    siteName: 'Toto Finance',
    images: [
      {
        url: 'https://totofinance.co/assets/images/og-preview.png',
        width: 1200,
        height: 630,
        alt: 'Tokenized Gold | Toto Finance',
        type: 'image/png',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tokenized Gold | Digital Gold Backed by Physical Bullion | Toto Finance',
    description: 'Tokenized gold by Toto Finance. 1:1 asset-backed gold bullion tokens, always redeemable. 863 tonnes central bank buying in 2025. $5,000/oz forecast 2026.',
    images: [{ url: 'https://totofinance.co/assets/images/og-preview.png', width: 1200, height: 630, alt: 'Tokenized Gold | Toto Finance' }],
  },
  alternates: {
    canonical: 'https://totofinance.co/tokenized-gold',
  },
};

export default function TokenizedGoldLayout({
  children,
}: {
  children: ReactNode;
}) {
  return children;
}
