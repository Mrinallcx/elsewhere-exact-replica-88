"use client";

import Link from 'next/link';
import Image from 'next/image';

/* ── All footer columns in one unified section ── */
const footerColumns = [
  {
    heading: 'Platform',
    links: [
      { label: 'Toto Token', href: '/toto-token' },
      { label: 'Products', href: '/products' },
      { label: 'Solutions', href: '/solutions' },
      { label: 'Ecosystem', href: '/ecosystem' },
      { label: 'Vision 2030', href: '/vision-2030' },
    ],
  },
  {
    heading: 'Metals & Gems',
    links: [
      { label: 'Gold', href: '/tokenized-gold' },
      { label: 'Silver', href: '/tokenized-silver' },
      { label: 'Platinum', href: '/tokenized-platinum' },
      { label: 'Diamonds', href: '/tokenized-diamonds' },
      { label: 'Sapphire', href: '/tokenized-sapphire' },
      { label: 'Copper', href: '/tokenized-copper' },
      { label: 'Tin', href: '/tokenized-tin' },
      { label: 'Iron', href: '/tokenized-iron' },
    ],
  },
  {
    heading: 'Resources',
    links: [
      { label: 'Docs', href: 'https://totofinance.co/doc-imprint' },
      { label: 'Blog', href: 'https://totofinance.co/blog' },
      { label: 'FAQ', href: 'https://totofinance.co/faq' },
    ],
  },
  {
    heading: 'Company',
    links: [
      { label: 'About Us', href: '/about' },
      { label: 'Trust & Compliance', href: '/about#leadership' },
      { label: 'Achievements', href: 'https://totofinance.co/achievements', },
      { label: 'Careers', href: 'https://totofinance.co/careers', external: true },
    ],
  },
  {
    heading: 'Social',
    links: [
      { label: 'X (Twitter)', href: 'https://x.com/totofinance' },
      { label: 'Telegram', href: 'https://t.me/totofinance' },
      { label: 'LinkedIn (company)', href: 'https://www.linkedin.com/company/totofinance/' },
      { label: 'Instagram', href: 'https://instagram.com/totofinance.co' },
      { label: 'YouTube', href: 'https://www.youtube.com/@Toto-Finance' },
    ],
  },
  {
    heading: 'Rare Earths',
    links: [
      { label: 'Cerium', href: '/tokenized-cerium' },
      { label: 'Dysprosium', href: '/tokenized-dysprosium' },
      { label: 'Erbium', href: '/tokenized-erbium' },
      { label: 'Europium', href: '/tokenized-europium' },
      { label: 'Gadolinium', href: '/tokenized-gadolinium' },
      { label: 'Holmium', href: '/tokenized-holmium' },
    ],
  },
  {
    heading: 'Rare Earths',
    links: [
      { label: 'Lanthanum', href: '/tokenized-lanthanum' },
      { label: 'Lutetium', href: '/tokenized-lutetium' },
      { label: 'Neodymium', href: '/tokenized-neodymium' },
      { label: 'Praseodymium', href: '/tokenized-praseodymium' },
      { label: 'Promethium', href: '/tokenized-promethium' },
      { label: 'Samarium', href: '/tokenized-samarium' },
    ],
  },
  {
    heading: 'Rare Earths',
    links: [
      { label: 'Scandium', href: '/tokenized-scandium' },
      { label: 'Terbium', href: '/tokenized-terbium' },
      { label: 'Thulium', href: '/tokenized-thulium' },
      { label: 'Ytterbium', href: '/tokenized-ytterbium' },
      { label: 'Yttrium', href: '/tokenized-yttrium' },
    ],
  },
];

const footerBottomLinks = [
  { label: 'Privacy Policy', href: '/privacy-policy' },
  { label: 'Terms & Conditions', href: '/terms-and-condition' },
  { label: 'Sitemap', href: '/sitemap.xml' }
];

/* ── Helper to render a single link ── */
function FooterLink({ link }: { link: { label: string; href: string; external?: boolean } }) {
  const isExternal = link.href.startsWith('http') || link.external;
  
  if (isExternal) {
    return (
      <a
        href={link.href}
        target='_blank'
        rel='noopener noreferrer'
        className='footer-link hover:underline inline-flex items-center text-[13px]'
      >
        {link.label}
        {link.external && <span className='external-icon ml-1 text-[11px]'>↗</span>}
      </a>
    );
  }
  
  return (
    <Link href={link.href}>
      <span className='footer-link hover:underline inline-flex items-center text-[13px]'>{link.label}</span>
    </Link>
  );
}

export default function Footer() {
  return (
    <footer className='footer-section px-6 md:px-8 lg:px-12 pt-16 pb-20 md:pt-20 md:pb-28'>
      <div className='max-w-7xl mx-auto'>

        {/* ── UNIFIED FOOTER GRID ── */}
        <div className='footer-grid grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-8 gap-x-6 gap-y-10'>
          {footerColumns.map((column, idx) => (
            <div key={`col-${idx}`} className='footer-column'>
              <h3 className='footer-heading font-semibold text-[13px] mb-4 whitespace-nowrap'>
                {column.heading}
              </h3>
              <ul className='footer-links space-y-2'>
                {column.links.map((link) => (
                  <li key={link.label}>
                    <FooterLink link={link} />
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* ── BOTTOM SECTION ── */}
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
              <span className='brand-copyright'>© 2026 Toto Finance Inc. All Rights Reserved</span>
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

