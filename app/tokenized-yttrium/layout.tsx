import { ReactNode } from 'react';

const PAGE_DESCRIPTION =
  'Every white LED on Earth emits light through yttrium phosphors. Every jet engine turbine blade survives 1,200°C behind yttrium thermal coatings. Every industrial YAG laser cuts metal with yttrium crystals. Toto Finance brings the $2.9 billion backbone element on-chain from 1:1 redeemable oxide tokens to In-Ground future delivery contracts. 95% China-controlled. 12,000-tonne deficit by 2030. Instant stablecoin settlement. DeFi secondary markets.';

export const metadata = {
  title: 'Tokenized Yttrium | Digital Rare Earth Backed by Physical Assets | Toto Finance',
  description: PAGE_DESCRIPTION,
  keywords:
    'tokenized yttrium, yttrium tokenization, buy tokenized yttrium, digital yttrium, yttrium-backed tokens, RWA yttrium, real world asset yttrium, in-ground yttrium, yttrium future delivery, yttrium oxide token, yttrium instant settlement, DeFi yttrium, yttrium yield, yttrium collateral loans, YAG laser yttrium, LED phosphor yttrium, yttria-stabilized zirconia, YBCO superconductor yttrium, thermal barrier coating rare earth, Y-90 cancer therapy yttrium',
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
    description: PAGE_DESCRIPTION,
    url: 'https://totofinance.co/tokenized-yttrium',
    siteName: 'Toto Finance',
    images: [
      {
        url: 'https://totofinance.co/assets/images/og-preview.png',
        width: 1200,
        height: 630,
        alt: 'Tokenized Yttrium | Toto Finance',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tokenized Yttrium | Digital Rare Earth Backed by Physical Assets | Toto Finance',
    description: PAGE_DESCRIPTION,
    images: ['https://totofinance.co/assets/images/og-preview.png'],
  },
  alternates: {
    canonical: 'https://totofinance.co/tokenized-yttrium',
  },
};

export default function TokenizedYttriumLayout({
  children,
}: {
  children: ReactNode;
}) {
  return children;
}
