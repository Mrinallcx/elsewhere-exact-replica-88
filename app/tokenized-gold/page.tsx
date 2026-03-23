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
const GoldFAQ = dynamicImport(
  () => import('../components/client/SilverFAQ').then((mod) => ({ default: mod.SilverFAQ }))
);

const PAGE_URL = 'https://totofinance.co/tokenized-gold';
const PAGE_TITLE = 'Tokenized Gold | Buy Blockchain Backed Gold | Toto Finance';
const PAGE_DESCRIPTION =
  'Invest in tokenized gold backed by real, vault stored physical gold. Trade 24/7, redeem anytime, and enjoy full on chain transparency with Toto Finance.';

const breadcrumbItems = [
  { name: 'Home', item: 'https://totofinance.co' },
  { name: 'Products', item: 'https://totofinance.co/products' },
  { name: 'Tokenized Gold', item: PAGE_URL },
];

const faqData = [
  {
    question: 'What is Tokenized Gold on Toto Finance?',
    answer:
      'Tokenized Gold on Toto Finance represents real, physical gold secured in vaults, digitized into blockchain. Each token is backed by a specific amount of gold, ensuring authenticity and transparency. With Tiamonds, you can own, trade, and transfer gold effortlessly, benefiting from the security of blockchain technology while enjoying the stability of one of the world\'s most trusted assets. Our tokenized gold offers true Freedom of Ownership, allowing you to access and manage your gold holdings without the complexities of physical storage or traditional banking restrictions.',
  },
  {
    question: 'How to Invest in Tokenized Gold on Toto Finance?',
    answer:
      'Investing in tokenized gold on Toto Finance is a simple and secure process, similar to purchasing tokenized diamonds: Sign Up & Verify: Create an account on Tiamonds.com. Browse & Select: Explore available tokenized gold assets, each backed by real, securely stored gold. Purchase: Buy tokenized gold using supported payment methods. Trade or Hold: You can hold your tokenized gold as a long-term asset, transfer it, or trade it on secondary markets.',
  },
  {
    question: 'What are the Benefits of Tokenized Gold Over Physical Gold?',
    answer:
      'Tokenized gold on Toto Finance offers several advantages over traditional physical gold ownership: True Ownership & Security: Each token is backed by real gold stored in secure, insured vaults, eliminating the risks of theft or loss. High Liquidity: Unlike physical gold, tokenized gold can be easily bought, sold, or traded on blockchain-powered platforms without intermediaries. Transparency & Verification: Blockchain technology ensures verifiable proof of ownership and an immutable record of transactions. Global Accessibility: No geographical restrictions; access and manage your gold holdings from anywhere in the world. No Storage Hassles: Avoid the costs and security concerns of storing physical gold while still maintaining full ownership.',
  },
  {
    question: 'Is Tokenized Gold Regulated?',
    answer:
      'Yes, tokenized gold on Toto Finance operates within a compliant and regulated framework. As a fully compliant platform, Toto Finance follows strict legal and financial regulations to ensure transparency, security, and legitimacy. Each token is backed by real, audited gold stored in secure vaults, ensuring full asset backing. Additionally, our regulatory compliance aligns with AML (Anti-Money Laundering) and KYC (Know Your Customer) policies, ensuring a safe and trustworthy investment environment. By leveraging blockchain technology and adhering to financial standards, Toto Finance provides a secure and legally compliant way to invest in tokenized gold, offering both stability and Freedom of Ownership.',
  },
  {
    question: 'Can I Sell My Tokenized Gold?',
    answer:
      'Yes, you can sell your tokenized gold on Toto Finance easily and securely. Here\'s how: Marketplace Trading: List your tokenized gold for sale on the Toto Finance marketplace and connect with buyers worldwide. Peer-to-Peer Transfers: Transfer your tokenized gold directly to another buyer without intermediaries. Redeem for Physical Gold (if applicable): Depending on the offering, you may have the option to redeem your tokens for physical gold.',
  },
  {
    question: 'Is Toto Finance Safe to Use for Trading Tokenized Gold Assets?',
    answer:
      'Yes, Toto Finance is a secure and fully compliant platform for trading tokenized gold assets. Here\'s why: Regulatory Compliance: Toto Finance operates within a regulated framework, ensuring full adherence to AML (Anti-Money Laundering) and KYC (Know Your Customer) policies. Blockchain Security: Every transaction is recorded on the blockchain, providing transparency, immutability, and fraud prevention. Asset-Backed Tokens: Each tokenized gold asset is backed by real, audited gold stored in insured vaults, ensuring 100% asset backing. Secure Transactions: Your tokenized gold is stored in a non-custodial blockchain wallet, meaning you have full control and ownership at all times. Trusted Infrastructure: Toto Finance leverages institutional-grade security measures to protect user data and assets. With Freedom of Ownership at its core, Toto Finance offers a safe, transparent, and efficient way to invest, trade, and own tokenized gold.',
  },
];

const productJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: 'Tokenized Gold',
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

export default function TokenizedGoldPage() {
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
      <section className="relative bg-gradient-to-br from-yellow-900 via-yellow-800 to-gray-900 text-white px-4 sm:px-6 md:px-8 lg:px-12 pt-28 md:pt-36 pb-16 md:pb-24 overflow-hidden">
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
              Gold: Timeless &amp; Accessible
            </h1>
            <p className="text-base md:text-lg text-gray-300 leading-relaxed mb-8 max-w-2xl">
              Gold has preserved wealth for centuries, now seamlessly accessible through tokenization. Your complete
              guide to gold from basics to expert insights.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <ExternalLink
                href="https://blog.tiamonds.com/all-you-need-to-know-about-gold-tokenization/"
                className="inline-flex items-center justify-center bg-white text-gray-900 px-6 py-3 rounded-full text-sm font-semibold hover:bg-gray-100 transition-all duration-300"
              >
                Gold Guide
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </ExternalLink>
              <ExternalLink
                href="https://app.totofinance.co/category/gold"
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

      {/* Section 2: Why Invest in Gold? */}
      <section className="px-4 sm:px-6 md:px-8 lg:px-12 py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-gray-900 leading-tight mb-12 md:mb-16 text-center">
            Why Invest in Gold?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: 'Store of Value',
                body: 'Gold preserves wealth, protects against inflation, economic downturns, and provides financial security during uncertain times.',
                href: 'https://www.investopedia.com/terms/s/storeofvalue.asp',
              },
              {
                title: 'Global Acceptance',
                body: 'A globally trusted asset, widely recognized and securely held by central banks and institutions around the world.',
                href: 'https://www.investopedia.com/articles/basics/08/invest-in-gold.asp',
              },
              {
                title: 'Hedge Against Inflation',
                body: 'Gold retains value over time, shielding investors from inflation, rising prices, and ongoing currency devaluation risks.',
                href: 'https://www.goldmansachs.com/insights/articles/which-commodities-are-the-best-hedge-for-inflation',
              },
              {
                title: 'Scarcity & Stability',
                body: 'With limited supply and constant demand, gold remains a reliable, stable, and long-term investment for generations.',
                href: 'https://www.cbsnews.com/news/gold-performs-well-in-bad-economies-heres-why/',
              },
            ].map((card) => (
              <div
                key={card.title}
                className="bg-neutral-50 rounded-2xl p-8 border border-neutral-100 flex flex-col"
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-4">{card.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed flex-grow mb-6">{card.body}</p>
                <ExternalLink
                  href={card.href}
                  className="text-neutral-900 font-medium text-sm hover:underline inline-flex items-center gap-1 mt-auto"
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

      {/* Section 3: Benefits of Tokenized Gold */}
      <section className="px-4 sm:px-6 md:px-8 lg:px-12 py-20 md:py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-gray-900 leading-tight mb-12 md:mb-16 text-center">
            Benefits of Tokenized Gold
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: 'Seamless Portability',
                body: 'Easily move your tokenized gold across borders. Your assets flow globally, seamlessly, and securely, just like any cryptocurrency asset.',
                href: 'https://blog.tiamonds.com/how-tokenization-is-unlocking-liquidity/',
                cta: 'Learn More',
              },
              {
                title: '24/7 Global Trading',
                body: 'Trade tokenized gold instantly, anytime and anywhere globally free from limitations of time zones or traditional market hours.',
                href: 'https://blog.tiamonds.com/why-smart-money-is-moving-to-tokenization/',
                cta: 'Learn More',
              },
              {
                title: 'Instant Redeemability',
                body: 'Easily redeem your gold-backed tokens anytime, and physical gold will be delivered directly and safely to your doorstep.',
                href: null,
                cta: null,
              },
              {
                title: 'Secure & Free Storage',
                body: 'No more storage worries if your gold-backed assets are securely held on-chain, reducing risks and storage costs efficiently.',
                href: 'https://blog.tiamonds.com/best-practices-for-safeguarding-tokenized-assets/',
                cta: 'Learn More',
              },
              {
                title: 'Fully Insured',
                body: 'Eliminate storage hassles, assets are safely held like any other crypto.',
                href: null,
                cta: null,
              },
              {
                title: 'Onchain Transparency',
                body: 'Easily track and verify your allocated gold anytime using real-time blockchain technology and fully transparent auditing and reporting processes.',
                href: null,
                cta: null,
              },
            ].map((item) => (
              <div key={item.title} className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm flex flex-col">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed flex-grow mb-4">{item.body}</p>
                {item.href && item.cta ? (
                  <ExternalLink
                    href={item.href}
                    className="text-neutral-900 font-medium text-sm hover:underline inline-flex items-center gap-1 mt-auto"
                  >
                    {item.cta}
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </ExternalLink>
                ) : null}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 5: FAQ */}
      <section className="px-4 sm:px-6 md:px-8 lg:px-12 py-20 md:py-28 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-light text-gray-900 leading-tight mb-4">
            Get answers to your questions
          </h2>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-12">
            No more confusion gains clear insights into asset tokenization with direct, easy-to-understand answers.
            These insights help you navigate the world of tokenization.
          </p>
          <GoldFAQ faqs={faqData} />
        </div>
      </section>

      <NewsletterSection />
      <Footer />
    </div>
  );
}
