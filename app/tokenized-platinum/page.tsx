// Server Component (NO "use client")
export const dynamic = 'force-dynamic';

import type { ReactNode } from 'react';
import dynamicImport from 'next/dynamic';
import { BreadcrumbStructuredData } from '../components/BreadcrumbStructuredData';
import { PageStructuredData } from '../components/PageStructuredData';
import { FAQStructuredData } from '../components/FAQStructuredData';
import { Navigation } from '../components/Navigation';

const GradualBlur = dynamicImport(() => import('../../src/components/GradualBlur'));
const Footer = dynamicImport(() => import('../components/Footer'));
const NewsletterSection = dynamicImport(() => import('../components/NewsletterSection'));
const PlatinumFAQ = dynamicImport(
  () => import('../components/client/SilverFAQ').then((mod) => ({ default: mod.SilverFAQ }))
);

const PAGE_URL = 'https://totofinance.co/tokenized-platinum';
const PAGE_TITLE = 'Tokenized Platinum | Invest in Rare Platinum On Chain | Toto Finance';
const PAGE_DESCRIPTION =
  'Invest in tokenized platinum backed by real, vault stored metal. Trade 24/7, redeem for physical delivery, and enjoy full on chain transparency on Toto Finance.';

const breadcrumbItems = [
  { name: 'Home', item: 'https://totofinance.co' },
  { name: 'Products', item: 'https://totofinance.co/products' },
  { name: 'Tokenized Platinum', item: PAGE_URL },
];

const faqData = [
  {
    question: 'What is Tokenized Platinum on Toto Finance?',
    answer:
      'Tokenized Platinum on Toto Finance represents real, physical platinum secured in vaults, digitized into blockchain based tokens. Each token is backed 1:1 by actual platinum, giving you the security of a hard asset with the flexibility of digital ownership.',
  },
  {
    question: 'How to Invest in Tokenized Platinum on Toto Finance?',
    answer:
      'Sign Up & Verify: Create an account on Toto Finance. Browse & Select: Choose from available platinum backed tokens. Purchase: Pay with crypto or stable coins. Hold, Trade, or Redeem: Manage your platinum as you wish.',
  },
  {
    question: 'Why Choose Tokenized Platinum Over Physical?',
    answer:
      'No Storage Hassles: Your platinum is stored securely, no need to manage it yourself. High Liquidity: Trade it instantly online. Global Accessibility: Access your holdings anywhere. Immutable Proof of Ownership: Backed by blockchain.',
  },
  {
    question: 'Is Toto Finance Platinum Offer Regulated?',
    answer:
      'Yes. Toto Finance operates under a fully compliant framework. Assets are backed, insured, audited, and adhere to KYC/AML standards. You benefit from the security of regulated storage and the innovation of blockchain.',
  },
  {
    question: 'Can I Redeem or Sell My Tokenized Platinum?',
    answer:
      'Absolutely. Marketplace Sales: List your token for buyers worldwide. Peer to Peer Transfers: Send tokens directly. Redeem for Physical Platinum: Request secure delivery when ready.',
  },
  {
    question: 'Is Toto Finance a Secure Platform for Platinum Investments?',
    answer:
      'Yes. With regulated partners, insured vaults, and blockchain transparency, Toto Finance offers institutional grade security. You maintain full control over your assets, backed by real world platinum and trusted infrastructure.',
  },
];

const productJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: 'Tokenized Platinum',
  description: PAGE_DESCRIPTION,
  url: PAGE_URL,
  brand: {
    '@type': 'Brand',
    name: 'Toto Finance',
  },
};

function ExternalLink({
  href,
  children,
  className,
}: {
  href: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={className}>
      {children}
    </a>
  );
}

export default function TokenizedPlatinumPage() {
  return (
    <div className="min-h-screen w-full relative">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }}
      />
      <PageStructuredData
        title={PAGE_TITLE}
        description={PAGE_DESCRIPTION}
        url={PAGE_URL}
        pageType="WebPage"
        breadcrumbItems={breadcrumbItems}
      />
      <BreadcrumbStructuredData items={breadcrumbItems} />
      <FAQStructuredData faqs={faqData} />

      <GradualBlur preset="page-footer" strength={2} height="4rem" animated="scroll" duration="0.5s" />
      <Navigation pastHero={true} />

      {/* Section 1: Hero */}
      <section className="relative bg-gradient-to-br from-zinc-800 via-zinc-700 to-gray-900 text-white px-4 sm:px-6 md:px-8 lg:px-12 pt-28 md:pt-36 pb-16 md:pb-24 overflow-hidden">
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
            backgroundSize: '40px 40px',
          }}
        />
        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light leading-tight mb-6">
              Platinum: Rare. Refined. Yours.
            </h1>
            <p className="text-base md:text-lg text-zinc-300 leading-relaxed mb-8 max-w-2xl">
              Platinum combines rarity, durability, and industrial importance, now tokenized. Your guide to
              platinum: from fundamentals to expert investment insights.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <ExternalLink
                href="https://blog.tiamonds.com/platinum-handbook/"
                className="inline-flex items-center justify-center bg-white text-gray-900 px-6 py-3 rounded-full text-sm font-semibold hover:bg-gray-100 transition-all duration-300"
              >
                Platinum Handbook
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </ExternalLink>
              <ExternalLink
                href="https://app.totofinance.co/category/platinum"
                className="inline-flex items-center justify-center border border-white/30 text-white px-6 py-3 rounded-full text-sm font-semibold hover:bg-white/10 transition-all duration-300"
              >
                Explore Assets
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </ExternalLink>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Why Invest in Platinum? */}
      <section className="px-4 sm:px-6 md:px-8 lg:px-12 py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-gray-900 leading-tight mb-12 md:mb-16 text-center">
            Why Invest in Platinum?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: 'Store of Value',
                body: 'Platinum is a tangible hedge against inflation and economic instability, offering wealth preservation over time.',
                href: 'https://www.swissbullion.eu/en/posts/understanding-the-platinum-market-for-investors',
              },
              {
                title: 'Global Recognition',
                body: 'Held by institutions and central banks, platinum is globally acknowledged for both its economic and industrial worth.',
                href: 'https://www.investopedia.com/terms/p/platinum.asp',
              },
              {
                title: 'Hedge Against Inflation',
                body: 'With its finite supply and broad demand, platinum helps protect your portfolio from currency depreciation and inflation.',
                href: 'https://www.forbes.com/councils/forbesfinancecouncil/2022/08/15/how-hard-assets-can-benefit-investors-during-inflationary-periods/',
              },
              {
                title: 'Scarcity & Industrial Demand',
                body: "Used in automotive, medical, and clean energy sectors, platinum's industrial demand is rising while its natural supply remains limited.",
                href: 'https://www.bloomberg.com/news/articles/2024-09-10/platinum-set-for-record-deficit-but-prices-yet-to-recover',
              },
            ].map((card) => (
              <div
                key={card.title}
                className="bg-zinc-50 rounded-2xl p-8 border border-zinc-100 flex flex-col"
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-4">{card.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed flex-grow mb-6">{card.body}</p>
                <ExternalLink
                  href={card.href}
                  className="text-zinc-900 font-medium text-sm hover:underline inline-flex items-center gap-1 mt-auto"
                >
                  Learn More
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </ExternalLink>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: Benefits of Tokenized Platinum */}
      <section className="px-4 sm:px-6 md:px-8 lg:px-12 py-20 md:py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-gray-900 leading-tight mb-12 md:mb-16 text-center">
            Benefits of Tokenized Platinum
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Borderless Portability',
                body: 'Move your tokenized platinum globally securely and instantly, just like crypto.',
              },
              {
                title: '24/7 Global Trading',
                body: 'Access platinum markets anytime, anywhere free from market hours or intermediaries.',
              },
              {
                title: 'Easy Redeemability',
                body: 'Redeem your tokens for real platinum and have it delivered directly, insured and securely.',
              },
              {
                title: 'No Storage Worries',
                body: 'Your platinum is stored in insured vaults, tracked on chain, and free from traditional storage limitations.',
              },
              {
                title: 'On Chain Transparency',
                body: 'Real time tracking and verification of your holdings via blockchain fully audited, always verifiable.',
              },
              {
                title: 'Regulated Compliance',
                body: 'KYC/AML checks + asset validation by LCX.',
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm"
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4: FAQ */}
      <section className="px-4 sm:px-6 md:px-8 lg:px-12 py-20 md:py-28 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-light text-gray-900 leading-tight mb-4">
            Get answers to your questions
          </h2>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-12">
            No more confusion gains clear insights into asset tokenization with direct, easy-to-understand
            answers. These insights help you navigate the world of tokenization.
          </p>
          <PlatinumFAQ faqs={faqData} />
        </div>
      </section>

      <NewsletterSection />
      <Footer />
    </div>
  );
}
