import { ReactNode } from 'react';

const PAGE_DESCRIPTION =
  'Every industrial fiber laser cutting metal in every factory on Earth runs on ytterbium. Toto Finance brings the manufacturing laser element on-chain from 1:1 redeemable oxide tokens to In-Ground future delivery contracts. The element powering 65% of metal cutting, atomic clocks, and quantum computing qubits. Instant stablecoin settlement. DeFi secondary markets.';

export const metadata = {
  title: 'Tokenized Ytterbium | Digital Rare Earth Backed by Physical Assets | Toto Finance',
  description: PAGE_DESCRIPTION,
  keywords:
    'tokenized ytterbium, ytterbium tokenization, buy tokenized ytterbium, digital ytterbium, ytterbium-backed tokens, RWA ytterbium, real world asset ytterbium, in-ground ytterbium, ytterbium future delivery, ytterbium oxide token, ytterbium instant settlement, DeFi ytterbium, ytterbium yield, ytterbium collateral loans, ytterbium fiber lasers, Yb:YAG laser, atomic clock ytterbium, quantum computing ytterbium, industrial laser rare earth',
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
    title: 'Tokenized Ytterbium | Digital Rare Earth Backed by Physical Assets | Toto Finance',
    description: PAGE_DESCRIPTION,
    url: 'https://totofinance.co/tokenized-ytterbium',
    siteName: 'Toto Finance',
    images: [
      {
        url: 'https://totofinance.co/assets/images/og-preview.png',
        width: 1200,
        height: 630,
        alt: 'Tokenized Ytterbium | Toto Finance',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tokenized Ytterbium | Digital Rare Earth Backed by Physical Assets | Toto Finance',
    description: PAGE_DESCRIPTION,
    images: ['https://totofinance.co/assets/images/og-preview.png'],
  },
  alternates: {
    canonical: 'https://totofinance.co/tokenized-ytterbium',
  },
};

export default function TokenizedYtterbiumLayout({
  children,
}: {
  children: ReactNode;
}) {
  return children;
}
