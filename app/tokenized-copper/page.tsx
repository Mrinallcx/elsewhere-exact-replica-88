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
const CopperTickerBar = dynamicImport(
  () => import('../components/client/CopperTickerBar').then((mod) => ({ default: mod.CopperTickerBar }))
);
const CopperFAQ = dynamicImport(
  () => import('../components/client/SilverFAQ').then((mod) => ({ default: mod.SilverFAQ }))
);

const PAGE_URL = 'https://totofinance.co/tokenized-copper';
const PAGE_TITLE = 'Tokenized Copper | Digital Copper Backed by Physical Assets | Toto Finance';
const PAGE_DESCRIPTION =
  "The world is running out of the metal that powers the future. Toto Finance exists to make copper ownership borderless, instant, and fair from 1:1 redeemable cathode tokens to In-Ground future delivery contracts. Settle in stablecoins. Trade on DeFi. Own the metal that matters.";

const breadcrumbItems = [
  { name: 'Home', item: 'https://totofinance.co' },
  { name: 'Products', item: 'https://totofinance.co/products' },
  { name: 'Tokenized Copper', item: PAGE_URL },
];

const faqData = [
  {
    question: 'What is tokenized copper?',
    answer:
      'A blockchain-based digital asset backed 1:1 by refined copper cathodes in insured, audited vaults. Grade A, LME deliverable. Always redeemable for physical copper. Toto Finance is building the infrastructure to bring this to market with instant stablecoin settlement and open DeFi trading.',
  },
  {
    question: 'What is In-Ground Copper?',
    answer:
      'A tokenized future delivery contract for copper still at certified mining operations. Short-term (1–12 months) for active mines, long-term (1–6 years) for earlier-stage reserves. Built for institutions, sovereign funds, and investors positioning ahead of the structural deficit.',
  },
  {
    question: 'Where does the copper come from?',
    answer:
      "Directly from some of the world's largest publicly listed mining companies. Africa, MENA, Saudi Arabia, the US, Canada, and Asia covering active production and exploration-stage fields. No middlemen. No intermediary traders.",
  },
  {
    question: 'Who buys tokenized copper?',
    answer:
      'Three groups: (1) Industrial clients building with copper, data centers, energy, EVs, construction, electronics, defense, telecom. (2) Investors and commodity brokers, especially mid-size firms finally getting access to institutional-grade deals. (3) Crypto-native participants, funds, DAOs, protocol treasuries seeking real-world asset backing.',
  },
  {
    question: 'How does instant settlement work?',
    answer:
      'T+0 settlement using USDC, USDT, or USAT. No brokers, banks, or clearing houses. Toto Finance matches producers with buyers directly on-chain, the same principle as Amazon matching buyers and sellers, applied to commodities.',
  },
  {
    question: 'Can I trade on DeFi platforms?',
    answer:
      'Yes. After purchase, trade globally on DEXs, earn yield by lending to borrowers, or use copper as collateral for on-chain loans. All programmable. All at the protocol level.',
  },
  {
    question: 'Why is copper called the "new oil"?',
    answer:
      'Because AI infrastructure physically cannot function without it. 5,000+ copper cables per server rack. 165% data center power growth projected. A 6 million tonne supply gap by 2035. New mines take 17 years. Copper is as critical to the AI era as oil was to the industrial age.',
  },
  {
    question: "What's the copper price forecast?",
    answer:
      'J.P. Morgan: $12,500/mt by Q2 2026. UBS: $13,000/mt. Bloomberg NEF: $13,500/mt peak by 2028. The structural deficit is expected to persist and widen.',
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
        'Tokenized copper platform offering 1:1 asset-backed copper cathode tokens and In-Ground Copper future delivery contracts with instant stablecoin settlement.',
    },
    {
      '@type': 'Product',
      name: '1:1 Copper Cathode Token',
      description:
        'Copper backed 1:1 by refined copper cathodes in insured, audited vaults. Grade A, LME deliverable. Category: Tokenized Commodity.',
      category: 'Tokenized Commodity',
      brand: { '@type': 'Brand', name: 'Toto Finance' },
      url: PAGE_URL,
    },
    {
      '@type': 'Product',
      name: 'In-Ground Copper',
      description:
        'Tokenized future delivery contract for physical copper at certified mining operations. Category: Commodity Future Delivery Contract.',
      category: 'Commodity Future Delivery Contract',
      brand: { '@type': 'Brand', name: 'Toto Finance' },
      url: PAGE_URL,
    },
  ],
};

export default function TokenizedCopperPage() {
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
        datePublished="2026-02-01"
        dateModified="2026-03-21"
        breadcrumbItems={breadcrumbItems}
      />
      <BreadcrumbStructuredData items={breadcrumbItems} />
      <FAQStructuredData faqs={faqData} />

      <GradualBlur preset="page-footer" strength={2} height="4rem" animated="scroll" duration="0.5s" />
      <Navigation pastHero={true} />

      {/* FOLD 1: Hero */}
      <section className="relative bg-gradient-to-br from-orange-900 via-orange-800 to-gray-900 text-white px-4 sm:px-6 md:px-8 lg:px-12 pt-28 md:pt-36 pb-16 md:pb-24 overflow-hidden">
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
            backgroundSize: '40px 40px',
          }}
        />
        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <h1 className="text-sm md:text-base font-semibold tracking-[0.2em] uppercase text-orange-200/90 mb-4">
            Tokenized Copper by Toto Finance
          </h1>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light leading-tight mb-8">
            The World Needs Copper. Everyone Deserves Access to It.
          </h2>
          <p className="text-base md:text-lg text-gray-200 leading-relaxed mb-10 max-w-3xl mx-auto text-left md:text-center">
            The metal powering every AI chip, every electric vehicle, and every watt of clean energy is entering a generation-long
            shortage. Yet access to copper as an asset remains locked behind brokers, banks, and billion-dollar minimums. We believe
            that&apos;s wrong.{' '}
            <Link href="/" className="text-white underline underline-offset-2 hover:text-orange-200">
              Toto Finance
            </Link>{' '}
            exists to change it, making copper ownership instant, borderless, and open to everyone.
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

      <CopperTickerBar />

      {/* FOLD 2: Copper crisis */}
      <section className="px-4 sm:px-6 md:px-8 lg:px-12 py-20 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto">
          <p className="text-xs uppercase tracking-widest text-gray-400 font-semibold mb-3">THE WHY</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-gray-900 leading-tight mb-6">
            Copper Is the New Oil. And the World Is Running Out.
          </h2>
          <div className="text-base md:text-lg text-gray-600 leading-relaxed max-w-4xl mb-12 space-y-4">
            <p>
              We didn&apos;t start Toto Finance because tokenization is trendy. We started because we saw a collision coming and
              nobody was building for it.
            </p>
            <p>
              The world is electrifying. AI is scaling. Clean energy is expanding. And every single one of those transitions depends
              on a single irreplaceable metal: copper. But here&apos;s the problem no one is solving: global supply is entering
              structural decline just as demand is exploding. This isn&apos;t a market cycle. It&apos;s a generational crisis. And
              the people who need copper most, builders, manufacturers, investors, nations, are locked out of the market by an
              outdated system of brokers, banks, and intermediaries.
            </p>
            <p className="font-medium text-gray-900">That&apos;s why we exist.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gray-50 rounded-2xl p-6 md:p-8 border border-gray-100">
              <p className="text-4xl md:text-5xl font-light text-gray-900 mb-3">304K tonnes</p>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">The Deficit Has Already Begun</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                This isn&apos;t a future prediction. Wood Mackenzie forecasts a 304,000-tonne refined copper deficit in 2025. The
                International Copper Study Group has reversed its own surplus forecast to a shortfall. The gap is here and it&apos;s
                widening.
              </p>
            </div>
            <div className="bg-gray-50 rounded-2xl p-6 md:p-8 border border-gray-100">
              <p className="text-4xl md:text-5xl font-light text-gray-900 mb-3">5,000+ cables</p>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">AI Can&apos;t Run Without Copper</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                A single Nvidia GB200 NVL72 AI server rack requires over 5,000 copper cables spanning 3.2 kilometers. Data centers
                bring hundreds of these together. Every model trained, every query answered, every AI breakthrough, copper makes
                it physically possible.
              </p>
            </div>
            <div className="bg-gray-50 rounded-2xl p-6 md:p-8 border border-gray-100">
              <p className="text-4xl md:text-5xl font-light text-gray-900 mb-3">6M tonnes</p>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">A Gap No One Can Close in Time</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                By 2035, the world will need 42.7 million tonnes of copper per year. Supply peaks around 2030 and declines. Existing
                and planned mines will meet only 70% of demand. New mines take 17 years from discovery to production. The math
                doesn&apos;t work and the clock is already running.
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
            Understanding Why Copper Is Irreplaceable
          </h2>
          <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto text-center mb-14">
            There is no substitute. No alternative. No workaround. Copper is the physical backbone of the digital future.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
              <div
                className="rounded-xl bg-gradient-to-br from-amber-900 to-orange-950 text-white p-6 mb-4 font-mono text-sm"
                role="img"
                aria-label="Copper element card showing Cu symbol, atomic number 29, density, recyclability, and electrical conductivity rank"
              >
                <p className="text-3xl font-light mb-1">Cu</p>
                <ul className="space-y-1 text-orange-100/90">
                  <li>Atomic Number: 29</li>
                  <li>Density: 8,960 kg/m³</li>
                  <li>Recyclability: 100%</li>
                  <li>Electrical Conductivity Rank: #2</li>
                </ul>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">The Element</h3>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
              <div
                className="rounded-xl bg-gradient-to-br from-amber-800/70 to-slate-900 min-h-[160px] mb-4"
                role="img"
                aria-label="Open pit copper mine with heavy machinery extracting copper ore"
              />
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Where It Comes From</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Mined from sulfide and oxide ores across Chile, Peru, DRC, USA, and Asia. Refined through smelting into 99.99% pure
                cathodes. Every cathode begins as rock and ends as the nervous system of modern infrastructure.
              </p>
              <p className="text-xs text-gray-500 mt-3 font-mono">Ore → Smelting → Refining → 99.99% Pure Cathodes</p>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
              <div
                className="rounded-xl bg-gradient-to-br from-orange-700/50 to-slate-900 min-h-[160px] mb-4"
                role="img"
                aria-label="Copper cables and wiring used in AI data center power and connectivity infrastructure"
              />
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Why Nothing Else Works</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                The second-best electrical conductor on Earth and 100 times cheaper than silver. Unmatched thermal conductivity for
                AI chip cooling. Antimicrobial. Infinitely recyclable. There is no synthetic replacement.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
              <div
                className="rounded-xl bg-gradient-to-br from-slate-700 to-slate-900 min-h-[160px] mb-4"
                role="img"
                aria-label="Interior of an AI data center with rows of server racks using copper for power distribution and cooling"
              />
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Where It Goes</h3>
              <p className="text-sm text-gray-600 leading-relaxed mb-4">
                AI data centers. Electric vehicles. Renewable energy grids. Construction. Electronics. Defense. Telecommunications.
              </p>
              <p className="text-sm font-semibold text-orange-800 bg-orange-50 rounded-lg px-3 py-2">
                1.1M tonnes annually by 2030 (data centers alone)
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FOLD 4: AI infrastructure */}
      <section className="px-4 sm:px-6 md:px-8 lg:px-12 py-20 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto">
          <p className="text-xs uppercase tracking-widest text-gray-400 font-semibold mb-3">THE CATALYST</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-gray-900 leading-tight mb-6">
            The AI Revolution Runs on Copper, Not Code
          </h2>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-4xl mb-12">
            We believe most people misunderstand AI infrastructure. They see software. We see copper. Every model trained, every
            query processed, every autonomous system deployed requires physical copper for power, for cooling, for connectivity. And
            the demand curve isn&apos;t flattening. It&apos;s accelerating.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <div className="bg-gray-50 rounded-2xl p-6 md:p-8 border border-gray-100">
              <h3 className="text-xl font-medium text-gray-900 mb-3">165% Power Surge by 2030</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Goldman Sachs projects AI will drive a 165% increase in data center power demand by 2030. That power doesn&apos;t
                flow through air. It flows through copper in transmission lines, distribution systems, and cooling infrastructure.
              </p>
            </div>
            <div className="bg-gray-50 rounded-2xl p-6 md:p-8 border border-gray-100">
              <h3 className="text-xl font-medium text-gray-900 mb-3">1.1 Million Tonnes Annually</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                By 2030, data centers alone will consume 1.1 million tonnes of copper every year, nearly 3% of total global demand.
                And that&apos;s before counting EVs, grid buildout, and clean energy.
              </p>
            </div>
            <div className="bg-gray-50 rounded-2xl p-6 md:p-8 border border-gray-100">
              <h3 className="text-xl font-medium text-gray-900 mb-3">The Liquid Cooling Revolution</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                The liquid-cooled data center market is growing at 33% CAGR, projected to reach $21 billion by 2032. Every AI chip
                needs a copper cooling plate. Every rack needs copper plumbing. The hotter AI runs, the more copper it needs.
              </p>
            </div>
            <div className="bg-gray-50 rounded-2xl p-6 md:p-8 border border-gray-100">
              <h3 className="text-xl font-medium text-gray-900 mb-3">Price-Insensitive Buyers</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Copper represents less than 0.5% of total data center project costs. Hyperscale developers don&apos;t flinch at price
                increases; they outbid everyone else. Demand doesn&apos;t drop when prices rise. It intensifies.
              </p>
            </div>
          </div>

          <div className="bg-gray-50 rounded-2xl p-6 md:p-8 border border-gray-200">
            <h3 className="text-xl font-medium text-gray-900 mb-2">The Gap That Can&apos;t Be Closed</h3>
            <p className="text-sm text-gray-500 mb-6">
              Bar chart showing global copper demand rising from 26.3 million tonnes in 2025 to 42.7 million tonnes by 2035, with
              supply peaking at approximately 29 million tonnes, creating a 6 million tonne gap.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-6">
              {[
                { year: '2025', val: '26.3', note: 'Demand (Mt)' },
                { year: '2028', val: '29.8', note: 'Demand (Mt)' },
                { year: '2030', val: '32.2', note: 'Demand (Mt)' },
                { year: '2035', val: '42.7', note: 'Wood Mac' },
                { year: '2035 Supply', val: '~29.0', note: 'Gap: 6M+ tonnes' },
              ].map((d, i) => (
                <div
                  key={d.year}
                  className={`text-center p-4 rounded-xl ${i === 4 ? 'bg-red-50 border border-red-100' : i === 3 ? 'bg-orange-50' : 'bg-white border border-gray-100'}`}
                >
                  <p className={`text-sm mb-2 ${i === 4 ? 'text-red-800 font-medium' : 'text-gray-500'}`}>{d.year}</p>
                  <p className="text-sm font-semibold text-gray-900">{d.val} Mt</p>
                  <p className="text-xs text-gray-500 mt-1">{d.note}</p>
                </div>
              ))}
            </div>
            <p className="text-xs text-gray-400">Sources: Wood Mackenzie, IEA, Mordor Intelligence.</p>
          </div>
        </div>
      </section>

      {/* FOLD 5: Two products */}
      <section id="products" className="px-4 sm:px-6 md:px-8 lg:px-12 py-20 md:py-32 bg-gray-50 scroll-mt-24">
        <div className="max-w-7xl mx-auto">
          <p className="text-xs uppercase tracking-widest text-gray-400 font-semibold mb-3 text-center">TWO PRODUCTS</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-gray-900 leading-tight mb-6 text-center">
            Two Ways to Own Tokenized Copper
          </h2>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto text-center mb-14">
            Everything we believe about access, transparency, and the future of copper comes to life in two distinct products. One
            for copper that&apos;s already refined and vaulted. One for copper still in the ground. Both backed by physical assets.
            Both are settable in stablecoins. Both built for a world that can&apos;t afford to wait.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
            <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm">
              <span className="inline-block text-xs font-bold tracking-wider text-orange-800 bg-orange-100 px-3 py-1 rounded-full mb-4">
                ASSET-BACKED TOKEN
              </span>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                <Link href="/products" className="hover:text-orange-700 underline-offset-2 hover:underline">
                  1:1 Copper Cathode Token
                </Link>
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed mb-6">
                This is copper you can hold digitally and physically. Every token is backed 1:1 by refined copper cathodes stored
                in insured, audited vaults. Grade A. LME deliverable. Ready for industrial use. Always redeemable for physical copper
                on demand. No synthetic exposure. No paper promises. Real copper.
              </p>
              <ul className="text-sm text-gray-700 space-y-2 list-disc pl-5">
                <li>Backed 1:1 by refined copper cathodes (Grade A, LME quality)</li>
                <li>Always redeemable for physical copper delivery on demand</li>
                <li>Stored in insured, independently audited vault and warehouse facilities</li>
                <li>On-chain proof-of-reserves with real-time oracle feeds</li>
                <li>Fractional ownership, from $1, tradeable 24/7 with instant stablecoin settlement</li>
                <li>Ready for industrial end-use: data centers, energy, construction, electronics</li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm">
              <span className="inline-block text-xs font-bold tracking-wider text-slate-800 bg-slate-200 px-3 py-1 rounded-full mb-4">
                FUTURE DELIVERY CONTRACT
              </span>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                <Link href="/products" className="hover:text-orange-700 underline-offset-2 hover:underline">
                  In-Ground Copper
                </Link>
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed mb-6">
                This is copper before the world prices it in. Tokenized future delivery contracts for physical copper still at
                certified mining operations giving you access to pre-production economics and the built-in scarcity premium that
                comes with a structural deficit. For those who think in years, not quarters.
              </p>
              <ul className="text-sm text-gray-700 space-y-2 list-disc pl-5">
                <li>Backed by proven and probable reserves at partner mining sites</li>
                <li>Pre-production pricing with built-in supply scarcity premium</li>
                <li>On-chain reserve tracking with geological data transparency</li>
                <li>Physical delivery or settlement at maturity</li>
                <li>Verified reserves with third-party geological audits</li>
                <li>Designed for institutional, sovereign, and long-duration strategies</li>
              </ul>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-orange-900/10 border border-orange-200 rounded-2xl p-6 md:p-8">
              <p className="text-xs font-bold text-orange-900 uppercase tracking-wider mb-2">SHORT-TERM DELIVERY</p>
              <p className="text-lg font-semibold text-gray-900 mb-3">1–12 Months</p>
              <p className="text-sm text-gray-600 leading-relaxed">
                Near-term copper delivery contracts tied to active mining operations approaching production. For industrial hedging,
                tactical allocation, and buyers who need delivery certainty with transparent reserve verification.
              </p>
            </div>
            <div className="bg-slate-100 border border-slate-200 rounded-2xl p-6 md:p-8">
              <p className="text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">LONG-TERM DELIVERY</p>
              <p className="text-lg font-semibold text-gray-900 mb-3">1–6 Years</p>
              <p className="text-sm text-gray-600 leading-relaxed">
                Strategic copper positions backed by proven reserves at earlier-stage operations. Built for sovereign wealth funds,
                institutional allocators, and forward-looking investors who understand that the copper deficit isn&apos;t a headline,
                it&apos;s a decade-long structural reality.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FOLD 6: Sourcing */}
      <section className="px-4 sm:px-6 md:px-8 lg:px-12 py-20 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto">
          <p className="text-xs uppercase tracking-widest text-gray-400 font-semibold mb-3 text-center">SOURCING</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-gray-900 leading-tight mb-6 text-center">
            Direct From the Source. No Middlemen. No Exceptions.
          </h2>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto text-center mb-14">
            Most commodity platforms sit at the end of a long chain, brokers reselling what traders bought from distributors who
            purchased from producers. We don&apos;t. Toto Finance works directly with some of the largest{' '}
            <Link href="/about" className="text-orange-800 font-medium underline underline-offset-2 hover:text-orange-600">
              publicly listed mining companies
            </Link>{' '}
            in the world. We secure copper at the producer and refinery level because we believe the supply chain should have as few
            links as possible.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            {[
              {
                title: 'Africa',
                text: 'Direct partnerships across the copper belt, DRC and Zambian producers with active production sites and new exploration fields.',
              },
              {
                title: 'MENA & Saudi Arabia',
                text: 'Strategic sourcing aligned with sovereign diversification programs and industrial development initiatives across the Middle East and North Africa.',
              },
              {
                title: 'North America (USA & Canada)',
                text: 'Established producers and new mining fields benefiting from critical mineral designations and domestic supply policies.',
              },
              {
                title: 'Asia',
                text: 'Direct connections with smelters and refineries processing a significant share of global copper output.',
              },
              {
                title: 'Developed Mines',
                text: 'Publicly listed mining companies with multiple mines in active production delivering consistent copper output at scale.',
              },
              {
                title: 'Exploration & Preparation',
                text: 'New mining fields in preparation and exploration phases offering In-Ground Copper positions at pre-production economics before reserves reach market.',
              },
            ].map((c) => (
              <div key={c.title} className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{c.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{c.text}</p>
              </div>
            ))}
          </div>

          <div className="bg-gray-900 text-white rounded-2xl p-6 md:p-8">
            <p className="text-sm md:text-base leading-relaxed">
              <strong>Secured at source.</strong> We eliminate commodity brokers and trading intermediaries. Better pricing. Verified
              provenance. A transparent chain of custody from{' '}
              <Link href="/how-tokenization-works" className="underline underline-offset-2 hover:text-orange-200">
                mine to token
              </Link>
              . Because we believe the fewer hands copper passes through, the fairer and more transparent the market becomes.
            </p>
          </div>
        </div>
      </section>

      {/* FOLD 7: Who buys */}
      <section className="px-4 sm:px-6 md:px-8 lg:px-12 py-20 md:py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <p className="text-xs uppercase tracking-widest text-gray-400 font-semibold mb-3 text-center">INVESTORS</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-gray-900 leading-tight mb-6 text-center">
            Who Buys Tokenized Copper
          </h2>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto text-center mb-14">
            We believe access to essential commodities shouldn&apos;t depend on how big you are. Whether you&apos;re a data center
            operator securing supply, a family office diversifying, or a DeFi protocol looking for real-world collateral, Toto Finance
            was built for you.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 border border-gray-200">
              <span className="text-xs font-bold tracking-widest text-orange-800">BUILDERS</span>
              <h3 className="text-xl font-semibold text-gray-900 mt-3 mb-4">Companies That Need Physical Copper</h3>
              <p className="text-sm text-gray-600 leading-relaxed mb-4">
                They don&apos;t buy copper to trade it. They buy it to build with it. Tokenized copper gives them{' '}
                <Link href="/products" className="text-orange-800 font-medium underline underline-offset-2">
                  guaranteed supply
                </Link>
                , streamlined procurement, and physical redemption without the delays and middlemen of traditional commodity markets.
              </p>
              <p className="text-xs text-gray-500 leading-relaxed">
                AI data center operators, energy and grid infrastructure, EV manufacturers, construction developers, electronics and
                semiconductor makers, telecom and 5G, defense and aerospace, renewable energy (solar, wind, storage), HVAC systems,
                shipbuilding and marine engineering.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 border border-gray-200">
              <span className="text-xs font-bold tracking-widest text-blue-800">ALLOCATORS</span>
              <h3 className="text-xl font-semibold text-gray-900 mt-3 mb-4">Investors Who Were Locked Out Until Now</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Premium copper deals have always gone to the biggest players. Mid-size firms, commodity brokers, family offices, and
                individual investors were left with scraps or priced out entirely. The same copper, at competitive pricing, should be
                accessible to everyone. Fractional ownership. No minimum tonnage. No warehouse logistics. No counterparty risk through
                intermediaries. Toto Finance democratizes access to institutional-grade copper.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 border border-gray-200">
              <span className="text-xs font-bold tracking-widest text-purple-800">PIONEERS</span>
              <h3 className="text-xl font-semibold text-gray-900 mt-3 mb-4">The On-Chain Economy Meets Physical Value</h3>
              <p className="text-sm text-gray-600 leading-relaxed mb-4">
                Blockchain-native organizations and investors seeking what most digital assets lack: real-world backing. Use tokenized
                copper for portfolio diversification, on-chain yield, and commodity-backed collateral for DeFi strategies.
              </p>
              <p className="text-xs text-gray-500 leading-relaxed">
                Crypto hedge funds and digital asset funds, blockchain infrastructure foundations and protocol treasuries, DeFi
                protocols seeking real-world collateral, crypto-native investors diversifying into commodities, DAOs and decentralized
                investment vehicles.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FOLD 8: Instant settlement */}
      <section className="px-4 sm:px-6 md:px-8 lg:px-12 py-20 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto">
          <p className="text-xs uppercase tracking-widest text-gray-400 font-semibold mb-3">GLOBAL TRADE</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-gray-900 leading-tight mb-6">
            Instant Settlement for Tokenized Copper. No Banks.
          </h2>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-4xl mb-12">
            We believe the traditional commodity system is broken by design. It was built for a world of paper contracts and
            correspondent banks. It wasn&apos;t built for a world that needs copper delivered at the speed of AI. So we rebuilt it.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="bg-gray-50 rounded-2xl p-6 md:p-8 border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-1">The Old Way</h3>
              <p className="text-sm text-gray-500 mb-6">7+ Intermediaries. Days to Settle. Fees at Every Step.</p>
              <div className="space-y-3">
                {[
                  'Mining Company / Producer',
                  'Commodity Broker / Trader',
                  'Clearing House',
                  'Custodian Bank',
                  'Correspondent Bank',
                  'Settlement Agent',
                  'Buyer',
                ].map((step, i) => (
                  <div key={step} className="flex items-center gap-3">
                    <div className="w-7 h-7 rounded-full bg-gray-200 flex items-center justify-center flex-shrink-0 text-xs font-semibold text-gray-600">
                      {i + 1}
                    </div>
                    <span className="text-sm text-gray-700">{step}</span>
                  </div>
                ))}
              </div>
              <p className="text-sm text-red-600 font-medium mt-6 pt-4 border-t border-gray-200">Settlement: T+2 to T+5 (or longer)</p>
            </div>

            <div className="bg-gray-900 text-white rounded-2xl p-6 md:p-8">
              <h3 className="text-lg font-semibold mb-1">The Toto Finance Way</h3>
              <p className="text-sm text-gray-400 mb-6">Buyer ↔ Seller. Direct. Instant.</p>
              <div className="space-y-3">
                {['Mining Company / Producer', 'Toto Finance Platform', 'Buyer'].map((step, i) => (
                  <div key={step} className="flex items-center gap-3">
                    <div className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0 text-xs font-semibold">
                      {i + 1}
                    </div>
                    <span className="text-sm">
                      {i === 1 ? (
                        <Link href="/products" className="underline underline-offset-2 hover:text-orange-200">
                          Toto Finance Platform
                        </Link>
                      ) : (
                        step
                      )}
                    </span>
                  </div>
                ))}
              </div>
              <p className="text-sm text-green-400 font-medium mt-6 pt-4 border-t border-white/10">Settlement: T+0 (Instant)</p>
              <p className="text-sm text-gray-400 mt-4 leading-relaxed">
                Think of it like Amazon for copper. Just as e-commerce platforms match buyers and sellers directly for physical goods,
                Toto Finance uses blockchain technology to connect copper producers with buyers, eliminating banks, clearing houses,
                and settlement agents entirely.
              </p>
            </div>
          </div>

          <h3 className="text-2xl font-medium text-gray-900 mb-6 text-center">Pay in the Currency of the Future</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                name: 'USDC',
                issuer: 'Circle',
                detail:
                  'The most widely adopted dollar-backed stablecoin for institutional use. Full reserve transparency and broad DeFi integration.',
              },
              {
                name: 'USDT',
                issuer: 'Tether',
                detail:
                  'The highest-liquidity stablecoin in the world, over $140 billion in circulation. The default settlement currency for global crypto and commodity markets.',
              },
              {
                name: 'USAT',
                issuer: 'Tether (US Regulated)',
                detail:
                  "Tether's US-regulated stablecoin under the GENIUS Act framework. Bridging traditional finance with digital infrastructure for compliant domestic transactions.",
              },
            ].map((coin) => (
              <div key={coin.name} className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
                <p className="font-semibold text-gray-900">{coin.name}</p>
                <p className="text-xs text-gray-500 mb-3">{coin.issuer}</p>
                <p className="text-sm text-gray-600 leading-relaxed">{coin.detail}</p>
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
            DeFi Trading, Yield and Loans for Tokenized Copper
          </h2>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-4xl mb-12">
            We believe owning an asset should mean more than holding it. Once tokenized copper is purchased on Toto Finance, it
            enters an open ecosystem. Hold it. Trade it. Earn from it. Borrow against it. All on-chain. All programmable. All without
            asking permission.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            <div className="bg-white rounded-2xl p-6 md:p-8 border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Global Secondary Trading</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Trade tokenized copper 24/7 on decentralized exchanges worldwide. No gatekeepers. No brokers. No trading hours.
                True global liquidity, because we believe markets should never close.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-6 md:p-8 border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">On-Chain Yield</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Earn yield by lending your copper tokens to borrowers, short sellers, leveraged traders who pay interest for access.
                Passive income backed by physical commodities. Because copper should generate value even when you&apos;re not using it.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-6 md:p-8 border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Collateral Loans</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Borrow stablecoins against your copper holdings without selling the underlying asset. No bank approval. No credit
                checks. No delays. All managed at the protocol level, because we believe your assets should unlock liquidity on your
                terms.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-6 md:p-8 border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Programmable Finance</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Smart contracts automate liquidation thresholds, interest payments, and margin requirements. Physical commodity value
                meets decentralized infrastructure. This is what we mean by programmable finance,{' '}
                <Link href="/products" className="text-orange-800 font-medium underline underline-offset-2">
                  collateral
                </Link>{' '}
                that thinks for itself.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 md:p-8 border border-gray-200">
            <h3 className="text-xl font-medium text-gray-900 mb-6 text-center">
              From Mine to Market to DeFi: The Life of a Copper Token
            </h3>
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              {[
                'Minted on Toto Finance',
                'Purchased with Stablecoins',
                'Held, Traded, or Transferred',
                'Deployed: Yield, Loans, or Hedging',
                'Redeemed for Physical Copper',
              ].map((step, i) => (
                <div key={i} className="flex items-center gap-2 md:gap-0 w-full md:w-auto">
                  <div className="flex flex-col items-center text-center flex-1">
                    <div className="w-10 h-10 rounded-full bg-gray-900 text-white flex items-center justify-center text-sm font-semibold mb-2">
                      {i + 1}
                    </div>
                    <p className="text-xs text-gray-700 max-w-[140px] leading-tight">{step}</p>
                  </div>
                  {i < 4 && (
                    <svg className="w-5 h-5 text-gray-300 hidden md:block flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
            Tokenized Copper vs Traditional Copper
          </h2>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-4xl mb-12">
            We built Toto Finance because every existing way to own copper is broken in some fundamental way. Here&apos;s how we
            compare.
          </p>

          <div
            className="overflow-x-auto rounded-2xl border border-gray-200"
            aria-label="Comparison table of tokenized copper on Toto Finance versus copper ETFs, physical copper ownership, and copper futures across 10 features including settlement speed, minimum investment, and DeFi access."
          >
            <table className="w-full text-sm text-left min-w-[640px]">
              <thead>
                <tr className="bg-gray-900 text-white">
                  <th className="px-4 md:px-6 py-4 font-medium">Feature</th>
                  <th className="px-4 md:px-6 py-4 font-medium">Copper ETFs</th>
                  <th className="px-4 md:px-6 py-4 font-medium bg-white/10">Toto Finance</th>
                  <th className="px-4 md:px-6 py-4 font-medium">Physical Copper</th>
                  <th className="px-4 md:px-6 py-4 font-medium">Copper Futures</th>
                </tr>
              </thead>
              <tbody className="bg-white">
                {[
                  ['Trading Hours', 'Market hours only', '24/7/365', 'OTC / Dealer', 'Exchange hours'],
                  ['Settlement', 'T+2', 'T+0 (Instant)', 'Days to weeks', 'T+1'],
                  ['Settlement Currency', 'Fiat (via broker)', 'USDC, USDT, USAT', 'Wire transfer', 'Fiat (via broker)'],
                  ['Physical Backing', 'Synthetic / Futures', '1:1 Copper Cathodes', 'Direct ownership', 'No (cash settled)'],
                  ['Min. Investment', '1 share (~$30+)', 'Fractional (from $1)', '$10,000+', '$25,000+ margin'],
                  ['Physical Redemption', 'No', 'Yes', 'Yes', 'No'],
                  ['On-Chain Transparency', 'No', 'Yes', 'No', 'No'],
                  ['DeFi Yield / Loans', 'No', 'Yes', 'No', 'No'],
                  ['Storage Costs', 'Expense ratio', 'None', 'Vault fees', 'Roll costs'],
                  ['Intermediaries', 'Broker + Clearing', 'None (P2P)', 'Multiple', 'Broker + Exchange'],
                ].map((row, i) => (
                  <tr key={row[0]} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="px-4 md:px-6 py-3 font-medium text-gray-900">{row[0]}</td>
                    <td className="px-4 md:px-6 py-3 text-gray-600">{row[1]}</td>
                    <td className="px-4 md:px-6 py-3 text-gray-900 font-medium bg-orange-50/50">{row[2]}</td>
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
          <p className="text-xs uppercase tracking-widest text-gray-400 font-semibold mb-3">PLATFORM</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-gray-900 leading-tight mb-6">
            Trust Isn&apos;t a Promise. It&apos;s a System.
          </h2>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-4xl mb-12">
            We don&apos;t ask you to trust us. We built systems that make trust verifiable. Every feature of the Toto Finance
            platform exists because we believe transparency and compliance shouldn&apos;t be optional, they should be structural.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                t: 'Redeemable Assets',
                b: 'Every token is linked to insured vaults and custody facilities. Redeem for physical copper cathode delivery on demand. Grade A, LME quality, ready for industrial use. Because a digital asset without physical backing is just a number on a screen.',
              },
              {
                t: 'Transparent Reserves',
                b: "On-chain proof-of-reserves, real-time oracle feeds, and third-party audits ensure continuous 1:1 backing. Every token is verifiable on the blockchain at any time. Because we believe you should never have to take our word for it.",
              },
              {
                t: 'Instant Settlement',
                b: 'T+0 settlement with USDC, USDT, and USAT. No banks. No clearing houses. No intermediaries. Because waiting days for a trade to settle belongs to a different century.',
              },
              {
                t: 'Programmable Compliance',
                b: 'Smart contracts enforce KYC/AML requirements, transfer restrictions, and permissions at the protocol level. Compliance is built into the token, not bolted on after the fact. Because we believe regulation and innovation aren\'t enemies.',
              },
              {
                t: 'DeFi Yield & Loans',
                b: 'Earn yield, borrow against holdings, and hedge positions, all through smart contracts. Programmable finance for physical assets. Because your copper should work as hard as you do.',
              },
              {
                t: 'Multi-Chain Access',
                b: 'Accessible across Ethereum, Polygon, Cardano, Solana, and XRP Ledger. Trade on the chain that fits your strategy. Because we believe infrastructure should adapt to you, not the other way around.',
              },
            ].map((x) => (
              <div key={x.t} className="bg-white rounded-2xl p-6 border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{x.t}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{x.b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOLD 12: FAQ */}
      <section className="px-4 sm:px-6 md:px-8 lg:px-12 py-20 md:py-32 bg-white">
        <div className="max-w-3xl mx-auto">
          <p className="text-xs uppercase tracking-widest text-gray-400 font-semibold mb-3">QUESTIONS</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-gray-900 leading-tight mb-6">Tokenized Copper FAQ</h2>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-12">
            Straight answers about tokenized copper, In-Ground Copper, instant settlement, and DeFi secondary markets.
          </p>
          <CopperFAQ faqs={faqData} />
        </div>
      </section>

      {/* FOLD 13: Final CTA */}
      <section className="relative bg-gradient-to-br from-orange-900 via-orange-800 to-gray-900 text-white px-4 sm:px-6 md:px-8 lg:px-12 py-20 md:py-32 overflow-hidden">
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
            backgroundSize: '40px 40px',
          }}
        />
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <p className="text-xs uppercase tracking-widest text-orange-200/80 font-semibold mb-3">THIS IS WHY</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light leading-tight mb-8">
            We Started with a Belief. Now We&apos;re Building It.
          </h2>
          <p className="text-base md:text-lg text-gray-200 leading-relaxed mb-10">
            We believe the metal that powers the future should be accessible to everyone, not locked behind brokers, banks, and
            billion-dollar minimums. The world needs 42.7 million tonnes of copper by 2035. Supply will fall short by over 6 million
            tonnes. The deficit is here. The infrastructure is being built. The question isn&apos;t whether copper matters.
            It&apos;s whether you&apos;ll have access to it.
          </p>
          <Link
            href="/products"
            className="inline-flex items-center justify-center bg-white text-gray-900 px-8 py-3.5 rounded-full text-base font-semibold hover:bg-gray-100 transition-all duration-300"
          >
            Get Early Access
          </Link>
        </div>
      </section>

      <NewsletterSection />
      <Footer />
    </div>
  );
}
