interface BreadcrumbItem {
  name: string;
  item: string;
}

interface PageStructuredDataProps {
  title: string;
  description: string;
  url: string;
  pageType?: 'WebPage' | 'CollectionPage' | 'AboutPage' | 'FAQPage' | 'ItemPage';
  image?: string;
  datePublished?: string; // ISO date format
  dateModified?: string; // ISO date format
  breadcrumbItems?: BreadcrumbItem[];
  /** E-E-A-T: third-party that reviewed the content (e.g. Hacken for security). */
  reviewedBy?: { name: string; url?: string };
  /** E-E-A-T: last review date in ISO format. */
  lastReviewed?: string;
}

export function PageStructuredData({
  title,
  description,
  url,
  pageType = 'WebPage',
  image,
  datePublished,
  dateModified,
  breadcrumbItems,
  reviewedBy,
  lastReviewed,
}: PageStructuredDataProps) {
  const baseUrl = 'https://totofinance.co';
  const defaultImage =
    'https://totofinance.co/assets/images/og-preview.png';

  const webPageSchema = {
    '@type': pageType,
    '@id': `${url}#webpage`,
    url: url,
    headline: title,
    description: description,
    inLanguage: 'en-US',
    isPartOf: {
      '@id': `${baseUrl}#website`,
    },
    about: {
      '@id': `${baseUrl}#org`,
    },
    publisher: {
      '@id': `${baseUrl}#org`,
    },
    primaryImageOfPage: {
      '@type': 'ImageObject',
      url: image || defaultImage,
    },
    ...(datePublished && { datePublished }),
    ...(dateModified && { dateModified }),
    ...(reviewedBy && {
      reviewedBy: {
        '@type': 'Organization',
        name: reviewedBy.name,
        ...(reviewedBy.url && { url: reviewedBy.url }),
      },
    }),
    ...(lastReviewed && { lastReviewed }),
    ...(breadcrumbItems && breadcrumbItems.length > 0 && {
      breadcrumb: {
        '@type': 'BreadcrumbList',
        itemListElement: breadcrumbItems.map((item, index) => ({
          '@type': 'ListItem',
          position: index + 1,
          name: item.name,
          item: item.item,
        })),
      },
    }),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          '@context': 'https://schema.org',
          '@graph': [webPageSchema],
        }),
      }}
    />
  );
}
