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
const CeriumTickerBar = dynamicImport(
  () => import('../components/client/CeriumTickerBar').then((mod) => ({ default: mod.CeriumTickerBar }))
);
const CeriumFAQ = dynamicImport(
  () => import('../components/client/SilverFAQ').then((mod) => ({ default: mod.SilverFAQ }))
);

const PAGE_URL = 'https://totofinance.co/tokenized-cerium';
const PAGE_TITLE = 'Tokenized Cerium | Digital Rare Earth Backed by Physical Assets | Toto Finance';
const PAGE_DESCRIPTION =
  "The world is running out of the rare earth that keeps every car clean and every screen polished. Toto Finance exists to make cerium ownership borderless, instant, and fair from 1:1 redeemable oxide tokens to In-Ground future delivery contracts. Settle in stablecoins. Trade on DeFi. Own the element the world can't replace.";

const breadcrumbItems = [
  { name: 'Home', item: 'https://totofinance.co' },
  { name: 'Products', item: 'https://totofinance.co/products' },
  { name: 'Tokenized Cerium', item: PAGE_URL },
];

const faqData = [
  {
    question: 'What is tokenized cerium?',
    answer:
      'A blockchain-based digital asset backed 1:1 by refined cerium oxide (CeO₂) in insured, audited vaults. High-purity grade (99.5%+ CeO₂), ready for automotive catalyst production, glass polishing, and industrial use. Always redeemable for physical cerium. Toto Finance is building the infrastructure to bring this to market with instant stablecoin settlement and open DeFi trading.',
  },
  {
    question: 'What is In-Ground Cerium?',
    answer:
      'A tokenized future delivery contract for cerium still at certified rare earth mining operations. Short-term (1–12 months) for active mines, long-term (1–6 years) for earlier-stage reserves. Built for automotive manufacturers, glass manufacturers, sovereign funds, and investors positioning ahead of the structural deficit.',
  },
  {
    question: 'Where does the cerium come from?',
    answer:
      'Directly from rare earth mining companies and processing facilities across China (88% of production from Bayan Obo and ionic clay deposits), North America (USA and Canada with highest cerium concentrations globally), Australia (Lynas Rare Earths), Southeast Asia and Vietnam (ionic clay and processing facilities), and Brazil and India (monazite and heavy mineral sands). No middlemen. No intermediary traders.',
  },
  {
    question: 'Who buys tokenized cerium?',
    answer:
      'Three groups: (1) Industrial clients building with cerium, automotive manufacturers, catalytic converter producers, glass polishing companies, smartphone and display makers, optical lens manufacturers, diesel fuel additive producers, ceramic manufacturers. (2) Investors and commodity brokers, especially mid-size firms finally getting access to institutional-grade rare earth deals. (3) Crypto-native participants, funds, DAOs, protocol treasuries seeking real-world asset backing in critical minerals.',
  },
  {
    question: 'How does instant settlement work?',
    answer:
      'T+0 settlement using USDC, USDT, or USAT. No brokers, banks, or clearing houses. Toto Finance matches producers with buyers directly on-chain, the same principle as Amazon matching buyers and sellers, applied to rare earth commodities.',
  },
  {
    question: 'Can I trade on DeFi platforms?',
    answer:
      'Yes. After purchase, trade globally on DEXs, earn yield by lending to borrowers, or use cerium as collateral for on-chain loans. All programmable. All at the protocol level.',
  },
  {
    question: 'Why is cerium essential for catalytic converters and glass polishing?',
    answer:
      'Cerium oxide has unique oxygen storage capacity, enabling catalytic converters to maintain efficiency across varying exhaust conditions. With 85 million vehicles produced annually and Euro 7/China VI standards requiring 15-20% more cerium per vehicle, automotive demand is accelerating despite EV growth. For glass polishing, cerium oxide is the only material achieving optical-grade surface finishes, consuming 32,000 tonnes annually for smartphone screens, camera lenses, and LCD panels. No substitute matches its performance in either application.',
  },
  {
    question: "What's the cerium price outlook?",
    answer:
      'Roskill forecasts $2,500/mt in 2026. Critical Minerals Institute projects prices exceeding $2,800/mt by 2027 as automotive, glass, and industrial demand accelerates while Chinese export restrictions tighten. The structural deficit is expected to intensify through 2030.',
  },
  {
    question: 'How do I get early access?',
    answer:
      'Visit https://totofinance.co/. Institutional investors, mining partners, automotive manufacturers, glass manufacturers, and industrial buyers can reach out directly for partnership and early allocation discussions.',
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
        'Tokenized commodity platform offering 1:1 asset-backed cerium oxide tokens and In-Ground Cerium future delivery contracts with instant stablecoin settlement.',
    },
    {
      '@type': 'Product',
      name: '1:1 Cerium Oxide Token',
      description:
        'Cerium backed 1:1 by refined cerium oxide (CeO₂) in insured, audited vaults. Redeemable for physical cerium. Category: Tokenized Commodity.',
      category: 'Tokenized Commodity',
      brand: { '@type': 'Brand', name: 'Toto Finance' },
      url: PAGE_URL,
    },
    {
      '@type': 'Product',
      name: 'In-Ground Cerium',
      description:
        'Tokenized future delivery contract for physical cerium at certified rare earth mining operations. Category: Commodity Future Delivery Contract.',
      category: 'Commodity Future Delivery Contract',
      brand: { '@type': 'Brand', name: 'Toto Finance' },
      url: PAGE_URL,
    },
  ],
};

export default function TokenizedCeriumPage() {
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
        <div className="relative z-10 max-w-7xl mx-auto text-left">
          <h1 className="text-sm md:text-base font-semibold tracking-[0.2em] uppercase text-orange-200/90 mb-4">
            Tokenized Cerium by Toto Finance
          </h1>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light leading-tight mb-8">
            Every Catalytic Converter and Every Polished Screen Depends on Cerium. Everyone Deserves Access to It.
          </h2>
          <p className="text-base md:text-lg text-gray-200 leading-relaxed mb-10 max-w-3xl text-left">
            The most abundant rare earth element powers every catalytic converter rolling off the line and every precision lens
            polished to optical grade. Yet 88% of global cerium production is concentrated in a single country, and supply is
            entering structural deficit. Access to cerium as an asset remains locked behind rare earth brokers, processing
            monopolies, and industrial-scale minimums. We believe that&apos;s wrong.{' '}
            <Link href="/" className="text-white underline underline-offset-2 hover:text-orange-200">
              Toto Finance
            </Link>{' '}
            exists to change it, making cerium ownership instant, borderless, and open to everyone.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-start">
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

      <CeriumTickerBar />

      {/* FOLD 2: Cerium crisis */}
      <section className="px-4 sm:px-6 md:px-8 lg:px-12 py-20 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto">
          <p className="text-xs uppercase tracking-widest text-gray-400 font-semibold mb-3">THE WHY</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-gray-900 leading-tight mb-6">
            Cerium Is Critical to Clean Air and Precision Manufacturing. And the World Is Running Short.
          </h2>
          <div className="text-base md:text-lg text-gray-600 leading-relaxed max-w-4xl mb-12 space-y-4">
            <p>
              We didn&apos;t start tokenizing cerium because rare earths are in the headlines. We started because we saw a supply
              chain so concentrated and so fragile that a single policy shift could disrupt entire industries.
            </p>
            <p>
              Cerium is inside every catalytic converter cleaning exhaust gases, every polished smartphone screen, every diesel
              engine meeting emission standards. It&apos;s the most abundant rare earth element, yet 88% of global production comes
              from China. And here&apos;s the problem no one is solving: demand is accelerating from automotive, glass, and clean
              energy sectors while supply remains hostage to export restrictions, production quotas, and geopolitical tension.
              The manufacturers who need cerium most, automakers, glass producers, electronics companies, are locked out of fair
              access by a system designed for a handful of dominant processors.
            </p>
            <p className="font-medium text-gray-900">That&apos;s why we exist.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gray-50 rounded-2xl p-6 md:p-8 border border-gray-100">
              <p className="text-4xl md:text-5xl font-light text-gray-900 mb-3">18,500 tonnes</p>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">The Deficit Has Already Begun</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Roskill forecasts an 18,500-tonne cerium deficit in 2025, with the gap widening through 2030. Despite being the
                most abundant rare earth element (50% of all rare earth content), cerium supply is concentrated in China (88% of
                production) and constrained by rare earth mining economics and export restrictions.
              </p>
            </div>
            <div className="bg-gray-50 rounded-2xl p-6 md:p-8 border border-gray-100">
              <p className="text-4xl md:text-5xl font-light text-gray-900 mb-3">45%</p>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Every Catalytic Converter Needs Cerium</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Cerium oxide is essential for catalytic converters in gasoline and diesel vehicles, improving combustion efficiency,
                reducing emissions, and enabling oxygen storage. 45% of global cerium demand comes from automotive applications,
                with each catalytic converter containing 20-50 grams of cerium oxide.
              </p>
            </div>
            <div className="bg-gray-50 rounded-2xl p-6 md:p-8 border border-gray-100">
              <p className="text-4xl md:text-5xl font-light text-gray-900 mb-3">65,000 tonnes</p>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">A Gap That Keeps Widening</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Global cerium demand is projected to reach 175,000 tonnes per year by 2030, while supply from existing and planned
                rare earth mines will deliver only 110,000 tonnes. The 65,000-tonne gap represents a 37% shortfall, according to
                Critical Minerals Institute projections.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FOLD 3: About cerium — THE METAL */}
      <section className="px-4 sm:px-6 md:px-8 lg:px-12 py-20 md:py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <p className="text-xs uppercase tracking-widest text-gray-400 font-semibold mb-3 text-center">THE METAL</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-gray-900 leading-tight mb-4 text-center">
            Understanding Why Cerium Is Irreplaceable
          </h2>
          <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto text-center mb-14">
            The most abundant rare earth element. Essential for catalytic converters, glass polishing, and clean energy
            technologies. No substitute matches its performance.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
              <div
                className="rounded-xl bg-gradient-to-br from-slate-800 to-slate-950 text-white p-6 mb-4 font-mono text-sm"
                role="img"
                aria-label="Cerium element card showing Ce symbol, atomic number 58, density, rare earth content percentage, and oxidation states"
              >
                <p className="text-3xl font-light mb-1">Ce</p>
                <ul className="space-y-1 text-slate-300">
                  <li>Atomic Number: 58</li>
                  <li>Density: 6,770 kg/m³</li>
                  <li>Earth&apos;s REE Content: 25%</li>
                  <li>Rank: #1 Most Abundant Rare Earth</li>
                  <li>Oxidation States: +3, +4</li>
                </ul>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">The Element</h3>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
              <div
                className="rounded-xl bg-gradient-to-br from-amber-900/80 to-slate-900 min-h-[160px] mb-4"
                role="img"
                aria-label="Rare earth mining operation extracting bastnäsite ore containing cerium"
              />
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Where It Comes From</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Extracted from bastnäsite and monazite ores in China, USA, Australia, India, and Brazil. Processed through acid
                leaching, separation, and reduction into 99.9% pure cerium.
              </p>
              <p className="text-xs text-gray-500 mt-3 font-mono">Ore → Acid Leaching → Separation → Reduction → 99.9% Pure Cerium</p>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
              <div
                className="rounded-xl bg-gradient-to-br from-orange-800/60 to-slate-900 min-h-[160px] mb-4"
                role="img"
                aria-label="Cerium oxide powder used in catalytic converters and glass polishing compounds"
              />
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Why Nothing Else Works</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Unique ability to switch between +3 and +4 oxidation states makes it a powerful catalyst. Highly reactive,
                tarnishes in air, reacts with water, self-ignites when scratched. This dual oxidation state is what makes cerium
                irreplaceable in emissions control and chemical catalysis.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
              <div
                className="rounded-xl bg-gradient-to-br from-blue-900/50 to-slate-900 min-h-[160px] mb-4"
                role="img"
                aria-label="Industrial applications of cerium including catalytic converters, polished glass, and LED lighting components"
              />
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Where It Goes</h3>
              <p className="text-sm text-gray-600 leading-relaxed mb-4">
                Catalytic converters, glass polishing, petroleum refining, LED lighting, fuel cells, alloys, self-cleaning ovens,
                ceramic coatings.
              </p>
              <p className="text-sm font-semibold text-orange-800 bg-orange-50 rounded-lg px-3 py-2">
                $886M global market by 2030 (from $692M in 2024)
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FOLD 4: Automotive & industrial demand */}
      <section className="px-4 sm:px-6 md:px-8 lg:px-12 py-20 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto">
          <p className="text-xs uppercase tracking-widest text-gray-400 font-semibold mb-3">THE CATALYST</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-gray-900 leading-tight mb-6">
            The Clean Emissions Revolution Runs on Cerium, Not Just Regulation
          </h2>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-4xl mb-12">
            We believe most people misunderstand what makes clean air possible. They see emission standards. We see cerium. Every
            catalytic converter manufactured, every precision lens polished, every diesel fuel refined requires cerium oxide. The
            element&apos;s unique catalytic and abrasive properties make it irreplaceable. And supply cannot keep up with demand.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <div className="bg-gray-50 rounded-2xl p-6 md:p-8 border border-gray-100">
              <h3 className="text-xl font-medium text-gray-900 mb-3">Catalytic Converters (45% of Demand)</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Automotive catalytic converters consume 78,000 tonnes of cerium oxide annually. Cerium enables oxygen storage and
                release, improving catalyst efficiency and durability. With 85 million vehicles produced annually and tightening
                emissions standards (Euro 7, China VI), cerium loading per vehicle is increasing by 15-20% despite EV growth.
              </p>
            </div>
            <div className="bg-gray-50 rounded-2xl p-6 md:p-8 border border-gray-100">
              <h3 className="text-xl font-medium text-gray-900 mb-3">Glass Polishing Compounds</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Cerium oxide is the only material capable of achieving optical-grade surface finishes on glass and precision optics.
                The glass polishing sector consumes 32,000 tonnes annually for smartphone screens, camera lenses, LCD panels, solar
                panels, mirrors, and precision optical components. No substitute matches cerium&apos;s polishing efficiency and surface
                quality.
              </p>
            </div>
            <div className="bg-gray-50 rounded-2xl p-6 md:p-8 border border-gray-100">
              <h3 className="text-xl font-medium text-gray-900 mb-3">Diesel Fuel Additives</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Cerium-based fuel additives reduce particulate matter emissions from diesel engines by 30-50%, enabling compliance
                with stringent emissions regulations. The transportation and heavy equipment sectors consume 15,000 tonnes
                annually, with demand growing as diesel emission standards tighten globally.
              </p>
            </div>
            <div className="bg-gray-50 rounded-2xl p-6 md:p-8 border border-gray-100">
              <h3 className="text-xl font-medium text-gray-900 mb-3">Self-Cleaning Ovens &amp; Advanced Ceramics</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Cerium oxide catalyzes the breakdown of organic compounds at elevated temperatures, enabling self-cleaning oven
                technology and ceramic coatings. Industrial and consumer applications consume 18,000 tonnes annually, with demand
                accelerating in advanced ceramics and industrial cleaning systems.
              </p>
            </div>
          </div>

          <div className="bg-gray-50 rounded-2xl p-6 md:p-8 border border-gray-200">
            <h3 className="text-xl font-medium text-gray-900 mb-2">The Gap That Can&apos;t Be Closed</h3>
            <p className="text-sm text-gray-500 mb-6">
              Bar chart showing global cerium demand rising from 125,000 tonnes in 2025 to 175,000 tonnes by 2030, with supply
              reaching approximately 110,000 tonnes, creating a 65,000 tonne gap.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-6">
              {[
                { year: '2025', val: '125.0', note: 'Demand (kt)' },
                { year: '2028', val: '148.0', note: 'Demand (kt)' },
                { year: '2030', val: '175.0', note: 'Demand (kt)' },
                { year: '2035', val: '220.0', note: 'Roskill' },
                { year: '2030 Supply', val: '~110.0', note: 'Gap: 65,000+ tonnes' },
              ].map((d, i) => (
                <div
                  key={i}
                  className={`text-center p-4 rounded-xl ${i === 4 ? 'bg-red-50 border border-red-100' : i === 3 ? 'bg-orange-50' : 'bg-white border border-gray-100'}`}
                >
                  <p className={`text-sm mb-2 ${i === 4 ? 'text-red-800 font-medium' : 'text-gray-500'}`}>{d.year}</p>
                  <p className="text-sm font-semibold text-gray-900">{d.val} kt</p>
                  <p className="text-xs text-gray-500 mt-1">{d.note}</p>
                </div>
              ))}
            </div>
            <p className="text-xs text-gray-400">
              Sources: Roskill, Critical Minerals Institute, USGS, International Rare Earth Association.
            </p>
          </div>
        </div>
      </section>

      {/* FOLD 5: Two products */}
      <section id="products" className="px-4 sm:px-6 md:px-8 lg:px-12 py-20 md:py-32 bg-gray-50 scroll-mt-24">
        <div className="max-w-7xl mx-auto">
          <p className="text-xs uppercase tracking-widest text-gray-400 font-semibold mb-3 text-center">TWO PRODUCTS</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-gray-900 leading-tight mb-6 text-center">
            Two Ways to Own Tokenized Cerium
          </h2>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto text-center mb-14">
            Everything we believe about access, transparency, and the future of cerium comes to life in two distinct products. One
            for cerium that&apos;s already refined and vaulted. One for cerium still in the ground. Both backed by physical assets.
            Both settable in stablecoins. Both built for a world that can&apos;t afford to wait.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
            <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm">
              <span className="inline-block text-xs font-bold tracking-wider text-orange-800 bg-orange-100 px-3 py-1 rounded-full mb-4">
                ASSET-BACKED TOKEN
              </span>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                <Link href="/products" className="hover:text-orange-700 underline-offset-2 hover:underline">
                  1:1 Cerium Oxide Token
                </Link>
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed mb-6">
                This is cerium you can hold digitally and physically. Every token is backed 1:1 by refined cerium oxide (CeO₂)
                stored in insured, audited vaults. High-purity grade (99.5%+ CeO₂). Ready for automotive catalyst production, glass
                polishing applications, and industrial use. Always redeemable for physical cerium on demand. No synthetic exposure.
                No paper promises. Real cerium.
              </p>
              <ul className="text-sm text-gray-700 space-y-2 list-disc pl-5">
                <li>Backed 1:1 by refined cerium oxide (99.5%+ purity grade)</li>
                <li>Always redeemable for physical cerium delivery on demand</li>
                <li>Stored in insured, independently audited vault and warehouse facilities</li>
                <li>On-chain proof-of-reserves with real-time oracle feeds</li>
                <li>Fractional ownership, from $1, tradeable 24/7 with instant stablecoin settlement</li>
                <li>Ready for industrial end-use: catalytic converters, glass polishing, diesel additives, ceramic coatings</li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm">
              <span className="inline-block text-xs font-bold tracking-wider text-slate-800 bg-slate-200 px-3 py-1 rounded-full mb-4">
                FUTURE DELIVERY CONTRACT
              </span>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                <Link href="/products" className="hover:text-orange-700 underline-offset-2 hover:underline">
                  In-Ground Cerium
                </Link>
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed mb-6">
                This is cerium before the world prices it in. Tokenized future delivery contracts for physical cerium still at
                certified rare earth mining operations giving you access to pre-production economics and the built-in scarcity
                premium that comes with a structural deficit. For those who think in years, not quarters.
              </p>
              <ul className="text-sm text-gray-700 space-y-2 list-disc pl-5">
                <li>Backed by proven and probable reserves at partner rare earth mining sites</li>
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
                Near-term cerium delivery contracts tied to active rare earth mining operations approaching production. For
                automotive manufacturers, glass manufacturers, near-term portfolio allocation, and buyers who need delivery certainty
                with transparent reserve verification.
              </p>
            </div>
            <div className="bg-slate-100 border border-slate-200 rounded-2xl p-6 md:p-8">
              <p className="text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">LONG-TERM DELIVERY</p>
              <p className="text-lg font-semibold text-gray-900 mb-3">1–6 Years</p>
              <p className="text-sm text-gray-600 leading-relaxed">
                Strategic cerium positions backed by proven reserves at earlier-stage rare earth mining operations. Built for
                sovereign wealth funds, automotive OEMs, glass and optics manufacturers, and forward-looking investors positioning
                for the multi-year cerium supply deficit.
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
            Most rare earth access runs through a single country&apos;s processing monopoly or through layers of traders and brokers.
            We don&apos;t. Toto Finance works directly with{' '}
            <Link href="/about" className="text-orange-800 font-medium underline underline-offset-2 hover:text-orange-600">
              rare earth mining companies and processing facilities
            </Link>
            , securing cerium at the producer and separation facility level because we believe the supply chain should have as few
            links as possible.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            {[
              {
                title: 'China',
                text: 'China produces 88% of global cerium from bastnäsite deposits in Bayan Obo (Inner Mongolia) and ionic clay deposits in southern provinces. Despite cerium representing 50% of rare earth ore content, Chinese supply is constrained by domestic demand, production quotas, and export restrictions.',
              },
              {
                title: 'North America (USA & Canada)',
                text: 'Mountain Pass (California), Bear Lodge (Wyoming), and Nechalacho (Northwest Territories) contain the highest cerium concentrations of any rare earth deposit globally. Critical mineral designation has prioritized domestic cerium processing for automotive supply chains.',
              },
              {
                title: 'Australia',
                text: 'Rare earth deposits in Western Australia and Northern Territory produce cerium-rich concentrates. Lynas Rare Earths operates separation facilities producing cerium oxide for automotive and glass manufacturing applications.',
              },
              {
                title: 'Southeast Asia & Vietnam',
                text: "Vietnam's ionic clay deposits and Malaysia's Lynas processing facilities produce cerium oxide from regional and imported concentrates. Southeast Asian operations provide alternative supply channels outside Chinese-dominated production.",
              },
              {
                title: 'Brazil & India',
                text: "Brazil's monazite deposits and India's coastal heavy mineral sands contain high cerium concentrations. New separation facilities are being developed to extract cerium for regional automotive and glass manufacturing.",
              },
              {
                title: 'Exploration & Preparation',
                text: 'New rare earth fields in preparation and exploration phases across Africa, Scandinavia, and Greenland, offering In-Ground Cerium positions at pre-production economics before reserves reach market.',
              },
            ].map((c) => (
              <div key={c.title} className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{c.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{c.text}</p>
              </div>
            ))}
          </div>

          <div className="bg-orange-950 text-orange-50 rounded-2xl p-6 md:p-8 border border-orange-800">
            <p className="text-sm md:text-base leading-relaxed">
              <strong>Secured at source.</strong> We eliminate commodity brokers and trading intermediaries by working directly with
              rare earth mining companies and separation facilities. Better pricing. Verified provenance. A transparent chain of
              custody from{' '}
              <Link href="/how-tokenization-works" className="underline underline-offset-2 hover:text-white">
                mine to token
              </Link>
              . Because we believe the fewer hands cerium passes through, the fairer and more transparent the market becomes.
            </p>
          </div>
        </div>
      </section>

      {/* FOLD 7: Who buys */}
      <section className="px-4 sm:px-6 md:px-8 lg:px-12 py-20 md:py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <p className="text-xs uppercase tracking-widest text-gray-400 font-semibold mb-3 text-center">INVESTORS</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-gray-900 leading-tight mb-6 text-center">
            Who Buys Tokenized Cerium
          </h2>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto text-center mb-14">
            We believe access to essential rare earth elements shouldn&apos;t depend on which country you&apos;re in or how big your
            purchase order is. Whether you&apos;re an automotive manufacturer securing catalyst supply, a family office diversifying
            into critical minerals, or a DeFi protocol looking for real-world collateral, Toto Finance was built for you.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 border border-gray-200">
              <span className="text-xs font-bold tracking-widest text-orange-800">BUILDERS</span>
              <h3 className="text-xl font-semibold text-gray-900 mt-3 mb-4">Companies That Need Physical Cerium</h3>
              <p className="text-sm text-gray-600 leading-relaxed mb-4">
                They don&apos;t buy cerium to trade it. They buy it to build with it. Tokenized cerium gives them{' '}
                <Link href="/products" className="text-orange-800 font-medium underline underline-offset-2">
                  guaranteed supply
                </Link>
                , streamlined procurement, and physical redemption without the delays and middlemen of traditional rare earth markets.
              </p>
              <p className="text-xs text-gray-500 leading-relaxed">
                Automotive manufacturers and catalytic converter producers, glass polishing compound manufacturers, smartphone and
                display manufacturers, optical glass and lens manufacturers, diesel fuel additive producers, ceramic and advanced
                materials manufacturers, self-cleaning oven manufacturers, solar panel manufacturers, precision optics
                manufacturers, mirror and window glass manufacturers.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 border border-gray-200">
              <span className="text-xs font-bold tracking-widest text-blue-800">ALLOCATORS</span>
              <h3 className="text-xl font-semibold text-gray-900 mt-3 mb-4">Investors Entering a Market That Was Never Open to Them</h3>
              <p className="text-sm text-gray-600 leading-relaxed mb-4">
                Rare earth investing has historically been limited to two options: buy mining stocks with operational risk, or
                negotiate directly with Chinese processors at tonnage minimums no mid-size firm can meet. Neither works for most
                allocators. Toto Finance opens a third path — direct exposure to physical cerium at competitive pricing, with
                fractional ownership, no minimum tonnage, no warehouse logistics, and no counterparty risk from broker chains.
                Institutional-grade rare earth access, finally available at any scale.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 border border-gray-200">
              <span className="text-xs font-bold tracking-widest text-purple-800">PIONEERS</span>
              <h3 className="text-xl font-semibold text-gray-900 mt-3 mb-4">Critical Minerals Meet On-Chain Infrastructure</h3>
              <p className="text-sm text-gray-600 leading-relaxed mb-4">
                Most real-world asset tokenization targets gold or real estate. Cerium represents something different — a critical
                mineral with concentrated supply, accelerating demand, and zero existing on-chain exposure. For blockchain-native
                organizations and investors, tokenized cerium offers genuine portfolio diversification into a rare earth asset class
                that traditional crypto markets cannot access.
              </p>
              <p className="text-xs text-gray-500 leading-relaxed">
                Crypto hedge funds seeking uncorrelated commodity exposure, protocol treasuries diversifying reserves into critical
                minerals, DeFi protocols building real-world collateral pools, blockchain infrastructure foundations, DAOs pursuing
                strategic resource positioning.
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
            Instant Settlement for Tokenized Cerium. No Banks.
          </h2>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-4xl mb-12">
            Rare earth trading was never designed for transparency. It was designed for control — export quotas set by dominant
            producers, opaque pricing through broker networks, and weeks of settlement through correspondent banks that extract fees at
            every handoff. For a material that 85 million vehicles per year depend on, that system is indefensible. So we replaced it
            entirely.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="bg-gray-50 rounded-2xl p-6 md:p-8 border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-1">The Old Way</h3>
              <p className="text-sm text-gray-500 mb-6">8+ Intermediaries. Days to Settle. Fees at Every Step.</p>
              <div className="space-y-3">
                {[
                  'Mining Company / Producer',
                  'Processing Facility / Separation Plant',
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
                Think of it like Amazon for cerium. Just as e-commerce platforms match buyers and sellers directly for physical
                goods, Toto Finance uses blockchain technology to connect cerium producers with buyers, eliminating banks, clearing
                houses, and settlement agents entirely.
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
                  'The most widely adopted dollar-backed stablecoin for institutional use. Full reserve transparency, monthly attestations, and broad DeFi integration across all major chains.',
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
            DeFi Trading, Yield and Loans for Tokenized Cerium
          </h2>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-4xl mb-12">
            We believe owning an asset should mean more than holding it. Once tokenized cerium is purchased on Toto Finance, it
            enters an open ecosystem. Hold it. Trade it. Earn from it. Borrow against it. All on-chain. All programmable. All without
            asking permission.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            <div className="bg-white rounded-2xl p-6 md:p-8 border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Global Secondary Trading</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Rare earths have never had liquid secondary markets. Tokenized cerium changes that. Trade 24/7 on decentralized
                exchanges worldwide, transfer across chains, and access a global buyer pool that traditional OTC rare earth markets
                cannot offer. No broker gatekeepers. No trading windows. Liquidity where there was none.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-6 md:p-8 border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">On-Chain Yield</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Cerium sitting in a vault earns nothing. Cerium deployed on-chain earns yield. Lend your cerium tokens to borrowers
                who pay interest for leveraged or short exposure to rare earth markets. Passive income from a critical mineral,
                managed entirely by smart contracts.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-6 md:p-8 border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Collateral Loans</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Rare earth holders have never been able to borrow against their positions without selling. Now they can. Use
                tokenized cerium as{' '}
                <Link href="/products" className="text-orange-800 font-medium underline underline-offset-2">
                  collateral for on-chain loans
                </Link>
                , receive stablecoins, and retain full upside exposure to cerium&apos;s price trajectory. No credit applications. No
                bank intermediaries. Protocol-level execution.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-6 md:p-8 border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Programmable Finance</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                What happens when a critical mineral meets programmable infrastructure? Liquidation thresholds adjust automatically.
                Interest accrues in real time. Margin requirements enforce themselves. Cerium collateral loans are not just a
                financial product — they are an entirely new asset class where physical scarcity meets algorithmic precision.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 md:p-8 border border-gray-200">
            <h3 className="text-xl font-medium text-gray-900 mb-6 text-center">
              From Rare Earth Mine to Global DeFi Market: The Cerium Token Journey
            </h3>
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              {[
                'Minted: Cerium oxide verified, vaulted, and tokenized on Toto Finance',
                'Purchased: Acquired with USDC, USDT, or USAT stablecoins',
                'Held or Transferred: Stored in wallet, traded peer-to-peer, or moved across chains',
                'Put to Work: Deployed for yield generation, collateral lending, or hedging strategies',
                'Redeemed: Converted back to physical cerium oxide (CeO₂) for industrial delivery',
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
            Tokenized Cerium vs Traditional Rare Earth Investment
          </h2>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-4xl mb-12">
            We built Toto Finance because every existing way to access cerium is broken in some fundamental way. Here&apos;s how we
            compare.
          </p>

          <div className="overflow-x-auto rounded-2xl border border-gray-200" aria-label="Comparison table of tokenized cerium on Toto Finance versus rare earth ETFs, physical cerium ownership, and mining stocks across 10 features including settlement speed, minimum investment, and DeFi access.">
            <table className="w-full text-sm text-left min-w-[640px]">
              <thead>
                <tr className="bg-gray-900 text-white">
                  <th className="px-4 md:px-6 py-4 font-medium">Feature</th>
                  <th className="px-4 md:px-6 py-4 font-medium">Rare Earth ETFs</th>
                  <th className="px-4 md:px-6 py-4 font-medium bg-white/10">Toto Finance</th>
                  <th className="px-4 md:px-6 py-4 font-medium">Physical Cerium</th>
                  <th className="px-4 md:px-6 py-4 font-medium">Mining Stocks</th>
                </tr>
              </thead>
              <tbody className="bg-white">
                {[
                  ['Trading Hours', 'Market hours only', '24/7/365', 'OTC / Dealer', 'Market hours only'],
                  ['Settlement', 'T+2', 'T+0 (Instant)', 'Days to weeks', 'T+2'],
                  ['Settlement Currency', 'Fiat (via broker)', 'USDC, USDT, USAT', 'Wire transfer', 'Fiat (via broker)'],
                  ['Physical Backing', 'Synthetic / Basket', '1:1 Cerium Oxide', 'Direct ownership', 'No (equity)'],
                  ['Min. Investment', '1 share (~$50+)', 'Fractional (from $1)', '$10,000+', '1 share (~$10+)'],
                  ['Physical Redemption', 'No', 'Yes', 'Yes', 'No'],
                  ['On-Chain Transparency', 'No', 'Yes', 'No', 'No'],
                  ['DeFi Yield / Loans', 'No', 'Yes', 'No', 'No'],
                  ['Storage Costs', 'Expense ratio', 'None', 'Vault fees', 'None'],
                  ['Intermediaries', 'Broker + Clearing', 'None (P2P)', 'Multiple', 'Broker'],
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
                b: 'Every cerium token maps directly to physical cerium oxide in insured custody. Request delivery and receive high-purity CeO₂ (99.5%+) ready for catalytic converter production, glass polishing, or industrial processing. Tokenization without redemption is just speculation. We built for real industrial utility.',
              },
              {
                t: 'Transparent Reserves',
                b: "Rare earth markets are notoriously opaque. Ours isn't. On-chain proof-of-reserves, real-time oracle price feeds, and independent third-party audits make every cerium token's backing publicly verifiable at any moment. Transparency isn't a feature we added — it's the foundation we built on.",
              },
              {
                t: 'Instant Settlement',
                b: 'T+0 settlement with USDC, USDT, and USAT. In traditional rare earth trading, settlement can take weeks through broker networks and correspondent banks. On Toto Finance, the transaction is final the moment it\'s confirmed on-chain.',
              },
              {
                t: 'Programmable Compliance',
                b: 'Rare earth trade compliance is complex — sanctions screening, export controls, end-use verification. Our smart contracts embed KYC/AML requirements, jurisdiction-based transfer restrictions, and permission controls directly into the token. Compliance travels with the asset, not as paperwork attached to it.',
              },
              {
                t: 'DeFi Yield & Loans',
                b: 'Deploy cerium into lending protocols, collateralize positions for stablecoin loans, or construct hedges through smart contract derivatives. Critical minerals have never had programmable financial infrastructure. Now they do.',
              },
              {
                t: 'Multi-Chain Access',
                b: 'Tokenized cerium moves across Ethereum, Polygon, Cardano, Solana, and XRP Ledger. Whether your strategy lives on an EVM chain or an alternative L1, cerium meets you where your infrastructure already operates.',
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
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-gray-900 leading-tight mb-6">Tokenized Cerium FAQ</h2>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-12">
            Straight answers about tokenized cerium, In-Ground Cerium, instant settlement, and DeFi secondary markets.
          </p>
          <CeriumFAQ faqs={faqData} />
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
            We believe the element that keeps the air clean and every screen polished should be accessible to everyone, not locked
            behind processing monopolies, export quotas, and industrial-scale minimums. The world needs 175,000 tonnes of cerium by
            2030. Supply will fall short by over 65,000 tonnes. The deficit is here. The infrastructure is being built. The question
            isn&apos;t whether cerium matters. It&apos;s whether you&apos;ll have access to it.
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
