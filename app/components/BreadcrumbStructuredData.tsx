import { BreadcrumbJsonLd } from 'next-seo';

interface BreadcrumbItem {
  name: string;
  item: string;
}

interface BreadcrumbStructuredDataProps {
  items: BreadcrumbItem[];
}

export function BreadcrumbStructuredData({ items }: BreadcrumbStructuredDataProps) {
  return <BreadcrumbJsonLd items={items} />;
}

