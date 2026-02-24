// Server Component (NO "use client")
export const revalidate = 3600; // ISR: regenerate every hour

import Link from 'next/link';
import dynamicImport from 'next/dynamic';
import { BreadcrumbStructuredData } from '../components/BreadcrumbStructuredData';
import { PageStructuredData } from '../components/PageStructuredData';
import { FAQStructuredData } from '../components/FAQStructuredData';
import { Navigation } from '../components/Navigation';

// Dynamic imports for heavy components
const GradualBlur = dynamicImport(() => import('../../src/components/GradualBlur'));
const Footer = dynamicImport(() => import('../components/Footer'));
const NewsletterSection = dynamicImport(() => import('../components/NewsletterSection'));
const TinTickerBar = dynamicImport(
  () => import('../components/client/TinTickerBar').then((mod) => ({ default: mod.TinTickerBar }))
);
const TinFAQ = dynamicImport(
  () => import('../components/client/SilverFAQ').then((mod) => ({ default: mod.SilverFAQ })),
  { ssr: true }
);

// FAQ Data
const faqData = [
  {
    question: 'What is tokenized tin?',
    answer:
      'Tokenized tin is a blockchain-based digital asset backed 1:1 by refined tin ingots stored in insured, audited vaults. Grade A, LME deliverable quality, ready for industrial use in electronics, solder, and manufacturing. Each token is always redeemable for physical tin on demand. Toto Finance is building this with instant stablecoin settlement and DeFi secondary markets.',
  },
  {
    question: 'What is In-Ground Tin by Toto Finance?',
    answer:
      'In-Ground Tin is a tokenized future delivery contract for tin still in the ground at certified mines. Short-term (1\u201312 months) tied to active mines/smelters. Long-term (1\u20136 years) backed by proven cassiterite reserves. Designed for institutions, sovereign funds, and investors positioning for the structural deficit.',
  },
  {
    question: 'Where does Toto Finance source its tin?',
    answer:
      'Directly from major tin mining and smelting companies globally. Southeast Asia (Indonesia, Malaysia, Thailand, Myanmar), Africa (DRC, Rwanda), South America (Peru, Bolivia), and China. Smelters, refineries, and exploration-stage deposits. No middlemen.',
  },
  {
    question: 'Who buys tokenized tin?',
    answer:
      'Three categories: (1) Industrial clients \u2014 electronics manufacturers, semiconductor fabs, PCB fabricators, solar producers, EV battery makers, packaging companies. (2) Investors and commodity brokers, especially mid-size firms. (3) Crypto-native: funds, treasuries, foundations, DAOs.',
  },
  {
    question: 'How does instant settlement work?',
    answer:
      'T+0 with USDC (Circle), USDT (Tether), USAT (Tether US, GENIUS Act). Eliminates brokers, banks, clearing houses. Like Amazon matching buyer and seller directly. Connects tin producers with buyers on-chain.',
  },
  {
    question: 'Can tokenized tin be traded on DeFi?',
    answer:
      'Yes. Secondary trading on DeFi platforms globally. Buy, sell, hedge, yield via smart contract lending, tin as collateral for on-chain loans. Short sellers and long traders borrow and pay interest. Programmable finance for physical commodities.',
  },
  {
    question: 'Why is tin critical to the AI revolution?',
    answer:
      'Essential solder metal in every circuit board, server, AI chip. 50% of global tin demand is solder. MIT ranked tin as metal most likely impacted by new technologies. $580 billion in data center investment in 2025. 71% of supply disruptions from just two countries. ITA projects 40,000-tonne annual deficit by 2030.',
  },
  {
    question: 'What is the tin price outlook for 2026?',
    answer:
      'All-time record of $56,800/t on LME in January 2026, surging 40%+ in early 2026. BMI forecast $35,000/t, already exceeded. Pullback to ~$46,600/t but near historic highs. ITA projects 40,000-tonne annual deficit by 2030. Myanmar and Indonesia disruptions persist.',
  },
  {
    question: 'How can I get early access?',
    answer:
      'Visit totofinance.co for updates. Institutional investors, mining partners, and industrial buyers can reach out for partnerships and early allocation.',
  },
];

export default function TokenizedTinPage() {
  return (
    <div className="min-h-screen w-full relative">
      {/* Structured Data */}
      <PageStructuredData
        title="Tokenized Tin | Digital Tin Backed by Physical Assets | Toto Finance"
        description="Tokenized tin by Toto Finance. 1:1 asset-backed tin ingot tokens, always redeemable. In-Ground Tin future delivery contracts."
        url="https://totofinance.co/tokenized-tin"
        pageType="WebPage"
      />
      <BreadcrumbStructuredData
        items={[
          { name: 'Home', item: 'https://totofinance.co' },
          { name: 'Products', item: 'https://totofinance.co/products' },
          { name: 'Tokenized Tin', item: 'https://totofinance.co/tokenized-tin' },
        ]}
      />
      <GradualBlur preset="page-footer" strength={2} height="4rem" animated="scroll" duration="0.5s" />
      <Navigation pastHero={true} />

      {/* ===================== FOLD 1: HERO SECTION ===================== */}
      <section className="relative bg-gradient-to-br from-slate-800 via-slate-700 to-gray-900 text-white px-4 sm:px-6 md:px-8 lg:px-12 pt-28 md:pt-36 pb-16 md:pb-24 overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '40px 40px' }} />

        <div className="relative z-10 max-w-7xl mx-auto">
          <div>
              <span className="inline-block bg-white/10 text-slate-200 text-xs font-semibold tracking-widest uppercase px-4 py-1.5 rounded-full mb-6 border border-slate-400/30">
                The Future of Commodity Ownership
              </span>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light leading-tight mb-6">
                Tokenized Tin
              </h1>
              <p className="text-base md:text-lg text-gray-300 leading-relaxed mb-8 max-w-xl">
                Every solder joint in every AI server depends on tin. The world&apos;s most essential electronics metal hit an all-time high of $56,800 per tonne as supply collapses in Myanmar and Indonesia. Toto Finance is building the infrastructure to tokenize tin &mdash; from 1:1 redeemable refined ingots to In-Ground future delivery contracts &mdash; with instant stablecoin settlement and DeFi secondary markets.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/products"
                  className="inline-flex items-center justify-center bg-white text-gray-900 px-6 py-3 rounded-full text-sm font-semibold hover:bg-gray-100 transition-all duration-300"
                >
                  Explore the Vision
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
              </div>
          </div>
        </div>
      </section>

      {/* ===================== FOLD 2: TICKER + THE TIN CRISIS ===================== */}
      <TinTickerBar />

      <section className="px-4 sm:px-6 md:px-8 lg:px-12 py-20 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto">
          <p className="text-xs uppercase tracking-widest text-gray-400 font-semibold mb-3">The Tin Crisis</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-gray-900 leading-tight mb-6">
            Why Tin Is the Silent Metal Powering AI
          </h2>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-4xl mb-12">
            Tin is inside every electronic device on earth. Every circuit board, every solder joint, every semiconductor package depends on it. Now AI is driving explosive demand for servers and chips while supply from Myanmar and Indonesia collapses. The world&apos;s most concentrated critical metal supply chain is breaking.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Crisis Card 1 */}
            <div className="bg-gray-50 rounded-2xl p-6 md:p-8 border border-gray-100">
              <p className="text-4xl md:text-5xl font-light text-gray-900 mb-3">40K t/year</p>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Annual Deficit by 2030</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                The International Tin Association projects a 40,000-tonne annual tin deficit by 2030, representing 9.5% of global demand. Demand is forecast to reach 420,000+ tonnes while combined supply from all sources reaches only 380,000 tonnes. The gap begins widening after 2027.
              </p>
            </div>
            {/* Crisis Card 2 */}
            <div className="bg-gray-50 rounded-2xl p-6 md:p-8 border border-gray-100">
              <p className="text-4xl md:text-5xl font-light text-gray-900 mb-3">50% solder</p>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Tin in Every Circuit Board</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Solder accounts for nearly 50% of all global tin consumption. Every circuit board, every semiconductor package, every connector in every AI server uses tin-based solder. MIT ranked tin as the metal most likely to be impacted by new technologies. As chips get smaller, solder density per device actually increases.
              </p>
            </div>
            {/* Crisis Card 3 */}
            <div className="bg-gray-50 rounded-2xl p-6 md:p-8 border border-gray-100">
              <p className="text-4xl md:text-5xl font-light text-gray-900 mb-3">71% disrupted</p>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Supply Chain Collapse</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                71% of all tin supply disruptions in the past three years originated from Myanmar and Indonesia, which together account for 40% of global tin exports. Indonesia&apos;s refined tin shipments dropped 33% in 2024. Myanmar&apos;s Wa State, producing 70% of the country&apos;s tin, banned mining in August 2023. Few new tin mines exist globally in the development pipeline.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== FOLD 3: AI INFRASTRUCTURE DEMAND ===================== */}
      <section className="px-4 sm:px-6 md:px-8 lg:px-12 py-20 md:py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <p className="text-xs uppercase tracking-widest text-gray-400 font-semibold mb-3">AI Infrastructure</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-gray-900 leading-tight mb-6">
            The AI Boom Is Devouring Tin
          </h2>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-4xl mb-12">
            Every AI server, every GPU, every network switch, every piece of data center hardware is assembled with tin-based solder. Tin is the invisible glue holding the entire AI hardware stack together. And supply cannot keep up.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {/* Demand Fact 1 */}
            <div className="bg-white rounded-2xl p-6 md:p-8 border border-gray-200">
              <div className="w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-slate-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-3">$580 Billion Data Center Investment</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Global investment in AI and hyperscale data centers is expected to hit $580 billion in 2025 alone, surpassing spending on new oil supplies. Every dollar creates demand for tin solder in servers, networking, and storage hardware.
              </p>
            </div>
            {/* Demand Fact 2 */}
            <div className="bg-white rounded-2xl p-6 md:p-8 border border-gray-200">
              <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-3">429,000 Tonnes Global Demand</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Global tin demand reached 429,000 tonnes in 2025, growing to 488,000 tonnes by 2030 (Mordor Intelligence). Electronics and solder account for ~50% of consumption. Clean energy applications add 5&ndash;7% annual demand growth on top of baseline.
              </p>
            </div>
            {/* Demand Fact 3 */}
            <div className="bg-white rounded-2xl p-6 md:p-8 border border-gray-200">
              <div className="w-10 h-10 bg-yellow-50 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-3">Solar and EV Demand Surge</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Tin usage in photovoltaics is growing at 25&ndash;40% annually. Tin-based perovskite solar cells scaling after 2028. EV power electronics use tin-rich alloys for inverters and battery packs. Samsung SDI and CATL developing tin-alloy anodes for next-gen lithium-ion batteries.
              </p>
            </div>
            {/* Demand Fact 4 */}
            <div className="bg-white rounded-2xl p-6 md:p-8 border border-gray-200">
              <div className="w-10 h-10 bg-red-50 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-3">73% Import Dependent (US)</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                The US is 73% dependent on tin imports (USGS). China dominates global production and processing. With Indonesia restricting exports and Myanmar&apos;s mines shut down, concentration risk is extreme. Tin is designated a critical mineral by the US, UK, EU, and Australia.
              </p>
            </div>
          </div>

          {/* Chart Placeholder */}
          <div className="bg-white rounded-2xl p-6 md:p-8 border border-gray-200">
            <h3 className="text-xl font-medium text-gray-900 mb-6">Tin Demand vs Supply Projection (2025&ndash;2030)</h3>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-6">
              {[
                { year: '2025', value: '429,000 t', highlight: false },
                { year: '2026', value: '440,000 t', highlight: false },
                { year: '2027', value: '455,000 t', highlight: false, note: 'Deficit begins' },
                { year: '2028', value: '468,000 t', highlight: false },
                { year: '2030', value: '488,000 t', highlight: true, note: 'Supply: ~448K t' },
              ].map((d, i) => (
                <div key={i} className={`text-center p-4 rounded-xl ${d.highlight ? 'bg-slate-100' : 'bg-gray-50'}`}>
                  <p className={`text-sm mb-2 ${d.highlight ? 'text-slate-800 font-medium' : 'text-gray-500'}`}>{d.year}</p>
                  <p className="text-sm font-semibold text-gray-900">{d.value}</p>
                  {d.note && <p className="text-xs text-red-500 mt-1">{d.note}</p>}
                </div>
              ))}
            </div>
            <p className="text-xs text-gray-400">Sources: International Tin Association, Mordor Intelligence, USGS.</p>
          </div>
        </div>
      </section>

      {/* ===================== FOLD 5: RESOURCES ===================== */}
      <section className="px-4 sm:px-6 md:px-8 lg:px-12 py-20 md:py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <p className="text-xs uppercase tracking-widest text-gray-400 font-semibold mb-3">Resources</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-gray-900 leading-tight mb-6">
            Where the Tin Comes From
          </h2>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-4xl mb-12">
            Toto Finance works directly with major tin mining and smelting companies globally, securing tin assets at the producer and refinery level. No middlemen. No intermediary commodity traders. Direct from source.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            {[
              { region: 'Southeast Asia', desc: 'Indonesia (PT Timah, world\u2019s largest integrated tin miner), Malaysia (MSC Group), Thailand (Thaisarco), and Myanmar. The region produces over 60% of global tin. Direct partnerships with smelters and refineries.' },
              { region: 'Africa', desc: 'DRC and Rwanda tin mining operations, including both industrial and artisanal sources transitioning to certified, traceable supply chains. Conflict-free sourcing with third-party audits.' },
              { region: 'South America', desc: 'Peru (Minsur, one of the world\u2019s top tin producers) and Bolivia (EM Vinto). Established tin mining regions with proven reserves and long operational histories.' },
              { region: 'China', desc: 'China is the world\u2019s largest tin producer and consumer. Yunnan Tin Group, Guangxi China Tin, and others operate major smelting and refining operations. Direct sourcing relationships with Chinese refineries.' },
              { region: 'Major Integrated Companies', desc: 'PT Timah, Yunnan Tin, MSC Group, Minsur, Thaisarco. Publicly listed, audited operations delivering consistent refined tin output at global scale.' },
              { region: 'Exploration & Preparation', desc: 'New tin deposits in exploration and development phases, offering In-Ground Tin positions at pre-production economics. With few new tin mines in the global pipeline, early-stage access is increasingly valuable.' },
            ].map((source, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{source.region}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{source.desc}</p>
              </div>
            ))}
          </div>

          <div className="bg-gray-900 text-white rounded-2xl p-6 md:p-8">
            <p className="text-sm md:text-base leading-relaxed">
              <strong>Secured at source.</strong> Toto Finance eliminates commodity brokers and trading intermediaries by working directly with tin miners, smelters, and refineries. Better pricing, conflict-free provenance, and a transparent chain of custody from mine to token.
            </p>
          </div>
        </div>
      </section>

      {/* ===================== HOW IT WORKS CTA ===================== */}
      <section className="px-4 sm:px-6 md:px-8 lg:px-12 py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-xs uppercase tracking-widest text-gray-400 font-semibold mb-3">Platform</p>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-light text-gray-900 mb-4">
            How Tokenized Tin Works
          </h2>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-8 max-w-2xl mx-auto">
            Instant stablecoin settlement, DeFi secondary markets, collateral loans, and 24/7 global trading — all on-chain with institutional-grade compliance.
          </p>
          <Link
            href="/how-tokenization-works"
            className="inline-flex items-center justify-center bg-gray-900 text-white px-8 py-3.5 rounded-full text-base font-semibold hover:bg-gray-800 transition-all duration-300"
          >
            Learn How Tokenization Works
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </div>
      </section>

      {/* ===================== FOLD 7: FAQ ===================== */}
      <section className="px-4 sm:px-6 md:px-8 lg:px-12 py-20 md:py-32 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <p className="text-xs uppercase tracking-widest text-gray-400 font-semibold mb-3">Frequently Asked Questions</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-gray-900 leading-tight mb-6">
            Everything About Tokenized Tin
          </h2>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-12">
            Common questions about tokenized tin, In-Ground Tin, instant settlement, and DeFi secondary markets on Toto Finance.
          </p>
          <FAQStructuredData faqs={faqData} />
          <TinFAQ faqs={faqData} />
        </div>
      </section>

      {/* ===================== FOLD 7B: FINAL CTA ===================== */}
      <section className="relative bg-gradient-to-br from-slate-800 via-slate-700 to-gray-900 text-white px-4 sm:px-6 md:px-8 lg:px-12 py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '40px 40px' }} />
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <p className="text-xs uppercase tracking-widest text-gray-400 font-semibold mb-3">Be First</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light leading-tight mb-6">
            The Tin Deficit Is Here
          </h2>
          <p className="text-base md:text-lg text-gray-300 leading-relaxed mb-8">
            Every AI server, every solar panel, every EV battery depends on tin. The ITA projects a 40,000-tonne annual deficit by 2030. Supply from Myanmar and Indonesia is collapsing. Toto Finance is building the platform to tokenize tin &mdash; from 1:1 redeemable ingots to In-Ground future delivery &mdash; with instant stablecoin settlement and DeFi secondary markets.
          </p>
          <Link
            href="/products"
            className="inline-flex items-center justify-center bg-white text-gray-900 px-8 py-3.5 rounded-full text-base font-semibold hover:bg-gray-100 transition-all duration-300"
          >
            Get Early Access
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
