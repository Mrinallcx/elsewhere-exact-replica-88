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
const SilverFAQ = dynamicImport(
  () => import('../components/client/SilverFAQ').then((mod) => ({ default: mod.SilverFAQ }))
);

const PAGE_URL = 'https://totofinance.co/tokenized-silver';
const PAGE_TITLE = 'Tokenized Silver | Invest in Real Silver On Chain | Toto Finance';
const PAGE_DESCRIPTION =
  'Buy tokenized silver backed 1:1 by vault stored physical bars. Trade 24/7, enjoy full blockchain transparency, and redeem for physical delivery on Toto Finance.';

const breadcrumbItems = [
  { name: 'Home', item: 'https://totofinance.co' },
  { name: 'Products', item: 'https://totofinance.co/products' },
  { name: 'Tokenized Silver', item: PAGE_URL },
];

const faqData = [
  {
    question: 'What is Tokenized Silver on Toto Finance?',
    answer:
      'Tokenized Silver on Toto Finance represents real, physical silver stored in secure vaults and digitized as blockchain tokens. Each token is backed by a specific amount of silver, providing full transparency and security. It allows users to own, trade, and transfer silver instantly with true Freedom of Ownership without the hassle of handling physical bars.',
  },
  {
    question: 'How to Invest in Tokenized Silver on Toto Finance?',
    answer:
      'Investing in tokenized silver on Toto Finance is a simple and secure process, similar to purchasing tokenized diamonds: Sign up on Toto Finance and verify your account. Explore tokenized silver listings backed by real vault-held silver. Purchase using crypto or fiat options. Hold or Trade on the marketplace or peer-to-peer.',
  },
  {
    question: 'What Are the Benefits of Tokenized Silver Over Physical Silver?',
    answer:
      'Full ownership of real silver with none of the storage hassle. Transparent and verified via blockchain. Easily tradable and accessible globally. Secure vault storage with insured custody. Eliminates intermediaries and import/export limits.',
  },
  {
    question: 'Is Tokenized Silver Regulated?',
    answer:
      'Yes. Toto Finance follows strict KYC/AML compliance, and all assets are validated under a regulated framework. LCX serves as a physical validator, ensuring every tokenized silver unit is 1:1 backed, stored, and certified.',
  },
  {
    question: 'Can I Sell My Tokenized Silver?',
    answer:
      "Yes, you can sell your tokenized silver on Toto Finance easily and securely. Here's how: Marketplace - List your asset for global buyers. Direct Transfer - P2P transactions anytime. Redemption (if available) - Claim physical delivery where applicable.",
  },
  {
    question: 'Is Toto Finance Safe for Tokenized Silver Trading?',
    answer:
      'Absolutely. With a regulated structure, LCX validation, and blockchain-backed asset security, Toto Finance ensures: Real asset-backing with certification. Blockchain transparency and traceability. Vault-insured, third-party custody. Full user control with decentralized wallets.',
  },
  {
    question: 'How Does Minting Work on Cardano and Ethereum?',
    answer:
      'Minting is handled by the Toto Finance platform to ensure a seamless experience. Users simply purchase Toto Finance Silver using ADA (for Cardano) or USDT/USDC (for Ethereum). After purchase, we mint the NFT on your behalf, attaching the asset metadata according to the CIP-25 standard. Once minted, the Toto Finance NFT is delivered to your wallet, with ownership recorded directly on the blockchain.',
  },
  {
    question: 'Can I Redeem My Physical Silver?',
    answer:
      'Yes, Toto Finance Silver owners can redeem their silver bars and receive physical delivery. To redeem, follow these steps: Ensure you have a fully verified LCX account. Contact our support team at hello@totofinance.com to request redemption. You will receive an email detailing shipping costs and service fees, along with instructions for payment and the wallet address to transfer your Toto Finance NFT. Once payment and NFT transfer are confirmed, your silver bars will be retrieved from our vault and shipped to your specified address. Please note: A minimum of five (5) silver bars must be held to initiate the redemption process.',
  },
];

const productJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: 'Tokenized Silver',
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

export default function TokenizedSilverPage() {
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
      <section className="relative bg-gradient-to-br from-slate-800 via-slate-700 to-gray-900 text-white px-4 sm:px-6 md:px-8 lg:px-12 pt-28 md:pt-36 pb-16 md:pb-24 overflow-hidden">
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
              Silver: Smart. Accessible. Secure.
            </h1>
            <p className="text-base md:text-lg text-slate-200 leading-relaxed mb-8 max-w-2xl">
              A proven asset for industry and investors, now digitized. Your complete guide to investing in silver,
              covering everything from fundamentals to tokenized ownership.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <ExternalLink
                href="https://blog.tiamonds.com/silver-handbook/"
                className="inline-flex items-center justify-center bg-white text-gray-900 px-6 py-3 rounded-full text-sm font-semibold hover:bg-gray-100 transition-all duration-300"
              >
                Silver Guide
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </ExternalLink>
              <ExternalLink
                href="https://app.totofinance.co/category/silver"
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

      {/* Section 2: Why Invest in Silver? */}
      <section className="px-4 sm:px-6 md:px-8 lg:px-12 py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-gray-900 leading-tight mb-12 md:mb-16 text-center">
            Why Invest in Silver?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: 'Dual Purpose',
                body: 'Silver is both a precious metal and an industrial powerhouse; used in electronics, solar panels, and more. Growing tech demand supports long-term value.',
                href: 'https://www.cruxinvestor.com/posts/the-metal-poised-for-outperformance-as-industrial-demand-surges',
              },
              {
                title: 'Accessible Entry',
                body: 'With a lower price than gold, silver is ideal for first-time investors. It offers an affordable way to diversify with real assets.',
                href: 'https://www.mightydeals.com/5-reasons-silver-coins-are-a-smart-investment-choice/?srsltid=AfmBOoo3y2ZX3Hcr_mXbahBHuIesIxGyizQE1FQdo4Ix3iTBofjWKd-Q',
              },
              {
                title: 'Inflation Hedge',
                body: 'Silver often rises during inflation and uncertainty, helping protect your purchasing power when fiat currencies lose value.',
                href: 'https://www.thesilvermountain.nl/en/silver/silver-as-an-inflation-hedge',
              },
              {
                title: 'Tight Supply',
                body: 'Mining challenges and rising demand, especially in green tech, are tightening global supply and adding scarcity value.',
                href: 'https://www.walkthestreetcapital.com/articles/surging-industrial-demand-set-to-propel-silver-prices-to-new-heights',
              },
            ].map((card) => (
              <div
                key={card.title}
                className="bg-slate-50 rounded-2xl p-8 border border-slate-100 flex flex-col"
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-4">{card.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed flex-grow mb-6">{card.body}</p>
                <ExternalLink
                  href={card.href}
                  className="text-slate-900 font-medium text-sm hover:underline inline-flex items-center gap-1 mt-auto"
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

      {/* Section 3: Benefits of Tokenized Silver */}
      <section className="px-4 sm:px-6 md:px-8 lg:px-12 py-20 md:py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-gray-900 leading-tight mb-12 md:mb-16 text-center">
            Benefits of Tokenized Silver
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'True Ownership',
                body: 'Each token is 1:1 backed silver, legally enforceable.',
              },
              {
                title: 'Full Transparency',
                body: 'On-chain verification of origin, purity, and custody.',
              },
              {
                title: 'Global Access',
                body: 'Invest from anywhere, no banking barriers.',
              },
              {
                title: 'Instant Transferability',
                body: 'Trade peer-to-peer or via marketplace 24/7.',
              },
              {
                title: 'No Storage Worries',
                body: 'Fully insured, third-party vault custody',
              },
              {
                title: 'Regulated Compliance',
                body: 'KYC/AML checks + asset validation by LCX.',
              },
            ].map((item) => (
              <div key={item.title} className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm">
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
            No more confusion gains clear insights into asset tokenization with direct, easy-to-understand answers.
            These insights help you navigate the world of tokenization.
          </p>
          <SilverFAQ faqs={faqData} />
        </div>
      </section>

      <NewsletterSection />
      <Footer />
    </div>
  );
}
