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
const HolmiumTickerBar = dynamicImport(
  () => import('../components/client/HolmiumTickerBar').then((mod) => ({ default: mod.HolmiumTickerBar }))
);
const HolmiumFAQ = dynamicImport(
  () => import('../components/client/SilverFAQ').then((mod) => ({ default: mod.SilverFAQ }))
);

const PAGE_URL = 'https://totofinance.co/tokenized-holmium';
const PAGE_TITLE = 'Tokenized Holmium | Digital Rare Earth Backed by Physical Assets | Toto Finance';
const PAGE_DESCRIPTION =
  'Every laser that removes a kidney stone depends on holmium. Toto Finance brings this ultra-rare heavy earth on-chain from 1:1 redeemable oxide tokens to In-Ground future delivery contracts. The element surgeons physically cannot operate without. Instant stablecoin settlement. DeFi secondary markets.';

const breadcrumbItems = [
  { name: 'Home', item: 'https://totofinance.co' },
  { name: 'Products', item: 'https://totofinance.co/products' },
  { name: 'Tokenized Holmium', item: PAGE_URL },
];

const faqData = [
  {
    question: 'What is tokenized holmium?',
    answer:
      'A blockchain-based digital asset backed 1:1 by refined holmium oxide (Ho₂O₃) in insured, audited vaults. High-purity grade (99.9%+ Ho₂O₃), ready for medical laser crystal fabrication, nuclear reactor applications, and magnetic materials production. Redeemable for physical holmium on demand. Toto Finance is building the infrastructure to bring holmium on-chain with instant stablecoin settlement and DeFi secondary markets.',
  },
  {
    question: 'What is In-Ground Holmium?',
    answer:
      'A tokenized future delivery contract for holmium still contained in heavy rare earth deposits at certified mining operations. Short-term (1 to 12 months) for operations with active separation capacity, long-term (1 to 6 years) for earlier-stage deposits. Built for medical laser manufacturers, nuclear developers, sovereign funds, and institutional investors positioning for the structural holmium deficit.',
  },
  {
    question: 'Where does the holmium come from?',
    answer:
      'Directly from rare earth mining companies and heavy rare earth separation facilities across China (90% of production from ionic clay deposits in Jiangxi and Guangdong), North America (USA and Canada developing domestic heavy rare earth separation for medical supply security), Australia (Northern Territory and Western Australia), Southeast Asia and Vietnam (ionic clay processing), and Greenland and Scandinavia (strategic European supply). No middlemen. No intermediary traders. More on partnerships and sourcing: https://totofinance.co/about.',
  },
  {
    question: 'Who buys tokenized holmium?',
    answer:
      'Three groups: (1) Surgical and nuclear operators, including medical laser manufacturers, urology and minimally invasive surgery device companies, hospital surgical centers, nuclear reactor operators, permanent magnet manufacturers, laser crystal producers, quantum computing hardware developers, particle accelerator facilities. (2) Precision medicine investors, including funds and allocators seeking direct exposure to the physical material driving surgical innovation, without company-specific operational risk. (3) On-chain participants, including crypto funds, protocol treasuries, and DeFi protocols seeking real-world collateral with demand driven by irreversible surgical adoption trends.',
  },
  {
    question: 'How does instant settlement work?',
    answer:
      'T+0 settlement using USDC, USDT, or USAT. Traditional holmium procurement involves locating specialized traders, negotiating without price references, coordinating heavy rare earth logistics, and banking settlement measured in weeks. Toto Finance connects holmium sources with buyers directly on-chain, eliminating every intermediary and settling transactions instantly.',
  },
  {
    question: 'Can I trade tokenized holmium on DeFi platforms?',
    answer:
      'Yes. After acquisition, trade on decentralized exchanges globally, generate yield by lending to counterparties, or use holmium tokens as collateral for stablecoin loans. Holmium has never had secondary market infrastructure of any kind. Tokenization creates it for the first time.',
  },
  {
    question: 'Why is the 2.1 micrometer wavelength so critical for surgery?',
    answer:
      'The 2.1 micrometer wavelength produced by holmium:YAG lasers is optimally absorbed by water in biological tissue, enabling precise cutting and vaporization with minimal thermal damage to surrounding structures. This makes holmium the gold standard for laser lithotripsy (1.2 million kidney stone treatments annually), prostate enucleation (200,000+ HoLEP procedures), and arthroscopic surgery. With 85% of all holmium demand coming from medical laser applications and minimally invasive procedure adoption growing at 18% to 25% annually, supply shortages directly threaten the surgical capacity of hospitals worldwide.',
  },
  {
    question: 'What is the holmium price outlook?',
    answer:
      'Roskill forecasts $550,000/mt in 2026. Critical Minerals Intelligence projects exceeding $600,000/mt by 2027 as medical laser demand accelerates while heavy rare earth production remains constrained. The deficit is expected to intensify through 2030 as minimally invasive surgery adoption scales globally, aging populations drive urological procedure growth, and quantum computing applications begin commercializing.',
  },
  {
    question: 'How do I get early access?',
    answer:
      'Visit https://totofinance.co/. Medical device manufacturers, hospital systems, nuclear operators, institutional investors, mining partners, and industrial buyers can reach out directly for partnership and early allocation discussions.',
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
        'Tokenized commodity platform offering 1:1 asset-backed holmium oxide tokens and In-Ground Holmium future delivery contracts with instant stablecoin settlement.',
    },
    {
      '@type': 'Product',
      name: '1:1 Holmium Oxide Token',
      description:
        'Digital asset backed 1:1 by refined holmium oxide (Ho₂O₃) in insured custody, redeemable for physical delivery. Category: Tokenized Commodity.',
      category: 'Tokenized Commodity',
      brand: { '@type': 'Brand', name: 'Toto Finance' },
      url: PAGE_URL,
    },
    {
      '@type': 'Product',
      name: 'In-Ground Holmium',
      description:
        'Tokenized future delivery contract for holmium in heavy rare earth deposits at certified mining operations. Category: Commodity Future Delivery Contract.',
      category: 'Commodity Future Delivery Contract',
      brand: { '@type': 'Brand', name: 'Toto Finance' },
      url: PAGE_URL,
    },
  ],
};

export default function TokenizedHolmiumPage() {
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
      <section className="relative bg-gradient-to-br from-emerald-900 via-emerald-800 to-gray-900 text-white px-4 sm:px-6 md:px-8 lg:px-12 pt-28 md:pt-36 pb-16 md:pb-24 overflow-hidden">
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
            backgroundSize: '40px 40px',
          }}
        />
        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <h1 className="text-sm md:text-base font-semibold tracking-[0.2em] uppercase text-emerald-200/90 mb-4">
            Tokenized Holmium by Toto Finance
          </h1>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light leading-tight mb-8">
            Every Surgical Laser That Saves a Life Depends on Holmium. Now Anyone Can Own It.
          </h2>
          <p className="text-base md:text-lg text-gray-200 leading-relaxed mb-10 max-w-3xl mx-auto text-left md:text-center">
            Right now, in an operating room somewhere in the world, a surgeon is using a holmium laser to remove a kidney stone, vaporize prostate
            tissue, or perform minimally invasive joint surgery. Over 1.2 million laser lithotripsy procedures are performed every year, and
            every single one requires a holmium-doped YAG crystal emitting at exactly 2.1 micrometers, the wavelength where water absorption
            enables precise tissue cutting with minimal collateral damage. Total global holmium production is just 18 tonnes per year, all as a
            heavy rare earth byproduct, and 85% of it goes directly into medical laser systems. There is no alternative element. There is no
            synthetic substitute. And the surgical world has no transparent market to procure through.{' '}
            <Link href="/" className="text-white underline underline-offset-2 hover:text-emerald-200">
              Toto Finance
            </Link>{' '}
            is changing that by bringing the element that powers the scalpel of light on-chain for the first time.
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
              Why Holmium Matters
            </a>
          </div>
        </div>
      </section>

      <HolmiumTickerBar />

      {/* FOLD 2: Crisis */}
      <section id="crisis" className="scroll-mt-24 px-4 sm:px-6 md:px-8 lg:px-12 py-20 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto">
          <p className="text-xs uppercase tracking-widest text-gray-400 font-semibold mb-3">THE WHY</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-gray-900 leading-tight mb-6">
            Surgeons Depend on Holmium. And the World Produces Less Than 18 Tonnes a Year.
          </h2>
          <div className="text-base md:text-lg text-gray-600 leading-relaxed max-w-4xl mb-12 space-y-4">
            <p>
              We chose holmium because it represents the most extreme scarcity of any commercially critical rare earth element. Not scarce in
              a theoretical sense. Scarce in the sense that global annual production would fit inside a single shipping container, and 85% of
              that output goes directly into the laser crystals that surgeons use to operate on human beings.
            </p>
            <p>
              Holmium-doped YAG lasers emit at 2.1 micrometers, a wavelength perfectly absorbed by water in biological tissue, enabling
              precision cutting and vaporization with minimal thermal damage to surrounding structures. This is not a preference. It is physics.
              No other element produces laser emission at a wavelength this precisely suited to soft tissue surgery. Every kidney stone
              procedure, every prostate enucleation, every arthroscopic intervention performed with a laser depends on holmium crystals. And
              the entire global supply of this element comes as a trace byproduct of heavy rare earth separation, a process controlled by a
              handful of facilities, with 90% of output originating in China. When surgical demand grows, holmium production does not follow,
              because no mining company will expand an entire heavy rare earth operation for a few additional tonnes of a trace element.
            </p>
            <p className="font-medium text-gray-900">That is why we exist.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gray-50 rounded-2xl p-6 md:p-8 border border-gray-100">
              <p className="text-4xl md:text-5xl font-light text-gray-900 mb-3">8.5 tonnes</p>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">A Deficit Measured in Cancelled Surgeries</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Roskill forecasts an 8.5-tonne holmium deficit in 2025, with the gap widening through 2030. Global holmium production is only
                18 tonnes annually, barely enough to supply one major medical laser manufacturer&apos;s annual crystal requirements. All
                production comes as a heavy rare earth byproduct, making supply structurally unable to respond to accelerating surgical demand.
              </p>
            </div>
            <div className="bg-gray-50 rounded-2xl p-6 md:p-8 border border-gray-100">
              <p className="text-4xl md:text-5xl font-light text-gray-900 mb-3">2.1 μm</p>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">The Wavelength That Operates</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Holmium:YAG lasers emit at 2.1 micrometers, the optimal wavelength for soft tissue surgery with maximum water absorption and
                minimal thermal damage. 85% of global holmium demand comes from medical laser applications including urology, orthopedics, and
                minimally invasive procedures. No other element produces laser emission at this wavelength with equivalent surgical precision.
              </p>
            </div>
            <div className="bg-gray-50 rounded-2xl p-6 md:p-8 border border-gray-100">
              <p className="text-4xl md:text-5xl font-light text-gray-900 mb-3">32 tonnes</p>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">A Gap That Grows with Every Operating Room</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Global holmium demand is projected to reach 65 tonnes per year by 2030, while supply from existing and planned rare earth mines
                will deliver only 33 tonnes. The 32-tonne gap represents a 49% shortfall. Every new hospital adopting laser surgery, every
                aging population requiring more urological procedures, every minimally invasive surgical protocol widens it further.
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
            Understanding Why Holmium Has No Substitute
          </h2>
          <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto text-center mb-14">
            The ultra-rare heavy earth element powering surgical lasers. Essential for the precision medicine procedures that define
            21st-century healthcare.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
              <div
                className="rounded-xl bg-gradient-to-br from-emerald-900 to-slate-950 text-white p-6 mb-4 font-mono text-sm"
                role="img"
                aria-label="Holmium element card showing Ho symbol, atomic number 67, density, 2.1 micrometer laser emission, and medical laser classification"
              >
                <p className="text-3xl font-light mb-1">Ho</p>
                <ul className="space-y-1 text-emerald-100/90">
                  <li>Atomic Number: 67</li>
                  <li>Density: 8,795 kg/m³</li>
                  <li>Melting Point: 1,474°C</li>
                  <li>Laser Emission: 2.1 μm (YAG)</li>
                  <li>Classification: Medical Laser Crystal Core</li>
                </ul>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">The Element</h3>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
              <div
                className="rounded-xl bg-gradient-to-br from-teal-800/70 to-slate-900 min-h-[160px] mb-4"
                role="img"
                aria-label="Heavy rare earth mining operation extracting xenotime and ionic clay minerals containing holmium"
              />
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Where It Comes From</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Extracted from xenotime, ionic clay, and monazite minerals in China, USA, Australia, and Vietnam. Produced exclusively as a
                trace byproduct during heavy rare earth separation, never mined independently. Global annual output is just 18 tonnes, making
                holmium one of the scarcest commercially traded elements on earth.
              </p>
              <p className="text-xs text-gray-500 mt-3 font-mono">
                Ore → Chemical Separation → Ion Exchange → Purification → 99.9% Pure Holmium Oxide
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
              <div
                className="rounded-xl bg-gradient-to-br from-cyan-800/50 to-slate-900 min-h-[160px] mb-4"
                role="img"
                aria-label="Holmium-doped YAG laser crystal used in surgical systems for precision tissue cutting at 2.1 micrometer wavelength"
              />
              <h3 className="text-lg font-semibold text-gray-900 mb-3">The Physics That Puts It in Every Operating Room</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Emits coherent laser light at precisely 2.1 micrometers when doped into YAG crystals, the wavelength where water absorption
                enables surgical cutting with extraordinary precision. Also possesses one of the highest magnetic moments of any element and
                exceptional thermal neutron absorption, making it critical for nuclear reactor control and high-field magnet applications.
                Holmium&apos;s combination of laser, magnetic, and nuclear properties is unmatched in the periodic table.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
              <div
                className="rounded-xl bg-gradient-to-br from-slate-700 to-slate-900 min-h-[160px] mb-4"
                role="img"
                aria-label="Applications of holmium including surgical laser systems, nuclear reactor control rods, high-field permanent magnets, and quantum computing components"
              />
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Where It Goes</h3>
              <p className="text-sm text-gray-600 leading-relaxed mb-4">
                Holmium:YAG surgical laser crystals (urology, orthopedics, soft tissue surgery), nuclear reactor control rods and emergency
                shutdown systems, high-field permanent magnets for MRI and particle accelerators, quantum computing cryogenic magnet components,
                magneto-optical recording media.
              </p>
              <p className="text-sm font-semibold text-emerald-800 bg-emerald-50 rounded-lg px-3 py-2">
                $95M+ global market (18 tonnes annual production, 65 tonnes needed by 2030)
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
            Surgical Demand Is Accelerating. Holmium Supply Cannot Be Manufactured.
          </h2>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-4xl mb-12">
            There is a direct physical link between the growth of minimally invasive surgery and the consumption of holmium. Every laser
            lithotripsy requires holmium crystals. Every prostate enucleation requires holmium crystals. Every arthroscopic laser procedure
            requires holmium crystals. Minimally invasive surgery adoption is growing at 18% annually. Holmium production, locked in
            trace-byproduct economics at heavy rare earth separation facilities, has no pathway to scale proportionally.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <div className="bg-gray-50 rounded-2xl p-6 md:p-8 border border-gray-100">
              <h3 className="text-xl font-medium text-gray-900 mb-3">Holmium:YAG Medical Lasers: 85% of All Holmium Demand</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Holmium:YAG lasers are the gold standard for urological procedures, with over 1.2 million laser kidney stone treatments performed
                annually worldwide. Each laser system contains 50 to 150 grams of holmium-doped YAG crystal. The medical laser sector consumes
                15 tonnes of holmium per year, growing at 18% compound annual growth as hospitals globally transition from open surgery to
                laser-based minimally invasive protocols that reduce recovery times from weeks to days.
              </p>
            </div>
            <div className="bg-gray-50 rounded-2xl p-6 md:p-8 border border-gray-100">
              <h3 className="text-xl font-medium text-gray-900 mb-3">Prostate Surgery: The Aging Population Catalyst</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Holmium laser enucleation of the prostate (HoLEP) is rapidly replacing traditional surgical resection for benign prostatic
                hyperplasia, with over 200,000 procedures performed annually. The 2.1 micrometer wavelength provides precise tissue
                vaporization with minimal bleeding and shorter catheterization times. Aging populations across every developed nation are
                driving 25% annual growth in holmium laser prostate procedures, and every new urology department adopting HoLEP adds permanent
                holmium demand.
              </p>
            </div>
            <div className="bg-gray-50 rounded-2xl p-6 md:p-8 border border-gray-100">
              <h3 className="text-xl font-medium text-gray-900 mb-3">Nuclear Reactor Control: Neutron Capture at Scale</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Holmium possesses the highest thermal neutron absorption cross-section among stable elements after gadolinium, making it
                essential for nuclear reactor control rod alloys and emergency shutdown systems. The nuclear energy sector consumes 2 tonnes
                annually. With over 60 reactors under construction worldwide and governments committing to nuclear buildout for carbon-neutral
                energy, holmium demand in reactor safety applications is growing in parallel with the global energy transition.
              </p>
            </div>
            <div className="bg-gray-50 rounded-2xl p-6 md:p-8 border border-gray-100">
              <h3 className="text-xl font-medium text-gray-900 mb-3">Quantum Computing and High-Field Magnets: The Emerging Frontier</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Holmium additions to iron and dysprosium magnets increase magnetic performance at cryogenic temperatures for MRI systems,
                particle accelerators, and quantum computing hardware. Single holmium atoms have demonstrated potential as quantum memory bits.
                The magnetic materials sector consumes 1 tonne annually, growing at 35% compound annual growth as quantum technology
                transitions from laboratory research to commercial deployment.
              </p>
            </div>
          </div>

          <div className="bg-gray-50 rounded-2xl p-6 md:p-8 border border-gray-200">
            <h3 className="text-xl font-medium text-gray-900 mb-2">A Deficit That Grows with Every Surgical Procedure</h3>
            <p className="text-sm text-gray-500 mb-6">
              Bar chart showing global holmium demand rising from 19.5 tonnes in 2025 to 65 tonnes by 2030, with supply reaching approximately
              33 tonnes, creating a 32 tonne annual deficit.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-6">
              {[
                { year: '2025', val: '19.5', note: 'Demand (t)' },
                { year: '2028', val: '38.0', note: 'Demand (t)' },
                { year: '2030', val: '65.0', note: 'Demand (t)' },
                { year: '2035', val: '105.0', note: 'Roskill' },
                { year: '2030 Supply', val: '~33.0', note: 'Gap: 32+ t' },
              ].map((d, i) => (
                <div
                  key={d.year}
                  className={`text-center p-4 rounded-xl ${i === 4 ? 'bg-red-50 border border-red-100' : i === 3 ? 'bg-emerald-50' : 'bg-white border border-gray-100'}`}
                >
                  <p className={`text-sm mb-2 ${i === 4 ? 'text-red-800 font-medium' : 'text-gray-500'}`}>{d.year}</p>
                  <p className="text-sm font-semibold text-gray-900">{d.val} t</p>
                  <p className="text-xs text-gray-500 mt-1">{d.note}</p>
                </div>
              ))}
            </div>
            <p className="text-xs text-gray-400">
              Sources: Roskill, Critical Minerals Intelligence, USGS, American Urological Association.
            </p>
          </div>
        </div>
      </section>

      {/* FOLD 5: TWO PRODUCTS */}
      <section id="products" className="scroll-mt-24 px-4 sm:px-6 md:px-8 lg:px-12 py-20 md:py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <p className="text-xs uppercase tracking-widest text-gray-400 font-semibold mb-3 text-center">TWO PRODUCTS</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-gray-900 leading-tight mb-6 text-center">
            Two Ways to Own Tokenized Holmium
          </h2>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto text-center mb-14">
            Everything we believe about opening access to critical surgical materials comes to life in two products. One for holmium that is
            already refined and vaulted. One for holmium still locked in heavy rare earth deposits awaiting separation. Both backed by physical
            assets. Both settleable in stablecoins. Both built to give the medical device companies, nuclear operators, and investors
            confronting an 18-tonne-per-year bottleneck a way to secure the element that makes precision surgery possible.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
            <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm">
              <span className="inline-block text-xs font-bold tracking-wider text-emerald-800 bg-emerald-100 px-3 py-1 rounded-full mb-4">
                ASSET-BACKED TOKEN
              </span>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                <Link href="/products" className="hover:text-emerald-700 underline-offset-2 hover:underline">
                  1:1 Holmium Oxide Token
                </Link>
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed mb-6">
                Digital ownership of physical holmium. Every token is backed 1:1 by refined holmium oxide (Ho₂O₃) in insured, audited vaults.
                High-purity grade (99.9%+ Ho₂O₃), ready for medical laser crystal fabrication, nuclear reactor component manufacturing, and
                magnetic materials production. Redeemable for physical holmium on demand. Not a derivative. Not a tracker. The actual material.
              </p>
              <ul className="text-sm text-gray-700 space-y-2 list-disc pl-5">
                <li>Backed 1:1 by refined holmium oxide (99.9%+ purity grade)</li>
                <li>Always redeemable for physical holmium delivery on demand</li>
                <li>Stored in insured, independently audited vault and warehouse facilities</li>
                <li>On-chain proof-of-reserves with real-time oracle feeds</li>
                <li>Fractional ownership, from $1, tradeable 24/7 with instant stablecoin settlement</li>
                <li>Ready for industrial end-use: surgical laser crystals, nuclear control rods, high-field magnets, quantum computing components</li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm">
              <span className="inline-block text-xs font-bold tracking-wider text-slate-800 bg-slate-200 px-3 py-1 rounded-full mb-4">
                FUTURE DELIVERY CONTRACT
              </span>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                <Link href="/products" className="hover:text-emerald-700 underline-offset-2 hover:underline">
                  In-Ground Holmium
                </Link>
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed mb-6">
                Forward positions in holmium that has not been separated yet. Tokenized future delivery contracts backed by proven holmium
                content in heavy rare earth deposits at certified mining operations. For organizations that understand that 18 tonnes of annual
                production serving a 65-tonne demand curve by 2030 creates a pricing trajectory that rewards those who secure position before
                the surgical world exhausts available supply.
              </p>
              <ul className="text-sm text-gray-700 space-y-2 list-disc pl-5">
                <li>Backed by proven holmium content in heavy rare earth reserves at partner mining sites</li>
                <li>Pre-production pricing reflecting trace-byproduct scarcity and separation constraints</li>
                <li>On-chain reserve tracking with geological data transparency</li>
                <li>Physical delivery or settlement at maturity</li>
                <li>Verified reserves with third-party geological audits</li>
                <li>Built for medical device manufacturers, nuclear developers, sovereign funds, and institutional allocators</li>
              </ul>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-emerald-900/10 border border-emerald-200 rounded-2xl p-6 md:p-8">
              <p className="text-xs font-bold text-emerald-900 uppercase tracking-wider mb-2">SHORT-TERM DELIVERY</p>
              <p className="text-lg font-semibold text-gray-900 mb-3">1 to 12 Months</p>
              <p className="text-sm text-gray-600 leading-relaxed">
                Near-term holmium delivery contracts tied to active heavy rare earth operations with separation capacity. For medical laser
                manufacturers managing quarterly crystal production, surgical equipment companies scaling device output, and commodity
                specialists trading near-term holmium supply dynamics in the tightest rare earth market on the periodic table.
              </p>
            </div>
            <div className="bg-slate-100 border border-slate-200 rounded-2xl p-6 md:p-8">
              <p className="text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">LONG-TERM DELIVERY</p>
              <p className="text-lg font-semibold text-gray-900 mb-3">1 to 6 Years</p>
              <p className="text-sm text-gray-600 leading-relaxed">
                Multi-year holmium positions backed by proven heavy rare earth reserves at earlier-stage operations. Built for sovereign
                strategic reserves, medical device manufacturers planning decade-scale production commitments, and institutional allocators who
                recognize that an 18-tonne annual supply serving exponentially growing surgical demand is not a market to observe but a
                constraint to position against.
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
            Securing the Element That Powers Surgical Precision. Directly.
          </h2>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto text-center mb-14">
            Holmium does not have a dedicated mine anywhere on earth. It emerges in trace quantities during heavy rare earth separation, a
            process controlled by a small number of specialized facilities, with 90% of global output originating in China. Toto Finance works
            directly with{' '}
            <Link href="/about" className="text-emerald-800 font-medium underline underline-offset-2 hover:text-emerald-600">
              rare earth mining companies and heavy rare earth separation facilities
            </Link>{' '}
            to secure holmium at the processing level, bypassing the trader networks and intermediary chains that add cost and opacity to the
            most supply-constrained rare earth market in existence.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            {[
              {
                title: 'China',
                text: 'China produces 90% of global holmium from ionic clay deposits in southern provinces, particularly Jiangxi and Guangdong. Chinese heavy rare earth separation facilities supply holmium oxide for domestic medical device manufacturing and export markets. Export restrictions and domestic healthcare priorities are tightening international availability at a pace that threatens surgical equipment supply chains globally.',
              },
              {
                title: 'North America (USA and Canada)',
                text: 'US and Canadian rare earth projects are developing heavy rare earth separation capabilities, including operations in Texas, Alaska, and Saskatchewan. Critical mineral designation has prioritized domestic holmium supply chains to ensure that medical laser manufacturing and nuclear reactor operations maintain access independent of Chinese production decisions.',
              },
              {
                title: 'Australia',
                text: 'Northern Territory and Western Australian deposits contain holmium-bearing heavy rare earth minerals in xenotime and ionic clay formations. New separation technologies are enabling economic holmium recovery for medical and nuclear applications outside Chinese processing dominance, establishing Australia as a key allied-nation supply source.',
              },
              {
                title: 'Southeast Asia and Vietnam',
                text: 'Vietnamese ionic clay deposits and emerging Southeast Asian heavy rare earth processing facilities produce holmium oxide from regional mining operations. These operations provide alternative supply routes for medical device manufacturers seeking procurement diversification in a market where single-source dependency carries unacceptable risk.',
              },
              {
                title: 'Greenland and Scandinavia',
                text: "Greenland's Kvanefjeld project and Scandinavian rare earth deposits contain heavy rare earth concentrations including holmium. These represent strategically significant supply sources for European and NATO medical device supply chains, reducing dependence on Chinese processing for surgical and nuclear applications.",
              },
              {
                title: 'Exploration and Development',
                text: 'New heavy rare earth projects across Africa, South America, and Central Asia are in exploration and feasibility stages. These represent the next generation of holmium supply, and In-Ground Holmium positions offer access at pre-production economics before separation output reaches the market.',
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
              <strong>Secured at the separation stage.</strong> Holmium does not come from a mine. It comes from a heavy rare earth separation
              facility. Toto Finance works at this critical processing point, eliminating the broker and trader layers that sit between
              separation output and end-user delivery. Verified provenance. Transparent chain of custody from{' '}
              <Link href="/how-tokenization-works" className="underline underline-offset-2 hover:text-emerald-200">
                mine to token
              </Link>
              . Access at the point where holmium actually becomes available, not three intermediaries downstream.
            </p>
          </div>
        </div>
      </section>

      {/* FOLD 7: PARTICIPANTS */}
      <section className="px-4 sm:px-6 md:px-8 lg:px-12 py-20 md:py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <p className="text-xs uppercase tracking-widest text-gray-400 font-semibold mb-3 text-center">PARTICIPANTS</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-gray-900 leading-tight mb-6 text-center">
            Who Buys Tokenized Holmium
          </h2>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto text-center mb-14">
            Holmium has always traded in quantities measured in grams, through a tiny circle of specialized heavy rare earth traders, at prices
            set behind closed doors. The medical device companies and nuclear operators that consume it have had no transparent procurement
            channel, no public price reference, and no ability to secure forward supply. Toto Finance opens that access for the first time.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 border border-gray-200">
              <span className="text-xs font-bold tracking-widest text-emerald-800">SURGICAL AND NUCLEAR OPERATORS</span>
              <h3 className="text-xl font-semibold text-gray-900 mt-3 mb-4">The Organizations Where Holmium Performs</h3>
              <p className="text-sm text-gray-600 leading-relaxed mb-4">
                These buyers do not speculate on holmium prices. They consume holmium in the laser crystals that surgeons use to operate, in the
                control rods that keep nuclear reactors safe, in the magnets that enable MRI diagnostics and particle physics research. Tokenized
                holmium gives them{' '}
                <Link href="/products" className="text-emerald-800 font-medium underline underline-offset-2">
                  supply continuity
                </Link>
                , transparent procurement, and physical delivery capability without the lead times and pricing opacity of a market where a
                single phone call to a trader is the only procurement option.
              </p>
              <p className="text-xs text-gray-500 leading-relaxed">
                Medical laser manufacturers and surgical equipment companies, urology and minimally invasive surgery device manufacturers, hospital
                surgical centers and laser surgery providers, nuclear reactor operators and fuel rod manufacturers, permanent magnet manufacturers
                for MRI and accelerators, laser crystal and optical component producers, quantum computing hardware developers, particle
                accelerator facilities, magneto-optical recording manufacturers, specialized nuclear alloy processors.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 border border-gray-200">
              <span className="text-xs font-bold tracking-widest text-blue-800">PRECISION MEDICINE INVESTORS</span>
              <h3 className="text-xl font-semibold text-gray-900 mt-3 mb-4">Investing in What Surgical Innovation Is Physically Made Of</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Investors allocate billions to medical device stocks, hospital chains, and surgical robotics companies, yet the physical element
                that makes laser surgery possible has been entirely uninvestable. Until now. Tokenized holmium offers direct exposure to a
                material with 18% annual demand growth driven by the global adoption of minimally invasive surgical protocols, fractional access
                from $1, and zero dependence on any company&apos;s operational execution. The thesis is elemental: more surgeries are performed
                with lasers every year, holmium cannot be synthesized, and 18 tonnes of annual production cannot serve a world transitioning from
                scalpels to light.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 border border-gray-200">
              <span className="text-xs font-bold tracking-widest text-purple-800">ON-CHAIN INFRASTRUCTURE</span>
              <h3 className="text-xl font-semibold text-gray-900 mt-3 mb-4">Backing Digital Assets with the Material That Enables Precision Medicine</h3>
              <p className="text-sm text-gray-600 leading-relaxed mb-4">
                The convergence of rare earth scarcity and surgical technology growth creates an asset class with demand characteristics unlike
                any other commodity. Tokenized holmium offers on-chain participants collateral backed by a material where demand is driven by
                biological necessity, surgical procedure adoption follows a one-way curve, and supply is constrained by physics rather than
                economics. For protocols, treasuries, and funds seeking real-world assets that compound in relevance as global healthcare
                modernizes.
              </p>
              <p className="text-xs text-gray-500 leading-relaxed">
                Crypto funds seeking surgical-technology correlated commodity exposure, protocol treasuries diversifying into the physical layer
                of precision medicine, DeFi protocols building collateral pools with demand driven by irreversible surgical adoption trends,
                blockchain foundations investing in materials with non-discretionary medical end markets, DAOs with healthcare technology
                investment mandates.
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
            Instant Settlement for Tokenized Holmium. No Rare Earth Traders. No Delays.
          </h2>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-4xl mb-12">
            Holmium has never appeared on any exchange, any trading platform, any public marketplace. There is no spot price, no futures
            contract, no benchmark index. Every gram is procured through a handful of heavy rare earth traders who control access to the most
            supply-constrained element in the surgical materials chain. For medical device companies manufacturing the laser systems that save
            lives, the procurement experience is a black box: call a trader, negotiate in the dark, hope the material arrives on schedule. We
            built something that treats surgical supply chains with the urgency they deserve.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="bg-gray-50 rounded-2xl p-6 md:p-8 border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-1">The Old Way</h3>
              <p className="text-sm text-gray-500 mb-6">8+ Intermediaries. Weeks to Settle. Opaque Pricing.</p>
              <div className="space-y-3">
                {[
                  'Mining Company / Ore Producer',
                  'Heavy Rare Earth Separation Facility',
                  'Specialized Rare Earth Trader',
                  'Medical Supply Intermediary',
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
                        <Link href="/products" className="underline underline-offset-2 hover:text-emerald-200">
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
                The holmium market is perhaps the most opaque commodity market in the world. Fewer than a dozen traders globally handle
                meaningful volume. No public pricing exists. No standard contracts govern transactions. No settlement infrastructure supports
                the market. Toto Finance uses blockchain to build what the surgical supply chain has never had: a transparent, instant-settlement
                mechanism connecting holmium sources directly with the manufacturers and institutions that consume it, removing every layer that
                traditionally stands between separation and surgery.
              </p>
            </div>
          </div>

          <h3 className="text-2xl font-medium text-gray-900 mb-6 text-center">Settlement at the Speed of Surgical Precision</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                name: 'USDC',
                issuer: 'Circle',
                detail:
                  'The institutional benchmark for dollar-denominated digital settlement. The reserve transparency, attestation rigor, and cross-chain integration that medical device procurement operations and institutional holmium buyers require for regulatory-grade transactions.',
              },
              {
                name: 'USDT',
                issuer: 'Tether',
                detail:
                  'Over $140 billion in global circulation delivering unmatched liquidity depth. When holmium transactions require immediate settlement regardless of volume, time zone, or counterparty availability, USDT provides the execution infrastructure to close without delay.',
              },
              {
                name: 'USAT',
                issuer: 'Tether (US Regulated)',
                detail:
                  'US-regulated stablecoin under the GENIUS Act framework. Purpose-built for medical supply chain transactions and institutional procurement where domestic compliance architecture, auditable settlement trails, and US jurisdictional requirements are non-negotiable.',
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
            DeFi Infrastructure for Tokenized Holmium
          </h2>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-4xl mb-12">
            Holmium has had zero financial infrastructure for its entire commercial history. No exchange listing. No ETF. No futures market. No
            lending facility. No collateral framework. Tokenization does not merely move holmium onto a blockchain. It constructs an entire
            financial ecosystem around a material so rare that its total annual production weighs less than three fully loaded pickup trucks.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            <div className="bg-white rounded-2xl p-6 md:p-8 border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">The First Holmium Trading Venue in History</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Before tokenization, there was no holmium market. There were phone calls. A medical device manufacturer needing holmium oxide
                called one of a handful of traders, accepted whatever price was quoted, and waited weeks for delivery confirmation. Tokenized
                holmium creates the first continuous trading venue for this element: a 24/7 secondary market on decentralized exchanges where price
                discovery happens transparently, transfers execute instantly, and liquidity exists across chains. This is not market improvement.
                This is the creation of a market where none has ever existed.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-6 md:p-8 border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Yield Derived from Surgical Adoption Curves</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Lend holmium tokens to counterparties seeking leveraged exposure to heavy rare earth pricing or hedged positions in medical
                materials. Interest rates reflect real-world demand for holmium exposure, tied to surgical laser adoption rates, HoLEP procedure
                growth, and nuclear energy deployment timelines. Yield generated by the irreversible global transition from open surgery to
                laser-based minimally invasive protocols, not by token emission schedules or governance incentives.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-6 md:p-8 border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Liquidity Without Losing Surgical Supply</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Medical device companies and institutional investors holding holmium positions have historically had one option for accessing
                capital: sell the entire position back to a trader at whatever terms were offered. Tokenized holmium transforms this constraint.{' '}
                <Link href="/products" className="text-emerald-800 font-medium underline underline-offset-2">
                  Borrow against holmium
                </Link>{' '}
                tokens to receive stablecoins while maintaining full exposure. For laser manufacturers managing cash flow against multi-year
                crystal production commitments, this unlocks working capital without surrendering the strategic supply that keeps production
                lines running.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-6 md:p-8 border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Algorithmic Risk Controls for the Scarcest Market on Earth</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Holmium&apos;s market is the smallest and most concentrated of any commercially critical rare earth. A single separation facility
                shutdown, a single export policy change, a single disruption at any point in the supply chain can move pricing by double-digit
                percentages overnight. Managing risk through phone calls and manual contract adjustments is not viable at that velocity. Smart
                contract infrastructure automates collateral monitoring, margin management, and liquidation execution in real time, providing
                institutional-grade risk architecture for a market so thin that traditional risk tools were never designed to operate within it.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 md:p-8 border border-gray-200">
            <h3 className="text-xl font-medium text-gray-900 mb-6 text-center">
              From Separation Facility to Global Digital Market: The Holmium Token Path
            </h3>
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              {[
                'Certified: Holmium oxide verified at heavy rare earth separation facility, secured in insured custody, and linked to on-chain token identity',
                'Acquired: Purchased with USDC, USDT, or USAT at transparent pricing reflecting real-time surgical and industrial demand',
                'Positioned: Held in wallet, traded on secondary markets, or bridged across chains to integrate with holder infrastructure',
                'Activated: Deployed into yield protocols, pledged as loan collateral, or structured for supply disruption protection',
                'Delivered: Redeemed for physical holmium oxide (Ho₂O₃) for laser crystal fabrication, nuclear applications, or magnetic materials production',
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
            Tokenized Holmium vs Every Other Way to Get Exposure
          </h2>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-4xl mb-12">
            There has never been any way to invest in holmium. Rare earth ETFs dilute exposure across dozens of elements where holmium is a
            rounding error. Mining stocks carry operational risk unrelated to holmium pricing. Physical procurement requires relationships with
            the small number of heavy rare earth traders who handle this material, and minimum quantities start at kilogram scale with six-figure
            price commitments. Toto Finance built what does not exist anywhere else.
          </p>

          <div
            className="overflow-x-auto rounded-2xl border border-gray-200"
            aria-label="Comparison table of tokenized holmium on Toto Finance versus rare earth ETFs, physical holmium procurement, and mining stocks across 10 features including holmium-specific exposure, settlement speed, price transparency, and DeFi access."
          >
            <table className="w-full text-sm text-left min-w-[720px]">
              <thead>
                <tr className="bg-gray-900 text-white">
                  <th className="px-4 md:px-6 py-4 font-medium">Feature</th>
                  <th className="px-4 md:px-6 py-4 font-medium">Rare Earth ETFs</th>
                  <th className="px-4 md:px-6 py-4 font-medium bg-white/10">Toto Finance</th>
                  <th className="px-4 md:px-6 py-4 font-medium">Physical Holmium</th>
                  <th className="px-4 md:px-6 py-4 font-medium">Mining Stocks</th>
                </tr>
              </thead>
              <tbody className="bg-white">
                {[
                  ['Holmium-Specific', 'No (basket)', 'Yes (1:1)', 'Yes', 'No (equity)'],
                  ['Trading Hours', 'Market hours only', '24/7/365', 'Private negotiation', 'Market hours only'],
                  ['Settlement', 'T+2', 'T+0 (Instant)', 'Weeks to months', 'T+2'],
                  ['Settlement Currency', 'Fiat (via broker)', 'USDC, USDT, USAT', 'Wire transfer', 'Fiat (via broker)'],
                  ['Min. Investment', '1 share (~$50+)', 'Fractional (from $1)', '$100,000+ (kg scale)', '1 share (~$10+)'],
                  ['Physical Redemption', 'No', 'Yes', 'Yes', 'No'],
                  ['On-Chain Transparency', 'No', 'Yes', 'No', 'No'],
                  ['DeFi Yield / Loans', 'No', 'Yes', 'No', 'No'],
                  ['Price Transparency', 'NAV-based', 'Real-time oracle', 'Private negotiation', 'Stock price only'],
                  ['Intermediaries', 'Broker + Clearing', 'None (P2P)', 'Handful of traders', 'Broker'],
                ].map((row, i) => (
                  <tr key={row[0]} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="px-4 md:px-6 py-3 font-medium text-gray-900">{row[0]}</td>
                    <td className="px-4 md:px-6 py-3 text-gray-600">{row[1]}</td>
                    <td className="px-4 md:px-6 py-3 text-gray-900 font-medium bg-emerald-50/50">{row[2]}</td>
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
            Building Financial Infrastructure for an 18-Tonne-Per-Year Market
          </h2>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-4xl mb-12">
            Holmium has been procured through a tiny circle of specialized heavy rare earth traders for as long as it has been commercially
            relevant. No standardized contracts. No public pricing benchmarks. No settlement infrastructure. No collateral frameworks. Every
            feature of the Toto Finance platform for holmium was designed from first principles because the market for this element was too
            small and too specialized for anyone to have built financial infrastructure around it before.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                t: 'Physical Backing with Surgical-Grade Delivery',
                b: 'Every holmium token connects to verified holmium oxide (Ho₂O₃, 99.9%+) in insured custody. Request physical delivery and receive material ready for laser crystal growth, nuclear control rod alloy production, or high-field magnet manufacturing. In a market where verifying what you are purchasing has always meant trusting a trader\'s word, on-chain proof-of-reserves replaces reputation with cryptographic certainty.',
              },
              {
                t: 'Price Discovery for the Most Opaque Market on the Periodic Table',
                b: "Holmium has never had a public price. Not a delayed price. Not an indicative price. No price at all. Every gram is negotiated privately in conversations that leave no public record. Toto Finance's oracle feeds and on-chain trading activity create the first transparent holmium pricing mechanism in history: real-time, independently verifiable, and accessible to any participant, from surgical laser manufacturers to individual investors.",
              },
              {
                t: 'Instant Settlement for a Market That Operates by Handshake',
                b: 'Traditional holmium procurement involves locating a willing trader, negotiating terms without reference benchmarks, arranging heavy rare earth logistics, coordinating customs clearance, and completing banking settlement across multiple jurisdictions. The process can take weeks or months. Token settlement is T+0 with stablecoins. For medical device manufacturers managing production timelines against unpredictable rare earth availability, instant execution transforms holmium procurement from a waiting game into a responsive capability.',
              },
              {
                t: 'Compliance for Cross-Border Heavy Rare Earth Trade',
                b: 'Holmium trade crosses jurisdictions with heavy rare earth export controls, strategic material designations, and medical device supply chain regulations that exceed standard commodity compliance requirements. Smart contracts embed KYC/AML verification, transfer restrictions, and jurisdiction-specific regulatory rules directly into token architecture, ensuring every transaction automatically satisfies applicable requirements without the manual documentation that bogs down traditional procurement in a market this specialized.',
              },
              {
                t: 'A Complete Financial Stack for a Micro-Market',
                b: 'Lending, borrowing, hedging, and collateral management for holmium: functions that have never existed in any form for an element with 18 tonnes of annual production. Smart contract protocols enable yield generation from holmium positions, stablecoin borrowing against holdings, and programmable hedging strategies. An entire financial infrastructure, purpose-built for what may be the smallest commercially critical commodity market in the world.',
              },
              {
                t: 'Multi-Chain Presence',
                b: 'Tokenized holmium is deployed across Ethereum, Polygon, Cardano, Solana, and XRP Ledger. Institutional custodians, DeFi protocols, medical device procurement systems, and individual holders can interact with holmium tokens on whatever chain infrastructure their operations already use. No migration required, no ecosystem lock-in.',
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
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-gray-900 leading-tight mb-6">Tokenized Holmium FAQ</h2>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-12">
            Direct answers about tokenized holmium, In-Ground Holmium, surgical and nuclear demand, and how Toto Finance provides access to the
            ultra-rare element powering precision medicine.
          </p>
          <HolmiumFAQ faqs={faqData} />
        </div>
      </section>

      {/* FOLD 13: Final CTA */}
      <section className="relative bg-gradient-to-br from-emerald-900 via-emerald-800 to-gray-900 text-white px-4 sm:px-6 md:px-8 lg:px-12 py-20 md:py-32 overflow-hidden">
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
            backgroundSize: '40px 40px',
          }}
        />
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <p className="text-xs uppercase tracking-widest text-emerald-200/80 font-semibold mb-3">THIS IS WHY</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light leading-tight mb-8">
            Surgical Demand Grows Every Year. Holmium Supply Remains at 18 Tonnes.
          </h2>
          <p className="text-base md:text-lg text-gray-200 leading-relaxed mb-10">
            Every laser lithotripsy depends on holmium. Every prostate enucleation, every minimally invasive procedure, every nuclear control
            rod. The world needs 65 tonnes by 2030. Supply will deliver 33. The 32-tonne gap compounds with every hospital that adopts laser
            surgery, every aging population requiring more procedures, every quantum computing system that reaches deployment. Toto Finance is
            building the infrastructure to bring this ultra-rare surgical material to an open, transparent, instant-settlement market for the
            first time in its history.
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
