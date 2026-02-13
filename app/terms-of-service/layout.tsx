import { ReactNode } from 'react';

export const metadata = {
  title: 'Sales Terms & Conditions — Toto Token & Assets | Toto Finance',
  description: 'Terms and conditions governing the sale, purchase, and use of the TOTO token and Toto Finance platform services.',
  keywords: 'Toto Finance terms and conditions, TOTO token sale terms, token purchase agreement, Toto Finance legal, utility token terms, KYC AML compliance',
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
    title: 'Sales Terms & Conditions — Toto Token & Assets | Toto Finance',
    description: 'Terms and conditions governing the sale, purchase, and use of the TOTO token and Toto Finance platform services.',
    url: 'https://totofinance.co/terms-of-service',
    siteName: 'Toto Finance',
    images: [
      {
        url: 'https://totofinance.co/assets/images/og-preview.png',
        width: 1200,
        height: 630,
        alt: 'Sales Terms & Conditions | Toto Finance',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sales Terms & Conditions — Toto Token & Assets | Toto Finance',
    description: 'Terms and conditions governing the sale, purchase, and use of the TOTO token and Toto Finance platform services.',
    images: ['https://totofinance.co/assets/images/og-preview.png'],
  },
  alternates: {
    canonical: 'https://totofinance.co/terms-of-service',
  },
};

export default function TermsOfServiceLayout({
  children,
}: {
  children: ReactNode;
}) {
  return children;
}
