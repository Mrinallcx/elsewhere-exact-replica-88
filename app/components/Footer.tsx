"use client";

import Link from 'next/link';
import Image from 'next/image';

const footerData = [
  {
    heading: 'Platform',
    links: [
      { label: 'Toto Token', href: 'http://toto.xyz/' },
      { label: 'Products', href: '/products' },
      { label: 'Ecosystem', href: '/ecosystem' },
      { label: 'Vision 2030', href: '/vision-2030' },
    ],
  },
  {
    heading: 'Assets',
    links: [
      { label: 'Gold', href: 'https://app.totofinance.co/edition/gold' },
      { label: 'Silver', href: 'https://app.totofinance.co/edition/silver' },
      {
        label: 'Platinum',
        href: 'https://app.totofinance.co/edition/platinum',
      },
      {
        label: 'Diamonds',
        href: 'https://app.totofinance.co/edition/all-diamonds',
      },
    ],
  },
  {
    heading: 'Resources',
    links: [
      { label: 'Docs', href: 'https://totofinance.co/doc-imprint' },
      {
        label: 'Blog',
        href: 'https://blog.totofinance.co/',
        external: true,
      },
      { label: 'FAQ', href: 'https://totofinance.co/faq' },
    ],
  },
  {
    heading: 'Company',
    links: [
      {
        label: 'Tia Token',
        href: 'https://toto.xyz/tia-token',
        external: true,
      },
      {
        label: 'Careers',
        href: 'https://totofinance.co/careers',
        external: true,
      },
      { label: 'Products', href: 'https://totofinance.co/products' },
    ],
  },
];

const footerBottomLinks = [
  {
    label: 'Sitemap',
    href: '/sitemap.xml',
  },
];

export default function Footer() {
  return (
    <footer className='footer-section px-6 md:px-8 lg:px-12 pt-16 pb-20 md:pt-20 md:pb-28'>
      <div className='max-w-7xl mx-auto'>
        {/* GRID SECTION */}
        <div className='footer-grid grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10'>
          {footerData.map((column) => (
            <div key={column.heading} className='footer-column'>
              <h3 className='footer-heading font-semibold mb-4'>
                {column.heading}
              </h3>
              <ul className='footer-links space-y-2'>
                {column.links.map((link) => (
                  <li key={link.label}>
                    {link.href.startsWith('http') ? (
                      <a
                        href={link.href}
                        target='_blank'
                        rel='noopener noreferrer'
                        className='footer-link hover:underline inline-flex items-center'
                      >
                        {link.label}
                        {link.external && (
                          <span className='external-icon ml-1'>↗</span>
                        )}
                      </a>
                    ) : (
                      <Link href={link.href}>
                        <span className='footer-link hover:underline inline-flex items-center'>
                          {link.label}
                        </span>
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* BOTTOM SECTION */}
        <div className='footer-bottom mt-16 flex flex-col md:flex-row justify-between items-center gap-6'>
          <div className='footer-brand'>
            <Link href='/'>
              <Image
                src='/totofinance.svg'
                alt='Toto Finance'
                width={120}
                height={48}
                className='h-8 sm:h-10 md:h-12 logo-light'
              />
            </Link>
          </div>

          <div className='footer-legal flex flex-col md:flex-row flex-wrap gap-4 md:gap-6 text-sm'>
            <div className='flex flex-col gap-2'>
              <span className='brand-copyright'>© 2026 Toto Finance AG. All rights reserved.</span>
              <span className='text-gray-300 text-xs md:text-sm'>Toto Finance - The Global Infrastructure for Tokenized Commodities</span>
            </div>

            {footerBottomLinks.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                target='_blank'
                className='legal-link hover:underline'
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

