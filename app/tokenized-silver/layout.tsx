import { ReactNode } from 'react';

const PAGE_TITLE = 'Tokenized Silver | Invest in Real Silver On Chain | Toto Finance';
const PAGE_DESCRIPTION =
  'Buy tokenized silver backed 1:1 by vault stored physical bars. Trade 24/7, enjoy full blockchain transparency, and redeem for physical delivery on Toto Finance.';
const KEYWORDS =
  'tokenized silver, buy tokenized silver, silver backed tokens, silver tokenization, invest silver blockchain, digital silver ownership, silver backed crypto, physical silver tokens, silver NFT';

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
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    images: ['https://totofinance.co/assets/images/og-preview.png'],
  },
  alternates: {
    canonical: 'https://totofinance.co/tokenized-silver',
  },
};

export default function TokenizedSilverLayout({ children }: { children: ReactNode }) {
  return children;
}
