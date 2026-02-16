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
const TinTickerBar = dynamicImport(
  () => import('../components/client/TinTickerBar').then((mod) => ({ default: mod.TinTickerBar }))
);
const TinFAQ = dynamicImport(
  () => import('../components/client/SilverFAQ').then((mod) => ({ default: mod.SilverFAQ }))
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
        breadcrumbItems={[
          { name: 'Home', item: 'https://totofinance.co' },
          { name: 'Products', item: 'https://totofinance.co/products' },
          { name: 'Tokenized Tin', item: 'https://totofinance.co/tokenized-tin' },
        ]}
      />
      <BreadcrumbStructuredData
        items={[
          { name: 'Home', item: 'https://totofinance.co' },
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

      {/* ===================== FOLD 5B: INVESTORS ===================== */}
      <section className="px-4 sm:px-6 md:px-8 lg:px-12 py-20 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto">
          <p className="text-xs uppercase tracking-widest text-gray-400 font-semibold mb-3">Investors</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-gray-900 leading-tight mb-6">
            Who Buys Tokenized Tin
          </h2>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-4xl mb-12">
            Toto Finance serves three distinct categories of buyers seeking tin exposure for manufacturing, investment, or digital asset strategies.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Category 1 */}
            <div className="bg-gray-50 rounded-2xl p-6 md:p-8 border border-gray-100">
              <span className="inline-block bg-slate-200 text-slate-800 text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full mb-4">Category 1</span>
              <h3 className="text-xl font-medium text-gray-900 mb-3">Industrial Clients</h3>
              <p className="text-sm text-gray-600 leading-relaxed mb-4">
                Companies that need physical tin directly for manufacturing and operations. They purchase tokenized tin for guaranteed supply, streamlined procurement, and physical redemption.
              </p>
              <p className="text-xs text-gray-500 leading-relaxed">
                Electronics &amp; semiconductor manufacturers (solder), PCB fabricators, solar panel &amp; photovoltaic producers, EV battery &amp; power electronics makers, food &amp; beverage packaging, chemical manufacturers, telecommunications &amp; 5G hardware, defense &amp; aerospace electronics, consumer electronics OEMs, lead-acid battery manufacturers.
              </p>
            </div>
            {/* Category 2 */}
            <div className="bg-gray-50 rounded-2xl p-6 md:p-8 border border-gray-100">
              <span className="inline-block bg-blue-100 text-blue-800 text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full mb-4">Category 2</span>
              <h3 className="text-xl font-medium text-gray-900 mb-3">Investors &amp; Commodity Brokers</h3>
              <p className="text-sm text-gray-600 leading-relaxed mb-4">
                Mid-size and smaller investment firms, commodity brokers, family offices, and individual investors who typically cannot access premium tin deals at the pricing and volumes that major smelters command.
              </p>
              <p className="text-xs text-gray-500 leading-relaxed">
                Toto Finance democratizes access to institutional-grade tin positions. Fractional ownership, no minimum tonnage requirements (LME standard lot is 5 tonnes), no warehouse logistics, and no counterparty risk through intermediaries. The same tin, at competitive pricing, accessible to everyone.
              </p>
            </div>
            {/* Category 3 */}
            <div className="bg-gray-50 rounded-2xl p-6 md:p-8 border border-gray-100">
              <span className="inline-block bg-purple-100 text-purple-800 text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full mb-4">Category 3</span>
              <h3 className="text-xl font-medium text-gray-900 mb-3">Crypto-Native Participants</h3>
              <p className="text-sm text-gray-600 leading-relaxed mb-4">
                Blockchain-native organizations and investors seeking real-world asset diversification, on-chain yield, and commodity-backed collateral for DeFi strategies.
              </p>
              <p className="text-xs text-gray-500 leading-relaxed">
                Crypto hedge funds, digital asset funds, blockchain infrastructure foundations, protocol treasuries, DeFi protocols seeking real-world asset collateral, crypto-native investors, DAOs and decentralized investment vehicles.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== FOLD 5C: INSTANT SETTLEMENT ===================== */}
      <section className="px-4 sm:px-6 md:px-8 lg:px-12 py-20 md:py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <p className="text-xs uppercase tracking-widest text-gray-400 font-semibold mb-3">Global Trade</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-gray-900 leading-tight mb-6">
            Instant Settlement, No Banks
          </h2>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-4xl mb-12">
            Traditional commodity trading involves a chain of middlemen, brokers, banks, clearing houses, and custodians that delay settlement by days or weeks and extract fees at every step. Toto Finance removes them all.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {/* Traditional */}
            <div className="bg-white rounded-2xl p-6 md:p-8 border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-1">Traditional Commodity Trade</h3>
              <p className="text-sm text-gray-500 mb-6">7+ Intermediaries, Days to Settle</p>
              <div className="space-y-3">
                {['Mining Company', 'Commodity Broker', 'Clearing House', 'Custodian Bank', 'Correspondent Bank', 'Settlement Agent', 'Buyer'].map((step, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-7 h-7 rounded-full bg-gray-100 flex items-center justify-center flex-shrink-0 text-xs font-semibold text-gray-500">{i + 1}</div>
                    <span className="text-sm text-gray-700">{step}</span>
                  </div>
                ))}
              </div>
              <div className="mt-6 pt-4 border-t border-gray-100">
                <p className="text-sm text-red-600 font-medium">Settlement: T+2 to T+5 (or longer)</p>
              </div>
            </div>
            {/* Toto Finance */}
            <div className="bg-gray-900 text-white rounded-2xl p-6 md:p-8">
              <h3 className="text-lg font-semibold mb-1">Toto Finance</h3>
              <p className="text-sm text-gray-400 mb-6">Direct Match</p>
              <div className="space-y-3">
                {['Mining Company / Smelter', 'Toto Finance Platform', 'Buyer'].map((step, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0 text-xs font-semibold">{i + 1}</div>
                    <span className="text-sm">{step}</span>
                  </div>
                ))}
              </div>
              <div className="mt-6 pt-4 border-t border-white/10">
                <p className="text-sm text-green-400 font-medium">Settlement: T+0 (Instant)</p>
              </div>
              <p className="text-sm text-gray-400 mt-4 leading-relaxed">
                Similar to how Amazon and eBay match buyers and sellers directly, Toto Finance uses blockchain technology to connect tin producers with buyers, eliminating banks, clearing houses, and settlement agents entirely.
              </p>
            </div>
          </div>

          {/* Stablecoins */}
          <h3 className="text-2xl font-medium text-gray-900 mb-6">Instant Settlement with Stablecoins</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { name: 'USDC', issuer: 'Circle', desc: 'The most widely adopted dollar-backed stablecoin for institutional use. Full reserve transparency, monthly attestations, and broad DeFi integration.' },
              { name: 'USDT', issuer: 'Tether', desc: 'The highest-liquidity stablecoin in the world with over $140 billion in circulation. Default settlement currency for global crypto and commodity markets.' },
              { name: 'USAT', issuer: 'Tether (US Regulated)', desc: 'Tether\u2019s US-regulated stablecoin under the GENIUS Act framework. Designed for compliant domestic transactions, bridging traditional finance with digital assets.' },
            ].map((coin, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 border border-gray-200">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-sm font-bold text-gray-700">{coin.name.charAt(0)}</div>
                  <div>
                    <p className="font-semibold text-gray-900">{coin.name}</p>
                    <p className="text-xs text-gray-500">{coin.issuer}</p>
                  </div>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">{coin.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== FOLD 6: DeFi ===================== */}
      <section className="px-4 sm:px-6 md:px-8 lg:px-12 py-20 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto">
          <p className="text-xs uppercase tracking-widest text-gray-400 font-semibold mb-3">Secondary Markets</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-gray-900 leading-tight mb-6">
            DeFi Trading, Yield &amp; Collateral Loans
          </h2>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-4xl mb-12">
            Once tokenized tin is purchased on Toto Finance, secondary trading happens on DeFi platforms globally. Hold, trade, hedge, earn yield, or borrow against your tin. All on-chain. All programmable.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            {[
              { title: 'Global Secondary Trading', desc: 'Tokenized tin trades 24/7 on decentralized exchanges and DeFi platforms worldwide. Buy, sell, and transfer tin tokens across chains without gatekeepers, brokers, or trading hour restrictions. True global liquidity.' },
              { title: 'On-Chain Yield', desc: 'Earn yield by exposing tin assets to smart contract yield contracts. Lend tokenized tin to short sellers or leveraged long traders who borrow assets and pay interest. Passive income backed by physical commodities.' },
              { title: 'Collateral Loans', desc: 'Use tokenized tin as collateral for on-chain loans. Borrow stablecoins against tin holdings without selling the underlying asset. All managed at the protocol level \u2014 no bank approval, no credit checks, no delays.' },
              { title: 'Programmable Finance', desc: 'Collateral loans backed by tokenized tin represent a new programmable financial model. Smart contracts automate liquidation thresholds, interest payments, and margin requirements. Physical commodity value meets decentralized financial infrastructure.' },
            ].map((feature, i) => (
              <div key={i} className="bg-gray-50 rounded-2xl p-6 md:p-8 border border-gray-100">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>

          {/* Token Lifecycle */}
          <div className="bg-gray-50 rounded-2xl p-6 md:p-8 border border-gray-100">
            <h3 className="text-xl font-medium text-gray-900 mb-6 text-center">The Lifecycle of a Tokenized Tin Token</h3>
            <div className="flex flex-col md:flex-row items-center justify-between gap-2 md:gap-0">
              {[
                'Minted on Toto Finance',
                'Purchased with Stablecoins',
                'Held, Traded or Transferred',
                'Yield, Loans or Hedging',
                'Redeemed for Physical Tin',
              ].map((step, i) => (
                <div key={i} className="flex items-center gap-2 md:gap-0">
                  <div className="flex flex-col items-center text-center">
                    <div className="w-10 h-10 rounded-full bg-gray-900 text-white flex items-center justify-center text-sm font-semibold mb-2">{i + 1}</div>
                    <p className="text-xs md:text-sm text-gray-700 max-w-[120px] leading-tight">{step}</p>
                  </div>
                  {i < 4 && (
                    <svg className="w-5 h-5 text-gray-300 hidden md:block mx-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===================== FOLD 6B: COMPARISON TABLE ===================== */}
      <section className="px-4 sm:px-6 md:px-8 lg:px-12 py-20 md:py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <p className="text-xs uppercase tracking-widest text-gray-400 font-semibold mb-3">Why Tokenized</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-gray-900 leading-tight mb-6">
            Tokenized Tin vs. Traditional Tin
          </h2>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-4xl mb-12">
            See how tokenized tin on Toto Finance compares to traditional tin ETFs, futures contracts, and physical ownership.
          </p>

          <div className="overflow-x-auto rounded-2xl border border-gray-200">
            <table className="w-full text-sm text-left">
              <thead>
                <tr className="bg-gray-900 text-white">
                  <th className="px-4 md:px-6 py-4 font-medium">Feature</th>
                  <th className="px-4 md:px-6 py-4 font-medium">Tin ETFs</th>
                  <th className="px-4 md:px-6 py-4 font-medium bg-white/10">Toto Finance</th>
                  <th className="px-4 md:px-6 py-4 font-medium">Physical Tin</th>
                  <th className="px-4 md:px-6 py-4 font-medium">Tin Futures</th>
                </tr>
              </thead>
              <tbody className="bg-white">
                {[
                  ['Trading Hours', 'Market hours', '24/7/365', 'OTC', 'Exchange hours'],
                  ['Settlement', 'T+2', 'T+0 (Instant)', 'Days\u2013weeks', 'T+1'],
                  ['Settlement Currency', 'Fiat (broker)', 'USDC, USDT, USAT', 'Wire transfer', 'Fiat (broker)'],
                  ['Physical Backing', 'Synthetic', '1:1 Tin Ingots', 'Direct', 'Cash settled'],
                  ['Min. Investment', '~$50+', 'From $1', '$10,000+', '$25,000+'],
                  ['Physical Redemption', 'No', 'Yes', 'Yes', 'No'],
                  ['On-Chain Transparency', 'No', 'Yes', 'No', 'No'],
                  ['DeFi Yield / Loans', 'No', 'Yes', 'No', 'No'],
                  ['Storage Costs', 'Expense ratio', 'None', 'Vault fees', 'Roll costs'],
                  ['Intermediaries', 'Broker + Clearing', 'None (P2P)', 'Multiple', 'Broker + Exchange'],
                ].map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="px-4 md:px-6 py-3 font-medium text-gray-900">{row[0]}</td>
                    <td className="px-4 md:px-6 py-3 text-gray-600">{row[1]}</td>
                    <td className="px-4 md:px-6 py-3 text-gray-900 font-medium bg-slate-50/50">{row[2]}</td>
                    <td className="px-4 md:px-6 py-3 text-gray-600">{row[3]}</td>
                    <td className="px-4 md:px-6 py-3 text-gray-600">{row[4]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ===================== FOLD 6C: PLATFORM FEATURES ===================== */}
      <section className="px-4 sm:px-6 md:px-8 lg:px-12 py-20 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto">
          <p className="text-xs uppercase tracking-widest text-gray-400 font-semibold mb-3">Platform</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-gray-900 leading-tight mb-6">
            Institutional-Grade Tin Tokenization
          </h2>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-4xl mb-12">
            Transparency, compliance, and programmable infrastructure embedded into every transaction.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: 'Redeemable Assets', desc: 'All tokenized tin linked to insured vaults. Redeem for physical tin ingot delivery on demand. Grade A, LME quality.' },
              { title: 'Transparent Reserves', desc: 'On-chain proof-of-reserves, real-time oracle feeds, third-party audits. Continuous 1:1 backing verifiable on blockchain.' },
              { title: 'Instant Settlement', desc: 'T+0 with USDC, USDT, USAT. No banks, no clearing houses, no intermediaries.' },
              { title: 'Programmable Compliance', desc: 'Smart contracts enforce KYC/AML, transfer restrictions, and permissions at protocol level. Built into the token.' },
              { title: 'DeFi Yield & Loans', desc: 'Earn yield through lending, use tin as collateral for on-chain loans, hedge through smart contracts.' },
              { title: 'Multi-Chain Access', desc: 'Accessible across Ethereum, Polygon, Cardano, Solana, and XRP Ledger.' },
            ].map((feature, i) => (
              <div key={i} className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
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
