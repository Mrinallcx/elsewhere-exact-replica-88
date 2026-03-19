import { MetadataRoute } from 'next';
import { readFileSync } from 'fs';
import { join } from 'path';

function parseBlogSitemap(): MetadataRoute.Sitemap {
  try {
    const xml = readFileSync(
      join(process.cwd(), 'public', 'blog', 'sitemap.xml'),
      'utf-8'
    );
    const entries: MetadataRoute.Sitemap = [];
    const urlBlocks = xml.match(/<url>[\s\S]*?<\/url>/g) || [];

    for (const block of urlBlocks) {
      const loc = block.match(/<loc>(.*?)<\/loc>/)?.[1];
      const lastmod = block.match(/<lastmod>(.*?)<\/lastmod>/)?.[1];
      const changefreq = block.match(/<changefreq>(.*?)<\/changefreq>/)?.[1];
      const priority = block.match(/<priority>(.*?)<\/priority>/)?.[1];

      if (!loc) continue;

      const url = loc.replace(/\/$/, '');
      entries.push({
        url,
        lastModified: lastmod || undefined,
        changeFrequency: (changefreq as MetadataRoute.Sitemap[number]['changeFrequency']) || 'weekly',
        priority: priority ? parseFloat(priority) : 0.7,
      });
    }
    return entries;
  } catch {
    return [];
  }
}

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://totofinance.co';

  const mainPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: '2026-02-10',
      changeFrequency: 'daily',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/products`,
      lastModified: '2026-02-10',
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/toto-token`,
      lastModified: '2026-01-12',
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/ecosystem`,
      lastModified: '2026-02-13',
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/rare-earth-mineral`,
      lastModified: '2026-02-10',
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/tokenized-silver`,
      lastModified: '2026-02-17',
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/tokenized-gold`,
      lastModified: '2026-02-17',
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/tokenized-copper`,
      lastModified: '2026-02-17',
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/tokenized-tin`,
      lastModified: '2026-02-17',
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/tokenized-platinum`,
      lastModified: '2026-02-14',
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/tokenized-sapphire`,
      lastModified: '2026-02-14',
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/tokenized-diamonds`,
      lastModified: '2026-02-14',
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/tokenized-cerium`,
      lastModified: '2026-02-17',
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/tokenized-dysprosium`,
      lastModified: '2026-02-17',
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/tokenized-erbium`,
      lastModified: '2026-02-17',
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/tokenized-europium`,
      lastModified: '2026-02-17',
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/tokenized-gadolinium`,
      lastModified: '2026-02-17',
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/tokenized-holmium`,
      lastModified: '2026-02-17',
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/tokenized-lanthanum`,
      lastModified: '2026-02-17',
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/tokenized-lutetium`,
      lastModified: '2026-02-17',
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/tokenized-neodymium`,
      lastModified: '2026-02-14',
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/tokenized-praseodymium`,
      lastModified: '2026-02-17',
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/tokenized-promethium`,
      lastModified: '2026-02-17',
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/tokenized-samarium`,
      lastModified: '2026-02-17',
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/tokenized-scandium`,
      lastModified: '2026-02-17',
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/tokenized-terbium`,
      lastModified: '2026-02-17',
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/tokenized-thulium`,
      lastModified: '2026-02-17',
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/tokenized-ytterbium`,
      lastModified: '2026-02-17',
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/tokenized-yttrium`,
      lastModified: '2026-02-17',
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/tokenized-iron`,
      lastModified: '2026-02-24',
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/how-tokenization-works`,
      lastModified: '2026-02-24',
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/achievements`,
      lastModified: '2026-02-19',
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: '2026-02-20',
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/vision-2030`,
      lastModified: '2026-02-10',
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/careers`,
      lastModified: '2026-01-12',
      changeFrequency: 'weekly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/faq`,
      lastModified: '2026-01-12',
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/doc-imprint`,
      lastModified: '2026-02-13',
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${baseUrl}/privacy-policy`,
      lastModified: '2026-02-10',
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${baseUrl}/terms-and-condition`,
      lastModified: '2026-02-13',
      changeFrequency: 'yearly',
      priority: 0.3,
    },
  ];

  const blogEntries = parseBlogSitemap();

  return [...mainPages, ...blogEntries];
}

