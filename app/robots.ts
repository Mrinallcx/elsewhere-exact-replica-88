import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: ['/', '/_next/*'],
      disallow: ['/account', '/upgrade', '/api/'],
    },
    sitemap: 'https://totofinance.co/sitemap.xml',
  }
}
