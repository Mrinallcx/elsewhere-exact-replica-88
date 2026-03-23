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
const SamariumTickerBar = dynamicImport(
  () => import('../components/client/SamariumTickerBar').then((mod) => ({ default: mod.SamariumTickerBar }))
);
const SamariumFAQ = dynamicImport(
  () => import('../components/client/SilverFAQ').then((mod) => ({ default: mod.SilverFAQ }))
);

const PAGE_URL = 'https://totofinance.co/tokenized-samarium';
const PAGE_TITLE = 'Tokenized Samarium | Digital Rare Earth Backed by Physical Assets | Toto Finance';
const PAGE_DESCRIPTION =
  'When neodymium magnets fail from heat, samarium-cobalt magnets keep working. Toto Finance brings the extreme-temperature rare earth on-chain from 1:1 redeemable metal tokens to In-Ground future delivery contracts. The magnet inside every fighter jet, missile, and satellite. Instant stablecoin settlement. DeFi secondary markets.';

const breadcrumbItems = [
  { name: 'Home', item: 'https://totofinance.co' },
  { name: 'Products', item: 'https://totofinance.co/products' },
  { name: 'Rare Earth Minerals', item: 'https://totofinance.co/rare-earth-mineral' },
  { name: 'Tokenized Samarium', item: PAGE_URL },
];

const faqData = [
  {
    question: 'What is tokenized samarium?',
    answer:
      'A blockchain-based digital asset backed 1:1 by refined samarium metal (99.9%+ Sm) in insured, audited vaults. Defense-grade purity, ready for SmCo magnet alloy sintering, nuclear reactor control rod fabrication, and specialized industrial applications. Redeemable for physical samarium on demand. Toto Finance is building the infrastructure to bring samarium on-chain as an independent asset with instant stablecoin settlement and DeFi secondary markets.',
  },
  {
    question: 'What is In-Ground Samarium?',
    answer:
      'A tokenized future delivery contract for samarium still contained in rare earth deposits at certified mining operations. Short-term (1 to 12 months) for operations with active separation capacity, long-term (1 to 6 years) for earlier-stage deposits. Built for defense agencies, aerospace contractors, satellite operators, sovereign funds, and institutional investors positioning for the structural samarium deficit that is widening with every fighter jet, satellite, and missile contract approved.',
  },
  {
    question: 'Where does the samarium come from?',
    answer:
      'Directly from rare earth mining companies and SmCo alloy processing facilities across North America (Mountain Pass, Bear Lodge, and expanding US separation capacity under Defense Production Act funding), Australia (Lynas Rare Earths and Western Australian deposits), Greenland and the Nordic region (Kvanefjeld, Kringlerne, and NATO-aligned supply projects), and Africa (emerging NdPr and samarium-bearing deposits in Burundi, Tanzania, and Madagascar). No middlemen. No intermediary traders. Secured at the separation and metal production stage. More on partnerships: https://totofinance.co/about.',
  },
  {
    question: 'Who buys tokenized samarium?',
    answer:
      'Three groups: (1) Defense and aerospace manufacturers, including SmCo magnet companies, fighter jet producers, satellite and space propulsion manufacturers, missile and munition producers, radar and electronic warfare system manufacturers, nuclear reactor control rod fabricators, oil and gas downhole equipment producers, and samarium-153 cancer therapy isotope producers. (2) Defense supply chain investors, including funds and allocators seeking direct exposure to the extreme-temperature magnet element with defense-appropriation-guaranteed demand and no viable substitute. (3) On-chain participants, including crypto funds, protocol treasuries, and DeFi protocols seeking collateral backed by a material governments classify as critical to national security.',
  },
  {
    question: 'How does instant settlement work?',
    answer:
      'T+0 settlement using USDC, USDT, or USAT. Traditional samarium procurement operates through Chinese-dominated rare earth trading channels with settlement measured in weeks, layered with brokers, traders, banks, and clearing houses. Toto Finance creates a direct settlement mechanism connecting samarium sources with buyers on-chain, eliminating every intermediary in the traditional supply chain.',
  },
  {
    question: 'Can I trade tokenized samarium on DeFi platforms?',
    answer:
      'Yes. After acquisition, trade on decentralized exchanges globally, generate yield by lending to counterparties seeking defense-correlated rare earth exposure, or use samarium tokens as collateral for stablecoin loans. Samarium has never existed as an independently tradeable financial asset. Tokenization creates both the asset class and its market simultaneously.',
  },
  {
    question: 'Why is samarium critical for defense and aerospace?',
    answer:
      'Samarium-cobalt magnets operate reliably at continuous temperatures up to 350°C, far exceeding neodymium magnets which degrade above 150°C and fail above 200°C. This makes samarium irreplaceable in fighter jets (12 to 15 kg of SmCo per F-35), satellite propulsion systems, missile guidance actuators, military radar, and downhole drilling motors. SmCo magnets also resist corrosion without coatings and withstand radiation in space environments. The US Department of Defense has designated samarium as a critical defense material. No substitute material exists.',
  },
  {
    question: 'What is the samarium price forecast?',
    answer:
      'Roskill forecasts $48,500/mt in 2026. Critical Minerals Institute projects prices exceeding $52,000/mt by 2027 as defense procurement accelerates simultaneously across allied nations. The structural deficit is expected to persist and intensify through 2030 as fighter jet production scales, satellite constellations deploy, missile inventories are restocked, and offshore drilling deepens.',
  },
  {
    question: 'How do I get early access?',
    answer:
      'Visit https://totofinance.co/. Defense contractors, aerospace manufacturers, satellite operators, sovereign strategic reserve programs, institutional investors, mining partners, and industrial buyers can reach out directly for partnership and early allocation discussions.',
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
        'Tokenized commodity platform offering 1:1 asset-backed samarium metal tokens and In-Ground Samarium future delivery contracts with instant stablecoin settlement.',
    },
    {
      '@type': 'Product',
      name: '1:1 Samarium Metal Token',
      description:
        'Digital asset backed 1:1 by refined samarium metal (99.9%+ Sm) in insured custody, redeemable for physical delivery. Category: Tokenized Commodity.',
      category: 'Tokenized Commodity',
      brand: { '@type': 'Brand', name: 'Toto Finance' },
      url: PAGE_URL,
    },
    {
      '@type': 'Product',
      name: 'In-Ground Samarium',
      description:
        'Tokenized future delivery contract for samarium in rare earth deposits at certified mining operations. Category: Commodity Future Delivery Contract.',
      category: 'Commodity Future Delivery Contract',
      brand: { '@type': 'Brand', name: 'Toto Finance' },
      url: PAGE_URL,
    },
  ],
};

export default function TokenizedSamariumPage() {
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
            Tokenized Samarium by Toto Finance
          </h1>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light leading-tight mb-8">
            Where Neodymium Fails from Heat, Samarium Keeps Working. Now Anyone Can Own It.
          </h2>
          <p className="text-base md:text-lg text-gray-200 leading-relaxed mb-10 max-w-3xl text-left">
            At 150°C, neodymium magnets begin to lose their grip. At 200°C, they degrade. At 350°C, they are useless. But inside a fighter jet engine,
            a missile guidance system, a satellite reaction wheel, or a downhole drilling motor, 350°C is not an extreme scenario. It is the operating
            environment. That is where samarium takes over. Samarium-cobalt magnets maintain full magnetic performance at temperatures that would destroy
            every NdFeB magnet ever manufactured. Every F-35 carries 12 to 15 kilograms of SmCo magnets. Every satellite propulsion system depends on
            them. Every precision-guided munition uses them. China controls 85% of production, and the 4,200-tonne supply gap projected for 2030 is
            widening with every defense contract signed and every satellite constellation launched. Yet access to samarium as an individual
            investment asset has never existed outside industrial rare earth procurement.{' '}
            <Link href="/" className="text-white underline underline-offset-2 hover:text-slate-200">
              Toto Finance
            </Link>{' '}
            is changing that by bringing the magnet metal that operates where no other can on-chain for the first time.
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
              Why Samarium Matters
            </a>
          </div>
        </div>
      </section>

      <SamariumTickerBar />

      {/* FOLD 2: Crisis */}
      <section id="crisis" className="scroll-mt-24 px-4 sm:px-6 md:px-8 lg:px-12 py-20 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto">
          <p className="text-xs uppercase tracking-widest text-gray-400 font-semibold mb-3">THE WHY</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-gray-900 leading-tight mb-6">
            Neodymium Gets the Headlines. Samarium Gets the Mission Done.
          </h2>
          <div className="text-base md:text-lg text-gray-600 leading-relaxed max-w-4xl mb-12 space-y-4">
            <p>
              We chose samarium because it represents the most underappreciated single point of failure in the global defense and aerospace supply
              chain. Not underappreciated because the military does not depend on it. Underappreciated because the conversation about rare earth magnets
              has been so dominated by neodymium that the element which actually operates in the most demanding environments has been relegated to an
              afterthought.
            </p>
            <p>
              The defense industry does not use neodymium magnets in fighter jets. It cannot. NdFeB magnets lose magnetic strength above 150°C and
              become completely unreliable above 200°C. Inside a jet engine nacelle, behind a missile nosecone, within a satellite reaction wheel, and
              at the bottom of an oil well, operating temperatures routinely exceed 200°C and often reach 350°C. Samarium-cobalt magnets are the only
              permanent magnets on Earth rated for these conditions. They resist demagnetization at extreme temperatures, withstand corrosive
              environments without protective coatings, and maintain dimensional stability under mechanical shock and vibration. The F-35, the most
              expensive weapons platform in history, depends on 12 to 15 kilograms of SmCo magnets per airframe. Every precision-guided munition, every
              military satellite, every radar system capable of operating in hostile thermal environments uses samarium. China controls 85% of global
              samarium production. The US Department of Defense has designated samarium as a critical defense material. And the 4,200-tonne supply
              deficit projected for 2030 has no resolution in sight.
            </p>
            <p className="font-medium text-gray-900">That is why we exist.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gray-50 rounded-2xl p-6 md:p-8 border border-gray-100">
              <p className="text-4xl md:text-5xl font-light text-gray-900 mb-3">1,850 tonnes</p>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">A Defense Supply Chain Already in Deficit</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Roskill forecasts a 1,850-tonne samarium deficit in 2025, with the gap accelerating through the decade. China controls 85% of global
                samarium production, and export restrictions are creating acute supply scarcity for Western defense and aerospace manufacturers at the
                exact moment that military modernization programs are scaling production. Every allied nation&apos;s fighter jet program, satellite
                constellation, and missile inventory depends on samarium sourced overwhelmingly from a single geopolitical competitor.
              </p>
            </div>
            <div className="bg-gray-50 rounded-2xl p-6 md:p-8 border border-gray-100">
              <p className="text-4xl md:text-5xl font-light text-gray-900 mb-3">350°C</p>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">The Temperature Where Only Samarium Survives</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Samarium-cobalt magnets operate reliably at continuous temperatures up to 350°C, with peak tolerance reaching 550°C for specialized
                grades. Neodymium magnets begin losing performance above 150°C and become operationally useless above 200°C. This 200-degree
                performance gap is not a marginal engineering advantage. It is the difference between a magnet technology that can operate inside jet
                engines, missile systems, and downhole drilling equipment and one that physically cannot. There is no emerging material that closes this
                gap. SmCo&apos;s thermal dominance is structural and permanent.
              </p>
            </div>
            <div className="bg-gray-50 rounded-2xl p-6 md:p-8 border border-gray-100">
              <p className="text-4xl md:text-5xl font-light text-gray-900 mb-3">4,200 tonnes</p>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">A Deficit That Deepens with Every Defense Contract Signed</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Global samarium demand is projected to reach 11,800 tonnes per year by 2030, while supply from existing and planned rare earth
                operations will deliver only 7,600 tonnes. The 4,200-tonne gap represents a 36% shortfall. Every F-35 delivery, every satellite
                constellation expansion, every missile production contract, every offshore drilling program adds permanent samarium demand to a supply
                base that is not expanding at anything approaching the required pace.
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
            Understanding Why Samarium Operates Where Every Other Magnet Material Fails
          </h2>
          <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto text-center mb-14">
            The rare earth element that gives permanent magnets their extreme-temperature performance. Essential for the SmCo alloy inside every
            fighter jet, missile system, and satellite operating at temperatures that would destroy neodymium alternatives.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
              <div
                className="rounded-xl bg-gradient-to-br from-slate-900 to-slate-950 text-white p-6 mb-4 font-mono text-sm"
                role="img"
                aria-label="Samarium element card showing Sm symbol, atomic number 62, SmCo classification"
              >
                <p className="text-3xl font-light mb-1">Sm</p>
                <ul className="space-y-1 text-slate-200/90">
                  <li>Atomic Number: 62</li>
                  <li>Density: 7,520 kg/m³</li>
                  <li>Melting Point: 1,072°C</li>
                  <li>Magnet Role: Extreme-Temperature Stability</li>
                  <li>Classification: Defense-Grade Magnet Element</li>
                </ul>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">The Element</h3>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
              <div
                className="rounded-xl bg-gradient-to-br from-slate-700/80 to-slate-900 min-h-[160px] mb-4"
                role="img"
                aria-label="Rare earth mining extracting samarium from bastnäsite and monazite"
              />
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Where It Comes From</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Extracted from bastnäsite, monazite, and ionic clay minerals in China, USA, Australia, India, Brazil, and Greenland. Samarium is a
                co-product of rare earth processing, comprising approximately 3% of rare earth concentrates. China controls 85% of global production,
                with separation and SmCo alloy manufacturing concentrated in Chinese facilities that serve both domestic military programs and export
                markets under tightening restrictions.
              </p>
              <p className="text-xs text-gray-500 mt-3 font-mono">
                Ore → Chemical Separation → Ion Exchange Purification → Samarium Oxide Reduction → 99.9% Pure Samarium Metal → SmCo Alloy Sintering
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
              <div
                className="rounded-xl bg-gradient-to-br from-orange-950/60 to-slate-900 min-h-[160px] mb-4"
                role="img"
                aria-label="SmCo magnet extreme-temperature performance for aerospace and defense"
              />
              <h3 className="text-lg font-semibold text-gray-900 mb-3">The Thermal Resilience That No Other Magnet Delivers</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Samarium-cobalt magnets (SmCo) maintain full magnetic performance at temperatures up to 350°C continuous operation, with specialized
                grades surviving 550°C peaks. SmCo magnets resist corrosion without protective coatings, withstand radiation exposure in space
                environments, and maintain dimensional stability under extreme mechanical shock and vibration. Samarium also possesses the highest neutron
                absorption cross-section of any non-fissile element, making it critical for nuclear reactor control rod assemblies. Additionally, the
                radioactive isotope samarium-153 is used in cancer therapy to treat bone metastases.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
              <div
                className="rounded-xl bg-gradient-to-br from-slate-600 to-slate-900 min-h-[160px] mb-4"
                role="img"
                aria-label="SmCo applications in fighters, satellites, missiles, drilling, control rods"
              />
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Where It Goes</h3>
              <p className="text-sm text-gray-600 leading-relaxed mb-4">
                SmCo permanent magnets for fighter jets (F-35, F-22, Eurofighter), satellite electric propulsion and reaction wheels, missile guidance
                actuators and sensors, radar and electronic warfare systems, downhole drilling motors operating at 200°C+, nuclear reactor control rods,
                samarium-153 cancer therapy (bone metastases), infrared-absorbing glass for laser range-finding, high-temperature industrial motors and
                actuators.
              </p>
              <p className="text-sm font-semibold text-slate-900 bg-slate-100 rounded-lg px-3 py-2">
                $3.8B+ global samarium market (defense procurement is price-insensitive and accelerating)
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
            Every Military Modernization Program on Earth Is a Samarium Procurement Commitment. Supply Covers None of Them.
          </h2>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-4xl mb-12">
            There is no substitute for samarium-cobalt magnets in extreme-temperature applications. No alternative permanent magnet material operates
            reliably above 200°C. No emerging technology closes the thermal performance gap between SmCo and NdFeB. Every fighter jet that rolls off a
            production line contains samarium. Every satellite launched into orbit depends on it. Every precision-guided munition fired carries it.
            Every drilling rig reaching deep formations requires it. Defense procurement does not negotiate with material physics. When the operating
            environment demands magnetic performance at 350°C, the procurement office writes a samarium purchase order. And global supply is not remotely
            prepared for the volume of purchase orders being generated by simultaneous military modernization, space commercialization, and energy
            exploration programs worldwide.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <div className="bg-gray-50 rounded-2xl p-6 md:p-8 border border-gray-100">
              <h3 className="text-xl font-medium text-gray-900 mb-3">
                Fighter Aircraft: 12 to 15 Kilograms of Samarium per Airframe
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                A single F-35 Lightning II contains 12 to 15 kilograms of samarium-cobalt magnets distributed across flight control actuators, sensor
                systems, engine accessories, and avionics equipment. The F-22, Eurofighter Typhoon, Rafale, and every fifth-generation fighter program in
                development uses SmCo magnets in identical roles. With global military aircraft deliveries accelerating across allied nations
                simultaneously rearming, aerospace defense demand alone consumes over 2,400 tonnes of samarium annually, and every new fighter contract
                adds permanent consumption to a supply chain that was already in deficit before the current rearmament cycle began.
              </p>
            </div>
            <div className="bg-gray-50 rounded-2xl p-6 md:p-8 border border-gray-100">
              <h3 className="text-xl font-medium text-gray-900 mb-3">Satellite Propulsion and Attitude Control: SmCo in Every Orbit</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Electric propulsion systems in satellites depend on SmCo magnets for Hall-effect ion thrusters and reaction wheel assemblies that must
                operate in the radiation-intense, temperature-cycling environment of space for 15 to 20 year mission lifetimes. The global satellite
                manufacturing market requires an estimated 850 tonnes of samarium annually, growing at 14% compound annual growth rate through 2030 as
                mega-constellations from Starlink, OneWeb, Amazon Kuiper, and sovereign programs deploy thousands of spacecraft simultaneously.
              </p>
            </div>
            <div className="bg-gray-50 rounded-2xl p-6 md:p-8 border border-gray-100">
              <h3 className="text-xl font-medium text-gray-900 mb-3">Precision-Guided Munitions: Samarium in Every Strike</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Every precision-guided missile, smart bomb, and autonomous munition uses samarium-cobalt magnets in guidance actuators, sensor
                assemblies, and control surface motors that must function reliably after launch acceleration, aerodynamic heating, and terminal
                maneuver stresses. Defense procurement of samarium for munitions is classified by volume but is understood to represent a significant
                and growing share of total consumption. NATO&apos;s munition restocking programs following inventory drawdowns have created surge demand
                that compounds the structural deficit.
              </p>
            </div>
            <div className="bg-gray-50 rounded-2xl p-6 md:p-8 border border-gray-100">
              <h3 className="text-xl font-medium text-gray-900 mb-3">Oil and Gas Downhole Equipment: Magnetic Performance at Depth</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                High-temperature downhole drilling motors, measurement-while-drilling (MWD) tools, and logging-while-drilling (LWD) instruments require
                SmCo magnets to operate reliably at 200°C+ temperatures encountered in deep and ultra-deep wells. The oil and gas sector consumes an
                estimated 1,200 tonnes of samarium annually for exploration and production equipment. As drilling depths increase to access
                unconventional reserves and offshore fields, the thermal demands on downhole magnetic components intensify, and SmCo remains the only
                solution.
              </p>
            </div>
          </div>

          <div className="bg-gray-50 rounded-2xl p-6 md:p-8 border border-gray-200">
            <h3 className="text-xl font-medium text-gray-900 mb-2">A Deficit Driven by Rearmament, Space, and Energy Exploration</h3>
            <p className="text-sm text-gray-500 mb-6">
              Bar chart showing global samarium demand rising from 7,200 tonnes in 2025 to 11,800 tonnes by 2030, with supply reaching approximately
              7,600 tonnes, creating a 4,200-tonne annual deficit.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-6">
              {[
                { year: '2025', val: '7.2', note: 'Demand (kt)' },
                { year: '2028', val: '9.8', note: 'Demand (kt)' },
                { year: '2030', val: '11.8', note: 'Demand (kt)' },
                { year: '2035', val: '16.5', note: 'Roskill projection' },
                { year: '2030 Supply', val: '~7.6', note: 'Gap: 4,200+ t' },
              ].map((d, i) => (
                <div
                  key={d.year}
                  className={`text-center p-4 rounded-xl ${i === 4 ? 'bg-red-50 border border-red-100' : i === 3 ? 'bg-slate-100' : 'bg-white border border-gray-100'}`}
                >
                  <p className={`text-sm mb-2 ${i === 4 ? 'text-red-800 font-medium' : 'text-gray-500'}`}>{d.year}</p>
                  <p className="text-sm font-semibold text-gray-900">{d.val} kt</p>
                  <p className="text-xs text-gray-500 mt-1">{d.note}</p>
                </div>
              ))}
            </div>
            <p className="text-xs text-gray-400">
              Sources: Roskill, Critical Minerals Institute, US Geological Survey, Mordor Intelligence.
            </p>
          </div>
        </div>
      </section>

      {/* FOLD 5: TWO PRODUCTS */}
      <section id="products" className="scroll-mt-24 px-4 sm:px-6 md:px-8 lg:px-12 py-20 md:py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <p className="text-xs uppercase tracking-widest text-gray-400 font-semibold mb-3 text-center">TWO PRODUCTS</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-gray-900 leading-tight mb-6 text-center">
            Two Ways to Own Tokenized Samarium
          </h2>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto text-center mb-14">
            Everything we believe about opening access to the extreme-temperature magnet element that defense and aerospace cannot function without comes
            to life in two products. One for samarium that is already refined and vaulted. One for samarium still locked in rare earth deposits awaiting
            separation. Both backed by physical material. Both settleable in stablecoins. Both built to give the defense contractors, satellite
            manufacturers, drilling companies, and investors who understand that 350°C is not an engineering edge case but the daily operating reality
            of every high-performance magnetic system a way to secure the element that every SmCo magnet on Earth requires.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
            <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm">
              <span className="inline-block text-xs font-bold tracking-wider text-slate-800 bg-slate-200 px-3 py-1 rounded-full mb-4">
                ASSET-BACKED TOKEN
              </span>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                <Link href="/products" className="hover:text-slate-600 underline-offset-2 hover:underline">
                  1:1 Samarium Metal Token
                </Link>
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed mb-6">
                Digital ownership of physical samarium. Every token is backed 1:1 by refined samarium metal (99.9%+ Sm) in insured, audited vault
                facilities. Defense-grade purity, ready for SmCo magnet alloy sintering, nuclear reactor control rod fabrication, and specialized
                industrial applications. Redeemable for physical samarium on demand. Not a derivative. Not a tracker. Not a basket. The actual metal.
              </p>
              <ul className="text-sm text-gray-700 space-y-2 list-disc pl-5">
                <li>Backed 1:1 by refined samarium metal (99.9%+ purity grade)</li>
                <li>Always redeemable for physical samarium delivery on demand</li>
                <li>Stored in insured, independently audited vault and warehouse facilities</li>
                <li>On-chain proof-of-reserves with real-time oracle feeds</li>
                <li>Fractional ownership, from $1, tradeable 24/7 with instant stablecoin settlement</li>
                <li>Ready for industrial end-use: SmCo magnets, aerospace actuators, defense systems, satellite propulsion, nuclear control rods, downhole drilling motors, cancer therapy isotope production</li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm">
              <span className="inline-block text-xs font-bold tracking-wider text-slate-800 bg-slate-200 px-3 py-1 rounded-full mb-4">
                FUTURE DELIVERY CONTRACT
              </span>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                <Link href="/products" className="hover:text-slate-600 underline-offset-2 hover:underline">
                  In-Ground Samarium
                </Link>
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed mb-6">
                Forward positions in samarium that has not been separated yet. Tokenized future delivery contracts backed by proven samarium content in
                rare earth deposits at certified mining operations. For organizations that understand that samarium&apos;s 4,200-tonne deficit is not a
                temporary market imbalance but the structural consequence of decades of underinvestment in non-Chinese rare earth processing capacity
                colliding with a synchronized global rearmament cycle that is adding permanent demand faster than any supply response can match.
              </p>
              <ul className="text-sm text-gray-700 space-y-2 list-disc pl-5">
                <li>Backed by proven samarium content in rare earth reserves at partner mining sites</li>
                <li>Pre-production pricing reflecting defense procurement acceleration and supply concentration risk</li>
                <li>On-chain reserve tracking with geological data transparency</li>
                <li>Physical delivery or settlement at maturity</li>
                <li>Verified reserves with third-party geological audits</li>
                <li>Built for defense agencies, aerospace contractors, sovereign funds, satellite operators, and institutional allocators</li>
              </ul>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-slate-900/10 border border-slate-200 rounded-2xl p-6 md:p-8">
              <p className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-2">SHORT-TERM DELIVERY</p>
              <p className="text-lg font-semibold text-gray-900 mb-3">1 to 12 Months</p>
              <p className="text-sm text-gray-600 leading-relaxed">
                Near-term samarium delivery contracts tied to active rare earth operations with separation and metal reduction capacity. For defense
                procurement teams managing fighter jet production schedules, satellite manufacturers coordinating constellation deployment timelines, and
                commodity specialists trading near-term samarium pricing in a market where every new military appropriations bill is simultaneously a
                samarium supply commitment.
              </p>
            </div>
            <div className="bg-slate-100 border border-slate-200 rounded-2xl p-6 md:p-8">
              <p className="text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">LONG-TERM DELIVERY</p>
              <p className="text-lg font-semibold text-gray-900 mb-3">1 to 6 Years</p>
              <p className="text-sm text-gray-600 leading-relaxed">
                Multi-year samarium positions backed by proven rare earth reserves at earlier-stage operations. Built for sovereign strategic reserves
                securing defense supply chains against Chinese export disruption, aerospace primes planning decade-scale fighter and satellite production,
                energy companies reserving downhole equipment supply, and institutional allocators who understand that the samarium deficit is the
                defense industry&apos;s materials problem with no diplomatic solution.
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
            Securing the Magnet Metal That Keeps Defense Systems Operational at 350°C. Directly.
          </h2>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto text-center mb-14">
            Samarium is a co-product of rare earth mining, extracted from the same bastnäsite, monazite, and ionic clay deposits that produce neodymium,
            praseodymium, and other lanthanides. Its supply chain is concentrated: 85% of production originates in China, with separation and SmCo alloy
            manufacturing overwhelmingly controlled by Chinese facilities. Toto Finance works directly with{' '}
            <Link href="/about" className="text-slate-800 font-medium underline underline-offset-2 hover:text-slate-600">
              rare earth mining companies and SmCo alloy processing facilities
            </Link>{' '}
            to secure samarium at the separation and metal production level, bypassing the trader networks that have historically stood between rare
            earth producers and the defense and aerospace industries that consume the finished product.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            {[
              {
                title: 'North America (United States and Canada)',
                text: 'Mountain Pass (California) produces rare earth concentrates containing samarium, with MP Materials expanding domestic separation capability under Defense Production Act funding. Bear Lodge (Wyoming) and Canadian projects in Quebec and Saskatchewan are developing samarium-bearing rare earth processing capacity. US government investment through the Defense Production Act, Inflation Reduction Act, and Department of Defense critical minerals programs specifically targets samarium supply security for domestic fighter jet, satellite, and missile production programs.',
              },
              {
                title: 'Australia',
                text: 'Australia hosts significant samarium-bearing rare earth deposits across Western Australia and Northern Territory, with Lynas Rare Earths operating the largest non-Chinese rare earth processing facility globally. Australian samarium supply is strategically important for AUKUS defense procurement, allied fighter jet programs, and Western satellite manufacturing supply chains seeking to reduce dependence on Chinese-controlled separation capacity.',
              },
              {
                title: 'Greenland and Nordic Region',
                text: "Greenland's Kvanefjeld and Kringlerne projects contain substantial samarium reserves alongside other heavy and light rare earth elements. Nordic rare earth operations across Sweden and Norway are strategically prioritized for NATO and European defense industrial base supply chain diversification, offering samarium sourcing routes entirely outside Chinese influence.",
              },
              {
                title: 'Africa',
                text: 'Emerging rare earth projects across Burundi, Tanzania, Madagascar, and South Africa contain samarium-bearing deposits. New processing facilities under development offer the potential to establish African samarium supply routes, expanding the geographic diversity of non-Chinese production and creating In-Ground Samarium positions at pre-production economics.',
              },
              {
                title: 'Developed Mines',
                text: 'Established rare earth mines in active production across multiple continents, delivering consistent samarium output with proven operational track records, full separation infrastructure, and existing off-take relationships. These operations supply the samarium metal that backs 1:1 token positions with immediate delivery capability.',
              },
              {
                title: 'Exploration and Development',
                text: 'New rare earth fields in preparation and exploration phases across Scandinavia, South America, Central Asia, and other emerging rare earth provinces. These represent the next generation of samarium supply, and In-Ground Samarium positions offer access at pre-production economics before separation output reaches the defense procurement market.',
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
              <strong>Secured at the separation and metal production stage.</strong> Samarium comes from the same rare earth deposits that produce
              neodymium and praseodymium, but its path to industrial use diverges at the separation facility where individual rare earth oxides are
              isolated. Toto Finance works at this critical processing point, eliminating the broker and trader layers that have historically mediated
              between rare earth producers and defense-grade SmCo magnet manufacturers. Verified provenance. Transparent chain of custody from{' '}
              <Link href="/how-tokenization-works" className="underline underline-offset-2 hover:text-slate-200">
                mine to token
              </Link>
              . Access to the extreme-temperature magnet metal that aerospace and defense cannot operate without.
            </p>
          </div>
        </div>
      </section>

      {/* FOLD 7: PARTICIPANTS */}
      <section className="px-4 sm:px-6 md:px-8 lg:px-12 py-20 md:py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <p className="text-xs uppercase tracking-widest text-gray-400 font-semibold mb-3 text-center">PARTICIPANTS</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-gray-900 leading-tight mb-6 text-center">
            Who Buys Tokenized Samarium
          </h2>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto text-center mb-14">
            Samarium has never been individually accessible as an investment asset. It has always been procured through industrial rare earth channels,
            bundled into SmCo alloy pricing, traded through Chinese-dominated supply networks, and available only to organizations with the procurement
            infrastructure to negotiate directly with rare earth separation facilities. The defense contractors, satellite manufacturers, and drilling
            companies that consume samarium have had no mechanism to secure forward supply independently, hedge specific samarium price risk outside
            combined rare earth quotations, or invest in the element as a standalone material. Toto Finance creates that mechanism for the first time.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 border border-gray-200">
              <span className="text-xs font-bold tracking-widest text-slate-800">DEFENSE AND AEROSPACE MANUFACTURERS</span>
              <h3 className="text-xl font-semibold text-gray-900 mt-3 mb-4">The Companies That Build What Operates at 350°C</h3>
              <p className="text-sm text-gray-600 leading-relaxed mb-4">
                These buyers do not speculate on samarium prices. They consume samarium in the SmCo magnets that become actuators, that become guidance
                systems, that become the components ensuring a fighter jet&apos;s control surfaces respond, a missile reaches its target, and a
                satellite maintains orientation for a 20-year mission lifetime. Tokenized samarium gives them{' '}
                <Link href="/products" className="text-slate-800 font-medium underline underline-offset-2">
                  supply continuity
                </Link>
                , procurement transparency outside Chinese-controlled channels, and physical delivery capability for an element that the US
                Department of Defense has designated as critical to national security.
              </p>
              <p className="text-xs text-gray-500 leading-relaxed">
                Aerospace defense contractors (Lockheed Martin, Raytheon, Northrop Grumman, BAE Systems), SmCo permanent magnet manufacturers, fighter jet
                and military aircraft producers, satellite and space propulsion system manufacturers, missile and precision-guided munition producers,
                military radar and electronic warfare system manufacturers, nuclear reactor control rod fabricators, oil and gas downhole drilling
                equipment producers, high-temperature industrial motor and actuator manufacturers, samarium-153 cancer therapy isotope producers.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 border border-gray-200">
              <span className="text-xs font-bold tracking-widest text-blue-800">DEFENSE SUPPLY CHAIN INVESTORS</span>
              <h3 className="text-xl font-semibold text-gray-900 mt-3 mb-4">Investing in the Material the Military Cannot Operate Without</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Investors who follow the neodymium rare earth narrative rarely examine which magnet element actually operates inside fighter jets,
                missiles, and satellites. It is not neodymium. It is samarium. SmCo magnets dominate every extreme-temperature military application
                because they are the only permanent magnets that function at the operating temperatures those systems generate. The defense
                industry&apos;s samarium dependence is absolute, its procurement is price-insensitive, and its supply deficit is widening with every
                rearmament program funded. Tokenized samarium offers direct exposure to this non-negotiable military dependency, with fractional access
                from $1 and a demand trajectory driven by government appropriations, not consumer markets.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 border border-gray-200">
              <span className="text-xs font-bold tracking-widest text-purple-800">ON-CHAIN INFRASTRUCTURE</span>
              <h3 className="text-xl font-semibold text-gray-900 mt-3 mb-4">Collateral Backed by the Element Governments Classify as Strategically Critical</h3>
              <p className="text-sm text-gray-600 leading-relaxed mb-4">
                When governments designate a material as critical to national defense, they are making a public statement that demand for that material
                is structurally guaranteed regardless of economic conditions. Samarium carries critical mineral designations from the United States,
                European Union, Japan, and allied nations. Tokenized samarium offers on-chain participants collateral backed by an element whose demand
                floor is set by military budgets rather than market sentiment: the same supply constraints as other rare earths, but with demand
                underwritten by defense appropriations that are not subject to consumer spending cycles or interest rate sensitivity.
              </p>
              <p className="text-xs text-gray-500 leading-relaxed">
                Crypto funds seeking defense-correlated commodity exposure with government-guaranteed demand floors, protocol treasuries diversifying
                into materials classified as strategically critical by multiple allied nations, DeFi protocols building collateral pools backed by
                defense procurement obligations, blockchain foundations investing in the physical layer of military modernization, DAOs with critical
                mineral and defense technology investment mandates.
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
            Instant Settlement for Tokenized Samarium. No Rare Earth Traders. No Defense Procurement Delays.
          </h2>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-4xl mb-12">
            Samarium procurement has historically operated through the same Chinese-dominated rare earth trading channels that control neodymium and
            praseodymium, layered with additional complexity from defense material classifications, export licensing, and end-use verification
            requirements. For an element that the Department of Defense designates as critical to national security, the procurement infrastructure
            moves at the speed of government contracting rather than the speed of military need. Brokers, traders, banks, clearing houses, and
            regulatory intermediaries extract time and cost at every stage while defense manufacturers wait weeks or months for settlement of a material
            their production lines consume daily. We built a system that settles in seconds.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="bg-gray-50 rounded-2xl p-6 md:p-8 border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-1">The Old Way</h3>
              <p className="text-sm text-gray-500 mb-6">8+ Intermediaries. Weeks to Settle. Opaque Pricing.</p>
              <div className="space-y-3">
                {[
                  'Mining Company / Rare Earth Producer',
                  'Separation and Processing Facility',
                  'SmCo Alloy Manufacturer',
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
                {['Mining / Separation Operation', 'Toto Finance Platform', 'Buyer'].map((step, i) => (
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
                Samarium has been traded through the same opaque, intermediary-heavy channels that govern the broader rare earth market:
                Chinese-controlled separation facilities feeding international traders who supply SmCo alloy manufacturers who deliver magnets to defense
                contractors. At every stage, pricing is opaque, settlement is slow, and the actual material passes through hands that add cost without
                adding value. Toto Finance uses blockchain to remove these layers entirely, creating a transparent, direct-settlement market where
                samarium producers connect with defense manufacturers, satellite companies, institutional investors, and qualified buyers through
                infrastructure that settles in seconds rather than weeks and publishes pricing in real time rather than behind bilateral negotiation
                walls.
              </p>
            </div>
          </div>

          <h3 className="text-2xl font-medium text-gray-900 mb-6 text-center">Settlement at the Speed a Defense Supply Chain Demands</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                name: 'USDC',
                issuer: 'Circle',
                detail:
                  'Fully reserved and independently attested dollar stablecoin engineered for institutional settlement. The compliance architecture and regulatory transparency that defense prime contractors, aerospace procurement teams, and sovereign resource acquisition programs require for auditable digital commodity transactions involving strategically designated materials.',
              },
              {
                name: 'USDT',
                issuer: 'Tether',
                detail:
                  'Over $140 billion in global circulation providing the settlement depth that defense-scale rare earth transactions require. When procurement operates at the tonnage levels of fighter jet production lines and satellite constellation manufacturing, USDT delivers the execution infrastructure to settle without counterparty friction or volume constraints, regardless of transaction size.',
              },
              {
                name: 'USAT',
                issuer: 'Tether (US Regulated)',
                detail:
                  'US-regulated stablecoin under the GENIUS Act framework. Purpose-built for critical mineral procurement where Defense Production Act compliance, ITAR sourcing requirements, and Berry Amendment domestic preference mandates govern the acquisition of materials classified as essential to national defense and aerospace manufacturing.',
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
            DeFi Infrastructure for Tokenized Samarium
          </h2>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-4xl mb-12">
            Samarium has never existed as an independently tradeable financial asset. It has been embedded in combined rare earth pricing, bundled
            into SmCo alloy quotations, and procured through the same Chinese-controlled channels that govern the broader rare earth market. No
            standalone exchange listing. No dedicated ETF. No independent futures contract. No lending facility. No collateral framework. Tokenization
            does not merely digitize samarium. It extracts it from the combined rare earth pricing structure for the first time, creating an
            independent financial identity for an element that the defense industry consumes in thousands of tonnes annually but that the financial
            market has never individually recognized.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            <div className="bg-white rounded-2xl p-6 md:p-8 border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">The First Independent Samarium Market for Defense-Grade Material</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Before tokenization, samarium did not have its own market. It had a line item inside combined rare earth oxide pricing and SmCo alloy
                quotations. No defense contractor could hedge samarium price risk independently. No investor could take a standalone position in the
                extreme-temperature magnet element. Tokenized samarium creates the first dedicated trading venue: a continuous secondary market on
                decentralized exchanges where price discovery for samarium happens independently of bundled rare earth pricing, transfers execute
                instantly, and the element that defense and aerospace depend on at 350°C becomes its own investable asset class.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-6 md:p-8 border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Yield Derived from the Element That Keeps Weapon Systems Operational</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Lend samarium tokens to counterparties seeking leveraged exposure to defense-correlated rare earth pricing or hedged positions in
                aerospace supply chain materials. Interest rates reflect real-world demand driven by fighter jet delivery schedules, satellite
                constellation deployment timelines, missile restocking programs, and downhole drilling equipment orders. Yield generated by military
                procurement budgets rather than consumer markets, applied to an element whose demand trajectory is set by government appropriations with
                multi-decade planning horizons.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-6 md:p-8 border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Capital Without Surrendering Defense Supply Chain Positions</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Defense contractors and institutional investors holding samarium positions have historically had no mechanism for accessing capital from
                those holdings independently, because samarium has never been independently held as a financial asset. Tokenized samarium changes this
                entirely.{' '}
                <Link href="/products" className="text-slate-800 font-medium underline underline-offset-2">
                  Borrow against samarium
                </Link>{' '}
                tokens to receive stablecoins while maintaining full exposure. For SmCo magnet manufacturers managing alloy inventory against fighter jet
                delivery schedules, this creates a liquidity mechanism that has never existed for this element.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-6 md:p-8 border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Risk Management for an Element Classified as Critical to National Security</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Samarium&apos;s supply risk concentrates at multiple levels simultaneously: 85% production in China, export control exposure, defense
                material classification constraints, and a separation infrastructure that cannot scale independently of neodymium processing. But risk
                management tools have never existed for samarium independently. Smart contract infrastructure automates collateral monitoring, margin
                management, and position adjustment in real time, providing the first risk architecture built specifically for a material that carries
                national security designations from every major allied government.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 md:p-8 border border-gray-200">
            <h3 className="text-xl font-medium text-gray-900 mb-6 text-center">
              From Rare Earth Separation to Defense-Grade Digital Asset: The Samarium Token Path
            </h3>
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              {[
                'Separated: Samarium oxide isolated at rare earth separation facility, reduced to metal, secured in insured custody, and bound to on-chain token identity',
                'Acquired: Purchased with USDC, USDT, or USAT at transparent pricing reflecting real-time defense procurement demand and supply concentration dynamics',
                'Positioned: Held in wallet, traded on secondary markets, or bridged across chains to integrate with holder procurement and portfolio infrastructure',
                'Activated: Deployed into yield protocols, pledged as loan collateral, or structured for defense supply chain disruption hedging',
                'Delivered: Redeemed for physical samarium metal (99.9%+ Sm) for SmCo magnet alloy sintering, nuclear control rod fabrication, or defense-grade industrial application',
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
            Tokenized Samarium vs Every Other Way to Get Exposure
          </h2>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-4xl mb-12">
            There has never been a way to invest in samarium independently. Rare earth ETFs dilute it across dozens of elements. Mining stocks carry
            operational risk unrelated to samarium pricing. Physical procurement operates through Chinese-dominated channels with opaque pricing and
            weeks-long settlement. Toto Finance built what the defense supply chain has never offered: standalone, fractional, instant access to the
            element that operates where no other magnet material can.
          </p>

          <div
            className="overflow-x-auto rounded-2xl border border-gray-200"
            aria-label="Comparison table of tokenized samarium on Toto Finance versus rare earth ETFs, physical samarium procurement, and mining stocks across 10 features including samarium-specific exposure, settlement speed, price transparency, and DeFi access."
          >
            <table className="w-full text-sm text-left min-w-[720px]">
              <thead>
                <tr className="bg-gray-900 text-white">
                  <th className="px-4 md:px-6 py-4 font-medium">Feature</th>
                  <th className="px-4 md:px-6 py-4 font-medium">Rare Earth ETFs</th>
                  <th className="px-4 md:px-6 py-4 font-medium bg-white/10">Toto Finance</th>
                  <th className="px-4 md:px-6 py-4 font-medium">Physical Samarium</th>
                  <th className="px-4 md:px-6 py-4 font-medium">Mining Stocks</th>
                </tr>
              </thead>
              <tbody className="bg-white">
                {[
                  ['Samarium-Specific', 'No (basket)', 'Yes (1:1)', 'Direct ownership', 'No (equity)'],
                  ['Trading Hours', 'Market hours only', '24/7/365', 'OTC / dealer', 'Market hours only'],
                  ['Settlement', 'T+2', 'T+0 (Instant)', 'Days to weeks', 'T+2'],
                  ['Settlement Currency', 'Fiat (via broker)', 'USDC, USDT, USAT', 'Wire transfer', 'Fiat (via broker)'],
                  ['Min. Investment', '1 share (~$50+)', 'Fractional (from $1)', '$50,000+', '1 share (~$10+)'],
                  ['Physical Redemption', 'No', 'Yes', 'Yes', 'No'],
                  ['On-Chain Transparency', 'No', 'Yes', 'No', 'No'],
                  ['DeFi Yield / Loans', 'No', 'Yes', 'No', 'No'],
                  ['Price Transparency', 'NAV-based', 'Real-time oracle', 'Opaque / bilateral', 'Stock price only'],
                  ['Intermediaries', 'Broker + Clearing', 'None (P2P)', 'Traders + processors', 'Broker'],
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
            Building Financial Infrastructure for the Magnet Metal That Defense Cannot Substitute
          </h2>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-4xl mb-12">
            Samarium has never had its own financial infrastructure because it has never been treated as its own asset. Bundled with other rare earth
            elements in combined pricing, traded through the same opaque channels that govern neodymium and praseodymium, procured through industrial
            networks that offer no standalone access. No independent contracts. No separate pricing benchmarks. No settlement infrastructure specific
            to the element that makes every extreme-temperature magnet on Earth possible. Every feature of the Toto Finance platform for samarium was
            built from first principles because the defense industry&apos;s most critical magnet material has never existed as an independent financial
            instrument.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                t: 'Physical Backing with Defense-Grade Delivery Capability',
                b: 'Every samarium token connects to verified samarium metal (99.9%+ Sm) in insured custody. Request physical delivery and receive material ready for SmCo magnet alloy sintering, nuclear control rod fabrication, or specialized industrial applications. In a market where samarium has always been procured through opaque rare earth trading channels with weeks-long settlement, on-chain proof-of-reserves creates the first independent, real-time verification of samarium holdings outside the traditional rare earth trading infrastructure.',
              },
              {
                t: 'Independent Price Discovery for an Element That Has Never Had Its Own Benchmark',
                b: "Samarium has never had a standalone price benchmark. It has been quoted as a component of combined rare earth oxide pricing or embedded in SmCo alloy costs, with its individual value invisible to investors and opaque even to industrial procurement teams. Toto Finance's oracle feeds and on-chain trading activity create the first independent samarium pricing mechanism: real-time, separately verifiable, and reflective of samarium's own supply-demand dynamics rather than its value buried inside combined rare earth quotations.",
              },
              {
                t: 'Instant Settlement for a Material Trapped in Government Procurement Timelines',
                b: 'Traditional samarium procurement moves at the speed of rare earth trading infrastructure: bilateral negotiations, Chinese export processing, international shipping, banking intermediaries, and settlement timelines measured in weeks. For defense manufacturers whose production lines consume samarium daily, waiting weeks for settlement of a material designated as critical to national security is an operational contradiction. Token settlement creates instant procurement capability, settling T+0 with stablecoins while maintaining full compliance with defense material acquisition requirements.',
              },
              {
                t: 'Compliance for Critical Defense Material Transactions',
                b: 'Samarium trade operates within regulatory frameworks governing critical minerals and defense materials: export controls, critical mineral designations, Defense Production Act requirements, Berry Amendment domestic preference mandates, and allied nation defense procurement regulations. Smart contracts embed KYC/AML verification, transfer restrictions, and jurisdiction-specific compliance rules directly into token architecture, ensuring every transaction satisfies the regulatory requirements that apply to a material classified as critical to national security by the United States, European Union, Japan, and allied governments.',
              },
              {
                t: 'Financial Infrastructure for the Overlooked Half of the Magnet Market',
                b: 'Lending, borrowing, hedging, and collateral management for samarium as a standalone asset: functions that have never existed in any form because samarium has never existed as an independent financial instrument. While neodymium captures rare earth headlines, samarium operates in every application where neodymium physically cannot. Smart contract protocols enable yield generation from samarium positions, stablecoin borrowing against holdings, and programmable hedging strategies built specifically for the extreme-temperature magnet element.',
              },
              {
                t: 'Multi-Chain Presence',
                b: 'Tokenized samarium is deployed across Ethereum, Polygon, Cardano, Solana, and XRP Ledger. Defense procurement platforms, institutional custodians, DeFi protocols, and individual holders can interact with samarium tokens on whatever chain infrastructure their operations already use. No migration required, no ecosystem lock-in, no chain-specific constraints on accessing defense-grade magnet material.',
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
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-gray-900 leading-tight mb-6">Tokenized Samarium FAQ</h2>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-12">
            Direct answers about tokenized samarium, In-Ground Samarium, SmCo magnet demand, defense supply chains, and how Toto Finance provides the
            first standalone access to the extreme-temperature magnet element.
          </p>
          <SamariumFAQ faqs={faqData} />
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
            Every Fighter Jet, Every Satellite, Every Missile Depends on a Magnet That Only Samarium Can Power at Operating Temperature.
          </h2>
          <p className="text-base md:text-lg text-gray-200 leading-relaxed mb-10">
            The world needs 11,800 tonnes of samarium by 2030. Supply will deliver 7,600. The 4,200-tonne gap is not a market cycle that higher prices
            will correct. It is the structural consequence of 85% production concentration in China colliding with a synchronized global rearmament,
            space commercialization, and energy exploration cycle that adds permanent demand faster than any non-Chinese supply expansion can match.
            Toto Finance is building the infrastructure to bring the extreme-temperature magnet metal on-chain as an independent, transparent,
            instant-settlement asset for the first time.
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
