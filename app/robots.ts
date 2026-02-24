import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: ['/'],
      disallow: ['/account', '/upgrade', '/api/', '/_next/'],
    },
    sitemap: [
      'https://totofinance.co/sitemap.xml',
      'https://totofinance.co/blog/sitemap.xml',
    ],
  }
}
