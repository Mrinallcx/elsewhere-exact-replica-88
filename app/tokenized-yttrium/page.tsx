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
const YttriumTickerBar = dynamicImport(
  () => import('../components/client/YttriumTickerBar').then((mod) => ({ default: mod.YttriumTickerBar }))
);
const YttriumFAQ = dynamicImport(
  () => import('../components/client/SilverFAQ').then((mod) => ({ default: mod.SilverFAQ }))
);

const PAGE_URL = 'https://totofinance.co/tokenized-yttrium';
const PAGE_TITLE = 'Tokenized Yttrium | Digital Rare Earth Backed by Physical Assets | Toto Finance';
const PAGE_DESCRIPTION =
  'Every white LED on Earth emits light through yttrium phosphors. Every jet engine turbine blade survives 1,200°C behind yttrium thermal coatings. Every industrial YAG laser cuts metal with yttrium crystals. Toto Finance brings the $2.9 billion backbone element on-chain from 1:1 redeemable oxide tokens to In-Ground future delivery contracts. 95% China-controlled. 12,000-tonne deficit by 2030. Instant stablecoin settlement. DeFi secondary markets.';

const breadcrumbItems = [
  { name: 'Home', item: 'https://totofinance.co' },
  { name: 'Products', item: 'https://totofinance.co/products' },
  { name: 'Rare Earth Minerals', item: 'https://totofinance.co/rare-earth-mineral' },
  { name: 'Tokenized Yttrium', item: PAGE_URL },
];

const faqData = [
  {
    question: 'What is tokenized yttrium?',
    answer:
      'A blockchain-based digital asset backed 1:1 by refined yttrium oxide (Y₂O₃) in insured, audited vaults. Ultra-high-purity grade (99.999%+ Y₂O₃), ready for YAG laser crystal growth, LED phosphor manufacturing, yttria-stabilized zirconia thermal barrier coating production, YBCO superconductor compound synthesis, and Y-90 radioisotope target preparation. Redeemable for physical yttrium on demand. Toto Finance is building the infrastructure to bring yttrium on-chain as an independent asset with instant stablecoin settlement and DeFi secondary markets.',
  },
  {
    question: 'What is In-Ground Yttrium?',
    answer:
      'A tokenized future delivery contract for yttrium still contained in rare earth deposits at certified mining operations. Short-term (1 to 12 months) for operations with active separation and purification capacity, long-term (1 to 6 years) for earlier-stage deposits. Built for LED manufacturers, aerospace suppliers, laser companies, superconductor developers, medical device producers, sovereign supply security reserves, and institutional investors positioning for the structural yttrium deficit in a market where five industries are growing while 95% of supply is controlled by one country.',
  },
  {
    question: 'Where does the yttrium come from?',
    answer:
      'Directly from rare earth mining companies and processing facilities across China (95% of production from ionic clay deposits in Jiangxi, Guangdong, Fujian), North America (Mountain Pass, Bear Lodge, Bokan Mountain, Nechalacho, and Round Top with emerging separation capacity), Australia (xenotime mineral sands with hydrometallurgical separation), Southeast Asia and Malaysia (Lynas processing facility and Vietnamese ionic clay deposits), and Brazil/Madagascar (monazite deposits and emerging rare earth projects). No middlemen. No Chinese export trader intermediaries. Secured at the point of rare earth separation and purification. Partnerships: https://totofinance.co/about',
  },
  {
    question: 'Who buys tokenized yttrium?',
    answer:
      'Three groups: (1) LED, aerospace, laser, superconductor, and medical manufacturers, including LED lighting and phosphor producers, YAG laser crystal growers and industrial laser OEMs, aerospace and defense contractors, jet engine manufacturers, power generation turbine coating suppliers, YBCO superconductor developers, MRI equipment manufacturers, Y-90 radioisotope therapy providers, ceramic manufacturers, alloy producers, and optics manufacturers. (2) Multi-industry supply chain investors, including funds and allocators seeking direct exposure to the backbone element of five independent industrial sectors with 95% single-country supply concentration. (3) On-chain participants, including crypto funds, protocol treasuries, and DeFi protocols seeking collateral backed by five-industry demand dynamics uncorrelated to any single sector.',
  },
  {
    question: 'How does instant settlement work?',
    answer:
      'T+0 settlement using USDC, USDT, or USAT. Traditional yttrium procurement operates through Chinese export trading channels with settlement measured in days to weeks, opaque bilateral pricing, and allocation governed by Chinese domestic priorities rather than international industrial demand. Toto Finance creates a direct settlement mechanism connecting rare earth separation sources with five-industry manufacturers and investors on-chain, eliminating every intermediary in the Chinese export trading supply chain.',
  },
  {
    question: 'Can I trade tokenized yttrium on DeFi platforms?',
    answer:
      'Yes. After acquisition, trade on decentralized exchanges globally, generate yield by lending to counterparties seeking multi-industry critical material exposure, or use yttrium tokens as collateral for stablecoin loans. Yttrium has never existed as an independently tradeable financial asset outside rare earth baskets and Chinese trading channels. Tokenization creates both the standalone asset class and its market simultaneously.',
  },
  {
    question: 'Why is yttrium irreplaceable across five industries?',
    answer:
      "Yttrium forms stable high-temperature oxide compounds with properties no other element replicates: Y₂O₃:Eu provides the red phosphor essential for white LED light that no alternative material matches in color rendering quality. YAG creates the crystal structure for industrial and medical lasers with beam quality no other garnet delivers. Yttria-stabilized zirconia withstands temperatures above 1,200°C as a thermal barrier coating with phase stability no other ceramic achieves. YBCO achieves superconductivity above 77K, the liquid nitrogen threshold that makes practical superconductor applications commercially viable. Y-90 delivers targeted beta radiation with a 64-hour half-life optimized for liver cancer treatment. Five distinct physics advantages. Five industries. No substitute element delivers equivalent performance in any of them.",
  },
  {
    question: 'What is the yttrium price outlook?',
    answer:
      'Roskill forecasts $21,500/mt in 2026. Adamas Intelligence projects prices exceeding $24,000/mt by 2027 as five-industry demand accelerates while 95% supply concentration in China creates structural pricing pressure. The 12,000-tonne deficit projected for 2030 represents a 31% shortfall that no planned production expansion outside China can close within the decade, driven by LED penetration reaching 75% globally, aerospace engine efficiency mandates, manufacturing automation, superconductor commercialization, and precision oncology expansion.',
  },
  {
    question: 'How do I get early access?',
    answer:
      'Visit https://totofinance.co/. LED manufacturers, aerospace suppliers, laser companies, superconductor developers, medical device producers, institutional investors, mining partners, sovereign supply security managers, and industrial buyers can reach out directly for partnership and early allocation discussions.',
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
        'Tokenized commodity platform offering 1:1 asset-backed yttrium oxide tokens and In-Ground Yttrium future delivery contracts with instant stablecoin settlement.',
    },
    {
      '@type': 'Product',
      name: '1:1 Yttrium Oxide Token',
      description:
        'Digital asset backed 1:1 by refined yttrium oxide (Y₂O₃) in insured custody, redeemable for physical delivery. Category: Tokenized Commodity.',
      category: 'Tokenized Commodity',
      brand: { '@type': 'Brand', name: 'Toto Finance' },
      url: PAGE_URL,
    },
    {
      '@type': 'Product',
      name: 'In-Ground Yttrium',
      description:
        'Tokenized future delivery contract for yttrium in rare earth deposits at certified mining operations. Category: Commodity Future Delivery Contract.',
      category: 'Commodity Future Delivery Contract',
      brand: { '@type': 'Brand', name: 'Toto Finance' },
      url: PAGE_URL,
    },
  ],
};

const traditionalSteps = [
  'Mining Operation / Ionic Clay Extraction',
  'Chinese Separation and Purification Facility',
  'Chinese Export Trader',
  'International Rare Earth Distributor',
  'Clearing Agent',
  'Custodian Bank',
  'Correspondent Bank',
  'Buyer',
];

export default function TokenizedYttriumPage() {
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
      <section className="relative bg-gradient-to-br from-orange-950 via-slate-900 to-gray-950 text-white px-4 sm:px-6 md:px-8 lg:px-12 pt-28 md:pt-36 pb-16 md:pb-24 overflow-hidden">
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
            backgroundSize: '40px 40px',
          }}
        />
        <div className="relative z-10 max-w-7xl mx-auto text-left">
          <h1 className="text-sm md:text-base font-semibold tracking-[0.2em] uppercase text-orange-100/90 mb-4">
            Tokenized Yttrium by Toto Finance
          </h1>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light leading-tight mb-8">
            Every White LED. Every Jet Engine Turbine Blade. Every Industrial YAG Laser. One Element Holds Them All Together. $2.9 Billion in Annual Demand.
            95% Controlled by China. Now On-Chain.
          </h2>
          <p className="text-base md:text-lg text-gray-200 leading-relaxed mb-10 max-w-3xl text-left">
            Turn on any LED light in any room on Earth and yttrium phosphors are converting electrical energy into the white light you see. Walk onto any airport
            tarmac and yttrium thermal barrier coatings are the reason those jet engine turbine blades survive temperatures above 1,200°C without disintegrating.
            Step into any metal fabrication shop and yttrium aluminum garnet crystals are powering the industrial lasers cutting, welding, and marking steel.
            Yttrium is not a niche element. It is the most consumed rare earth by volume after cerium and lanthanum, the backbone of a $2.9 billion annual market
            that spans LED lighting, aerospace, industrial lasers, superconductors, medical imaging, and cancer therapy. And 95% of it comes from one country.
            China controls yttrium production from ionic clay deposits in southern provinces through separation, purification, and export, with domestic
            consumption priorities and export controls tightening at the exact moment global demand is accelerating across every sector. Roskill and Adamas
            Intelligence forecast a 3,600-tonne deficit in 2025 widening to a 12,000-tonne gap by 2030, a 31% shortfall against projected demand of 38,500 tonnes.
            Five industries. One element. One country controlling supply.{' '}
            <Link href="/" className="text-white underline underline-offset-2 hover:text-orange-100">
              Toto Finance
            </Link>{' '}
            is building the infrastructure to bring the backbone element of modern manufacturing, modern lighting, and modern medicine on-chain for the first
            time.
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
              Why Yttrium Matters
            </a>
          </div>
        </div>
      </section>

      <YttriumTickerBar />

      {/* FOLD 2: Crisis */}
      <section id="crisis" className="scroll-mt-24 px-4 sm:px-6 md:px-8 lg:px-12 py-20 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto">
          <p className="text-xs uppercase tracking-widest text-gray-400 font-semibold mb-3">THE WHY</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-gray-900 leading-tight mb-6">
            The Backbone Element Behind Five Industries. And One Country Controls 95% of It.
          </h2>
          <div className="text-base md:text-lg text-gray-600 leading-relaxed max-w-4xl mb-12 space-y-4">
            <p>
              We chose yttrium because it represents the most dangerous combination in the critical minerals landscape: an element so foundational to modern
              civilization that five separate industries cannot function without it, and a supply chain so concentrated in a single country that a policy
              decision in Beijing can shut down LED production lines in Seoul, ground jet engine maintenance in Toulouse, and halt laser manufacturing in
              Michigan simultaneously.
            </p>
            <p>
              Yttrium is not a specialty element used in small quantities by niche applications. It is the third most consumed rare earth on Earth, the
              structural foundation beneath $2.9 billion in annual demand spanning LED phosphors that produce every white light in every building and streetlight
              globally, yttria-stabilized zirconia thermal barrier coatings that are the only reason jet engine turbines operate at the temperatures modern
              aviation requires, YAG laser crystals that power the industrial cutting and welding systems manufacturing everything from automotive frames to
              surgical instruments, YBCO high-temperature superconductors enabling MRI machines and particle accelerators, and yttrium-90 radioisotopes
              delivering targeted cancer treatment to patients worldwide. Five industries. Not one has a substitute material that delivers equivalent
              performance. China produces 95% of global yttrium from ionic clay deposits across southern provinces and controls the entire separation and
              purification chain. Export controls are tightening. Domestic consumption is growing. And Western industries that assumed yttrium would always flow
              freely are discovering that 95% dependence on a single geopolitical source is not a supply chain. It is a vulnerability. The 3,600-tonne deficit in
              2025 widening to 12,000 tonnes by 2030 is the arithmetic of five industries growing while one country decides how much supply the rest of the
              world receives.
            </p>
            <p className="font-medium text-gray-900">That is why we exist.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gray-50 rounded-2xl p-6 md:p-8 border border-gray-100">
              <p className="text-4xl md:text-5xl font-light text-gray-900 mb-3">3,600 tonnes</p>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">A Supply Chain Already in Deficit Across Five Industries</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Roskill forecasts a 3,600-tonne yttrium deficit in 2025, a shortfall that is already forcing LED phosphor manufacturers, YAG laser crystal
                growers, and aerospace thermal coating suppliers to compete for allocation from Chinese separation facilities. Global yttrium production is
                approximately 22,300 tonnes annually, with China controlling 95% of output from ionic clay deposits and the entire downstream separation
                infrastructure. No Western nation operates yttrium separation at industrial scale. Supply is not merely concentrated. It is monopolized, with
                allocation decisions driven by Chinese domestic manufacturing priorities rather than international industrial demand.
              </p>
            </div>
            <div className="bg-gray-50 rounded-2xl p-6 md:p-8 border border-gray-100">
              <p className="text-4xl md:text-5xl font-light text-gray-900 mb-3">95%</p>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">The Most Concentrated Supply Chain in Critical Materials</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                China controls 95% of global yttrium production, separation, and purification, the highest concentration of any critical mineral supply chain
                among the major rare earths. This is not simply mining dominance. China controls the entire value chain from ionic clay extraction through
                multi-stage chemical separation to final oxide purification at 99.999% purity. Chinese export controls, production quotas, and domestic
                consumption priorities for LED manufacturing, aerospace components, and superconductor development mean that international yttrium availability is
                determined by Chinese policy, not by global market demand. Five Western industries depend on yttrium. None controls its own supply.
              </p>
            </div>
            <div className="bg-gray-50 rounded-2xl p-6 md:p-8 border border-gray-100">
              <p className="text-4xl md:text-5xl font-light text-gray-900 mb-3">12,000 tonnes</p>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">A Deficit That Spans Light, Heat, Precision, and Medicine</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Global yttrium demand is projected to reach 38,500 tonnes per year by 2030, while supply from existing and planned operations will deliver
                approximately 26,500 tonnes. The 12,000-tonne gap represents a 31% shortfall. This deficit is not driven by a single sector but by five
                simultaneous demand drivers: LED phosphor adoption reaching 75% global penetration, aerospace thermal barrier coating requirements intensifying
                with next-generation engine efficiency mandates, industrial YAG laser systems expanding with manufacturing automation, YBCO superconductor scaling
                for medical imaging and quantum infrastructure, and Y-90 cancer therapy expanding into precision oncology. Each sector is growing independently. All
                draw from the same 95%-China-controlled supply.
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
            Understanding Why Yttrium Is the Backbone Element That Five Industries Cannot Replace
          </h2>
          <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto text-center mb-14">
            The rare earth that makes white light possible, keeps jet engines from melting, powers industrial laser cutting, enables superconducting magnets,
            and delivers targeted cancer therapy. $2.9 billion in annual demand. 95% from China.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
              <div
                className="rounded-xl bg-gradient-to-br from-orange-950 to-slate-950 text-white p-6 mb-4 font-mono text-sm"
                role="img"
                aria-label="Yttrium element card showing Y symbol, atomic number 39, density, melting point, and classification as the backbone rare earth element across five industries"
              >
                <p className="text-3xl font-light mb-1">Y</p>
                <ul className="space-y-1 text-orange-100/90">
                  <li>Atomic Number: 39</li>
                  <li>Density: 4,472 kg/m³</li>
                  <li>Melting Point: 1,526°C</li>
                  <li>Purity Grade: 99.999% (5N)</li>
                  <li>Classification: Multi-Industry Backbone Element</li>
                </ul>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">The Element</h3>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
              <div
                className="rounded-xl bg-gradient-to-br from-slate-700/80 to-slate-900 min-h-[160px] mb-4"
                role="img"
                aria-label="Ionic clay deposit extraction and rare earth separation facility in southern China where 95% of global yttrium is produced and purified"
              />
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Where It Comes From</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Yttrium is extracted from rare earth minerals including xenotime (50% yttrium phosphate content), monazite, bastnäsite, and gadolinite, with 95%
                of global production from ionic clay deposits in southern China (Jiangxi, Guangdong, Fujian). Secondary sources include rare earth operations in
                Australia, the USA (Mountain Pass, California), Canada (Nechalacho, Northwest Territories), Malaysia, Brazil, and Madagascar. Total annual
                production: approximately 22,300 tonnes, with China controlling not only mining but the entire separation and purification chain through to
                99.999% oxide.
              </p>
              <p className="text-xs text-gray-500 mt-3 font-mono leading-snug">
                Ore / Ionic Clay → Leaching → Chemical Separation → Multi-Stage Ion Exchange → Solvent Extraction → Precipitation → 99.999% Pure Yttrium Oxide
                (Y₂O₃)
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
              <div
                className="rounded-xl bg-gradient-to-br from-amber-900/50 to-slate-900 min-h-[160px] mb-4"
                role="img"
                aria-label="Yttrium's high-temperature stability demonstrated in YAG laser crystal structure and yttria-stabilized zirconia thermal barrier coating on jet engine turbine blade"
              />
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                The Chemistry That Makes It Irreplaceable Across Five Industries
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Yttrium forms exceptionally stable high-temperature oxide compounds that no other element replicates across the same breadth of applications.
                Yttrium oxide (Y₂O₃) provides the host matrix for europium-doped red phosphors essential to white LED production. Yttrium aluminum garnet (YAG)
                creates the crystal structure for industrial and medical lasers. Yttria-stabilized zirconia (YSZ) delivers thermal and chemical stability at
                temperatures above 1,200°C for turbine blade coatings. Yttrium barium copper oxide (YBCO) achieves superconductivity above liquid nitrogen
                temperature (77K), the threshold that made practical superconductor applications commercially viable. Yttrium-90 emits therapeutic beta
                radiation with a 64-hour half-life ideal for targeted cancer treatment. Five distinct physical and chemical properties. Five industries. One
                element.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
              <div
                className="rounded-xl bg-gradient-to-br from-slate-600 to-slate-900 min-h-[160px] mb-4"
                role="img"
                aria-label="Applications of yttrium including white LED phosphors, jet engine thermal barrier coatings, YAG industrial lasers, YBCO superconductors for MRI, and Y-90 cancer therapy"
              />
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Where It Goes</h3>
              <p className="text-sm text-gray-600 leading-relaxed mb-4">
                White LED phosphors (Y₂O₃:Eu red phosphor component for every white LED globally), YAG industrial lasers for metal cutting, welding, and marking,
                yttria-stabilized zirconia (YSZ) thermal barrier coatings for jet engine turbine blades, YBCO high-temperature superconductors for MRI machines,
                particle accelerators, and fusion reactor magnets, Y-90 radioisotope therapy for liver and lymphatic cancer treatment, aluminum and magnesium
                alloy strengthening for aerospace structural components, camera and specialty optics lenses, automotive oxygen sensors, capacitors and dielectric
                ceramics.
              </p>
              <p className="text-sm font-semibold text-slate-900 bg-slate-100 rounded-lg px-3 py-2">
                $2.9B+ global yttrium market (70% consumed by phosphor, ceramic, and laser applications, growing across all five sectors simultaneously)
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
            Five Industries Chose Yttrium Independently. None Found a Substitute. All Are Growing. Supply Answers to Beijing.
          </h2>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-4xl mb-12">
            Yttrium&apos;s demand story is not a single-sector narrative. It is five independent industrial dependencies converging on one element whose supply is
            controlled by one country. LED manufacturers chose yttrium phosphors because no other material produces equivalent white light quality at commercial
            scale. Aerospace engineers chose yttria-stabilized zirconia because no other coating survives turbine operating temperatures. Laser manufacturers
            chose YAG because no other crystal delivers equivalent beam quality at industrial power. Superconductor researchers chose YBCO because no other
            compound achieves superconductivity above liquid nitrogen temperature. Oncologists chose Y-90 because no other radioisotope delivers equivalent
            targeted beta radiation for liver cancer. Each choice was made independently, by different industries, for different physics. All of them draw from
            the same 22,300-tonne annual supply, 95% of which is processed in China.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <div className="bg-gray-50 rounded-2xl p-6 md:p-8 border border-gray-100">
              <h3 className="text-xl font-medium text-gray-900 mb-3">
                LED Phosphors and Lighting: The Application That Illuminates Civilization
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Every white LED on Earth produces light through a phosphor conversion process that requires yttrium. Yttrium oxide doped with europium creates the
                red phosphor component essential for the warm white light that LED technology delivers. With global LED penetration reaching 75% of all installed
                lighting by 2030, the transition from fluorescent and incandescent to LED is consuming yttrium at industrial scale. LED phosphor applications
                consume approximately 14,000 tonnes of yttrium annually, representing the single largest demand sector. Growth continues as smart lighting,
                automotive LED systems, display backlighting, and horticultural LED applications expand the addressable market beyond general illumination.
              </p>
            </div>
            <div className="bg-gray-50 rounded-2xl p-6 md:p-8 border border-gray-100">
              <h3 className="text-xl font-medium text-gray-900 mb-3">
                YAG Industrial Lasers: Yttrium Crystals Cutting and Welding the Physical World
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Yttrium aluminum garnet (YAG) crystals form the lasing medium for industrial cutting, welding, marking, and engraving systems used across
                automotive, aerospace, electronics, medical device, and general manufacturing. The global industrial laser market consumes approximately 8,500
                tonnes of yttrium annually for YAG crystal growth, with demand growing at 12% compound annual growth rate as manufacturing automation accelerates
                globally. Every Nd:YAG and Er:YAG laser system requires yttrium as the crystal host, making yttrium the structural foundation of the solid-state
                laser industry alongside ytterbium-doped fiber laser systems.
              </p>
            </div>
            <div className="bg-gray-50 rounded-2xl p-6 md:p-8 border border-gray-100">
              <h3 className="text-xl font-medium text-gray-900 mb-3">
                Aerospace Thermal Barrier Coatings: The Layer Between Survival and Catastrophic Engine Failure
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Yttria-stabilized zirconia (YSZ) thermal barrier coatings are applied to jet engine turbine blades, combustion chambers, and hot-section
                components to protect nickel superalloy substrates from operating temperatures exceeding 1,200°C. Without YSZ coatings, modern high-efficiency jet
                engines cannot operate at the temperature differentials that fuel economy and thrust performance require. Aerospace and power generation sectors
                consume approximately 6,200 tonnes of yttrium annually, with demand accelerating as next-generation engine programs (RISE, UltraFan) mandate higher
                turbine inlet temperatures that demand thicker and more sophisticated thermal barrier systems.
              </p>
            </div>
            <div className="bg-gray-50 rounded-2xl p-6 md:p-8 border border-gray-100">
              <h3 className="text-xl font-medium text-gray-900 mb-3">
                Superconductors, Medical Imaging, and Cancer Therapy: Yttrium at the Frontier of Medicine and Physics
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Yttrium barium copper oxide (YBCO) high-temperature superconductors enable MRI machines generating the magnetic fields that diagnose millions of
                patients annually, particle accelerators exploring fundamental physics, and fusion reactor magnets being developed for commercial energy production.
                Separately, yttrium-90 radioisotopes deliver targeted beta radiation therapy for hepatocellular carcinoma and non-Hodgkin lymphoma, with precision
                oncology expanding Y-90 treatment protocols globally. Combined, medical imaging, superconductor, quantum computing infrastructure, and
                radioisotope therapy applications consume approximately 2,800 tonnes of yttrium annually, growing at 18% compound annual growth rate as
                healthcare infrastructure expands and superconductor applications commercialize.
              </p>
            </div>
          </div>

          <div
            className="bg-gray-50 rounded-2xl p-6 md:p-8 border border-gray-200"
            role="img"
            aria-label="Bar chart showing global yttrium demand rising from 22,300 tonnes in 2025 to 38,500 tonnes by 2030, with supply reaching approximately 26,500 tonnes, creating a 12,000-tonne annual deficit representing 31% of projected demand"
          >
            <h3 className="text-xl font-medium text-gray-900 mb-6">Five Industries, One 95%-Monopolized Supply Chain</h3>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-6">
              {[
                { year: '2025', val: '22,300', note: '—', metric: 'Demand (tonnes)' },
                { year: '2028', val: '29,800', note: '—', metric: 'Demand (tonnes)' },
                { year: '2030', val: '38,500', note: '—', metric: 'Demand (tonnes)' },
                { year: '2035', val: '52,000', note: 'Adamas Intelligence projection', metric: 'Demand (tonnes)' },
                {
                  year: '2030 Supply',
                  val: '~26,500',
                  note: 'Gap: 12,000+ tonnes (31% shortfall)',
                  highlight: true,
                  metric: 'Supply (tonnes)',
                },
              ].map((d, i) => (
                <div
                  key={i}
                  className={`text-center p-4 rounded-xl ${d.highlight ? 'bg-orange-950/10 border border-orange-200' : 'bg-white border border-gray-100'}`}
                >
                  <p className={`text-sm mb-2 ${d.highlight ? 'text-orange-900 font-medium' : 'text-gray-500'}`}>{d.year}</p>
                  <p className="text-sm font-semibold text-gray-900">
                    {d.metric}: {d.val}
                  </p>
                  <p className="text-xs text-gray-500 mt-1">{d.note}</p>
                </div>
              ))}
            </div>
            <p className="text-xs text-gray-400">
              Sources: Adamas Intelligence, Roskill, USGS, Industrial Laser Association, MarketsandMarkets.
            </p>
          </div>
        </div>
      </section>

      {/* FOLD 5: TWO PRODUCTS */}
      <section id="products" className="scroll-mt-24 px-4 sm:px-6 md:px-8 lg:px-12 py-20 md:py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <p className="text-xs uppercase tracking-widest text-gray-400 font-semibold mb-3 text-center">TWO PRODUCTS</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-gray-900 leading-tight mb-6 text-center">
            Two Ways to Own Tokenized Yttrium
          </h2>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto text-center mb-14">
            Everything we believe about opening access to the backbone element that makes white light possible, keeps jet engines operational, powers industrial
            laser cutting, enables superconducting magnets, and delivers targeted cancer therapy comes to life in two products. One for yttrium oxide that has
            already been separated, purified, and vaulted. One for yttrium still locked in rare earth deposits awaiting extraction. Both backed by physical
            material. Both settleable in stablecoins. Both built to give the LED manufacturers, aerospace suppliers, laser companies, superconductor developers,
            medical device producers, and investors who understand that 95% dependence on a single country for an element consumed by five industries is a
            structural crisis, not a temporary inconvenience, a way to secure the element at the center of all five.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
            <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm">
              <span className="inline-block text-xs font-bold tracking-wider text-slate-800 bg-slate-200 px-3 py-1 rounded-full mb-4">ASSET-BACKED TOKEN</span>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                <Link href="/products" className="hover:text-slate-600 underline-offset-2 hover:underline">
                  1:1 Yttrium Oxide Token
                </Link>
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed mb-6">
                Digital ownership of physical yttrium. Every token is backed 1:1 by refined yttrium oxide (Y₂O₃) in insured, audited vault facilities.
                Ultra-high-purity grade (99.999%+ Y₂O₃), ready for YAG laser crystal growth, LED phosphor manufacturing, yttria-stabilized zirconia thermal barrier
                coating production, YBCO superconductor compound synthesis, and Y-90 radioisotope target preparation. Redeemable for physical yttrium on demand. Not
                a derivative. Not a rare earth basket. Not a mining equity. The actual oxide, at five-nines purity.
              </p>
              <ul className="text-sm text-gray-700 space-y-2 list-disc pl-5">
                <li>Backed 1:1 by refined yttrium oxide (99.999%+ Y₂O₃ purity grade)</li>
                <li>Always redeemable for physical yttrium delivery on demand</li>
                <li>Stored in insured, independently audited vault and warehouse facilities</li>
                <li>On-chain proof-of-reserves with real-time oracle feeds</li>
                <li>Fractional ownership, from $1, tradeable 24/7 with instant stablecoin settlement</li>
                <li>
                  Ready for industrial end-use: YAG laser crystals, LED phosphors (Y₂O₃:Eu), YSZ thermal barrier coatings, YBCO superconductors, Y-90
                  radioisotope targets, aluminum/magnesium alloy strengthening, oxygen sensors, specialty optics
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm">
              <span className="inline-block text-xs font-bold tracking-wider text-slate-800 bg-slate-200 px-3 py-1 rounded-full mb-4">
                FUTURE DELIVERY CONTRACT
              </span>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                <Link href="/products" className="hover:text-slate-600 underline-offset-2 hover:underline">
                  In-Ground Yttrium
                </Link>
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed mb-6">
                Forward positions in yttrium that has not been extracted yet. Tokenized future delivery contracts backed by proven yttrium content in rare earth
                deposits at certified mining operations. For organizations that understand that a 12,000-tonne deficit by 2030 across five industries, all
                dependent on a single country controlling 95% of supply, is not a temporary market imbalance but the structural consequence of five independent
                technology sectors growing while one geopolitical source determines global availability.
              </p>
              <ul className="text-sm text-gray-700 space-y-2 list-disc pl-5">
                <li>Backed by proven yttrium content in rare earth reserves at partner mining sites</li>
                <li>Pre-production pricing reflecting 95% supply concentration and five-industry demand convergence</li>
                <li>On-chain reserve tracking with geological data transparency</li>
                <li>Physical delivery or settlement at maturity</li>
                <li>Verified reserves with third-party geological audits</li>
                <li>
                  Built for LED manufacturers, aerospace suppliers, laser companies, superconductor developers, medical device producers, sovereign funds, and
                  institutional allocators
                </li>
              </ul>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-slate-900 text-white rounded-2xl p-6 md:p-8">
              <p className="text-xs font-semibold tracking-wider text-slate-400 mb-2">SHORT-TERM DELIVERY</p>
              <p className="text-lg font-medium mb-3">1 to 12 Months</p>
              <p className="text-sm text-slate-300 leading-relaxed">
                Near-term yttrium delivery contracts tied to active rare earth mining operations with separation and purification capacity. For LED phosphor
                manufacturers managing quarterly production, aerospace thermal barrier coating suppliers coordinating with engine maintenance schedules, YAG laser
                crystal growers scaling output, and commodity specialists positioning in a market where Chinese export policy changes can create immediate supply
                shocks across five industries simultaneously.
              </p>
            </div>
            <div className="bg-slate-800 text-white rounded-2xl p-6 md:p-8 border border-slate-700">
              <p className="text-xs font-semibold tracking-wider text-slate-400 mb-2">LONG-TERM DELIVERY</p>
              <p className="text-lg font-medium mb-3">1 to 6 Years</p>
              <p className="text-sm text-slate-300 leading-relaxed">
                Multi-year yttrium positions backed by proven rare earth content at earlier-stage mining operations. Built for sovereign supply security reserves,
                LED lighting OEMs planning decade-scale phosphor production, aerospace engine programs with multi-year thermal barrier coating procurement cycles,
                superconductor developers securing YBCO feedstock for commercial scaling, and institutional allocators who understand that yttrium&apos;s deficit is
                structural: five industries growing while 95% of supply remains under one country&apos;s control with no mechanism for Western separation capacity
                to close the gap before 2030.
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
            Securing the Backbone Element That Five Industries Cannot Operate Without. Directly.
          </h2>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto text-center mb-14">
            Yttrium is extracted from ionic clay deposits and rare earth minerals, then separated through multi-stage chemical processing that China has
            monopolized for three decades. 95% of global yttrium production, separation, and purification occurs within Chinese borders. The LED manufacturers,
            aerospace suppliers, laser companies, superconductor developers, and medical device producers that consume yttrium across five continents are
            purchasing from a supply chain that begins and ends in one country&apos;s processing infrastructure. Toto Finance works directly with{' '}
            <Link href="/about" className="text-slate-900 underline underline-offset-2 hover:text-slate-600">
              rare earth mining companies and processing facilities
            </Link>{' '}
            across every production region, securing yttrium at the point of separation where it transitions from mixed rare earth concentrate to individually
            purified, industrial-grade oxide.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            {[
              {
                region: 'China',
                desc: "China produces 95% of global yttrium from ionic clay deposits across Jiangxi, Guangdong, and Fujian provinces, operating the world's only industrial-scale yttrium separation and purification infrastructure. Chinese facilities perform the multi-stage solvent extraction and ion exchange processing required to achieve 99.999% purity grades for LED phosphor, YAG laser, and superconductor applications. Export controls, production quotas, and domestic consumption priority for Chinese LED manufacturing, aerospace development, and superconductor programs are reducing international availability at the exact moment Western industries are scaling demand across all five application sectors.",
              },
              {
                region: 'North America (United States and Canada)',
                desc: 'US rare earth development includes Mountain Pass (California) operated by MP Materials, Bear Lodge (Wyoming), Bokan Mountain (Alaska), and Round Top (Texas) with rare earth separation capability targeting yttrium recovery. Canada\'s Nechalacho project (Northwest Territories) and Saskatchewan rare earth deposits are developing yttrium separation infrastructure. Critical mineral designations under the Defense Production Act and allied supply chain security initiatives are accelerating domestic yttrium separation capacity for American LED, aerospace, laser, and medical device supply chains.',
              },
              {
                region: 'Australia',
                desc: 'Australia hosts yttrium-bearing rare earth deposits in xenotime mineral sands across Northern Territory and Western Australia, with advanced hydrometallurgical separation technologies enabling yttrium recovery at commercial purity grades. Australian operations represent a strategically critical source for allied LED manufacturing, aerospace thermal barrier coating production, and superconductor development supply chains seeking to reduce 95% dependence on Chinese processing.',
              },
              {
                region: 'Southeast Asia and Malaysia',
                desc: "Malaysia's Lynas rare earth processing facility in Kuantan performs rare earth separation including yttrium recovery from Australian concentrate. Vietnamese ionic clay deposits in northern provinces contain yttrium at commercially significant concentrations. Southeast Asian processing infrastructure provides the only operational non-Chinese yttrium separation capacity at meaningful scale, creating critical alternative supply pathways for international LED, laser, and aerospace manufacturers.",
              },
              {
                region: 'Brazil and Madagascar',
                desc: "Brazil's monazite beach sand deposits contain yttrium at concentrations supporting commercial recovery, with historical rare earth processing infrastructure available for reactivation. Madagascar's heavy rare earth projects include yttrium-bearing deposits under development. New separation facilities in both regions offer additional yttrium supply diversity for South American and Indian Ocean manufacturing and research institutions.",
              },
              {
                region: 'Exploration and Development',
                desc: 'New rare earth projects across Africa (Tanzania, Burundi, South Africa), Scandinavia (Sweden, Norway), Greenland, and Central Asia are in exploration and feasibility stages with confirmed yttrium content. These represent the next generation of non-Chinese yttrium supply. In-Ground Yttrium positions offer access at pre-production economics before separation output reaches the LED, aerospace, and laser markets.',
              },
            ].map((s, i) => (
              <div key={i} className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{s.region}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>

          <div className="bg-gray-900 text-white rounded-2xl p-6 md:p-8">
            <p className="text-sm md:text-base leading-relaxed">
              <strong>Secured at the separation and purification stage.</strong> Yttrium does not come from an yttrium mine. It comes from the rare earth
              separation process that isolates yttrium from a mixed rare earth concentrate containing cerium, lanthanum, neodymium, and dozens of other
              lanthanides. Its purity is determined by facilities whose chemical processing expertise has been concentrated in China for three decades. Toto
              Finance works at this critical separation point, securing yttrium at the moment it achieves individually addressable, industrial-grade oxide purity
              rather than remaining a component of mixed rare earth output. Verified provenance. Transparent chain of custody from{' '}
              <Link href="/how-tokenization-works" className="text-white underline underline-offset-2 hover:text-orange-100">
                mine to manufacturing line
              </Link>
              . Access to the backbone element that lights buildings, protects turbines, cuts metal, enables superconductors, and treats cancer.
            </p>
          </div>
        </div>
      </section>

      {/* FOLD 7: PARTICIPANTS */}
      <section className="px-4 sm:px-6 md:px-8 lg:px-12 py-20 md:py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <p className="text-xs uppercase tracking-widest text-gray-400 font-semibold mb-3 text-center">PARTICIPANTS</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-gray-900 leading-tight mb-6 text-center">
            Who Buys Tokenized Yttrium
          </h2>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto text-center mb-14">
            Yttrium has been procured through Chinese-dominated trading channels where pricing is opaque, allocation is governed by Chinese domestic priorities,
            and no mechanism exists for the five industries that depend on it to secure supply independently. The LED manufacturers whose phosphor production
            determines global lighting quality, the aerospace suppliers whose thermal coatings determine engine survivability, the laser companies whose YAG crystals
            determine manufacturing capability, the superconductor developers whose YBCO compounds determine medical imaging capacity, and the oncologists whose
            Y-90 treatments determine patient outcomes have had no way to hedge yttrium-specific price risk, guarantee forward supply, or invest in the element
            independently of Chinese export policy. Toto Finance creates that mechanism for the first time.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl p-6 md:p-8 border border-gray-200 shadow-sm">
              <span className="inline-block bg-orange-100 text-orange-900 text-[10px] sm:text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full mb-4 leading-tight">
                LED, AEROSPACE, LASER, SUPERCONDUCTOR, AND MEDICAL MANUFACTURERS
              </span>
              <h3 className="text-xl font-medium text-gray-900 mb-3">The Companies That Built Five Industries on One Element</h3>
              <p className="text-sm text-gray-600 leading-relaxed mb-4">
                These buyers do not speculate on yttrium. They consume it: in the phosphors that produce white light, in the coatings that protect turbine
                blades, in the crystals that power lasers, in the superconductors that generate MRI magnetic fields, and in the radioisotopes that treat cancer.
                Tokenized yttrium gives them{' '}
                <Link href="/products" className="text-slate-900 font-medium underline underline-offset-2 hover:text-slate-600">
                  supply security
                </Link>
                , forward procurement capability, and physical delivery infrastructure for the backbone element that five separate multi-billion-dollar industries
                independently chose as irreplaceable.
              </p>
              <p className="text-xs text-gray-500 leading-relaxed">
                <span className="font-semibold text-gray-700">Industries: </span>
                LED lighting manufacturers and phosphor producers (Y₂O₃:Eu), YAG laser crystal growers and industrial laser OEMs, aerospace and defense
                contractors (YSZ thermal barrier coatings), jet engine manufacturers and MRO providers, power generation turbine coating suppliers, YBCO
                superconductor developers and manufacturers, MRI and medical imaging equipment producers, nuclear medicine and Y-90 radioisotope therapy
                providers, aluminum and magnesium alloy producers, automotive oxygen sensor manufacturers, ceramic manufacturers (yttria-stabilized zirconia),
                camera and specialty optics producers, welding and metal cutting equipment manufacturers.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 md:p-8 border border-gray-200 shadow-sm">
              <span className="inline-block bg-slate-200 text-slate-800 text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full mb-4">
                MULTI-INDUSTRY SUPPLY CHAIN INVESTORS
              </span>
              <h3 className="text-xl font-medium text-gray-900 mb-3">
                Investing in the Backbone Element of Five Industries with 95% Single-Country Dependence
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Yttrium&apos;s investment case is unique among commodities: a $2.9 billion market consumed by five independent industries, each growing, none with
                a substitute, all dependent on 95% Chinese supply. This is not a single-sector bet. It is exposure to the material foundation of LED lighting,
                aerospace propulsion, industrial laser manufacturing, superconductor technology, and precision oncology simultaneously. When geopolitical risk,
                supply chain diversification, and five independent growth trajectories converge on one element, the resulting demand dynamics are unlike any
                single-sector commodity. Tokenized yttrium offers direct exposure to this convergence, with fractional access from $1 and a 12,000-tonne deficit
                driven by structural forces that no single country&apos;s production expansion can resolve before 2030.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 md:p-8 border border-gray-200 shadow-sm">
              <span className="inline-block bg-purple-100 text-purple-800 text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full mb-4">
                ON-CHAIN INFRASTRUCTURE
              </span>
              <h3 className="text-xl font-medium text-gray-900 mb-3">
                Collateral Backed by the Element Five Industries Cannot Substitute
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed mb-4">
                When an element&apos;s demand is distributed across LED lighting (current, massive, growing), aerospace (mission-critical, non-negotiable),
                industrial lasers (expanding with automation), superconductors (scaling toward commercial deployment), and cancer therapy (expanding with precision
                oncology), the demand trajectory is diversified across sectors that rarely correlate. LED lighting demand is driven by energy efficiency mandates.
                Aerospace demand is driven by engine performance requirements. Laser demand is driven by manufacturing automation. Superconductor demand is driven
                by medical infrastructure. Cancer therapy demand is driven by clinical evidence. Five independent demand drivers, none speculative, all structural.
              </p>
              <p className="text-xs text-gray-500 leading-relaxed">
                <span className="font-semibold text-gray-700">Buyers: </span>
                Crypto funds seeking exposure to multi-industry critical material demand with built-in geopolitical risk premium, protocol treasuries diversifying
                into the physical backbone of five industrial sectors simultaneously, DeFi protocols building collateral pools backed by the most broadly
                consumed non-light rare earth element, blockchain foundations investing in the physical constraint behind five independent growth trajectories,
                DAOs with critical infrastructure, advanced manufacturing, and supply chain security investment mandates.
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
            Instant Settlement for Tokenized Yttrium. No Chinese Export Traders. No Five-Industry Supply Chain Disruption.
          </h2>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-4xl mb-12">
            Yttrium is traded through Chinese-dominated channels where 95% of global supply is produced, separated, purified, and exported through a network of
            state-influenced trading companies. Pricing is opaque, determined bilaterally between Chinese exporters and international distributors rather than by
            transparent market mechanisms. Settlement takes days to weeks. Allocation reflects Chinese domestic consumption priorities and export quota policies
            rather than the urgent production schedules of international LED manufacturers, aerospace suppliers, or medical device companies. For an LED
            phosphor producer whose quarterly revenue depends on yttrium oxide availability, or an aerospace thermal coating supplier whose deliveries are tied to
            engine maintenance schedules, weeks of settlement delay and unpredictable allocation create manufacturing disruptions that cascade across entire
            industrial supply chains.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="bg-gray-50 rounded-2xl p-6 md:p-8 border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-1">The Old Way</h3>
              <p className="text-sm text-gray-500 mb-6">Chinese Export Channels. Days to Weeks. Five Industries Waiting.</p>
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
                <p className="text-sm text-red-600 font-medium">Settlement: T+2 to T+15 (standard for Chinese rare earth export transactions)</p>
              </div>
            </div>

            <div className="bg-gray-900 text-white rounded-2xl p-6 md:p-8">
              <h3 className="text-lg font-semibold mb-1">The Toto Finance Way</h3>
              <p className="text-sm text-gray-400 mb-6">Source ↔ Buyer. Direct. Instant.</p>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0 text-xs font-semibold">1</div>
                  <span className="text-sm">Mining / Rare Earth Separation and Purification</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0 text-xs font-semibold">2</div>
                  <Link href="/products" className="text-sm text-white underline underline-offset-2 hover:text-orange-100">
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
                Yttrium&apos;s market operates through infrastructure built during China&apos;s three-decade monopolization of rare earth processing, a trading
                network optimized for Chinese domestic industrial priorities rather than the production schedules of international LED, aerospace, laser,
                superconductor, and medical device manufacturers. Western industries procuring yttrium navigate Chinese export traders, international
                distributors, clearing agents, and banking channels, each extracting margin and adding delay. When a LED manufacturer&apos;s phosphor production
                line or an aerospace supplier&apos;s thermal coating schedule depends on yttrium delivery, every day of settlement delay is a day of manufacturing
                lost. Toto Finance uses blockchain to bypass the Chinese export trading infrastructure entirely, creating a transparent, continuous,
                instant-settlement market where yttrium sources connect with five-industry manufacturers and institutional investors through infrastructure
                designed for the supply chain reliability that critical manufacturing demands.
              </p>
            </div>
          </div>

          <h3 className="text-2xl font-medium text-gray-900 mb-6">Settlement at Industrial Scale</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                name: 'USDC',
                issuer: 'Circle',
                desc: 'Fully reserved and independently attested dollar stablecoin engineered for institutional settlement. The compliance architecture and regulatory transparency that LED manufacturers, aerospace defense contractors, medical device companies, and sovereign procurement programs require for auditable digital transactions involving materials critical to national manufacturing infrastructure, aviation safety, and public health.',
              },
              {
                name: 'USDT',
                issuer: 'Tether',
                desc: "Over $140 billion in global circulation providing settlement depth at the scale yttrium's $2.9 billion market demands. When procurement operates at the tonnage levels of major LED phosphor production runs, aerospace engine programs, or superconductor manufacturing contracts, USDT delivers execution infrastructure that eliminates the counterparty friction of Chinese export trader banking channels and multi-currency conversion delays.",
              },
              {
                name: 'USAT',
                issuer: 'Tether (US Regulated)',
                desc: 'US-regulated stablecoin under the GENIUS Act framework. Purpose-built for critical mineral procurement where Defense Production Act provisions, CHIPS and Science Act advanced manufacturing requirements, FAA airworthiness supply chain mandates, and FDA medical device material traceability regulations govern the acquisition of materials essential to American LED manufacturing, aerospace propulsion, industrial laser production, medical imaging, and cancer therapy.',
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
            DeFi Infrastructure for Tokenized Yttrium
          </h2>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-4xl mb-12">
            Yttrium has existed as a financial asset only through rare earth ETFs that bury it in baskets dominated by lighter rare earths, and through mining
            stocks where yttrium revenue is a fraction of total mine economics. No standalone yttrium ETF exists. No futures contract references it individually.
            No commodity index tracks it as an independent asset. The $2.9 billion backbone element consumed by five industries has had less financial visibility
            than agricultural commodities with a fraction of its industrial criticality. Tokenization does not merely digitize yttrium. It extracts it from rare
            earth baskets for the first time, creating an independent financial identity for the element that five industries chose independently and none can
            substitute.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            <div className="bg-white rounded-2xl p-6 md:p-8 border border-gray-200 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                The First Independent Yttrium Market, Built for Five Industries
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Before tokenization, yttrium had a line item in rare earth basket pricing, overshadowed by neodymium and praseodymium in ETF weightings, and
                invisible as a standalone asset in every financial instrument. No LED manufacturer could hedge yttrium independently. No aerospace supplier could
                secure forward yttrium supply through financial instruments. Tokenized yttrium creates the first dedicated trading venue: a continuous secondary
                market on decentralized exchanges where price discovery reflects LED phosphor demand, aerospace thermal coating procurement cycles, YAG laser
                crystal production schedules, superconductor development timelines, and Y-90 therapy expansion rather than basket rare earth pricing that obscures
                yttrium&apos;s individual supply-demand dynamics.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-6 md:p-8 border border-gray-200 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Yield Derived from the Element Behind Five Industrial Sectors</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Lend yttrium tokens to counterparties seeking leveraged exposure to multi-industry critical material pricing or hedged positions across LED,
                aerospace, laser, superconductor, and medical supply chains. Interest rates reflect real-world demand driven by LED penetration reaching 75%
                globally, next-generation jet engine programs demanding thicker thermal barriers, manufacturing automation expanding YAG laser deployment, YBCO
                superconductors scaling toward commercial applications, and precision oncology expanding Y-90 treatment protocols. Yield generated by five
                independent demand trajectories simultaneously drawing from one 95%-monopolized supply chain.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-6 md:p-8 border border-gray-200 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Capital Without Surrendering Positions in the Five-Industry Backbone
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                LED manufacturers, aerospace suppliers, and institutional investors holding yttrium positions have historically had no mechanism for accessing
                capital from those holdings, because yttrium has never existed as an independently held financial asset outside Chinese trading channels.{' '}
                <Link href="/products" className="text-slate-900 font-medium underline underline-offset-2 hover:text-slate-600">
                  Borrow against yttrium
                </Link>{' '}
                tokens to receive stablecoins while maintaining full exposure. For a LED phosphor producer managing inventory against quarterly production
                schedules, or an aerospace supplier coordinating thermal barrier coating delivery with engine MRO cycles, liquidity without liquidation is not a
                financial convenience. It is a supply chain capability that has never existed for this element.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-6 md:p-8 border border-gray-200 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Risk Architecture for an Element Whose Supply Is Governed by One Country&apos;s Policy
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Yttrium&apos;s supply risk is geopolitically concentrated: 95% production in China, complete separation monopoly, export controls tightening, and
                domestic consumption growing. Traditional commodity risk models do not account for an element whose global availability is determined by a single
                government&apos;s industrial and trade policy rather than by market economics. Smart contract infrastructure automates collateral monitoring
                calibrated to geopolitical supply risk dynamics, margin management reflecting the extreme price sensitivity of five industries&apos; simultaneous
                dependence on Chinese export decisions, and position tracking for an asset whose supply can be materially disrupted by a single policy
                announcement.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 md:p-8 border border-gray-200 shadow-sm">
            <h3 className="text-xl font-medium text-gray-900 mb-6 text-center">
              From Rare Earth Separation to Global Digital Market: The Yttrium Token Path
            </h3>
            <div className="space-y-6 max-w-4xl mx-auto">
              {[
                {
                  label: 'Separated:',
                  text: 'Yttrium oxide isolated during multi-stage rare earth separation, purified to 99.999%+ five-nines industrial grade, secured in insured custody, and bound to on-chain token identity',
                },
                {
                  label: 'Acquired:',
                  text: 'Purchased with USDC, USDT, or USAT at transparent pricing reflecting real-time LED, aerospace, laser, superconductor, and medical demand signals',
                },
                {
                  label: 'Positioned:',
                  text: 'Held in wallet, traded on secondary markets, or bridged across chains to integrate with holder procurement and portfolio infrastructure',
                },
                {
                  label: 'Activated:',
                  text: 'Deployed into yield protocols, pledged as loan collateral, or structured for multi-industry supply chain disruption hedging',
                },
                {
                  label: 'Delivered:',
                  text: 'Redeemed for physical yttrium oxide (Y₂O₃, 99.999%+) for YAG laser crystal growth, LED phosphor manufacturing, YSZ thermal barrier coating production, YBCO superconductor synthesis, Y-90 radioisotope target preparation, or alloy production',
                },
              ].map((step, i) => (
                <div key={i} className="flex gap-3">
                  <span className="text-sm font-semibold text-gray-900 shrink-0 w-28">{step.label}</span>
                  <p className="text-sm text-gray-600 leading-relaxed">{step.text}</p>
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
            Tokenized Yttrium vs Every Other Way to Get Exposure
          </h2>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-4xl mb-12">
            There has never been a way to invest in yttrium independently at scale. Rare earth ETFs bury it in baskets where neodymium and praseodymium dominate
            weightings. Mining stocks carry yttrium revenue as a minor line item beneath light rare earth production. Physical procurement operates through
            Chinese export channels with opaque pricing, unpredictable allocation, and settlement measured in days to weeks. Toto Finance built what five
            industries and their investors have never had: standalone, fractional, instant access to the backbone element that lights buildings, protects turbines,
            cuts metal, enables superconductors, and treats cancer.
          </p>

          <div className="overflow-x-auto rounded-2xl border border-gray-200">
            <table
              className="w-full text-sm text-left"
              aria-label="Comparison table of tokenized yttrium on Toto Finance versus rare earth ETFs, physical yttrium procurement, and mining stocks across 10 features including yttrium-specific exposure, settlement speed, price transparency, and DeFi access."
            >
              <thead>
                <tr className="bg-gray-900 text-white">
                  <th className="px-4 md:px-6 py-4 font-medium">Feature</th>
                  <th className="px-4 md:px-6 py-4 font-medium">Rare Earth ETFs</th>
                  <th className="px-4 md:px-6 py-4 font-medium bg-white/10">Toto Finance</th>
                  <th className="px-4 md:px-6 py-4 font-medium">Physical Yttrium</th>
                  <th className="px-4 md:px-6 py-4 font-medium">Mining Stocks</th>
                </tr>
              </thead>
              <tbody className="bg-white">
                {[
                  ['Yttrium-Specific', 'No (basket)', 'Yes (1:1)', 'Direct ownership', 'No (mixed revenue)'],
                  ['Trading Hours', 'Market hours only', '24/7/365', 'Chinese export hours', 'Market hours only'],
                  ['Settlement', 'T+2', 'T+0 (Instant)', 'Days to weeks', 'T+2'],
                  ['Settlement Currency', 'Fiat (via broker)', 'USDC, USDT, USAT', 'Wire transfer', 'Fiat (via broker)'],
                  ['Min. Investment', '1 share (~$50+)', 'Fractional (from $1)', '$25,000+', '1 share (~$10+)'],
                  ['Physical Redemption', 'No', 'Yes', 'Yes', 'No'],
                  ['On-Chain Transparency', 'No', 'Yes', 'No', 'No'],
                  ['DeFi Yield / Loans', 'No', 'Yes', 'No', 'No'],
                  ['Price Transparency', 'NAV-based', 'Real-time oracle', 'Opaque / bilateral', 'Stock price only'],
                  ['Intermediaries', 'Broker + Clearing', 'None (P2P)', 'Chinese traders + distributors', 'Broker'],
                ].map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="px-4 md:px-6 py-3 font-medium text-gray-900">{row[0]}</td>
                    <td className="px-4 md:px-6 py-3 text-gray-600">{row[1]}</td>
                    <td className="px-4 md:px-6 py-3 text-gray-900 font-semibold bg-orange-50/60">{row[2]}</td>
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
            Building Financial Infrastructure for the Backbone Element of Five Industries
          </h2>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto text-center mb-14">
            Yttrium has had limited financial infrastructure because its market has been controlled through Chinese trading channels where pricing, allocation,
            and settlement operate on terms set by producers rather than consumers. No independent benchmark price accessible to Western industries. No
            standardized delivery contracts. No transparent settlement infrastructure. No collateral framework recognized by financial institutions. Every feature
            of the Toto Finance platform for yttrium was designed to create what five industries consuming $2.9 billion of yttrium annually have never had:
            independent, transparent financial infrastructure for the element they all depend on and none controls.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: 'Physical Backing with Five-Industry-Grade Delivery Capability',
                desc: 'Every yttrium token connects to verified yttrium oxide (Y₂O₃, 99.999%+) in insured custody. Request physical delivery and receive material ready for YAG laser crystal growth, LED phosphor manufacturing (Y₂O₃:Eu doping), yttria-stabilized zirconia thermal barrier coating production, YBCO superconductor compound synthesis, Y-90 radioisotope target preparation, and aluminum/magnesium alloy strengthening. In a market where yttrium has been procured through Chinese export channels with variable quality specifications and delivery timelines, on-chain proof-of-reserves creates the first continuously verifiable record of five-nines yttrium holdings with guaranteed purity across all industrial application grades.',
              },
              {
                title: 'Price Discovery Independent of Chinese Export Trading',
                desc: "Yttrium has never had a transparent, independently verifiable price accessible to the industries that consume it. Chinese export traders quote bilaterally, vary pricing by customer relationship and geopolitical context, and adjust with production quotas and domestic consumption policies rather than international industrial demand signals. Toto Finance's oracle feeds and on-chain trading activity create the first public, real-time yttrium pricing mechanism: reflective of LED, aerospace, laser, superconductor, and medical demand across five independent sectors, and accessible to every market participant rather than confined to Chinese export trading networks.",
              },
              {
                title: 'Instant Settlement for a Material Where Delays Cascade Across Five Industries',
                desc: 'Traditional yttrium procurement operates through Chinese export channels with settlement timelines of two to fifteen days, allocation uncertainty driven by quota and policy decisions, and logistics chains crossing multiple intermediaries. Token settlement creates instant procurement capability, settling T+0 with stablecoins. For a LED manufacturer whose phosphor production line depends on yttrium delivery, or an aerospace supplier whose thermal barrier coating schedule is tied to engine maintenance cycles, instant settlement is not a convenience improvement. It is the difference between production continuity and cascading delays across customer supply chains.',
              },
              {
                title: 'Compliance for Multi-Industry Critical Material Transactions',
                desc: 'Yttrium entering LED manufacturing, aerospace engine programs, medical device production, and defense supply chains is subject to critical mineral sourcing regulations, export control frameworks, FAA airworthiness documentation, FDA material traceability requirements, and defense procurement compliance mandates that span five regulatory regimes simultaneously. Smart contracts embed KYC/AML verification, transfer restrictions, and jurisdiction-specific compliance rules directly into token architecture, creating a compliance layer designed for a material that serves civilian lighting, aviation safety, industrial manufacturing, medical imaging, and cancer therapy concurrently.',
              },
              {
                title: 'Financial Tools for a $2.9 Billion Market That Has Never Had Independent Instruments',
                desc: 'Lending, borrowing, hedging, and collateral management for yttrium as a standalone asset: capabilities that have never existed because yttrium has been financially invisible inside rare earth baskets and Chinese trading channels. Smart contract protocols enable yield generation from yttrium positions, stablecoin borrowing against holdings, and programmable hedging strategies built for an element whose demand is driven by five independent industrial sectors simultaneously while supply is governed by one country\'s production and export policy.',
              },
              {
                title: 'Multi-Chain Presence',
                desc: 'Tokenized yttrium is deployed across Ethereum, Polygon, Cardano, Solana, and XRP Ledger. LED manufacturers, aerospace suppliers, laser companies, superconductor developers, medical device producers, institutional custodians, DeFi protocols, and individual holders can interact with yttrium tokens on whatever chain infrastructure their operations already use. No migration required, no ecosystem lock-in, no chain-specific constraints on the backbone element of five industries.',
              },
            ].map((f, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{f.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{f.desc}</p>
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
            Tokenized Yttrium FAQ
          </h2>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-12 text-center">
            Direct answers about tokenized yttrium, In-Ground Yttrium, LED phosphors, YAG lasers, thermal barrier coatings, superconductors, cancer therapy, and
            how Toto Finance provides the first independent market access to the backbone element consumed by five industries.
          </p>
          <YttriumFAQ faqs={faqData} />
        </div>
      </section>

      {/* FOLD 13: Final CTA */}
      <section className="relative bg-gradient-to-br from-orange-950 via-slate-900 to-gray-950 text-white px-4 sm:px-6 md:px-8 lg:px-12 py-20 md:py-32 overflow-hidden">
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
            backgroundSize: '40px 40px',
          }}
        />
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <p className="text-xs uppercase tracking-widest text-orange-200/80 font-semibold mb-3">THIS IS WHY</p>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-light leading-tight mb-6">
            Every LED. Every Jet Engine. Every Industrial Laser. Every MRI. Every Cancer Treatment Using Y-90. One Element. 95% From One Country. The Gap Is
            Widening.
          </h2>
          <p className="text-base md:text-lg text-gray-300 leading-relaxed mb-8">
            The world needs 38,500 tonnes of yttrium by 2030. Existing and planned supply will deliver 26,500. The 12,000-tonne deficit is not a market cycle. It
            is the arithmetic of five independent industries growing while one country controls 95% of the element they all require and has no obligation to
            supply any of them. Every LED installed widens the gap. Every jet engine commissioned widens it further. Every YAG laser shipped, every YBCO
            superconductor fabricated, every Y-90 cancer treatment administered adds another demand vector that the same 95%-monopolized supply must absorb. Five
            industries. One element. One country. The structural deficit is accelerating. Toto Finance is building the infrastructure to bring the backbone element
            of modern manufacturing, modern lighting, modern aviation, modern medicine, and modern physics to an open, transparent, instant-settlement market for
            the first time.
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
