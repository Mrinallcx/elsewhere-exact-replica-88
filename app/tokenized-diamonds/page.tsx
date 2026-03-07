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
const DiamondFAQ = dynamicImport(
  () => import('../components/client/SilverFAQ').then((mod) => ({ default: mod.SilverFAQ }))
);

// FAQ Data
const faqData = [
  {
    question: 'What are tokenized diamonds?',
    answer:
      'Tokenized diamonds are physical, GIA-certified diamonds represented as digital tokens on the blockchain. Each token corresponds to a specific diamond held in secure custody.',
  },
  {
    question: 'Are tokenized diamonds real diamonds?',
    answer:
      'Yes. All tokenized diamonds on Toto Finance are natural, physical diamonds certified by GIA. No lab-grown or synthetic stones.',
  },
  {
    question: 'Do I own a full diamond or a fraction of it?',
    answer:
      'Each token represents direct digital ownership of a specific physical diamond. Fractional ownership is not offered.',
  },
  {
    question: 'How is diamond ownership verified?',
    answer:
      'Ownership and certification details are recorded on the blockchain and can be independently verified.',
  },
  {
    question: 'Where are the diamonds stored?',
    answer:
      'Diamonds are held under secure custody arrangements, with storage and certification details disclosed per asset.',
  },
];

export default function TokenizedDiamondsPage() {
  return (
    <div className="min-h-screen w-full relative">
      {/* Structured Data */}
      <PageStructuredData
        title="Tokenized Diamonds | Physical GIA-Certified Diamonds | Toto Finance"
        description="Own certified natural diamonds digitally through blockchain tokenization. GIA-certified stones, transparent ownership, secure custody."
        url="https://totofinance.co/tokenized-diamonds"
        pageType="WebPage"
        breadcrumbItems={[
          { name: 'Home', item: 'https://totofinance.co' },
          { name: 'Products', item: 'https://totofinance.co/products' },
          { name: 'Tokenized Diamonds', item: 'https://totofinance.co/tokenized-diamonds' },
        ]}
      />
      <BreadcrumbStructuredData
        items={[
          { name: 'Home', item: 'https://totofinance.co' },
          { name: 'Tokenized Diamonds', item: 'https://totofinance.co/tokenized-diamonds' },
        ]}
      />
      <GradualBlur preset="page-footer" strength={2} height="4rem" animated="scroll" duration="0.5s" />
      <Navigation pastHero={true} />

      {/* ===================== FOLD 1: HERO SECTION ===================== */}
      <section className="relative bg-gradient-to-br from-neutral-900 via-neutral-800 to-gray-900 text-white px-4 sm:px-6 md:px-8 lg:px-12 pt-28 md:pt-36 pb-16 md:pb-24 overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '40px 40px' }} />

        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light leading-tight mb-6">
              Tokenized Diamonds
            </h1>
            <h2 className="text-xl md:text-2xl font-light text-neutral-300 mb-6">
              Certified diamonds. Digital ownership. Complete transparency.
            </h2>
            <p className="text-base md:text-lg text-gray-400 leading-relaxed mb-4 max-w-2xl">
              Diamonds have always represented rarity, permanence, and value. Yet traditional diamond markets remain opaque, illiquid, and difficult to navigate.
            </p>
            <p className="text-base md:text-lg text-gray-400 leading-relaxed mb-6 max-w-2xl">
              Tokenization modernizes diamond ownership &mdash; enabling certified stones to be owned and transferred digitally while remaining fully physical and verifiable.
            </p>
            <div className="bg-white/5 border border-white/10 rounded-xl p-5 mb-8 max-w-lg">
              <p className="text-sm text-gray-300 leading-relaxed">
                This is not synthetic.<br />
                This is not simulated.<br />
                <strong className="text-white">These are real, GIA-certified diamonds &mdash; owned digitally.</strong>
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/products"
                className="inline-flex items-center justify-center bg-white text-gray-900 px-6 py-3 rounded-full text-sm font-semibold hover:bg-gray-100 transition-all duration-300"
              >
                Explore Tokenized Diamonds
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

      {/* ===================== FOLD 2: WHAT ARE TOKENIZED DIAMONDS? ===================== */}
      <section id="how-it-works" className="px-4 sm:px-6 md:px-8 lg:px-12 py-20 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-gray-900 leading-tight mb-6">
            What Are Tokenized Diamonds?
          </h2>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-4xl mb-12">
            Tokenized diamonds represent direct digital ownership of physical, certified diamonds, recorded on the blockchain. Each token corresponds to a specific, individual diamond verified by GIA certification and held in secure custody.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-neutral-50 rounded-2xl p-8 border border-neutral-100">
              <p className="text-lg font-medium text-gray-900 mb-2">Diamonds remain physical, rare, and certified.</p>
              <p className="text-gray-600">The underlying asset retains all its fundamental properties &mdash; natural origin, GIA grading, and intrinsic value.</p>
            </div>
            <div className="bg-neutral-50 rounded-2xl p-8 border border-neutral-100">
              <p className="text-lg font-medium text-gray-900 mb-2">Ownership becomes digital, transparent, and verifiable.</p>
              <p className="text-gray-600">Blockchain records provide transparent, auditable proof of ownership without intermediaries or ambiguity.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              'Each token linked to a specific GIA-certified diamond',
              'Direct digital ownership without physical handling',
              'Transparent certification and ownership records',
              'Secure custody of physical diamonds',
              'Blockchain-recorded ownership history',
            ].map((item, i) => (
              <div key={i} className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-neutral-700 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <p className="text-sm text-gray-700 leading-relaxed">{item}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== FOLD 3: WHY DIAMONDS MATTER ===================== */}
      <section className="px-4 sm:px-6 md:px-8 lg:px-12 py-20 md:py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-gray-900 leading-tight mb-6">
            Why Diamonds Matter
          </h2>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-4xl mb-4">
            Natural diamonds are finite resources formed over billions of years. High-quality certified stones are increasingly scarce as accessible deposits decline.
          </p>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-4xl mb-12">
            Diamonds also hold enduring cultural significance across global markets, maintaining demand across economic cycles. Beyond jewelry, diamonds are essential for advanced industrial applications.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            <div className="bg-white rounded-2xl p-6 md:p-8 border border-gray-200">
              <div className="w-10 h-10 bg-neutral-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-neutral-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-3">Tangible Scarcity</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Natural diamonds cannot be manufactured at scale. Each stone is unique, formed over billions of years under extreme conditions. Accessible deposits are declining globally.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-6 md:p-8 border border-gray-200">
              <div className="w-10 h-10 bg-neutral-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-neutral-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-3">Cultural &amp; Financial Significance</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Diamonds represent concentrated value across societies. They maintain demand across economic cycles as symbols of permanence, commitment, and wealth preservation.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-6 md:p-8 border border-gray-200">
              <div className="w-10 h-10 bg-neutral-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-neutral-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                </svg>
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-3">Industrial Utility</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Used in precision cutting, semiconductors, quantum research, and medical tools. Diamond&apos;s unique physical properties make it irreplaceable in advanced manufacturing.
              </p>
            </div>
          </div>

          <div className="bg-neutral-900 text-white rounded-2xl p-6 md:p-8">
            <p className="text-sm md:text-base leading-relaxed">
              Traditional diamond markets suffer from opaque pricing, limited liquidity, and fragmented verification. <strong>Tokenization addresses these inefficiencies without altering the asset itself.</strong>
            </p>
          </div>
        </div>
      </section>

      {/* ===================== FOLD 4: WHY TOKENIZE DIAMONDS? ===================== */}
      <section className="px-4 sm:px-6 md:px-8 lg:px-12 py-20 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-gray-900 leading-tight mb-6">
            Why Tokenize Diamonds?
          </h2>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-4xl mb-12">
            Traditional diamond ownership was built for retail jewelry &mdash; not for transparent, digital-first ownership. Tokenization modernizes how diamonds are accessed and managed.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: 'Direct Digital Ownership',
                desc: 'Own certified diamonds digitally without managing physical logistics. The stone stays in secure custody; you hold verifiable ownership.',
              },
              {
                title: 'Transparent Pricing & Verification',
                desc: 'Certification and ownership data are directly accessible. No hidden markups, no opaque dealer negotiations.',
              },
              {
                title: 'Efficient Transferability',
                desc: 'Ownership can be transferred digitally without intermediaries. No brokers, no paperwork, no settlement delays.',
              },
              {
                title: 'Global Accessibility',
                desc: 'Access diamond ownership without geographic constraints. Digital ownership removes barriers for global participants.',
              },
              {
                title: 'Clear Ownership Records',
                desc: 'Blockchain-based records eliminate disputes and ambiguity. Every ownership change is immutably recorded on-chain.',
              },
            ].map((benefit, i) => (
              <div key={i} className="bg-gray-50 rounded-2xl p-6 md:p-8 border border-gray-100">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-neutral-900 text-white flex items-center justify-center flex-shrink-0 text-sm font-semibold">
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

      {/* ===================== FOLD 5: COMPARISON TABLE ===================== */}
      <section className="px-4 sm:px-6 md:px-8 lg:px-12 py-20 md:py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-gray-900 leading-tight mb-12">
            Tokenized Diamonds vs Traditional Diamond Ownership
          </h2>

          <div className="overflow-x-auto rounded-2xl border border-gray-200 mb-10">
            <table className="w-full text-sm text-left">
              <thead>
                <tr className="bg-neutral-900 text-white">
                  <th className="px-4 md:px-6 py-4 font-medium">Feature</th>
                  <th className="px-4 md:px-6 py-4 font-medium">Traditional Diamonds</th>
                  <th className="px-4 md:px-6 py-4 font-medium bg-white/10">Tokenized Diamonds</th>
                </tr>
              </thead>
              <tbody className="bg-white">
                {[
                  ['Pricing', 'Opaque, negotiation-based', 'Transparent'],
                  ['Ownership Records', 'Paper-based', 'On-chain'],
                  ['Certification Access', 'Fragmented', 'Directly disclosed'],
                  ['Liquidity', 'Limited & slow', 'Platform-enabled'],
                  ['Verification', 'Trust-based', 'Blockchain-recorded'],
                ].map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="px-4 md:px-6 py-3 font-medium text-gray-900">{row[0]}</td>
                    <td className="px-4 md:px-6 py-3 text-gray-600">{row[1]}</td>
                    <td className="px-4 md:px-6 py-3 text-gray-900 font-medium bg-neutral-50/50">{row[2]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="bg-neutral-900 text-white rounded-2xl p-6 md:p-8">
            <p className="text-sm md:text-base leading-relaxed">
              <strong>Tokenized diamonds preserve diamond fundamentals while eliminating market friction.</strong> The same certified stones, with modern ownership infrastructure.
            </p>
          </div>
        </div>
      </section>

      {/* ===================== FOLD 6: HOW TOTO FINANCE DOES IT ===================== */}
      <section className="px-4 sm:px-6 md:px-8 lg:px-12 py-20 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-gray-900 leading-tight mb-6">
            How Toto Finance Tokenizes Diamonds
          </h2>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-4xl mb-12">
            At Toto Finance, diamond tokenization is built on certification, custody, and transparency.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {[
              {
                title: 'GIA-Certified Diamonds Only',
                desc: 'Each diamond is certified by the Gemological Institute of America (GIA) — the world\u2019s most respected diamond grading authority.',
              },
              {
                title: 'Secure Custody',
                desc: 'Physical diamonds are stored under professional custody arrangements with insured, audited facilities.',
              },
              {
                title: 'On-Chain Records',
                desc: 'Certification details and ownership history are recorded digitally on the blockchain, providing transparent and immutable records.',
              },
              {
                title: 'Transparent Lifecycle',
                desc: 'From certification to ownership transfer, each stage is verifiable. No hidden steps, no opaque processes.',
              },
            ].map((item, i) => (
              <div key={i} className="bg-gray-50 rounded-2xl p-6 md:p-8 border border-gray-100">
                <div className="flex items-start gap-4">
                  <svg className="w-5 h-5 text-neutral-700 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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

          <div className="bg-neutral-50 rounded-2xl p-6 md:p-8 border border-neutral-200 text-center">
            <p className="text-lg font-medium text-gray-900 mb-1">Diamonds are about trust.</p>
            <p className="text-gray-600">Tokenization makes that trust transparent.</p>
          </div>
        </div>
      </section>

      {/* ===================== FAQ ===================== */}
      <section className="px-4 sm:px-6 md:px-8 lg:px-12 py-20 md:py-32 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-gray-900 leading-tight mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-12">
            Common questions about tokenized diamonds, GIA certification, custody, and digital ownership on Toto Finance.
          </p>
          <DiamondFAQ faqs={faqData} />
        </div>
      </section>

      {/* ===================== FINAL CTA ===================== */}
      <section className="relative bg-gradient-to-br from-neutral-900 via-neutral-800 to-gray-900 text-white px-4 sm:px-6 md:px-8 lg:px-12 py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '40px 40px' }} />
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light leading-tight mb-3">
            Diamonds have always been about rarity and value.
          </h2>
          <p className="text-xl md:text-2xl font-light text-neutral-300 mb-8">
            Tokenization is about transparency and access.
          </p>
          <Link
            href="/products"
            className="inline-flex items-center justify-center bg-white text-gray-900 px-8 py-3.5 rounded-full text-base font-semibold hover:bg-gray-100 transition-all duration-300"
          >
            Explore Tokenized Diamonds
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
