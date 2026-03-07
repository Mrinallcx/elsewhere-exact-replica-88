// Server Component (NO "use client")
export const dynamic = 'force-dynamic';

import Link from 'next/link';
import dynamicImport from 'next/dynamic';
import { BreadcrumbStructuredData } from '../components/BreadcrumbStructuredData';
import { PageStructuredData } from '../components/PageStructuredData';
import { Navigation } from '../components/Navigation';

// Dynamic imports for heavy components
const GradualBlur = dynamicImport(() => import('../../src/components/GradualBlur'));
const Footer = dynamicImport(() => import('../components/Footer'));
const NewsletterSection = dynamicImport(() => import('../components/NewsletterSection'));
const SapphireFAQ = dynamicImport(
  () => import('../components/client/SilverFAQ').then((mod) => ({ default: mod.SilverFAQ }))
);

// FAQ Data
const faqData = [
  {
    question: 'Do I own a full sapphire or a fraction of it?',
    answer:
      'Each tokenized sapphire represents full digital ownership of a specific physical sapphire. Fractional ownership is not offered for sapphire assets.',
  },
  {
    question: 'Are sapphires certified?',
    answer:
      'Yes. Each sapphire is certified by an internationally recognized gemological laboratory, with certification details provided per stone.',
  },
  {
    question: 'Are treatments disclosed?',
    answer:
      'Any treatments identified by the certifying laboratory are disclosed in the certification report.',
  },
  {
    question: 'Where are the sapphires stored?',
    answer:
      'Sapphires are held under secure custody arrangements, with storage details disclosed per asset.',
  },
  {
    question: 'Can I view details for each sapphire?',
    answer:
      'Yes. Each sapphire has its own product page displaying certification, characteristics, and ownership information.',
  },
];

export default function TokenizedSapphirePage() {
  return (
    <div className="min-h-screen w-full relative">
      {/* Structured Data */}
      <PageStructuredData
        title="Tokenized Sapphire | Certified Natural Sapphires on Blockchain | Toto Finance"
        description="Own certified natural sapphires digitally through blockchain tokenization. Transparent pricing, verified authenticity, secure custody."
        url="https://totofinance.co/tokenized-sapphire"
        pageType="WebPage"
        breadcrumbItems={[
          { name: 'Home', item: 'https://totofinance.co' },
          { name: 'Products', item: 'https://totofinance.co/products' },
          { name: 'Tokenized Sapphire', item: 'https://totofinance.co/tokenized-sapphire' },
        ]}
      />
      <BreadcrumbStructuredData
        items={[
          { name: 'Home', item: 'https://totofinance.co' },
          { name: 'Tokenized Sapphire', item: 'https://totofinance.co/tokenized-sapphire' },
        ]}
      />
      <GradualBlur preset="page-footer" strength={2} height="4rem" animated="scroll" duration="0.5s" />
      <Navigation pastHero={true} />

      {/* ===================== FOLD 1: HERO SECTION ===================== */}
      <section className="relative bg-gradient-to-br from-blue-900 via-indigo-900 to-gray-900 text-white px-4 sm:px-6 md:px-8 lg:px-12 pt-28 md:pt-36 pb-16 md:pb-24 overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '40px 40px' }} />

        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="max-w-3xl">
            <span className="inline-block bg-white/10 text-blue-200 text-xs font-semibold tracking-widest uppercase px-4 py-1.5 rounded-full mb-6 border border-blue-400/30">
              Certified Natural Gemstones
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light leading-tight mb-6">
              Tokenized Sapphires
            </h1>
            <p className="text-base md:text-lg text-gray-300 leading-relaxed mb-8 max-w-2xl">
              Sapphires are among the world&apos;s most enduring and sought-after gemstones. Toto Finance enables direct digital ownership of certified natural sapphires through blockchain-based tokens, combining transparency, provenance, and secure custody.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/products"
                className="inline-flex items-center justify-center bg-white text-gray-900 px-6 py-3 rounded-full text-sm font-semibold hover:bg-gray-100 transition-all duration-300"
              >
                View Available Sapphires
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
              <a
                href="#how-it-works"
                className="inline-flex items-center justify-center border border-white/30 text-white px-6 py-3 rounded-full text-sm font-semibold hover:bg-white/10 transition-all duration-300"
              >
                How It Works
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== FOLD 2: WHY SAPPHIRES MATTER ===================== */}
      <section className="px-4 sm:px-6 md:px-8 lg:px-12 py-20 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto">
          <p className="text-xs uppercase tracking-widest text-gray-400 font-semibold mb-3">Timeless Value</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-gray-900 leading-tight mb-6">
            Why Sapphires Remain Globally Desired
          </h2>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-4xl mb-4">
            Sapphires have been valued for centuries for their durability, rarity, and deep cultural significance. Known for their vibrant blue hues and exceptional hardness, sapphires are prized by collectors, jewelers, and long-term holders worldwide.
          </p>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-4xl mb-12">
            Beyond aesthetics, sapphires are defined by strict gemological characteristics including color saturation, clarity, cut quality, and treatment status &mdash; all of which directly influence desirability.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: 'Exceptional Durability',
                desc: 'Mohs hardness of 9, second only to diamond. Sapphires withstand wear and time like few other gemstones.',
                icon: (
                  <svg className="w-5 h-5 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                ),
              },
              {
                title: 'Natural Rarity',
                desc: 'High-quality untreated sapphires are increasingly scarce. Fine stones command a premium that has grown steadily over decades.',
                icon: (
                  <svg className="w-5 h-5 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                  </svg>
                ),
              },
              {
                title: 'Global Recognition',
                desc: 'Universally traded and valued across markets. Sapphires are recognized in every major gemstone trading center worldwide.',
                icon: (
                  <svg className="w-5 h-5 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
              },
              {
                title: 'Cultural Significance',
                desc: 'Associated with royalty, trust, and permanence. From royal crowns to modern collections, sapphires carry enduring meaning.',
                icon: (
                  <svg className="w-5 h-5 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                ),
              },
            ].map((item, i) => (
              <div key={i} className="bg-blue-50/50 rounded-2xl p-6 border border-blue-100/50">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  {item.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== FOLD 3: TRANSPARENCY AT STONE LEVEL ===================== */}
      <section className="px-4 sm:px-6 md:px-8 lg:px-12 py-20 md:py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <p className="text-xs uppercase tracking-widest text-gray-400 font-semibold mb-3">Asset Disclosure</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-gray-900 leading-tight mb-6">
            Each Token Represents One Specific Sapphire
          </h2>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-4xl mb-4">
            Every tokenized sapphire on Toto Finance corresponds to a single, individual physical sapphire. Ownership is not fractionalized. Each asset represents full digital ownership of a distinct gemstone.
          </p>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-4xl mb-12">
            All relevant details are disclosed at the product level, ensuring clarity and transparency for every sapphire listed.
          </p>

          <div className="bg-white rounded-2xl p-6 md:p-8 border border-gray-200">
            <h3 className="text-xl font-medium text-gray-900 mb-6">Stone-Level Disclosures Include</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                'Carat weight and gemstone dimensions',
                'Color characteristics and cut style',
                'Treatment status (as disclosed by certification)',
                'Certification laboratory details',
                'Custody and storage information',
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3 p-4 bg-gray-50 rounded-xl">
                  <svg className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-sm text-gray-700">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===================== FOLD 4: CERTIFICATION & AUTHENTICITY ===================== */}
      <section className="px-4 sm:px-6 md:px-8 lg:px-12 py-20 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto">
          <p className="text-xs uppercase tracking-widest text-gray-400 font-semibold mb-3">Verification</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-gray-900 leading-tight mb-6">
            Independently Certified Natural Sapphires
          </h2>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-4xl mb-4">
            All sapphires listed on Toto Finance are certified by internationally recognized gemological laboratories. Certification reports verify authenticity, gemstone identity, and key quality attributes.
          </p>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-4xl mb-12">
            Certification details are provided individually for each sapphire and accessible directly from the corresponding product page.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: 'Natural Sapphire Verification',
                desc: 'Every stone is confirmed as a natural sapphire through independent gemological analysis, ruling out synthetics and simulants.',
              },
              {
                title: 'Disclosure of Treatments',
                desc: 'Any treatments identified during laboratory analysis — such as heat treatment — are fully disclosed in the certification report.',
              },
              {
                title: 'Gemological Grading & Analysis',
                desc: 'Detailed grading of color, clarity, cut, and carat weight by certified gemologists using internationally recognized standards.',
              },
              {
                title: 'Independent Third-Party Assessment',
                desc: 'All certifications are performed by independent laboratories with no commercial interest in the sale, ensuring impartial assessment.',
              },
            ].map((item, i) => (
              <div key={i} className="bg-gray-50 rounded-2xl p-6 md:p-8 border border-gray-100">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-blue-900 text-white flex items-center justify-center flex-shrink-0 text-sm font-semibold">
                    {i + 1}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== FOLD 5: DIGITAL OWNERSHIP & CUSTODY ===================== */}
      <section id="how-it-works" className="px-4 sm:px-6 md:px-8 lg:px-12 py-20 md:py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <p className="text-xs uppercase tracking-widest text-gray-400 font-semibold mb-3">Tokenization</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-gray-900 leading-tight mb-6">
            How Tokenized Sapphire Ownership Works
          </h2>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-4xl mb-4">
            Toto Finance uses blockchain technology to represent certified sapphires as digital tokens, enabling transparent ownership records and secure transferability.
          </p>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-4xl mb-12">
            While ownership is digital, the physical sapphire is maintained under secure custody arrangements.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              'One-to-one digital ownership of a specific sapphire',
              'Blockchain-recorded ownership history',
              'Secure custody with professional handling',
              'Transparent access to certification and asset data',
              'Ability to transfer or redeem according to platform terms',
            ].map((feature, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 border border-gray-200">
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <p className="text-sm text-gray-700 leading-relaxed">{feature}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== FOLD 6: COMPARISON ===================== */}
      <section className="px-4 sm:px-6 md:px-8 lg:px-12 py-20 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto">
          <p className="text-xs uppercase tracking-widest text-gray-400 font-semibold mb-3">Market Clarity</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-gray-900 leading-tight mb-6">
            Tokenized Sapphires vs Traditional Gemstone Markets
          </h2>

          <div className="overflow-x-auto rounded-2xl border border-gray-200">
            <table className="w-full text-sm text-left">
              <thead>
                <tr className="bg-blue-900 text-white">
                  <th className="px-4 md:px-6 py-4 font-medium">Feature</th>
                  <th className="px-4 md:px-6 py-4 font-medium">Traditional Market</th>
                  <th className="px-4 md:px-6 py-4 font-medium bg-white/10">Tokenized Sapphire</th>
                </tr>
              </thead>
              <tbody className="bg-white">
                {[
                  ['Pricing Transparency', 'Opaque dealer pricing', 'Transparent listing'],
                  ['Ownership Records', 'Paper-based', 'On-chain'],
                  ['Certification Access', 'Often fragmented', 'Directly disclosed'],
                  ['Liquidity Options', 'Limited', 'Platform-enabled'],
                  ['Asset Identification', 'General', 'Specific, stone-level'],
                ].map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="px-4 md:px-6 py-3 font-medium text-gray-900">{row[0]}</td>
                    <td className="px-4 md:px-6 py-3 text-gray-600">{row[1]}</td>
                    <td className="px-4 md:px-6 py-3 text-gray-900 font-medium bg-blue-50/50">{row[2]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ===================== FOLD 7: FAQ ===================== */}
      <section className="px-4 sm:px-6 md:px-8 lg:px-12 py-20 md:py-32 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-gray-900 leading-tight mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-12">
            Common questions about tokenized sapphires, certification, custody, and digital ownership on Toto Finance.
          </p>
          <SapphireFAQ faqs={faqData} />
        </div>
      </section>

      {/* ===================== FOLD 8: FINAL CTA ===================== */}
      <section className="relative bg-gradient-to-br from-blue-900 via-indigo-900 to-gray-900 text-white px-4 sm:px-6 md:px-8 lg:px-12 py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '40px 40px' }} />
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <p className="text-xs uppercase tracking-widest text-blue-300 font-semibold mb-3">Explore</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light leading-tight mb-6">
            Discover Certified Sapphires with Digital Ownership
          </h2>
          <p className="text-base md:text-lg text-gray-300 leading-relaxed mb-8">
            Explore a curated selection of certified natural sapphires, each represented by a blockchain token and backed by transparent disclosures.
          </p>
          <Link
            href="/products"
            className="inline-flex items-center justify-center bg-white text-gray-900 px-8 py-3.5 rounded-full text-base font-semibold hover:bg-gray-100 transition-all duration-300"
          >
            View Sapphire Collection
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
