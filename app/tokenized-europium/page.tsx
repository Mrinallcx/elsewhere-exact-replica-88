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
const EuropiumTickerBar = dynamicImport(
  () => import('../components/client/EuropiumTickerBar').then((mod) => ({ default: mod.EuropiumTickerBar }))
);
const EuropiumFAQ = dynamicImport(
  () => import('../components/client/SilverFAQ').then((mod) => ({ default: mod.SilverFAQ }))
);

const PAGE_URL = 'https://totofinance.co/tokenized-europium';
const PAGE_TITLE = 'Tokenized Europium | Digital Rare Earth Backed by Physical Assets | Toto Finance';
const PAGE_DESCRIPTION =
  'Every color on every screen starts with europium. Toto Finance brings the rarest commercial rare earth on-chain from 1:1 redeemable oxide tokens to In-Ground future delivery contracts. The element that gives displays their light. Instant stablecoin settlement. DeFi secondary markets.';

const breadcrumbItems = [
  { name: 'Home', item: 'https://totofinance.co' },
  { name: 'Products', item: 'https://totofinance.co/products' },
  { name: 'Tokenized Europium', item: PAGE_URL },
];

const faqData = [
  {
    question: 'What is tokenized europium?',
    answer:
      'A blockchain-based digital asset backed 1:1 by refined europium oxide (Eu₂O₃) in insured, audited vaults. High-purity grade (99.99%+ Eu₂O₃), ready for phosphor manufacturing, display panel production, and LED lighting applications. Redeemable for physical europium on demand. Toto Finance is building the infrastructure to bring europium on-chain with instant stablecoin settlement and DeFi secondary markets.',
  },
  {
    question: 'What is In-Ground Europium?',
    answer:
      'A tokenized future delivery contract for europium still contained in rare earth deposits at certified mining operations. Short-term (1 to 12 months) for operations with active separation capacity, long-term (1 to 6 years) for earlier-stage deposits. Built for display manufacturers, LED lighting companies, sovereign funds, and institutional investors positioning for the structural europium deficit.',
  },
  {
    question: 'Where does the europium come from?',
    answer:
      'Directly from rare earth mining companies and separation facilities across China and Southeast Asia (85% of production from ionic clay deposits in Jiangxi and Guangdong), North America (USA and Canada developing domestic rare earth separation for display technology security), Australia (Western Australia and Northern Territory), and Brazil and South America (monazite deposits). No middlemen. No intermediary traders.',
  },
  {
    question: 'Who buys tokenized europium?',
    answer:
      'Three groups: (1) Display and lighting builders, including OLED and LCD panel manufacturers, LED lighting producers, phosphor suppliers, consumer electronics companies, security printing firms, government mints, medical imaging manufacturers, optical component makers. (2) Display economy investors, including funds and allocators seeking direct exposure to the physical material driving display manufacturing growth, without company-specific operational risk. (3) On-chain participants, including crypto funds, protocol treasuries, and DeFi protocols seeking real-world collateral linked directly to the display economy.',
  },
  {
    question: 'How does instant settlement work?',
    answer:
      'T+0 settlement using USDC, USDT, or USAT. Traditional europium procurement involves specialized traders, separation scheduling, purity verification, logistics coordination, and banking settlement measured in weeks. Toto Finance connects europium sources with buyers directly on-chain, eliminating every intermediary and settling transactions instantly.',
  },
  {
    question: 'Can I trade tokenized europium on DeFi platforms?',
    answer:
      'Yes. After acquisition, trade on decentralized exchanges globally, generate yield by lending to counterparties, or use europium tokens as collateral for stablecoin loans. Europium has never had secondary market infrastructure of any kind. Tokenization creates it for the first time.',
  },
  {
    question: 'Why is europium irreplaceable in display technology?',
    answer:
      'Europium emits brilliant red light at 611nm and blue at 450nm when excited by UV or electron bombardment. No other element on the periodic table produces phosphorescent color with equivalent purity and intensity at these wavelengths. 95% of all europium consumed globally goes to phosphor applications in LED displays, OLED panels, and energy-efficient lighting. The physics of europium\'s electron transitions make it the only viable element for these applications.',
  },
  {
    question: 'What is the europium price outlook?',
    answer:
      'Roskill forecasts $950,000/mt in 2026. Adamas Intelligence projects exceeding $1,000,000/mt by 2027 as OLED factory buildout, LED lighting mandates, and MicroLED development accelerate while rare earth production remains structurally constrained. The deficit is expected to intensify through 2030 as display manufacturing scales to meet global consumer demand and AR/VR adoption grows.',
  },
  {
    question: 'How do I get early access?',
    answer:
      'Visit https://totofinance.co/. Display manufacturers, LED lighting companies, institutional investors, mining partners, and industrial buyers can reach out directly for partnership and early allocation discussions.',
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
        'Tokenized commodity platform offering 1:1 asset-backed europium oxide tokens and In-Ground Europium future delivery contracts with instant stablecoin settlement.',
    },
    {
      '@type': 'Product',
      name: '1:1 Europium Oxide Token',
      description:
        'Digital asset backed 1:1 by refined europium oxide (Eu₂O₃) in insured custody, redeemable for physical delivery. Category: Tokenized Commodity.',
      category: 'Tokenized Commodity',
      brand: { '@type': 'Brand', name: 'Toto Finance' },
      url: PAGE_URL,
    },
    {
      '@type': 'Product',
      name: 'In-Ground Europium',
      description:
        'Tokenized future delivery contract for europium in rare earth deposits at certified mining operations. Category: Commodity Future Delivery Contract.',
      category: 'Commodity Future Delivery Contract',
      brand: { '@type': 'Brand', name: 'Toto Finance' },
      url: PAGE_URL,
    },
  ],
};

export default function TokenizedEuropiumPage() {
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
      <section className="relative bg-gradient-to-br from-violet-900 via-violet-800 to-gray-900 text-white px-4 sm:px-6 md:px-8 lg:px-12 pt-28 md:pt-36 pb-16 md:pb-24 overflow-hidden">
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
            backgroundSize: '40px 40px',
          }}
        />
        <div className="relative z-10 max-w-7xl mx-auto text-left">
          <h1 className="text-sm md:text-base font-semibold tracking-[0.2em] uppercase text-violet-200/90 mb-4">
            Tokenized Europium by Toto Finance
          </h1>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light leading-tight mb-8">
            Every Color on Every Screen Begins with Europium. Now Anyone Can Own It.
          </h2>
          <p className="text-base md:text-lg text-gray-200 leading-relaxed mb-10 max-w-3xl text-left">
            Right now, the screen you are reading this on depends on europium. The reds in your display, the whites in your lighting, the
            invisible glow authenticating the banknotes in your wallet. Europium is the rarest commercially viable rare earth element,
            representing just 0.05% of all rare earth deposits on earth, and 95% of its demand comes from phosphor applications where no
            other element produces equivalent color purity. Global production cannot keep pace with the display revolution. Yet access to
            europium as an investable asset has never existed outside closed rare earth procurement networks.{' '}
            <Link href="/" className="text-white underline underline-offset-2 hover:text-violet-200">
              Toto Finance
            </Link>{' '}
            is changing that by bringing the element that gives the world its light on-chain for the first time.
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
              Why Europium Matters
            </a>
          </div>
        </div>
      </section>

      <EuropiumTickerBar />

      {/* FOLD 2: Crisis */}
      <section id="crisis" className="scroll-mt-24 px-4 sm:px-6 md:px-8 lg:px-12 py-20 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto">
          <p className="text-xs uppercase tracking-widest text-gray-400 font-semibold mb-3">THE WHY</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-gray-900 leading-tight mb-6">
            The Rarest Commercial Rare Earth. And the World Cannot See Without It.
          </h2>
          <div className="text-base md:text-lg text-gray-600 leading-relaxed max-w-4xl mb-12 space-y-4">
            <p>
              We chose europium because it represents the most paradoxical scarcity in modern materials. The element responsible for the
              vivid reds in every display, the warm whites in every LED bulb, and the invisible security marks authenticating billions of
              dollars in currency is also the rarest commercially traded rare earth element on the periodic table.
            </p>
            <p>
              Europium constitutes just 0.05% of all rare earth mineral deposits. It is never mined independently. It emerges in trace
              quantities during the separation of other rare earths, making its supply entirely dependent on the production economics of
              elements that have nothing to do with displays or lighting. When demand for europium rises, production cannot follow, because
              no mining company will increase output of an entire rare earth operation to capture a fraction of a percent more europium.
              The result is a structural deficit that deepens with every OLED panel manufactured, every LED bulb installed, and every
              banknote printed with europium security features.
            </p>
            <p className="font-medium text-gray-900">That is why we exist.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gray-50 rounded-2xl p-6 md:p-8 border border-gray-100">
              <p className="text-4xl md:text-5xl font-light text-gray-900 mb-3">180 tonnes</p>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">The Deficit Is Already Here</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Adamas Intelligence forecasts a 180-tonne europium deficit in 2025, with the gap widening every year through 2030. Europium
                is the rarest commercially viable rare earth element, representing just 0.05% of global rare earth deposits. All production
                is byproduct output from broader rare earth separation, making supply structurally unable to respond to accelerating display
                and lighting demand.
              </p>
            </div>
            <div className="bg-gray-50 rounded-2xl p-6 md:p-8 border border-gray-100">
              <p className="text-4xl md:text-5xl font-light text-gray-900 mb-3">95%</p>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">One Element. One Job. No Replacement.</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                95% of global europium consumption goes to phosphor applications: the red and blue light emitters in LED displays, OLED
                panels, fluorescent lighting, and energy-efficient bulbs. No other element on the periodic table produces the same color
                purity and luminescent efficiency. Europium is not preferred. It is the only option.
              </p>
            </div>
            <div className="bg-gray-50 rounded-2xl p-6 md:p-8 border border-gray-100">
              <p className="text-4xl md:text-5xl font-light text-gray-900 mb-3">650 tonnes</p>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">A Gap That Grows with Every Screen</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Global europium demand is projected to reach 1,250 tonnes per year by 2030, while supply from existing and planned rare earth
                mines will deliver only 600 tonnes. The 650-tonne gap represents a 52% shortfall. Every new OLED factory, every LED lighting
                mandate, every MicroLED headset widens it further.
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
            Understanding Why Europium Has No Substitute
          </h2>
          <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto text-center mb-14">
            The rarest commercial rare earth element. Essential for the phosphors that create color in every display and efficiency in every
            modern light source.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
              <div
                className="rounded-xl bg-gradient-to-br from-violet-900 to-slate-950 text-white p-6 mb-4 font-mono text-sm"
                role="img"
                aria-label="Europium element card showing Eu symbol, atomic number 63, density, red and blue phosphor emission, and display technology classification"
              >
                <p className="text-3xl font-light mb-1">Eu</p>
                <ul className="space-y-1 text-violet-100/90">
                  <li>Atomic Number: 63</li>
                  <li>Density: 5,264 kg/m³</li>
                  <li>Phosphor Emission: Red (611nm) & Blue (450nm)</li>
                  <li>Ion Color: Pale Pink (Eu³⁺)</li>
                  <li>Classification: Display & Lighting Phosphor Core</li>
                </ul>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">The Element</h3>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
              <div
                className="rounded-xl bg-gradient-to-br from-fuchsia-800/70 to-slate-900 min-h-[160px] mb-4"
                role="img"
                aria-label="Rare earth mining operation extracting bastnäsite and monazite minerals containing europium"
              />
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Where It Comes From</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Extracted from bastnäsite, monazite, and ionic clay minerals in China, USA, Australia, and Brazil. Produced exclusively as a
                byproduct during rare earth separation, never mined independently. Represents just 0.05% of all rare earth deposits.
              </p>
              <p className="text-xs text-gray-500 mt-3 font-mono">
                Ore → Sulfate Precipitation → Reduction → Electrolysis → 99.99% Pure Europium
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
              <div
                className="rounded-xl bg-gradient-to-br from-red-900/40 to-slate-900 min-h-[160px] mb-4"
                role="img"
                aria-label="Europium-doped phosphor material emitting vivid red luminescence used in LED and OLED display manufacturing"
              />
              <h3 className="text-lg font-semibold text-gray-900 mb-3">The Luminescence That Makes It Irreplaceable</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Emits brilliant red light at 611nm and blue at 450nm when excited by UV or electron bombardment. No other element produces
                phosphorescent color with equivalent purity and intensity. This physical property is the foundation of every modern display
                and energy-efficient light source. Europium is also the most reactive lanthanide, tarnishing rapidly in air and reacting with
                water, requiring specialized sealed storage.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
              <div
                className="rounded-xl bg-gradient-to-br from-slate-700 to-slate-900 min-h-[160px] mb-4"
                role="img"
                aria-label="Applications of europium including OLED display phosphors, LED lighting, euro banknote security features, and medical imaging"
              />
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Where It Goes</h3>
              <p className="text-sm text-gray-600 leading-relaxed mb-4">
                LED and OLED display phosphors, smartphone and television screens, energy-efficient lighting, euro banknote and currency
                security marks, passport and document authentication, medical X-ray phosphors, nuclear reactor control rods, fluorescent
                lamps, quantum memory research.
              </p>
              <p className="text-sm font-semibold text-violet-800 bg-violet-50 rounded-lg px-3 py-2">
                $370M+ global market by 2030 (from $258M in 2024)
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
            The Display Revolution Is Accelerating. Europium Supply Cannot Follow.
          </h2>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-4xl mb-12">
            There is a direct physical link between the number of screens the world manufactures and the consumption of europium. Every
            OLED panel needs europium-doped red phosphors. Every LED bulb needs europium-activated yttrium oxide. Every security banknote
            needs europium luminescent markers. The display industry is growing at 18% annually. Europium production, trapped in byproduct
            economics, is barely growing at all.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <div className="bg-gray-50 rounded-2xl p-6 md:p-8 border border-gray-100">
              <h3 className="text-xl font-medium text-gray-900 mb-3">OLED and Quantum Dot Displays: The Premium Color Standard</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Next-generation OLED and quantum dot displays require europium-doped phosphors for red color reproduction that meets broadcast
                and cinema color accuracy standards. The premium display market is growing at 18% CAGR, with each square meter of display
                panel consuming 2 to 4 grams of europium oxide. Every television, monitor, and smartphone competing on display quality
                depends on this single element for its most critical color channel.
              </p>
            </div>
            <div className="bg-gray-50 rounded-2xl p-6 md:p-8 border border-gray-100">
              <h3 className="text-xl font-medium text-gray-900 mb-3">LED Lighting Transition: 8 Billion Bulbs and Counting</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                The global transition from incandescent and fluorescent to LED lighting is consuming europium at industrial scale. LED bulbs
                use europium-activated yttrium oxide (Y₂O₃:Eu³⁺) as the red phosphor component in white light generation. With 8 billion LED
                bulbs sold annually and government mandates accelerating the transition worldwide, lighting alone consumes 420 tonnes of
                europium per year.
              </p>
            </div>
            <div className="bg-gray-50 rounded-2xl p-6 md:p-8 border border-gray-100">
              <h3 className="text-xl font-medium text-gray-900 mb-3">MicroLED and AR/VR: The Next Display Frontier</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                MicroLED technology for AR/VR headsets, automotive heads-up displays, and ultra-high-resolution panels requires europium for
                pixel-level red light emission at microscale. Apple, Meta, and Samsung have committed over $30 billion combined to
                next-generation display development. Every one of these investments depends on europium phosphors reaching production at
                sufficient volume and purity.
              </p>
            </div>
            <div className="bg-gray-50 rounded-2xl p-6 md:p-8 border border-gray-100">
              <h3 className="text-xl font-medium text-gray-900 mb-3">Currency Security and Anti-Counterfeiting: Sovereign Demand</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Europium compounds are embedded in euro banknotes, passports, secure documents, and pharmaceutical packaging as
                UV-activated authentication markers. The security printing market consumes 85 tonnes of europium annually. Governments treat
                europium supply as a sovereignty concern, with multiple nations stockpiling reserves to ensure their currency and identity
                document systems remain secure.
              </p>
            </div>
          </div>

          <div className="bg-gray-50 rounded-2xl p-6 md:p-8 border border-gray-200">
            <h3 className="text-xl font-medium text-gray-900 mb-2">A Deficit That Grows with Every Screen Manufactured</h3>
            <p className="text-sm text-gray-500 mb-6">
              Bar chart showing global europium demand rising from 640 tonnes in 2025 to 1,250 tonnes by 2030, with supply reaching
              approximately 600 tonnes, creating a 650 tonne annual deficit.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-6">
              {[
                { year: '2025', val: '640', note: 'Demand (t)' },
                { year: '2028', val: '890', note: 'Demand (t)' },
                { year: '2030', val: '1,250', note: 'Demand (t)' },
                { year: '2035', val: '1,850', note: 'Roskill' },
                { year: '2030 Supply', val: '~600', note: 'Gap: 650+ t' },
              ].map((d, i) => (
                <div
                  key={d.year}
                  className={`text-center p-4 rounded-xl ${i === 4 ? 'bg-red-50 border border-red-100' : i === 3 ? 'bg-violet-50' : 'bg-white border border-gray-100'}`}
                >
                  <p className={`text-sm mb-2 ${i === 4 ? 'text-red-800 font-medium' : 'text-gray-500'}`}>{d.year}</p>
                  <p className="text-sm font-semibold text-gray-900">{d.val} t</p>
                  <p className="text-xs text-gray-500 mt-1">{d.note}</p>
                </div>
              ))}
            </div>
            <p className="text-xs text-gray-400">Sources: Roskill, Adamas Intelligence, USGS, MarketsandMarkets.</p>
          </div>
        </div>
      </section>

      {/* FOLD 5: TWO PRODUCTS */}
      <section id="products" className="scroll-mt-24 px-4 sm:px-6 md:px-8 lg:px-12 py-20 md:py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <p className="text-xs uppercase tracking-widest text-gray-400 font-semibold mb-3 text-center">TWO PRODUCTS</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-gray-900 leading-tight mb-6 text-center">
            Two Ways to Own Tokenized Europium
          </h2>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto text-center mb-14">
            Everything we believe about opening access to critical display and lighting materials comes to life in two products. One for
            europium that is already refined and vaulted. One for europium still locked in rare earth deposits awaiting separation. Both
            backed by physical assets. Both settleable in stablecoins. Both built to give the companies and investors powering the display
            revolution a way to secure the element that makes color possible.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
            <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm">
              <span className="inline-block text-xs font-bold tracking-wider text-violet-800 bg-violet-100 px-3 py-1 rounded-full mb-4">
                ASSET-BACKED TOKEN
              </span>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                <Link href="/products" className="hover:text-violet-700 underline-offset-2 hover:underline">
                  1:1 Europium Oxide Token
                </Link>
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed mb-6">
                Digital ownership of physical europium. Every token is backed 1:1 by refined europium oxide (Eu₂O₃) in insured, audited
                vaults. High-purity grade (99.99%+ Eu₂O₃), ready for phosphor manufacturing, display panel production, LED lighting
                applications, and security printing. Redeemable for physical europium on demand. Not a derivative. Not a tracker. The actual
                material.
              </p>
              <ul className="text-sm text-gray-700 space-y-2 list-disc pl-5">
                <li>Backed 1:1 by refined europium oxide (99.99%+ purity grade)</li>
                <li>Always redeemable for physical europium delivery on demand</li>
                <li>Stored in insured, independently audited vault and warehouse facilities</li>
                <li>On-chain proof-of-reserves with real-time oracle feeds</li>
                <li>Fractional ownership, from $1, tradeable 24/7 with instant stablecoin settlement</li>
                <li>Ready for industrial end-use: OLED phosphors, LED lighting, security printing, medical imaging, nuclear applications</li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm">
              <span className="inline-block text-xs font-bold tracking-wider text-slate-800 bg-slate-200 px-3 py-1 rounded-full mb-4">
                FUTURE DELIVERY CONTRACT
              </span>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                <Link href="/products" className="hover:text-violet-700 underline-offset-2 hover:underline">
                  In-Ground Europium
                </Link>
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed mb-6">
                Forward positions in europium that has not been separated yet. Tokenized future delivery contracts backed by proven
                europium content in rare earth deposits at certified mining operations. For organizations that understand that 0.05% deposit
                concentration serving a 1,250-tonne demand curve by 2030 creates a pricing trajectory that favors early positioning.
              </p>
              <ul className="text-sm text-gray-700 space-y-2 list-disc pl-5">
                <li>Backed by proven europium content in rare earth reserves at partner mining sites</li>
                <li>Pre-production pricing reflecting byproduct scarcity and separation constraints</li>
                <li>On-chain reserve tracking with geological data transparency</li>
                <li>Physical delivery or settlement at maturity</li>
                <li>Verified reserves with third-party geological audits</li>
                <li>Built for display manufacturers, sovereign funds, and institutional allocators</li>
              </ul>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-violet-900/10 border border-violet-200 rounded-2xl p-6 md:p-8">
              <p className="text-xs font-bold text-violet-900 uppercase tracking-wider mb-2">SHORT-TERM DELIVERY</p>
              <p className="text-lg font-semibold text-gray-900 mb-3">1 to 12 Months</p>
              <p className="text-sm text-gray-600 leading-relaxed">
                Near-term europium delivery contracts tied to active rare earth operations with separation capacity. For display manufacturers
                managing quarterly phosphor procurement, LED lighting producers scaling production lines, and commodity specialists trading
                near-term europium supply dynamics.
              </p>
            </div>
            <div className="bg-slate-100 border border-slate-200 rounded-2xl p-6 md:p-8">
              <p className="text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">LONG-TERM DELIVERY</p>
              <p className="text-lg font-semibold text-gray-900 mb-3">1 to 6 Years</p>
              <p className="text-sm text-gray-600 leading-relaxed">
                Multi-year europium positions backed by proven rare earth reserves at earlier-stage operations. Built for sovereign strategic
                reserves, display technology manufacturers planning decade-scale factory buildouts, and institutional allocators who recognize
                that byproduct supply serving 0.05% deposit concentration cannot scale to meet exponential display growth.
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
            Securing the Element That Gives Every Screen Its Color. Directly.
          </h2>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto text-center mb-14">
            Europium does not have a dedicated mine anywhere on earth. It appears in trace concentrations during the separation of other rare
            earths, a process dominated by a small number of facilities, predominantly in China. Toto Finance works directly with{' '}
            <Link href="/about" className="text-violet-800 font-medium underline underline-offset-2 hover:text-violet-600">
              rare earth mining companies and separation facilities
            </Link>{' '}
            to secure europium at the processing level, bypassing the trader networks and broker chains that add cost and opacity to an
            already constrained supply.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            {[
              {
                title: 'China and Southeast Asia',
                text: 'China produces 85% of global europium from ionic clay deposits in Jiangxi and Guangdong provinces. Southeast Asian processing facilities in Malaysia and Vietnam handle separation and purification to 99.99%+ grades. Export restrictions and domestic display manufacturing priorities are tightening availability for international buyers at a pace that exceeds new supply development.',
              },
              {
                title: 'North America (USA and Canada)',
                text: 'US and Canadian rare earth projects are developing separation capabilities, including Mountain Pass (California), Bear Lodge (Wyoming), and Quebec operations. Critical mineral designation has prioritized domestic europium supply chains to ensure display technology manufacturing and currency security systems are not dependent on single-source imports.',
              },
              {
                title: 'Australia',
                text: 'Western Australian and Northern Territory deposits contain europium-rich monazite and heavy rare earth minerals. These operations represent a key source for allied technology manufacturing and Western supply chain diversification, with new separation technologies enabling economic europium recovery outside Chinese processing dominance.',
              },
              {
                title: 'Brazil and South America',
                text: 'Brazilian monazite deposits host significant europium reserves. South American rare earth projects are emerging as alternative processing sources, providing supply routes for display manufacturers and lighting companies seeking diversification beyond established Asian supply chains.',
              },
              {
                title: 'Developed Mines',
                text: 'Established rare earth mines in active production, delivering consistent europium output with proven separation technology and full purification infrastructure to 99.99%+ grades. These operations supply the 1:1 Europium Oxide Token with material ready for immediate industrial use.',
              },
              {
                title: 'Exploration and Development',
                text: 'New rare earth projects across Africa, Scandinavia, and Greenland are in exploration and feasibility stages. These represent the next generation of europium supply, and In-Ground Europium positions offer access at pre-production economics before separation output reaches the market.',
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
              <strong>Secured at the separation stage.</strong> Europium does not come from a mine. It comes from a separation facility.
              Toto Finance works at this critical processing point, eliminating the broker and trader layers that sit between separation
              output and end-user delivery. Verified provenance. Transparent chain of custody from{' '}
              <Link href="/how-tokenization-works" className="underline underline-offset-2 hover:text-violet-200">
                mine to token
              </Link>
              . Access at the point where europium actually becomes available, not three intermediaries downstream.
            </p>
          </div>
        </div>
      </section>

      {/* FOLD 7: PARTICIPANTS */}
      <section className="px-4 sm:px-6 md:px-8 lg:px-12 py-20 md:py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <p className="text-xs uppercase tracking-widest text-gray-400 font-semibold mb-3 text-center">PARTICIPANTS</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-gray-900 leading-tight mb-6 text-center">
            Who Buys Tokenized Europium
          </h2>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto text-center mb-14">
            Europium has always been traded in small quantities, through specialized rare earth traders, at prices set in private
            negotiations with no public benchmark. The companies that consume it most, display manufacturers, lighting producers, government
            mints, have had no transparent market to procure through. Toto Finance opens that access for the first time.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 border border-gray-200">
              <span className="text-xs font-bold tracking-widest text-violet-800">DISPLAY AND LIGHTING BUILDERS</span>
              <h3 className="text-xl font-semibold text-gray-900 mt-3 mb-4">The Companies That Create What the World Sees</h3>
              <p className="text-sm text-gray-600 leading-relaxed mb-4">
                These buyers do not speculate on europium prices. They consume europium in the phosphors that make screens display color, in
                the compounds that make LED bulbs emit white light, in the luminescent marks that authenticate currency. Tokenized europium
                gives them{' '}
                <Link href="/products" className="text-violet-800 font-medium underline underline-offset-2">
                  supply continuity
                </Link>
                , transparent procurement, and physical delivery capability without the lead times and pricing opacity of traditional rare
                earth broker channels.
              </p>
              <p className="text-xs text-gray-500 leading-relaxed">
                OLED and LCD display panel manufacturers, quantum dot and MicroLED display producers, LED lighting manufacturers and
                energy-efficient bulb producers, phosphor material suppliers, consumer electronics manufacturers (televisions, monitors,
                smartphones), security printing and anti-counterfeiting companies, government mints and currency producers, medical imaging
                equipment manufacturers (X-ray phosphors), laser and optical component manufacturers, nuclear reactor component suppliers,
                glass and ceramic coloring applications.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 border border-gray-200">
              <span className="text-xs font-bold tracking-widest text-blue-800">DISPLAY ECONOMY INVESTORS</span>
              <h3 className="text-xl font-semibold text-gray-900 mt-3 mb-4">Investing in What Every Screen Is Physically Made Of</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Investors pour billions into display panel companies, LED lighting stocks, and consumer electronics manufacturers, yet the
                physical element that makes phosphor color possible has been entirely uninvestable. Until now. Tokenized europium offers
                direct exposure to a material with 18% annual demand growth driven by the global display revolution, fractional access from
                $1, and zero dependence on any company&apos;s operational execution. The thesis is straightforward: the world is
                manufacturing more screens than ever, europium supply cannot grow proportionally, and the gap compounds every year.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 border border-gray-200">
              <span className="text-xs font-bold tracking-widest text-purple-800">ON-CHAIN INFRASTRUCTURE</span>
              <h3 className="text-xl font-semibold text-gray-900 mt-3 mb-4">Backing Digital Assets with the Material That Creates Visual Output</h3>
              <p className="text-sm text-gray-600 leading-relaxed mb-4">
                Every digital interface, every NFT displayed on screen, every DeFi dashboard rendered in color depends on europium-doped
                phosphors at the hardware layer. Tokenized europium closes that loop: on-chain assets backed by the physical material that
                makes on-chain activity visible. For protocols, treasuries, and funds seeking real-world collateral with a direct link to the
                display economy.
              </p>
              <p className="text-xs text-gray-500 leading-relaxed">
                Crypto funds seeking display-economy correlated commodity exposure, protocol treasuries diversifying into the physical layer
                of visual computing, DeFi protocols building collateral pools with direct display technology linkage, blockchain foundations
                investing in the materials their interfaces depend on, DAOs with technology infrastructure investment mandates.
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
            Instant Settlement for Tokenized Europium. No Rare Earth Traders. No Delays.
          </h2>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-4xl mb-12">
            Europium has never been listed on an exchange. There is no spot market, no futures contract, no public price ticker. Every gram
            changes hands through private negotiation with specialized rare earth traders who control information, set terms, and extract
            margin at every step. For the material that literally creates the colors humans see on digital displays, the procurement
            infrastructure remains trapped in closed networks and handshake agreements. We built something that matches the brilliance of
            the element itself.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="bg-gray-50 rounded-2xl p-6 md:p-8 border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-1">The Old Way</h3>
              <p className="text-sm text-gray-500 mb-6">8+ Intermediaries. Weeks to Settle. Opaque Pricing.</p>
              <div className="space-y-3">
                {[
                  'Mining Company / Ore Producer',
                  'Rare Earth Separation Facility',
                  'Specialized Rare Earth Trader',
                  'Logistics and Customs Coordinator',
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
                        <Link href="/products" className="underline underline-offset-2 hover:text-violet-200">
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
                The europium market has operated as a closed circle of specialized traders and private negotiations for decades. No public
                pricing. No standardized contracts. No settlement infrastructure. Toto Finance uses blockchain to create what never existed:
                a transparent, instant-settlement market connecting europium sources with buyers, bypassing every intermediary that
                traditionally sits between separation facility output and end-user delivery.
              </p>
            </div>
          </div>

          <h3 className="text-2xl font-medium text-gray-900 mb-6 text-center">Settlement at the Speed of Light Emission</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                name: 'USDC',
                issuer: 'Circle',
                detail:
                  'The institutional standard for dollar-denominated digital settlement. Full reserve attestation, broad DeFi integration, and regulatory acceptance across major jurisdictions make USDC the default choice for compliant europium transactions.',
              },
              {
                name: 'USDT',
                issuer: 'Tether',
                detail:
                  'Over $140 billion in circulation providing the deepest stablecoin liquidity in global digital asset markets. When europium transactions require immediate execution at any scale and any hour, USDT delivers the settlement depth to match.',
              },
              {
                name: 'USAT',
                issuer: 'Tether (US Regulated)',
                detail:
                  'US-regulated stablecoin operating under the GENIUS Act framework. Purpose-built for transactions where domestic compliance infrastructure and US-regulated settlement rails are required by institutional mandates or regulatory obligation.',
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
            DeFi Infrastructure for Tokenized Europium
          </h2>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-4xl mb-12">
            Europium has had zero financial infrastructure since Johan Gadolin first identified rare earth oxides in 1794. No exchange
            listing. No ETF. No futures market. No lending facility. No collateral framework. Tokenization does not merely digitize europium.
            It constructs an entire financial architecture around a material that has existed in procurement darkness for over two centuries.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            <div className="bg-white rounded-2xl p-6 md:p-8 border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">The First Europium Secondary Market</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Before tokenization, exiting a europium position meant finding one of a handful of rare earth traders willing to negotiate a
                private deal. There was no market. Only contacts. Tokenized europium creates a continuous secondary market on decentralized
                exchanges, enabling real-time price discovery, instant transfers, and cross-chain liquidity for a material that has never had a
                single public trading venue. This is not market improvement. This is market invention.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-6 md:p-8 border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Yield Rooted in the Display Economy</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Lend europium tokens to counterparties seeking leveraged exposure to rare earth pricing or hedged positions in display
                materials. Interest rates reflect real-world demand for europium exposure, tied to OLED factory buildout rates, LED lighting
                adoption curves, and MicroLED development velocity. Yield backed by the physical material that creates visual output, not by
                algorithmic token emissions or governance incentives.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-6 md:p-8 border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Capital Without Selling the Position</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Display manufacturers and institutional investors holding europium positions have historically had one option for accessing
                capital: sell the entire position to a rare earth trader at whatever terms they offered. Tokenized europium changes this.{' '}
                <Link href="/products" className="text-violet-800 font-medium underline underline-offset-2">
                  Borrow against europium
                </Link>{' '}
                tokens to receive stablecoins while retaining full exposure. For display technology companies managing cash flow against
                multi-year factory buildouts, this unlocks working capital without surrendering strategic supply positions.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-6 md:p-8 border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Automated Risk Management for a Market with No Infrastructure</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Europium&apos;s market is tiny, concentrated, and subject to supply shocks that can shift pricing dramatically with minimal
                notice. A single export restriction from China or a separation facility shutdown can move the entire market overnight.
                Traditional risk management through phone calls to brokers and manual position adjustments cannot respond at that speed.
                Smart contract infrastructure automates margin management, collateral rebalancing, and liquidation execution in real time,
                providing institutional-grade risk controls for a market that has operated without any risk infrastructure at all.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 md:p-8 border border-gray-200">
            <h3 className="text-xl font-medium text-gray-900 mb-6 text-center">
              From Separation Facility to Global Digital Market: The Europium Token Path
            </h3>
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              {[
                'Verified: Europium oxide authenticated at separation facility, vaulted in insured custody, and linked to on-chain token identity',
                'Acquired: Purchased with USDC, USDT, or USAT at transparent pricing reflecting real-time supply and demand',
                'Positioned: Held in wallet, traded on secondary markets, or bridged across chains to match holder infrastructure',
                'Activated: Deployed into yield protocols, pledged as loan collateral, or hedged against supply disruption scenarios',
                'Delivered: Redeemed for physical europium oxide (Eu₂O₃) for phosphor manufacturing, display production, or industrial use',
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
            Tokenized Europium vs Every Other Way to Get Exposure
          </h2>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-4xl mb-12">
            There has never been a clean way to invest in europium. Rare earth ETFs dilute exposure across dozens of elements. Mining stocks
            carry operational risk unrelated to europium pricing. Physical procurement requires separation facility relationships and minimum
            order quantities measured in kilograms at six-figure price points. Toto Finance built what the market was missing.
          </p>

          <div
            className="overflow-x-auto rounded-2xl border border-gray-200"
            aria-label="Comparison table of tokenized europium on Toto Finance versus rare earth ETFs, physical europium procurement, and mining stocks across 10 features including europium-specific exposure, settlement speed, price transparency, and DeFi access."
          >
            <table className="w-full text-sm text-left min-w-[720px]">
              <thead>
                <tr className="bg-gray-900 text-white">
                  <th className="px-4 md:px-6 py-4 font-medium">Feature</th>
                  <th className="px-4 md:px-6 py-4 font-medium">Rare Earth ETFs</th>
                  <th className="px-4 md:px-6 py-4 font-medium bg-white/10">Toto Finance</th>
                  <th className="px-4 md:px-6 py-4 font-medium">Physical Europium</th>
                  <th className="px-4 md:px-6 py-4 font-medium">Mining Stocks</th>
                </tr>
              </thead>
              <tbody className="bg-white">
                {[
                  ['Europium-Specific', 'No (basket)', 'Yes (1:1)', 'Yes', 'No (equity)'],
                  ['Trading Hours', 'Market hours only', '24/7/365', 'Private negotiation', 'Market hours only'],
                  ['Settlement', 'T+2', 'T+0 (Instant)', 'Weeks to months', 'T+2'],
                  ['Settlement Currency', 'Fiat (via broker)', 'USDC, USDT, USAT', 'Wire transfer', 'Fiat (via broker)'],
                  ['Min. Investment', '1 share (~$50+)', 'Fractional (from $1)', '$100,000+ (kg scale)', '1 share (~$10+)'],
                  ['Physical Redemption', 'No', 'Yes', 'Yes', 'No'],
                  ['On-Chain Transparency', 'No', 'Yes', 'No', 'No'],
                  ['DeFi Yield / Loans', 'No', 'Yes', 'No', 'No'],
                  ['Price Transparency', 'NAV-based', 'Real-time oracle', 'Private negotiation', 'Stock price only'],
                  ['Intermediaries', 'Broker + Clearing', 'None (P2P)', 'Multiple traders', 'Broker'],
                ].map((row, i) => (
                  <tr key={row[0]} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="px-4 md:px-6 py-3 font-medium text-gray-900">{row[0]}</td>
                    <td className="px-4 md:px-6 py-3 text-gray-600">{row[1]}</td>
                    <td className="px-4 md:px-6 py-3 text-gray-900 font-medium bg-violet-50/50">{row[2]}</td>
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
            Building Financial Infrastructure for the Rarest Commercial Rare Earth
          </h2>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-4xl mb-12">
            Europium has been traded through private channels and specialized brokers since the phosphor industry created commercial demand
            in the mid-20th century. No standardized contracts. No public pricing benchmarks. No settlement infrastructure. No collateral
            frameworks. Every feature of the Toto Finance platform for europium was engineered from first principles because nothing existed
            to build upon.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                t: 'Physical Backing with Industrial Delivery',
                b: 'Every europium token connects to verified europium oxide (Eu₂O₃, 99.99%+) in insured custody. Request physical delivery and receive material ready for OLED phosphor production, LED lighting manufacturing, security printing, or medical imaging applications. In a market where verifying what you are buying has always required personal relationships with traders, on-chain proof-of-reserves replaces trust with cryptographic verification.',
              },
              {
                t: 'Price Discovery Where None Existed',
                b: "Europium has never had a public price. Every transaction is negotiated privately, with pricing information guarded as proprietary by a small circle of rare earth trading desks. Toto Finance's oracle feeds and on-chain trading activity create the first transparent europium pricing mechanism: real-time, verifiable, and accessible to any participant, not just established rare earth networks.",
              },
              {
                t: 'Instant Settlement for a Market That Measures in Weeks',
                b: "Traditional europium procurement involves purchase orders, separation scheduling, purity verification, logistics coordination, customs clearance, and banking settlement that can stretch across weeks or months. Token settlement is T+0 with stablecoins. For a market where availability fluctuates with every policy decision from Beijing, instant execution is not a convenience. It is a competitive necessity.",
              },
              {
                t: 'Compliance for Cross-Border Rare Earth Trade',
                b: 'Europium trade crosses jurisdictions with varying export controls, strategic material designations, and end-use verification requirements. Smart contracts embed KYC/AML verification, transfer restrictions, and jurisdiction-specific compliance rules directly into token architecture, ensuring every transfer automatically satisfies applicable regulatory requirements without manual processing delays.',
              },
              {
                t: 'Financial Infrastructure from Scratch',
                b: 'Lending, borrowing, hedging, and collateral management for europium: functions that have never existed in any form for this material. Smart contract protocols enable yield generation from europium positions, stablecoin borrowing against holdings, and programmable hedging strategies. An entire financial stack, purpose-built for a material that represents 0.05% of rare earth deposits yet commands billions in end-market value.',
              },
              {
                t: 'Multi-Chain Presence',
                b: 'Tokenized europium is deployed across Ethereum, Polygon, Cardano, Solana, and XRP Ledger. Institutional custodians, DeFi protocols, and individual holders can interact with europium tokens on whatever chain infrastructure their operations already use. No migration required, no ecosystem lock-in.',
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
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-gray-900 leading-tight mb-6">Tokenized Europium FAQ</h2>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-12">
            Direct answers about tokenized europium, In-Ground Europium, display and lighting demand, and how Toto Finance provides access to
            the rarest commercial rare earth element.
          </p>
          <EuropiumFAQ faqs={faqData} />
        </div>
      </section>

      {/* FOLD 13: Final CTA */}
      <section className="relative bg-gradient-to-br from-violet-900 via-violet-800 to-gray-900 text-white px-4 sm:px-6 md:px-8 lg:px-12 py-20 md:py-32 overflow-hidden">
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
            backgroundSize: '40px 40px',
          }}
        />
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <p className="text-xs uppercase tracking-widest text-violet-200/80 font-semibold mb-3">THIS IS WHY</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light leading-tight mb-8">
            The World Is Manufacturing More Screens Than Ever. Europium Supply Cannot Keep Up.
          </h2>
          <p className="text-base md:text-lg text-gray-200 leading-relaxed mb-10">
            Every color on every display depends on europium. Every LED bulb, every OLED panel, every banknote security mark. The world needs
            1,250 tonnes by 2030. Supply will deliver 600. The 650-tonne gap compounds with every display factory commissioned, every
            lighting mandate enacted, every MicroLED headset shipped. Toto Finance is building the infrastructure to bring this invisible but
            essential material to an open, transparent, instant-settlement market for the first time in its history.
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
