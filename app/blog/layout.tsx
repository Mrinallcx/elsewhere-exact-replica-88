import { ReactNode } from 'react';

export const metadata = {
  title: 'Blog | Toto Finance - Insights on Tokenized Commodities & Real-World Assets',
  description:
    'Read the latest from Toto Finance on tokenized commodities, real-world assets, gold, silver, and the future of asset-backed tokenization.',
  openGraph: {
    title: 'Blog | Toto Finance - Insights on Tokenized Commodities & Real-World Assets',
    url: 'https://totofinance.co/blog',
    siteName: 'Toto Finance',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Blog | Toto Finance',
  },
};

export default function BlogLayout({ children }: { children: ReactNode }) {
  return children;
}
