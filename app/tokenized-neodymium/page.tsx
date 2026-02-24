// Server Component (NO "use client")
// Static Generation with ISR - equivalent to getStaticProps with revalidate: 60
export const revalidate = 60;

import Link from 'next/link';
import dynamicImport from 'next/dynamic';
import { BreadcrumbStructuredData } from '../components/BreadcrumbStructuredData';
import { PageStructuredData } from '../components/PageStructuredData';
import { Navigation } from '../components/Navigation';

// Dynamic imports for heavy components
const GradualBlur = dynamicImport(() => import('../../src/components/GradualBlur'));
const Footer = dynamicImport(() => import('../components/Footer'));
const NewsletterSection = dynamicImport(() => import('../components/NewsletterSection'));
const NeodymiumTickerBar = dynamicImport(
  () => import('../components/client/NeodymiumTickerBar').then((mod) => ({ default: mod.NeodymiumTickerBar }))
);
const NeodymiumFAQ = dynamicImport(
  () => import('../components/client/SilverFAQ').then((mod) => ({ default: mod.SilverFAQ }))
);

// FAQ Data
const faqData = [
  {
    question: 'What is tokenized neodymium?',
    answer:
      'Tokenized neodymium represents digital exposure to neodymium supply through blockchain-based infrastructure, enabling efficient access, transfer, and settlement.',
  },
  {
    question: 'Why is neodymium important for AI and EVs?',
    answer:
      'Neodymium is essential for NdFeB permanent magnets, which power electric motors, AI hardware, robotics, and wind turbines with high efficiency and compact design.',
  },
  {
    question: 'How is tokenized neodymium different from traditional commodities?',
    answer:
      'Tokenization enables fractional access, instant settlement, global participation, and digital transferability without traditional market constraints.',
  },
  {
    question: 'Who can access tokenized neodymium?',
    answer:
      'Tokenized neodymium is designed for industrial users, investors, and digital asset participants seeking exposure to strategic rare earth materials.',
  },
  {
    question: 'Is neodymium supply constrained?',
    answer:
      'Yes. Neodymium supply is geographically concentrated and slow to expand, while demand continues to grow due to AI, EVs, and renewable energy deployment.',
  },
];

// Equivalent to getStaticProps - fetch data here
export default async function TokenizedNeodymiumPage() {
  // Example: Fetch neodymium data from API if available
  // const neodymiumData = await fetch('https://api.example.com/tokenized-neodymium', {
  //   next: { revalidate: 60 } // ISR: revalidate every 60 seconds
  // }).then(res => res.json());
  
  return (
    <div className="min-h-screen w-full relative">
      {/* Structured Data */}
      <PageStructuredData
        title="Tokenized Neodymium | Digital Rare Earth Supply for AI & EVs | Toto Finance"
        description="Tokenized neodymium by Toto Finance. Digitally represented neodymium supply powering AI hardware, EV motors, wind turbines, and advanced magnets."
        url="https://totofinance.co/tokenized-neodymium"
        pageType="WebPage"
        breadcrumbItems={[
          { name: 'Home', item: 'https://totofinance.co' },
          { name: 'Products', item: 'https://totofinance.co/products' },
          { name: 'Tokenized Neodymium', item: 'https://totofinance.co/tokenized-neodymium' },
        ]}
      />
      <BreadcrumbStructuredData
        items={[
          { name: 'Home', item: 'https://totofinance.co' },
          { name: 'Tokenized Neodymium', item: 'https://totofinance.co/tokenized-neodymium' },
        ]}
      />
      <GradualBlur preset="page-footer" strength={2} height="4rem" animated="scroll" duration="0.5s" />
      <Navigation pastHero={true} />

      {/* ===================== FOLD 1: HERO SECTION ===================== */}
      <section className="relative bg-gradient-to-br from-sky-900 via-sky-800 to-gray-900 text-white px-4 sm:px-6 md:px-8 lg:px-12 pt-28 md:pt-36 pb-16 md:pb-24 overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '40px 40px' }} />

        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="max-w-3xl">
            <span className="inline-block bg-white/10 text-sky-200 text-xs font-semibold tracking-widest uppercase px-4 py-1.5 rounded-full mb-6 border border-sky-400/30">
              Critical Rare Earth for AI &amp; Magnets
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light leading-tight mb-6">
              Tokenized Neodymium
            </h1>
            <p className="text-base md:text-lg text-gray-300 leading-relaxed mb-8 max-w-2xl">
              Neodymium is the foundation of permanent magnets powering AI data centers, electric vehicles, robotics, and wind turbines. Toto Finance is building the infrastructure to digitize neodymium supply &mdash; enabling global access, instant settlement, and programmable secondary markets.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/products" className="inline-flex items-center justify-center bg-white text-gray-900 px-6 py-3 rounded-full text-sm font-semibold hover:bg-gray-100 transition-all duration-300">
                Explore Products
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
              </Link>
              <a href="#why-neodymium" className="inline-flex items-center justify-center border border-white/30 text-white px-6 py-3 rounded-full text-sm font-semibold hover:bg-white/10 transition-all duration-300">
                Why Neodymium Matters
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== FOLD 2: TICKER + WHY NEODYMIUM MATTERS ===================== */}
      <NeodymiumTickerBar />

      <section id="why-neodymium" className="px-4 sm:px-6 md:px-8 lg:px-12 py-20 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto">
          <p className="text-xs uppercase tracking-widest text-gray-400 font-semibold mb-3">Strategic Importance</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-gray-900 leading-tight mb-6">Why Neodymium Is Essential to the AI Economy</h2>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-4xl mb-4">Neodymium is a critical input for neodymium-iron-boron (NdFeB) permanent magnets &mdash; the most powerful and efficient magnets ever produced. These magnets are indispensable for modern technology and cannot be easily substituted at scale.</p>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-4xl mb-12">Neodymium demand is being structurally driven by the same forces reshaping the global economy: artificial intelligence, electrification, automation, and clean energy infrastructure.</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
            <div className="bg-gray-50 rounded-2xl p-6 md:p-8 border border-gray-100">
              <div className="w-10 h-10 bg-sky-50 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-sky-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" /></svg>
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-3">AI &amp; Robotics</h3>
              <p className="text-sm text-gray-600 leading-relaxed">Precision motors and actuators used in AI hardware and robotics rely on neodymium magnets for power density and efficiency.</p>
            </div>
            <div className="bg-gray-50 rounded-2xl p-6 md:p-8 border border-gray-100">
              <div className="w-10 h-10 bg-green-50 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-3">Electric Vehicles</h3>
              <p className="text-sm text-gray-600 leading-relaxed">EV traction motors depend on NdFeB magnets to achieve high torque in compact designs.</p>
            </div>
            <div className="bg-gray-50 rounded-2xl p-6 md:p-8 border border-gray-100">
              <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" /></svg>
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-3">Wind Energy</h3>
              <p className="text-sm text-gray-600 leading-relaxed">Direct-drive wind turbines use large quantities of neodymium-based magnets to improve efficiency and reliability.</p>
            </div>
            <div className="bg-gray-50 rounded-2xl p-6 md:p-8 border border-gray-100">
              <div className="w-10 h-10 bg-red-50 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-3">Defense &amp; Aerospace</h3>
              <p className="text-sm text-gray-600 leading-relaxed">Radar systems, guidance technologies, and aerospace actuators require neodymium magnets for performance under extreme conditions.</p>
            </div>
          </div>

          <div className="bg-gray-900 text-white rounded-2xl p-6 md:p-8">
            <p className="text-sm md:text-base leading-relaxed"><strong>Neodymium is not a discretionary material</strong> &mdash; it is core infrastructure for AI and electrification.</p>
          </div>
        </div>
      </section>

      {/* ===================== FOLD 3: SUPPLY CONSTRAINT ===================== */}
      <section className="px-4 sm:px-6 md:px-8 lg:px-12 py-20 md:py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <p className="text-xs uppercase tracking-widest text-gray-400 font-semibold mb-3">Market Dynamics</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-gray-900 leading-tight mb-6">A Concentrated Supply Chain Under Growing Pressure</h2>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-4xl mb-4">Neodymium supply is highly concentrated and tightly linked to rare earth mining and processing capacity. Expanding supply is capital-intensive, slow, and constrained by geology, processing complexity, and geopolitical realities.</p>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-4xl mb-12">At the same time, global demand continues to accelerate as AI compute scales, EV adoption grows, and renewable energy deployment increases.</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
            {[
              { title: 'High geographic concentration of rare earth processing', icon: 'M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z' },
              { title: 'Long development timelines for new supply', icon: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z' },
              { title: 'Rising neodymium intensity per unit of technology output', icon: 'M13 7h8m0 0v8m0-8l-8 8-4-4-6 6' },
              { title: 'Limited short-term substitution options', icon: 'M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z' },
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 md:p-8 border border-gray-200 flex items-start gap-4">
                <div className="w-10 h-10 bg-sky-50 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-sky-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.icon} /></svg>
                </div>
                <p className="text-base font-medium text-gray-900">{item.title}</p>
              </div>
            ))}
          </div>

          <div className="bg-gray-900 text-white rounded-2xl p-6 md:p-8">
            <p className="text-sm md:text-base leading-relaxed"><strong>Neodymium is entering a phase of strategic scarcity</strong> driven by technology, not cycles.</p>
          </div>
        </div>
      </section>

      {/* ===================== FOLD 4: HOW TOKENIZED NEODYMIUM WORKS ===================== */}
      <section className="px-4 sm:px-6 md:px-8 lg:px-12 py-20 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto">
          <p className="text-xs uppercase tracking-widest text-gray-400 font-semibold mb-3">Digital Access</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-gray-900 leading-tight mb-6">How Tokenized Neodymium Works</h2>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-4xl mb-4">Tokenized neodymium on Toto Finance provides digital access to neodymium supply through blockchain-based infrastructure designed for transparency, efficiency, and global participation.</p>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-4xl mb-12">This approach modernizes how strategic materials are accessed, held, and transferred.</p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-gray-50 rounded-2xl p-6 md:p-8 border border-gray-100">
              <h3 className="text-xl font-medium text-gray-900 mb-6">Core Characteristics</h3>
              <ul className="space-y-4">
                {[
                  'Digitally represented neodymium supply linked to verified sourcing',
                  'Fractional access without traditional commodity market barriers',
                  '24/7 availability and global reach',
                  'Instant settlement using stablecoins',
                  'Designed for secondary trading and portfolio allocation',
                ].map((f, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-gray-600">
                    <svg className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    {f}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gray-50 rounded-2xl p-6 md:p-8 border border-gray-100">
              <h3 className="text-xl font-medium text-gray-900 mb-6">Use Cases</h3>
              <ul className="space-y-4">
                {[
                  'Industrial participants securing exposure to future magnet supply',
                  'Investors positioning for AI-driven rare earth demand',
                  'Digital asset portfolios diversifying into physical infrastructure materials',
                  'Strategic allocation to materials critical for energy transition',
                ].map((f, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-gray-600">
                    <svg className="w-4 h-4 text-sky-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== FOLD 5: WHO USES TOKENIZED NEODYMIUM ===================== */}
      <section className="px-4 sm:px-6 md:px-8 lg:px-12 py-20 md:py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <p className="text-xs uppercase tracking-widest text-gray-400 font-semibold mb-3">Participants</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-gray-900 leading-tight mb-12">Who Tokenized Neodymium Is For</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl p-6 md:p-8 border border-gray-200">
              <span className="inline-block bg-sky-100 text-sky-800 text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full mb-4">Industrial &amp; Strategic</span>
              <h3 className="text-xl font-medium text-gray-900 mb-3">Industrial &amp; Strategic Buyers</h3>
              <p className="text-sm text-gray-600 leading-relaxed">Manufacturers of EVs, wind turbines, robotics systems, and advanced electronics seeking predictable access to neodymium exposure.</p>
            </div>
            <div className="bg-white rounded-2xl p-6 md:p-8 border border-gray-200">
              <span className="inline-block bg-blue-100 text-blue-800 text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full mb-4">Institutional</span>
              <h3 className="text-xl font-medium text-gray-900 mb-3">Institutional &amp; Professional Investors</h3>
              <p className="text-sm text-gray-600 leading-relaxed">Funds and asset managers seeking exposure to structural demand growth driven by AI, electrification, and clean energy.</p>
            </div>
            <div className="bg-white rounded-2xl p-6 md:p-8 border border-gray-200">
              <span className="inline-block bg-purple-100 text-purple-800 text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full mb-4">Digital Asset</span>
              <h3 className="text-xl font-medium text-gray-900 mb-3">Digital Asset Participants</h3>
              <p className="text-sm text-gray-600 leading-relaxed">Crypto-native funds and on-chain treasuries seeking real-world asset exposure tied to critical technology inputs.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== FOLD 6: FAQ ===================== */}
      <section className="px-4 sm:px-6 md:px-8 lg:px-12 py-20 md:py-32 bg-white">
        <div className="max-w-3xl mx-auto">
          <p className="text-xs uppercase tracking-widest text-gray-400 font-semibold mb-3">Frequently Asked Questions</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-gray-900 leading-tight mb-12">Frequently Asked Questions</h2>
          <NeodymiumFAQ faqs={faqData} />
        </div>
      </section>

      {/* ===================== FOLD 7: FINAL CTA ===================== */}
      <section className="relative bg-gradient-to-br from-sky-900 via-sky-800 to-gray-900 text-white px-4 sm:px-6 md:px-8 lg:px-12 py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '40px 40px' }} />
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <p className="text-xs uppercase tracking-widest text-gray-400 font-semibold mb-3">Early Access</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light leading-tight mb-6">Neodymium Is a Strategic Chokepoint of the AI Era</h2>
          <p className="text-base md:text-lg text-gray-300 leading-relaxed mb-8">Permanent magnets are a hidden dependency of AI infrastructure, electric mobility, and clean energy. Neodymium supply is constrained, concentrated, and increasingly strategic. Toto Finance is building the digital rails to access it globally.</p>
          <Link href="/products" className="inline-flex items-center justify-center bg-white text-gray-900 px-8 py-3.5 rounded-full text-base font-semibold hover:bg-gray-100 transition-all duration-300">
            Get Early Access
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
          </Link>
        </div>
      </section>

      {/* ===================== NEWSLETTER + FOOTER ===================== */}
      <NewsletterSection />
      <Footer />
    </div>
  );
}
