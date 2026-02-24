import { ReactNode } from 'react';

export const metadata = {
  title: 'Renewable Energy Tokenization | Toto Finance',
  description: 'Institutional-grade renewable energy tokenization. Bridge real-world assets, verified carbon credits, and ESG value with blockchain.',
  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false,
    },
  },
  alternates: {
    canonical: 'https://totofinance.co/products',
  },
};

export default function GetLayout({
  children,
}: {
  children: ReactNode;
}) {
  return children;
}
