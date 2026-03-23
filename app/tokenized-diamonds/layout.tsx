import { ReactNode } from 'react';

const PAGE_TITLE =
  'Tokenized Diamonds | Buy, Trade & Own Real Diamonds | Toto Finance';
const PAGE_DESCRIPTION =
  'Access the largest tokenized diamonds marketplace. Buy blockchain backed, GIA certified diamonds with full transparency, insurance, and true digital ownership.';
const KEYWORDS =
  'tokenized diamonds, buy tokenized diamonds, diamond tokenization, blockchain diamonds, diamond investment, certified diamonds blockchain, digital diamond ownership, diamond backed tokens';

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
    url: 'https://totofinance.co/tokenized-diamonds',
    siteName: 'Toto Finance',
    images: [
      {
        url: 'https://totofinance.co/assets/images/og-preview.png',
        width: 1200,
        height: 630,
        alt: 'Tokenized Diamonds | Toto Finance',
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
    canonical: 'https://totofinance.co/tokenized-diamonds',
  },
};

export default function TokenizedDiamondsLayout({
  children,
}: {
  children: ReactNode;
}) {
  return children;
}
