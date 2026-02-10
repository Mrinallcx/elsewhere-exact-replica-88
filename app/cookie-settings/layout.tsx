import { ReactNode } from 'react';

export const metadata = {
  title: 'Cookie Settings | Toto Finance AG',
  description: 'Cookie settings and cookie policy for Toto Finance. Learn how we use cookies and manage your preferences.',
  keywords: 'Toto Finance cookie policy, cookie settings, cookies preferences, Toto Finance AG',
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
    title: 'Cookie Settings | Toto Finance AG',
    description: 'Cookie settings and cookie policy for Toto Finance. Learn how we use cookies and manage your preferences.',
    url: 'https://totofinance.co/cookie-settings',
    siteName: 'Toto Finance',
    images: [
      {
        url: 'https://totofinance.co/assets/images/og-preview.png',
        width: 1200,
        height: 630,
        alt: 'Cookie Settings | Toto Finance AG',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cookie Settings | Toto Finance AG',
    description: 'Cookie settings and cookie policy for Toto Finance. Learn how we use cookies and manage your preferences.',
    images: ['https://totofinance.co/assets/images/og-preview.png'],
  },
  alternates: {
    canonical: 'https://totofinance.co/cookie-settings',
  },
};

export default function CookieSettingsLayout({
  children,
}: {
  children: ReactNode;
}) {
  return children;
}
