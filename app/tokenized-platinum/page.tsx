// Server Component (NO "use client")
export const dynamic = 'force-dynamic';

import Link from 'next/link';
import dynamicImport from 'next/dynamic';
import { BreadcrumbStructuredData } from '../components/BreadcrumbStructuredData';
import { PageStructuredData } from '../components/PageStructuredData';
import { FAQStructuredData } from '../components/FAQStructuredData';
import { TrustComplianceBar } from '../components/TrustComplianceBar';
import { ProductTrustSection } from '../components/ProductTrustSection';
import { Navigation } from '../components/Navigation';

// Dynamic imports for heavy components
const GradualBlur = dynamicImport(() => import('../../src/components/GradualBlur'));
const Footer = dynamicImport(() => import('../components/Footer'));
const NewsletterSection = dynamicImport(() => import('../components/NewsletterSection'));
const PlatinumFAQ = dynamicImport(
  () => import('../components/client/SilverFAQ').then((mod) => ({ default: mod.SilverFAQ }))
);

// FAQ Data
const faqData = [
  {
    question: 'What is tokenized platinum?',
    answer:
      'Tokenized platinum is physical platinum represented as digital tokens on a blockchain, enabling transparent ownership of real platinum without direct physical handling.',
  },
  {
    question: 'Why is platinum valuable?',
    answer:
      'Platinum is significantly rarer than gold and essential for automotive catalysts, hydrogen technologies, chemical processing, and advanced manufacturing.',
  },
  {
    question: 'How is tokenized platinum different from ETFs?',
    answer:
      'Tokenized platinum represents direct digital ownership of physical metal with transparent custody and on-chain ownership records, without fund structures.',
  },
  {
    question: 'How is platinum stored?',
    answer:
      'Physical platinum is held under secure custody arrangements, with ownership tracked digitally.',
  },
  {
    question: 'Do platinum tokens represent full ownership?',
    answer:
      'Yes. Each token represents direct digital ownership linked to physical platinum. Fractional ownership is not offered.',
  },
];

export default function TokenizedPlatinumPage() {
  return (
    <div className="min-h-screen w-full relative">
      {/* Structured Data */}
      <PageStructuredData
        title="Tokenized Platinum | Physical Platinum on Blockchain | Toto Finance"
        description="Own tokenized platinum backed by physical metal. Rarer than gold, essential for industry, with transparent custody and digital ownership."
        url="https://totofinance.co/tokenized-platinum"
        pageType="WebPage"
        breadcrumbItems={[
          { name: 'Home', item: 'https://totofinance.co' },
          { name: 'Products', item: 'https://totofinance.co/products' },
          { name: 'Tokenized Platinum', item: 'https://totofinance.co/tokenized-platinum' },
        ]}
      />
      <BreadcrumbStructuredData
        items={[
          { name: 'Home', item: 'https://totofinance.co' },
          { name: 'Tokenized Platinum', item: 'https://totofinance.co/tokenized-platinum' },
        ]}
      />
      <GradualBlur preset="page-footer" strength={2} height="4rem" animated="scroll" duration="0.5s" />
      <Navigation pastHero={true} />

      {/* ===================== FOLD 1: HERO SECTION ===================== */}
      <section className="relative bg-gradient-to-br from-zinc-800 via-zinc-700 to-gray-900 text-white px-4 sm:px-6 md:px-8 lg:px-12 pt-28 md:pt-36 pb-16 md:pb-24 overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '40px 40px' }} />

        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light leading-tight mb-6">
              Tokenized Platinum
            </h1>
            <h2 className="text-xl md:text-2xl font-light text-zinc-300 mb-6">
              One of the world&apos;s rarest metals &mdash; owned with precision.
            </h2>
            <p className="text-base md:text-lg text-gray-400 leading-relaxed mb-4 max-w-2xl">
              Platinum is rarer than gold, harder to mine, and deeply embedded in advanced industrial systems. Its importance is driven not by volume, but by necessity.
            </p>
            <p className="text-base md:text-lg text-gray-400 leading-relaxed mb-8 max-w-2xl">
              Tokenization brings platinum ownership into a digital, transparent framework &mdash; while remaining fully anchored to physical supply.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/products"
                className="inline-flex items-center justify-center bg-white text-gray-900 px-6 py-3 rounded-full text-sm font-semibold hover:bg-gray-100 transition-all duration-300"
              >
                Explore Tokenized Platinum
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
              <a
                href="#why-platinum"
                className="inline-flex items-center justify-center border border-white/30 text-white px-6 py-3 rounded-full text-sm font-semibold hover:bg-white/10 transition-all duration-300"
              >
                Why Platinum Matters
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== FOLD 2: WHAT IS TOKENIZED PLATINUM? ===================== */}
      <section className="px-4 sm:px-6 md:px-8 lg:px-12 py-20 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-gray-900 leading-tight mb-6">
            What Is Tokenized Platinum?
          </h2>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-4xl mb-12">
            Tokenized platinum represents direct digital ownership of physical platinum, recorded on the blockchain. Each token corresponds to real platinum held in secure custody, enabling transparent ownership and transfer without compromising physical backing.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-zinc-50 rounded-2xl p-8 border border-zinc-100">
              <p className="text-lg font-medium text-gray-900 mb-2">Platinum remains scarce and physical.</p>
              <p className="text-gray-600">The underlying asset retains all its fundamental properties &mdash; rarity, industrial utility, and intrinsic value.</p>
            </div>
            <div className="bg-zinc-50 rounded-2xl p-8 border border-zinc-100">
              <p className="text-lg font-medium text-gray-900 mb-2">Ownership becomes efficient and verifiable.</p>
              <p className="text-gray-600">Blockchain records provide transparent, auditable proof of ownership without intermediaries.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: 'Physical Platinum in Secure Custody',
                desc: 'Real platinum held in insured, audited vault facilities providing the physical foundation for every token.',
                icon: (
                  <svg className="w-5 h-5 text-zinc-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                ),
              },
              {
                title: 'Blockchain-Based Ownership Records',
                desc: 'Every ownership change is recorded immutably on-chain, creating a transparent and auditable history.',
                icon: (
                  <svg className="w-5 h-5 text-zinc-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                ),
              },
              {
                title: 'Verifiable Token-to-Metal Linkage',
                desc: 'A clear, auditable connection between each digital token and the physical platinum it represents.',
                icon: (
                  <svg className="w-5 h-5 text-zinc-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                  </svg>
                ),
              },
            ].map((item, i) => (
              <div key={i} className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                <div className="w-10 h-10 bg-zinc-100 rounded-lg flex items-center justify-center mb-4">
                  {item.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== FOLD 3: WHY PLATINUM MATTERS ===================== */}
      <section id="why-platinum" className="px-4 sm:px-6 md:px-8 lg:px-12 py-20 md:py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-gray-900 leading-tight mb-6">
            Why Platinum Matters Today
          </h2>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-4xl mb-12">
            Platinum plays a critical role in industries where substitutes are limited or nonexistent.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            <div className="bg-white rounded-2xl p-6 md:p-8 border border-gray-200">
              <div className="w-10 h-10 bg-zinc-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-zinc-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-3">Extreme Scarcity</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Annual platinum production is significantly lower than gold or silver. Only approximately 190 tonnes are mined per year, making it one of the rarest traded metals on earth.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-6 md:p-8 border border-gray-200">
              <div className="w-10 h-10 bg-zinc-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-zinc-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-3">Industrial Dependence</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Essential for automotive catalysts, chemical processing, hydrogen technologies, and advanced manufacturing. These industries cannot easily substitute platinum with other metals.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-6 md:p-8 border border-gray-200">
              <div className="w-10 h-10 bg-zinc-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-zinc-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-3">Supply Concentration</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Production is geographically concentrated, with South Africa accounting for over 70% of global output. This increases sensitivity to disruption from labor, energy, and political risks.
              </p>
            </div>
          </div>

          <div className="bg-zinc-900 text-white rounded-2xl p-6 md:p-8">
            <p className="text-sm md:text-base leading-relaxed">
              Platinum&apos;s relevance is <strong>structural &mdash; not speculative.</strong> Its value is driven by real industrial demand in sectors where no viable substitutes exist.
            </p>
          </div>
        </div>
      </section>

      {/* ===================== FOLD 4: WHY TOKENIZE PLATINUM? ===================== */}
      <section className="px-4 sm:px-6 md:px-8 lg:px-12 py-20 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-gray-900 leading-tight mb-6">
            Why Tokenize Platinum?
          </h2>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-4xl mb-12">
            For an asset defined by scarcity and specialization, ownership infrastructure matters.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: 'Direct Ownership Without Physical Handling',
                desc: 'Hold platinum digitally without managing storage or logistics. The physical metal remains in secure custody while you hold verifiable digital ownership.',
              },
              {
                title: 'Transparent Ownership Records',
                desc: 'Clear, auditable blockchain-based ownership history. Every transfer and ownership change is recorded immutably on-chain.',
              },
              {
                title: 'Efficient Transferability',
                desc: 'Ownership can be transferred digitally without intermediaries. No brokers, no paperwork, no settlement delays.',
              },
              {
                title: 'Global Accessibility',
                desc: 'Access platinum ownership beyond traditional geographic constraints. Digital ownership removes barriers to entry for global participants.',
              },
            ].map((benefit, i) => (
              <div key={i} className="bg-gray-50 rounded-2xl p-6 md:p-8 border border-gray-100">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-zinc-900 text-white flex items-center justify-center flex-shrink-0 text-sm font-semibold">
                    {i + 1}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">{benefit.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== FOLD 5: PLATINUM VS OTHER PRECIOUS METALS ===================== */}
      <section className="px-4 sm:px-6 md:px-8 lg:px-12 py-20 md:py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-gray-900 leading-tight mb-6">
            Platinum Compared to Other Precious Metals
          </h2>

          <div className="overflow-x-auto rounded-2xl border border-gray-200 mb-10">
            <table className="w-full text-sm text-left">
              <thead>
                <tr className="bg-zinc-900 text-white">
                  <th className="px-4 md:px-6 py-4 font-medium">Attribute</th>
                  <th className="px-4 md:px-6 py-4 font-medium">Gold</th>
                  <th className="px-4 md:px-6 py-4 font-medium">Silver</th>
                  <th className="px-4 md:px-6 py-4 font-medium bg-white/10">Platinum</th>
                </tr>
              </thead>
              <tbody className="bg-white">
                {[
                  ['Annual Supply', 'High', 'Moderate', 'Very Limited'],
                  ['Primary Use', 'Monetary', 'Monetary & Industrial', 'Industrial & Strategic'],
                  ['Supply Concentration', 'Broad', 'Broad', 'Highly Concentrated'],
                  ['Market Role', 'Store of value', 'Dual-purpose', 'Scarcity-driven'],
                ].map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="px-4 md:px-6 py-3 font-medium text-gray-900">{row[0]}</td>
                    <td className="px-4 md:px-6 py-3 text-gray-600">{row[1]}</td>
                    <td className="px-4 md:px-6 py-3 text-gray-600">{row[2]}</td>
                    <td className="px-4 md:px-6 py-3 text-gray-900 font-medium bg-zinc-50/50">{row[3]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="bg-zinc-900 text-white rounded-2xl p-6 md:p-8">
            <p className="text-sm md:text-base leading-relaxed">
              <strong>Platinum behaves differently because it is different.</strong> Its scarcity is more extreme, its industrial applications are more specialized, and its supply chain is more concentrated than any other precious metal.
            </p>
          </div>
        </div>
      </section>

      {/* ===================== FOLD 6: HOW TOTO FINANCE DOES IT ===================== */}
      <section className="px-4 sm:px-6 md:px-8 lg:px-12 py-20 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-gray-900 leading-tight mb-6">
            How Toto Finance Tokenizes Platinum
          </h2>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-4xl mb-12">
            At Toto Finance, platinum tokenization follows the same discipline as the metal itself.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {[
              {
                title: 'Physically Backed',
                desc: 'Platinum held in secure custody provides the real-world foundation for every token issued.',
              },
              {
                title: 'Digital Ownership',
                desc: 'Digital tokens representing direct ownership, transferable and verifiable on the blockchain.',
              },
              {
                title: 'Transparent Lifecycle',
                desc: 'Transparent asset lifecycle and ownership records, from custody to transfer to redemption.',
              },
              {
                title: 'Built for Longevity',
                desc: 'Infrastructure built for accuracy, trust, and longevity — matching the permanence of the metal itself.',
              },
            ].map((item, i) => (
              <div key={i} className="bg-gray-50 rounded-2xl p-6 md:p-8 border border-gray-100">
                <div className="flex items-start gap-4">
                  <svg className="w-5 h-5 text-zinc-700 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-zinc-50 rounded-2xl p-6 md:p-8 border border-zinc-200 text-center">
            <p className="text-lg font-medium text-gray-900 mb-1">Platinum demands precision.</p>
            <p className="text-gray-600">Its ownership infrastructure should reflect that.</p>
          </div>
        </div>
      </section>

      <TrustComplianceBar variant="light" />
      <ProductTrustSection
        assetName="Tokenized Platinum"
        regulatory={{
          frameworks: 'MiCA (ESMA), TVTG (FMA Liechtenstein). Operating within EU and Liechtenstein regulatory frameworks.',
          proofLink: 'https://totofinance.co/achievements',
        }}
        custody={{
          entity: 'TotoHolding AG',
          location: 'Vaduz',
          insurance: "Lloyd's of London vault insurance.",
          vaultPartners: 'Swiss vaults.',
        }}
        audit={{
          summary: 'Hacken smart contract audit (Jan 2025). Independent third-party security verification.',
          auditLink: 'https://totofinance.co/achievements',
          certification: 'LBMA Standards.',
        }}
      />

      {/* ===================== FAQ ===================== */}
      <section className="px-4 sm:px-6 md:px-8 lg:px-12 py-20 md:py-32 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-gray-900 leading-tight mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-12">
            Common questions about tokenized platinum, custody, ownership, and how it compares to traditional precious metal investment.
          </p>
          <PlatinumFAQ faqs={faqData} />
        </div>
      </section>

      {/* ===================== FINAL CTA ===================== */}
      <section className="relative bg-gradient-to-br from-zinc-800 via-zinc-700 to-gray-900 text-white px-4 sm:px-6 md:px-8 lg:px-12 py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '40px 40px' }} />
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light leading-tight mb-3">
            Platinum is not widely owned.
          </h2>
          <p className="text-xl md:text-2xl font-light text-zinc-300 mb-8">
            It is carefully allocated.
          </p>
          <Link
            href="/products"
            className="inline-flex items-center justify-center bg-white text-gray-900 px-8 py-3.5 rounded-full text-base font-semibold hover:bg-gray-100 transition-all duration-300"
          >
            Explore Tokenized Platinum
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </div>
      </section>

      {/* ===================== NEWSLETTER + FOOTER ===================== */}
      <NewsletterSection />
      <Footer />
    </div>
  );
}
