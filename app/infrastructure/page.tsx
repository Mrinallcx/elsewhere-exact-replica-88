// Server Component (NO "use client")
import { Navigation } from '../components/Navigation';
import { VideoBackground } from '../components/client/VideoBackground';
import { LazyVideo } from '../components/client/LazyVideo';
import dynamicImport from 'next/dynamic';
import { PageStructuredData } from '../components/PageStructuredData';
import { BreadcrumbStructuredData } from '../components/BreadcrumbStructuredData';
import Image from 'next/image';

// Dynamic imports for heavy components
const StatsCounter = dynamicImport(() => import('../components/client/StatsCounter').then(mod => ({ default: mod.StatsCounter })), {
  loading: () => <div className="stats-section-loading" />,
});

const AnimatedSection = dynamicImport(() => import('../components/client/AnimatedSection').then(mod => ({ default: mod.AnimatedSection })));

const DescriptionRotator = dynamicImport(() => import('../components/client/DescriptionRotator').then(mod => ({ default: mod.DescriptionRotator })));

const CashCardsSection = dynamicImport(() => import('../components/client/CashCardsSection').then(mod => ({ default: mod.CashCardsSection })));

const GradualBlur = dynamicImport(() => import('../../src/components/GradualBlur'));

const NewsletterForm = dynamicImport(() => import('../components/NewsletterForm'));

const Footer = dynamicImport(() => import('../components/Footer'));

const BlogSection = dynamicImport(() => import('../components/client/BlogSection').then(mod => ({ default: mod.BlogSection })), {
  ssr: true,
  loading: () => <div className="resources-section px-6 md:px-8 lg:px-12 py-20 md:py-40"><div className="max-w-7xl mx-auto"><div className="h-96 animate-pulse bg-gray-100 rounded" /></div></div>,
});

export const dynamic = 'force-dynamic';

// Data constants
const partnerLogos = [
  'Cardano.svg',
  'Coingecko.svg',
  'Coinmarketcap.svg',
  'Ethereum.svg',
  'Gia.svg',
  'LCX (1).svg',
  'Polygon.svg',
  'Solana (1).svg',
  'Uniswap.svg',
  'Xrp.svg',
];

const tnftImages = [
  '/assets/images/Silver.webp',
  '/assets/images/Sapphire.webp',
  '/assets/images/Platinum.webp',
  '/assets/images/Gold.webp',
  '/assets/images/Diamond.webp',
  '/assets/images/energy.webp',
  '/assets/images/carbon-credit.webp',
];

const tnftCards = Array.from({ length: 16 });

const cashCards = [
  {
    title: 'Asset-Backed Token Issuance',
    subtitle: 'Inventory, reserves, or offtake rights tokenized with full asset backing.',
    variant: 'cash-card-blue',
  },
  {
    title: 'Embedded KYC/AML & Eligibility Rules',
    subtitle: 'Compliance logic enforced at the token level before any transfer executes.',
    variant: 'cash-card-green',
  },
  {
    title: 'Jurisdiction-Aware Transfer Controls',
    subtitle: 'Transfer rules adapt to regional regulatory requirements automatically.',
    variant: 'cash-card-purple',
  },
  {
    title: 'Controlled Minting, Transfers & Redemption',
    subtitle: 'Full lifecycle governance from issuance through settlement and redemption.',
    variant: 'cash-card-rose',
  },
];

const clearCards = [
  {
    title: 'Instant (T+0) Settlement',
    subtitle: 'Near-real-time finality for tokenized commodity transactions.',
    variant: 'cash-card-blue',
  },
  {
    title: '24/7 Market Availability',
    subtitle: 'Continuous settlement independent of business hours or time zones.',
    variant: 'cash-card-green',
  },
  {
    title: 'Stablecoin-Based Settlement Flows',
    subtitle: 'Programmable payment rails using regulated stablecoin infrastructure.',
    variant: 'cash-card-purple',
  },
  {
    title: 'Reduced Counterparty & Settlement Risk',
    subtitle: 'Atomic execution eliminates intermediary delays and default exposure.',
    variant: 'cash-card-rose',
  },
];

const logisticsCards = [
  {
    title: 'Custody & Redemption',
    subtitle: 'End-to-end asset custody linked to on-chain token ownership.',
    variant: 'cash-card-blue',
  },
  {
    title: 'Insured, Third-Party Vaulting & Storage',
    subtitle: 'Physical assets held in independently insured custody facilities.',
    variant: 'cash-card-green',
  },
  {
    title: 'Independent Audits & Validation',
    subtitle: 'Regular third-party verification of reserves and asset integrity.',
    variant: 'cash-card-purple',
  },
  {
    title: 'Physical Redemption & Settlement Workflows',
    subtitle: 'Structured processes for converting digital tokens back to physical delivery.',
    variant: 'cash-card-rose',
  },
];

const securityCards = [
  {
    title: 'Security & Governance',
    subtitle: 'Institutional-grade security architecture with structured governance.',
    variant: 'cash-card-blue',
  },
  {
    title: 'Smart Contract Audits',
    subtitle: 'Independent third-party audits of all deployed smart contracts.',
    variant: 'cash-card-green',
  },
  {
    title: 'Permissioned Access Controls',
    subtitle: 'Role-based access ensuring only authorized participants interact.',
    variant: 'cash-card-purple',
  },
  {
    title: 'Wallet Whitelisting & Role-Based Permissions',
    subtitle: 'Granular control over wallet access and transaction authorization.',
    variant: 'cash-card-rose',
  },
  {
    title: 'Monitoring & Incident Response',
    subtitle: 'Continuous surveillance with structured incident handling protocols.',
    variant: 'cash-card-blue',
  },
  {
    title: 'Governance Aligned with Compliance',
    subtitle: 'Decision-making frameworks meeting regulatory expectations.',
    variant: 'cash-card-green',
  },
];

const reservesCards = [
  {
    title: 'Transparency Framework',
    subtitle: 'Structured disclosure processes for asset verification and reporting.',
    variant: 'cash-card-blue',
  },
  {
    title: 'Oracle-Driven Reserve Verification',
    subtitle: 'Automated on-chain feeds validating reserve status in real time.',
    variant: 'cash-card-green',
  },
  {
    title: 'On-Chain Attestations',
    subtitle: 'Immutable proof of reserves recorded directly on the blockchain.',
    variant: 'cash-card-purple',
  },
  {
    title: 'Independent Audit Reporting',
    subtitle: 'Third-party audits providing external validation of asset backing.',
    variant: 'cash-card-rose',
  },
  {
    title: 'Continuous Monitoring of Asset Backing',
    subtitle: 'Ongoing surveillance ensuring 1:1 integrity across all tokens.',
    variant: 'cash-card-blue',
  },
  {
    title: '1:1 Asset Integrity',
    subtitle: 'This supports 1:1 asset integrity across all tokenized commodities.',
    variant: 'cash-card-green',
  },
];

const multiChainCards = [
  {
    title: 'Ethereum',
    subtitle: 'Settlement and liquidity on the largest smart contract network.',
    variant: 'cash-card-blue',
  },
  {
    title: 'Cardano',
    subtitle: 'Secure, verifiable asset issuance with native token architecture.',
    variant: 'cash-card-green',
  },
  {
    title: 'Additional Institutional-Grade Networks',
    subtitle: 'Expanding to networks that meet compliance and performance requirements.',
    variant: 'cash-card-purple',
  },
];

const statsData = [
  { key: 'assets', value: 30, suffix: 'K+', label: 'Asset-Backed Tokens Issued' },
  { key: 'blockchains', value: 5, suffix: '+', label: 'Blockchains Integrated' },
  { key: 'liveSince', value: 2023, suffix: '', label: 'Live Since' },
];

const howItWorksDescriptions = [
  'The complete lifecycle of a commodity - on-chain and auditable.',
  'Tokenize with Toto Rails: Commodities stored in vaults, warehouses, or tanks are minted into 1:1 asset-backed tokens with built-in compliance and proof-of-reserves.',
  'Trade with Toto Markets: Peer-to-peer or exchange-integrated trading with programmable contracts for spot, forwards, collateralization, and secondary liquidity.',
  'Settle & Deliver with Toto Clear: Atomic delivery-versus-payment using stablecoins. Hold, redeem, or re-trade - with settlement, logistics, and compliance automated via oracles.',
];

const totoTokenDescriptions = [
  'Higher Limits: Unlock higher redemption and settlement thresholds across markets.',
  'Lower Fees: Stake TOTO to reduce tokenization, trading, and settlement fees.',
  'Priority Access: Early access to scarce, institutional-grade commodity listings.',
  'Ecosystem Rewards: Participate in loyalty and incentive programs aligned with platform usage.',
];


export default function InfrastructurePage() {
  return (
    <div className="min-h-screen w-full relative">
      {/* Structured Data */}
      <PageStructuredData
        title="Infrastructure — Toto Finance | Tokenized Commodity Infrastructure"
        description="Explore the institutional-grade infrastructure powering tokenized commodities at Toto Finance — settlement, compliance, custody, and global market access."
        url="https://totofinance.co/infrastructure"
        pageType="WebPage"
        breadcrumbItems={[
          { name: 'Home', item: 'https://totofinance.co' },
          { name: 'Infrastructure', item: 'https://totofinance.co/infrastructure' },
        ]}
      />
      <BreadcrumbStructuredData items={[
        { name: 'Home', item: 'https://totofinance.co' },
        { name: 'Infrastructure', item: 'https://totofinance.co/infrastructure' },
      ]} />

      {/* Gradual Blur Effect */}
      <GradualBlur preset="page-footer" strength={2} height="4rem" animated="scroll" duration="0.5s" />

      {/* Navigation */}
      <Navigation />

      {/* Hero Section */}
      <main className="hero-container relative flex flex-col items-start sm:items-center justify-center min-h-[90vh] md:min-h-screen text-left sm:text-center px-4 sm:px-6 md:px-8 lg:px-12 pt-32 md:pt-40 pb-24 md:pb-32 overflow-hidden">
        <picture className="hero-bg-img">
          <source
            media="(min-width: 768px)"
            srcSet="/hero-background/hero-desktop.webp"
            type="image/webp"
          />
          <source
            media="(max-width: 767px)"
            srcSet="/hero-background/hero-mobile.webp"
            type="image/webp"
          />
          <img
            src="/hero-background/hero-mobile.webp"
            alt=""
            width={480}
            height={850}
            fetchPriority="high"
            decoding="sync"
            loading="eager"
            className="hero-bg-img"
            style={{
              position: 'absolute',
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              inset: 0,
            }}
            aria-hidden="true"
          />
        </picture>
        <VideoBackground
          videoSrc="/videos/main-landing-hero.mp4"
          fallbackImage="/hero-background/hero-desktop.webp"
          fallbackAlt="Hero background fallback"
          className="hero-fallback"
          overlayClassName="hero-overlay"
          videoClassName="hero-video"
          priority={true}
        />

        <div className="relative z-10 max-w-5xl w-full mx-0 sm:mx-auto">
          <h1 className="hero-subheading text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl mb-4 sm:mb-6 md:mb-8 lg:mb-10 text-travel-white">
            Institutional Infrastructure for Tokenized Commodities
          </h1>

          <div className="max-w-3xl w-full mx-0 sm:mx-auto mb-6 sm:mb-8 mt-6 sm:mt-8 md:mt-10 text-left sm:text-center">
            <p className="hero-description text-sm sm:text-base md:text-lg lg:text-xl text-travel-white mb-4 text-left sm:text-center">
              Toto Finance provides production-grade infrastructure for tokenized commodities, from asset issuance and custody to compliant settlement and global market access.
            </p>
            <p className="hero-description text-sm sm:text-base md:text-lg lg:text-xl text-travel-white font-medium text-left sm:text-center">
              Built for real assets. Designed for institutional scale.
            </p>
          </div>

          <div className="flex flex-col items-start sm:items-center space-y-6 mb-10 sm:mb-16">
            <a
              href="https://app.totofinance.co/"
              target="_blank"
              rel="noopener noreferrer"
              className="cta-primary px-6 sm:px-8 py-2 sm:py-2.5 rounded-full text-base sm:text-lg font-medium"
            >
              Explore Tokenized Assets
            </a>
          </div>

        </div>
      </main>

      {/* Stats Section */}
      <section className="stats-section px-6 md:px-8 lg:px-12 py-20 md:py-40">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <p className="stats-intro-text">Compliance-first infrastructure aligned with established legal frameworks.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-12 lg:gap-16 w-full">
            <div className="stat-item">
              <div className="stat-number">30K+</div>
              <div className="stat-label">Asset-Backed Tokens Issued</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">5+</div>
              <div className="stat-label">Blockchains Integrated</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">2023</div>
              <div className="stat-label">Live Since</div>
            </div>
          </div>
        </div>
      </section>

      {/* About Toto Finance Section */}
      <section className="about-section px-6 md:px-8 lg:px-12 py-20 md:py-40 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-gray-900 mb-6">
              A Complete Stack for Real-World Asset Tokenization
            </h2>
            <div className="max-w-4xl mx-auto text-left md:text-center">
              <p className="text-base md:text-lg lg:text-xl text-gray-700 leading-relaxed mb-4">
                Toto Finance delivers a fully integrated infrastructure built specifically for real-world assets.
              </p>
              <p className="text-base md:text-lg lg:text-xl text-gray-700 leading-relaxed mb-4">
                Unlike fragmented DeFi tools or single-asset platforms, our system connects physical commodities to compliant on-chain markets through one unified stack.
              </p>
              <p className="text-base md:text-lg lg:text-xl text-gray-700 leading-relaxed">
                Our infrastructure supports the full lifecycle of tokenized commodities, from verified sourcing and legal structuring to settlement, custody, and redemption.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Cash Section - Institutional Grade */}
      <section className="cash-section px-6 md:px-8 lg:px-12 py-20 md:py-40">
        <div className="max-w-7xl mx-auto">
          <div className="cash-grid">
            <div className="cash-left">
              <h2 className="cash-heading">Toto Rails &mdash; Programmable Asset Issuance</h2>
              <p className="cash-description mb-4">Smart infrastructure for compliant tokenization. Toto Rails is our issuance layer, allowing real-world commodities to be represented as blockchain-native assets with rules built directly into the token.</p>
              <p className="cash-description">Each asset is structured under applicable legal frameworks, ensuring ownership, transfers, and lifecycle events follow defined compliance requirements.</p>
              <div className="mt-6">
                <a
                  href="https://app.totofinance.co/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cash-cta"
                >
                  Explore Marketplace
                </a>
              </div>
            </div>

            <CashCardsSection cards={cashCards} />
          </div>
        </div>
      </section>

      {/* Toto Clear Section - Instant Settlement (Reversed: cards left, text right) */}
      <section className="cash-section px-6 md:px-8 lg:px-12 py-20 md:py-40" style={{ backgroundColor: '#F3F4F6' }}>
        <div className="max-w-7xl mx-auto">
          <div className="cash-grid">
            <CashCardsSection cards={clearCards} />

            <div className="cash-left lg:order-last">
              <h2 className="cash-heading">Toto Clear &mdash; Instant Settlement Infrastructure</h2>
              <p className="cash-description mb-4">Atomic delivery-versus-payment. Toto Clear enables near-instant settlement of tokenized commodities through atomic delivery-versus-payment mechanisms.</p>
              <p className="cash-description">By removing traditional clearing delays, Toto Clear improves liquidity, reduces risk, and enables continuous global trading.</p>
            </div>
          </div>

        </div>
      </section>

      {/* Toto Logistics Section - Custody, Redemption & Physical Link */}
      <section className="px-6 md:px-8 lg:px-12 py-20 md:py-40 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12 text-center">
            <h2 className="cash-heading">Toto Logistics &mdash; Custody, Redemption & Physical Link</h2>
            <h3 className="text-xl md:text-2xl font-light text-gray-700 mb-6">Connecting Digital Ownership to Real Assets</h3>
            <p className="text-base md:text-lg leading-relaxed mb-4" style={{ color: 'hsl(var(--travel-black) / 0.75)' }}>Toto Logistics connects on-chain ownership to real-world custody and redemption. Every tokenized commodity is linked to verified physical assets held in insured, third-party custody facilities or validated reserve structures.</p>
            <p className="text-base md:text-lg leading-relaxed" style={{ color: 'hsl(var(--travel-black) / 0.75)' }}>Redemption workflows, audits, and custody reporting are integrated directly into the infrastructure.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {logisticsCards.map((card, idx) => (
              <div key={idx} className={`${card.variant} rounded-2xl p-6`}>
                <h3 className="text-lg font-semibold mb-2" style={{ color: 'hsl(var(--travel-black))' }}>{card.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: 'hsl(var(--travel-black) / 0.7)' }}>{card.subtitle}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Multi-Chain Section */}
      <section className="px-6 md:px-8 lg:px-12 py-20 md:py-40" style={{ backgroundColor: '#F3F4F6' }}>
        <div className="max-w-7xl mx-auto">
          <div className="mb-12 text-center">
            <h2 className="cash-heading">Built for Multi-Chain Global Markets</h2>
            <h3 className="text-xl md:text-2xl font-light text-gray-700 mb-6">Interoperable by design</h3>
            <p className="text-base md:text-lg leading-relaxed mb-4" style={{ color: 'hsl(var(--travel-black) / 0.75)' }}>Toto Finance operates across multiple blockchain networks to support global liquidity and institutional adoption.</p>
            <p className="text-base md:text-lg leading-relaxed" style={{ color: 'hsl(var(--travel-black) / 0.75)' }}>Our infrastructure is chain-agnostic, allowing assets to be issued and settled where demand exists.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {multiChainCards.map((card, idx) => (
              <div key={idx} className={`${card.variant} rounded-2xl p-6`}>
                <h3 className="text-lg font-semibold mb-2" style={{ color: 'hsl(var(--travel-black))' }}>{card.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: 'hsl(var(--travel-black) / 0.7)' }}>{card.subtitle}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* On-Chain Proof of Reserves Section */}
      <section className="px-6 md:px-8 lg:px-12 py-20 md:py-40 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12 text-center">
            <h2 className="cash-heading">On-Chain Proof of Reserves & Transparency</h2>
            <h3 className="text-xl md:text-2xl font-light text-gray-700 mb-6">Verifiable asset backing. Transparency is essential for trust.</h3>
            <p className="text-base md:text-lg leading-relaxed" style={{ color: 'hsl(var(--travel-black) / 0.75)' }}>Toto Finance provides continuous verification mechanisms to ensure every token remains fully backed by real assets, without exposing sensitive operational details.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {reservesCards.map((card, idx) => (
              <div key={idx} className={`${card.variant} rounded-2xl p-6`}>
                <h3 className="text-lg font-semibold mb-2" style={{ color: 'hsl(var(--travel-black))' }}>{card.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: 'hsl(var(--travel-black) / 0.7)' }}>{card.subtitle}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enterprise-Grade Security & Governance Section */}
      <section className="px-6 md:px-8 lg:px-12 py-20 md:py-40" style={{ backgroundColor: '#F3F4F6' }}>
        <div className="max-w-7xl mx-auto">
          <div className="mb-12 text-center">
            <h2 className="cash-heading">Enterprise-Grade Security & Governance</h2>
            <h3 className="text-xl md:text-2xl font-light text-gray-700 mb-6">Built for institutional risk standards</h3>
            <p className="text-base md:text-lg leading-relaxed" style={{ color: 'hsl(var(--travel-black) / 0.75)' }}>Our infrastructure is designed to meet the security and governance expectations of professional market participants.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {securityCards.map((card, idx) => (
              <div key={idx} className={`${card.variant} rounded-2xl p-6`}>
                <h3 className="text-lg font-semibold mb-2" style={{ color: 'hsl(var(--travel-black))' }}>{card.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: 'hsl(var(--travel-black) / 0.7)' }}>{card.subtitle}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="newsletter-section pt-16 pb-0 md:pt-32 md:pb-0">
        <div className="newsletter-bg">
          <LazyVideo
            src="/videos/footer.mp4"
            fallbackImage="/hero-background/footer-backup.webp"
            fallbackAlt="Newsletter background fallback"
            className="newsletter-fallback"
            overlayClassName="newsletter-overlay"
            videoClassName="newsletter-video"
          />
          <NewsletterForm />
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
