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
const PromethiumTickerBar = dynamicImport(
  () => import('../components/client/PromethiumTickerBar').then((mod) => ({ default: mod.PromethiumTickerBar }))
);
const PromethiumFAQ = dynamicImport(
  () => import('../components/client/SilverFAQ').then((mod) => ({ default: mod.SilverFAQ }))
);

const PAGE_URL = 'https://totofinance.co/tokenized-promethium';
const PAGE_TITLE = 'Tokenized Promethium | Digital Rare Earth Backed by Physical Assets | Toto Finance';
const PAGE_DESCRIPTION =
  'Every gram of promethium must be created inside a nuclear reactor. Toto Finance brings the only radioactive rare earth on-chain from 1:1 redeemable isotope tokens to In-Ground future delivery contracts. The element that powers nuclear batteries, deep-space probes, and next-generation betavoltaic devices. Instant stablecoin settlement. DeFi secondary markets.';

const breadcrumbItems = [
  { name: 'Home', item: 'https://totofinance.co' },
  { name: 'Products', item: 'https://totofinance.co/products' },
  { name: 'Rare Earth Minerals', item: 'https://totofinance.co/rare-earth-mineral' },
  { name: 'Tokenized Promethium', item: PAGE_URL },
];

const faqData = [
  {
    question: 'What is tokenized promethium?',
    answer:
      'A blockchain-based digital asset backed 1:1 by refined promethium-147 isotopes secured in specialized, radiologically compliant storage facilities. High-purity grade (99.9%+ Pm-147), ready for nuclear battery fabrication, betavoltaic device integration, and specialized industrial applications. Redeemable for physical promethium on demand subject to appropriate handling protocols. Toto Finance is building the infrastructure to bring promethium on-chain as a commercial asset for the first time, with instant stablecoin settlement and DeFi secondary markets.',
  },
  {
    question: 'What is In-Ground Promethium?',
    answer:
      'A tokenized future delivery contract for promethium-147 recoverable from nuclear fuel reprocessing facilities where the element is captured as a fission product byproduct. Short-term (1 to 12 months) for facilities with active recovery operations, long-term (1 to 6 years) for facilities expanding isotope production capacity. Built for space agencies, nuclear battery manufacturers, defense contractors, sovereign funds, and institutional investors positioning for the structural promethium supply deficit that no amount of pricing adjustment can resolve without new reactor production capacity.',
  },
  {
    question: 'Where does the promethium come from?',
    answer:
      'Directly from nuclear fuel reprocessing facilities and isotope production centers across the United States (Oak Ridge National Laboratory and DOE Isotope Program facilities), Russia (dedicated isotope production reactors at Mayak and Dimitrovgrad), Europe (France\'s La Hague reprocessing and UK\'s National Nuclear Laboratory), China (Jiuquan and Lanzhou fuel cycle infrastructure), and Japan/South Korea (JAEA and KAERI nuclear research complexes). No middlemen. No intermediary traders. Secured at the point of isotope separation. More on partnerships: https://totofinance.co/about.',
  },
  {
    question: 'Who buys tokenized promethium?',
    answer:
      'Three groups: (1) Space and nuclear battery manufacturers, including space agencies (NASA, ESA, JAXA), aerospace contractors (SpaceX, Blue Origin, Rocket Lab), nuclear battery and betavoltaic device developers, deep-space probe power system producers, autonomous sensor companies, defense contractors, nuclear research institutions, and implantable medical device developers. (2) Nuclear material investors, including funds and allocators seeking exposure to the most extreme physics-constrained supply profile in the commodities market, where production is limited by reactor capacity and inventory permanently decays. (3) On-chain participants, including crypto funds, protocol treasuries, and DeFi protocols seeking collateral backed by the only tokenized asset whose physical scarcity increases over time by natural law.',
  },
  {
    question: 'How does instant settlement work?',
    answer:
      'T+0 settlement using USDC, USDT, or USAT. Traditional promethium procurement operates through government allocation channels with settlement measured in months, layered with regulatory review, export licensing, and radiological transport certification. Toto Finance creates the first commercial settlement mechanism for promethium, connecting sources with buyers directly on-chain while maintaining full regulatory compliance.',
  },
  {
    question: 'Can I trade tokenized promethium on DeFi platforms?',
    answer:
      'Yes. After acquisition, trade on decentralized exchanges globally, generate yield by lending to counterparties seeking nuclear material exposure, or use promethium tokens as collateral for stablecoin loans. Promethium has never existed as a tradeable financial asset in any form. Tokenization creates both the asset class and its market simultaneously, providing the first open price discovery mechanism for an element whose value has historically been determined through classified government procurement channels.',
  },
  {
    question: 'Why is promethium the only radioactive rare earth element?',
    answer:
      'Promethium is unique among the 17 rare earth elements because all of its isotopes are radioactive. No stable promethium exists anywhere in nature. The element was predicted to exist in 1902, searched for over four decades, and finally confirmed in 1945 at Oak Ridge National Laboratory from uranium fission products. Promethium-147\'s 2.6-year half-life and low-energy beta emission (225 keV maximum, no significant gamma radiation) make it ideal for nuclear batteries that convert radioactive decay directly into electricity. No other rare earth element is radioactive. No other element can power a spacecraft for a decade from a few grams of material.',
  },
  {
    question: 'What is the promethium supply forecast for 2030?',
    answer:
      'Global promethium-147 production is estimated below 100 grams annually from nuclear fuel reprocessing facilities worldwide. As space missions accelerate, commercial space stations enter development, lunar bases are established, betavoltaic devices approach commercialization, and defense nuclear battery programs expand, demand is projected to reach 280 grams annually by 2030. Supply from existing and planned production capacity will reach approximately 120 grams even under optimistic expansion scenarios, creating a 160-gram deficit. This represents the most extreme supply constraint of any material in the tokenized commodities market, measured not in tonnes or kilograms but in grams, and governed not by market economics but by reactor physics.',
  },
  {
    question: 'How do I get early access?',
    answer:
      'Visit https://totofinance.co/. Space agencies, nuclear battery manufacturers, betavoltaic developers, defense contractors, institutional investors, and qualified buyers can reach out directly for partnership inquiries and early allocation discussions.',
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
        'Tokenized commodity platform offering 1:1 asset-backed promethium-147 isotope tokens and In-Ground Promethium future delivery contracts with instant stablecoin settlement.',
    },
    {
      '@type': 'Product',
      name: '1:1 Promethium-147 Isotope Token',
      description:
        'Digital asset backed 1:1 by refined promethium-147 isotopes in secured nuclear material storage, redeemable for physical delivery subject to regulatory protocols. Category: Tokenized Commodity.',
      category: 'Tokenized Commodity',
      brand: { '@type': 'Brand', name: 'Toto Finance' },
      url: PAGE_URL,
    },
    {
      '@type': 'Product',
      name: 'In-Ground Promethium',
      description:
        'Tokenized future delivery contract for promethium-147 recoverable from nuclear fuel reprocessing. Category: Commodity Future Delivery Contract.',
      category: 'Commodity Future Delivery Contract',
      brand: { '@type': 'Brand', name: 'Toto Finance' },
      url: PAGE_URL,
    },
  ],
};

export default function TokenizedPromethiumPage() {
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
      <section className="relative bg-gradient-to-br from-amber-900 via-amber-800 to-gray-900 text-white px-4 sm:px-6 md:px-8 lg:px-12 pt-28 md:pt-36 pb-16 md:pb-24 overflow-hidden">
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
            backgroundSize: '40px 40px',
          }}
        />
        <div className="relative z-10 max-w-7xl mx-auto text-left">
          <h1 className="text-sm md:text-base font-semibold tracking-[0.2em] uppercase text-amber-200/90 mb-4">
            Tokenized Promethium by Toto Finance
          </h1>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light leading-tight mb-8">
            No Mine on Earth Produces Promethium. Every Gram Is Born Inside a Reactor. Now It Is On-Chain.
          </h2>
          <p className="text-base md:text-lg text-gray-200 leading-relaxed mb-10 max-w-3xl text-left">
            There is no promethium mine. There is no promethium deposit. There is no promethium ore body waiting to be discovered. Promethium is the
            only rare earth element that does not exist naturally on Earth in any meaningful quantity, because every one of its isotopes is
            radioactive. Every gram of promethium-147 powering nuclear batteries in deep-space probes, sustaining autonomous sensors on ocean floors,
            and enabling next-generation betavoltaic implants must be synthesized inside a nuclear reactor and separated from dozens of competing
            fission products. Annual global production sits below 100 grams. The entire world supply of the only radioactive rare earth element
            would not fill a coffee cup.{' '}
            <Link href="/" className="text-white underline underline-offset-2 hover:text-amber-200">
              Toto Finance
            </Link>{' '}
            is building the infrastructure to bring this reactor-born element on-chain for the first time, from 1:1 redeemable refined isotopes to
            In-Ground future delivery contracts, settled instantly in stablecoins with full DeFi secondary market access.
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
              Why Promethium Matters
            </a>
          </div>
        </div>
      </section>

      <PromethiumTickerBar />

      {/* FOLD 2: Crisis */}
      <section id="crisis" className="scroll-mt-24 px-4 sm:px-6 md:px-8 lg:px-12 py-20 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto">
          <p className="text-xs uppercase tracking-widest text-gray-400 font-semibold mb-3">THE WHY</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-gray-900 leading-tight mb-6">
            Every Other Rare Earth Can Be Dug from the Ground. Promethium Cannot.
          </h2>
          <div className="text-base md:text-lg text-gray-600 leading-relaxed max-w-4xl mb-12 space-y-4">
            <p>
              We chose promethium because it represents the most extreme form of material scarcity that exists. Not scarce because demand has outpaced
              mining. Scarce because the element itself refuses to persist.
            </p>
            <p>
              Promethium is the only member of the 17 rare earth elements that possesses zero stable isotopes. Every atom of promethium on Earth
              today was manufactured inside a nuclear reactor, separated through painstaking ion exchange chromatography from dozens of competing
              fission products, and isolated in quantities measured not in tonnes or kilograms but in grams. Annual global production sits below 100
              grams. The element&apos;s 2.6-year half-life means that every gram ever produced is actively decaying, shrinking the available inventory
              with every passing second. There is no stockpile accumulating in a warehouse. There is no reserve growing in a vault. Every gram of
              promethium that exists is either being consumed or disappearing. Space agencies, nuclear battery manufacturers, betavoltaic device
              developers, and defense programs compete for an element whose entire global supply would rest on a single laboratory scale. This is not
              a supply cycle. This is physics-enforced scarcity.
            </p>
            <p className="font-medium text-gray-900">That is why we exist.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gray-50 rounded-2xl p-6 md:p-8 border border-gray-100">
              <p className="text-4xl md:text-5xl font-light text-gray-900 mb-3">&lt;100 grams</p>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">An Annual Supply That Fits in Your Palm</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Total worldwide promethium-147 output is estimated below 100 grams per year, all of it recovered as a byproduct of nuclear reactor
                fuel reprocessing. Promethium holds a distinction shared by no other rare earth element: it has no stable isotopes whatsoever. It
                cannot be found naturally on Earth in meaningful quantities. It cannot be mined. It cannot be concentrated from ore. Every gram must
                be synthesized through nuclear fission or neutron activation of neodymium targets, then isolated through complex chemical separation
                processes that few facilities on Earth can perform.
              </p>
            </div>
            <div className="bg-gray-50 rounded-2xl p-6 md:p-8 border border-gray-100">
              <p className="text-4xl md:text-5xl font-light text-gray-900 mb-3">Only 1</p>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">The Sole Radioactive Rare Earth in Existence</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Among all 17 rare earth elements, promethium stands entirely alone as the only one composed exclusively of radioactive isotopes.
                Promethium-147 releases low-energy beta particles at an energy level perfectly suited for nuclear batteries that generate steady
                electrical output for years without refueling, recharging, or maintenance. No other rare earth element possesses this capability. No
                substitute exists. For missions operating beyond the reach of solar panels, for sensors deployed in locations where human access is
                impossible, for medical implants that must outlast the patients who carry them, promethium is the difference between operational and
                dead.
              </p>
            </div>
            <div className="bg-gray-50 rounded-2xl p-6 md:p-8 border border-gray-100">
              <p className="text-4xl md:text-5xl font-light text-gray-900 mb-3">2.6 years</p>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">A Half-Life That Guarantees Scarcity</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                The 2.6-year half-life of promethium-147 strikes an extraordinary balance: energetic enough to generate meaningful electrical output
                for nuclear batteries, stable enough to sustain operational lifetimes of 5 to 15 years in spacecraft and remote sensors. But this same
                half-life means the global inventory is permanently shrinking. Unlike every other rare earth element that can be stockpiled
                indefinitely, promethium decays from the moment it is created. Supply is constrained not only by reactor production schedules and
                separation complexity but by the fundamental physics of radioactive decay. Every gram that is not used is a gram that is disappearing.
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
            Understanding Why Promethium Exists Outside Every Rule That Governs Other Rare Earths
          </h2>
          <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto text-center mb-14">
            The only rare earth element with no stable isotopes. Synthesized in nuclear reactors. Measured in grams. Powering the batteries that
            operate where nothing else can.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
              <div
                className="rounded-xl bg-gradient-to-br from-amber-900 to-slate-950 text-white p-6 mb-4 font-mono text-sm"
                role="img"
                aria-label="Promethium element card showing Pm symbol, atomic number 61, and classification as only radioactive rare earth"
              >
                <p className="text-3xl font-light mb-1">Pm</p>
                <ul className="space-y-1 text-amber-100/90">
                  <li>Atomic Number: 61</li>
                  <li>Density: 7,264 kg/m³</li>
                  <li>Melting Point: 1,042°C</li>
                  <li>Isotope Stability: Zero Stable Isotopes</li>
                  <li>Classification: Only Radioactive Rare Earth</li>
                </ul>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">The Element</h3>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
              <div
                className="rounded-xl bg-gradient-to-br from-cyan-900/60 to-slate-900 min-h-[160px] mb-4"
                role="img"
                aria-label="Nuclear reactor production of promethium-147 from fission byproducts"
              />
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Where It Comes From</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Promethium does not come from a mine. It comes from a nuclear reactor. Produced as a fission byproduct of uranium-235 or through
                neutron bombardment of neodymium-146 targets, promethium-147 must be separated from dozens of competing isotopes through precision ion
                exchange chromatography at specialized facilities. Fewer than ten facilities worldwide possess the capability, and combined annual
                output remains below 100 grams.
              </p>
              <p className="text-xs text-gray-500 mt-3 font-mono">
                Uranium Fission → Spent Fuel Reprocessing → Ion Exchange Separation → Isotope Purification → 99.9% Pure Promethium-147
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
              <div
                className="rounded-xl bg-gradient-to-br from-teal-900/50 to-slate-900 min-h-[160px] mb-4"
                role="img"
                aria-label="Promethium-147 beta emission and properties for nuclear batteries"
              />
              <h3 className="text-lg font-semibold text-gray-900 mb-3">The Physics That Make It Irreplaceable</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Promethium-147 emits low-energy beta particles (225 keV maximum) with no significant gamma radiation, making it ideal for compact
                nuclear batteries that convert radioactive decay directly into electrical current. The element glows pale blue-green in the dark from
                its own radioactive emission exciting surrounding air molecules. Its 2.6-year half-life delivers sustained power output over
                operational windows of 5 to 15 years while remaining manageable for handling and storage. No other rare earth element is radioactive.
                No other element occupies promethium&apos;s position in nuclear battery design.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
              <div
                className="rounded-xl bg-gradient-to-br from-slate-700 to-slate-900 min-h-[160px] mb-4"
                role="img"
                aria-label="Nuclear battery and betavoltaic applications for spacecraft and sensors"
              />
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Where It Goes</h3>
              <p className="text-sm text-gray-600 leading-relaxed mb-4">
                Nuclear batteries for spacecraft and deep-space probes, betavoltaic power sources for cardiac pacemakers and neural implants,
                autonomous sensor networks in ocean trenches and polar stations, thickness gauges for industrial manufacturing, self-luminous
                instrument panels and emergency signage for aerospace and defense, calibration sources for nuclear instrumentation.
              </p>
              <p className="text-sm font-semibold text-amber-900 bg-amber-50 rounded-lg px-3 py-2">
                $8M+ global promethium market (constrained entirely by production, not demand)
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
            The Demand for Power Beyond Sunlight Is Consuming an Element the World Produces in Grams.
          </h2>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-4xl mb-12">
            There is no substitute for promethium in long-duration nuclear batteries. No alternative beta emitter offers the same combination of
            low-energy radiation, manageable half-life, minimal shielding requirements, and proven performance in space-rated power systems. Every
            deep-space probe that ventures beyond Jupiter&apos;s orbit, every autonomous ocean-floor sensor designed to operate for a decade without
            maintenance, every next-generation cardiac implant engineered to outlast the patient requires a power source that converts radioactive
            decay into electricity continuously, silently, and without intervention. Promethium-147 delivers that. And the world produces less of it in a
            year than a single spacecraft mission can consume.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <div className="bg-gray-50 rounded-2xl p-6 md:p-8 border border-gray-100">
              <h3 className="text-xl font-medium text-gray-900 mb-3">Deep-Space Missions: Power Where the Sun Cannot Reach</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Promethium-147 nuclear batteries deliver continuous electrical power to spacecraft, satellites, and probes operating in the permanent
                darkness beyond solar panel range. NASA, ESA, JAXA, and a growing roster of commercial space companies require promethium for planned
                lunar surface installations, Mars exploration vehicles, asteroid mining reconnaissance, and outer solar system science missions. A single
                deep-space probe consumes 5 to 20 grams of promethium-147. With launch cadence accelerating and commercial space stations entering
                development, the cumulative draw on an annual supply of less than 100 grams becomes arithmetically unsustainable.
              </p>
            </div>
            <div className="bg-gray-50 rounded-2xl p-6 md:p-8 border border-gray-100">
              <h3 className="text-xl font-medium text-gray-900 mb-3">Autonomous Sensors: Decades of Power Without Human Contact</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Promethium-fueled batteries sustain autonomous sensor networks in locations where human access is impractical or impossible: ocean
                trenches monitoring seismic activity, arctic installations tracking ice sheet dynamics, underground pipeline networks detecting
                corrosion, and geophysical early-warning arrays positioned in remote terrain. This sector alone accounts for an estimated 30 to 40
                grams of annual consumption. The expansion of remote IoT monitoring across energy infrastructure, climate observation, and defense
                perimeter systems is pushing that figure higher with each deployment cycle.
              </p>
            </div>
            <div className="bg-gray-50 rounded-2xl p-6 md:p-8 border border-gray-100">
              <h3 className="text-xl font-medium text-gray-900 mb-3">Betavoltaic Devices: The Next Generation of Implantable Power</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Next-generation betavoltaic batteries using promethium-147 promise 20+ year operational lifetimes for cardiac pacemakers, neural
                stimulators, cochlear implants, and embedded microelectronics. Research institutions and medical device developers consume an
                estimated 10 to 15 grams annually, with demand projected to accelerate sharply as betavoltaic technology transitions from laboratory
                prototypes to commercial implantable devices. A single successful FDA approval for a promethium-powered pacemaker would create
                permanent annual demand exceeding current total global production.
              </p>
            </div>
            <div className="bg-gray-50 rounded-2xl p-6 md:p-8 border border-gray-100">
              <h3 className="text-xl font-medium text-gray-900 mb-3">Industrial Gauging and Specialized Luminescence: Quiet Consumption</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Promethium-147 beta sources power thickness gauges in paper, plastic, and metal manufacturing, measuring material density with
                precision impossible for optical methods. Specialized aerospace and defense applications still require promethium-activated luminescent
                coatings for instrument panels and emergency signage that must function without external power in complete darkness. Combined industrial
                consumption accounts for 10 to 15 grams annually, a figure that appears small until measured against a total global supply that
                struggles to reach 100 grams.
              </p>
            </div>
          </div>

          <div className="bg-gray-50 rounded-2xl p-6 md:p-8 border border-gray-200">
            <h3 className="text-xl font-medium text-gray-900 mb-2">A Supply Deficit Measured in Grams, Not Tonnes</h3>
            <p className="text-sm text-gray-500 mb-6">
              Bar chart showing global promethium demand rising from 65 grams in 2025 to 280 grams by 2030, with supply reaching approximately 120
              grams, creating a 160-gram annual deficit.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-6">
              {[
                { year: '2025', val: '65', note: 'Demand (g)' },
                { year: '2028', val: '150', note: 'Demand (g)' },
                { year: '2030', val: '280', note: 'Demand (g)' },
                { year: '2035', val: '500', note: 'Space + betavoltaic' },
                { year: '2030 Supply', val: '~120', note: 'Gap: 160+ g' },
              ].map((d, i) => (
                <div
                  key={d.year}
                  className={`text-center p-4 rounded-xl ${i === 4 ? 'bg-red-50 border border-red-100' : i === 3 ? 'bg-amber-50' : 'bg-white border border-gray-100'}`}
                >
                  <p className={`text-sm mb-2 ${i === 4 ? 'text-red-800 font-medium' : 'text-gray-500'}`}>{d.year}</p>
                  <p className="text-sm font-semibold text-gray-900">{d.val} g</p>
                  <p className="text-xs text-gray-500 mt-1">{d.note}</p>
                </div>
              ))}
            </div>
            <p className="text-xs text-gray-400">
              Sources: Estimated from nuclear reactor production capacity, NASA/ESA mission requirements, IAEA isotope production data, betavoltaic
              research projections.
            </p>
          </div>
        </div>
      </section>

      {/* FOLD 5: TWO PRODUCTS */}
      <section id="products" className="scroll-mt-24 px-4 sm:px-6 md:px-8 lg:px-12 py-20 md:py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <p className="text-xs uppercase tracking-widest text-gray-400 font-semibold mb-3 text-center">TWO PRODUCTS</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-gray-900 leading-tight mb-6 text-center">
            Two Ways to Own Tokenized Promethium
          </h2>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto text-center mb-14">
            Everything we believe about opening access to the rarest nuclear material on Earth comes to life in two products. One for promethium-147
            that has already been synthesized, purified, and secured in specialized storage. One for promethium recoverable from nuclear fuel cycles
            that have not yet been reprocessed. Both backed by physical material. Both settleable in stablecoins. Both built to give the space
            agencies, nuclear battery manufacturers, betavoltaic developers, and forward-looking investors who understand that 100 grams per year cannot
            sustain an accelerating demand curve a way to secure the element that powers everything beyond the reach of sunlight.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
            <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm">
              <span className="inline-block text-xs font-bold tracking-wider text-amber-800 bg-amber-100 px-3 py-1 rounded-full mb-4">
                ASSET-BACKED TOKEN
              </span>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                <Link href="/products" className="hover:text-amber-700 underline-offset-2 hover:underline">
                  1:1 Promethium-147 Isotope Token
                </Link>
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed mb-6">
                Digital ownership of physical promethium. Every token is backed 1:1 by refined promethium-147 isotopes secured in specialized,
                independently audited nuclear material storage facilities. High-purity grade (99.9%+ Pm-147), ready for nuclear battery fabrication,
                betavoltaic device integration, and specialized industrial applications. Redeemable for physical promethium on demand subject to
                appropriate regulatory handling and transport protocols. Not a derivative. Not a tracker. The actual isotope.
              </p>
              <ul className="text-sm text-gray-700 space-y-2 list-disc pl-5">
                <li>Backed 1:1 by refined promethium-147 isotopes (99.9%+ purity grade)</li>
                <li>Always redeemable for physical promethium delivery on demand</li>
                <li>Stored in secured, independently audited nuclear material facilities with radiological compliance</li>
                <li>On-chain proof-of-reserves with real-time tracking and decay-adjusted inventory reporting</li>
                <li>Fractional ownership, from $1, tradeable 24/7 with instant stablecoin settlement</li>
                <li>Ready for industrial end-use: nuclear batteries, betavoltaic devices, spacecraft power systems, autonomous sensors, thickness gauges, specialized luminescence</li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm">
              <span className="inline-block text-xs font-bold tracking-wider text-slate-800 bg-slate-200 px-3 py-1 rounded-full mb-4">
                FUTURE DELIVERY CONTRACT
              </span>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                <Link href="/products" className="hover:text-amber-700 underline-offset-2 hover:underline">
                  In-Ground Promethium
                </Link>
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed mb-6">
                Forward positions in promethium that has not yet been separated from spent nuclear fuel. Tokenized future delivery contracts backed
                by proven promethium-147 recovery capacity at nuclear fuel reprocessing facilities where the element is captured as a fission product
                byproduct. For organizations that understand that an element produced in grams per year with demand accelerating toward hundreds of
                grams faces a supply arithmetic that no amount of pricing adjustment can resolve without new reactor production capacity.
              </p>
              <ul className="text-sm text-gray-700 space-y-2 list-disc pl-5">
                <li>Backed by proven promethium-147 recovery capacity at nuclear fuel reprocessing facilities</li>
                <li>Pre-production pricing reflecting reactor schedule constraints and isotope separation complexity</li>
                <li>On-chain reserve tracking with production facility transparency</li>
                <li>Physical delivery or settlement at maturity</li>
                <li>Verified recovery capacity with third-party facility audits</li>
                <li>Built for space agencies, defense contractors, nuclear battery manufacturers, sovereign funds, and institutional allocators</li>
              </ul>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-amber-900/10 border border-amber-200 rounded-2xl p-6 md:p-8">
              <p className="text-xs font-bold text-amber-900 uppercase tracking-wider mb-2">SHORT-TERM DELIVERY</p>
              <p className="text-lg font-semibold text-gray-900 mb-3">1 to 12 Months</p>
              <p className="text-sm text-gray-600 leading-relaxed">
                Near-term promethium delivery contracts tied to active nuclear fuel reprocessing operations with promethium-147 recovery approaching
                production readiness. For space agencies coordinating mission power system procurement, nuclear battery manufacturers managing
                fabrication schedules, and commodity specialists positioning in a market where annual global output is measured in double-digit grams and
                every reactor maintenance shutdown directly impacts available supply.
              </p>
            </div>
            <div className="bg-slate-100 border border-slate-200 rounded-2xl p-6 md:p-8">
              <p className="text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">LONG-TERM DELIVERY</p>
              <p className="text-lg font-semibold text-gray-900 mb-3">1 to 6 Years</p>
              <p className="text-sm text-gray-600 leading-relaxed">
                Multi-year promethium positions backed by proven recovery capacity at fuel cycle facilities expanding isotope production
                infrastructure. Built for sovereign strategic reserves, space agencies planning decade-scale exploration programs, defense departments
                securing nuclear battery supply chains, and institutional allocators who understand that promethium&apos;s supply deficit is not a
                market imbalance but a physics constraint that only new reactor capacity can address.
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
            Securing an Element That Does Not Come from a Mine. It Comes from a Reactor.
          </h2>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto text-center mb-14">
            Promethium is not mined. It is manufactured. Every gram originates inside a nuclear reactor as a fission byproduct or through targeted
            neutron bombardment, then undergoes precision chemical separation at specialized facilities that exist in fewer than ten locations
            worldwide. Toto Finance works directly with{' '}
            <Link href="/about" className="text-amber-800 font-medium underline underline-offset-2 hover:text-amber-600">
              nuclear fuel reprocessing facilities and isotope production centers
            </Link>{' '}
            to secure promethium at the point of isotope separation, bypassing the intermediary networks that have historically controlled access to
            the rarest nuclear material on earth.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            {[
              {
                title: 'United States',
                text: 'Oak Ridge National Laboratory and the Department of Energy\'s Isotope Program represent the primary US production pathway for promethium-147, recovering the isotope from spent nuclear fuel reprocessing and dedicated target irradiation campaigns. The US Space Force, NASA, and domestic nuclear battery developers create government-priority demand that consumes most domestic production before it reaches any commercial market. US production capacity and output figures remain partially classified, reflecting the strategic significance of nuclear battery materials for defense and space applications.',
              },
              {
                title: 'Russia',
                text: 'Russia operates dedicated isotope production reactors and fuel reprocessing facilities at sites including Mayak and Dimitrovgrad that have historically produced promethium-147 for Soviet and international space programs. Russian isotope production infrastructure is among the most extensive globally. However, export restrictions, international sanctions, and geopolitical tensions have severely constrained the availability of Russian-origin promethium for Western space programs and commercial applications, redirecting supply toward domestic and allied-nation consumption.',
              },
              {
                title: 'Europe (France and United Kingdom)',
                text: 'France\'s La Hague nuclear fuel reprocessing facility and the UK\'s National Nuclear Laboratory possess the technical capability to recover promethium-147 from spent fuel cycles. European Space Agency mission requirements, nuclear research institutions, and emerging betavoltaic development programs create domestic demand that absorbs available European production. Expansion of European isotope production is under discussion as ESA\'s deep-space mission pipeline grows and the EU designates nuclear battery materials as strategically critical.',
              },
              {
                title: 'China',
                text: 'China\'s expanding nuclear fuel cycle infrastructure at facilities including Jiuquan and Lanzhou includes promethium-147 recovery capabilities supporting the Chinese National Space Administration\'s lunar program, Mars missions, and classified defense applications. Chinese production is directed almost entirely toward national strategic programs. International availability of Chinese-origin promethium is effectively zero, mirroring the export control dynamics that constrain Chinese rare earth availability across the periodic table.',
              },
              {
                title: 'Japan and South Korea',
                text: 'Japan\'s nuclear research complex at Tokai and South Korea\'s KAERI facilities produce limited quantities of promethium-147 for specialized research, space technology development, and industrial applications. Production is primarily oriented toward domestic programs, with minimal surplus for international trade. Both nations are investing in expanded isotope production capability as their space programs mature and betavoltaic research accelerates.',
              },
              {
                title: 'Future Production Capacity',
                text: 'Next-generation nuclear reactors, dedicated isotope production facilities, and advanced fuel reprocessing technologies under development in the United States, Europe, and allied nations could expand global promethium-147 output beyond current reactor-constrained levels. In-Ground Promethium positions offer access to this future production capacity at pre-output economics, positioning holders ahead of the supply expansion that the space economy and betavoltaic industry will require.',
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
              <strong>Secured at the point of isotope separation.</strong> Promethium does not come from a mine. It comes from a reactor. Toto Finance
              works at the critical interface between nuclear fuel reprocessing and isotope purification, eliminating the intermediary layers that have
              historically restricted promethium access to government agencies and classified programs. Verified provenance. Transparent chain of
              custody from{' '}
              <Link href="/how-tokenization-works" className="underline underline-offset-2 hover:text-amber-200">
                reactor to token
              </Link>
              . Access to the only radioactive rare earth element, at the point where it actually becomes available.
            </p>
          </div>
        </div>
      </section>

      {/* FOLD 7: PARTICIPANTS */}
      <section className="px-4 sm:px-6 md:px-8 lg:px-12 py-20 md:py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <p className="text-xs uppercase tracking-widest text-gray-400 font-semibold mb-3 text-center">PARTICIPANTS</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-gray-900 leading-tight mb-6 text-center">
            Who Buys Tokenized Promethium
          </h2>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto text-center mb-14">
            Promethium has never been commercially accessible as an investment or procurement asset in any form. It has existed exclusively within
            classified government programs, national laboratory allocations, and bilateral isotope supply agreements between nuclear states. No
            commodity exchange has ever listed it. No ETF has ever included it. No broker has ever offered it. The space agencies, nuclear battery
            manufacturers, and defense programs that consume promethium have operated within a system where supply allocation is determined by
            government priority, not market dynamics. Toto Finance creates the first mechanism for open, transparent, market-based access to the
            rarest nuclear material on Earth.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 border border-gray-200">
              <span className="text-xs font-bold tracking-widest text-amber-800">SPACE AND NUCLEAR BATTERY MANUFACTURERS</span>
              <h3 className="text-xl font-semibold text-gray-900 mt-3 mb-4">The Organizations That Power What Operates Beyond Sunlight</h3>
              <p className="text-sm text-gray-600 leading-relaxed mb-4">
                These buyers do not speculate on promethium pricing. They consume promethium-147 in the nuclear batteries that keep spacecraft
                operational in permanent darkness, that sustain autonomous sensors in locations unreachable by human maintenance, and that power the
                next generation of implantable medical devices designed to outlast the patients who carry them. Tokenized promethium gives them{' '}
                <Link href="/products" className="text-amber-800 font-medium underline underline-offset-2">
                  guaranteed supply
                </Link>
                , transparent procurement outside government allocation queues, and physical delivery capability for an element that has never been
                commercially procurable.
              </p>
              <p className="text-xs text-gray-500 leading-relaxed">
                Space agencies and aerospace contractors (NASA, ESA, JAXA, SpaceX, Blue Origin, Rocket Lab), nuclear battery manufacturers,
                betavoltaic device developers, deep-space probe and satellite power system producers, autonomous sensor and remote monitoring
                companies, defense contractors and military power system developers, nuclear research institutions, implantable medical device
                developers (cardiac pacemakers, neural stimulators), industrial thickness gauge manufacturers, specialized luminescence and aerospace
                signage producers.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 border border-gray-200">
              <span className="text-xs font-bold tracking-widest text-blue-800">NUCLEAR MATERIAL INVESTORS</span>
              <h3 className="text-xl font-semibold text-gray-900 mt-3 mb-4">Investing in an Element Whose Supply Is Governed by Physics, Not Economics</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Most commodity supply deficits can theoretically be resolved by higher prices incentivizing new production. Promethium&apos;s cannot.
                Its supply is constrained by nuclear reactor production schedules, isotope separation facility capacity, and the fundamental physics of
                radioactive decay. No price increase can accelerate a reactor&apos;s neutron flux or bypass the 2.6-year half-life that ensures the
                global inventory is permanently shrinking. For investors who understand that physics-constrained supply creates a fundamentally
                different risk profile than geology-constrained supply, tokenized promethium offers direct exposure to the most extreme material
                scarcity in the periodic table.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 border border-gray-200">
              <span className="text-xs font-bold tracking-widest text-purple-800">ON-CHAIN INFRASTRUCTURE</span>
              <h3 className="text-xl font-semibold text-gray-900 mt-3 mb-4">Collateral Backed by the Only Element That Ceases to Exist If You Wait Long Enough</h3>
              <p className="text-sm text-gray-600 leading-relaxed mb-4">
                Every other tokenized commodity persists indefinitely in storage. Gold does not decay. Silver does not disappear. Praseodymium does not
                emit radiation. Promethium does. Its 2.6-year half-life means the physical backing of every token is actively transforming, creating
                a completely unique dynamic in commodity-backed digital assets: scarcity that increases over time by physical law, not market
                manipulation. For protocols, treasuries, and funds seeking real-world collateral with a supply profile that literally cannot be
                replicated by any non-radioactive material.
              </p>
              <p className="text-xs text-gray-500 leading-relaxed">
                Crypto funds seeking exposure to physics-constrained nuclear materials with no substitute, protocol treasuries diversifying into
                the rarest physical asset class available on-chain, DeFi protocols building collateral pools backed by decay-adjusted scarcity
                dynamics, blockchain foundations investing in materials at the intersection of space economy and nuclear technology, DAOs with
                strategic material and frontier technology investment mandates.
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
            Instant Settlement for Tokenized Promethium. No Intermediaries. No Government Queues.
          </h2>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-4xl mb-12">
            Promethium has never been traded on any commercial market. Procurement has historically required bilateral agreements between national
            governments, isotope allocation requests through Department of Energy programs, or direct contracts with nuclear fuel reprocessing
            facilities operating under classified security protocols. Settlement timelines are measured in months, not days. Approvals pass through
            layers of regulatory review, export licensing, radiological transport certification, and custodial verification that make traditional
            commodity procurement look streamlined by comparison. There is no spot market. There is no futures exchange. There is no broker network.
            For the rarest nuclear material on Earth, the market infrastructure has been precisely zero. We built the first.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="bg-gray-50 rounded-2xl p-6 md:p-8 border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-1">The Old Way</h3>
              <p className="text-sm text-gray-500 mb-6">Government Allocation Queues. Months to Settle. Classified Pricing.</p>
              <div className="space-y-3">
                {[
                  'Nuclear Reactor / Fuel Cycle Facility',
                  'National Laboratory / Isotope Program',
                  'Government Allocation Review',
                  'Regulatory and Export Licensing',
                  'Radiological Transport Certification',
                  'Isotope Broker / Intermediary',
                  'Custodial Verification',
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
                Settlement: T+30 to T+90 (standard for nuclear material transactions)
              </p>
            </div>

            <div className="bg-gray-900 text-white rounded-2xl p-6 md:p-8">
              <h3 className="text-lg font-semibold mb-1">The Toto Finance Way</h3>
              <p className="text-sm text-gray-400 mb-6">Source ↔ Buyer. Direct. Instant.</p>
              <div className="space-y-3">
                {['Nuclear Facility / Isotope Production', 'Toto Finance Platform', 'Buyer'].map((step, i) => (
                  <div key={step} className="flex items-center gap-3">
                    <div className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0 text-xs font-semibold">
                      {i + 1}
                    </div>
                    <span className="text-sm">
                      {i === 1 ? (
                        <Link href="/products" className="underline underline-offset-2 hover:text-amber-200">
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
                Promethium has never existed as a commercial asset. It has existed as a government-allocated resource, distributed through
                classification-level procurement channels that treat a chemical element as a strategic national asset rather than a tradeable
                commodity. Toto Finance uses blockchain to create what has never existed: a transparent, compliance-integrated, instant-settlement
                market for promethium, transforming a classified allocation process into an open platform where space agencies, battery manufacturers,
                institutional investors, and qualified buyers can access the only radioactive rare earth element through infrastructure that settles
                in seconds rather than months.
              </p>
            </div>
          </div>

          <h3 className="text-2xl font-medium text-gray-900 mb-6 text-center">Settlement Faster Than Radioactive Decay</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                name: 'USDC',
                issuer: 'Circle',
                detail:
                  'Fully reserved and independently attested dollar stablecoin engineered for institutional settlement. The compliance architecture and regulatory transparency that space agencies, defense procurement offices, and nuclear battery manufacturers require for auditable digital transactions involving strategically classified materials.',
              },
              {
                name: 'USDT',
                issuer: 'Tether',
                detail:
                  'Over $140 billion in global circulation providing the settlement depth that even the rarest nuclear material transactions require. When procurement involves an element whose entire annual global production costs less than a luxury automobile, USDT delivers execution infrastructure that eliminates counterparty friction regardless of transaction scale.',
              },
              {
                name: 'USAT',
                issuer: 'Tether (US Regulated)',
                detail:
                  'US-regulated stablecoin under the GENIUS Act framework. Purpose-built for transactions where Department of Energy compliance, Defense Production Act requirements, and ITAR (International Traffic in Arms Regulations) considerations govern the acquisition of nuclear battery materials destined for US space programs and defense applications.',
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
            DeFi Infrastructure for Tokenized Promethium
          </h2>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-4xl mb-12">
            Promethium has never existed as a financial asset of any kind. Not a traded commodity. Not a listed security. Not a futures contract. Not
            a fund holding. Not a collateral class. For its entire history as a usable element, promethium has been a government-allocated resource,
            distributed through national laboratory programs, consumed in classified applications, and invisible to the financial system entirely.
            Tokenization does not merely digitize promethium. It creates promethium as a financial instrument for the first time, constructing an
            entire market architecture for an element that has never had a price visible to anyone outside a government procurement office.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            <div className="bg-white rounded-2xl p-6 md:p-8 border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">The First Promethium Market That Has Ever Existed</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Before tokenization, promethium did not have a market. It had a government allocation queue. No buyer could acquire promethium through
                commercial channels. No investor could take a position in promethium at any scale. No benchmark existed to reference its value
                independently. Tokenized promethium creates the first open trading venue for this element: a continuous secondary market on
                decentralized exchanges where price discovery happens transparently, transfers execute instantly, and the rarest nuclear material on
                Earth becomes a tradeable asset for the first time in its existence.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-6 md:p-8 border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Yield Generated by the Element That Powers Missions Beyond the Sun</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Lend promethium tokens to counterparties seeking exposure to nuclear material pricing or hedged positions in space economy supply
                chains. Interest rates reflect real-world demand driven by NASA mission schedules, commercial space station development timelines,
                betavoltaic device commercialization, and defense nuclear battery procurement cycles. Yield generated by the only element that
                converts radioactive decay into electrical power, applied to an asset class that did not exist before Toto Finance created it.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-6 md:p-8 border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Capital Without Surrendering the Rarest Physical Asset on Earth</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Space agencies and institutional investors holding promethium positions have historically had no mechanism for accessing capital from
                those holdings, because promethium has never been independently held as a financial asset.{' '}
                <Link href="/products" className="text-amber-800 font-medium underline underline-offset-2">
                  Borrow against promethium
                </Link>{' '}
                tokens to receive stablecoins while maintaining full exposure to an element whose physics-constrained supply and accelerating demand
                create a fundamentally different value trajectory than any geology-constrained commodity. Liquidity without liquidation for the scarcest
                material in the tokenized asset ecosystem.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-6 md:p-8 border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Risk Architecture for an Element Governed by Half-Lives, Not Market Cycles</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Promethium&apos;s supply risk is unlike any other commodity: constrained by reactor production schedules, isotope separation capacity,
                and radioactive decay that permanently reduces inventory over time. Traditional commodity risk tools do not account for physical decay
                of the underlying asset. Smart contract infrastructure automates decay-adjusted collateral monitoring, margin management calibrated to
                half-life schedules, and position tracking that reflects the unique dynamics of an asset whose physical backing is actively
                transforming. The first risk architecture built specifically for a radioactive commodity.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 md:p-8 border border-gray-200">
            <h3 className="text-xl font-medium text-gray-900 mb-6 text-center">
              From Nuclear Reactor to Global Digital Market: The Promethium Token Path
            </h3>
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              {[
                'Synthesized: Promethium-147 recovered from nuclear fuel reprocessing, purified through ion exchange separation, secured in specialized storage, and bound to on-chain token identity with decay-adjusted inventory tracking',
                'Acquired: Purchased with USDC, USDT, or USAT at transparent pricing reflecting reactor production constraints and accelerating space economy demand',
                'Positioned: Held in wallet, traded on secondary markets, or bridged across chains to integrate with holder procurement and portfolio infrastructure',
                'Activated: Deployed into yield protocols, pledged as loan collateral, or structured for nuclear material supply disruption hedging',
                'Delivered: Redeemed for physical promethium-147 isotopes for nuclear battery fabrication, betavoltaic device integration, or specialized industrial application subject to regulatory handling protocols',
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
            Tokenized Promethium vs Every Other Way to Access the Rarest Nuclear Material
          </h2>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-4xl mb-12">
            There has never been a way to invest in promethium. There has never been a way to commercially procure it outside government channels. No
            ETF includes it. No futures exchange lists it. No commodity broker offers it. The only access paths that have ever existed are government
            allocation programs and classified bilateral agreements between nuclear states. Toto Finance built what nuclear material markets have
            never offered: open, fractional, instant access to the element that powers everything operating beyond the reach of sunlight.
          </p>

          <div
            className="overflow-x-auto rounded-2xl border border-gray-200"
            aria-label="Comparison table of tokenized promethium on Toto Finance versus government procurement, direct laboratory purchase, and ETFs/futures across 10 features including promethium-specific access, settlement speed, price transparency, and DeFi capabilities showing that no commercial alternative has ever existed."
          >
            <table className="w-full text-sm text-left min-w-[720px]">
              <thead>
                <tr className="bg-gray-900 text-white">
                  <th className="px-4 md:px-6 py-4 font-medium">Feature</th>
                  <th className="px-4 md:px-6 py-4 font-medium">Government Procurement</th>
                  <th className="px-4 md:px-6 py-4 font-medium bg-white/10">Toto Finance</th>
                  <th className="px-4 md:px-6 py-4 font-medium">Direct Lab Purchase</th>
                  <th className="px-4 md:px-6 py-4 font-medium">ETFs / Futures</th>
                </tr>
              </thead>
              <tbody className="bg-white">
                {[
                  ['Promethium-Specific', 'Yes (allocated)', 'Yes (1:1)', 'Yes (restricted)', 'N/A (none exist)'],
                  ['Trading Hours', 'Government business hours', '24/7/365', 'Restricted access', 'N/A'],
                  ['Settlement', 'T+30 to T+90', 'T+0 (Instant)', 'Months', 'N/A'],
                  ['Settlement Currency', 'Fiat (government wire)', 'USDC, USDT, USAT', 'Wire transfer', 'N/A'],
                  ['Min. Investment', 'Government contract scale', 'Fractional (from $1)', '$500,000+ (classified)', 'N/A'],
                  ['Physical Redemption', 'Yes (complex protocols)', 'Yes', 'Yes (restricted)', 'N/A'],
                  ['On-Chain Transparency', 'No (classified)', 'Yes', 'No', 'N/A'],
                  ['DeFi Yield / Loans', 'No', 'Yes', 'No', 'N/A'],
                  ['Price Transparency', 'Classified / bilateral', 'Real-time oracle', 'Opaque', 'N/A'],
                  ['Intermediaries', 'Multiple government layers', 'None (P2P)', 'Laboratory + regulatory', 'N/A'],
                ].map((row, i) => (
                  <tr key={row[0]} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="px-4 md:px-6 py-3 font-medium text-gray-900">{row[0]}</td>
                    <td className="px-4 md:px-6 py-3 text-gray-600">{row[1]}</td>
                    <td className="px-4 md:px-6 py-3 text-gray-900 font-medium bg-amber-50/50">{row[2]}</td>
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
            Building Financial Infrastructure for an Element That Has Never Had Any
          </h2>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-4xl mb-12">
            Promethium has never had financial infrastructure because it has never been treated as a financial asset. It has existed inside classified
            government programs, distributed through national laboratory allocation processes, priced through bilateral agreements that have never been
            publicly disclosed. No exchange listing. No pricing benchmark. No settlement mechanism. No collateral framework. No lending facility.
            No risk management tool. Every feature of the Toto Finance platform for promethium was built from absolute zero because promethium has
            existed outside the financial system for its entire usable history.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                t: 'Physical Backing with Nuclear-Grade Delivery Capability',
                b: 'Every promethium token connects to verified promethium-147 isotopes (99.9%+) in secured, radiologically compliant storage facilities. Request physical delivery and receive material ready for nuclear battery fabrication, betavoltaic device integration, or specialized industrial application, subject to appropriate regulatory handling and transport protocols. In a market where promethium has only ever been delivered through government allocation channels, on-chain proof-of-reserves creates the first independent, publicly verifiable record of promethium holdings.',
              },
              {
                t: 'Price Discovery for an Element That Has Never Had a Public Price',
                b: "Promethium has never had a transparent price. Its value has been determined through classified bilateral agreements, government procurement budgets, and internal laboratory cost accounting that has never been disclosed publicly. Toto Finance's oracle feeds and on-chain trading activity create the first open promethium pricing mechanism: real-time, independently verifiable, and reflective of actual market demand rather than government-determined allocation values that have historically been invisible outside classified procurement channels.",
              },
              {
                t: 'Instant Settlement for a Material That Has Never Been Commercially Traded',
                b: 'Traditional promethium procurement operates through government allocation processes with settlement timelines measured in months, layered with regulatory review, export licensing, and radiological transport certification. Token settlement creates the first mechanism for acquiring promethium exposure outside government channels, settling T+0 with stablecoins. For nuclear battery manufacturers seeking to secure supply outside government allocation queues, instant settlement is not an improvement over existing infrastructure. It is the creation of commercial infrastructure where none has ever existed.',
              },
              {
                t: 'Compliance Architecture for Nuclear Material Transactions',
                b: 'Promethium transactions operate within regulatory frameworks governing nuclear materials: IAEA safeguards, national nuclear regulatory requirements, radiological transport regulations, and export control regimes including ITAR for US-origin materials. Smart contracts embed KYC/AML verification, jurisdictional transfer restrictions, and nuclear material compliance rules directly into token architecture, ensuring every transaction satisfies the regulatory requirements that have historically confined promethium procurement to government-to-government channels.',
              },
              {
                t: 'Financial Tools for an Asset Class Created from Nothing',
                b: 'Lending, borrowing, hedging, and collateral management for promethium as a standalone asset: capabilities that have never existed in any form because promethium has never existed as an independent financial instrument. Smart contract protocols enable yield generation from promethium positions, stablecoin borrowing against holdings with decay-adjusted collateral parameters, and programmable hedging strategies. An entire financial stack constructed for an element that the financial system has never previously acknowledged.',
              },
              {
                t: 'Multi-Chain Presence',
                b: 'Tokenized promethium is deployed across Ethereum, Polygon, Cardano, Solana, and XRP Ledger. Space agencies, defense procurement platforms, institutional custodians, DeFi protocols, and individual holders can interact with promethium tokens on whatever chain infrastructure their operations already use. No migration required, no ecosystem lock-in, no chain-specific restrictions on the rarest nuclear material ever tokenized.',
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
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-gray-900 leading-tight mb-6">Tokenized Promethium FAQ</h2>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-12">
            Direct answers about tokenized promethium, In-Ground Promethium, nuclear battery demand, and how Toto Finance provides the first
            commercial access to the only radioactive rare earth element ever created.
          </p>
          <PromethiumFAQ faqs={faqData} />
        </div>
      </section>

      {/* FOLD 13: Final CTA */}
      <section className="relative bg-gradient-to-br from-amber-900 via-amber-800 to-gray-900 text-white px-4 sm:px-6 md:px-8 lg:px-12 py-20 md:py-32 overflow-hidden">
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
            backgroundSize: '40px 40px',
          }}
        />
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <p className="text-xs uppercase tracking-widest text-amber-200/80 font-semibold mb-3">THIS IS WHY</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light leading-tight mb-8">
            Every Gram of Promethium on Earth Was Built Inside a Reactor. The World Needs More Than Reactors Can Deliver.
          </h2>
          <p className="text-base md:text-lg text-gray-200 leading-relaxed mb-10">
            The world needs 280 grams of promethium by 2030. Reactors will deliver 120. The 160-gram deficit is not a market imbalance that higher
            prices will correct. It is a physics constraint that only new reactor production capacity can address. Every gram that is produced is
            consumed or decaying. Every gram that is not produced is a spacecraft without power, a sensor network gone dark, a medical implant that
            cannot be built. Toto Finance is building the infrastructure to bring the only radioactive rare earth element to an open, transparent,
            instant-settlement market as a commercial asset for the first time in its existence.
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
