import { ReactNode } from 'react';

export const metadata = {
  title: 'Tokenized Tin | Digital Tin Backed by Physical Assets | Toto Finance',
  description: 'Tokenized tin by Toto Finance. 1:1 asset-backed tin ingot tokens, always redeemable. In-Ground Tin future delivery contracts (1-12 months and 1-6 years). Instant settlement with stablecoins. Every solder joint in every AI server.',
  keywords: 'tokenized tin, tin tokenization, buy tokenized tin, digital tin, tin-backed tokens, RWA tin, in-ground tin, tin ingot token, tin future delivery, tin instant settlement, tin solder AI, DeFi tin, tin yield, tin collateral loans, tin semiconductor',
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
    title: 'Tokenized Tin | Digital Tin Backed by Physical Assets | Toto Finance',
    description: 'Tokenized tin by Toto Finance. 1:1 asset-backed tin ingot tokens, always redeemable. In-Ground Tin future delivery contracts. Every solder joint in every AI server.',
    url: 'https://totofinance.co/tokenized-tin',
    siteName: 'Toto Finance',
    images: [
      {
        url: 'https://totofinance.co/assets/images/og-preview.png',
        width: 1200,
        height: 630,
        alt: 'Tokenized Tin | Toto Finance',
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
    title: 'Tokenized Tin | Digital Tin Backed by Physical Assets | Toto Finance',
    description: 'Tokenized tin by Toto Finance. 1:1 asset-backed tin ingot tokens, always redeemable. In-Ground Tin future delivery contracts. The silent metal powering AI.',
    images: [{ url: 'https://totofinance.co/assets/images/og-preview.png', width: 1200, height: 630, alt: 'Tokenized Tin | Toto Finance' }],
  },
  alternates: {
    canonical: 'https://totofinance.co/tokenized-tin',
  },
};

export default function TokenizedTinLayout({
  children,
}: {
  children: ReactNode;
}) {
  return children;
}
