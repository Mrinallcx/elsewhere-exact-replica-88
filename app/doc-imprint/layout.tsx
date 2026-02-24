import { ReactNode } from 'react';

export const metadata = {
  title: 'Legal Information & Imprint | Toto Finance AG',
  description: 'Legal information and company details for Toto Finance AG, a Liechtenstein-registered entity operating under the Blockchain Act (TVTG). LEI: 5299005UXAQFO3US5C38.',
  keywords: 'Toto Finance legal, Toto Finance AG, legal information Toto Finance, company imprint, Liechtenstein blockchain company, Blockchain Act Liechtenstein, TVTG, LEI 5299005UXAQFO3US5C38',
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
    title: 'Legal Information & Imprint | Toto Finance AG',
    description: 'Legal information and company details for Toto Finance AG, a Liechtenstein-registered entity operating under the Blockchain Act (TVTG). LEI: 5299005UXAQFO3US5C38.',
    url: 'https://totofinance.co/doc-imprint',
    siteName: 'Toto Finance',
    images: [
      {
        url: 'https://totofinance.co/assets/images/og-preview.png',
        width: 1200,
        height: 630,
        alt: 'Legal Information & Imprint | Toto Finance AG',
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
    title: 'Legal Information & Imprint | Toto Finance AG',
    description: 'Legal information and company details for Toto Finance AG, a Liechtenstein-registered entity operating under the Blockchain Act (TVTG). LEI: 5299005UXAQFO3US5C38.',
    images: [{ url: 'https://totofinance.co/assets/images/og-preview.png', width: 1200, height: 630, alt: 'Imprint | Toto Finance' }],
  },
  alternates: {
    canonical: 'https://totofinance.co/doc-imprint',
  },
};

export default function DocImprintLayout({
  children,
}: {
  children: ReactNode;
}) {
  return children;
}

