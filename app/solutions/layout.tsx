import { ReactNode } from 'react';

export const metadata = {
  title: 'Enterprise Tokenization Solutions | Toto Finance',
  description: 'Enterprise-grade tokenization solutions for real-world assets. Comprehensive infrastructure with compliance, security, and trading capabilities.',
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

export default function SolutionsLayout({
  children,
}: {
  children: ReactNode;
}) {
  return children;
}
