import { ReactNode } from 'react';

const PAGE_TITLE = 'Tokenized Sapphires | Own Certified Rare Sapphires | Toto Finance';
const PAGE_DESCRIPTION =
  "Invest in tokenized sapphires backed by real, certified, unheated Sri Lankan gems. Fully insured by Lloyd's of London with on chain transparency on Toto Finance.";
const KEYWORDS =
  'tokenized sapphires, buy tokenized sapphires, sapphire tokenization, sapphire investment, certified sapphire blockchain, unheated sapphire investment, digital gemstone ownership, sapphire backed NFT';

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
    url: 'https://totofinance.co/tokenized-sapphire',
    siteName: 'Toto Finance',
    images: [
      {
        url: 'https://totofinance.co/assets/images/og-preview.png',
        width: 1200,
        height: 630,
        alt: 'Tokenized Sapphires | Toto Finance',
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
    canonical: 'https://totofinance.co/tokenized-sapphire',
  },
};

export default function TokenizedSapphireLayout({ children }: { children: ReactNode }) {
  return children;
}
