// Server Component (NO "use client")
export const dynamic = 'force-dynamic';

import Link from 'next/link';
import dynamicImport from 'next/dynamic';
import { BreadcrumbStructuredData } from '../components/BreadcrumbStructuredData';
import { PageStructuredData } from '../components/PageStructuredData';
import { FAQStructuredData } from '../components/FAQStructuredData';
import { Navigation } from '../components/Navigation';

const GradualBlur = dynamicImport(() => import('../../src/components/GradualBlur'));
const Footer = dynamicImport(() => import('../components/Footer'));
const NewsletterSection = dynamicImport(() => import('../components/NewsletterSection'));
const TinTickerBar = dynamicImport(
  () => import('../components/client/TinTickerBar').then((mod) => ({ default: mod.TinTickerBar }))
);
const TinFAQ = dynamicImport(
  () => import('../components/client/SilverFAQ').then((mod) => ({ default: mod.SilverFAQ }))
);

const PAGE_URL = 'https://totofinance.co/tokenized-tin';
const PAGE_TITLE = 'Tokenized Tin | Digital Tin Backed by Physical Assets | Toto Finance';
const PAGE_DESCRIPTION =
  'The world is running out of the metal that holds every AI server together. Toto Finance exists to make tin ownership borderless, instant, and fair from 1:1 redeemable ingot tokens to In-Ground future delivery contracts. Settle in stablecoins. Trade on DeFi. Own the metal inside every chip.';

const breadcrumbItems = [
  { name: 'Home', item: 'https://totofinance.co' },
  { name: 'Products', item: 'https://totofinance.co/products' },
  { name: 'Tokenized Tin', item: PAGE_URL },
];

const faqData = [
  {
    question: 'What is tokenized tin?',
    answer:
      'A blockchain-based digital asset backed 1:1 by refined tin ingots in insured, audited vaults. Grade A, LME deliverable, ready for industrial use in electronics, solder, and manufacturing. Always redeemable for physical tin. Toto Finance is building the infrastructure to bring this to market with instant stablecoin settlement and open DeFi trading.',
  },
  {
    question: 'What is In-Ground Tin?',
    answer:
      'A tokenized future delivery contract for tin still at certified mining operations. Short-term (1–12 months) for active mines and smelters, long-term (1–6 years) for earlier-stage cassiterite reserves. Built for institutions, sovereign funds, and investors positioning ahead of the structural deficit.',
  },
  {
    question: 'Where does the tin come from?',
    answer:
      'Directly from major tin mining and smelting companies globally. Southeast Asia (Indonesia, Malaysia, Thailand, Myanmar), Africa (DRC, Rwanda), South America (Peru, Bolivia), and China. Smelters, refineries, and exploration-stage deposits. No middlemen. No intermediary traders. Partnerships: https://totofinance.co/about',
  },
  {
    question: 'Who buys tokenized tin?',
    answer:
      'Three groups: (1) Industrial clients building with tin, electronics manufacturers, semiconductor fabs, PCB fabricators, solar producers, EV battery makers, packaging companies. (2) Investors and commodity brokers, especially mid-size firms finally getting access to institutional-grade deals. (3) Crypto-native participants, funds, DAOs, protocol treasuries seeking real-world asset backing.',
  },
  {
    question: 'How does instant settlement work?',
    answer:
      'T+0 settlement using USDC, USDT, or USAT. No brokers, banks, or clearing houses. Toto Finance matches producers with buyers directly on-chain, the same principle as Amazon matching buyers and sellers, applied to commodities.',
  },
  {
    question: 'Can I trade on DeFi platforms?',
    answer:
      'Yes. After purchase, trade globally on DEXs, earn yield by lending to borrowers, or use tin as collateral for on-chain loans. All programmable. All at the protocol level.',
  },
  {
    question: 'Why is tin critical to the AI revolution?',
    answer:
      'Because every AI server is assembled with tin solder. 50% of global tin demand is solder. MIT ranked tin as the metal most likely impacted by new technologies. $580 billion in data center investment in 2025. 71% of supply disruptions from just two countries. The International Tin Association projects a 40,000-tonne annual deficit by 2030.',
  },
  {
    question: "What's the tin price outlook?",
    answer:
      'All-time record of $56,800 per tonne on LME in January 2026, surging 40%+ in early 2026. Pullback to approximately $46,600 but near historic highs. The International Tin Association projects a 40,000-tonne annual deficit by 2030. Myanmar and Indonesia disruptions persist.',
  },
  {
    question: 'How do I get early access?',
    answer:
      'Visit https://totofinance.co/. Institutional investors, mining partners, and industrial buyers can reach out directly for partnership and early allocation discussions.',
  },
];

const orgAndProductsJsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': 'https://totofinance.co#org',
      name: 'Toto Finance',
      url: 'https://totofinance.co',
      logo: 'https://totofinance.co/assets/images/og-preview.png',
      description:
        'Tokenized commodity platform offering 1:1 asset-backed tin ingot tokens and In-Ground Tin future delivery contracts with instant stablecoin settlement.',
    },
    {
      '@type': 'Product',
      name: '1:1 Tin Ingot Token',
      description:
        'Digital asset backed 1:1 by refined tin ingots in insured custody, redeemable for physical delivery. Category: Tokenized Commodity.',
      category: 'Tokenized Commodity',
      brand: { '@type': 'Brand', name: 'Toto Finance' },
      url: PAGE_URL,
    },
    {
      '@type': 'Product',
      name: 'In-Ground Tin',
      description:
        'Tokenized future delivery contract for physical tin at certified mining operations. Category: Commodity Future Delivery Contract.',
      category: 'Commodity Future Delivery Contract',
      brand: { '@type': 'Brand', name: 'Toto Finance' },
      url: PAGE_URL,
    },
  ],
};

const traditionalSteps = [
  'Mining Company / Smelter',
  'Commodity Broker / Trader',
  'Clearing House',
  'Custodian Bank',
  'Correspondent Bank',
  'Settlement Agent',
  'Buyer',
];

export default function TokenizedTinPage() {
  return (
    <div className="min-h-screen w-full relative">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgAndProductsJsonLd) }}
      />
      <PageStructuredData
        title={PAGE_TITLE}
        description={PAGE_DESCRIPTION}
        url={PAGE_URL}
        pageType="WebPage"
        datePublished="2026-01-01"
        dateModified="2026-03-21"
        breadcrumbItems={breadcrumbItems}
      />
      <BreadcrumbStructuredData items={breadcrumbItems} />
      <FAQStructuredData faqs={faqData} />

      <GradualBlur preset="page-footer" strength={2} height="4rem" animated="scroll" duration="0.5s" />
      <Navigation pastHero={true} />

      {/* FOLD 1: Hero */}
      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-gray-900 text-white px-4 sm:px-6 md:px-8 lg:px-12 pt-28 md:pt-36 pb-16 md:pb-24 overflow-hidden">
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
            backgroundSize: '40px 40px',
          }}
        />
        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <h1 className="text-sm md:text-base font-semibold tracking-[0.2em] uppercase text-slate-200/90 mb-4">
            Tokenized Tin by Toto Finance
          </h1>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light leading-tight mb-8">
            Every AI Server Depends on Tin. Everyone Deserves Access to It.
          </h2>
          <p className="text-base md:text-lg text-gray-200 leading-relaxed mb-10 max-w-3xl mx-auto text-left md:text-center">
            Every solder joint in every AI server depends on tin. The world&apos;s most essential electronics metal hit an all-time high of $56,800 per tonne
            as supply collapses in Myanmar and Indonesia. Yet access to tin as an asset remains locked behind commodity brokers, banks, and industrial-scale
            minimums. We believe that&apos;s wrong.{' '}
            <Link href="/" className="text-white underline underline-offset-2 hover:text-slate-200">
              Toto Finance
            </Link>{' '}
            exists to change it, making tin ownership instant, borderless, and open to everyone.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/products"
              className="inline-flex items-center justify-center bg-white text-gray-900 px-6 py-3 rounded-full text-sm font-semibold hover:bg-gray-100 transition-all duration-300"
            >
              See How We&apos;re Doing It
            </Link>
            <a
              href="#products"
              className="inline-flex items-center justify-center border border-white/30 text-white px-6 py-3 rounded-full text-sm font-semibold hover:bg-white/10 transition-all duration-300"
            >
              Explore Our Products
            </a>
          </div>
        </div>
      </section>

      <TinTickerBar />

      {/* FOLD 2: Crisis */}
      <section className="px-4 sm:px-6 md:px-8 lg:px-12 py-20 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto">
          <p className="text-xs uppercase tracking-widest text-gray-400 font-semibold mb-3">THE WHY</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-gray-900 leading-tight mb-6">
            Tin Is the Silent Metal Powering AI. And the World Is Running Out.
          </h2>
          <div className="text-base md:text-lg text-gray-600 leading-relaxed max-w-4xl mb-12 space-y-4">
            <p>We didn&apos;t start tokenizing tin because it was an obvious choice. We started because nobody else saw the crisis coming.</p>
            <p>
              Tin is inside every electronic device on earth. Every circuit board, every solder joint, every semiconductor package depends on it. Now AI is
              driving explosive demand for servers and chips while supply from Myanmar and Indonesia collapses. The world&apos;s most concentrated critical
              metal supply chain is breaking. And the people who need tin most, electronics manufacturers, chip makers, solar producers, investors, are locked
              out of fair access by an outdated system of commodity brokers, smelter minimums, and bank intermediaries.
            </p>
            <p className="font-medium text-gray-900">That&apos;s why we exist.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gray-50 rounded-2xl p-6 md:p-8 border border-gray-100">
              <p className="text-4xl md:text-5xl font-light text-gray-900 mb-3">40K t/year</p>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">The Deficit Has Already Begun</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                The International Tin Association projects a 40,000-tonne annual tin deficit by 2030, representing 9.5% of global demand. Demand is forecast
                to reach 420,000+ tonnes while combined supply from all sources reaches only 380,000 tonnes. The gap begins widening after 2027.
              </p>
            </div>
            <div className="bg-gray-50 rounded-2xl p-6 md:p-8 border border-gray-100">
              <p className="text-4xl md:text-5xl font-light text-gray-900 mb-3">50% solder</p>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Tin in Every Circuit Board</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Solder accounts for nearly 50% of all global tin consumption. Every circuit board, every semiconductor package, every connector in every AI
                server uses tin-based solder. MIT ranked tin as the metal most likely to be impacted by new technologies. As chips get smaller, solder density
                per device actually increases.
              </p>
            </div>
            <div className="bg-gray-50 rounded-2xl p-6 md:p-8 border border-gray-100">
              <p className="text-4xl md:text-5xl font-light text-gray-900 mb-3">71% disrupted</p>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Supply Chain Collapse</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                71% of all tin supply disruptions in the past three years originated from Myanmar and Indonesia, which together account for 40% of global tin
                exports. Indonesia&apos;s refined tin shipments dropped 33% in 2024. Myanmar&apos;s Wa State, producing 70% of the country&apos;s tin, banned
                mining in August 2023. Few new tin mines exist globally in the development pipeline.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FOLD 3: THE METAL */}
      <section className="px-4 sm:px-6 md:px-8 lg:px-12 py-20 md:py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <p className="text-xs uppercase tracking-widest text-gray-400 font-semibold mb-3 text-center">THE METAL</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-gray-900 leading-tight mb-4 text-center">
            Understanding Why Tin Is Irreplaceable
          </h2>
          <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto text-center mb-14">
            The metal that holds the technology revolution together. Essential for semiconductors, solar panels, and electric vehicles.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
              <div
                className="rounded-xl bg-gradient-to-br from-slate-800 to-slate-950 text-white p-6 mb-4 font-mono text-sm"
                role="img"
                aria-label="Tin element card showing Sn symbol, atomic number 50, density, recyclability, solder rank, and stable isotopes"
              >
                <p className="text-3xl font-light mb-1">Sn</p>
                <ul className="space-y-1 text-slate-200/90">
                  <li>Atomic Number: 50</li>
                  <li>Density: 7,310 kg/m³</li>
                  <li>Recyclability: 95%+</li>
                  <li>Solder Metal Rank: #1</li>
                  <li>Stable Isotopes: 10</li>
                </ul>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">The Element</h3>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
              <div
                className="rounded-xl bg-gradient-to-br from-amber-900/40 to-slate-900 min-h-[160px] mb-4"
                role="img"
                aria-label="Cassiterite tin ore mining operation with extraction and processing equipment"
              />
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Where It Comes From</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Mined from cassiterite ore (SnO₂) in China, Indonesia, Myanmar, Peru, Bolivia, and Brazil. Refined through crushing and smelting into 99.99%
                pure tin.
              </p>
              <p className="text-xs text-gray-500 mt-3 font-mono">
                Ore → Crushing → Smelting → Refining → 99.99% Pure Tin
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
              <div
                className="rounded-xl bg-gradient-to-br from-slate-600 to-slate-900 min-h-[160px] mb-4"
                role="img"
                aria-label="Close-up of tin-based solder being applied to an electronic circuit board"
              />
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Why Nothing Else Works</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Low melting point (232°C) makes it ideal for soldering electronics without damaging components. Corrosion-resistant coating protects steel and
                other metals from degradation. There is no viable substitute for tin in electronics soldering.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
              <div
                className="rounded-xl bg-gradient-to-br from-slate-700/80 to-slate-900 min-h-[160px] mb-4"
                role="img"
                aria-label="Electronic components and semiconductor packages assembled with tin solder on a circuit board"
              />
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Where It Goes</h3>
              <p className="text-sm text-gray-600 leading-relaxed mb-4">
                Semiconductors, circuit boards, solar panels, EV batteries, data centers, 5G infrastructure, food packaging, chemical manufacturing.
              </p>
              <p className="text-sm font-semibold text-slate-900 bg-slate-100 rounded-lg px-3 py-2">
                55,000 tonnes annually by 2030 (solar panels alone)
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FOLD 4: THE CATALYST */}
      <section className="px-4 sm:px-6 md:px-8 lg:px-12 py-20 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto">
          <p className="text-xs uppercase tracking-widest text-gray-400 font-semibold mb-3">THE CATALYST</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-gray-900 leading-tight mb-6">
            The AI Revolution Runs on Tin Solder, Not Just Silicon
          </h2>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-4xl mb-12">
            We believe most people misunderstand what holds AI hardware together. They see chips. We see solder. Every AI server, every GPU, every network
            switch, every piece of data center hardware is assembled with tin-based solder. Tin is the invisible glue holding the entire AI hardware stack
            together. And supply cannot keep up.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <div className="bg-gray-50 rounded-2xl p-6 md:p-8 border border-gray-100">
              <h3 className="text-xl font-medium text-gray-900 mb-3">$580 Billion Data Center Investment</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Global investment in AI and hyperscale data centers is expected to hit $580 billion in 2025 alone, surpassing spending on new oil supplies.
                Every dollar creates demand for tin solder in servers, networking, and storage hardware.
              </p>
            </div>
            <div className="bg-gray-50 rounded-2xl p-6 md:p-8 border border-gray-100">
              <h3 className="text-xl font-medium text-gray-900 mb-3">429,000 Tonnes Global Demand</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Global tin demand reached 429,000 tonnes in 2025, growing to 488,000 tonnes by 2030. Electronics and solder account for approximately 50% of
                consumption. Clean energy applications add 5-7% annual demand growth on top of baseline.
              </p>
            </div>
            <div className="bg-gray-50 rounded-2xl p-6 md:p-8 border border-gray-100">
              <h3 className="text-xl font-medium text-gray-900 mb-3">Solar and EV Demand Surge</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Tin usage in photovoltaics is growing at 25-40% annually. Tin-based perovskite solar cells are scaling after 2028. EV power electronics use
                tin-rich alloys for inverters and battery packs. Samsung SDI and CATL are developing tin-alloy anodes for next-gen lithium-ion batteries.
              </p>
            </div>
            <div className="bg-gray-50 rounded-2xl p-6 md:p-8 border border-gray-100">
              <h3 className="text-xl font-medium text-gray-900 mb-3">73% Import Dependent (US)</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                The US is 73% dependent on tin imports. China dominates global production and processing. With Indonesia restricting exports and Myanmar&apos;s
                mines shut down, concentration risk is extreme. Tin is designated a critical mineral by the US, UK, EU, and Australia.
              </p>
            </div>
          </div>

          <div
            className="bg-gray-50 rounded-2xl p-6 md:p-8 border border-gray-200"
            role="img"
            aria-label="Bar chart showing global tin demand rising from 429,000 tonnes in 2025 to 488,000 tonnes by 2030, with supply reaching approximately 448,000 tonnes, creating a 40,000 tonne annual deficit"
          >
            <h3 className="text-xl font-medium text-gray-900 mb-6">The Gap That Can&apos;t Be Closed</h3>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-6">
              {[
                { year: '2025', value: '429,000', note: '—' },
                { year: '2026', value: '440,000', note: '—' },
                { year: '2027', value: '455,000', note: 'Deficit begins' },
                { year: '2028', value: '468,000', note: '—' },
                { year: '2030', value: '488,000', note: 'Supply: ~448,000 (40,000 t deficit)', highlight: true },
              ].map((d, i) => (
                <div
                  key={i}
                  className={`text-center p-4 rounded-xl ${d.highlight ? 'bg-slate-100 border border-slate-200' : 'bg-white border border-gray-100'}`}
                >
                  <p className={`text-sm mb-2 ${d.highlight ? 'text-slate-800 font-medium' : 'text-gray-500'}`}>{d.year}</p>
                  <p className="text-sm font-semibold text-gray-900">Demand (t): {d.value}</p>
                  <p className="text-xs text-gray-500 mt-1">{d.note}</p>
                </div>
              ))}
            </div>
            <p className="text-xs text-gray-400">Sources: International Tin Association, Mordor Intelligence, USGS.</p>
          </div>
        </div>
      </section>

      {/* FOLD 5: TWO PRODUCTS */}
      <section id="products" className="scroll-mt-24 px-4 sm:px-6 md:px-8 lg:px-12 py-20 md:py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <p className="text-xs uppercase tracking-widest text-gray-400 font-semibold mb-3 text-center">TWO PRODUCTS</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-gray-900 leading-tight mb-6 text-center">
            Two Ways to Own Tokenized Tin
          </h2>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto text-center mb-14">
            Everything we believe about access, transparency, and the future of tin comes to life in two distinct products. One for tin that&apos;s already
            refined and vaulted. One for tin still in the ground. Both backed by physical assets. Both are settable in stablecoins. Both built for a world that
            can&apos;t afford to wait.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
            <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm">
              <span className="inline-block text-xs font-bold tracking-wider text-slate-800 bg-slate-200 px-3 py-1 rounded-full mb-4">
                ASSET-BACKED TOKEN
              </span>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                <Link href="/products" className="hover:text-slate-600 underline-offset-2 hover:underline">
                  1:1 Tin Ingot Token
                </Link>
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed mb-6">
                This is tin you can hold digitally and physically. Every token is backed 1:1 by refined tin ingots stored in insured, audited vaults. Grade A.
                LME deliverable. Ready for industrial use. Always redeemable for physical tin on demand. No synthetic exposure. No paper promises. Real tin.
              </p>
              <ul className="text-sm text-gray-700 space-y-2 list-disc pl-5">
                <li>Backed 1:1 by refined tin ingots (Grade A, LME quality)</li>
                <li>Always redeemable for physical tin delivery on demand</li>
                <li>Stored in insured, independently audited vault and warehouse facilities</li>
                <li>On-chain proof-of-reserves with real-time oracle feeds</li>
                <li>Fractional ownership, from $1, tradeable 24/7 with instant stablecoin settlement</li>
                <li>Ready for industrial end-use: electronics, semiconductors, solar, EV batteries, packaging</li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm">
              <span className="inline-block text-xs font-bold tracking-wider text-slate-800 bg-slate-200 px-3 py-1 rounded-full mb-4">
                FUTURE DELIVERY CONTRACT
              </span>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                <Link href="/products" className="hover:text-slate-600 underline-offset-2 hover:underline">
                  In-Ground Tin
                </Link>
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed mb-6">
                This is tin before the world prices it in. Tokenized future delivery contracts for physical tin still at certified mining operations giving you
                access to pre-production economics and the built-in scarcity premium that comes with a structural deficit. For those who think in years, not
                quarters.
              </p>
              <ul className="text-sm text-gray-700 space-y-2 list-disc pl-5">
                <li>Backed by proven and probable cassiterite reserves at partner mining sites</li>
                <li>Pre-production pricing with built-in supply scarcity premium</li>
                <li>On-chain reserve tracking with geological data transparency</li>
                <li>Physical delivery or settlement at maturity</li>
                <li>Verified reserves with third-party geological audits</li>
                <li>Designed for institutional, sovereign, and long-duration strategies</li>
              </ul>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-slate-900 text-white rounded-2xl p-6 md:p-8">
              <p className="text-xs font-semibold tracking-wider text-slate-400 mb-2">SHORT-TERM DELIVERY</p>
              <p className="text-lg font-medium mb-3">1–12 Months</p>
              <p className="text-sm text-slate-300 leading-relaxed">
                Near-term tin delivery contracts tied to active mining and smelting operations. For electronics manufacturers hedging supply, commodity
                traders, and buyers who need delivery certainty with transparent reserve verification.
              </p>
            </div>
            <div className="bg-slate-800 text-white rounded-2xl p-6 md:p-8 border border-slate-700">
              <p className="text-xs font-semibold tracking-wider text-slate-400 mb-2">LONG-TERM DELIVERY</p>
              <p className="text-lg font-medium mb-3">1–6 Years</p>
              <p className="text-sm text-slate-300 leading-relaxed">
                Strategic tin positions backed by proven cassiterite reserves at earlier-stage mining operations. Built for sovereign wealth funds,
                institutional allocators, and forward-looking investors positioning for the structural tin supply deficit.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FOLD 6: SOURCING */}
      <section className="px-4 sm:px-6 md:px-8 lg:px-12 py-20 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto">
          <p className="text-xs uppercase tracking-widest text-gray-400 font-semibold mb-3 text-center">SOURCING</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-gray-900 leading-tight mb-6 text-center">
            Direct From the Source. No Middlemen. No Exceptions.
          </h2>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto text-center mb-14">
            Most commodity platforms sit at the end of a long chain, brokers reselling what traders bought from smelters who purchased from miners. We
            don&apos;t. Toto Finance works directly with{' '}
            <Link href="/about" className="text-slate-900 underline underline-offset-2 hover:text-slate-600">
              major tin mining and smelting companies
            </Link>{' '}
            globally, securing tin at the producer and refinery level because we believe the supply chain should have as few links as possible.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            {[
              {
                region: 'Southeast Asia',
                desc: 'Indonesia (PT Timah, world\'s largest integrated tin miner), Malaysia (MSC Group), Thailand (Thaisarco), and Myanmar. The region produces over 60% of global tin. Direct partnerships with smelters and refineries.',
              },
              {
                region: 'Africa',
                desc: 'DRC and Rwanda tin mining operations, including both industrial and artisanal sources transitioning to certified, traceable supply chains. Conflict-free sourcing with third-party audits.',
              },
              {
                region: 'South America',
                desc: 'Peru (Minsur, one of the world\'s top tin producers) and Bolivia (EM Vinto). Established tin mining regions with proven reserves and long operational histories.',
              },
              {
                region: 'China',
                desc: 'China is the world\'s largest tin producer and consumer. Yunnan Tin Group, Guangxi China Tin, and others operate major smelting and refining operations. Direct sourcing relationships with Chinese refineries.',
              },
              {
                region: 'Major Integrated Companies',
                desc: 'PT Timah, Yunnan Tin, MSC Group, Minsur, Thaisarco. Publicly listed, audited operations delivering consistent refined tin output at global scale.',
              },
              {
                region: 'Exploration & Preparation',
                desc: 'New tin deposits in exploration and development phases, offering In-Ground Tin positions at pre-production economics. With few new tin mines in the global pipeline, early-stage access is increasingly valuable.',
              },
            ].map((source, i) => (
              <div key={i} className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{source.region}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{source.desc}</p>
              </div>
            ))}
          </div>

          <div className="bg-gray-900 text-white rounded-2xl p-6 md:p-8">
            <p className="text-sm md:text-base leading-relaxed">
              <strong>Secured at source.</strong> We eliminate commodity brokers and trading intermediaries by working directly with tin miners, smelters, and
              refineries. Better pricing. Conflict-free provenance. A transparent chain of custody from{' '}
              <Link href="/how-tokenization-works" className="text-white underline underline-offset-2 hover:text-slate-200">
                mine to token
              </Link>
              . Because we believe the fewer hands tin passes through, the fairer and more transparent the market becomes.
            </p>
          </div>
        </div>
      </section>

      {/* FOLD 7: INVESTORS */}
      <section className="px-4 sm:px-6 md:px-8 lg:px-12 py-20 md:py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <p className="text-xs uppercase tracking-widest text-gray-400 font-semibold mb-3 text-center">INVESTORS</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-gray-900 leading-tight mb-6 text-center">
            Who Buys Tokenized Tin
          </h2>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto text-center mb-14">
            We believe access to essential metals shouldn&apos;t depend on how big you are. Whether you&apos;re an electronics manufacturer securing solder
            supply, a family office diversifying, or a DeFi protocol looking for real-world collateral, Toto Finance was built for you.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl p-6 md:p-8 border border-gray-200 shadow-sm">
              <span className="inline-block bg-slate-200 text-slate-800 text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full mb-4">
                BUILDERS
              </span>
              <h3 className="text-xl font-medium text-gray-900 mb-3">Companies That Need Physical Tin</h3>
              <p className="text-sm text-gray-600 leading-relaxed mb-4">
                They don&apos;t buy tin to trade it. They buy it to build with it. Tokenized tin gives them{' '}
                <Link href="/products" className="text-slate-900 font-medium underline underline-offset-2 hover:text-slate-600">
                  guaranteed supply
                </Link>
                , streamlined procurement, and physical redemption without the delays and middlemen of traditional commodity markets.
              </p>
              <p className="text-xs text-gray-500 leading-relaxed">
                <span className="font-semibold text-gray-700">Industries: </span>
                Electronics and semiconductor manufacturers (solder), printed circuit board (PCB) fabricators, solar panel and photovoltaic producers, electric
                vehicle battery and power electronics makers, food and beverage packaging (tinplate), chemical manufacturers (organotin stabilizers),
                telecommunications and 5G hardware, defense and aerospace electronics, consumer electronics OEMs, lead-acid battery manufacturers.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 md:p-8 border border-gray-200 shadow-sm">
              <span className="inline-block bg-blue-100 text-blue-800 text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full mb-4">
                ALLOCATORS
              </span>
              <h3 className="text-xl font-medium text-gray-900 mb-3">Investors Who Were Locked Out Until Now</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Premium tin deals have always gone to the biggest players. LME standard lot is 5 tonnes. Mid-size firms, commodity brokers, family offices, and
                individual investors were left with scraps or priced out entirely. The same tin, at competitive pricing, should be accessible to everyone.
                Fractional ownership. No minimum tonnage. No warehouse logistics. No counterparty risk through intermediaries. Toto Finance democratizes access
                to institutional-grade tin.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 md:p-8 border border-gray-200 shadow-sm">
              <span className="inline-block bg-purple-100 text-purple-800 text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full mb-4">
                PIONEERS
              </span>
              <h3 className="text-xl font-medium text-gray-900 mb-3">The On-Chain Economy Meets Physical Value</h3>
              <p className="text-sm text-gray-600 leading-relaxed mb-4">
                Blockchain-native organizations and investors seeking what most digital assets lack: real-world backing. Use tokenized tin for portfolio
                diversification, on-chain yield, and commodity-backed collateral for DeFi strategies.
              </p>
              <p className="text-xs text-gray-500 leading-relaxed">
                <span className="font-semibold text-gray-700">Buyers: </span>
                Crypto hedge funds and digital asset funds, blockchain infrastructure foundations and protocol treasuries, DeFi protocols seeking real-world
                collateral, crypto-native investors diversifying into commodities, DAOs and decentralized investment vehicles.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FOLD 8: SETTLEMENT */}
      <section className="px-4 sm:px-6 md:px-8 lg:px-12 py-20 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto">
          <p className="text-xs uppercase tracking-widest text-gray-400 font-semibold mb-3">GLOBAL TRADE</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-gray-900 leading-tight mb-6">
            Instant Settlement for Tokenized Tin. No Banks.
          </h2>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-4xl mb-12">
            We believe the traditional commodity system is broken by design. It was built for a world of paper contracts and correspondent banks. It wasn&apos;t
            built for a world that needs tin delivered at the speed of semiconductor production. So we rebuilt it.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="bg-gray-50 rounded-2xl p-6 md:p-8 border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-1">The Old Way</h3>
              <p className="text-sm text-gray-500 mb-6">7+ Intermediaries. Days to Settle. Fees at Every Step.</p>
              <div className="space-y-3">
                {traditionalSteps.map((step, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-7 h-7 rounded-full bg-gray-200 flex items-center justify-center flex-shrink-0 text-xs font-semibold text-gray-600">
                      {i + 1}
                    </div>
                    <span className="text-sm text-gray-700">{step}</span>
                  </div>
                ))}
              </div>
              <div className="mt-6 pt-4 border-t border-gray-200">
                <p className="text-sm text-red-600 font-medium">Settlement: T+2 to T+5 (or longer)</p>
              </div>
            </div>

            <div className="bg-gray-900 text-white rounded-2xl p-6 md:p-8">
              <h3 className="text-lg font-semibold mb-1">The Toto Finance Way</h3>
              <p className="text-sm text-gray-400 mb-6">Buyer ↔ Seller. Direct. Instant.</p>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0 text-xs font-semibold">1</div>
                  <span className="text-sm">Mining Company / Smelter</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0 text-xs font-semibold">2</div>
                  <Link href="/products" className="text-sm text-white underline underline-offset-2 hover:text-slate-200">
                    Toto Finance Platform
                  </Link>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0 text-xs font-semibold">3</div>
                  <span className="text-sm">Buyer</span>
                </div>
              </div>
              <div className="mt-6 pt-4 border-t border-white/10">
                <p className="text-sm text-green-400 font-medium">Settlement: T+0 (Instant)</p>
              </div>
              <p className="text-sm text-gray-400 mt-4 leading-relaxed">
                Think of it like Amazon for tin. Just as e-commerce platforms match buyers and sellers directly for physical goods, Toto Finance uses
                blockchain technology to connect tin producers with buyers, eliminating banks, clearing houses, and settlement agents entirely.
              </p>
            </div>
          </div>

          <h3 className="text-2xl font-medium text-gray-900 mb-6">Pay in the Currency of the Future</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                name: 'USDC',
                issuer: 'Circle',
                desc: 'The most widely adopted dollar-backed stablecoin for institutional use. Full reserve transparency, monthly attestations, and broad DeFi integration.',
              },
              {
                name: 'USDT',
                issuer: 'Tether',
                desc: 'The highest-liquidity stablecoin in the world, over $140 billion in circulation. The default settlement currency for global crypto and commodity markets.',
              },
              {
                name: 'USAT',
                issuer: 'Tether (US Regulated)',
                desc: "Tether's US-regulated stablecoin under the GENIUS Act framework. Bridging traditional finance with digital infrastructure for compliant domestic transactions.",
              },
            ].map((coin, i) => (
              <div key={i} className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-sm font-bold text-gray-700 border border-gray-200">
                    {coin.name.charAt(0)}
                  </div>
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

      {/* FOLD 9: DeFi */}
      <section className="px-4 sm:px-6 md:px-8 lg:px-12 py-20 md:py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <p className="text-xs uppercase tracking-widest text-gray-400 font-semibold mb-3">SECONDARY MARKETS</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-gray-900 leading-tight mb-6">
            DeFi Trading, Yield and Loans for Tokenized Tin
          </h2>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-4xl mb-12">
            We believe owning an asset should mean more than holding it. Once tokenized tin is purchased on Toto Finance, it enters an open ecosystem. Hold it.
            Trade it. Earn from it. Borrow against it. All on-chain. All programmable. All without asking permission.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            <div className="bg-white rounded-2xl p-6 md:p-8 border border-gray-200 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Global Secondary Trading</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Trade tokenized tin 24/7 on decentralized exchanges worldwide. No gatekeepers. No brokers. No trading hours. True global liquidity, because we
                believe markets should never close.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-6 md:p-8 border border-gray-200 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">On-Chain Yield</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Earn yield by lending your tin tokens to borrowers, short sellers, leveraged traders who pay interest for access. Passive income backed by
                physical commodities. Because tin should generate value even when you&apos;re not using it.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-6 md:p-8 border border-gray-200 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Collateral Loans</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Borrow stablecoins against your tin holdings without selling the underlying asset. No bank approval. No credit checks. No delays. All managed at
                the protocol level, because we believe your assets should unlock liquidity on your terms.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-6 md:p-8 border border-gray-200 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Programmable Finance</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Smart contracts automate liquidation thresholds, interest payments, and margin requirements. Physical commodity value meets decentralized
                infrastructure. This is what we mean by programmable finance,{' '}
                <Link href="/products" className="text-slate-900 font-medium underline underline-offset-2 hover:text-slate-600">
                  collateral
                </Link>{' '}
                that thinks for itself.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 md:p-8 border border-gray-200 shadow-sm">
            <h3 className="text-xl font-medium text-gray-900 mb-6 text-center">
              From Mine to Market to DeFi: The Life of a Tin Token
            </h3>
            <div className="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-2">
              {[
                { n: '1', line: 'Minted on Toto Finance' },
                { n: '2', line: 'Purchased with Stablecoins' },
                { n: '3', line: 'Held, Traded, or Transferred' },
                { n: '4', line: 'Deployed: Yield, Loans, or Hedging' },
                { n: '5', line: 'Redeemed for Physical Tin' },
              ].map((step, i) => (
                <div key={i} className="flex items-center gap-2 md:gap-0 w-full md:w-auto justify-center md:justify-between">
                  <div className="flex flex-col items-center text-center max-w-[140px]">
                    <div className="w-10 h-10 rounded-full bg-gray-900 text-white flex items-center justify-center text-sm font-semibold mb-2">{step.n}</div>
                    <p className="text-xs md:text-sm text-gray-700 leading-tight">{step.line}</p>
                  </div>
                  {i < 4 && (
                    <svg
                      className="w-5 h-5 text-gray-300 hidden md:block mx-1 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FOLD 10: Comparison */}
      <section className="px-4 sm:px-6 md:px-8 lg:px-12 py-20 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto">
          <p className="text-xs uppercase tracking-widest text-gray-400 font-semibold mb-3">WHY TOKENIZED</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-gray-900 leading-tight mb-6">
            Tokenized Tin vs Traditional Tin
          </h2>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-4xl mb-12">
            We built Toto Finance because every existing way to own tin is broken in some fundamental way. Here&apos;s how we compare.
          </p>

          <div className="overflow-x-auto rounded-2xl border border-gray-200">
            <table
              className="w-full text-sm text-left"
              aria-label="Comparison table of tokenized tin on Toto Finance versus tin ETFs, physical tin ownership, and tin futures across 10 features including settlement speed, minimum investment, and DeFi access."
            >
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
                  ['Trading Hours', 'Market hours only', '24/7/365', 'OTC', 'Exchange hours'],
                  ['Settlement', 'T+2', 'T+0 (Instant)', 'Days to weeks', 'T+1'],
                  ['Settlement Currency', 'Fiat (via broker)', 'USDC, USDT, USAT', 'Wire transfer', 'Fiat (via broker)'],
                  ['Physical Backing', 'Synthetic', '1:1 Tin Ingots', 'Direct ownership', 'Cash settled'],
                  ['Min. Investment', '~$50+', 'Fractional (from $1)', '$10,000+', '$25,000+ margin'],
                  ['Physical Redemption', 'No', 'Yes', 'Yes', 'No'],
                  ['On-Chain Transparency', 'No', 'Yes', 'No', 'No'],
                  ['DeFi Yield / Loans', 'No', 'Yes', 'No', 'No'],
                  ['Storage Costs', 'Expense ratio', 'None', 'Vault fees', 'Roll costs'],
                  ['Intermediaries', 'Broker + Clearing', 'None (P2P)', 'Multiple', 'Broker + Exchange'],
                ].map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="px-4 md:px-6 py-3 font-medium text-gray-900">{row[0]}</td>
                    <td className="px-4 md:px-6 py-3 text-gray-600">{row[1]}</td>
                    <td className="px-4 md:px-6 py-3 text-gray-900 font-semibold bg-slate-50/80">{row[2]}</td>
                    <td className="px-4 md:px-6 py-3 text-gray-600">{row[3]}</td>
                    <td className="px-4 md:px-6 py-3 text-gray-600">{row[4]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FOLD 11: Platform */}
      <section className="px-4 sm:px-6 md:px-8 lg:px-12 py-20 md:py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <p className="text-xs uppercase tracking-widest text-gray-400 font-semibold mb-3 text-center">PLATFORM</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-gray-900 leading-tight mb-6 text-center">
            Trust Isn&apos;t a Promise. It&apos;s a System.
          </h2>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto text-center mb-14">
            We don&apos;t ask you to trust us. We built systems that make trust verifiable. Every feature of the Toto Finance platform exists because we believe
            transparency and compliance shouldn&apos;t be optional, they should be structural.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: 'Redeemable Assets',
                desc: 'Every token is linked to insured vaults and custody facilities. Redeem for physical tin ingot delivery on demand. Grade A, LME quality, ready for industrial use. Because a digital asset without physical backing is just a number on a screen.',
              },
              {
                title: 'Transparent Reserves',
                desc: 'On-chain proof-of-reserves, real-time oracle feeds, and third-party audits ensure continuous 1:1 backing. Every token is verifiable on the blockchain at any time. Because we believe you should never have to take our word for it.',
              },
              {
                title: 'Instant Settlement',
                desc: 'T+0 settlement with USDC, USDT, and USAT. No banks. No clearing houses. No intermediaries. Because waiting days for a trade to settle belongs to a different century.',
              },
              {
                title: 'Programmable Compliance',
                desc: 'Smart contracts enforce KYC/AML requirements, transfer restrictions, and permissions at the protocol level. Compliance is built into the token, not bolted on after the fact. Because we believe regulation and innovation aren\'t enemies.',
              },
              {
                title: 'DeFi Yield & Loans',
                desc: 'Earn yield, borrow against holdings, and hedge positions, all through smart contracts. Programmable finance for physical assets. Because your tin should work as hard as you do.',
              },
              {
                title: 'Multi-Chain Access',
                desc: 'Accessible across Ethereum, Polygon, Cardano, Solana, and XRP Ledger. Trade on the chain that fits your strategy. Because we believe infrastructure should adapt to you, not the other way around.',
              },
            ].map((feature, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOLD 12: FAQ */}
      <section className="px-4 sm:px-6 md:px-8 lg:px-12 py-20 md:py-32 bg-white">
        <div className="max-w-3xl mx-auto">
          <p className="text-xs uppercase tracking-widest text-gray-400 font-semibold mb-3 text-center">QUESTIONS</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-gray-900 leading-tight mb-6 text-center">
            Tokenized Tin FAQ
          </h2>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-12 text-center">
            Straight answers about tokenized tin, In-Ground Tin, instant settlement, and DeFi secondary markets.
          </p>
          <TinFAQ faqs={faqData} />
        </div>
      </section>

      {/* FOLD 13: Final CTA */}
      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-gray-900 text-white px-4 sm:px-6 md:px-8 lg:px-12 py-20 md:py-32 overflow-hidden">
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
            backgroundSize: '40px 40px',
          }}
        />
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <p className="text-xs uppercase tracking-widest text-slate-400 font-semibold mb-3">THIS IS WHY</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light leading-tight mb-6">
            We Started with a Belief. Now We&apos;re Building It.
          </h2>
          <p className="text-base md:text-lg text-gray-300 leading-relaxed mb-8">
            We believe the metal that holds every AI server together should be accessible to everyone, not locked behind smelter minimums, commodity brokers,
            and bank intermediaries. The International Tin Association projects a 40,000-tonne annual deficit by 2030. Supply from Myanmar and Indonesia is
            collapsing. The deficit is here. The infrastructure is being built. The question isn&apos;t whether tin matters. It&apos;s whether you&apos;ll have
            access to it.
          </p>
          <Link
            href="/products"
            className="inline-flex items-center justify-center bg-white text-gray-900 px-8 py-3.5 rounded-full text-base font-semibold hover:bg-gray-100 transition-all duration-300"
          >
            Get Early Access
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </div>
      </section>

      <NewsletterSection />
      <Footer />
    </div>
  );
}
