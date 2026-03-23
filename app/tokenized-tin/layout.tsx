import { ReactNode } from 'react';

const PAGE_DESCRIPTION =
  'The world is running out of the metal that holds every AI server together. Toto Finance exists to make tin ownership borderless, instant, and fair from 1:1 redeemable ingot tokens to In-Ground future delivery contracts. Settle in stablecoins. Trade on DeFi. Own the metal inside every chip.';

export const metadata = {
  title: 'Tokenized Tin | Digital Tin Backed by Physical Assets | Toto Finance',
  description: PAGE_DESCRIPTION,
  keywords:
    'tokenized tin, tin tokenization, buy tokenized tin, digital tin, tin-backed tokens, RWA tin, in-ground tin, tin ingot token, tin future delivery, tin instant settlement, tin solder AI, DeFi tin, tin yield, tin collateral loans, tin semiconductor',
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
    description: PAGE_DESCRIPTION,
    url: 'https://totofinance.co/tokenized-tin',
    siteName: 'Toto Finance',
    images: [
      {
        url: 'https://totofinance.co/assets/images/og-preview.png',
        width: 1200,
        height: 630,
        alt: 'Tokenized Tin | Toto Finance',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tokenized Tin | Digital Tin Backed by Physical Assets | Toto Finance',
    description: PAGE_DESCRIPTION,
    images: ['https://totofinance.co/assets/images/og-preview.png'],
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
