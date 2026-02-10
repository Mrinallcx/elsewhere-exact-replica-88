import { ReactNode } from 'react';

export const metadata = {
  title: 'Privacy Policy | Toto Finance Inc.',
  description: 'Privacy policy for Toto Finance Inc. How we collect, use, and protect your personal data when you use our website and services.',
  keywords: 'Toto Finance privacy policy, data protection, personal data, GDPR, privacy Toto Finance Inc.',
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
    title: 'Privacy Policy | Toto Finance Inc.',
    description: 'Privacy policy for Toto Finance Inc. How we collect, use, and protect your personal data when you use our website and services.',
    url: 'https://totofinance.co/privacy-policy',
    siteName: 'Toto Finance',
    images: [
      {
        url: 'https://totofinance.co/assets/images/og-preview.png',
        width: 1200,
        height: 630,
        alt: 'Privacy Policy | Toto Finance Inc.',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Privacy Policy | Toto Finance Inc.',
    description: 'Privacy policy for Toto Finance Inc. How we collect, use, and protect your personal data when you use our website and services.',
    images: ['https://totofinance.co/assets/images/og-preview.png'],
  },
  alternates: {
    canonical: 'https://totofinance.co/privacy-policy',
  },
};

export default function PrivacyPolicyLayout({
  children,
}: {
  children: ReactNode;
}) {
  return children;
}
