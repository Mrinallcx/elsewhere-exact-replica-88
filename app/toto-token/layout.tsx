import { ReactNode } from 'react';

export const metadata = {
  title: '$TOTO Token - RWA Utility Token | Toto Finance',
  description: 'The $TOTO Token is the universal utility powering asset-backed tokenization on Toto Finance - required for minting, settlement, fees, staking, and liquidity across global commodity markets.',
  keywords: 'TOTO token, utility token for tokenization, asset-backed tokenization utility, tokenization infrastructure token, real-world asset tokenization, tokenized commodities infrastructure, on-chain settlement token, tokenization fees token, staking utility token, liquidity utility token, RWA infrastructure token, commodity tokenization platform token, digital ownership infrastructure, institutional tokenization utility, Liechtenstein compliant token, LCX ecosystem token, asset-backed digital infrastructure',
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
    title: '$TOTO Token - RWA Utility Token | Toto Finance',
    description: 'The $TOTO Token is the universal utility powering asset-backed tokenization on Toto Finance - required for minting, settlement, fees, staking, and liquidity across global commodity markets.',
    url: 'https://totofinance.co/toto-token',
    siteName: 'Toto Finance',
    images: [
      {
        url: 'https://totofinance.co/assets/images/og-preview.png',
        width: 1200,
        height: 630,
        alt: '$TOTO Token - RWA Utility Token | Toto Finance',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '$TOTO Token - RWA Utility Token | Toto Finance',
    description: 'The $TOTO Token is the universal utility powering asset-backed tokenization on Toto Finance - required for minting, settlement, fees, staking, and liquidity across global commodity markets.',
    images: ['https://totofinance.co/assets/images/og-preview.png'],
  },
  alternates: {
    canonical: 'https://totofinance.co/toto-token',
  },
};

export default function TotoTokenLayout({
  children,
}: {
  children: ReactNode;
}) {
  return children;
}

