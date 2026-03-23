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
const SapphireFAQ = dynamicImport(
  () => import('../components/client/SilverFAQ').then((mod) => ({ default: mod.SilverFAQ }))
);

const PAGE_URL = 'https://totofinance.co/tokenized-sapphire';
const PAGE_TITLE = 'Tokenized Sapphires | Own Certified Rare Sapphires | Toto Finance';
const PAGE_DESCRIPTION =
  "Invest in tokenized sapphires backed by real, certified, unheated Sri Lankan gems. Fully insured by Lloyd's of London with on chain transparency on Toto Finance.";

const breadcrumbItems = [
  { name: 'Home', item: 'https://totofinance.co' },
  { name: 'Products', item: 'https://totofinance.co/products' },
  { name: 'Tokenized Sapphire', item: PAGE_URL },
];

const faqData = [
  {
    question: 'What is Tokenized Sapphire on Toto Finance?',
    answer:
      "Tokenized Sapphire on Toto Finance represents a real, physical sapphire securely stored in a vault and digitized on the blockchain. Each token is backed by a specific, investment grade sapphire certified, insured, and traceable. With Toto Finance, you can own, trade, and transfer fine sapphires digitally, enjoying the benefits of blockchain technology while investing in one of the world's most prized and timeless gemstones. Tokenization offers full transparency, global access, and simplified ownership of these rare, high value assets.",
  },
  {
    question: 'How to Invest in Tokenized Sapphires on Toto Finance?',
    answer:
      'Investing in tokenized sapphires on Toto Finance is a seamless process: Sign Up & Verify: Create an account on Toto Finance. Explore the Collection: Browse our curated selection of certified, unheated sapphires sourced from Sri Lanka. Purchase: Buy using supported crypto or fiat payment methods. Hold, Trade or Redeem: Keep your tokenized sapphire as an investment, trade it on secondary markets, or redeem it for the physical gemstone.',
  },
  {
    question: 'What are the Benefits of Tokenized Sapphires Over Traditional Gem Ownership?',
    answer:
      'Tokenized sapphires offer unique advantages compared to traditional gemstone investments: True Ownership: Each NFT represents a specific sapphire stored securely and fully insured. Liquidity: Tokenized assets can be traded anytime on supported marketplaces. Global Access: Invest from anywhere, without geographic or banking limitations. Transparency & Security: Blockchain ensures authenticity, traceability, and immutable records. No Custody Hassles: Enjoy ownership without the risks of personal storage or transportation.',
  },
  {
    question: 'Who Sources and Certifies the Sapphires?',
    answer:
      'Toto Finance sources all sapphires in collaboration with Berr & Partners, a leading expert in investment grade gemstones. Each stone is certified by professional Gem Laboratories (GRS, CGL,...), confirming its origin, natural (unheated) state, and gemological quality. All assets are validated by LCX, who issues on chain certificates of ownership and oversees secure physical storage.',
  },
  {
    question: 'Can I Sell or Redeem My Tokenized Sapphire?',
    answer:
      'Yes, tokenized sapphires on Toto Finance are fully tradeable and redeemable: Trade on Marketplace: List your sapphire NFT for sale on Toto Finance or compatible NFT platforms. Peer to Peer Transfers: Send or gift the NFT directly to another wallet. Physical Redemption: Request delivery of the underlying sapphire at any time, subject to storage and shipping fees.',
  },
  {
    question: 'Is Toto Finance a Safe Platform for Tokenized Sapphire Investments?',
    answer:
      'Yes, Toto Finance is designed with full compliance and user protection in mind: Regulated Framework: We adhere to AML/KYC requirements and partner with licensed service providers. Blockchain Security: All assets are recorded on chain for full transparency and fraud protection. Third Party Validation: LCX serves as the physical validator, ensuring custody, insurance, and auditability. Non Custodial Ownership: Your sapphire NFTs are stored in your own wallet, giving you complete control. Toto Finance offers a secure, transparent, and efficient way to access the world of high value sapphires with the power of Web3.',
  },
];

const productJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: 'Tokenized Sapphires',
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

export default function TokenizedSapphirePage() {
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
      <section className="relative bg-gradient-to-br from-blue-900 via-indigo-900 to-gray-900 text-white px-4 sm:px-6 md:px-8 lg:px-12 pt-28 md:pt-36 pb-16 md:pb-24 overflow-hidden">
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
              Sapphire: Rare and Captivating
            </h1>
            <p className="text-base md:text-lg text-blue-100/90 leading-relaxed mb-8 max-w-2xl">
              Sapphire, a symbol of wisdom and prosperity now within reach through tokenization. Your essential guide
              to sapphire from its rich history to modern investment insights.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <ExternalLink
                href="https://blog.tiamonds.com/introducing-the-sapphires-handbook/"
                className="inline-flex items-center justify-center bg-white text-gray-900 px-6 py-3 rounded-full text-sm font-semibold hover:bg-gray-100 transition-all duration-300"
              >
                Sapphire Handbook
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </ExternalLink>
              <ExternalLink
                href="https://app.totofinance.co/category/sapphire"
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

      {/* Section 2: Berr & Partners */}
      <section className="px-4 sm:px-6 md:px-8 lg:px-12 py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-gray-900 leading-tight mb-6 text-center max-w-4xl mx-auto">
            Berr &amp; Partners
          </h2>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto text-center mb-14 md:mb-16">
            The Berr Family is renowned for curating high quality, rare gemstones, directly connected to exclusive
            sources and mines worldwide.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-blue-50/40 rounded-2xl p-8 border border-blue-100">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Provenance</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Sourced from Sri Lanka&apos;s finest mines, each unheated sapphire is handpicked, certified for quality,
                and fully traceable. Curated with Berr &amp; Partners.
              </p>
            </div>
            <div className="bg-blue-50/40 rounded-2xl p-8 border border-blue-100">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Unheated aspect</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                100% natural and unheated, these sapphires retain their original color. Representing under 2% of all
                sapphires, they are exceptionally rare and highly valued.
              </p>
            </div>
            <div className="bg-blue-50/40 rounded-2xl p-8 border border-blue-100">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Certification</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Each sapphire is certified by leading gemological labs such as GRS, CGL, and others, verifying
                authenticity, origin, and unheated status.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Why Invest in Sapphire? */}
      <section className="px-4 sm:px-6 md:px-8 lg:px-12 py-20 md:py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-gray-900 leading-tight mb-12 md:mb-16 text-center">
            Why Invest in Sapphire?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {[
              {
                title: 'Timeless Store of Value',
                body: 'Each sapphire is certified by leading gemological labs such as GRS, CGL, and others, verifying authenticity, origin, and unheated status.',
              },
              {
                title: 'Global Demand, Limited Supply',
                body: 'Unheated, natural sapphires represent less than 2% of global production. With finite reserves and rising demand from luxury, investment, and tech sectors, their scarcity drives long term value.',
              },
              {
                title: 'Prestige & Recognition',
                body: 'From royal collections to high end markets, sapphires are globally prized by collectors and investors for their beauty, status, and performance as hard assets.',
              },
              {
                title: 'Certified & Traceable',
                body: 'Backed by leading gemological labs such as GRS, CGL, and others, each sapphire is authenticated, certified, and fully traceable from mine to finger.',
              },
            ].map((card) => (
              <div key={card.title} className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{card.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{card.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4: Benefits of Tokenized Sapphire */}
      <section className="px-4 sm:px-6 md:px-8 lg:px-12 py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-gray-900 leading-tight mb-12 md:mb-16 text-center">
            Benefits of Tokenized Sapphire
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Seamless Portability',
                body: 'Easily move your tokenized sapphire across borders. Your assets flow globally, seamlessly, and securely, just like any cryptocurrency asset.',
              },
              {
                title: '24/7 Global Trading',
                body: 'Trade tokenized sapphire instantly, anytime and anywhere globally free from limitations of time zones or traditional market hours.',
              },
              {
                title: 'Instant Redeemability',
                body: 'Easily redeem your sapphire anytime, and the physical sapphire will be delivered directly and safely to your doorstep.',
              },
              {
                title: 'Affordable Storage',
                body: 'Your sapphire is securely stored in a high security vault with no storage fees. We cover all custodial costs, giving you long term peace of mind at no extra charge.',
              },
              {
                title: 'Fully Insured',
                body: "Each sapphire is fully insured by Lloyd's of London, ensuring protection against loss, or damage while in storage. Your investment is safeguarded from day one.",
              },
              {
                title: 'Onchain Transparency',
                body: 'Easily track and verify your allocated sapphire anytime using real time blockchain technology and fully transparent auditing and reporting processes.',
              },
            ].map((item) => (
              <div key={item.title} className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 5: FAQ */}
      <section className="px-4 sm:px-6 md:px-8 lg:px-12 py-20 md:py-28 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-light text-gray-900 leading-tight mb-4">
            Get answers to your questions
          </h2>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-12">
            No more confusion gains clear insights into asset tokenization with direct, easy-to-understand answers.
            These insights help you navigate the world of tokenization.
          </p>
          <SapphireFAQ faqs={faqData} />
        </div>
      </section>

      <NewsletterSection />
      <Footer />
    </div>
  );
}
