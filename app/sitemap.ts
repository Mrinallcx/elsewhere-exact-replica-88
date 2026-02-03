import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://totofinance.co';
  const currentDate = new Date().toISOString();

  // FAQ Categories (anchor links for better SEO)
  const faqCategories = [
    'general-overview',
    'platform-process',
    'toto-token',
    'roadmap-launch',
    'user-experience',
    'compliance-regulation',
    'getting-started',
    'asset',
  ];

  // FAQ Asset Subcategories
  const faqAssetSubcategories = [
    'diamonds',
    'gold',
    'platinum',
    'sapphire',
    'silver',
  ];

  // Product Sections (anchor links)
  const productSections = [
    'institutional-section',
    'product-navigation',
  ];

  return [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: 'daily',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/products`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/toto-token`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/ecosystem`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/rare-earth-mineral`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/vision-2030`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/careers`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/faq`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/doc-imprint`,
      lastModified: currentDate,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.7,
    },

    // FAQ Category Anchor Links (for better SEO indexing of FAQ sections)
    ...faqCategories.map((category) => ({
      url: `${baseUrl}/faq#${category}`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.4,
    })),
    
    // FAQ Asset Subcategory Anchor Links
    ...faqAssetSubcategories.map((subcategory) => ({
      url: `${baseUrl}/faq#asset-${subcategory}`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.3,
    })),
    
    // Product Section Anchor Links
    ...productSections.map((section) => ({
      url: `${baseUrl}/products#${section}`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.5,
    })),
    
    // Note: External blog URL removed - should have separate sitemap
    // If you want to include external blog posts, add them here or create a separate sitemap
  ];
}

