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
const NeodymiumTickerBar = dynamicImport(
  () => import('../components/client/NeodymiumTickerBar').then((mod) => ({ default: mod.NeodymiumTickerBar }))
);
const NeodymiumFAQ = dynamicImport(
  () => import('../components/client/SilverFAQ').then((mod) => ({ default: mod.SilverFAQ }))
);

const PAGE_URL = 'https://totofinance.co/tokenized-neodymium';
const PAGE_TITLE = 'Tokenized Neodymium | Digital Rare Earth Backed by Physical Assets | Toto Finance';
const PAGE_DESCRIPTION =
  'Every EV motor, every wind turbine, every AI data center cooling fan depends on neodymium magnets. Toto Finance brings this critical rare earth on-chain from 1:1 redeemable oxide tokens to In-Ground future delivery contracts. The element that moves the modern economy. Instant stablecoin settlement. DeFi secondary markets.';

const breadcrumbItems = [
  { name: 'Home', item: 'https://totofinance.co' },
  { name: 'Products', item: 'https://totofinance.co/products' },
  { name: 'Tokenized Neodymium', item: PAGE_URL },
];

const faqData = [
  {
    question: 'What is tokenized neodymium?',
    answer:
      'A blockchain-based digital asset backed 1:1 by refined neodymium oxide (Nd₂O₃) in insured, audited vaults. High-purity grade suitable for NdFeB magnet alloy production, electric motor manufacturing, wind turbine generators, and industrial magnet applications. Redeemable for physical neodymium on demand. Toto Finance is building the infrastructure to bring neodymium on-chain with instant stablecoin settlement and DeFi secondary markets.',
  },
  {
    question: 'What is In-Ground Neodymium?',
    answer:
      'A tokenized future delivery contract for neodymium still contained in rare earth deposits at certified mining operations. Short-term (1 to 12 months) for operations with active processing and magnet supply chain capacity, long-term (1 to 6 years) for earlier-stage deposits. Built for automakers, wind OEMs, sovereign funds, and institutional investors positioning for the structural neodymium deficit.',
  },
  {
    question: 'Where does the neodymium come from?',
    answer:
      'Directly from rare earth mining companies and magnet alloy processing facilities across China (dominant share of separation and NdFeB magnet production), North America (developing domestic rare earth and magnet supply chains), Australia (Lynas and allied processing), Southeast Asia and Vietnam, Brazil and other monazite-bearing regions, and emerging projects globally. No middlemen at the core sourcing layer. More on partnerships: https://totofinance.co/about.',
  },
  {
    question: 'Who buys tokenized neodymium?',
    answer:
      'Three groups: (1) Industrial consumers—EV and e-mobility manufacturers, wind turbine OEMs, robotics and industrial motor producers, defense and aerospace contractors, consumer electronics and hard-drive supply chains. (2) Industrial supply chain investors—funds seeking direct exposure to the physical material underpinning electrification and advanced manufacturing without single-company operational risk. (3) On-chain participants—crypto funds, protocol treasuries, and DeFi protocols seeking real-world collateral tied to NdFeB and electrification demand.',
  },
  {
    question: 'How does instant settlement work?',
    answer:
      'T+0 settlement using USDC, USDT, or USAT. Traditional neodymium and magnet alloy procurement involves traders, processing queues, freight, customs, and banking settlement measured in weeks. Toto Finance connects processors and qualified buyers on-chain, compressing multi-step industrial procurement into instant stablecoin settlement.',
  },
  {
    question: 'Can I trade tokenized neodymium on DeFi platforms?',
    answer:
      'Yes. After acquisition, tokens can trade on decentralized exchanges, generate yield via lending, or serve as collateral for stablecoin loans. Neodymium has lacked standardized secondary market infrastructure despite powering NdFeB magnets across EVs, wind, and industry. Tokenization creates that infrastructure for the first time.',
  },
  {
    question: 'Why is neodymium essential for EVs and wind power?',
    answer:
      'Neodymium is the performance layer inside NdFeB permanent magnets—the highest energy-product magnets available at scale. A typical EV traction motor uses on the order of one kilogram of neodymium; large offshore wind turbines can use hundreds of kilograms of NdFeB in generators. Without neodymium, power density, efficiency, and weight targets for electrification and renewables are far harder to meet.',
  },
  {
    question: 'What is the neodymium price outlook?',
    answer:
      'Demand is driven by double-digit annual growth in EVs, wind deployment, robotics, and data-center infrastructure while separation and magnet capacity remain geographically concentrated. Analysts and industry bodies project widening deficits this decade as demand approaches ~95 kt by the mid-2030s against supply on the order of ~50 kt—amplifying price and procurement risk for anyone dependent on NdFeB.',
  },
  {
    question: 'How do I get early access?',
    answer:
      'Visit https://totofinance.co/. Automakers, wind OEMs, industrial buyers, institutional investors, mining and processing partners, and strategic allocators can reach out for partnership and early allocation discussions.',
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
        'Tokenized commodity platform offering 1:1 asset-backed neodymium oxide tokens and In-Ground Neodymium future delivery contracts with instant stablecoin settlement.',
    },
    {
      '@type': 'Product',
      name: '1:1 Neodymium Oxide Token',
      description:
        'Digital asset backed 1:1 by refined neodymium oxide (Nd₂O₃) in insured custody, redeemable for physical delivery toward NdFeB and industrial magnet supply chains. Category: Tokenized Commodity.',
      category: 'Tokenized Commodity',
      brand: { '@type': 'Brand', name: 'Toto Finance' },
      url: PAGE_URL,
    },
    {
      '@type': 'Product',
      name: 'In-Ground Neodymium',
      description:
        'Tokenized future delivery contract for neodymium in rare earth deposits at certified mining operations. Category: Commodity Future Delivery Contract.',
      category: 'Commodity Future Delivery Contract',
      brand: { '@type': 'Brand', name: 'Toto Finance' },
      url: PAGE_URL,
    },
  ],
};

export default function TokenizedNeodymiumPage() {
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
      <section className="relative bg-gradient-to-br from-sky-900 via-sky-800 to-gray-900 text-white px-4 sm:px-6 md:px-8 lg:px-12 pt-28 md:pt-36 pb-16 md:pb-24 overflow-hidden">
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
            backgroundSize: '40px 40px',
          }}
        />
        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <h1 className="text-sm md:text-base font-semibold tracking-[0.2em] uppercase text-sky-200/90 mb-4">
            Tokenized Neodymium by Toto Finance
          </h1>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light leading-tight mb-8">
            Every Electric Motor, Every Wind Turbine, Every AI Data Center Fan Depends on Neodymium. Now Anyone Can Own It.
          </h2>
          <p className="text-base md:text-lg text-gray-200 leading-relaxed mb-10 max-w-3xl mx-auto text-left md:text-center">
            Right now, the world&apos;s electrification runs on NdFeB permanent magnets—and neodymium is the element that makes those magnets
            possible. EV traction motors, offshore wind generators, precision robotics, defense systems, and the cooling and storage stacks
            behind modern compute all draw from the same constrained supply chain: roughly 87% of processing still tied to a single geopolitical
            axis, with a structural gap projected to reach on the order of 45,000 tonnes annually by 2030 as demand outruns deployable supply.
            Neodymium has never been a liquid, investable asset for most participants—only for magnet alloy processors and industrial procurement
            desks.{' '}
            <Link href="/" className="text-white underline underline-offset-2 hover:text-sky-200">
              Toto Finance
            </Link>{' '}
            is changing that by bringing the element that moves the modern economy on-chain for the first time—from 1:1 redeemable oxide to
            In-Ground future delivery—with instant stablecoin settlement and DeFi-native secondary markets.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
              Why Neodymium Matters
            </a>
          </div>
        </div>
      </section>

      <NeodymiumTickerBar />

      {/* FOLD 2: Crisis */}
      <section id="crisis" className="scroll-mt-24 px-4 sm:px-6 md:px-8 lg:px-12 py-20 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto">
          <p className="text-xs uppercase tracking-widest text-gray-400 font-semibold mb-3">THE WHY</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-gray-900 leading-tight mb-6">
            The World Is Electrifying Through Neodymium Magnets. Supply Cannot Keep Pace.
          </h2>
          <div className="text-base md:text-lg text-gray-600 leading-relaxed max-w-4xl mb-12 space-y-4">
            <p>
              We chose neodymium because it sits at the center of every major technology transition of this decade. Not a niche metal—a
              load-bearing input to EVs, wind, robotics, defense, and the physical infrastructure of AI-scale compute.
            </p>
            <p>
              Adamas Intelligence and industry trackers show magnet rare earth demand running at roughly 18,000 tonnes of neodymium oxide
              equivalent in 2024—with double-digit annual growth as EV and wind curves steepen. Processing and magnet manufacturing remain
              overwhelmingly concentrated: on the order of 87% of separation and NdFeB capacity still flows through a single country&apos;s
              industrial stack. Meanwhile, forward-looking balances point to demand near 95,000 tonnes by the mid-2030s against supply closer to
              50,000 tonnes—a ~45,000-tonne annual hole that compounds with every gigafactory, every offshore wind farm, and every robotics
              deployment.
            </p>
            <p className="font-medium text-gray-900">That is why we exist.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gray-50 rounded-2xl p-6 md:p-8 border border-gray-100">
              <p className="text-4xl md:text-5xl font-light text-gray-900 mb-3">18,000 t</p>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Magnet Rare Earth Demand at Industrial Scale</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Adamas Intelligence estimates roughly 18,000 tonnes of neodymium oxide demand in 2024 tied to NdFeB and magnet supply chains—a
                baseline that grows with every EV program and multi-megawatt turbine, before counting robotics, defense, and industrial
                automation.
              </p>
            </div>
            <div className="bg-gray-50 rounded-2xl p-6 md:p-8 border border-gray-100">
              <p className="text-4xl md:text-5xl font-light text-gray-900 mb-3">87%</p>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Processing Concentration Is a Systemic Risk</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                The majority of rare earth separation and NdFeB magnet production still sits within one national industrial ecosystem. Export
                rules, quota dynamics, and domestic priority consumption can move global magnet availability faster than new mines or
                refineries can respond.
              </p>
            </div>
            <div className="bg-gray-50 rounded-2xl p-6 md:p-8 border border-gray-100">
              <p className="text-4xl md:text-5xl font-light text-gray-900 mb-3">45,000 t</p>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">A Gap Measured in Motors, Turbines, and Factories</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Industry supply-demand sketches for the 2030s imply demand on the order of ~95,000 tonnes per year against supply nearer ~50,000
                tonnes—leaving a ~45,000-tonne structural deficit absent massive new separation and magnet capacity. Every technology transition
                widens it.
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
            Understanding Why Neodymium Demand Outpaces New Magnet Capacity
          </h2>
          <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto text-center mb-14">
            The magnetic performance layer inside NdFeB alloys. Essential for the motors that move EVs, the generators that capture wind, and the
            actuators that automate industry.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
              <div
                className="rounded-xl bg-gradient-to-br from-sky-900 to-slate-950 text-white p-6 mb-4 font-mono text-sm"
                role="img"
                aria-label="Neodymium element card showing Nd symbol, atomic number 60, and magnet-grade classification"
              >
                <p className="text-3xl font-light mb-1">Nd</p>
                <ul className="space-y-1 text-sky-100/90">
                  <li>Atomic Number: 60</li>
                  <li>Density: ~7.01 g/cm³ (metal)</li>
                  <li>Melting Point: ~1,024°C</li>
                  <li>Key form: Nd₂O₃ → NdFeB</li>
                  <li>Classification: Permanent Magnet Core</li>
                </ul>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">The Element</h3>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
              <div
                className="rounded-xl bg-gradient-to-br from-slate-800/80 to-slate-900 min-h-[160px] mb-4"
                role="img"
                aria-label="Rare earth mining and bastnäsite deposits supplying neodymium"
              />
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Where It Comes From</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Extracted from bastnäsite, monazite, and ionic clay circuits—often co-produced with praseodymium as &quot;NdPr&quot; for magnet
                feedstock. Despite abundant geology in patches, refined oxide and especially NdFeB magnet output concentrate in a handful of
                processing and manufacturing hubs, creating the bottleneck between ore and motor.
              </p>
              <p className="text-xs text-gray-500 mt-3 font-mono">
                Ore → Separation → Nd/Pr Oxide → Alloy → NdFeB Magnet → Motor / Generator
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
              <div
                className="rounded-xl bg-gradient-to-br from-cyan-900/60 to-slate-900 min-h-[160px] mb-4"
                role="img"
                aria-label="NdFeB magnet microstructure and high magnetic energy product"
              />
              <h3 className="text-lg font-semibold text-gray-900 mb-3">The Chemistry That Makes It Indispensable</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Alloyed with iron and boron (and often dysprosium/terbium for temperature stability), neodymium enables the highest practical
                energy product of mass-market permanent magnets—translating into smaller, lighter, more efficient motors and generators than
                ferrite or induction-only designs at the same torque targets.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
              <div
                className="rounded-xl bg-gradient-to-br from-slate-700 to-slate-900 min-h-[160px] mb-4"
                role="img"
                aria-label="Applications: EV motors, wind turbines, robotics, HDDs, defense"
              />
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Where It Goes</h3>
              <p className="text-sm text-gray-600 leading-relaxed mb-4">
                EV and hybrid traction motors, wind turbine generators, servo and robotics motors, HDD voice-coil actuators, defense actuators,
                magnetic resonance components, high-efficiency pumps and compressors—anywhere torque density and efficiency dominate the physics.
              </p>
              <div className="space-y-2">
                <p className="text-sm font-semibold text-sky-900 bg-sky-50 rounded-lg px-3 py-2">$12B+ global NdFeB magnet market</p>
                <p className="text-sm font-semibold text-sky-900 bg-sky-50 rounded-lg px-3 py-2">&gt;$25B by 2030 on electrification curves</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOLD 4: THE CATALYST */}
      <section className="px-4 sm:px-6 md:px-8 lg:px-12 py-20 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto">
          <p className="text-xs uppercase tracking-widest text-gray-400 font-semibold mb-3">THE CATALYST</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-gray-900 leading-tight mb-6">
            EVs Are Scaling. Wind Is Scaling. Robotics Is Scaling. Neodymium Supply Is Falling Behind All of Them.
          </h2>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-4xl mb-12">
            There is a straight-line physical relationship between global electrification and neodymium consumption. Every new EV program locks
            in kilograms of NdFeB per vehicle. Every offshore wind row locks in hundreds of kilograms per turbine. Data centers and factories
            multiply smaller motors and actuators by the million. These end markets share one input: separated rare earth oxide refined into
            magnet alloy.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <div className="bg-gray-50 rounded-2xl p-6 md:p-8 border border-gray-100">
              <h3 className="text-xl font-medium text-gray-900 mb-3">Electric Vehicles: Roughly 1 kg Neodymium per Traction Motor</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                NdFeB magnets dominate EV traction motors for power density and efficiency. A typical EV motor uses on the order of one kilogram of
                neodymium; fleets and platforms multiply that into tens of thousands of tonnes of oxide demand as global EV sales compound.
              </p>
            </div>
            <div className="bg-gray-50 rounded-2xl p-6 md:p-8 border border-gray-100">
              <h3 className="text-xl font-medium text-gray-900 mb-3">Wind Power: Up to ~600 kg NdFeB per Offshore Turbine</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Direct-drive and hybrid-drive offshore machines can embed hundreds of kilograms of NdFeB in permanent-magnet generators. Onshore
                units use less per turbine but deploy at massive cumulative volume—pulling oxide demand in parallel with grid-decarbonization
                targets.
              </p>
            </div>
            <div className="bg-gray-50 rounded-2xl p-6 md:p-8 border border-gray-100">
              <h3 className="text-xl font-medium text-gray-900 mb-3">AI, Data Centers, and Precision Motion</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Cooling fans, spindle motors, actuators, and factory robotics scale with compute and automation intensity. Each unit is small in
                isolation; in aggregate they tighten an already constrained oxide market competing with EV and wind offtake.
              </p>
            </div>
            <div className="bg-gray-50 rounded-2xl p-6 md:p-8 border border-gray-100">
              <h3 className="text-xl font-medium text-gray-900 mb-3">Defense, Aerospace, and Industrial Automation</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Guided actuation, compact motors, and high-reliability motion systems favor NdFeB where ferrite cannot deliver the same torque
                envelope. Strategic stockpiling and ally-shoring amplify competition for the same tonnes as civilian electrification.
              </p>
            </div>
          </div>

          <div className="bg-gray-50 rounded-2xl p-6 md:p-8 border border-gray-200">
            <h3 className="text-xl font-medium text-gray-900 mb-2">A Deficit That Compounds with Every Technology Transition</h3>
            <p className="text-sm text-gray-500 mb-6">
              Illustrative balance: global neodymium demand rising from ~60 kt (2025) to ~78 kt (2030) and ~95 kt (2035) against supply held near
              ~50 kt—widening the structural gap industrially and financially.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
              {[
                { year: '2025', val: '~60', note: 'Demand (kt)' },
                { year: '2030', val: '~78', note: 'Demand (kt)' },
                { year: '2035', val: '~95', note: 'Demand (kt)' },
                { year: 'Supply (≈)', val: '~50', note: 'Illustrative flat band' },
              ].map((d, i) => (
                <div
                  key={d.year}
                  className={`text-center p-4 rounded-xl ${i === 3 ? 'bg-red-50 border border-red-100' : 'bg-white border border-gray-100'}`}
                >
                  <p className={`text-sm mb-2 ${i === 3 ? 'text-red-800 font-medium' : 'text-gray-500'}`}>{d.year}</p>
                  <p className="text-sm font-semibold text-gray-900">{d.val} kt</p>
                  <p className="text-xs text-gray-500 mt-1">{d.note}</p>
                </div>
              ))}
            </div>
            <p className="text-xs text-gray-400">
              Sources: industry demand models (Adamas, CRU, IEA technology scenarios), company magnet supply disclosures, USGS rare earth
              summaries—synthesized for directional balance, not a single vendor forecast.
            </p>
          </div>
        </div>
      </section>

      {/* FOLD 5: TWO PRODUCTS */}
      <section id="products" className="scroll-mt-24 px-4 sm:px-6 md:px-8 lg:px-12 py-20 md:py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <p className="text-xs uppercase tracking-widest text-gray-400 font-semibold mb-3 text-center">TWO PRODUCTS</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-gray-900 leading-tight mb-6 text-center">
            Two Ways to Own Tokenized Neodymium
          </h2>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto text-center mb-14">
            One product for neodymium already refined, vaulted, and ready for magnet supply chains. One for neodymium still in the ground—future
            delivery against certified reserves. Both are physical-asset-backed. Both settle in stablecoins. Both exist because a ~45,000-tonne
            deficit and 87% processing concentration are not abstract risks—they are procurement realities for OEMs and investors alike.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
            <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm">
              <span className="inline-block text-xs font-bold tracking-wider text-sky-800 bg-sky-100 px-3 py-1 rounded-full mb-4">
                ASSET-BACKED TOKEN
              </span>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                <Link href="/products" className="hover:text-sky-700 underline-offset-2 hover:underline">
                  1:1 Neodymium Oxide Token
                </Link>
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed mb-6">
                Digital ownership of physical neodymium. Every token is backed 1:1 by refined neodymium oxide (Nd₂O₃) in insured, audited
                custody—suitable feedstock for NdFeB alloy and magnet production. Redeemable for physical delivery. Not a paper tracker. The
                actual material bound to on-chain supply proofs.
              </p>
              <ul className="text-sm text-gray-700 space-y-2 list-disc pl-5">
                <li>Backed 1:1 by refined neodymium oxide (magnet-grade pathway)</li>
                <li>Redeemable for physical neodymium / oxide delivery on demand</li>
                <li>Insured custody with independent audit and proof-of-reserves</li>
                <li>Fractional ownership from $1; trade 24/7 with instant stablecoin settlement</li>
                <li>Industrial end-use: NdFeB, motors, generators, robotics, defense supply chains</li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm">
              <span className="inline-block text-xs font-bold tracking-wider text-slate-800 bg-slate-200 px-3 py-1 rounded-full mb-4">
                FUTURE DELIVERY CONTRACT
              </span>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                <Link href="/products" className="hover:text-sky-700 underline-offset-2 hover:underline">
                  In-Ground Neodymium
                </Link>
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed mb-6">
                Forward exposure to neodymium still in proven rare earth reserves—tokenized delivery schedules for operations with near-term
                processing paths or longer-dated mine development. Built for automakers, wind OEMs, sovereigns, and institutions hedging
                concentrate risk before new separation capacity reaches market.
              </p>
              <ul className="text-sm text-gray-700 space-y-2 list-disc pl-5">
                <li>Backed by proven neodymium content at certified partner sites</li>
                <li>On-chain reserve and geological transparency</li>
                <li>Physical delivery or cash settlement at maturity</li>
                <li>Third-party reserve verification</li>
                <li>Programs for strategic buyers and institutional allocators</li>
              </ul>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-sky-900/10 border border-sky-200 rounded-2xl p-6 md:p-8">
              <p className="text-xs font-bold text-sky-900 uppercase tracking-wider mb-2">SHORT-TERM DELIVERY</p>
              <p className="text-lg font-semibold text-gray-900 mb-3">1 to 12 Months</p>
              <p className="text-sm text-gray-600 leading-relaxed">
                Tied to operating mines and separation routes with near-term oxide output—useful for magnet alloy buyers managing quarterly
                procurement and traders positioning around policy and freight shocks.
              </p>
            </div>
            <div className="bg-slate-100 border border-slate-200 rounded-2xl p-6 md:p-8">
              <p className="text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">LONG-TERM DELIVERY</p>
              <p className="text-lg font-semibold text-gray-900 mb-3">1 to 6 Years</p>
              <p className="text-sm text-gray-600 leading-relaxed">
                Multi-year positions in reserves at earlier-stage assets—aligned with OEM platform cycles, sovereign stockpiling, and investors
                who view 87% concentration as a structural premium to hedge—not a footnote.
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
            Securing the Element Inside Every NdFeB Magnet. Directly.
          </h2>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto text-center mb-14">
            Neodymium leaves the ground in many places but enters motors through a narrow corridor: separation, metal/alloy, NdFeB strip casting
            and sintering. Toto Finance works directly with{' '}
            <Link href="/about" className="text-sky-800 font-medium underline underline-offset-2 hover:text-sky-600">
              rare earth mining companies and magnet alloy processing facilities
            </Link>{' '}
            to secure oxide and alloy-stage material without opaque trader stacks—so OEMs and investors interact with the supply chain where
            neodymium actually becomes magnetic.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            {[
              {
                title: 'China',
                text: 'Dominant separation, metal, and NdFeB capacity—Inner Mongolia light rare earth circuits, Jiangxi and Sichuan processing corridors, and the magnet manufacturing clusters that translate oxide into motors. Policy and export dynamics here move global EV and wind schedules within quarters.',
              },
              {
                title: 'North America (USA and Canada)',
                text: 'Mountain Pass and emerging U.S. separation projects, Canadian rare earth development, and incentive-linked magnet supply-chain reshoring aimed at reducing single-country dependency for Western OEMs.',
              },
              {
                title: 'Australia',
                text: 'Hard-rock rare earth production with oxide routes into allied downstream magnet partnerships—critical for diversification even when absolute tonnes are smaller than legacy Asian baseload.',
              },
              {
                title: 'Southeast Asia and Vietnam',
                text: 'Processing and magnet midstream investments that reroute concentrate and oxide flows—tight coupling to Chinese feedstock in some cases, genuine alternate paths in others.',
              },
              {
                title: 'Brazil, India, and Heavy Mineral Sands',
                text: 'Monazite and coastal deposits with meaningful NdPr potential as separation plants mature—long-dated but strategic for regional autonomy.',
              },
              {
                title: 'Exploration and Development',
                text: 'Greenfield and brownfield rare earth projects across Africa, Europe, and the Americas. In-Ground Neodymium captures pre-production optionality before oxide hits the market.',
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
              <strong>Secured at the processing and alloy stage.</strong> The choke point for neodymium is not the periodic table—it is the
              separation plant and the magnet alloy line. Toto Finance engages there, removing redundant trader layers between oxide output and
              qualified offtake. Verified provenance. Transparent custody from{' '}
              <Link href="/how-tokenization-works" className="underline underline-offset-2 hover:text-sky-200">
                mine to token
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

      {/* FOLD 7: PARTICIPANTS */}
      <section className="px-4 sm:px-6 md:px-8 lg:px-12 py-20 md:py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <p className="text-xs uppercase tracking-widest text-gray-400 font-semibold mb-3 text-center">PARTICIPANTS</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-gray-900 leading-tight mb-6 text-center">
            Who Buys Tokenized Neodymium
          </h2>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto text-center mb-14">
            Industrial buyers have always procured neodymium through private contracts, broker networks, and magnet-tier NDAs—opaque on price,
            slow on settlement, fragile on geopolitics. Tokenization is the first open-market architecture aligned with how motors and turbines
            actually consume oxide.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 border border-gray-200">
              <span className="text-xs font-bold tracking-widest text-sky-800">INDUSTRIAL CONSUMERS</span>
              <h3 className="text-xl font-semibold text-gray-900 mt-3 mb-4">The OEMs and Tier Ones That Need Magnets, Not Tickers</h3>
              <p className="text-sm text-gray-600 leading-relaxed mb-4">
                These buyers run on bill-of-materials reality: kilograms per motor, tonnes per platform. Tokenized neodymium gives them{' '}
                <Link href="/products" className="text-sky-800 font-medium underline underline-offset-2">
                  supply continuity
                </Link>
                , transparent pricing hooks, and physical redemption without the latency of traditional rare-earth brokerage.
              </p>
              <p className="text-xs text-gray-500 leading-relaxed">
                EV and e-mobility OEMs, wind turbine manufacturers, industrial motor and pump producers, robotics integrators, defense
                contractors, HDD and precision motion suppliers, magnet alloy plants.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 border border-gray-200">
              <span className="text-xs font-bold tracking-widest text-blue-800">INDUSTRIAL SUPPLY CHAIN INVESTORS</span>
              <h3 className="text-xl font-semibold text-gray-900 mt-3 mb-4">Exposure to Electrification Without Single-Stock Beta</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Funds already own OEM equities and battery names; neodymium is the physical layer beneath many of those curves. Tokenized oxide
                offers direct exposure to NdFeB demand drivers—fractional entry, auditable reserves, no single-factory operating leverage.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 border border-gray-200">
              <span className="text-xs font-bold tracking-widest text-purple-800">ON-CHAIN INFRASTRUCTURE</span>
              <h3 className="text-xl font-semibold text-gray-900 mt-3 mb-4">Collateral Rooted in Motors, Not Memes</h3>
              <p className="text-sm text-gray-600 leading-relaxed mb-4">
                For treasuries and protocols, neodymium links digital assets to electrification physics—high real-economy offtake, multi-sector
                demand, programmatic custody and margin tools suited to volatile commodity regimes.
              </p>
              <p className="text-xs text-gray-500 leading-relaxed">
                Crypto funds, protocol treasuries, DeFi lending markets, DAOs with energy-transition mandates, structured RWA allocators.
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
            Instant Settlement for Tokenized Neodymium. Fewer Rare-Earth Intermediaries. Less Friction.
          </h2>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-4xl mb-12">
            NdFeB supply chains still behave like 20th-century industrial procurement: long chains of traders, alloy brokers, and bank rails
            layered on top of physical oxide flows. For buyers who need tonnes to keep a motor line running, that means delay, opacity, and
            counterparty stack risk. Toto Finance compresses the path from verified oxide to wallet—T+0 when the trade clears on-chain.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="bg-gray-50 rounded-2xl p-6 md:p-8 border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-1">The Old Way</h3>
              <p className="text-sm text-gray-500 mb-6">Multiple intermediaries. Weeks to settle. Private pricing.</p>
              <div className="space-y-3">
                {[
                  'Mining Company / Ore Producer',
                  'Rare Earth Processing Facility',
                  'International Rare Earth Trader',
                  'Magnet Alloy Manufacturer',
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
                Settlement: T+5 to T+30 (typical industrial rare earth transactions)
              </p>
            </div>

            <div className="bg-gray-900 text-white rounded-2xl p-6 md:p-8">
              <h3 className="text-lg font-semibold mb-1">The Toto Finance Way</h3>
              <p className="text-sm text-gray-400 mb-6">Source ↔ Buyer. Direct. Instant.</p>
              <div className="space-y-3">
                {['Mining / Processing / Alloy Partner', 'Toto Finance Platform', 'Buyer'].map((step, i) => (
                  <div key={step} className="flex items-center gap-3">
                    <div className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0 text-xs font-semibold">
                      {i + 1}
                    </div>
                    <span className="text-sm">
                      {i === 1 ? (
                        <Link href="/products" className="underline underline-offset-2 hover:text-sky-200">
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
                Blockchain rails let qualified processors and buyers interact with proof-backed inventory and stablecoin settlement—shrinking the
                time between price agreement and cleared funds from weeks to minutes.
              </p>
            </div>
          </div>

          <h3 className="text-2xl font-medium text-gray-900 mb-6 text-center">Settlement at the Speed of an Electric Motor</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                name: 'USDC',
                issuer: 'Circle',
                detail:
                  'Fully reserved, attested dollar stablecoin suited to institutional procurement: auditable reserves, deep DeFi integrations, and compliance rails that magnet-tier buyers expect when moving seven-figure oxide notionals on-chain.',
              },
              {
                name: 'USDT',
                issuer: 'Tether',
                detail:
                  'Global liquidity layer for industrial-size tickets—when settlement needs depth more than headline APY, USDT is the workhorse stablecoin for cross-border rare-earth-style settlement velocity.',
              },
              {
                name: 'USAT',
                issuer: 'Tether (US Regulated)',
                detail:
                  'US-regulated stablecoin option for domestic entities under evolving federal frameworks—aligned with treasuries and manufacturers that must keep neodymium procurement inside U.S. compliance perimeters.',
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
            DeFi Infrastructure for Tokenized Neodymium
          </h2>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-4xl mb-12">
            Neodymium powers one of the largest structural trades of the decade—electrification—yet it has never had ETF-grade liquidity,
            exchange-listed futures, or composable on-chain collateral markets at retail scale. Tokenization is how that gap closes: the same
            oxide that enters NdFeB becomes a programmable financial primitive.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            <div className="bg-white rounded-2xl p-6 md:p-8 border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">The First Open Neodymium Market</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                DEX pools and on-chain order flow let industrial buyers, commodity traders, and individual holders share the same price
                discovery surface—something phone-and-fax rare earth markets never provided.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-6 md:p-8 border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Yield from Real Magnet Demand, Not Emissions Games</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Lend oxide-backed tokens to counterparties hedging EV launches, turbine backlogs, or policy risk—rates anchored to physical
                offtake curves, not purely inflationary token subsidies.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-6 md:p-8 border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Capital Access Without Dumping Strategic Inventory</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                OEMs and traders holding vaulted neodymium can{' '}
                <Link href="/products" className="text-sky-800 font-medium underline underline-offset-2">
                  borrow against neodymium
                </Link>{' '}
                positions, drawing stablecoins while maintaining optionality for physical drawdowns—critical when working capital and magnet
                buffers pull in opposite directions.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-6 md:p-8 border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Programmable Risk for Policy-Shocked Markets</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Export rules and quota chatter move neodymium availability faster than geology. On-chain margining, liquidation logic, and oracle
                feeds automate risk responses that phone-based brokerage cannot match at industrial throughput.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 md:p-8 border border-gray-200">
            <h3 className="text-xl font-medium text-gray-900 mb-6 text-center">
              From Refined Oxide to Global Liquidity: The Neodymium Token Path
            </h3>
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              {[
                'Refined: Nd₂O₃ verified at separation or alloy partner, vaulted, bound 1:1 to on-chain supply proofs',
                'Acquired: Purchased with USDC, USDT, or USAT against transparent reference pricing',
                'Positioned: Held, traded, or bridged to the chains your treasury already uses',
                'Activated: Deployed into lending, liquidity, or hedge strategies with programmatic risk controls',
                'Delivered: Redeemed into physical oxide / magnet-grade channel for motors, turbines, and industrial magnets',
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
            Tokenized Neodymium vs Every Other Way to Get Exposure
          </h2>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-4xl mb-12">
            Rare earth ETFs dilute Nd with dozens of other elements. Mining equities embed geology, permitting, and management risk unrelated
            to short-term oxide pricing. Physical oxide at tonne scale demands credit lines, freight desks, and trader relationships. Toto
            Finance is the wedge between those imperfect proxies and the actual material inside NdFeB.
          </p>

          <div
            className="overflow-x-auto rounded-2xl border border-gray-200"
            aria-label="Comparison of tokenized neodymium versus ETFs, physical procurement, and mining stocks"
          >
            <table className="w-full text-sm text-left min-w-[720px]">
              <thead>
                <tr className="bg-gray-900 text-white">
                  <th className="px-4 md:px-6 py-4 font-medium">Feature</th>
                  <th className="px-4 md:px-6 py-4 font-medium">Rare Earth ETFs</th>
                  <th className="px-4 md:px-6 py-4 font-medium bg-white/10">Toto Finance</th>
                  <th className="px-4 md:px-6 py-4 font-medium">Physical Neodymium</th>
                  <th className="px-4 md:px-6 py-4 font-medium">Mining Stocks</th>
                </tr>
              </thead>
              <tbody className="bg-white">
                {[
                  ['Neodymium-Specific', 'No (basket)', 'Yes (1:1 oxide)', 'Yes', 'No (equity)'],
                  ['Trading Hours', 'Market hours only', '24/7/365', 'Private negotiation', 'Market hours only'],
                  ['Settlement', 'T+2', 'T+0 (Instant)', 'Weeks to months', 'T+2'],
                  ['Settlement Currency', 'Fiat (via broker)', 'USDC, USDT, USAT', 'Wire transfer', 'Fiat (via broker)'],
                  ['Min. Investment', '1 share (~$50+)', 'Fractional (from $1)', '$25,000+ (tonne scale)', '1 share (~$5–$20+)'],
                  ['Physical Redemption', 'No', 'Yes', 'Yes', 'No'],
                  ['On-Chain Transparency', 'No', 'Yes', 'No', 'No'],
                  ['DeFi Yield / Loans', 'No', 'Yes', 'No', 'No'],
                  ['Price Transparency', 'NAV-based', 'Real-time oracle + on-chain prints', 'Processors + Traders', 'Equity beta only'],
                  ['Intermediaries', 'Broker + Clearing', 'None (P2P)', 'Processors + Traders', 'Broker'],
                ].map((row, i) => (
                  <tr key={row[0]} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="px-4 md:px-6 py-3 font-medium text-gray-900">{row[0]}</td>
                    <td className="px-4 md:px-6 py-3 text-gray-600">{row[1]}</td>
                    <td className="px-4 md:px-6 py-3 text-gray-900 font-medium bg-sky-50/50">{row[2]}</td>
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
            Financial Infrastructure for the Magnet Metal Behind Electrification
          </h2>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-4xl mb-12">
            Neodymium moved through private contracts long before EVs went mainstream. The Toto Finance stack—proof-of-reserves, instant
            stablecoin settlement, compliance-aware token permissions, and multi-chain deployment—exists because electrification now requires
            financial rails as mature as the magnets themselves.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                t: 'Physical Backing with Magnet-Grade Redemption',
                b: 'Tokens map to vaulted Nd₂O₃ with audits and attested custody—redeemable into physical channels that feed NdFeB production, not a synthetic index.',
              },
              {
                t: 'Price Discovery for Opaque Rare Earth Markets',
                b: 'On-chain trades + oracle references replace trader-only quotes—critical when a single policy fax moves “market” prices overnight.',
              },
              {
                t: 'Instant Settlement Across Borders',
                b: 'Stablecoin settlement collapses correspondent-bank delays that routinely strand oxide cargoes in transit financing queues.',
              },
              {
                t: 'Compliance for Strategic Materials',
                b: 'Programmable allowlists, jurisdiction flags, and travel rules embed directly in token contracts—so industrial buyers stay inside export and end-use regimes by construction.',
              },
              {
                t: 'Lending, Collateral, and Hedging Primitives',
                b: 'Borrow, lend, and hedge neodymium exposure with smart-contract automation instead of bilateral ISDA-style improvisation.',
              },
              {
                t: 'Multi-Chain Presence',
                b: 'Deploy where your treasury already lives—Ethereum, Polygon, Solana, Cardano, and XRP Ledger integrations match institutional and DeFi workflows alike.',
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
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-gray-900 leading-tight mb-6">Tokenized Neodymium FAQ</h2>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-12">
            Direct answers on 1:1 neodymium oxide, In-Ground delivery, NdFeB demand, instant settlement, and early access.
          </p>
          <NeodymiumFAQ faqs={faqData} />
        </div>
      </section>

      {/* FOLD 13: Final CTA */}
      <section className="relative bg-gradient-to-br from-sky-900 via-sky-800 to-gray-900 text-white px-4 sm:px-6 md:px-8 lg:px-12 py-20 md:py-32 overflow-hidden">
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
            backgroundSize: '40px 40px',
          }}
        />
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <p className="text-xs uppercase tracking-widest text-sky-200/80 font-semibold mb-3">THIS IS WHY</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light leading-tight mb-8">
            Electrification Runs on NdFeB. NdFeB Runs on Neodymium. Supply Is Tens of Thousands of Tonnes Short.
          </h2>
          <p className="text-base md:text-lg text-gray-200 leading-relaxed mb-10">
            Every EV motor, every multi-megawatt turbine, every robotics line is competing for the same separated oxide. Demand curves point to
            ~95 kt by the mid-2030s while supply languishes near ~50 kt without massive new separation and magnet investment—leaving a ~45,000-tonne
            hole that widens with every factory announcement. Toto Finance is building the transparent, instant-settlement market neodymium has
            never had.
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
