/**
 * Shared SEO defaults for consistent meta and JSON-LD across all pages.
 * Aligns with best practices (e.g. MasterDEX-style): author, application name,
 * Twitter site/creator, OG image type, robots.
 */
export const SEO_DEFAULTS = {
  authors: [{ name: 'Toto Finance', url: 'https://totofinance.co' }] as const,
  applicationName: 'Toto Finance' as const,
  twitter: {
    card: 'summary_large_image' as const,
    site: '@totofinance' as const,
    creator: '@totofinance' as const,
  },
  openGraphImageType: 'image/png' as const,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large' as const,
      'max-snippet': -1,
    },
  },
};
