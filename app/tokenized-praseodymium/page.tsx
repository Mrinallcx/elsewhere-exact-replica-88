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
const PraseodymiumTickerBar = dynamicImport(
  () => import('../components/client/PraseodymiumTickerBar').then((mod) => ({ default: mod.PraseodymiumTickerBar }))
);
const PraseodymiumFAQ = dynamicImport(
  () => import('../components/client/SilverFAQ').then((mod) => ({ default: mod.SilverFAQ }))
);

const PAGE_URL = 'https://totofinance.co/tokenized-praseodymium';
const PAGE_TITLE = 'Tokenized Praseodymium | Digital Rare Earth Backed by Physical Assets | Toto Finance';
const PAGE_DESCRIPTION =
  'Every permanent magnet in every EV motor contains praseodymium. Toto Finance brings this critical rare earth on-chain from 1:1 redeemable oxide tokens to In-Ground future delivery contracts. The other half of the NdPr alloy the world cannot electrify without. Instant stablecoin settlement. DeFi secondary markets.';

const breadcrumbItems = [
  { name: 'Home', item: 'https://totofinance.co' },
  { name: 'Products', item: 'https://totofinance.co/products' },
  { name: 'Tokenized Praseodymium', item: PAGE_URL },
];

const faqData = [
  {
    question: 'What is tokenized praseodymium?',
    answer:
      'A blockchain-based digital asset backed 1:1 by refined praseodymium oxide (Pr₆O₁₁) in insured, audited vaults. High-purity grade (99.5%+ Pr₆O₁₁), ready for NdPr magnet alloy production, aerospace alloy fabrication, and specialty applications. Redeemable for physical praseodymium on demand. Toto Finance is building the infrastructure to bring praseodymium on-chain as an independent asset with instant stablecoin settlement and DeFi secondary markets.',
  },
  {
    question: 'What is In-Ground Praseodymium?',
    answer:
      'A tokenized future delivery contract for praseodymium still contained in rare earth deposits at certified mining operations. Short-term (1 to 12 months) for operations with active NdPr separation capacity, long-term (1 to 6 years) for earlier-stage deposits. Built for magnet manufacturers, automakers, wind developers, sovereign funds, and institutional investors positioning for the structural praseodymium deficit that mirrors the neodymium shortage.',
  },
  {
    question: 'Where does the praseodymium come from?',
    answer:
      'Directly from rare earth mining companies and NdPr alloy processing facilities across China (90% of production, 98% of NdPr magnet manufacturing), North America (Mountain Pass and expanding US processing under Defense Production Act funding), Australia (Lynas Rare Earths operations), Southeast Asia and Myanmar (ionic clay and processing operations), and Africa (emerging NdPr-bearing deposits in Burundi, Tanzania, and South Africa). No middlemen. No intermediary traders. More on partnerships: https://totofinance.co/about.',
  },
  {
    question: 'Who buys tokenized praseodymium?',
    answer:
      'Three groups: (1) Magnet and motor manufacturers, including NdPr permanent magnet companies, EV motor producers, wind turbine generator manufacturers, robotics firms, aerospace alloy producers, defense contractors, hard disk drive manufacturers. (2) Magnet supply chain investors, including funds and allocators seeking direct exposure to the overlooked half of the NdPr magnet alloy, with the same demand drivers as neodymium but less market recognition. (3) On-chain participants, including crypto funds, protocol treasuries, and DeFi protocols seeking real-world collateral with asymmetric recognition dynamics relative to criticality.',
  },
  {
    question: 'How does instant settlement work?',
    answer:
      'T+0 settlement using USDC, USDT, or USAT. Traditional praseodymium procurement does not exist independently; buyers procure combined NdPr oxide or alloy through Chinese-dominated channels with settlement measured in weeks. Toto Finance creates the first independent settlement mechanism for praseodymium, connecting sources with buyers directly on-chain.',
  },
  {
    question: 'Can I trade tokenized praseodymium on DeFi platforms?',
    answer:
      'Yes. After acquisition, trade on decentralized exchanges globally, generate yield by lending to counterparties, or use praseodymium tokens as collateral for stablecoin loans. Praseodymium has never existed as an independently tradeable asset. Tokenization creates both the asset class and its market simultaneously.',
  },
  {
    question: 'Why is praseodymium essential to NdPr permanent magnets?',
    answer:
      'Praseodymium provides the thermal stability, coercivity, and corrosion resistance that NdPr magnets require to operate at 150°C to 200°C inside EV motors and industrial equipment. Without praseodymium, NdFeB magnets lose magnetic strength at exactly the operating temperatures where they need to perform. Every EV motor uses 2 to 4 kilograms of NdPr alloy. Every offshore wind turbine uses up to 600 kilograms. The magnet industry does not use pure neodymium. It uses NdPr alloy, and praseodymium is the element that makes the alloy survive real-world conditions.',
  },
  {
    question: 'What is the praseodymium price outlook?',
    answer:
      'Adamas Intelligence forecasts $85,000/mt in 2026. Roskill projects exceeding $90,000/mt by 2027 as the parallel NdPr supply deficit widens. The deficit is expected to intensify through 2030 as EV production scales to 40 million units annually, offshore wind deployment accelerates to 380 GW, and industrial automation adoption drives NdPr magnet consumption from every direction simultaneously.',
  },
  {
    question: 'How do I get early access?',
    answer:
      'Visit https://totofinance.co/. Magnet manufacturers, EV companies, wind developers, aerospace contractors, institutional investors, mining partners, and industrial buyers can reach out directly for partnership and early allocation discussions.',
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
        'Tokenized commodity platform offering 1:1 asset-backed praseodymium oxide tokens and In-Ground Praseodymium future delivery contracts with instant stablecoin settlement.',
    },
    {
      '@type': 'Product',
      name: '1:1 Praseodymium Oxide Token',
      description:
        'Digital asset backed 1:1 by refined praseodymium oxide (Pr₆O₁₁) in insured custody, redeemable for physical delivery. Category: Tokenized Commodity.',
      category: 'Tokenized Commodity',
      brand: { '@type': 'Brand', name: 'Toto Finance' },
      url: PAGE_URL,
    },
    {
      '@type': 'Product',
      name: 'In-Ground Praseodymium',
      description:
        'Tokenized future delivery contract for praseodymium in rare earth deposits at certified mining operations. Category: Commodity Future Delivery Contract.',
      category: 'Commodity Future Delivery Contract',
      brand: { '@type': 'Brand', name: 'Toto Finance' },
      url: PAGE_URL,
    },
  ],
};

export default function TokenizedPraseodymiumPage() {
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
      <section className="relative bg-gradient-to-br from-lime-900 via-lime-800 to-gray-900 text-white px-4 sm:px-6 md:px-8 lg:px-12 pt-28 md:pt-36 pb-16 md:pb-24 overflow-hidden">
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
            backgroundSize: '40px 40px',
          }}
        />
        <div className="relative z-10 max-w-7xl mx-auto text-left">
          <h1 className="text-sm md:text-base font-semibold tracking-[0.2em] uppercase text-lime-200/90 mb-4">
            Tokenized Praseodymium by Toto Finance
          </h1>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light leading-tight mb-8">
            No Permanent Magnet Works Without Praseodymium. Now Anyone Can Own It.
          </h2>
          <p className="text-base md:text-lg text-gray-200 leading-relaxed mb-10 max-w-3xl text-left">
            The magnet industry calls it NdPr for a reason. Every high-performance permanent magnet contains not just neodymium but praseodymium,
            the element that improves thermal stability, increases coercivity, and enables magnets to maintain performance at the operating
            temperatures inside EV motors and wind turbine generators. Without praseodymium, NdFeB magnets lose strength at the exact temperatures
            where they need to perform. Every EV motor, every direct-drive wind turbine, every industrial robot running on permanent magnets depends
            on the neodymium-praseodymium alloy, and the world faces an 11,500-tonne praseodymium shortfall by 2030. China controls 90% of
            production and 98% of NdPr magnet manufacturing. Yet access to praseodymium as an individual asset has never existed outside industrial
            rare earth procurement.{' '}
            <Link href="/" className="text-white underline underline-offset-2 hover:text-lime-200">
              Toto Finance
            </Link>{' '}
            is changing that by bringing the overlooked half of every permanent magnet on-chain for the first time.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-start">
            <Link
              href="/products"
              className="inline-flex items-center justify-center bg-white text-gray-900 px-6 py-3 rounded-full text-sm font-semibold hover:bg-gray-100 transition-all duration-300"
            >
              See How We&apos;re Doing It
            </Link>
            <a
              href="#crisis"
              className="inline-flex items-center justify-center border border-white/30 text-white px-6 py-3 rounded-full text-sm font-semibold hover:bg-white/10 transition-all duration-300"
            >
              Why Praseodymium Matters
            </a>
          </div>
        </div>
      </section>

      <PraseodymiumTickerBar />

      {/* FOLD 2: Crisis */}
      <section id="crisis" className="scroll-mt-24 px-4 sm:px-6 md:px-8 lg:px-12 py-20 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto">
          <p className="text-xs uppercase tracking-widest text-gray-400 font-semibold mb-3">THE WHY</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-gray-900 leading-tight mb-6">
            Every Magnet Has Two Halves. Praseodymium Is the One Nobody Talks About.
          </h2>
          <div className="text-base md:text-lg text-gray-600 leading-relaxed max-w-4xl mb-12 space-y-4">
            <p>
              We chose praseodymium because it represents the most undervalued dependency in the electrification supply chain. Not undervalued
              because the market does not need it. Undervalued because it lives in the shadow of its more famous partner.
            </p>
            <p>
              The magnet industry does not use pure neodymium. It uses neodymium-praseodymium alloy, because praseodymium is the element that gives
              NdPr magnets the thermal stability required to operate at 150°C to 200°C inside EV traction motors, the coercivity that resists
              demagnetization under mechanical stress in wind turbine generators, and the corrosion resistance that extends magnet lifespan in
              industrial environments. Remove praseodymium from the alloy and magnets fail at exactly the operating conditions they were designed
              for. Every conversation about the neodymium shortage is simultaneously a conversation about the praseodymium shortage, because the two
              elements are co-mined, co-processed, and co-consumed in every magnet produced. China controls 90% of global praseodymium production
              and 98% of NdPr magnet manufacturing. The same geopolitical risk, the same supply concentration, the same structural deficit, but with
              far less public attention.
            </p>
            <p className="font-medium text-gray-900">That is why we exist.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gray-50 rounded-2xl p-6 md:p-8 border border-gray-100">
              <p className="text-4xl md:text-5xl font-light text-gray-900 mb-3">8,200 tonnes</p>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">The Deficit Hiding Behind Neodymium</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Adamas Intelligence forecasts an 8,200-tonne praseodymium deficit in 2025, with the gap widening through 2030. Praseodymium is
                co-mined and co-processed with neodymium, meaning its supply is locked to the same constrained rare earth operations. China
                controls 90% of production, and export restrictions are reducing international availability at the same pace as neodymium, but
                with significantly less industry attention or strategic response.
              </p>
            </div>
            <div className="bg-gray-50 rounded-2xl p-6 md:p-8 border border-gray-100">
              <p className="text-4xl md:text-5xl font-light text-gray-900 mb-3">98%</p>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">One Country Makes Nearly Every NdPr Magnet on Earth</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                98% of global NdPr permanent magnet manufacturing takes place in China. Praseodymium is not just mined in China. It is alloyed,
                sintered, magnetized, and shipped as finished magnets from Chinese factories. Every EV manufacturer, every wind developer, every
                robotics company depends on Chinese NdPr magnet production that blends praseodymium into every unit. Disruption at any point in this
                chain affects every magnet-dependent industry simultaneously.
              </p>
            </div>
            <div className="bg-gray-50 rounded-2xl p-6 md:p-8 border border-gray-100">
              <p className="text-4xl md:text-5xl font-light text-gray-900 mb-3">11,500 tonnes</p>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">A Gap That Grows with Every Magnet Produced</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Global praseodymium demand is projected to reach 32,000 tonnes per year by 2030, while supply from existing and planned rare earth
                operations will deliver only 20,500 tonnes. The 11,500-tonne gap represents a 36% shortfall. Every EV factory commissioned, every
                offshore wind farm approved, every robotics production line scaled widens it further.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FOLD 3: THE ELEMENT */}
      <section className="px-4 sm:px-6 md:px-8 lg:px-12 py-20 md:py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <p className="text-xs uppercase tracking-widest text-gray-400 font-semibold mb-3 text-center">THE ELEMENT</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-gray-900 leading-tight mb-4 text-center">
            Understanding Why Praseodymium Cannot Be Removed from the Magnet Equation
          </h2>
          <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto text-center mb-14">
            The rare earth element that gives permanent magnets their thermal stability. Essential for the NdPr alloy inside every EV motor and
            wind turbine generator operating at real-world temperatures.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
              <div
                className="rounded-xl bg-gradient-to-br from-lime-900 to-slate-950 text-white p-6 mb-4 font-mono text-sm"
                role="img"
                aria-label="Praseodymium element card showing Pr symbol, atomic number 59, and NdPr permanent magnet alloy classification"
              >
                <p className="text-3xl font-light mb-1">Pr</p>
                <ul className="space-y-1 text-lime-100/90">
                  <li>Atomic Number: 59</li>
                  <li>Density: 6,770 kg/m³</li>
                  <li>Melting Point: 931°C</li>
                  <li>Alloy Role: Thermal Stability in NdPr</li>
                  <li>Classification: Permanent Magnet Alloy Partner</li>
                </ul>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">The Element</h3>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
              <div
                className="rounded-xl bg-gradient-to-br from-emerald-900/70 to-slate-900 min-h-[160px] mb-4"
                role="img"
                aria-label="Rare earth mining at bastnäsite and monazite deposits extracting praseodymium alongside neodymium"
              />
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Where It Comes From</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Extracted from bastnäsite, monazite, and ionic clay minerals in China, USA, Australia, Brazil, and Myanmar. Praseodymium is always
                co-mined with neodymium, comprising approximately 5% of rare earth concentrates (versus neodymium&apos;s 18%). Its supply is
                permanently linked to the same deposits, the same processing facilities, and the same geopolitical constraints that govern
                neodymium availability.
              </p>
              <p className="text-xs text-gray-500 mt-3 font-mono">
                Ore → Chemical Separation → NdPr Oxide Production → Metal Reduction → NdPr Alloy for Magnet Sintering
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
              <div
                className="rounded-xl bg-gradient-to-br from-lime-800/50 to-slate-900 min-h-[160px] mb-4"
                role="img"
                aria-label="Praseodymium contribution to NdPr magnet thermal stability and coercivity at elevated temperatures"
              />
              <h3 className="text-lg font-semibold text-gray-900 mb-3">The Thermal Stability That Magnets Cannot Work Without</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                When alloyed with neodymium, iron, and boron, praseodymium increases the Curie temperature and coercivity of NdPr permanent
                magnets, enabling them to maintain magnetic strength at the 150°C to 200°C operating temperatures inside EV motors and industrial
                equipment. Without praseodymium, magnets demagnetize under the thermal and mechanical stress of real-world operation. Praseodymium
                also forms high-strength alloys with magnesium for aircraft engine components and creates the intense yellow-green pigments used in
                ceramic and glass manufacturing.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
              <div
                className="rounded-xl bg-gradient-to-br from-slate-700 to-slate-900 min-h-[160px] mb-4"
                role="img"
                aria-label="Applications: NdPr magnets in EVs and wind, aerospace alloys, didymium glass"
              />
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Where It Goes</h3>
              <p className="text-sm text-gray-600 leading-relaxed mb-4">
                NdPr permanent magnet alloys (EV motors, wind generators, robotics), high-strength magnesium alloys for aerospace engine
                components, didymium glass for welding goggles and precision optics, yellow ceramic pigments, NiMH battery electrodes for hybrid
                vehicles, carbon arc lighting for film and studio production, catalytic converters.
              </p>
              <p className="text-sm font-semibold text-lime-900 bg-lime-50 rounded-lg px-3 py-2">
                $12B+ global NdPr magnet market (praseodymium is essential to every unit produced)
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
            The Electrification Wave Is Consuming Both Halves of the NdPr Alloy. Supply Covers Neither.
          </h2>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-4xl mb-12">
            There is no such thing as a neodymium magnet shortage without a praseodymium shortage. The two elements are co-mined, co-separated, and
            co-consumed in every NdPr permanent magnet produced anywhere on earth. Every EV motor commitment is a praseodymium commitment. Every
            wind turbine order is a praseodymium order. Every robotics deployment is a praseodymium deployment. The electrification wave does not
            consume one element at a time. It consumes the alloy. And praseodymium&apos;s share of that alloy faces its own structural deficit.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <div className="bg-gray-50 rounded-2xl p-6 md:p-8 border border-gray-100">
              <h3 className="text-xl font-medium text-gray-900 mb-3">
                Electric Vehicle Motors: 2 to 4 Kilograms of Praseodymium per Vehicle
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Every EV traction motor uses NdPr permanent magnets containing 2 to 4 kilograms of praseodymium alongside neodymium. With global EV
                sales projected to reach 40 million units by 2030, automotive demand for praseodymium will exceed 12,000 tonnes annually from EVs
                alone. Every major automaker&apos;s electrification roadmap is a praseodymium supply commitment, whether their procurement teams
                recognize it or not.
              </p>
            </div>
            <div className="bg-gray-50 rounded-2xl p-6 md:p-8 border border-gray-100">
              <h3 className="text-xl font-medium text-gray-900 mb-3">
                Offshore Wind Turbines: Up to 600 Kilograms of NdPr per Generator
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Direct-drive offshore wind turbines use NdPr permanent magnet generators containing up to 600 kilograms of alloy per unit.
                Praseodymium&apos;s contribution to the alloy&apos;s thermal stability is critical for offshore environments where maintenance access
                is limited and operational reliability determines project economics. Global offshore wind buildout to 380 GW by 2032 will consume over
                4,000 tonnes of praseodymium annually from wind energy alone.
              </p>
            </div>
            <div className="bg-gray-50 rounded-2xl p-6 md:p-8 border border-gray-100">
              <h3 className="text-xl font-medium text-gray-900 mb-3">Industrial Automation and Robotics: Precision Powered by NdPr</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Servo motors, robotic actuators, and factory automation systems rely on NdPr permanent magnets for the precision, responsiveness, and
                power density that manufacturing environments demand. Industrial automation demand for praseodymium is growing at 12% compound
                annual growth as manufacturers electrify production lines worldwide. Every humanoid robot, every automated warehouse, every CNC
                machine tool adds permanent praseodymium demand.
              </p>
            </div>
            <div className="bg-gray-50 rounded-2xl p-6 md:p-8 border border-gray-100">
              <h3 className="text-xl font-medium text-gray-900 mb-3">Aerospace Alloys and Specialty Applications: Beyond Magnets</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Praseodymium forms high-strength alloys with magnesium used in aircraft engine components operating at extreme temperatures.
                Didymium glass (a praseodymium-neodymium blend) is essential for welding goggles and precision optical filters. Yellow praseodymium
                pigments are used in ceramics and glass coloring. These specialty applications consume over 2,500 tonnes annually, adding demand
                pressure from sectors entirely outside the magnet supply chain.
              </p>
            </div>
          </div>

          <div className="bg-gray-50 rounded-2xl p-6 md:p-8 border border-gray-200">
            <h3 className="text-xl font-medium text-gray-900 mb-2">A Deficit That Mirrors the Electrification Timeline</h3>
            <p className="text-sm text-gray-500 mb-6">
              Bar chart showing global praseodymium demand rising from 18,200 tonnes in 2025 to 32,000 tonnes by 2030, with supply reaching
              approximately 20,500 tonnes, creating an 11,500 tonne annual deficit.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-6">
              {[
                { year: '2025', val: '18.2', note: 'Demand (kt)' },
                { year: '2028', val: '24.5', note: 'Demand (kt)' },
                { year: '2030', val: '32.0', note: 'Demand (kt)' },
                { year: '2035', val: '45.0', note: 'Adamas Intelligence' },
                { year: '2030 Supply', val: '~20.5', note: 'Gap: 11,500+ t' },
              ].map((d, i) => (
                <div
                  key={d.year}
                  className={`text-center p-4 rounded-xl ${i === 4 ? 'bg-red-50 border border-red-100' : i === 3 ? 'bg-lime-50' : 'bg-white border border-gray-100'}`}
                >
                  <p className={`text-sm mb-2 ${i === 4 ? 'text-red-800 font-medium' : 'text-gray-500'}`}>{d.year}</p>
                  <p className="text-sm font-semibold text-gray-900">{d.val} kt</p>
                  <p className="text-xs text-gray-500 mt-1">{d.note}</p>
                </div>
              ))}
            </div>
            <p className="text-xs text-gray-400">Sources: Adamas Intelligence, Roskill, IEA Critical Minerals Outlook.</p>
          </div>
        </div>
      </section>

      {/* FOLD 5: TWO PRODUCTS */}
      <section id="products" className="scroll-mt-24 px-4 sm:px-6 md:px-8 lg:px-12 py-20 md:py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <p className="text-xs uppercase tracking-widest text-gray-400 font-semibold mb-3 text-center">TWO PRODUCTS</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-gray-900 leading-tight mb-6 text-center">
            Two Ways to Own Tokenized Praseodymium
          </h2>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto text-center mb-14">
            Everything we believe about opening access to the overlooked half of the permanent magnet supply chain comes to life in two products.
            One for praseodymium that is already refined and vaulted. One for praseodymium still in rare earth deposits awaiting separation. Both
            backed by physical assets. Both settleable in stablecoins. Both built to give the magnet manufacturers, automakers, and investors who
            understand that every NdPr magnet requires both elements a way to secure the one that has been invisible until now.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
            <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm">
              <span className="inline-block text-xs font-bold tracking-wider text-lime-800 bg-lime-100 px-3 py-1 rounded-full mb-4">
                ASSET-BACKED TOKEN
              </span>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                <Link href="/products" className="hover:text-lime-700 underline-offset-2 hover:underline">
                  1:1 Praseodymium Oxide Token
                </Link>
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed mb-6">
                Digital ownership of physical praseodymium. Every token is backed 1:1 by refined praseodymium oxide (Pr₆O₁₁) in insured, audited
                vaults. High-purity grade (99.5%+ Pr₆O₁₁), ready for NdPr magnet alloy production, aerospace alloy fabrication, and specialty
                industrial applications. Redeemable for physical praseodymium on demand. Not a derivative. Not a tracker. The actual material.
              </p>
              <ul className="text-sm text-gray-700 space-y-2 list-disc pl-5">
                <li>Backed 1:1 by refined praseodymium oxide (99.5%+ purity grade)</li>
                <li>Always redeemable for physical praseodymium delivery on demand</li>
                <li>Stored in insured, independently audited vault and warehouse facilities</li>
                <li>On-chain proof-of-reserves with real-time oracle feeds</li>
                <li>Fractional ownership, from $1, tradeable 24/7 with instant stablecoin settlement</li>
                <li>Ready for industrial end-use: NdPr magnets, aerospace alloys, didymium glass, ceramic pigments, hybrid vehicle batteries</li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm">
              <span className="inline-block text-xs font-bold tracking-wider text-slate-800 bg-slate-200 px-3 py-1 rounded-full mb-4">
                FUTURE DELIVERY CONTRACT
              </span>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                <Link href="/products" className="hover:text-lime-700 underline-offset-2 hover:underline">
                  In-Ground Praseodymium
                </Link>
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed mb-6">
                Forward positions in praseodymium that has not been separated yet. Tokenized future delivery contracts backed by proven
                praseodymium content in rare earth deposits at certified mining operations. For organizations that understand that
                praseodymium&apos;s deficit mirrors neodymium&apos;s but receives a fraction of the strategic attention, creating a pricing asymmetry
                that rewards those who recognize the dependency before the market fully prices it in.
              </p>
              <ul className="text-sm text-gray-700 space-y-2 list-disc pl-5">
                <li>Backed by proven praseodymium content in rare earth reserves at partner mining sites</li>
                <li>Pre-production pricing reflecting co-mining constraints and NdPr alloy demand acceleration</li>
                <li>On-chain reserve tracking with geological data transparency</li>
                <li>Physical delivery or settlement at maturity</li>
                <li>Verified reserves with third-party geological audits</li>
                <li>Built for magnet manufacturers, automakers, wind developers, sovereign funds, and institutional allocators</li>
              </ul>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-lime-900/10 border border-lime-200 rounded-2xl p-6 md:p-8">
              <p className="text-xs font-bold text-lime-900 uppercase tracking-wider mb-2">SHORT-TERM DELIVERY</p>
              <p className="text-lg font-semibold text-gray-900 mb-3">1 to 12 Months</p>
              <p className="text-sm text-gray-600 leading-relaxed">
                Near-term praseodymium delivery contracts tied to active rare earth operations with NdPr separation capacity. For magnet
                manufacturers managing quarterly alloy production, EV motor suppliers coordinating with automaker build schedules, and commodity
                specialists trading near-term praseodymium pricing in a market where every neodymium supply disruption is simultaneously a
                praseodymium supply disruption.
              </p>
            </div>
            <div className="bg-slate-100 border border-slate-200 rounded-2xl p-6 md:p-8">
              <p className="text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">LONG-TERM DELIVERY</p>
              <p className="text-lg font-semibold text-gray-900 mb-3">1 to 6 Years</p>
              <p className="text-sm text-gray-600 leading-relaxed">
                Multi-year praseodymium positions backed by proven rare earth reserves at earlier-stage operations. Built for sovereign strategic
                reserves, automakers planning decade-scale EV production, wind developers securing magnet supply for gigawatt-scale portfolios, and
                institutional allocators who understand that the praseodymium deficit is structurally identical to the neodymium deficit but priced
                with less recognition of its criticality.
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
            Securing the Other Half of Every Permanent Magnet. Directly.
          </h2>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto text-center mb-14">
            Praseodymium is co-mined with neodymium from every rare earth deposit on earth. Its supply chain is identical: the same mines, the same
            separation facilities, the same processing infrastructure, the same 90% Chinese concentration. Toto Finance works directly with{' '}
            <Link href="/about" className="text-lime-800 font-medium underline underline-offset-2 hover:text-lime-600">
              rare earth mining companies and NdPr alloy processing facilities
            </Link>{' '}
            to secure praseodymium at the separation and alloy production level, bypassing the trader networks that have never offered praseodymium
            as a standalone investable asset.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            {[
              {
                title: 'China',
                text: 'China produces 90% of global praseodymium and controls 98% of NdPr magnet manufacturing. Bayan Obo (Inner Mongolia), Sichuan separation facilities, and Zhejiang and Fujian magnet factories process praseodymium alongside neodymium into finished NdPr alloy and sintered magnets. Export controls and domestic EV and wind demand are reducing international availability of both elements at the same pace, but strategic responses have focused overwhelmingly on neodymium alone.',
              },
              {
                title: 'North America (USA and Canada)',
                text: 'Mountain Pass (California) produces NdPr concentrate, with MP Materials expanding domestic separation and alloy manufacturing. Canadian projects in Quebec and Saskatchewan are developing processing capabilities. US government investment under the Defense Production Act and Inflation Reduction Act targets the entire NdPr supply chain, benefiting praseodymium supply security as a co-product of every neodymium-focused initiative.',
              },
              {
                title: 'Australia',
                text: 'Lynas Rare Earths produces NdPr oxide from Western Australian deposits at the world\'s largest non-Chinese rare earth processing facility. Every tonne of NdPr oxide produced contains praseodymium as an inseparable component, making Lynas simultaneously the largest non-Chinese source of both elements.',
              },
              {
                title: 'Southeast Asia and Myanmar',
                text: 'Malaysian processing facilities (including Lynas\'s Kuantan operation), Vietnamese ionic clay deposits, and Myanmar rare earth mining operations supply NdPr concentrate and separated oxides. These Southeast Asian operations provide alternative praseodymium supply routes, though capacity remains a fraction of Chinese processing throughput.',
              },
              {
                title: 'Africa',
                text: 'Emerging rare earth projects across Burundi, Tanzania, South Africa, and Madagascar contain NdPr-bearing deposits. New processing facilities under development will produce praseodymium as a co-product, expanding non-Chinese supply for the global magnet industry.',
              },
              {
                title: 'Exploration and Development',
                text: 'New rare earth projects across Scandinavia (Sweden, Norway), Greenland, and South America are in exploration and feasibility stages. These represent the next generation of NdPr supply, and In-Ground Praseodymium positions offer access at pre-production economics before separation output reaches the market.',
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
              <strong>Secured at the NdPr separation stage.</strong> Praseodymium does not come from a dedicated mine. It comes from the same
              separation facility that produces neodymium, as an inseparable co-product. Toto Finance works at this critical processing point,
              eliminating the broker and trader layers that have never offered praseodymium as an independent asset class. Verified provenance.
              Transparent chain of custody from{' '}
              <Link href="/how-tokenization-works" className="underline underline-offset-2 hover:text-lime-200">
                mine to token
              </Link>
              . Access to the overlooked half of every permanent magnet, at the point where it actually becomes available.
            </p>
          </div>
        </div>
      </section>

      {/* FOLD 7: PARTICIPANTS */}
      <section className="px-4 sm:px-6 md:px-8 lg:px-12 py-20 md:py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <p className="text-xs uppercase tracking-widest text-gray-400 font-semibold mb-3 text-center">PARTICIPANTS</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-gray-900 leading-tight mb-6 text-center">
            Who Buys Tokenized Praseodymium
          </h2>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto text-center mb-14">
            Praseodymium has never been individually accessible as an investment or procurement asset. It has always been bundled with neodymium in
            NdPr oxide or alloy form, traded through the same Chinese-dominated channels, at prices embedded in combined NdPr quotations with no
            standalone benchmark. The magnet manufacturers, automakers, and aerospace companies that consume praseodymium have had no mechanism to
            secure it independently, hedge its specific supply risk, or invest in it as a standalone material. Toto Finance creates that mechanism
            for the first time.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 border border-gray-200">
              <span className="text-xs font-bold tracking-widest text-lime-800">MAGNET AND MOTOR MANUFACTURERS</span>
              <h3 className="text-xl font-semibold text-gray-900 mt-3 mb-4">The Companies That Build What Moves the World</h3>
              <p className="text-sm text-gray-600 leading-relaxed mb-4">
                These buyers do not speculate on praseodymium prices. They consume praseodymium in the NdPr alloy that becomes magnets, that becomes
                motors, that becomes the force converting electricity into motion in every EV, wind turbine, and robot on earth. Tokenized
                praseodymium gives them{' '}
                <Link href="/products" className="text-lime-800 font-medium underline underline-offset-2">
                  supply continuity
                </Link>
                , transparent procurement, and physical delivery capability for an element that has never been independently procurable outside
                combined NdPr industrial channels.
              </p>
              <p className="text-xs text-gray-500 leading-relaxed">
                NdPr permanent magnet manufacturers, EV motor and drivetrain producers, wind turbine generator and direct-drive system companies,
                robotics and industrial automation manufacturers, aerospace engine alloy producers, defense and guidance system manufacturers,
                hard disk drive and precision motor companies, didymium glass and welding equipment producers, ceramic pigment and glass coloring
                manufacturers, hybrid vehicle NiMH battery producers.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 border border-gray-200">
              <span className="text-xs font-bold tracking-widest text-blue-800">MAGNET SUPPLY CHAIN INVESTORS</span>
              <h3 className="text-xl font-semibold text-gray-900 mt-3 mb-4">Investing in the Half of Every Magnet That the Market Overlooks</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Investors who recognize the neodymium supply crisis rarely realize they are looking at only half the problem. Every NdPr magnet
                requires praseodymium. Every neodymium deficit projection implies a parallel praseodymium deficit. Yet praseodymium receives a
                fraction of the investment attention, creating an asymmetry between its criticality and its market recognition. Tokenized
                praseodymium offers direct exposure to this overlooked dependency, with fractional access from $1, zero dependence on any
                company&apos;s execution, and a supply deficit that mirrors the most discussed rare earth shortage in the world.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 border border-gray-200">
              <span className="text-xs font-bold tracking-widest text-purple-800">ON-CHAIN INFRASTRUCTURE</span>
              <h3 className="text-xl font-semibold text-gray-900 mt-3 mb-4">Backing Digital Assets with the Missing Variable in the Electrification Equation</h3>
              <p className="text-sm text-gray-600 leading-relaxed mb-4">
                Every conversation about the neodymium bottleneck is an incomplete conversation without praseodymium. Tokenized praseodymium offers
                on-chain participants collateral backed by the element that the electrification narrative structurally underprices: same supply
                constraints as neodymium, same demand drivers, same geopolitical risk, but with less market attention and therefore potentially more
                upside as recognition catches up to reality. For protocols, treasuries, and funds seeking real-world assets with asymmetric
                recognition dynamics.
              </p>
              <p className="text-xs text-gray-500 leading-relaxed">
                Crypto funds seeking electrification-correlated commodity exposure with recognition asymmetry, protocol treasuries diversifying into
                the overlooked physical layer of the magnet supply chain, DeFi protocols building collateral pools with NdPr alloy demand
                convergence, blockchain foundations investing in materials at the center of EV and wind deployment, DAOs with energy transition and
                critical mineral investment mandates.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FOLD 8: Settlement */}
      <section className="px-4 sm:px-6 md:px-8 lg:px-12 py-20 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto">
          <p className="text-xs uppercase tracking-widest text-gray-400 font-semibold mb-3">GLOBAL TRADE</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-gray-900 leading-tight mb-6">
            Instant Settlement for Tokenized Praseodymium. No Rare Earth Traders. No Delays.
          </h2>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-4xl mb-12">
            Praseodymium has never been independently tradeable. It has always been embedded in combined NdPr oxide quotations, bundled into magnet
            alloy pricing, and procured through the same Chinese-dominated channels that control neodymium. There is no standalone praseodymium price
            benchmark, no separate futures contract, no independent procurement mechanism. For an element that constitutes half the alloy in every
            permanent magnet powering the electrification revolution, the market infrastructure offers precisely zero standalone access. We built
            the first.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="bg-gray-50 rounded-2xl p-6 md:p-8 border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-1">The Old Way</h3>
              <p className="text-sm text-gray-500 mb-6">8+ Intermediaries. Weeks to Settle. Opaque Pricing.</p>
              <div className="space-y-3">
                {[
                  'Mining Company / Ore Producer',
                  'Rare Earth Separation Facility',
                  'NdPr Alloy Manufacturer',
                  'International Rare Earth Trader',
                  'Clearing Agent',
                  'Custodian Bank',
                  'Correspondent Bank',
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
              <p className="text-sm text-red-600 font-medium mt-6 pt-4 border-t border-gray-200">
                Settlement: T+5 to T+30 (standard for rare earth transactions)
              </p>
            </div>

            <div className="bg-gray-900 text-white rounded-2xl p-6 md:p-8">
              <h3 className="text-lg font-semibold mb-1">The Toto Finance Way</h3>
              <p className="text-sm text-gray-400 mb-6">Source ↔ Buyer. Direct. Instant.</p>
              <div className="space-y-3">
                {['Mining / NdPr Separation Operation', 'Toto Finance Platform', 'Buyer'].map((step, i) => (
                  <div key={step} className="flex items-center gap-3">
                    <div className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0 text-xs font-semibold">
                      {i + 1}
                    </div>
                    <span className="text-sm">
                      {i === 1 ? (
                        <Link href="/products" className="underline underline-offset-2 hover:text-lime-200">
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
                Praseodymium has never existed as an independent asset class. It has always been absorbed into combined NdPr pricing, invisible as a
                standalone material in a supply chain that treats two distinct elements as a single product. Toto Finance uses blockchain to create
                what has never existed: an independent, transparent, instant-settlement market for praseodymium, separating it from bundled NdPr
                pricing for the first time and giving buyers and investors direct access to the element the magnet industry depends on but has never
                been able to procure individually.
              </p>
            </div>
          </div>

          <h3 className="text-2xl font-medium text-gray-900 mb-6 text-center">Settlement at the Speed of a Magnetic Field</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                name: 'USDC',
                issuer: 'Circle',
                detail:
                  'Fully reserved and independently attested dollar stablecoin engineered for institutional settlement. The compliance architecture and regulatory acceptance that magnet manufacturers, automaker procurement teams, and defense supply chain operations require for auditable digital commodity transactions.',
              },
              {
                name: 'USDT',
                issuer: 'Tether',
                detail:
                  'Over $140 billion in global circulation providing the settlement depth that industrial-scale praseodymium transactions require. When procurement operates at the tonnage levels of EV motor production and wind turbine manufacturing, USDT delivers the execution infrastructure to settle without counterparty friction or volume constraints.',
              },
              {
                name: 'USAT',
                issuer: 'Tether (US Regulated)',
                detail:
                  'US-regulated stablecoin under the GENIUS Act framework. Purpose-built for critical mineral procurement where Defense Production Act compliance, Inflation Reduction Act sourcing requirements, and US jurisdictional mandates govern the acquisition of materials destined for domestic EV and clean energy manufacturing.',
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
            DeFi Infrastructure for Tokenized Praseodymium
          </h2>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-4xl mb-12">
            Praseodymium has never existed as an independent financial asset. It has been permanently bundled with neodymium in combined NdPr
            pricing, with no standalone exchange listing, no dedicated ETF, no independent futures contract, no lending facility, no collateral
            framework. Tokenization does not merely digitize praseodymium. It unbundles it from its neodymium pairing for the first time, creating
            an independent financial identity for an element that has been invisible as a standalone asset for its entire commercial history.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            <div className="bg-white rounded-2xl p-6 md:p-8 border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">The First Independent Praseodymium Market in History</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Before tokenization, praseodymium did not have a market. It had a line item embedded in NdPr oxide quotations. No buyer could acquire
                praseodymium independently. No investor could take a position in praseodymium separately from neodymium. Tokenized praseodymium creates
                the first standalone trading venue for this element: a continuous secondary market on decentralized exchanges where price discovery
                happens independently of NdPr bundling, transfers execute instantly, and the overlooked half of every permanent magnet becomes its own
                investable asset for the first time.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-6 md:p-8 border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Yield Derived from the Electrification Wave&apos;s Second Element</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Lend praseodymium tokens to counterparties seeking leveraged exposure to rare earth pricing or hedged positions in magnet materials.
                Interest rates reflect real-world demand for praseodymium exposure, tied to EV production ramps, offshore wind commissioning
                schedules, and NdPr magnet factory capacity expansion. Yield generated by the same electrification megatrend driving neodymium demand,
                applied to the co-element that every magnet requires but that the financial market has never independently priced.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-6 md:p-8 border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Capital Without Disrupting Magnet Supply Commitments</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Magnet manufacturers and institutional investors holding praseodymium positions have historically had no mechanism for accessing
                capital from those holdings independently, because praseodymium has never been independently held. Tokenized praseodymium changes this
                entirely.{' '}
                <Link href="/products" className="text-lime-800 font-medium underline underline-offset-2">
                  Borrow against praseodymium
                </Link>{' '}
                tokens to receive stablecoins while maintaining full exposure. For NdPr magnet producers managing alloy inventory against automaker
                delivery schedules, this creates a liquidity mechanism that has never existed for this element.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-6 md:p-8 border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Risk Management for an Element with No Standalone Market History</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Praseodymium&apos;s supply risk is identical to neodymium&apos;s: 90% production concentration in China, export control exposure,
                co-mining constraints that prevent independent supply scaling. But risk management tools have never existed for praseodymium
                independently. Smart contract infrastructure automates collateral monitoring, margin management, and position adjustment in real time,
                providing the first risk architecture ever built specifically for praseodymium, enabling hedging strategies that were previously
                impossible because the asset class did not exist.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 md:p-8 border border-gray-200">
            <h3 className="text-xl font-medium text-gray-900 mb-6 text-center">
              From NdPr Separation to Global Digital Market: The Praseodymium Token Path
            </h3>
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              {[
                'Separated: Praseodymium oxide verified at NdPr separation facility, secured in insured custody, and bound to on-chain token identity',
                'Acquired: Purchased with USDC, USDT, or USAT at transparent pricing reflecting real-time magnet alloy and electrification demand',
                'Positioned: Held in wallet, traded on secondary markets, or bridged across chains to integrate with holder procurement systems',
                'Activated: Deployed into yield protocols, pledged as loan collateral, or structured for NdPr supply disruption hedging',
                'Delivered: Redeemed for physical praseodymium oxide (Pr₆O₁₁) for NdPr magnet alloy production, aerospace alloy fabrication, or specialty industrial use',
              ].map((step, i) => (
                <div key={i} className="flex items-center gap-2 md:gap-0 w-full md:w-auto">
                  <div className="flex flex-col items-center text-center flex-1">
                    <div className="w-10 h-10 rounded-full bg-gray-900 text-white flex items-center justify-center text-sm font-semibold mb-2">
                      {i + 1}
                    </div>
                    <p className="text-xs text-gray-700 max-w-[168px] leading-tight">{step}</p>
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
            Tokenized Praseodymium vs Every Other Way to Get Exposure
          </h2>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-4xl mb-12">
            There has never been any way to invest in praseodymium independently. Rare earth ETFs bundle it with dozens of other elements. Mining
            stocks carry operational risk unrelated to praseodymium pricing. Physical procurement delivers NdPr oxide, not separated praseodymium.
            Toto Finance built what the magnet supply chain has never offered: standalone, fractional, instant access to the element that completes
            every permanent magnet ever produced.
          </p>

          <div
            className="overflow-x-auto rounded-2xl border border-gray-200"
            aria-label="Comparison table of tokenized praseodymium on Toto Finance versus rare earth ETFs, physical praseodymium procurement, and mining stocks across 10 features including praseodymium-specific exposure, settlement speed, price transparency, and DeFi access."
          >
            <table className="w-full text-sm text-left min-w-[720px]">
              <thead>
                <tr className="bg-gray-900 text-white">
                  <th className="px-4 md:px-6 py-4 font-medium">Feature</th>
                  <th className="px-4 md:px-6 py-4 font-medium">Rare Earth ETFs</th>
                  <th className="px-4 md:px-6 py-4 font-medium bg-white/10">Toto Finance</th>
                  <th className="px-4 md:px-6 py-4 font-medium">Physical Praseodymium</th>
                  <th className="px-4 md:px-6 py-4 font-medium">Mining Stocks</th>
                </tr>
              </thead>
              <tbody className="bg-white">
                {[
                  ['Praseodymium-Specific', 'No (basket)', 'Yes (1:1)', 'NdPr bundle only', 'No (equity)'],
                  ['Trading Hours', 'Market hours only', '24/7/365', 'Private negotiation', 'Market hours only'],
                  ['Settlement', 'T+2', 'T+0 (Instant)', 'Weeks to months', 'T+2'],
                  ['Settlement Currency', 'Fiat (via broker)', 'USDC, USDT, USAT', 'Wire transfer', 'Fiat (via broker)'],
                  ['Min. Investment', '1 share (~$50+)', 'Fractional (from $1)', '$25,000+ (NdPr bundle)', '1 share (~$5+)'],
                  ['Physical Redemption', 'No', 'Yes', 'Yes (as NdPr)', 'No'],
                  ['On-Chain Transparency', 'No', 'Yes', 'No', 'No'],
                  ['DeFi Yield / Loans', 'No', 'Yes', 'No', 'No'],
                  ['Price Transparency', 'NAV-based', 'Real-time oracle', 'Bundled NdPr pricing', 'Stock price only'],
                  ['Intermediaries', 'Broker + Clearing', 'None (P2P)', 'Processors + Traders', 'Broker'],
                ].map((row, i) => (
                  <tr key={row[0]} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="px-4 md:px-6 py-3 font-medium text-gray-900">{row[0]}</td>
                    <td className="px-4 md:px-6 py-3 text-gray-600">{row[1]}</td>
                    <td className="px-4 md:px-6 py-3 text-gray-900 font-medium bg-lime-50/50">{row[2]}</td>
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
            Building Financial Infrastructure for the Overlooked Half of Every Permanent Magnet
          </h2>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-4xl mb-12">
            Praseodymium has never had its own financial infrastructure because it has never been treated as its own asset. Bundled with neodymium in
            every pricing quotation, every procurement contract, and every industrial transaction since NdPr magnets were commercialized in the
            1980s. No standalone contracts. No independent pricing benchmarks. No settlement infrastructure. No collateral frameworks. Every feature
            of the Toto Finance platform for praseodymium was built from nothing because praseodymium has never existed as an independent asset class
            before.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                t: 'Physical Backing with Magnet-Alloy-Grade Delivery',
                b: 'Every praseodymium token connects to verified praseodymium oxide (Pr₆O₁₁, 99.5%+) in insured custody. Request physical delivery and receive material ready for NdPr magnet alloy sintering, aerospace alloy production, or specialty industrial applications. In a market where praseodymium has always been bundled into combined NdPr deliveries, on-chain proof-of-reserves creates the first independent verification of praseodymium holdings.',
              },
              {
                t: 'Independent Price Discovery for an Element That Has Never Had Its Own Price',
                b: "Praseodymium has never had a standalone price. It has always been quoted as part of NdPr oxide, with its individual value invisible to the market. Toto Finance's oracle feeds and on-chain trading activity create the first independent praseodymium pricing mechanism: real-time, separately verifiable, and reflective of praseodymium's own supply and demand dynamics rather than its value bundled into a combined quotation.",
              },
              {
                t: 'Instant Settlement for a Material That Has Never Been Independently Traded',
                b: 'Traditional praseodymium procurement does not exist as an independent process. Buyers procure NdPr oxide or alloy, receiving both elements in a combined product. Token settlement creates the first mechanism for acquiring praseodymium exposure independently, settling T+0 with stablecoins. For magnet manufacturers seeking to hedge the specific element that provides thermal stability to their alloy, independent instant settlement is not an improvement. It is an entirely new capability.',
              },
              {
                t: 'Compliance for Critical Mineral Supply Chain Transactions',
                b: 'Praseodymium trade operates within the same regulatory framework as neodymium: rare earth export controls, critical mineral designations, Defense Production Act requirements, and Inflation Reduction Act sourcing mandates. Smart contracts embed KYC/AML verification, transfer restrictions, and jurisdiction-specific compliance rules directly into token architecture, ensuring every transaction satisfies applicable regulatory requirements for a material that multiple governments classify as strategically critical.',
              },
              {
                t: 'Financial Infrastructure for an Asset Class That Did Not Exist Yesterday',
                b: 'Lending, borrowing, hedging, and collateral management for praseodymium as a standalone asset: functions that have never existed in any form because praseodymium has never existed as an independent financial instrument. Smart contract protocols enable yield generation from praseodymium positions, stablecoin borrowing against holdings, and programmable hedging strategies. An entire financial stack built from absolute zero for the element that completes every permanent magnet on earth.',
              },
              {
                t: 'Multi-Chain Presence',
                b: 'Tokenized praseodymium is deployed across Ethereum, Polygon, Cardano, Solana, and XRP Ledger. Institutional custodians, DeFi protocols, magnet supply chain platforms, and individual holders can interact with praseodymium tokens on whatever chain infrastructure their operations already use. No migration required, no ecosystem lock-in.',
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
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-gray-900 leading-tight mb-6">Tokenized Praseodymium FAQ</h2>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-12">
            Direct answers about tokenized praseodymium, In-Ground Praseodymium, NdPr magnet demand, and how Toto Finance provides the first
            standalone access to the overlooked element in every permanent magnet.
          </p>
          <PraseodymiumFAQ faqs={faqData} />
        </div>
      </section>

      {/* FOLD 13: Final CTA */}
      <section className="relative bg-gradient-to-br from-lime-900 via-lime-800 to-gray-900 text-white px-4 sm:px-6 md:px-8 lg:px-12 py-20 md:py-32 overflow-hidden">
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
            backgroundSize: '40px 40px',
          }}
        />
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <p className="text-xs uppercase tracking-widest text-lime-200/80 font-semibold mb-3">THIS IS WHY</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light leading-tight mb-8">
            Every Permanent Magnet Requires Two Elements. The World Has Overlooked One of Them.
          </h2>
          <p className="text-base md:text-lg text-gray-200 leading-relaxed mb-10">
            Every EV motor depends on NdPr alloy. Every wind turbine, every robot, every defense system. The world needs 32,000 tonnes of
            praseodymium by 2030. Supply will deliver 20,500. The 11,500-tonne gap mirrors the neodymium deficit that dominates headlines, but
            receives a fraction of the strategic attention. Toto Finance is building the infrastructure to bring the overlooked half of every
            permanent magnet to an open, transparent, instant-settlement market as an independent asset for the first time in its history.
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
