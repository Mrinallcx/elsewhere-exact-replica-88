import { ReactNode } from 'react';

export const metadata = {
  title: 'Tokenized Silver | Digital Silver Backed by Physical Bullion | Toto Finance',
  description: 'Tokenized silver by Toto Finance. 1:1 asset-backed silver bullion tokens, always redeemable. Fifth consecutive year of supply deficit. 120M oz deficit 2025. Industrial demand at record highs. Solar, EV, AI driving demand through 2030.',
  keywords: 'tokenized silver, silver tokenization, buy tokenized silver, digital silver, silver-backed tokens, RWA silver, real world asset silver, physical silver tokens, silver instant settlement, DeFi silver, silver yield, silver collateral loans, blockchain silver',
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
    title: 'Tokenized Silver | Digital Silver Backed by Physical Bullion | Toto Finance',
    description: 'Tokenized silver by Toto Finance. 1:1 asset-backed silver bullion tokens, always redeemable. Fifth consecutive year of supply deficit. 120M oz deficit 2025. Industrial demand at record highs.',
    url: 'https://totofinance.co/tokenized-silver',
    siteName: 'Toto Finance',
    images: [
      {
        url: 'https://totofinance.co/assets/images/og-preview.png',
        width: 1200,
        height: 630,
        alt: 'Tokenized Silver | Toto Finance',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tokenized Silver | Digital Silver Backed by Physical Bullion | Toto Finance',
    description: 'Tokenized silver by Toto Finance. 1:1 asset-backed silver bullion tokens, always redeemable. Fifth consecutive year of supply deficit. Industrial demand at record highs.',
    images: ['https://totofinance.co/assets/images/og-preview.png'],
  },
  alternates: {
    canonical: 'https://totofinance.co/tokenized-silver',
  },
};

export default function TokenizedSilverLayout({
  children,
}: {
  children: ReactNode;
}) {
  return children;
}
