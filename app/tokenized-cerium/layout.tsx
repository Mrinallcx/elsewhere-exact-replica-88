import { ReactNode } from 'react';

export const metadata = {
  title: 'Tokenized Cerium | Critical Catalyst for Clean Emissions | Toto Finance',
  description: 'Tokenized cerium by Toto Finance. 1:1 asset-backed cerium oxide tokens, always redeemable. In-Ground Cerium future delivery contracts (1-12 months and 1-6 years). Instant settlement with stablecoins. The critical element for catalytic converters, glass polishing, and diesel fuel additives.',
  keywords: 'tokenized cerium, cerium tokenization, buy tokenized cerium, digital cerium, cerium-backed tokens, RWA cerium, real world asset cerium, in-ground cerium, cerium future delivery, cerium oxide token, cerium instant settlement, DeFi cerium, cerium yield, cerium collateral loans, catalytic converters',
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
    title: 'Tokenized Cerium | Critical Catalyst for Clean Emissions | Toto Finance',
    description: 'Tokenized cerium by Toto Finance. 1:1 asset-backed cerium oxide tokens, always redeemable. In-Ground Cerium future delivery contracts. Instant stablecoin settlement.',
    url: 'https://totofinance.co/tokenized-cerium',
    siteName: 'Toto Finance',
    images: [
      {
        url: 'https://totofinance.co/assets/images/og-preview.png',
        width: 1200,
        height: 630,
        alt: 'Tokenized Cerium | Toto Finance',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tokenized Cerium | Critical Catalyst for Clean Emissions | Toto Finance',
    description: 'Tokenized cerium by Toto Finance. 1:1 asset-backed cerium oxide tokens, always redeemable. In-Ground Cerium future delivery contracts. Instant stablecoin settlement.',
    images: ['https://totofinance.co/assets/images/og-preview.png'],
  },
  alternates: {
    canonical: 'https://totofinance.co/tokenized-cerium',
  },
};

export default function TokenizedCeriumLayout({
  children,
}: {
  children: ReactNode;
}) {
  return children;
}
