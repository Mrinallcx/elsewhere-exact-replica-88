import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://totofinance.co';

  return [
    // ─── Main Pages ───
    {
      url: baseUrl,
      lastModified: '2026-02-24',
      changeFrequency: 'daily',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/products`,
      lastModified: '2026-02-24',
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/toto-token`,
      lastModified: '2026-02-20',
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/ecosystem`,
      lastModified: '2026-02-15',
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/rare-earth-mineral`,
      lastModified: '2026-02-24',
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/how-tokenization-works`,
      lastModified: '2026-02-24',
      changeFrequency: 'monthly',
      priority: 0.85,
    },

    // ─── Flagship Tokenized Assets (highest priority) ───
    {
      url: `${baseUrl}/tokenized-gold`,
      lastModified: '2026-02-24',
      changeFrequency: 'weekly',
      priority: 0.85,
    },
    {
      url: `${baseUrl}/tokenized-silver`,
      lastModified: '2026-02-24',
      changeFrequency: 'weekly',
      priority: 0.85,
    },
    {
      url: `${baseUrl}/tokenized-platinum`,
      lastModified: '2026-02-24',
      changeFrequency: 'weekly',
      priority: 0.85,
    },
    {
      url: `${baseUrl}/tokenized-diamonds`,
      lastModified: '2026-02-24',
      changeFrequency: 'weekly',
      priority: 0.85,
    },

    // ─── Major Tokenized Assets ───
    {
      url: `${baseUrl}/tokenized-copper`,
      lastModified: '2026-02-24',
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/tokenized-tin`,
      lastModified: '2026-02-24',
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/tokenized-sapphire`,
      lastModified: '2026-02-24',
      changeFrequency: 'weekly',
      priority: 0.8,
    },

    // ─── Major Rare Earth Elements ───
    {
      url: `${baseUrl}/tokenized-cerium`,
      lastModified: '2026-02-24',
      changeFrequency: 'monthly',
      priority: 0.65,
    },
    {
      url: `${baseUrl}/tokenized-neodymium`,
      lastModified: '2026-02-24',
      changeFrequency: 'monthly',
      priority: 0.65,
    },
    {
      url: `${baseUrl}/tokenized-dysprosium`,
      lastModified: '2026-02-24',
      changeFrequency: 'monthly',
      priority: 0.65,
    },
    {
      url: `${baseUrl}/tokenized-lanthanum`,
      lastModified: '2026-02-24',
      changeFrequency: 'monthly',
      priority: 0.65,
    },
    {
      url: `${baseUrl}/tokenized-praseodymium`,
      lastModified: '2026-02-24',
      changeFrequency: 'monthly',
      priority: 0.65,
    },

    // ─── Niche Rare Earth Elements ───
    {
      url: `${baseUrl}/tokenized-erbium`,
      lastModified: '2026-02-24',
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      url: `${baseUrl}/tokenized-europium`,
      lastModified: '2026-02-24',
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      url: `${baseUrl}/tokenized-gadolinium`,
      lastModified: '2026-02-24',
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      url: `${baseUrl}/tokenized-holmium`,
      lastModified: '2026-02-24',
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      url: `${baseUrl}/tokenized-lutetium`,
      lastModified: '2026-02-24',
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      url: `${baseUrl}/tokenized-promethium`,
      lastModified: '2026-02-24',
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      url: `${baseUrl}/tokenized-samarium`,
      lastModified: '2026-02-24',
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      url: `${baseUrl}/tokenized-scandium`,
      lastModified: '2026-02-24',
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      url: `${baseUrl}/tokenized-terbium`,
      lastModified: '2026-02-24',
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      url: `${baseUrl}/tokenized-thulium`,
      lastModified: '2026-02-24',
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      url: `${baseUrl}/tokenized-ytterbium`,
      lastModified: '2026-02-24',
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      url: `${baseUrl}/tokenized-yttrium`,
      lastModified: '2026-02-24',
      changeFrequency: 'monthly',
      priority: 0.5,
    },

    // ─── Secondary Pages ───
    {
      url: `${baseUrl}/achievements`,
      lastModified: '2026-02-10',
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: '2026-02-10',
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
      lastModified: '2026-02-15',
      changeFrequency: 'weekly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/faq`,
      lastModified: '2026-02-10',
      changeFrequency: 'monthly',
      priority: 0.6,
    },

    // ─── Legal Pages ───
    {
      url: `${baseUrl}/doc-imprint`,
      lastModified: '2026-01-01',
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${baseUrl}/privacy-policy`,
      lastModified: '2026-01-01',
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${baseUrl}/terms-and-condition`,
      lastModified: '2026-01-01',
      changeFrequency: 'yearly',
      priority: 0.3,
    },

    // ─── Blog ───
    {
      url: `${baseUrl}/blog`,
      lastModified: '2026-02-24',
      changeFrequency: 'weekly',
      priority: 0.7,
    },
  ];
}
