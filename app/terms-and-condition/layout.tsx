import { ReactNode } from 'react';

export const metadata = {
  title: 'Sales Terms & Conditions — Toto Token & Assets | Toto Finance',
  description: 'Terms and conditions governing the sale, purchase, and use of the TOTO token and Toto Finance platform services.',
  keywords: 'Toto Finance terms and conditions, TOTO token sale terms, token purchase agreement, Toto Finance legal, utility token terms, KYC AML compliance',
  authors: [{ name: 'Toto Finance', url: 'https://totofinance.co' }],
  applicationName: 'Toto Finance',
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
    url: 'https://totofinance.co/terms-and-condition',
    siteName: 'Toto Finance',
    images: [
      {
        url: 'https://totofinance.co/assets/images/og-preview.png',
        width: 1200,
        height: 630,
        alt: 'Sales Terms & Conditions | Toto Finance',
        type: 'image/png',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@totofinance',
    creator: '@totofinance',
    title: 'Sales Terms & Conditions — Toto Token & Assets | Toto Finance',
    description: 'Terms and conditions governing the sale, purchase, and use of the TOTO token and Toto Finance platform services.',
    images: [{ url: 'https://totofinance.co/assets/images/og-preview.png', width: 1200, height: 630, alt: 'Terms & Conditions | Toto Finance' }],
  },
  alternates: {
    canonical: 'https://totofinance.co/terms-and-condition',
  },
};

export default function TermsOfServiceLayout({
  children,
}: {
  children: ReactNode;
}) {
  return children;
}
