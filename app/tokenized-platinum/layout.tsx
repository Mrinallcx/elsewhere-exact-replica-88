import { ReactNode } from 'react';

const PAGE_TITLE = 'Tokenized Platinum | Invest in Rare Platinum On Chain | Toto Finance';
const PAGE_DESCRIPTION =
  'Invest in tokenized platinum backed by real, vault stored metal. Trade 24/7, redeem for physical delivery, and enjoy full on chain transparency on Toto Finance.';
const KEYWORDS =
  'tokenized platinum, buy tokenized platinum, platinum backed tokens, platinum tokenization, invest platinum blockchain, digital platinum ownership, platinum investment, physical platinum tokens';

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
    url: 'https://totofinance.co/tokenized-platinum',
    siteName: 'Toto Finance',
    images: [
      {
        url: 'https://totofinance.co/assets/images/og-preview.png',
        width: 1200,
        height: 630,
        alt: 'Tokenized Platinum | Toto Finance',
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
    canonical: 'https://totofinance.co/tokenized-platinum',
  },
};

export default function TokenizedPlatinumLayout({ children }: { children: ReactNode }) {
  return children;
}
