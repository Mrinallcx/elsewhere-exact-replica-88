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
const TerbiumTickerBar = dynamicImport(
  () => import('../components/client/TerbiumTickerBar').then((mod) => ({ default: mod.TerbiumTickerBar }))
);
const TerbiumFAQ = dynamicImport(
  () => import('../components/client/SilverFAQ').then((mod) => ({ default: mod.SilverFAQ }))
);

// FAQ Data
const faqData = [
  {
    question: 'What is tokenized terbium?',
    answer:
      'Tokenized terbium represents digital exposure to terbium supply using blockchain-based infrastructure for efficient access and transfer.',
  },
  {
    question: 'Why is terbium important for magnets?',
    answer:
      'Terbium enhances magnet stability and durability, particularly in high-performance and defense-grade applications.',
  },
  {
    question: 'Is terbium supply limited?',
    answer:
      'Yes. Terbium is one of the least abundant rare earth elements and is primarily produced as a byproduct, limiting supply flexibility.',
  },
  {
    question: 'How does tokenization improve access to terbium?',
    answer:
      'Tokenization enables fractional access, instant settlement, and global participation without traditional procurement constraints.',
  },
  {
    question: 'Who should consider tokenized terbium?',
    answer:
      'Industrial users, investors, and digital asset participants seeking exposure to strategically critical rare earth materials.',
  },
];

export default function TokenizedTerbiumPage() {
  return (
    <div className="min-h-screen w-full relative">
      {/* Structured Data */}
      <PageStructuredData
        title="Tokenized Terbium | Strategic Rare Earth for Magnets & Defense | Toto Finance"
        description="Tokenized terbium by Toto Finance. Digitally represented terbium supply essential for magnet stabilization, defense electronics, solid-state lighting, and advanced AI-era technologies."
        url="https://totofinance.co/tokenized-terbium"
        pageType="WebPage"
        breadcrumbItems={[
          { name: 'Home', item: 'https://totofinance.co' },
          { name: 'Products', item: 'https://totofinance.co/products' },
          { name: 'Tokenized Terbium', item: 'https://totofinance.co/tokenized-terbium' },
        ]}
      />
      <BreadcrumbStructuredData
        items={[
          { name: 'Home', item: 'https://totofinance.co' },
          { name: 'Tokenized Terbium', item: 'https://totofinance.co/tokenized-terbium' },
        ]}
      />
      <GradualBlur preset="page-footer" strength={2} height="4rem" animated="scroll" duration="0.5s" />
      <Navigation pastHero={true} />

      {/* ===================== FOLD 1: HERO SECTION ===================== */}
      <section className="relative bg-gradient-to-br from-lime-900 via-lime-800 to-gray-900 text-white px-4 sm:px-6 md:px-8 lg:px-12 pt-28 md:pt-36 pb-16 md:pb-24 overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '40px 40px' }} />

        <div className="relative z-10 max-w-7xl mx-auto">
          <div>
            <div>
              <span className="inline-block bg-white/10 text-lime-200 text-xs font-semibold tracking-widest uppercase px-4 py-1.5 rounded-full mb-6 border border-lime-400/30">
                Magnet Stability &amp; Defense Material
              </span>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light leading-tight mb-6">
                Tokenized Terbium
              </h1>
              <p className="text-base md:text-lg text-gray-300 leading-relaxed mb-8 max-w-xl">
                Terbium plays a critical role in stabilizing high-performance magnets and enabling advanced defense electronics, solid-state lighting, and next-generation AI systems. Toto Finance is building the infrastructure to digitize terbium supply with global access and instant settlement.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/products" className="inline-flex items-center justify-center bg-white text-gray-900 px-6 py-3 rounded-full text-sm font-semibold hover:bg-gray-100 transition-all duration-300">
                  Explore Products
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
                </Link>
                <a href="#why-terbium" className="inline-flex items-center justify-center border border-white/30 text-white px-6 py-3 rounded-full text-sm font-semibold hover:bg-white/10 transition-all duration-300">
                  Why Terbium Matters
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                </a>
              </div>
            </div>
          </div>
          </div>
      </section>

      {/* ===================== FOLD 2: TICKER + WHY TERBIUM MATTERS ===================== */}
      <TerbiumTickerBar />

      <section id="why-terbium" className="px-4 sm:px-6 md:px-8 lg:px-12 py-20 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto">
          <p className="text-xs uppercase tracking-widest text-gray-400 font-semibold mb-3">Strategic Importance</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-gray-900 leading-tight mb-6">Why Terbium Is Essential for Advanced Magnet Performance</h2>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-4xl mb-4">Terbium is a heavy rare earth element used to enhance the stability, efficiency, and durability of permanent magnets. Even in small quantities, terbium significantly improves magnetic performance under demanding operating conditions.</p>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-4xl mb-12">As AI hardware, defense systems, and advanced electronics grow more complex, the need for highly stable and reliable magnetic materials continues to rise.</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
            <div className="bg-gray-50 rounded-2xl p-6 md:p-8 border border-gray-100">
              <div className="w-10 h-10 bg-lime-50 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-lime-700" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-3">Advanced Magnets</h3>
              <p className="text-sm text-gray-600 leading-relaxed">Terbium improves magnet stability, reducing performance degradation over time. This is critical for applications where magnetic consistency must be maintained across extreme conditions and long operational lifetimes.</p>
            </div>
            <div className="bg-gray-50 rounded-2xl p-6 md:p-8 border border-gray-100">
              <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-3">Defense Electronics</h3>
              <p className="text-sm text-gray-600 leading-relaxed">Radar, guidance systems, and electronic warfare platforms rely on terbium-enhanced components. Defense-grade magnetic performance demands the stability that only terbium can provide in extreme operational environments.</p>
            </div>
            <div className="bg-gray-50 rounded-2xl p-6 md:p-8 border border-gray-100">
              <div className="w-10 h-10 bg-yellow-50 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-3">Solid-State Lighting</h3>
              <p className="text-sm text-gray-600 leading-relaxed">Terbium phosphors are critical for energy-efficient lighting and display technologies. Green phosphor compounds using terbium are essential components in LED and fluorescent lighting systems worldwide.</p>
            </div>
            <div className="bg-gray-50 rounded-2xl p-6 md:p-8 border border-gray-100">
              <div className="w-10 h-10 bg-purple-50 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" /></svg>
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-3">AI &amp; Precision Systems</h3>
              <p className="text-sm text-gray-600 leading-relaxed">High-accuracy sensors and actuators depend on stable magnetic materials. As AI hardware and precision systems grow more complex, terbium&apos;s role in ensuring reliable magnetic performance becomes increasingly critical.</p>
            </div>
          </div>

          <div className="bg-gray-900 text-white rounded-2xl p-6 md:p-8">
            <p className="text-sm md:text-base leading-relaxed"><strong>Terbium is not about volume</strong> &mdash; it is about performance and reliability at the highest level.</p>
          </div>
        </div>
      </section>

      {/* ===================== FOLD 3: SUPPLY CONSTRAINT & STRATEGIC PRESSURE ===================== */}
      <section className="px-4 sm:px-6 md:px-8 lg:px-12 py-20 md:py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <p className="text-xs uppercase tracking-widest text-gray-400 font-semibold mb-3">Market Dynamics</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-gray-900 leading-tight mb-6">A Rare Element with Disproportionate Strategic Impact</h2>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-4xl mb-4">Terbium is one of the least abundant rare earth elements and is produced almost entirely as a byproduct of other rare earth mining operations. Supply growth is slow, capital-intensive, and highly sensitive to geopolitical dynamics.</p>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-4xl mb-12">Meanwhile, demand continues to grow as industries push the limits of magnet performance and electronic precision.</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
            <div className="bg-white rounded-2xl p-6 md:p-8 border border-gray-200">
              <div className="w-10 h-10 bg-red-50 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z" /></svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Extremely Limited Production</h3>
              <p className="text-sm text-gray-600 leading-relaxed">Global terbium production is extremely limited, making it one of the scarcest rare earth elements available for industrial and defense applications.</p>
            </div>
            <div className="bg-white rounded-2xl p-6 md:p-8 border border-gray-200">
              <div className="w-10 h-10 bg-orange-50 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Concentrated Processing Regions</h3>
              <p className="text-sm text-gray-600 leading-relaxed">High dependence on a small number of processing regions creates geopolitical risk and supply chain vulnerabilities for Western defense and technology industries.</p>
            </div>
            <div className="bg-white rounded-2xl p-6 md:p-8 border border-gray-200">
              <div className="w-10 h-10 bg-indigo-50 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Complex Extraction Processes</h3>
              <p className="text-sm text-gray-600 leading-relaxed">Complex extraction and separation processes make terbium production capital-intensive and slow to scale, further constraining supply growth even as demand accelerates.</p>
            </div>
            <div className="bg-white rounded-2xl p-6 md:p-8 border border-gray-200">
              <div className="w-10 h-10 bg-slate-50 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Rising Defense &amp; High-Reliability Usage</h3>
              <p className="text-sm text-gray-600 leading-relaxed">Rising usage in defense and high-reliability systems continues to increase demand, as military and aerospace applications require the magnetic stability that only terbium can provide.</p>
            </div>
          </div>

          <div className="bg-lime-900 text-white rounded-2xl p-6 md:p-8">
            <p className="text-sm md:text-base leading-relaxed"><strong>Terbium&apos;s scarcity</strong> makes it one of the most strategically sensitive inputs in modern electronics and defense supply chains.</p>
          </div>
        </div>
      </section>

      {/* ===================== FOLD 4: TOKENIZED TERBIUM ON TOTO FINANCE ===================== */}
      <section className="px-4 sm:px-6 md:px-8 lg:px-12 py-20 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto">
          <p className="text-xs uppercase tracking-widest text-gray-400 font-semibold mb-3">Digital Access</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-gray-900 leading-tight mb-6">How Tokenized Terbium Works</h2>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-4xl mb-4">Tokenized terbium on Toto Finance provides digital access to terbium supply through blockchain-based infrastructure designed for transparency, efficiency, and global participation.</p>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-4xl mb-12">Tokenization enables access to a scarce strategic material without traditional market friction.</p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            <div className="bg-gray-50 rounded-2xl p-6 md:p-8 border border-gray-100">
              <h3 className="text-2xl font-medium text-gray-900 mb-6">Core Characteristics</h3>
              <ul className="space-y-3">
                {[
                  'Digitally represented terbium supply linked to verified sourcing',
                  'Fractional access without bulk procurement requirements',
                  '24/7 availability across global markets',
                  'Instant settlement using stablecoins',
                  'Designed for secondary trading and strategic allocation',
                ].map((f, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-gray-600">
                    <svg className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    {f}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gray-50 rounded-2xl p-6 md:p-8 border border-gray-100">
              <h3 className="text-2xl font-medium text-gray-900 mb-6">Use Cases</h3>
              <ul className="space-y-3">
                {[
                  'Defense and aerospace suppliers managing material risk',
                  'Advanced electronics manufacturers securing supply exposure',
                  'Investors positioning for rare earth scarcity',
                  'Digital asset portfolios diversifying into strategic materials',
                ].map((f, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-gray-600">
                    <svg className="w-4 h-4 text-lime-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="bg-gray-50 rounded-2xl p-6 md:p-8 border border-gray-100">
            <h3 className="text-xl font-medium text-gray-900 mb-6 text-center">The Lifecycle of a Tokenized Terbium Token</h3>
            <div className="flex flex-col md:flex-row items-center justify-between gap-2 md:gap-0">
              {['Minted on Toto Finance', 'Purchased with Stablecoins', 'Held, Traded or Transferred', 'Yield, Loans or Hedging', 'Redeemed or Settled'].map((step, i) => (
                <div key={i} className="flex items-center gap-2 md:gap-0">
                  <div className="flex flex-col items-center text-center"><div className="w-10 h-10 rounded-full bg-gray-900 text-white flex items-center justify-center text-sm font-semibold mb-2">{i + 1}</div><p className="text-xs md:text-sm text-gray-700 max-w-[120px] leading-tight">{step}</p></div>
                  {i < 4 && <svg className="w-5 h-5 text-gray-300 hidden md:block mx-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===================== FOLD 5: WHO USES TOKENIZED TERBIUM ===================== */}
      <section className="px-4 sm:px-6 md:px-8 lg:px-12 py-20 md:py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <p className="text-xs uppercase tracking-widest text-gray-400 font-semibold mb-3">Participants</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-gray-900 leading-tight mb-6">Who Tokenized Terbium Is For</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl p-6 md:p-8 border border-gray-200">
              <span className="inline-block bg-lime-100 text-lime-800 text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full mb-4">Industrial &amp; Strategic</span>
              <h3 className="text-xl font-medium text-gray-900 mb-3">Industrial &amp; Strategic Buyers</h3>
              <p className="text-sm text-gray-600 leading-relaxed">Defense contractors, electronics manufacturers, lighting technology firms, and advanced materials companies requiring stable magnetic and electronic performance.</p>
            </div>
            <div className="bg-white rounded-2xl p-6 md:p-8 border border-gray-200">
              <span className="inline-block bg-blue-100 text-blue-800 text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full mb-4">Institutional</span>
              <h3 className="text-xl font-medium text-gray-900 mb-3">Institutional &amp; Professional Investors</h3>
              <p className="text-sm text-gray-600 leading-relaxed">Funds and asset managers seeking exposure to rare earth elements with high strategic value and constrained supply.</p>
            </div>
            <div className="bg-white rounded-2xl p-6 md:p-8 border border-gray-200">
              <span className="inline-block bg-purple-100 text-purple-800 text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full mb-4">Digital Asset</span>
              <h3 className="text-xl font-medium text-gray-900 mb-3">Digital Asset Participants</h3>
              <p className="text-sm text-gray-600 leading-relaxed">Crypto-native funds and on-chain treasuries seeking real-world asset exposure tied to physical technology bottlenecks.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== FOLD 6: FAQ ===================== */}
      <section className="px-4 sm:px-6 md:px-8 lg:px-12 py-20 md:py-32 bg-white">
        <div className="max-w-3xl mx-auto">
          <p className="text-xs uppercase tracking-widest text-gray-400 font-semibold mb-3">Frequently Asked Questions</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-gray-900 leading-tight mb-6">Frequently Asked Questions</h2>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-12">Common questions about tokenized terbium, its strategic importance, and how Toto Finance provides digital access to this critical rare earth element.</p>
          <TerbiumFAQ faqs={faqData} />
        </div>
      </section>

      {/* ===================== FOLD 7: FINAL CTA ===================== */}
      <section className="relative bg-gradient-to-br from-lime-900 via-lime-800 to-gray-900 text-white px-4 sm:px-6 md:px-8 lg:px-12 py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '40px 40px' }} />
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <p className="text-xs uppercase tracking-widest text-gray-400 font-semibold mb-3">Early Access</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light leading-tight mb-6">Terbium Is a Critical Stability Layer in Advanced Technology</h2>
          <p className="text-base md:text-lg text-gray-300 leading-relaxed mb-8">From defense electronics to precision magnets and AI-era systems, terbium plays an outsized role in performance and reliability. Toto Finance is building the digital rails to access this strategic material globally.</p>
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
