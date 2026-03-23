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
const LutetiumTickerBar = dynamicImport(
  () => import('../components/client/LutetiumTickerBar').then((mod) => ({ default: mod.LutetiumTickerBar }))
);
const LutetiumFAQ = dynamicImport(
  () => import('../components/client/SilverFAQ').then((mod) => ({ default: mod.SilverFAQ }))
);

const PAGE_URL = 'https://totofinance.co/tokenized-lutetium';
const PAGE_TITLE = 'Tokenized Lutetium | Digital Rare Earth Backed by Physical Assets | Toto Finance';
const PAGE_DESCRIPTION =
  'Every PET scanner that detects cancer depends on lutetium. Toto Finance brings the rarest and most expensive rare earth on-chain from 1:1 redeemable oxide tokens to In-Ground future delivery contracts. The element that finds cancer before it spreads. Instant stablecoin settlement. DeFi secondary markets.';

const breadcrumbItems = [
  { name: 'Home', item: 'https://totofinance.co' },
  { name: 'Products', item: 'https://totofinance.co/products' },
  { name: 'Tokenized Lutetium', item: PAGE_URL },
];

const faqData = [
  {
    question: 'What is tokenized lutetium?',
    answer:
      'A blockchain-based digital asset backed 1:1 by refined lutetium oxide (Lu₂O₃) in insured, audited vaults. Ultra-high-purity grade (99.99%+ Lu₂O₃), ready for PET scintillator crystal production, radiopharmaceutical manufacturing, and precision optics fabrication. Redeemable for physical lutetium on demand. Toto Finance is building the infrastructure to bring lutetium on-chain with instant stablecoin settlement and DeFi secondary markets.',
  },
  {
    question: 'What is In-Ground Lutetium?',
    answer:
      'A tokenized future delivery contract for lutetium still contained in heavy rare earth deposits at certified mining operations. Short-term (1 to 12 months) for operations with active ultra-purification capacity, long-term (1 to 6 years) for earlier-stage deposits. Built for PET scanner manufacturers, radiopharmaceutical companies, sovereign funds, and institutional investors positioning for the structural lutetium deficit.',
  },
  {
    question: 'Where does the lutetium come from?',
    answer:
      'Directly from rare earth mining companies and specialized heavy rare earth separation facilities across China (92% of production from ionic clay deposits in Jiangxi and Guangdong), North America (USA and Canada developing specialized heavy rare earth extraction), Australia (Northern Territory heavy rare earth deposits), Southeast Asia and Vietnam (highest lutetium concentration ionic clay deposits globally), and Greenland and Scandinavia (strategic European and NATO supply). No middlemen. No intermediary traders. More on partnerships and sourcing: https://totofinance.co/about.',
  },
  {
    question: 'Who buys tokenized lutetium?',
    answer:
      'Three groups: (1) Oncology and physics operators, including PET scanner manufacturers, scintillator crystal producers, radiopharmaceutical companies, nuclear medicine centers, particle physics laboratories, high-energy physics detector manufacturers, precision optics producers, EUV lithography equipment makers, advanced laser developers. (2) Frontier science investors, including funds and allocators seeking direct exposure to the most expensive rare earth element at the intersection of oncology growth and geological scarcity, without company-specific operational risk. (3) On-chain participants, including crypto funds, protocol treasuries, and DeFi protocols seeking ultra-high-value real-world collateral with demand driven by cancer incidence and scientific research.',
  },
  {
    question: 'How does instant settlement work?',
    answer:
      'T+0 settlement using USDC, USDT, or USAT. Traditional lutetium procurement involves locating one of a handful of ultra-purification specialists, negotiating without price references, coordinating high-value international logistics, and banking settlement measured in weeks. Toto Finance connects lutetium sources with buyers directly on-chain, eliminating every intermediary and settling transactions instantly.',
  },
  {
    question: 'Can I trade tokenized lutetium on DeFi platforms?',
    answer:
      'Yes. After acquisition, trade on decentralized exchanges globally, generate yield by lending to counterparties, or use lutetium tokens as collateral for stablecoin loans. Lutetium has never had secondary market infrastructure of any kind. Tokenization creates it for the first time, making the most expensive rare earth element accessible through fractional ownership at any scale.',
  },
  {
    question: 'Why is lutetium the most expensive rare earth element?',
    answer:
      'Lutetium exists at just 0.5 parts per million in the earth\'s crust, making it the rarest rare earth element by geological concentration. It is the final element extracted in heavy rare earth separation cascades, requiring more processing stages and higher purification energy than any other lanthanide. Global production is only 6.5 tonnes annually. With 90% of demand from PET scanner scintillator crystals (8 million scans per year, 15 to 25 kilograms per scanner) and Lu-177 radiopharmaceuticals growing at 45% annually, supply cannot match the accelerating pace of oncology infrastructure expansion. At $2.85 million per tonne, lutetium trades at over 1,400 times the price of cerium.',
  },
  {
    question: 'What is the lutetium price outlook?',
    answer:
      'Roskill forecasts $3,200,000/mt in 2026. Critical Minerals Intelligence projects exceeding $3,500,000/mt by 2027 as PET scanner installations accelerate globally and Lu-177 cancer therapy indications expand through FDA and international regulatory approvals. The deficit is expected to intensify through 2030 as oncology infrastructure scales to meet rising global cancer incidence and targeted radionuclide therapy adoption reaches mainstream clinical practice.',
  },
  {
    question: 'How do I get early access?',
    answer:
      'Visit https://totofinance.co/. Medical device manufacturers, radiopharmaceutical companies, research institutions, institutional investors, mining partners, and industrial buyers can reach out directly for partnership and early allocation discussions.',
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
        'Tokenized commodity platform offering 1:1 asset-backed lutetium oxide tokens and In-Ground Lutetium future delivery contracts with instant stablecoin settlement.',
    },
    {
      '@type': 'Product',
      name: '1:1 Lutetium Oxide Token',
      description:
        'Digital asset backed 1:1 by refined lutetium oxide (Lu₂O₃) in insured custody, redeemable for physical delivery. Category: Tokenized Commodity.',
      category: 'Tokenized Commodity',
      brand: { '@type': 'Brand', name: 'Toto Finance' },
      url: PAGE_URL,
    },
    {
      '@type': 'Product',
      name: 'In-Ground Lutetium',
      description:
        'Tokenized future delivery contract for lutetium in heavy rare earth deposits at certified mining operations. Category: Commodity Future Delivery Contract.',
      category: 'Commodity Future Delivery Contract',
      brand: { '@type': 'Brand', name: 'Toto Finance' },
      url: PAGE_URL,
    },
  ],
};

export default function TokenizedLutetiumPage() {
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
      <section className="relative bg-gradient-to-br from-fuchsia-900 via-fuchsia-800 to-gray-900 text-white px-4 sm:px-6 md:px-8 lg:px-12 pt-28 md:pt-36 pb-16 md:pb-24 overflow-hidden">
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
            backgroundSize: '40px 40px',
          }}
        />
        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <h1 className="text-sm md:text-base font-semibold tracking-[0.2em] uppercase text-fuchsia-200/90 mb-4">
            Tokenized Lutetium by Toto Finance
          </h1>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light leading-tight mb-8">
            Every PET Scanner That Finds Cancer Depends on Lutetium. Now Anyone Can Own It.
          </h2>
          <p className="text-base md:text-lg text-gray-200 leading-relaxed mb-10 max-w-3xl mx-auto text-left md:text-center">
            Right now, in oncology departments around the world, PET scanners are detecting cancers that would otherwise remain invisible until it
            is too late. Inside every one of those scanners, lutetium oxyorthosilicate crystals are converting gamma radiation into the signals
            that reveal tumors at their earliest, most treatable stages. Global lutetium production is just 6.5 tonnes per year, less than the
            weight of a single luxury sedan, and 90% of it goes directly into medical imaging. Lutetium exists at 0.5 parts per million in the
            earth&apos;s crust. It is the rarest, the densest, and at $2.85 million per tonne, the most expensive rare earth element in commercial
            use. Yet access to lutetium as an investable asset has never existed outside a handful of specialized heavy rare earth traders.{' '}
            <Link href="/" className="text-white underline underline-offset-2 hover:text-fuchsia-200">
              Toto Finance
            </Link>{' '}
            is changing that by bringing the element that finds cancer on-chain for the first time.
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
              Why Lutetium Matters
            </a>
          </div>
        </div>
      </section>

      <LutetiumTickerBar />

      {/* FOLD 2: Crisis */}
      <section id="crisis" className="scroll-mt-24 px-4 sm:px-6 md:px-8 lg:px-12 py-20 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto">
          <p className="text-xs uppercase tracking-widest text-gray-400 font-semibold mb-3">THE WHY</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-gray-900 leading-tight mb-6">
            The Rarest Rare Earth on Earth. And Oncology Cannot Function Without It.
          </h2>
          <div className="text-base md:text-lg text-gray-600 leading-relaxed max-w-4xl mb-12 space-y-4">
            <p>
              We chose lutetium because it represents scarcity at its absolute limit. Not scarcity as a market condition. Scarcity as a
              geological fact.
            </p>
            <p>
              Lutetium exists at just 0.5 parts per million in the earth&apos;s crust. It is the final element extracted in heavy rare earth
              separation cascades, the last fraction of the last fraction, requiring the most processing steps and the highest purification costs
              of any lanthanide. Total global production is 6.5 tonnes per year. The entire world&apos;s annual output would not fill a bathtub.
              And 90% of that output goes directly into the scintillator crystals that power PET scanners, the diagnostic tool that oncologists
              rely on to detect cancers, monitor treatment response, and identify metastatic disease before it becomes untreatable. Simultaneously,
              lutetium-177 radiopharmaceuticals are emerging as one of the most promising targeted cancer therapies in modern medicine,
              delivering radiation directly to tumor cells while sparing healthy tissue. The element that finds cancer and the element that treats
              cancer are the same element. And the world produces 6.5 tonnes of it.
            </p>
            <p className="font-medium text-gray-900">That is why we exist.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gray-50 rounded-2xl p-6 md:p-8 border border-gray-100">
              <p className="text-4xl md:text-5xl font-light text-gray-900 mb-3">2.8 tonnes</p>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">A Deficit Measured in Grams, Felt in Oncology Departments</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Roskill forecasts a 2.8-tonne lutetium deficit in 2025, with the gap widening through 2030. Global production is only 6.5 tonnes
                annually. Lutetium is the rarest commercially viable rare earth element, existing at 0.5 parts per million in the earth&apos;s
                crust. It is the last element extracted in separation cascades, making production extremely challenging and prohibitively expensive
                to scale.
              </p>
            </div>
            <div className="bg-gray-50 rounded-2xl p-6 md:p-8 border border-gray-100">
              <p className="text-4xl md:text-5xl font-light text-gray-900 mb-3">90%</p>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">One Element. Cancer Detection and Cancer Treatment.</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Lutetium oxyorthosilicate and lutetium yttrium oxyorthosilicate crystals power PET scanner detectors worldwide, providing the
                timing resolution and gamma ray stopping power that no other material matches. 90% of global lutetium demand comes from medical
                imaging applications. Simultaneously, Lu-177 radiopharmaceuticals are revolutionizing targeted cancer therapy. The element is both
                diagnostic and therapeutic.
              </p>
            </div>
            <div className="bg-gray-50 rounded-2xl p-6 md:p-8 border border-gray-100">
              <p className="text-4xl md:text-5xl font-light text-gray-900 mb-3">12 tonnes</p>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">A Gap That Grows with Every PET Scanner Installed</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Global lutetium demand is projected to reach 28 tonnes per year by 2030, while supply from existing and planned rare earth mines will
                deliver only 16 tonnes. The 12-tonne gap represents a 43% shortfall. Every new oncology center, every PET scanner installation,
                every Lu-177 therapy approval widens it further.
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
            Understanding Why Lutetium Has No Substitute
          </h2>
          <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto text-center mb-14">
            The rarest, densest, and most expensive rare earth element. Essential for the PET scanners that detect cancer and the
            radiopharmaceuticals that treat it.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
              <div
                className="rounded-xl bg-gradient-to-br from-fuchsia-900 to-slate-950 text-white p-6 mb-4 font-mono text-sm"
                role="img"
                aria-label="Lutetium element card showing Lu symbol, atomic number 71, density, melting point, and PET scintillator classification"
              >
                <p className="text-3xl font-light mb-1">Lu</p>
                <ul className="space-y-1 text-fuchsia-100/90">
                  <li>Atomic Number: 71</li>
                  <li>Density: 9,841 kg/m³</li>
                  <li>Melting Point: 1,663°C</li>
                  <li>Crustal Abundance: 0.5 ppm</li>
                  <li>Classification: PET Scintillator and Radiopharmaceutical Core</li>
                </ul>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">The Element</h3>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
              <div
                className="rounded-xl bg-gradient-to-br from-purple-900/70 to-slate-900 min-h-[160px] mb-4"
                role="img"
                aria-label="Heavy rare earth mining operation extracting xenotime and ionic clay minerals containing trace lutetium concentrations"
              />
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Where It Comes From</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Extracted from monazite, bastnäsite, and xenotime minerals, with the highest concentrations found in ionic clay deposits in southern
                China and Vietnam. Lutetium is the final element in the heavy rare earth separation cascade, requiring the most processing stages
                and the highest purification energy of any lanthanide. Global production is just 6.5 tonnes per year, with 92% originating from
                Chinese facilities.
              </p>
              <p className="text-xs text-gray-500 mt-3 font-mono">
                Ore → Chemical Separation → Multi-Stage Ion Exchange → Ultra-Purification → 99.99% Pure Lutetium Oxide
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
              <div
                className="rounded-xl bg-gradient-to-br from-fuchsia-800/50 to-slate-900 min-h-[160px] mb-4"
                role="img"
                aria-label="Lutetium scintillator crystal exhibiting gamma radiation detection properties used in PET scanner medical imaging systems"
              />
              <h3 className="text-lg font-semibold text-gray-900 mb-3">The Density That Makes It See Through the Human Body</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Possesses the highest density, highest melting point, and greatest hardness of all lanthanide elements. When grown into
                oxyorthosilicate crystals, lutetium provides exceptional gamma ray stopping power and scintillation timing resolution, converting
                invisible radiation into the signals that create PET scan images. Its Lu-177 isotope emits beta radiation at energies ideal for
                targeted tumor destruction, making lutetium simultaneously diagnostic and therapeutic.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
              <div
                className="rounded-xl bg-gradient-to-br from-slate-700 to-slate-900 min-h-[160px] mb-4"
                role="img"
                aria-label="Applications of lutetium including PET scanner scintillator crystals, Lu-177 cancer radiotherapy, particle physics detectors, and precision optics"
              />
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Where It Goes</h3>
              <p className="text-sm text-gray-600 leading-relaxed mb-4">
                PET scanner scintillator crystals (LSO and LYSO detectors), Lu-177 targeted radionuclide cancer therapy, particle physics
                detectors (CERN, Fermilab), high-refractive-index precision optics, semiconductor EUV lithography components, advanced laser
                systems, atomic clock calibration, X-ray phosphor systems.
              </p>
              <p className="text-sm font-semibold text-fuchsia-900 bg-fuchsia-50 rounded-lg px-3 py-2">
                $48M+ global market ($2.85M per metric tonne, 6.5 tonnes annual production)
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
            Cancer Detection Is Scaling Globally. Lutetium Production Cannot Be Willed Into Existence.
          </h2>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-4xl mb-12">
            There is a direct physical link between the expansion of oncology infrastructure worldwide and the consumption of lutetium. Every PET
            scanner installed requires 15 to 25 kilograms of lutetium scintillator crystals. Every Lu-177 therapy dose administered consumes
            lutetium isotopes. Every particle physics upgrade demands lutetium detectors. PET scanner installations are growing at 12% annually.
            Lutetium production, locked at the end of the heaviest rare earth separation cascade, has no mechanism to scale independently.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <div className="bg-gray-50 rounded-2xl p-6 md:p-8 border border-gray-100">
              <h3 className="text-xl font-medium text-gray-900 mb-3">PET Scintillator Crystals: 90% of All Lutetium Demand</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Lutetium oxyorthosilicate (LSO) and lutetium yttrium oxyorthosilicate (LYSO) crystals are the gold standard for PET scanner
                detectors, offering superior timing resolution and gamma ray detection efficiency that no alternative crystal matches. With 8
                million PET scans performed annually worldwide and each scanner requiring 15 to 25 kilograms of lutetium crystals, medical imaging
                alone consumes 5.8 tonnes per year. PET scanner installations are growing at 12% compound annual growth as oncology infrastructure
                expands across every continent.
              </p>
            </div>
            <div className="bg-gray-50 rounded-2xl p-6 md:p-8 border border-gray-100">
              <h3 className="text-xl font-medium text-gray-900 mb-3">Lu-177 Radiopharmaceuticals: Cancer Treatment at the Molecular Level</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Lutetium-177 enables targeted radionuclide therapy that delivers radiation directly to cancer cells while preserving surrounding
                healthy tissue. FDA-approved Lu-177 therapies for neuroendocrine tumors and metastatic prostate cancer have triggered 45% annual
                demand growth, with consumption reaching 0.8 tonnes per year. As clinical trials expand Lu-177 indications to additional cancer
                types, therapeutic demand is emerging as the fastest-growing segment of lutetium consumption.
              </p>
            </div>
            <div className="bg-gray-50 rounded-2xl p-6 md:p-8 border border-gray-100">
              <h3 className="text-xl font-medium text-gray-900 mb-3">Particle Physics Detectors: Seeing the Invisible at CERN Scale</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                High-energy physics experiments at CERN, Fermilab, and particle accelerator facilities worldwide use lutetium-based scintillator
                crystals for detecting subatomic particles. The Large Hadron Collider upgrade and next-generation collider projects consume 0.4
                tonnes of lutetium annually. As detector technology advances and new physics experiments demand higher resolution and faster timing,
                lutetium-based scintillators remain the only material capable of meeting performance requirements.
              </p>
            </div>
            <div className="bg-gray-50 rounded-2xl p-6 md:p-8 border border-gray-100">
              <h3 className="text-xl font-medium text-gray-900 mb-3">Precision Optics and EUV Lithography: Clarity at the Nanometer Scale</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Lutetium oxide enables ultra-high-refractive-index glass for advanced optical systems, laser components, and the extreme
                ultraviolet lithography equipment that manufactures next-generation semiconductors. The precision optics sector consumes 0.3 tonnes
                annually, growing at 25% compound annual growth as EUV lithography scales for sub-3nm chip fabrication and advanced optical systems
                demand materials with optical properties beyond what conventional glass chemistry can provide.
              </p>
            </div>
          </div>

          <div className="bg-gray-50 rounded-2xl p-6 md:p-8 border border-gray-200">
            <h3 className="text-xl font-medium text-gray-900 mb-2">A Deficit That Grows with Every Cancer Diagnosis</h3>
            <p className="text-sm text-gray-500 mb-6">
              Bar chart showing global lutetium demand rising from 9.3 tonnes in 2025 to 28 tonnes by 2030, with supply reaching approximately 16
              tonnes, creating a 12 tonne annual deficit.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-6">
              {[
                { year: '2025', val: '9.3', note: 'Demand (t)' },
                { year: '2028', val: '18.0', note: 'Demand (t)' },
                { year: '2030', val: '28.0', note: 'Demand (t)' },
                { year: '2035', val: '45.0', note: 'Roskill' },
                { year: '2030 Supply', val: '~16.0', note: 'Gap: 12+ t' },
              ].map((d, i) => (
                <div
                  key={d.year}
                  className={`text-center p-4 rounded-xl ${i === 4 ? 'bg-red-50 border border-red-100' : i === 3 ? 'bg-fuchsia-50' : 'bg-white border border-gray-100'}`}
                >
                  <p className={`text-sm mb-2 ${i === 4 ? 'text-red-800 font-medium' : 'text-gray-500'}`}>{d.year}</p>
                  <p className="text-sm font-semibold text-gray-900">{d.val} t</p>
                  <p className="text-xs text-gray-500 mt-1">{d.note}</p>
                </div>
              ))}
            </div>
            <p className="text-xs text-gray-400">
              Sources: Roskill, Critical Minerals Intelligence, USGS, Society of Nuclear Medicine.
            </p>
          </div>
        </div>
      </section>

      {/* FOLD 5: TWO PRODUCTS */}
      <section id="products" className="scroll-mt-24 px-4 sm:px-6 md:px-8 lg:px-12 py-20 md:py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <p className="text-xs uppercase tracking-widest text-gray-400 font-semibold mb-3 text-center">TWO PRODUCTS</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-gray-900 leading-tight mb-6 text-center">
            Two Ways to Own Tokenized Lutetium
          </h2>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto text-center mb-14">
            Everything we believe about opening access to critical oncology materials comes to life in two products. One for lutetium that is
            already refined and vaulted. One for lutetium still locked in heavy rare earth deposits awaiting the most complex separation process in
            rare earth chemistry. Both backed by physical assets. Both settleable in stablecoins. Both built to give the medical device companies,
            radiopharmaceutical manufacturers, and investors confronting a 6.5-tonne annual bottleneck a way to secure the element that detects
            and treats cancer.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
            <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm">
              <span className="inline-block text-xs font-bold tracking-wider text-fuchsia-800 bg-fuchsia-100 px-3 py-1 rounded-full mb-4">
                ASSET-BACKED TOKEN
              </span>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                <Link href="/products" className="hover:text-fuchsia-700 underline-offset-2 hover:underline">
                  1:1 Lutetium Oxide Token
                </Link>
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed mb-6">
                Digital ownership of physical lutetium. Every token is backed 1:1 by refined lutetium oxide (Lu₂O₃) in insured, audited vaults.
                Ultra-high-purity grade (99.99%+ Lu₂O₃), ready for scintillator crystal growth, radiopharmaceutical production, particle detector
                manufacturing, and precision optics fabrication. Redeemable for physical lutetium on demand. Not a derivative. Not a tracker. The
                actual material.
              </p>
              <ul className="text-sm text-gray-700 space-y-2 list-disc pl-5">
                <li>Backed 1:1 by refined lutetium oxide (99.99%+ purity grade)</li>
                <li>Always redeemable for physical lutetium delivery on demand</li>
                <li>Stored in insured, independently audited vault and warehouse facilities</li>
                <li>On-chain proof-of-reserves with real-time oracle feeds</li>
                <li>Fractional ownership, from $1, tradeable 24/7 with instant stablecoin settlement</li>
                <li>Ready for industrial end-use: PET scintillator crystals, Lu-177 radiopharmaceuticals, particle detectors, EUV lithography optics</li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm">
              <span className="inline-block text-xs font-bold tracking-wider text-slate-800 bg-slate-200 px-3 py-1 rounded-full mb-4">
                FUTURE DELIVERY CONTRACT
              </span>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                <Link href="/products" className="hover:text-fuchsia-700 underline-offset-2 hover:underline">
                  In-Ground Lutetium
                </Link>
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed mb-6">
                Forward positions in lutetium that has not been separated yet. Tokenized future delivery contracts backed by proven lutetium content
                in heavy rare earth deposits at certified mining operations. For organizations that understand that 6.5 tonnes of annual
                production serving a 28-tonne demand curve by 2030 creates a pricing trajectory where $2.85 million per tonne may prove to be the
                entry point, not the ceiling.
              </p>
              <ul className="text-sm text-gray-700 space-y-2 list-disc pl-5">
                <li>Backed by proven lutetium content in heavy rare earth reserves at partner mining sites</li>
                <li>Pre-production pricing reflecting end-of-cascade extraction complexity and extreme scarcity</li>
                <li>On-chain reserve tracking with geological data transparency</li>
                <li>Physical delivery or settlement at maturity</li>
                <li>Verified reserves with third-party geological audits</li>
                <li>Built for medical device manufacturers, radiopharmaceutical companies, sovereign funds, and institutional allocators</li>
              </ul>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-fuchsia-900/10 border border-fuchsia-200 rounded-2xl p-6 md:p-8">
              <p className="text-xs font-bold text-fuchsia-900 uppercase tracking-wider mb-2">SHORT-TERM DELIVERY</p>
              <p className="text-lg font-semibold text-gray-900 mb-3">1 to 12 Months</p>
              <p className="text-sm text-gray-600 leading-relaxed">
                Near-term lutetium delivery contracts tied to active heavy rare earth operations with ultra-purification capacity. For PET scanner
                manufacturers managing crystal production schedules, radiopharmaceutical companies securing isotope feedstock, and commodity
                specialists trading near-term pricing dynamics in the most expensive rare earth market on earth.
              </p>
            </div>
            <div className="bg-slate-100 border border-slate-200 rounded-2xl p-6 md:p-8">
              <p className="text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">LONG-TERM DELIVERY</p>
              <p className="text-lg font-semibold text-gray-900 mb-3">1 to 6 Years</p>
              <p className="text-sm text-gray-600 leading-relaxed">
                Multi-year lutetium positions backed by proven heavy rare earth reserves at earlier-stage operations. Built for sovereign strategic
                reserves, medical imaging companies planning decade-scale scanner production, and institutional allocators who recognize that an
                element produced at 6.5 tonnes per year and priced at $2.85 million per tonne represents the highest-conviction supply constraint in
                the entire rare earth periodic table.
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
            Securing the Rarest Commercial Element on the Periodic Table. Directly.
          </h2>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto text-center mb-14">
            Lutetium does not have a dedicated mine. It does not even have a dedicated separation process. It is the final fraction extracted at
            the very end of heavy rare earth separation cascades, requiring more processing stages than any other lanthanide and yielding less
            material per tonne of ore than any commercially traded element. 92% of global output originates from Chinese facilities. Toto Finance
            works directly with{' '}
            <Link href="/about" className="text-fuchsia-800 font-medium underline underline-offset-2 hover:text-fuchsia-600">
              rare earth mining companies and specialized heavy rare earth separation facilities
            </Link>{' '}
            to secure lutetium at the ultra-purification stage, bypassing the minuscule trader network that controls access to this element.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            {[
              {
                title: 'China',
                text: 'China produces 92% of global lutetium from ionic clay deposits in southern provinces, particularly Jiangxi and Guangdong. Lutetium is the final element extracted in multi-stage separation cascades at specialized heavy rare earth facilities, making Chinese ultra-purification infrastructure the single critical node in the global lutetium supply chain. Domestic demand for PET scanner manufacturing and radiopharmaceutical research is claiming an increasing share of output.',
              },
              {
                title: 'North America (USA and Canada)',
                text: 'US and Canadian rare earth projects are developing specialized heavy rare earth extraction capabilities, including advanced separation technology designed to reach the end-of-cascade elements like lutetium. Critical mineral designation has prioritized domestic lutetium supply to ensure that PET scanner manufacturing and radiopharmaceutical production maintain access independent of Chinese processing monopoly.',
              },
              {
                title: 'Australia',
                text: 'Northern Territory heavy rare earth deposits contain trace lutetium concentrations in xenotime and ionic clay formations. Advanced separation technologies under development aim to economically extract lutetium from these sources, establishing an allied-nation supply pathway for medical imaging and scientific research applications.',
              },
              {
                title: 'Southeast Asia and Vietnam',
                text: 'Vietnamese ionic clay deposits contain the highest lutetium concentrations of any rare earth deposit type globally. Emerging Southeast Asian heavy rare earth processing facilities are developing specialized end-of-cascade extraction capabilities that could meaningfully increase non-Chinese lutetium supply within the next decade.',
              },
              {
                title: 'Greenland and Scandinavia',
                text: "Greenland's heavy rare earth projects and Scandinavian rare earth deposits contain lutetium concentrations of strategic significance for European and NATO medical imaging infrastructure. These deposits represent supply security for PET scanner production and radiopharmaceutical development outside Asian processing dominance.",
              },
              {
                title: 'Exploration and Development',
                text: 'New heavy rare earth projects across Africa and Central Asia are in exploration and feasibility stages. These represent the next generation of lutetium supply, and In-Ground Lutetium positions offer access at pre-production economics before the most complex separation output in rare earth chemistry reaches the market.',
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
              <strong>Secured at the ultra-purification stage.</strong> Lutetium does not come from a mine. It does not even come from a standard
              separation facility. It comes from the final stage of the most complex purification cascade in rare earth processing. Toto Finance
              works at this critical endpoint, eliminating the tiny number of traders who control access to the world&apos;s rarest commercial
              element. Verified provenance. Transparent chain of custody from{' '}
              <Link href="/how-tokenization-works" className="underline underline-offset-2 hover:text-fuchsia-200">
                mine to token
              </Link>
              . Access at the point where lutetium actually emerges, not behind layers of intermediation.
            </p>
          </div>
        </div>
      </section>

      {/* FOLD 7: PARTICIPANTS */}
      <section className="px-4 sm:px-6 md:px-8 lg:px-12 py-20 md:py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <p className="text-xs uppercase tracking-widest text-gray-400 font-semibold mb-3 text-center">PARTICIPANTS</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-gray-900 leading-tight mb-6 text-center">
            Who Buys Tokenized Lutetium
          </h2>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto text-center mb-14">
            Lutetium has always traded in quantities measured in grams, through a vanishingly small circle of heavy rare earth specialists, at
            prices that reflect its status as the most expensive commercially traded element on the periodic table. The medical device companies and
            research institutions that need it have had no transparent procurement mechanism, no price discovery tool, and no ability to secure
            forward supply in a market this tiny. Toto Finance opens that access for the first time.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 border border-gray-200">
              <span className="text-xs font-bold tracking-widest text-fuchsia-800">ONCOLOGY AND PHYSICS OPERATORS</span>
              <h3 className="text-xl font-semibold text-gray-900 mt-3 mb-4">The Organizations Where Lutetium Saves Lives and Reveals the Universe</h3>
              <p className="text-sm text-gray-600 leading-relaxed mb-4">
                These buyers do not speculate on lutetium prices. They consume lutetium in the scintillator crystals that detect cancers, in the
                radiopharmaceuticals that destroy tumors, in the particle detectors that probe the fundamental structure of matter. Tokenized
                lutetium gives them{' '}
                <Link href="/products" className="text-fuchsia-800 font-medium underline underline-offset-2">
                  supply continuity
                </Link>
                , transparent procurement, and physical delivery capability in a market where a single delayed shipment of grams can halt
                production of equipment that saves human lives.
              </p>
              <p className="text-xs text-gray-500 leading-relaxed">
                PET scanner and medical imaging equipment manufacturers, scintillator crystal manufacturers (LSO and LYSO), radiopharmaceutical
                companies developing Lu-177 therapies, nuclear medicine centers and hospital oncology departments, particle physics laboratories
                (CERN, Fermilab, and global facilities), high-energy physics detector manufacturers, precision optics and high-refractive-index lens
                producers, semiconductor EUV lithography equipment manufacturers, advanced laser system developers, scientific research
                institutions and national laboratories.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 border border-gray-200">
              <span className="text-xs font-bold tracking-widest text-blue-800">FRONTIER SCIENCE INVESTORS</span>
              <h3 className="text-xl font-semibold text-gray-900 mt-3 mb-4">Investing in the Most Expensive Element in Commercial Use</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Investors allocate billions to pharmaceutical stocks, medical device companies, and oncology biotech, yet the physical element that
                makes PET-based cancer detection and Lu-177 cancer therapy possible has been entirely uninvestable. Until now. Tokenized lutetium
                offers direct exposure to a material priced at $2.85 million per tonne with 12% annual demand growth driven by PET scanner
                expansion and radiopharmaceutical approvals, fractional access from $1, and zero dependence on any company&apos;s operational
                execution. The thesis is geological: lutetium exists at 0.5 parts per million, production is 6.5 tonnes per year, and cancer does
                not wait for supply chains to catch up.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 border border-gray-200">
              <span className="text-xs font-bold tracking-widest text-purple-800">ON-CHAIN INFRASTRUCTURE</span>
              <h3 className="text-xl font-semibold text-gray-900 mt-3 mb-4">Backing Digital Assets with the Most Valuable Element in Rare Earth Chemistry</h3>
              <p className="text-sm text-gray-600 leading-relaxed mb-4">
                At $2.85 million per metric tonne, lutetium is the highest-value rare earth element and among the most valuable materials traded in
                any commodity market. Tokenized lutetium offers on-chain participants collateral with extraordinary value density: a single tonne
                represents nearly $3 million in material backed by medical demand that is driven by cancer incidence, not market sentiment. For
                protocols, treasuries, and funds seeking real-world assets where scarcity is defined by geology and demand is defined by biology.
              </p>
              <p className="text-xs text-gray-500 leading-relaxed">
                Crypto funds seeking oncology-correlated ultra-rare commodity exposure, protocol treasuries diversifying into the highest-value
                segment of physical rare earth markets, DeFi protocols building collateral pools with extreme value density per unit, blockchain
                foundations investing in materials at the intersection of medical technology and geological scarcity, DAOs with life sciences and
                frontier technology investment mandates.
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
            Instant Settlement for Tokenized Lutetium. No Rare Earth Traders. No Delays.
          </h2>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-4xl mb-12">
            Lutetium does not merely lack an exchange listing. It lacks a market in any conventional sense of the word. Fewer traders handle
            lutetium globally than can be counted on one hand. There is no public price, no industry benchmark, no standardized quantity or
            purity specification that buyers can reference. For the material that powers the diagnostic tool oncologists depend on to find cancer
            early enough to treat it, the procurement experience is a conversation with one of three or four people on earth who can supply it. We
            built something that matches the value of this element with the transparency it deserves.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="bg-gray-50 rounded-2xl p-6 md:p-8 border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-1">The Old Way</h3>
              <p className="text-sm text-gray-500 mb-6">8+ Intermediaries. Weeks to Settle. Opaque Pricing.</p>
              <div className="space-y-3">
                {[
                  'Mining Company / Ore Producer',
                  'Heavy Rare Earth Separation Facility',
                  'Ultra-Purification Specialist',
                  'Specialized Heavy REE Trader',
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
                {['Mining / Ultra-Purification Operation', 'Toto Finance Platform', 'Buyer'].map((step, i) => (
                  <div key={step} className="flex items-center gap-3">
                    <div className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0 text-xs font-semibold">
                      {i + 1}
                    </div>
                    <span className="text-sm">
                      {i === 1 ? (
                        <Link href="/products" className="underline underline-offset-2 hover:text-fuchsia-200">
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
                The lutetium market is not merely opaque. It is nearly invisible. A handful of specialized traders globally handle the entire
                commercial supply of the rarest rare earth element. No pricing benchmarks exist. No standard contracts govern transactions. No
                settlement infrastructure supports the market. Toto Finance uses blockchain to build what has never existed for lutetium: a
                transparent, instant-settlement mechanism connecting ultra-purification output directly with the medical device manufacturers,
                research institutions, and investors who need access to the most valuable element in rare earth chemistry.
              </p>
            </div>
          </div>

          <h3 className="text-2xl font-medium text-gray-900 mb-6 text-center">Settlement at the Speed of a PET Scan</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                name: 'USDC',
                issuer: 'Circle',
                detail:
                  'Fully reserved and independently attested dollar stablecoin built for the highest-value transactions in digital settlement. The compliance rigor and institutional trust architecture that medical device procurement and six-figure-per-kilogram lutetium transactions demand.',
              },
              {
                name: 'USDT',
                issuer: 'Tether',
                detail:
                  'Over $140 billion in global circulation providing settlement depth for materials priced in millions per tonne. When lutetium transactions require immediate execution at values that reflect the most expensive rare earth on earth, USDT delivers the liquidity infrastructure to settle without delay.',
              },
              {
                name: 'USAT',
                issuer: 'Tether (US Regulated)',
                detail:
                  'US-regulated stablecoin under the GENIUS Act framework. Purpose-built for high-value medical supply transactions where domestic compliance infrastructure, FDA-adjacent procurement audit trails, and US jurisdictional requirements govern the acquisition of materials destined for oncology applications.',
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
            DeFi Infrastructure for Tokenized Lutetium
          </h2>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-4xl mb-12">
            Lutetium has had zero financial infrastructure since its discovery in 1907. No exchange listing. No ETF. No futures market. No lending
            facility. No collateral framework. For over a century, the rarest rare earth element has existed in a procurement vacuum accessible
            only to a handful of specialists. Tokenization does not merely digitize lutetium. It creates an entire financial universe around an
            element whose total annual production would not fill a single shipping drum.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            <div className="bg-white rounded-2xl p-6 md:p-8 border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">A Market Where None Could Have Existed Before</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Before tokenization, acquiring lutetium meant knowing someone who could supply it. There was no market. No venue. No price to
                discover. The transaction was a relationship, not a trade. Tokenized lutetium creates the first trading venue in this element&apos;s
                118-year commercial history: a continuous secondary market on decentralized exchanges where pricing forms transparently, transfers
                execute instantly, and fractional ownership makes the most expensive rare earth accessible to participants who could never have
                entered this market at $2.85 million per tonne minimum. This is not market innovation. This is market origination.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-6 md:p-8 border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Yield Derived from Oncology Infrastructure Expansion</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Lend lutetium tokens to counterparties seeking leveraged exposure to ultra-rare earth pricing or hedged positions in oncology
                materials. Interest rates reflect real-world demand for lutetium exposure, tied to PET scanner installation rates, Lu-177 therapy
                approval timelines, and particle physics upgrade schedules. Yield generated by the global expansion of cancer detection
                infrastructure, not by token emission mechanics or protocol governance subsidies.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-6 md:p-8 border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Liquidity from the Most Illiquid Market in Commodities</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Medical device manufacturers and institutional investors holding lutetium positions have historically had no mechanism for accessing
                capital from those holdings. Selling meant finding one of a handful of traders willing to negotiate. Tokenized lutetium transforms
                the most illiquid commodity market in existence.{' '}
                <Link href="/products" className="text-fuchsia-800 font-medium underline underline-offset-2">
                  Borrow against lutetium
                </Link>{' '}
                tokens to receive stablecoins while maintaining full exposure. For PET scanner manufacturers managing production against multi-year
                crystal growth commitments, this unlocks capital without surrendering material that takes years to procure.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-6 md:p-8 border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Risk Architecture for a Market Priced in Millions</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Lutetium&apos;s market is the smallest, most concentrated, and highest-value per unit of any commercially traded rare earth. A single
                ultra-purification facility maintenance shutdown can remove meaningful percentage of global annual supply. At $2.85 million per
                tonne, position management errors carry consequences measured in hundreds of thousands of dollars per kilogram. Smart contract
                infrastructure automates collateral monitoring, margin management, and position adjustment in real time, providing institutional-grade
                risk controls for a market where the margin of error is defined by the price tag.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 md:p-8 border border-gray-200">
            <h3 className="text-xl font-medium text-gray-900 mb-6 text-center">
              From Ultra-Purification to Global Digital Market: The Lutetium Token Path
            </h3>
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              {[
                'Purified: Lutetium oxide verified at ultra-purification endpoint, secured in insured custody, and bound to on-chain token identity',
                'Acquired: Purchased with USDC, USDT, or USAT at transparent pricing reflecting real-time oncology and scientific demand',
                'Positioned: Held in wallet, traded on secondary markets, or bridged across chains to integrate with holder procurement infrastructure',
                'Activated: Deployed into yield protocols, pledged as loan collateral, or structured for ultra-rare supply disruption hedging',
                'Delivered: Redeemed for physical lutetium oxide (Lu₂O₃) for scintillator crystal growth, radiopharmaceutical production, or precision optics fabrication',
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
            Tokenized Lutetium vs Every Other Way to Get Exposure
          </h2>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-4xl mb-12">
            There has never been any way to invest in lutetium. Rare earth ETFs dilute exposure across dozens of elements where lutetium does not
            even register as a line item. Mining stocks carry operational risk unrelated to lutetium pricing. Physical procurement requires
            relationships with the handful of ultra-purification specialists who handle this element, and minimum quantities carry six-figure price
            tags per kilogram. Toto Finance built what could not have existed before blockchain made fractional ownership of $2.85M-per-tonne
            materials possible.
          </p>

          <div
            className="overflow-x-auto rounded-2xl border border-gray-200"
            aria-label="Comparison table of tokenized lutetium on Toto Finance versus rare earth ETFs, physical lutetium procurement, and mining stocks across 10 features including lutetium-specific exposure, settlement speed, price transparency, and DeFi access."
          >
            <table className="w-full text-sm text-left min-w-[720px]">
              <thead>
                <tr className="bg-gray-900 text-white">
                  <th className="px-4 md:px-6 py-4 font-medium">Feature</th>
                  <th className="px-4 md:px-6 py-4 font-medium">Rare Earth ETFs</th>
                  <th className="px-4 md:px-6 py-4 font-medium bg-white/10">Toto Finance</th>
                  <th className="px-4 md:px-6 py-4 font-medium">Physical Lutetium</th>
                  <th className="px-4 md:px-6 py-4 font-medium">Mining Stocks</th>
                </tr>
              </thead>
              <tbody className="bg-white">
                {[
                  ['Lutetium-Specific', 'No (basket)', 'Yes (1:1)', 'Yes', 'No (equity)'],
                  ['Trading Hours', 'Market hours only', '24/7/365', 'Private negotiation', 'Market hours only'],
                  ['Settlement', 'T+2', 'T+0 (Instant)', 'Weeks to months', 'T+2'],
                  ['Settlement Currency', 'Fiat (via broker)', 'USDC, USDT, USAT', 'Wire transfer', 'Fiat (via broker)'],
                  ['Min. Investment', '1 share (~$50+)', 'Fractional (from $1)', '$250,000+ (gram scale)', '1 share (~$10+)'],
                  ['Physical Redemption', 'No', 'Yes', 'Yes', 'No'],
                  ['On-Chain Transparency', 'No', 'Yes', 'No', 'No'],
                  ['DeFi Yield / Loans', 'No', 'Yes', 'No', 'No'],
                  ['Price Transparency', 'NAV-based', 'Real-time oracle', 'Private negotiation', 'Stock price only'],
                  ['Intermediaries', 'Broker + Clearing', 'None (P2P)', 'Handful of specialists', 'Broker'],
                ].map((row, i) => (
                  <tr key={row[0]} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="px-4 md:px-6 py-3 font-medium text-gray-900">{row[0]}</td>
                    <td className="px-4 md:px-6 py-3 text-gray-600">{row[1]}</td>
                    <td className="px-4 md:px-6 py-3 text-gray-900 font-medium bg-fuchsia-50/50">{row[2]}</td>
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
            Building Financial Infrastructure for the Most Valuable Rare Earth on the Periodic Table
          </h2>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-4xl mb-12">
            Lutetium has been procured through a vanishingly small circle of ultra-specialized heavy rare earth traders since it became
            commercially relevant for medical imaging in the late 20th century. No standardized contracts. No public pricing benchmarks. No
            settlement infrastructure. No collateral frameworks. Every feature of the Toto Finance platform for lutetium was engineered from
            absolute zero because this element&apos;s market was too small, too specialized, and too expensive for any traditional financial
            infrastructure to have been built around it.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                t: 'Physical Backing with Ultra-Purity Delivery',
                b: 'Every lutetium token connects to verified lutetium oxide (Lu₂O₃, 99.99%+) in insured custody. Request physical delivery and receive material ready for scintillator crystal growth, radiopharmaceutical feedstock preparation, or precision optics fabrication. In a market where supply verification has always meant trusting one of three or four people globally, on-chain proof-of-reserves replaces personal reputation with cryptographic certainty at a scale that the lutetium market has never had access to.',
              },
              {
                t: 'Price Discovery for an Element That Has Never Had a Public Price',
                b: "Lutetium has never had a published benchmark price. The handful of transactions that occur annually are negotiated privately between ultra-purification specialists and medical device manufacturers, with no reference point available to anyone outside those conversations. Toto Finance's oracle feeds and on-chain trading activity create the first transparent lutetium pricing mechanism in history: real-time, independently verifiable, and accessible to every participant.",
              },
              {
                t: 'Instant Settlement for a Market That Operates in Grams and Months',
                b: 'Traditional lutetium procurement is measured in grams, priced in thousands per gram, and scheduled in months. Ultra-purification timelines, quality certification for medical applications, international logistics for high-value shipments, and banking settlement across jurisdictions compound into procurement cycles that can stretch across quarters. Token settlement is T+0 with stablecoins. For medical device manufacturers managing crystal production against oncology equipment delivery schedules, instant execution transforms a quarter-long procurement cycle into a single transaction.',
              },
              {
                t: 'Compliance for the Most Regulated End-Use Applications',
                b: 'Lutetium trade crosses jurisdictions with heavy rare earth export controls, strategic material designations, medical device manufacturing regulations, and radiopharmaceutical supply chain requirements that represent among the most complex compliance environments in commodity trade. Smart contracts embed KYC/AML verification, transfer restrictions, and jurisdiction-specific regulatory rules directly into token architecture, ensuring every transaction automatically satisfies applicable requirements without the documentation overhead that compounds in a market this specialized.',
              },
              {
                t: 'Complete Financial Infrastructure for a 6.5-Tonne Market',
                b: 'Lending, borrowing, hedging, and collateral management for lutetium: functions that have never existed in any form for an element with annual production that weighs less than a sedan. Smart contract protocols enable yield generation from lutetium positions, stablecoin borrowing against holdings, and programmable hedging strategies. An entire financial stack, purpose-built for what may be the most valuable and simultaneously smallest commodity market in the world.',
              },
              {
                t: 'Multi-Chain Presence',
                b: 'Tokenized lutetium is deployed across Ethereum, Polygon, Cardano, Solana, and XRP Ledger. Institutional custodians, DeFi protocols, medical device procurement platforms, and individual holders can interact with lutetium tokens on whatever chain infrastructure their operations already use. No migration required, no ecosystem lock-in.',
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
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-gray-900 leading-tight mb-6">Tokenized Lutetium FAQ</h2>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-12">
            Direct answers about tokenized lutetium, In-Ground Lutetium, oncology and scientific demand, and how Toto Finance provides access to
            the rarest and most expensive rare earth element in commercial use.
          </p>
          <LutetiumFAQ faqs={faqData} />
        </div>
      </section>

      {/* FOLD 13: Final CTA */}
      <section className="relative bg-gradient-to-br from-fuchsia-900 via-fuchsia-800 to-gray-900 text-white px-4 sm:px-6 md:px-8 lg:px-12 py-20 md:py-32 overflow-hidden">
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
            backgroundSize: '40px 40px',
          }}
        />
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <p className="text-xs uppercase tracking-widest text-fuchsia-200/80 font-semibold mb-3">THIS IS WHY</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light leading-tight mb-8">
            Cancer Incidence Grows Every Year. Lutetium Production Remains at 6.5 Tonnes.
          </h2>
          <p className="text-base md:text-lg text-gray-200 leading-relaxed mb-10">
            Every PET scan that detects cancer depends on lutetium. Every Lu-177 therapy that treats cancer depends on lutetium. Every particle
            physics detector probing the structure of matter depends on lutetium. The world needs 28 tonnes by 2030. Supply will deliver 16. The
            12-tonne gap compounds with every PET scanner installed, every radiopharmaceutical approved, every oncology center commissioned. Toto
            Finance is building the infrastructure to bring the rarest and most expensive rare earth element to an open, transparent,
            instant-settlement market for the first time in its 118-year history.
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
