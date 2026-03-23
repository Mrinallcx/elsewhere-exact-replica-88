import { ReactNode } from 'react';

const PAGE_TITLE = 'Tokenized Scandium | Digital Rare Earth Backed by Physical Assets | Toto Finance';
const PAGE_DESCRIPTION =
  'Add 0.15% scandium to aluminum and strength triples while weight drops 20%. Toto Finance brings the aerospace alloy revolution on-chain from 1:1 redeemable oxide tokens to In-Ground future delivery contracts. The element every aircraft manufacturer wants but cannot source at scale. Instant stablecoin settlement. DeFi secondary markets.';
const KEYWORDS =
  'tokenized scandium, scandium tokenization, buy tokenized scandium, digital scandium, scandium-backed tokens, RWA scandium, real world asset scandium, in-ground scandium, scandium future delivery, scandium oxide token, scandium instant settlement, DeFi scandium, scandium yield, scandium collateral loans, aluminum-scandium alloys, aerospace scandium, solid oxide fuel cell scandium, ScAlMg alloy';

export const metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  keywords: KEYWORDS,
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
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    url: 'https://totofinance.co/tokenized-scandium',
    siteName: 'Toto Finance',
    images: [
      {
        url: 'https://totofinance.co/assets/images/og-preview.png',
        width: 1200,
        height: 630,
        alt: 'Tokenized Scandium | Toto Finance',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    images: ['https://totofinance.co/assets/images/og-preview.png'],
  },
  alternates: {
    canonical: 'https://totofinance.co/tokenized-scandium',
  },
};

export default function TokenizedScandiumLayout({ children }: { children: ReactNode }) {
  return children;
}
