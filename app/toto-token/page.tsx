import dynamicImport from 'next/dynamic';
import { BreadcrumbStructuredData } from '../components/BreadcrumbStructuredData';
import { PageStructuredData } from '../components/PageStructuredData';
import { Navigation } from '../components/Navigation';
import { TotoTokenStats } from '../components/client/TotoTokenStats';
import { TotoTokenAllocationChart } from '../components/client/TotoTokenAllocationChart';
import { TotoTokenFAQ } from '../components/client/TotoTokenFAQ';

const GradualBlur = dynamicImport(() => import('../../src/components/GradualBlur'));
const Footer = dynamicImport(() => import('../components/Footer'));
const NewsletterSection = dynamicImport(() => import('../components/NewsletterSection'));

const EXCHANGE_HREF = 'https://exchange.lcx.com/en/trade/TOTO-EUR';
const UTILITY_HUB_HREF = 'https://toto.xyz/';
const TELEGRAM_HREF = 'https://t.me/totofinance';

const utilities = [
  {
    title: 'Platform Incentives',
    body: 'Enable participation incentives tied to activity and usage on the platform.',
  },
  {
    title: 'Asset Utility & Secondary Market Support',
    body: 'Improve liquidity and usability of assets on tokenized primary and secondary markets.',
  },
  {
    title: 'Multichain Infrastructure',
    body: 'Enable cross-chain settlement and interoperability on supported blockchain networks.',
  },
  {
    title: 'Staking for Platform Access',
    body: 'Stake $TOTO to gain benefits of lower fees, higher limits, and access privileges.',
  },
  {
    title: 'Additional Utilities',
    body: 'Additional utilities for settlement, collateralization, and infrastructure.',
  },
  {
    title: 'Ecosystem Expansion',
    body: 'Integration with other asset classes and platforms.',
  },
] as const;

export default function TotoTokenPage() {
  return (
    <div className="min-h-screen w-full relative bg-white">
      <PageStructuredData
        title="TOTO Token — Utility & Supply | Toto Finance"
        description="The universal utility token for digital commodity infrastructure. $TOTO fuels the Toto Finance ecosystem for access, settlement, fees, and rewards."
        url="https://totofinance.co/toto-token"
        pageType="WebPage"
        breadcrumbItems={[
          { name: 'Home', item: 'https://totofinance.co' },
          { name: 'TOTO Token', item: 'https://totofinance.co/toto-token' },
        ]}
      />
      <BreadcrumbStructuredData
        items={[
          { name: 'Home', item: 'https://totofinance.co' },
          { name: 'TOTO Token', item: 'https://totofinance.co/toto-token' },
        ]}
      />

      <GradualBlur preset="page-footer" strength={2} height="4rem" animated="scroll" duration="0.5s" />
      <Navigation pastHero={true} />

      {/* Section 1: Hero */}
      <section className="relative bg-gradient-to-br from-gray-900 via-[#0a1628] to-gray-900 text-white px-4 sm:px-6 md:px-8 lg:px-12 pt-28 md:pt-36 pb-16 md:pb-24 overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
            backgroundSize: '40px 40px',
          }}
        />
        <div className="relative z-10 max-w-7xl mx-auto">
          <span className="inline-block bg-white/10 text-gray-300 text-xs font-semibold tracking-widest uppercase px-4 py-1.5 rounded-full mb-6 border border-white/10">
            TOTO Token
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light leading-tight mb-6 max-w-4xl">
            The Universal Utility Token for Digital Commodity Infrastructure
          </h1>
          <p className="text-base md:text-lg text-gray-300 leading-relaxed mb-10 max-w-2xl">
            $TOTO fuels the Toto Finance ecosystem for access, settlement, fees, and rewards.
          </p>
          <a
            href={EXCHANGE_HREF}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-white text-gray-900 px-8 py-3 rounded-full text-base font-semibold hover:bg-gray-100 transition-all duration-300"
          >
            View on Exchange
          </a>
        </div>
      </section>

      {/* Section 2: Token Supply & Market Info */}
      <section className="px-4 sm:px-6 md:px-8 lg:px-12 py-20 md:py-28 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-gray-900 mb-4">
              Token Supply &amp; Market Info
            </h2>
            <p className="text-base md:text-lg text-gray-600 leading-relaxed">
              $TOTO is a utility token with a fixed supply, intended for use in platform functionality, ecosystem
              rewards, and infrastructure development.
            </p>
          </div>
          <div className="flex justify-center">
            <TotoTokenStats />
          </div>
        </div>
      </section>

      {/* Section 3: Allocation */}
      <section className="px-4 sm:px-6 md:px-8 lg:px-12 py-20 md:py-28 bg-white border-t border-gray-100">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10 md:mb-14">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-gray-900 mb-4">
              Token Allocation &amp; Distribution
            </h2>
            <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
              The $TOTO supply is allocated to support ecosystem usage, platform incentives, and long-term
              infrastructure development.
            </p>
          </div>
          <TotoTokenAllocationChart />
        </div>
      </section>

      {/* Section 4: Utility */}
      <section className="px-4 sm:px-6 md:px-8 lg:px-12 py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-gray-900 text-center mb-14">
            Utility Across the Toto Finance Ecosystem
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12">
            {utilities.map(({ title, body }) => (
              <div
                key={title}
                className="bg-gray-50 rounded-xl p-6 md:p-8 border border-gray-100"
              >
                <h3 className="text-lg font-medium text-gray-900 mb-3">{title}</h3>
                <p className="text-sm md:text-base text-gray-600 leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-base md:text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto mb-8">
            The $TOTO token also has its own token ecosystem, which is solely for token utility and ecosystem
            integrations. Explore Now:{' '}
            <a
              href={UTILITY_HUB_HREF}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#00375e] font-medium hover:underline"
            >
              The $TOTO Utility Hub.
            </a>
          </p>
          <div className="text-center">
            <a
              href={EXCHANGE_HREF}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-black text-white px-8 py-3 rounded-full text-base font-medium hover:bg-gray-800 transition-colors duration-300"
            >
              View on Exchange
            </a>
          </div>
        </div>
      </section>

      {/* Section 5: FAQ */}
      <section className="px-4 sm:px-6 md:px-8 lg:px-12 py-20 md:py-28 bg-gray-50 border-t border-gray-100">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-gray-900 mb-4">
              Get answers to your questions
            </h2>
            <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-8">
              No more confusion, gain clear insights into asset tokenization with direct, easy-to-understand answers.
              These insights help you navigate the world of tokenization.
            </p>
            <p className="text-sm font-medium text-gray-900 mb-2">Join community</p>
            <a
              href={TELEGRAM_HREF}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-[#00375e] font-semibold hover:underline"
            >
              Telegram
            </a>
          </div>
          <TotoTokenFAQ />
        </div>
      </section>

      <NewsletterSection />
      <Footer />
    </div>
  );
}
