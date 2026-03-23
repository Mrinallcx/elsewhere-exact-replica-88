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
const ScandiumTickerBar = dynamicImport(
  () => import('../components/client/ScandiumTickerBar').then((mod) => ({ default: mod.ScandiumTickerBar }))
);
const ScandiumFAQ = dynamicImport(
  () => import('../components/client/SilverFAQ').then((mod) => ({ default: mod.SilverFAQ }))
);

const PAGE_URL = 'https://totofinance.co/tokenized-scandium';
const PAGE_TITLE = 'Tokenized Scandium | Digital Rare Earth Backed by Physical Assets | Toto Finance';
const PAGE_DESCRIPTION =
  'Add 0.15% scandium to aluminum and strength triples while weight drops 20%. Toto Finance brings the aerospace alloy revolution on-chain from 1:1 redeemable oxide tokens to In-Ground future delivery contracts. The element every aircraft manufacturer wants but cannot source at scale. Instant stablecoin settlement. DeFi secondary markets.';

const breadcrumbItems = [
  { name: 'Home', item: 'https://totofinance.co' },
  { name: 'Products', item: 'https://totofinance.co/products' },
  { name: 'Rare Earth Minerals', item: 'https://totofinance.co/rare-earth-mineral' },
  { name: 'Tokenized Scandium', item: PAGE_URL },
];

const faqData = [
  {
    question: 'What is tokenized scandium?',
    answer:
      'A blockchain-based digital asset backed 1:1 by refined scandium oxide (Sc₂O₃) in insured, audited vaults. High-purity grade (99.9%+ Sc₂O₃), ready for aluminum-scandium master alloy production, solid oxide fuel cell electrolyte manufacturing, and additive manufacturing powder atomization. Redeemable for physical scandium on demand. Toto Finance is building the infrastructure to bring scandium on-chain as an independent asset with instant stablecoin settlement and DeFi secondary markets.',
  },
  {
    question: 'What is In-Ground Scandium?',
    answer:
      'A tokenized future delivery contract for scandium still contained in ore bodies at certified mining operations where byproduct recovery infrastructure is being developed. Short-term (1 to 12 months) for operations with active recovery facilities, long-term (1 to 6 years) for earlier-stage deposits. Built for aerospace OEMs, fuel cell manufacturers, aluminum producers, sovereign funds, and institutional investors positioning for the structural scandium deficit in a market where total global production is below 25 tonnes annually.',
  },
  {
    question: 'Where does the scandium come from?',
    answer:
      'Directly from mining companies and scandium recovery facilities across China (60% of production from ionic clay and TiO₂ waste streams), Russia and Kazakhstan (uranium tailings and apatite byproduct), Australia (nickel laterite deposits in New South Wales and Queensland), North America (rare earth and uranium tailings recovery in Alaska, Idaho, Nevada, and Quebec), and the Philippines/Southeast Asia (nickel laterite processing). No middlemen. No intermediary dealers. Secured at the point of byproduct recovery. More on partnerships: https://totofinance.co/about',
  },
  {
    question: 'Who buys tokenized scandium?',
    answer:
      'Three groups: (1) Aerospace and alloy manufacturers, including aircraft OEMs, Al-Sc master alloy producers, solid oxide fuel cell developers, EV structural engineers, 3D printing powder companies, defense contractors, sporting goods manufacturers, and marine alloy producers. (2) Materials scarcity investors, including funds and allocators seeking exposure to an element whose market size reflects production constraints rather than demand limits, with the most extreme demand-suppression-by-scarcity dynamic in the commodities market. (3) On-chain participants, including crypto funds, protocol treasuries, and DeFi protocols seeking collateral backed by a material at the pre-adoption inflection point.',
  },
  {
    question: 'How does instant settlement work?',
    answer:
      'T+0 settlement using USDC, USDT, or USAT. Traditional scandium procurement operates through specialist commodity dealers with settlement measured in one to two weeks, bilateral pricing, and banking intermediaries. Toto Finance creates a direct settlement mechanism connecting scandium sources with buyers on-chain, eliminating every dealer and intermediary in the traditional specialist materials supply chain.',
  },
  {
    question: 'Can I trade tokenized scandium on DeFi platforms?',
    answer:
      'Yes. After acquisition, trade on decentralized exchanges globally, generate yield by lending to counterparties seeking specialty materials exposure, or use scandium tokens as collateral for stablecoin loans. Scandium has never existed as a tradeable financial asset. No ETF, no futures contract, no exchange listing has ever referenced it. Tokenization creates both the asset class and its market simultaneously.',
  },
  {
    question: 'Why is scandium called the "magic ingredient" for aluminum alloys?',
    answer:
      'Adding just 0.1 to 0.15% scandium to aluminum increases tensile strength by 300%, reduces weight by 20%, improves corrosion resistance, and maintains full weldability. No other alloying element in any metallurgical system delivers comparable performance transformation at such low concentration. These properties have been known for decades, proven in MiG-29 fighter jets and Olympic sporting equipment, and validated by Boeing and Airbus in extensive testing programs. Adoption at industrial scale has been prevented solely by the 25 tonnes per year that the world produces.',
  },
  {
    question: 'What is the scandium price forecast?',
    answer:
      'Roskill forecasts $5,500/kg in 2026. Critical Minerals Institute projects prices exceeding $6,000/kg by 2027 as aerospace qualification programs advance, fuel cell commercialization scales, and EV lightweighting programs intensify while supply remains constrained by the absence of dedicated scandium mining operations. The structural deficit is self-reinforcing: too little supply to enable adoption decisions that would justify the mining investment to create supply.',
  },
  {
    question: 'How do I get early access?',
    answer:
      'Visit https://totofinance.co/. Aerospace OEMs, aluminum producers, fuel cell manufacturers, defense contractors, institutional investors, mining partners, and industrial buyers can reach out directly for partnership and early allocation discussions.',
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
        'Tokenized commodity platform offering 1:1 asset-backed scandium oxide tokens and In-Ground Scandium future delivery contracts with instant stablecoin settlement.',
    },
    {
      '@type': 'Product',
      name: '1:1 Scandium Oxide Token',
      description:
        'Digital asset backed 1:1 by refined scandium oxide (Sc₂O₃) in insured custody, redeemable for physical delivery. Category: Tokenized Commodity.',
      category: 'Tokenized Commodity',
      brand: { '@type': 'Brand', name: 'Toto Finance' },
      url: PAGE_URL,
    },
    {
      '@type': 'Product',
      name: 'In-Ground Scandium',
      description:
        'Tokenized future delivery contract for scandium in ore bodies at certified mining operations. Category: Commodity Future Delivery Contract.',
      category: 'Commodity Future Delivery Contract',
      brand: { '@type': 'Brand', name: 'Toto Finance' },
      url: PAGE_URL,
    },
  ],
};

export default function TokenizedScandiumPage() {
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
      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-gray-900 text-white px-4 sm:px-6 md:px-8 lg:px-12 pt-28 md:pt-36 pb-16 md:pb-24 overflow-hidden">
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
            backgroundSize: '40px 40px',
          }}
        />
        <div className="relative z-10 max-w-7xl mx-auto text-left">
          <h1 className="text-sm md:text-base font-semibold tracking-[0.2em] uppercase text-slate-200/90 mb-4">
            Tokenized Scandium by Toto Finance
          </h1>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light leading-tight mb-8">
            0.15% Changes Everything. Triple the Strength. 20% Less Weight. And the World Produces Less Than 25 Tonnes a Year.
          </h2>
          <p className="text-base md:text-lg text-gray-200 leading-relaxed mb-10 max-w-3xl text-left">
            There is no dedicated scandium mine anywhere on Earth. Every gram of scandium produced globally is recovered as a byproduct of someone
            else&apos;s mining operation: uranium tailings, nickel laterite processing, titanium dioxide waste streams. Total annual output sits below
            25 tonnes, less than the empty weight of a single commercial aircraft. Yet this element, added at just 0.1 to 0.15% concentration,
            transforms ordinary aluminum into a superalloy with triple the tensile strength, 20% less weight, superior corrosion resistance, and full
            weldability. Every aerospace manufacturer on Earth wants it. Every solid oxide fuel cell developer needs it. Every EV lightweighting program
            could use it. None of them can source it at scale, because there is not enough scandium on the market to satisfy even a fraction of latent
            demand.{' '}
            <Link href="/" className="text-white underline underline-offset-2 hover:text-slate-200">
              Toto Finance
            </Link>{' '}
            is building the infrastructure to bring the most transformative alloying element in metallurgy on-chain for the first time, from 1:1
            redeemable refined oxide to In-Ground future delivery contracts, settled instantly in stablecoins with full DeFi secondary market access.
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
              Why Scandium Matters
            </a>
          </div>
        </div>
      </section>

      <ScandiumTickerBar />

      {/* FOLD 2: Crisis */}
      <section id="crisis" className="scroll-mt-24 px-4 sm:px-6 md:px-8 lg:px-12 py-20 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto">
          <p className="text-xs uppercase tracking-widest text-gray-400 font-semibold mb-3">THE WHY</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-gray-900 leading-tight mb-6">
            The Most Powerful Alloying Element in Metallurgy Has No Mine, No Market, and No Supply Chain of Its Own.
          </h2>
          <div className="text-base md:text-lg text-gray-600 leading-relaxed max-w-4xl mb-12 space-y-4">
            <p>
              We chose scandium because it represents the most extraordinary paradox in materials science. An element capable of tripling the strength
              of aluminum while reducing weight by 20%, proven across decades of aerospace and metallurgical research, validated by every major aircraft
              manufacturer, and documented in thousands of peer-reviewed studies. And yet it remains functionally unavailable at industrial scale
              because no one has ever built a mine to produce it.
            </p>
            <p>
              Scandium does not have a supply chain. It has a collection of byproduct recovery operations scattered across uranium tailings in
              Kazakhstan, nickel laterite processing in Australia, titanium dioxide waste streams in China, and apatite residues in Russia. Total global
              output: approximately 25 tonnes per year. Less than a single shipping container. The reason aerospace has not adopted scandium-aluminum
              alloys at scale is not that the technology does not work. It is that the material does not exist in sufficient quantity to commit to a
              production program. Airbus has tested scandium alloys extensively. Boeing has evaluated the weight savings. Both have concluded the
              metallurgy is transformative. Neither can build a supply chain for an element that has no primary source of production anywhere on Earth.
              China controls 60% of current output. Russia and Kazakhstan account for most of the remainder. No allied nation produces meaningful
              quantities. And the 45-tonne supply gap projected for 2030 represents a 47% shortfall against demand that is itself suppressed by the very
              scarcity preventing adoption.
            </p>
            <p className="font-medium text-gray-900">That is why we exist.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gray-50 rounded-2xl p-6 md:p-8 border border-gray-100">
              <p className="text-4xl md:text-5xl font-light text-gray-900 mb-3">18 tonnes</p>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">A Supply Chain That Does Not Exist</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Roskill forecasts an 18-tonne scandium deficit in 2025, a figure that understates the true shortfall because demand itself is suppressed
                by supply scarcity. Global primary scandium production is approximately 25 tonnes annually, all of it recovered as a byproduct of other
                mining operations. No dedicated scandium mine exists anywhere on Earth. The entire global supply of the most transformative alloying
                element in metallurgy depends on the production decisions of uranium, nickel, and titanium mining companies for whom scandium is a
                marginal revenue line, not a primary business objective.
              </p>
            </div>
            <div className="bg-gray-50 rounded-2xl p-6 md:p-8 border border-gray-100">
              <p className="text-4xl md:text-5xl font-light text-gray-900 mb-3">0.15%</p>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">A Trace Amount That Rewrites the Rules of Metallurgy</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Adding just 0.1 to 0.15% scandium to aluminum alloys increases tensile strength by 300%, reduces weight by 20%, improves corrosion
                resistance, and maintains full weldability. No other alloying element in any metallurgical system delivers this magnitude of performance
                transformation at such low concentration. These properties have been known for decades, tested by every major aerospace manufacturer, and
                proven in applications ranging from MiG-29 fighter jets to Olympic bicycle frames. The only barrier to global adoption is the 25 tonnes
                per year that the world produces.
              </p>
            </div>
            <div className="bg-gray-50 rounded-2xl p-6 md:p-8 border border-gray-100">
              <p className="text-4xl md:text-5xl font-light text-gray-900 mb-3">45 tonnes</p>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">A Deficit That Prevents the Revolution It Would Create</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Global scandium demand is projected to reach 95 tonnes per year by 2030, while supply from existing and planned operations will deliver
                approximately 50 tonnes. The 45-tonne gap represents a 47% shortfall. But this projection assumes demand remains constrained by supply
                scarcity. If scandium were available at scale, demand from aerospace lightweighting alone would consume hundreds of tonnes annually. The
                deficit is not a market failure. It is a self-reinforcing cycle: too little supply to commit to adoption, too little adoption to justify
                dedicated mining investment.
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
            Understanding Why Scandium Transforms Every Material It Touches
          </h2>
          <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto text-center mb-14">
            The lightest rare earth element. The most powerful aluminum alloying agent ever discovered. Recovered only as a byproduct, produced in
            quantities smaller than a single aircraft&apos;s weight, and capable of revolutionizing industries that cannot source it.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
              <div
                className="rounded-xl bg-gradient-to-br from-slate-900 to-slate-950 text-white p-6 mb-4 font-mono text-sm"
                role="img"
                aria-label="Scandium element card showing Sc symbol, atomic number 21, density, melting point, and classification as a lightweight rare earth element for aerospace alloy applications"
              >
                <p className="text-3xl font-light mb-1">Sc</p>
                <ul className="space-y-1 text-slate-200/90">
                  <li>Atomic Number: 21</li>
                  <li>Density: 2,990 kg/m³</li>
                  <li>Melting Point: 1,541°C</li>
                  <li>Alloy Impact: 300% Strength at 0.15%</li>
                  <li>Classification: Lightest Rare Earth Element</li>
                </ul>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">The Element</h3>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
              <div
                className="rounded-xl bg-gradient-to-br from-slate-700/80 to-slate-900 min-h-[160px] mb-4"
                role="img"
                aria-label="Nickel laterite and uranium mining operations where scandium is recovered as a byproduct from tailings and waste streams"
              />
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Where It Comes From</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Scandium has no primary mine. It is recovered as a byproduct from uranium mining tailings in Kazakhstan and Russia, nickel laterite
                processing in Australia and the Philippines, titanium dioxide waste streams in China, and apatite residue processing in the Russian
                Arctic. China controls approximately 60% of global production from ionic clay deposits and TiO₂ processing. Total worldwide output sits
                below 25 tonnes annually, making scandium&apos;s supply entirely dependent on the production economics of other industries&apos; primary
                commodities.
              </p>
              <p className="text-xs text-gray-500 mt-3 font-mono">
                Ore Byproduct → Solvent Extraction → Ion Exchange Purification → Precipitation → Calcination → 99.9% Pure Scandium Oxide (Sc₂O₃)
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
              <div
                className="rounded-xl bg-gradient-to-br from-orange-950/60 to-slate-900 min-h-[160px] mb-4"
                role="img"
                aria-label="Scandium-aluminum alloy microstructure showing Al₃Sc precipitates that deliver 300% strength increase and grain refinement in aerospace-grade aluminum"
              />
              <h3 className="text-lg font-semibold text-gray-900 mb-3">The Transformation That 0.15% Delivers</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                When added to aluminum at concentrations of just 0.1 to 0.15%, scandium forms nanoscale Al₃Sc precipitates that refine grain structure,
                triple tensile strength, reduce weight by 20%, eliminate the need for post-weld heat treatment, and dramatically improve corrosion
                resistance. Scandium is also the critical electrolyte stabilizer in solid oxide fuel cells (SOFCs), where scandium-stabilized zirconia
                (ScSZ) enables operation at 650°C instead of 800°C, transforming fuel cell economics and durability. No other element in the periodic
                table delivers comparable performance transformation in either application.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
              <div
                className="rounded-xl bg-gradient-to-br from-slate-600 to-slate-900 min-h-[160px] mb-4"
                role="img"
                aria-label="Applications of scandium including aluminum-scandium aerospace alloys, solid oxide fuel cells, 3D printed metal components, and high-performance sporting equipment"
              />
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Where It Goes</h3>
              <p className="text-sm text-gray-600 leading-relaxed mb-4">
                Aluminum-scandium master alloys for aerospace structures and aircraft components, solid oxide fuel cell electrolytes (ScSZ), 3D printed
                metal components for aerospace and automotive, EV structural lightweighting, MiG-29 and Su-27 fighter jet airframes, high-performance
                bicycle frames and baseball bats, marine and shipbuilding alloys, metal halide lamps for stadium and film lighting, laser crystals and
                optical components.
              </p>
              <p className="text-sm font-semibold text-slate-900 bg-slate-100 rounded-lg px-3 py-2">
                $180M+ global scandium market (demand suppressed by supply scarcity, true addressable market is multiples larger)
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
            Aerospace, Fuel Cells, EVs, and 3D Printing All Need Scandium. The World Produces Enough for None of Them.
          </h2>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-4xl mb-12">
            Scandium is not facing a demand problem. It is facing an existence problem. The industries that would consume scandium at scale, aerospace
            lightweighting, solid oxide fuel cells, electric vehicle weight reduction, additive manufacturing, have validated the metallurgy, proven the
            economics, and concluded the performance gains are transformative. They have not adopted scandium because there is not enough of it on Earth
            to support a single manufacturer&apos;s production commitment. The 25 tonnes produced annually would be consumed by a single aerospace
            OEM&apos;s evaluation program. The result is a market defined not by how much scandium is consumed but by how much demand goes permanently
            unsatisfied because the supply to fulfill it has never been developed.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <div className="bg-gray-50 rounded-2xl p-6 md:p-8 border border-gray-100">
              <h3 className="text-xl font-medium text-gray-900 mb-3">
                Aerospace Weight Reduction: $2 Million in Annual Fuel Savings per Aircraft
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Aluminum-scandium alloys enable 20% weight reduction in aircraft structures while tripling tensile strength and maintaining full
                weldability, eliminating the costly post-weld heat treatment required by conventional aerospace aluminum. A single Boeing 787 using
                scandium alloys throughout its airframe would save approximately 15,000 kilograms of structural weight, translating to $2 million in
                annual fuel cost reduction over a 25-year service life. Airbus has conducted extensive testing programs. Both major OEMs have confirmed
                the metallurgical advantages. Neither can commit to production adoption because the global scandium market cannot supply a single aircraft
                manufacturer&apos;s annual alloy consumption, let alone the entire industry simultaneously.
              </p>
            </div>
            <div className="bg-gray-50 rounded-2xl p-6 md:p-8 border border-gray-100">
              <h3 className="text-xl font-medium text-gray-900 mb-3">
                Solid Oxide Fuel Cells: The Clean Energy Application That Consumes Scandium by the Tonne
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Scandium-stabilized zirconia (ScSZ) electrolytes enable solid oxide fuel cells to operate at 650°C instead of the 800°C required by
                yttria-stabilized alternatives, dramatically improving efficiency, extending stack lifetime, and reducing balance-of-plant costs. The
                SOFC sector consumes an estimated 12 tonnes of scandium annually for distributed power generation, industrial combined heat and power, and
                data center backup systems. Demand is growing at 35% compound annual growth rate as fuel cell commercialization accelerates across
                hydrogen economy applications.
              </p>
            </div>
            <div className="bg-gray-50 rounded-2xl p-6 md:p-8 border border-gray-100">
              <h3 className="text-xl font-medium text-gray-900 mb-3">
                Electric Vehicle Lightweighting: The Range Equation Scandium Solves
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Electric vehicles face a fundamental engineering contradiction: heavy battery packs demand lightweight structures to maintain range.
                Scandium-aluminum alloys in structural body components, subframes, and crash structures can reduce vehicle weight by 100 to 150
                kilograms, extending driving range by 15 to 20% without increasing battery capacity. Tesla, Rivian, and Chinese EV manufacturers have
                tested scandium alloys for production applications. Mass adoption remains impossible because global scandium production would be
                exhausted by a single high-volume EV platform&apos;s annual requirement.
              </p>
            </div>
            <div className="bg-gray-50 rounded-2xl p-6 md:p-8 border border-gray-100">
              <h3 className="text-xl font-medium text-gray-900 mb-3">
                3D Printed Metal Components: Scandium Unlocks Geometries Impossible in Traditional Manufacturing
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Aluminum-scandium alloy powders (Scalmalloy and proprietary variants) enable additive manufacturing of aerospace and automotive
                components with complex internal geometries, optimized load paths, and consolidated assemblies impossible to achieve through casting or
                machining. The metal 3D printing sector consumes approximately 8 tonnes of scandium annually, growing at 28% compound annual growth rate
                as additive manufacturing transitions from prototyping to series production for flight-critical and structural components.
              </p>
            </div>
          </div>

          <div className="bg-gray-50 rounded-2xl p-6 md:p-8 border border-gray-200">
            <h3 className="text-xl font-medium text-gray-900 mb-2">Demand Suppressed by Scarcity, Not by Lack of Need</h3>
            <p className="text-sm text-gray-500 mb-6">
              Bar chart showing global scandium demand rising from 38 tonnes in 2025 to 95 tonnes by 2030, with supply reaching approximately 50 tonnes,
              creating a 45-tonne annual deficit representing 47% of projected demand.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-6">
              {[
                { year: '2025', val: '38 t', note: 'Demand' },
                { year: '2028', val: '62 t', note: 'Demand' },
                { year: '2030', val: '95 t', note: 'Demand' },
                { year: '2035', val: '160 t', note: 'Roskill projection' },
                { year: '2030 Supply', val: '~50 t', note: 'Gap: 45+ t (47%)' },
              ].map((d, i) => (
                <div
                  key={d.year}
                  className={`text-center p-4 rounded-xl ${i === 4 ? 'bg-red-50 border border-red-100' : i === 3 ? 'bg-slate-100' : 'bg-white border border-gray-100'}`}
                >
                  <p className={`text-sm mb-2 ${i === 4 ? 'text-red-800 font-medium' : 'text-gray-500'}`}>{d.year}</p>
                  <p className="text-sm font-semibold text-gray-900">{d.val}</p>
                  <p className="text-xs text-gray-500 mt-1">{d.note}</p>
                </div>
              ))}
            </div>
            <p className="text-xs text-gray-400">Sources: Roskill, Critical Minerals Institute, USGS, Scandium International Mining Corp.</p>
          </div>
        </div>
      </section>

      {/* FOLD 5: TWO PRODUCTS */}
      <section id="products" className="scroll-mt-24 px-4 sm:px-6 md:px-8 lg:px-12 py-20 md:py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <p className="text-xs uppercase tracking-widest text-gray-400 font-semibold mb-3 text-center">TWO PRODUCTS</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-gray-900 leading-tight mb-6 text-center">
            Two Ways to Own Tokenized Scandium
          </h2>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto text-center mb-14">
            Everything we believe about opening access to the alloying element that could transform aerospace, clean energy, and electric mobility if
            only the world produced enough of it comes to life in two products. One for scandium oxide that has already been recovered, purified, and
            vaulted. One for scandium still locked in ore bodies where byproduct recovery has not yet begun. Both backed by physical material. Both
            settleable in stablecoins. Both built to give the aerospace OEMs, fuel cell developers, EV manufacturers, and investors who understand that
            scandium&apos;s market size is not a reflection of its potential but a measurement of its scarcity a way to secure the element that changes
            everything it touches.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
            <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm">
              <span className="inline-block text-xs font-bold tracking-wider text-slate-800 bg-slate-200 px-3 py-1 rounded-full mb-4">
                ASSET-BACKED TOKEN
              </span>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                <Link href="/products" className="hover:text-slate-600 underline-offset-2 hover:underline">
                  1:1 Scandium Oxide Token
                </Link>
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed mb-6">
                Digital ownership of physical scandium. Every token is backed 1:1 by refined scandium oxide (Sc₂O₃) in insured, audited vault
                facilities. High-purity grade (99.9%+ Sc₂O₃), ready for aluminum-scandium master alloy production, solid oxide fuel cell electrolyte
                manufacturing, and additive manufacturing powder atomization. Redeemable for physical scandium on demand. Not a derivative. Not a basket
                exposure. Not a mining equity proxy. The actual oxide.
              </p>
              <ul className="text-sm text-gray-700 space-y-2 list-disc pl-5">
                <li>Backed 1:1 by refined scandium oxide (99.9%+ Sc₂O₃ purity grade)</li>
                <li>Always redeemable for physical scandium delivery on demand</li>
                <li>Stored in insured, independently audited vault and warehouse facilities</li>
                <li>On-chain proof-of-reserves with real-time oracle feeds</li>
                <li>Fractional ownership, from $1, tradeable 24/7 with instant stablecoin settlement</li>
                <li>
                  Ready for industrial end-use: Al-Sc master alloys, solid oxide fuel cells, Scalmalloy 3D printing powder, aerospace structural
                  components, EV lightweighting alloys
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm">
              <span className="inline-block text-xs font-bold tracking-wider text-slate-800 bg-slate-200 px-3 py-1 rounded-full mb-4">
                FUTURE DELIVERY CONTRACT
              </span>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                <Link href="/products" className="hover:text-slate-600 underline-offset-2 hover:underline">
                  In-Ground Scandium
                </Link>
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed mb-6">
                Forward positions in scandium that has not yet been recovered. Tokenized future delivery contracts backed by proven scandium content in
                ore bodies at certified mining operations where byproduct recovery infrastructure is being developed. For organizations that understand
                that scandium&apos;s current market size reflects supply scarcity, not demand reality, and that the first operators to secure scandium
                positions ahead of supply infrastructure development will hold an element whose demand is artificially compressed by the very shortage
                that makes early positioning valuable.
              </p>
              <ul className="text-sm text-gray-700 space-y-2 list-disc pl-5">
                <li>Backed by proven scandium content in ore reserves at partner mining sites (nickel laterite, rare earth, uranium tailings)</li>
                <li>Pre-production pricing reflecting byproduct recovery economics and demand suppression dynamics</li>
                <li>On-chain reserve tracking with geological data transparency</li>
                <li>Physical delivery or settlement at maturity</li>
                <li>Verified reserves with third-party geological audits</li>
                <li>
                  Built for aerospace OEMs, fuel cell manufacturers, aluminum producers, sovereign funds, and institutional allocators
                </li>
              </ul>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-slate-900/10 border border-slate-200 rounded-2xl p-6 md:p-8">
              <p className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-2">SHORT-TERM DELIVERY</p>
              <p className="text-lg font-semibold text-gray-900 mb-3">1 to 12 Months</p>
              <p className="text-sm text-gray-600 leading-relaxed">
                Near-term scandium delivery contracts tied to active mining operations with scandium recovery facilities approaching or in production.
                For aerospace alloy manufacturers managing qualification program timelines, fuel cell companies scaling electrolyte production, and
                commodity specialists positioning in a market where total global output would be consumed by a single OEM&apos;s adoption decision and
                every new recovery facility announcement shifts the entire supply equation.
              </p>
            </div>
            <div className="bg-slate-100 border border-slate-200 rounded-2xl p-6 md:p-8">
              <p className="text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">LONG-TERM DELIVERY</p>
              <p className="text-lg font-semibold text-gray-900 mb-3">1 to 6 Years</p>
              <p className="text-sm text-gray-600 leading-relaxed">
                Multi-year scandium positions backed by proven scandium content at mining operations developing byproduct recovery infrastructure. Built
                for sovereign strategic reserves securing next-generation aerospace alloy supply, OEMs planning decade-scale adoption programs contingent
                on supply availability, aluminum majors evaluating Al-Sc alloy product lines, and institutional allocators who understand that scandium is
                not a small market by nature but a transformative material artificially constrained by the absence of primary production infrastructure.
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
            Securing an Element That Has No Mine of Its Own. From Every Source That Produces It.
          </h2>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto text-center mb-14">
            Scandium is the only commercially significant element that has never had a dedicated mine. Every gram produced globally is recovered as a
            byproduct: from nickel laterite processing, uranium mining tailings, titanium dioxide waste streams, apatite residue, and ionic clay
            deposits where scandium is a minor constituent extracted alongside other rare earths. Toto Finance works directly with{' '}
            <Link href="/about" className="text-slate-800 font-medium underline underline-offset-2 hover:text-slate-600">
              mining companies and scandium recovery facilities
            </Link>{' '}
            across every production pathway, securing scandium at the point of recovery rather than through the thin network of specialist traders who
            have historically controlled access to the world&apos;s scarcest industrial element.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            {[
              {
                title: 'China',
                text: 'China produces approximately 60% of global scandium from ionic clay deposits in Guangxi and Hunan provinces and as a byproduct of titanium dioxide (TiO₂) production in Sichuan. Chinese scandium is primarily consumed domestically for aluminum alloy and fuel cell applications, with tightening export controls reducing international availability. Chinese dominance in scandium parallels its control of other rare earth elements, creating identical geopolitical supply risk for an element with no alternative production base at comparable scale.',
              },
              {
                title: 'Russia and Kazakhstan',
                text: 'Russia recovers scandium from apatite processing at its Arctic mining operations and from uranium mining tailings. Kazakhstan produces scandium from uranium ISL (in-situ leach) mining waste streams. Combined output from former Soviet facilities represents the second-largest production region globally. Export restrictions and geopolitical tensions constrain Western access to Russian and Kazakh scandium, redirecting supply toward domestic and allied-nation consumption.',
              },
              {
                title: 'Australia',
                text: 'Australia hosts significant scandium-bearing nickel laterite deposits across New South Wales and Queensland. Clean TeQ (now Sunrise Energy Metals) and Scandium International Mining are developing dedicated scandium recovery operations targeting aerospace-grade oxide production from laterite ores. Australian production is strategically important for allied aerospace supply chains and represents the most advanced non-Chinese, non-Russian scandium development pipeline.',
              },
              {
                title: 'North America (United States and Canada)',
                text: 'United States operations in Alaska, Idaho, and Nevada are developing scandium recovery from rare earth processing residues and uranium tailings. Canadian projects in Quebec include scandium recovery infrastructure as a byproduct revenue stream from rare earth mining. North American scandium supply development is supported by Defense Production Act funding, critical mineral designations, and domestic aerospace industry demand for non-Chinese-origin alloy feedstock.',
              },
              {
                title: 'Philippines and Southeast Asia',
                text: 'Philippine nickel laterite operations in Mindanao and Visayas regions contain scandium concentrations at economically recoverable levels. New hydrometallurgical extraction technologies enable scandium recovery from nickel processing waste streams that previously discarded the element. Southeast Asian operations represent an emerging source of scandium supply outside the China-Russia production axis.',
              },
              {
                title: 'Exploration and Development',
                text: 'New scandium-bearing projects across Africa (Tanzania, Madagascar), South America (Brazil), and Scandinavia (Norway, Sweden) are in exploration and feasibility stages. These represent the next generation of scandium supply, including potential dedicated scandium mining operations that would be the first in history. In-Ground Scandium positions offer access at pre-production economics before recovery output reaches the market.',
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
              <strong>Secured at the point of byproduct recovery.</strong> Scandium does not come from a scandium mine. It comes from the processing
              waste of someone else&apos;s mining operation. Toto Finance works at this critical recovery point, partnering directly with nickel laterite
              processors, rare earth separators, uranium tailings operators, and TiO₂ producers to secure scandium at the moment it transitions from
              waste stream residue to valuable oxide. Verified provenance. Transparent chain of custody from{' '}
              <Link href="/how-tokenization-works" className="underline underline-offset-2 hover:text-slate-200">
                byproduct recovery to token
              </Link>
              . Access to the element that transforms every alloy it enters, sourced from every pathway that produces it.
            </p>
          </div>
        </div>
      </section>

      {/* FOLD 7: PARTICIPANTS */}
      <section className="px-4 sm:px-6 md:px-8 lg:px-12 py-20 md:py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <p className="text-xs uppercase tracking-widest text-gray-400 font-semibold mb-3 text-center">PARTICIPANTS</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-gray-900 leading-tight mb-6 text-center">Who Buys Tokenized Scandium</h2>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto text-center mb-14">
            Scandium has never been accessible as an investment asset in any meaningful form. Its market is too small for an ETF. Its production is too
            fragmented for a futures contract. Its supply is too scarce for physical dealers to maintain inventory. The aerospace manufacturers, fuel
            cell companies, and aluminum producers that have validated scandium&apos;s transformative properties across decades of research have had no
            mechanism to secure forward supply, because there is no forward supply infrastructure to commit to. Toto Finance creates the first mechanism
            for open, transparent access to the element whose adoption has been blocked not by technology readiness but by the absence of a supply chain
            capable of delivering it.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 border border-gray-200">
              <span className="text-xs font-bold tracking-widest text-slate-800">AEROSPACE AND ALLOY MANUFACTURERS</span>
              <h3 className="text-xl font-semibold text-gray-900 mt-3 mb-4">
                The Companies Waiting for Enough Scandium to Commit to Adoption
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed mb-4">
                These buyers do not question scandium&apos;s performance. They have tested it. They have proven it. They have calculated the $2 million
                per aircraft in annual fuel savings, the 300% strength increase, the elimination of post-weld heat treatment. What they lack is{' '}
                <Link href="/products" className="text-slate-800 font-medium underline underline-offset-2">
                  supply continuity
                </Link>
                : a reliable source of scandium oxide at the purity and volume required to transition from laboratory validation to production
                commitment. Tokenized scandium gives them procurement infrastructure, delivery capability, and forward supply visibility for an element
                that has never had any of these things.
              </p>
              <p className="text-xs text-gray-500 leading-relaxed">
                Aerospace OEMs and aircraft structural component manufacturers, aluminum-scandium master alloy producers, solid oxide fuel cell
                developers and electrolyte manufacturers, electric vehicle structural and chassis engineers, 3D printing and additive manufacturing
                companies (Scalmalloy and Al-Sc powder producers), defense contractors and military aircraft manufacturers, sporting goods manufacturers
                (bicycle frames, baseball bats, lacrosse sticks), marine and shipbuilding alloy producers, high-performance automotive manufacturers,
                metal halide lamp and stadium lighting producers.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 border border-gray-200">
              <span className="text-xs font-bold tracking-widest text-blue-800">MATERIALS SCARCITY INVESTORS</span>
              <h3 className="text-xl font-semibold text-gray-900 mt-3 mb-4">
                Investing in the Most Transformative Alloy Element That the World Cannot Produce
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Scandium&apos;s investment case is unlike any other commodity. Its demand is not growing from a mature base. Its demand is artificially
                compressed by supply scarcity, meaning the addressable market is multiples larger than the current market suggests. A single aerospace
                OEM&apos;s adoption decision would consume the entire annual global production. A single EV platform&apos;s commitment would exceed it.
                Investors who understand that scandium&apos;s $180 million market reflects 25 tonnes of production rather than 25 tonnes of need recognize
                an element whose true market size is unlocked not by demand growth but by supply development. Tokenized scandium offers direct exposure to
                this asymmetry, with fractional access from $1 and a supply deficit that exists because production infrastructure has never been built for
                the most powerful alloying agent ever discovered.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 border border-gray-200">
              <span className="text-xs font-bold tracking-widest text-purple-800">ON-CHAIN INFRASTRUCTURE</span>
              <h3 className="text-xl font-semibold text-gray-900 mt-3 mb-4">
                Collateral Backed by the Element Every Industry Wants but Nobody Can Source
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed mb-4">
                When demand for a material is structurally suppressed by supply scarcity, the resolution of that scarcity creates a demand release that
                reprices the asset from its scarcity-constrained value to its utility-realized value. Scandium sits at precisely this inflection point.
                Tokenized scandium offers on-chain participants collateral backed by an element whose current market size is a measurement of production
                failure rather than demand ceiling: the same 25 tonnes per year that has prevented adoption is the constraint whose gradual removal
                reprices everything downstream.
              </p>
              <p className="text-xs text-gray-500 leading-relaxed">
                Crypto funds seeking exposure to materials with demand suppressed by supply scarcity rather than lack of utility, protocol treasuries
                diversifying into physical assets at the pre-adoption inflection point, DeFi protocols building collateral pools backed by elements where
                supply development unlocks non-linear demand release, blockchain foundations investing in the physical bottleneck constraining aerospace
                and clean energy transitions, DAOs with advanced materials and technology adoption investment mandates.
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
            Instant Settlement for Tokenized Scandium. No Commodity Dealers. No Weeks of Waiting.
          </h2>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-4xl mb-12">
            Scandium has never had a liquid market. It trades through a handful of specialized commodity dealers who maintain limited inventory, quote
            prices bilaterally, and settle transactions over weeks through banking intermediaries designed for bulk commodity flows rather than the
            kilogram-scale transactions that characterize the scandium market. For an element priced at thousands of dollars per kilogram, the settlement
            infrastructure is paradoxically designed for million-tonne commodity flows, adding cost and delay that are disproportionate to the
            transaction scale. No exchange lists scandium. No clearing house processes it. No standardized contract exists. We built what the scandium
            market has never had: instant, transparent, direct settlement.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="bg-gray-50 rounded-2xl p-6 md:p-8 border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-1">The Old Way</h3>
              <p className="text-sm text-gray-500 mb-6">Specialist Dealers. Weeks to Settle. Opaque Pricing.</p>
              <div className="space-y-3">
                {[
                  'Mining Operation / Byproduct Recovery',
                  'Scandium Oxide Refinery',
                  'Specialist Commodity Dealer',
                  'Secondary Dealer / Distributor',
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
                Settlement: T+5 to T+14 (standard for specialty commodity transactions)
              </p>
            </div>

            <div className="bg-gray-900 text-white rounded-2xl p-6 md:p-8">
              <h3 className="text-lg font-semibold mb-1">The Toto Finance Way</h3>
              <p className="text-sm text-gray-400 mb-6">Source ↔ Buyer. Direct. Instant.</p>
              <div className="space-y-3">
                {['Mining / Scandium Recovery Operation', 'Toto Finance Platform', 'Buyer'].map((step, i) => (
                  <div key={step} className="flex items-center gap-3">
                    <div className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0 text-xs font-semibold">
                      {i + 1}
                    </div>
                    <span className="text-sm">
                      {i === 1 ? (
                        <Link href="/products" className="underline underline-offset-2 hover:text-slate-200">
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
                Scandium&apos;s market infrastructure reflects the element&apos;s byproduct status: fragmented production, specialist dealers with limited
                inventory, bilateral pricing with no public benchmark, and settlement timelines designed around banking processes rather than buyer
                urgency. An aerospace manufacturer qualifying a new alloy cannot wait two weeks for settlement of a material measured in kilograms. A fuel
                cell developer scaling production cannot depend on dealer inventory that fluctuates with someone else&apos;s nickel mining economics. Toto
                Finance uses blockchain to create what has never existed for scandium: a transparent, continuous, instant-settlement market where producers
                connect with buyers directly, pricing is visible in real time, and settlement executes in seconds regardless of transaction size.
              </p>
            </div>
          </div>

          <h3 className="text-2xl font-medium text-gray-900 mb-6 text-center">
            Settlement Calibrated to the World&apos;s Most Valuable Alloying Element
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                name: 'USDC',
                issuer: 'Circle',
                detail:
                  'Fully reserved and independently attested dollar stablecoin engineered for institutional settlement. The compliance architecture and regulatory transparency that aerospace procurement teams, aluminum majors, and sovereign resource acquisition programs require for auditable digital transactions involving a material priced at thousands of dollars per kilogram.',
              },
              {
                name: 'USDT',
                issuer: 'Tether',
                detail:
                  "Over $140 billion in global circulation providing settlement depth for an element whose entire annual global market trades in the low hundreds of millions. USDT's liquidity infrastructure eliminates the counterparty friction and volume constraints that have historically characterized scandium transactions settled through specialist dealer banking channels.",
              },
              {
                name: 'USAT',
                issuer: 'Tether (US Regulated)',
                detail:
                  'US-regulated stablecoin under the GENIUS Act framework. Purpose-built for critical mineral procurement where Defense Production Act compliance, Inflation Reduction Act domestic sourcing requirements, and US aerospace supply chain mandates govern the acquisition of materials designated as essential to American manufacturing competitiveness and defense readiness.',
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
            DeFi Infrastructure for Tokenized Scandium
          </h2>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-4xl mb-12">
            Scandium has never existed as a financial asset. Its market is too small for an ETF (25 tonnes globally). Its production is too fragmented for
            a futures contract (byproduct from five different mining types). Its supply is too scarce for physical dealers to build inventory (specialist
            dealers operate on allocation, not stock). There is no scandium price benchmark published by any major commodity data provider. No financial
            instrument of any kind references scandium pricing. Tokenization does not merely digitize scandium. It creates scandium as a financial asset
            for the first time, building market infrastructure for an element that has existed commercially for decades but has never had a single
            financial tool designed for it.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            <div className="bg-white rounded-2xl p-6 md:p-8 border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">The First Scandium Market Designed for Continuous Trading</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Before tokenization, scandium traded through bilateral dealer conversations: phone calls, email quotations, weeks of negotiation, and
                settlement through banking channels. No continuous market. No visible order book. No real-time pricing. Tokenized scandium creates the
                first open trading venue for this element: a secondary market on decentralized exchanges where price discovery happens transparently,
                transfers execute instantly, and the most transformative alloying element in metallurgy becomes a tradeable asset with the same market
                infrastructure that trillion-dollar commodities enjoy.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-6 md:p-8 border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Yield Derived from the Material That Unlocks Aerospace&apos;s Next Revolution
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Lend scandium tokens to counterparties seeking leveraged exposure to advanced materials pricing or hedged positions in aerospace supply
                chain assets. Interest rates reflect real-world demand driven by OEM alloy qualification timelines, fuel cell commercialization
                schedules, EV lightweighting program decisions, and 3D printing production ramp-ups. Yield generated by the element that aerospace has
                validated for decades but cannot adopt at scale, applied to an asset class that did not exist before Toto Finance created it.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-6 md:p-8 border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Capital Without Surrendering Positions in the Scarcest Industrial Element
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Aerospace alloy companies and institutional investors holding scandium positions have historically had no mechanism for accessing capital
                from those holdings, because scandium has never been independently held as a financial asset. The element trades through dealer channels
                with no secondary liquidity whatsoever.{' '}
                <Link href="/products" className="text-slate-800 font-medium underline underline-offset-2">
                  Borrow against scandium
                </Link>{' '}
                tokens to receive stablecoins while maintaining full exposure to an element whose supply deficit exists because production infrastructure
                has never been built, creating a value trajectory fundamentally different from commodities with established mining industries.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-6 md:p-8 border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Risk Architecture for an Element with No Market History to Reference
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Scandium&apos;s supply risk is unique: dependent entirely on byproduct recovery from other mining operations, with no dedicated
                production that can scale independently of nickel, uranium, or titanium economics. Traditional commodity risk models do not account for
                supply whose availability is determined by someone else&apos;s mining decisions. Smart contract infrastructure automates collateral
                monitoring calibrated to byproduct recovery dynamics, margin management reflecting the extreme price volatility of a 25-tonne-per-year
                market, and position tracking for an asset whose risk profile is governed by the production economics of five different unrelated
                industries.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 md:p-8 border border-gray-200">
            <h3 className="text-xl font-medium text-gray-900 mb-6 text-center">
              From Byproduct Recovery to Global Digital Market: The Scandium Token Path
            </h3>
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              {[
                'Recovered: Scandium oxide extracted from nickel laterite, uranium tailings, or TiO₂ waste streams, purified to 99.9%+ grade, secured in insured custody, and bound to on-chain token identity',
                'Acquired: Purchased with USDC, USDT, or USAT at transparent pricing reflecting real-time byproduct recovery economics and aerospace demand signals',
                'Positioned: Held in wallet, traded on secondary markets, or bridged across chains to integrate with holder procurement and portfolio infrastructure',
                'Activated: Deployed into yield protocols, pledged as loan collateral, or structured for specialty materials supply disruption hedging',
                'Delivered: Redeemed for physical scandium oxide (Sc₂O₃, 99.9%+) for Al-Sc master alloy production, SOFC electrolyte manufacturing, or additive manufacturing powder atomization',
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
            Tokenized Scandium vs Every Other Way to Get Exposure
          </h2>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-4xl mb-12">
            There has never been a practical way to invest in scandium. No ETF includes it. No futures exchange lists it. Commodity dealers trade it
            bilaterally with opaque pricing and multi-week settlement. Mining stocks carry operational risk from primary commodities (nickel, uranium)
            that dwarf the scandium byproduct revenue. Toto Finance built what the specialty materials market has never offered: standalone, fractional,
            instant access to the element that transforms every alloy it touches but that the world produces in quantities smaller than a single aircraft
            weighs.
          </p>

          <div
            className="overflow-x-auto rounded-2xl border border-gray-200"
            aria-label="Comparison table of tokenized scandium on Toto Finance versus commodity dealers, physical scandium ownership, and mining stocks across 10 features including scandium-specific exposure, settlement speed, price transparency, and DeFi access."
          >
            <table className="w-full text-sm text-left min-w-[720px]">
              <thead>
                <tr className="bg-gray-900 text-white">
                  <th className="px-4 md:px-6 py-4 font-medium">Feature</th>
                  <th className="px-4 md:px-6 py-4 font-medium">Commodity Dealers</th>
                  <th className="px-4 md:px-6 py-4 font-medium bg-white/10">Toto Finance</th>
                  <th className="px-4 md:px-6 py-4 font-medium">Physical Scandium</th>
                  <th className="px-4 md:px-6 py-4 font-medium">Mining Stocks</th>
                </tr>
              </thead>
              <tbody className="bg-white">
                {[
                  ['Scandium-Specific', 'Yes (limited inventory)', 'Yes (1:1)', 'Direct ownership', 'No (byproduct revenue)'],
                  ['Trading Hours', 'Business hours only', '24/7/365', 'OTC / dealer', 'Market hours only'],
                  ['Settlement', 'T+5 to T+14', 'T+0 (Instant)', 'Weeks to months', 'T+2'],
                  ['Settlement Currency', 'Fiat (via dealer)', 'USDC, USDT, USAT', 'Wire transfer', 'Fiat (via broker)'],
                  ['Min. Investment', '$50,000+', 'Fractional (from $1)', '$50,000+', '1 share (~$5+)'],
                  ['Physical Redemption', 'Sometimes', 'Yes', 'Yes', 'No'],
                  ['On-Chain Transparency', 'No', 'Yes', 'No', 'No'],
                  ['DeFi Yield / Loans', 'No', 'Yes', 'No', 'No'],
                  ['Price Transparency', 'Bilateral / opaque', 'Real-time oracle', 'Dealer quotation', 'Stock price only'],
                  ['Intermediaries', 'Multiple dealers', 'None (P2P)', 'Multiple dealers', 'Broker'],
                ].map((row, i) => (
                  <tr key={row[0]} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
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

      {/* FOLD 11: Platform */}
      <section className="px-4 sm:px-6 md:px-8 lg:px-12 py-20 md:py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <p className="text-xs uppercase tracking-widest text-gray-400 font-semibold mb-3">PLATFORM</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-gray-900 leading-tight mb-6">
            Building Financial Infrastructure for an Element Whose Market Has Never Had Any
          </h2>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-4xl mb-12">
            Scandium has never had financial infrastructure because its market has never been large enough to justify it. Twenty-five tonnes of annual
            production, fragmented across byproduct recovery operations on five continents, traded through a handful of specialist dealers with no
            published benchmark. No contracts. No exchange listings. No settlement standards. No collateral frameworks. No risk management tools. Every
            feature of the Toto Finance platform for scandium was designed for an element that commercial markets have effectively ignored despite its
            transformative metallurgical properties, because the infrastructure was never built for a market measured in double-digit tonnes.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                t: 'Physical Backing with Aerospace-Alloy-Grade Delivery Capability',
                b: 'Every scandium token connects to verified scandium oxide (Sc₂O₃, 99.9%+) in insured custody. Request physical delivery and receive material ready for aluminum-scandium master alloy production, SOFC electrolyte manufacturing, or additive manufacturing powder processing. In a market where scandium has traded through specialist dealers with limited inventory and no standardized delivery specification, on-chain proof-of-reserves creates the first continuously verifiable record of scandium holdings with guaranteed purity and delivery capability.',
              },
              {
                t: 'Price Discovery for an Element That Has Never Had a Public Benchmark',
                b: 'Scandium has never had a transparent price. Dealer quotations vary by customer, order size, and relationship. No commodity data provider publishes a scandium benchmark. No exchange references scandium pricing. Toto Finance\'s oracle feeds and on-chain trading activity create the first public, real-time scandium pricing mechanism: independently verifiable, reflective of actual supply and demand dynamics, and accessible to every market participant rather than confined to bilateral dealer negotiations.',
              },
              {
                t: 'Instant Settlement for a Material Trapped in Specialist Dealer Timelines',
                b: 'Traditional scandium procurement operates through commodity dealers with settlement timelines of one to two weeks, banking intermediaries designed for bulk commodity flows, and logistics chains not optimized for kilogram-scale high-value shipments. Token settlement creates instant procurement capability, settling T+0 with stablecoins. For aerospace manufacturers qualifying new alloys under tight program schedules, or fuel cell developers scaling production against customer commitments, instant settlement replaces a procurement process designed for a different century\'s materials market.',
              },
              {
                t: 'Compliance for Critical Mineral Supply Chain Transactions',
                b: 'Scandium carries critical mineral designations from the United States, European Union, Japan, Australia, and allied nations. Trade operates within regulatory frameworks governing strategic material export, critical mineral sourcing requirements, and defense supply chain compliance. Smart contracts embed KYC/AML verification, transfer restrictions, and jurisdiction-specific compliance rules directly into token architecture, ensuring every transaction satisfies applicable regulatory requirements for a material that multiple governments classify as essential to aerospace manufacturing and clean energy transition.',
              },
              {
                t: 'Financial Tools for a Market That Has Never Had a Single Financial Instrument',
                b: 'Lending, borrowing, hedging, and collateral management for scandium as a standalone asset: capabilities that have never existed because scandium\'s market has never justified the infrastructure investment from traditional financial institutions. Smart contract protocols enable yield generation from scandium positions, stablecoin borrowing against holdings, and programmable hedging strategies. A complete financial stack built for an element whose market potential dwarfs its current market size.',
              },
              {
                t: 'Multi-Chain Presence',
                b: 'Tokenized scandium is deployed across Ethereum, Polygon, Cardano, Solana, and XRP Ledger. Aerospace procurement platforms, institutional custodians, DeFi protocols, fuel cell supply chain systems, and individual holders can interact with scandium tokens on whatever chain infrastructure their operations already use. No migration required, no ecosystem lock-in, no chain-specific constraints on the most transformative alloying element available on-chain.',
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
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-gray-900 leading-tight mb-6">Tokenized Scandium FAQ</h2>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-12">
            Direct answers about tokenized scandium, In-Ground Scandium, aluminum-scandium alloys, solid oxide fuel cells, and how Toto Finance provides
            the first open market access to the element aerospace cannot adopt because it cannot source.
          </p>
          <ScandiumFAQ faqs={faqData} />
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
          <p className="text-xs uppercase tracking-widest text-slate-200/80 font-semibold mb-3">THIS IS WHY</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light leading-tight mb-8">
            The Most Powerful Alloying Element in Metallurgy Has No Mine, No Market, and a 47% Supply Deficit. We Built the Market.
          </h2>
          <p className="text-base md:text-lg text-gray-200 leading-relaxed mb-10">
            The world needs 95 tonnes of scandium by 2030. Byproduct recovery will deliver 50. The 45-tonne gap is not a market failure. It is the
            consequence of an element so powerful that a 0.15% addition triples aluminum strength, yet so scarce that total global production weighs less
            than a single commercial aircraft. Aerospace has validated the metallurgy. Fuel cells have proven the electrolyte. EVs have calculated the
            range extension. None of them can adopt at scale because the supply does not exist. Toto Finance is building the infrastructure to bring the
            most transformative alloying element in metallurgy to an open, transparent, instant-settlement market for the first time.
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
