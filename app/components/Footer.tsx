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
        href: 'https://totofinance.co/blog',
        external: false,
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
  { label: 'Privacy Policy', href: '/privacy-policy' },
  { label: 'Terms & Conditions', href: '/terms-and-condition' },
  { label: 'Sitemap', href: '/sitemap.xml' },
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
        <div className='footer-bottom mt-16 w-full flex flex-col gap-6'>
          <div className='w-full flex flex-col sm:flex-row justify-between items-center sm:items-start gap-4'>
            <div className='footer-brand shrink-0'>
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
            <div className='footer-legal flex flex-col gap-2 text-center sm:text-right text-sm shrink-0 max-w-full'>
              <span className='brand-copyright'>© 2026 Toto Finance AG. All rights reserved.</span>
              <span className='text-gray-300 text-xs md:text-sm'>Toto Finance - The Global Infrastructure for Tokenized Commodities</span>
            </div>
          </div>
          <div className='w-full flex flex-wrap justify-end gap-x-4 gap-y-1'>
            {footerBottomLinks.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                target={item.href.startsWith('http') || item.href === '/sitemap.xml' ? '_blank' : undefined}
                rel={item.href.startsWith('http') || item.href === '/sitemap.xml' ? 'noopener noreferrer' : undefined}
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

