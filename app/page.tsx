// Server Component (NO "use client")
import { Navigation } from './components/Navigation';
import { VideoBackground } from './components/client/VideoBackground';
import { LazyVideo } from './components/client/LazyVideo';
import dynamicImport from 'next/dynamic';
import { PageStructuredData } from './components/PageStructuredData';
import { BreadcrumbStructuredData } from './components/BreadcrumbStructuredData';
import { TrustComplianceBar } from './components/TrustComplianceBar';
import Image from 'next/image';

// Dynamic imports for heavy components - loaded only when needed
// Note: These are client components, so they'll be code-split automatically
const StatsCounter = dynamicImport(() => import('./components/client/StatsCounter').then(mod => ({ default: mod.StatsCounter })), {
  loading: () => <div className="stats-section-loading" />,
});

const AnimatedSection = dynamicImport(() => import('./components/client/AnimatedSection').then(mod => ({ default: mod.AnimatedSection })));

const DescriptionRotator = dynamicImport(() => import('./components/client/DescriptionRotator').then(mod => ({ default: mod.DescriptionRotator })));

const CashCardsSection = dynamicImport(() => import('./components/client/CashCardsSection').then(mod => ({ default: mod.CashCardsSection })));

const GradualBlur = dynamicImport(() => import('../src/components/GradualBlur'));

const NewsletterForm = dynamicImport(() => import('./components/NewsletterForm'));

const Footer = dynamicImport(() => import('./components/Footer'));

// Lazy load blog section - it's below the fold and has many images
const BlogSection = dynamicImport(() => import('./components/client/BlogSection').then(mod => ({ default: mod.BlogSection })), {
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
    title: 'MiCA Registered & Hacken Audited',
    subtitle: 'MiCA ESMA registered. Smart contracts audited by Hacken (Jan 2025). Physical validation by LCX under Liechtenstein TVTG.',
    variant: 'cash-card-blue',
  },
  {
    title: 'Redeemable Assets',
    subtitle: 'All tokenized commodities are linked to insured vaults, warehouses, or custody providers, with physical redemption available on demand.',
    variant: 'cash-card-green',
  },
  {
    title: 'Transparent Reserves',
    subtitle: 'On-chain proof-of-reserves, oracle verification, and third-party audits ensure continuous 1:1 asset backing.',
    variant: 'cash-card-purple',
  },
  {
    title: 'Programmable Compliance',
    subtitle: 'Smart contracts enforce KYC/AML, transfer permissions, jurisdictional rules, and regulatory controls at protocol level.',
    variant: 'cash-card-rose',
  },
];

const statsData = [
  { key: 'assets', value: 30, suffix: 'K', label: 'Assets Enabled' },
  { key: 'blockchains', value: 5, suffix: '+', label: 'Blockchains Supported' },
  { key: 'participants', value: 50, suffix: 'K+', label: 'Global Participants' },
];

const marketStatsData = [
  { key: 'commodityTrade', value: 53, prefix: '$', suffix: 'T', label: 'Global Commodity Trade (Annual)' },
  { key: 'dailySettlement', value: 100, prefix: '$', suffix: 'B+', label: 'Daily Global Commodity Settlement' },
  { key: 'tokenizedMarket', value: 16, prefix: '$', suffix: 'T', label: 'Projected Tokenized Assets Market' },
];

const bottomStatsData = [
  { key: 'tokenizedToday', value: 0.1, prefix: '<', suffix: '%', label: 'Assets Tokenized Today', isDecimal: true },
  { key: 'preciousMetals', value: 12, prefix: '$', suffix: 'T+', label: 'Precious Metals Market' },
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


export default function HomePage() {
  return (
    <div className="min-h-screen w-full relative">
      {/* Structured Data */}
      <PageStructuredData
        title="Toto Finance — Tokenizing Real-World Assets Globally"
        description="Toto Finance enables secure digital ownership of commodities, gems, and energy with trusted real-asset tokenization."
        url="https://totofinance.co"
        pageType="WebPage"
        breadcrumbItems={[{ name: 'Home', item: 'https://totofinance.co' }]}
      />
      <BreadcrumbStructuredData items={[{ name: 'Home', item: 'https://totofinance.co' }]} />

      {/* Gradual Blur Effect */}
      <GradualBlur preset="page-footer" strength={2} height="4rem" animated="scroll" duration="0.5s" />

      {/* Navigation */}
      <Navigation />

      {/* Hero Section */}
      <main className="hero-container relative flex flex-col items-start sm:items-center justify-center min-h-[90vh] md:min-h-screen text-left sm:text-center px-4 sm:px-6 md:px-8 lg:px-12 pt-32 md:pt-40 pb-24 md:pb-32 overflow-hidden">
        {/* Server-rendered LCP image with fetchpriority - responsive images for optimal loading */}
        {/* Desktop: 1504x846 (2x for retina at 752x423), Mobile: 480x850 */}
        {/* Hero background image - native img with width/height to prevent layout calculation delay */}
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
          <h1 className="hero-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-travel-white mb-2">
            Toto Finance
          </h1>
          <h2 className="hero-subheading text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl mb-4 sm:mb-6 md:mb-8 lg:mb-10">
            The Global Infrastructure for Tokenized Commodities
          </h2>

          <div className="max-w-3xl w-full mx-0 sm:mx-auto mb-6 sm:mb-8 mt-6 sm:mt-8 md:mt-10 text-left sm:text-center">
            <p className="hero-description text-sm sm:text-base md:text-lg lg:text-xl text-travel-white mb-2 text-left sm:text-center">
              Toto Finance is building the digital infrastructure for tokenized commodities - enabling asset-backed ownership, instant settlement, and compliant global trade across metals, energy, and real-world assets.
            </p>
          </div>

          <div className="flex flex-col items-start sm:items-center space-y-6 mb-10 sm:mb-16">
            <a
              href="https://app.totofinance.co/"
              target="_blank"
              rel="noopener noreferrer"
              className="cta-primary px-6 sm:px-8 py-2 sm:py-2.5 rounded-full text-base sm:text-lg font-medium"
            >
              Explore Global Markets
            </a>
          </div>

          {/* Partner Logos */}
          <div className="social-proof-section mx-0 sm:mx-auto text-left sm:text-center mt-6 sm:mt-10">
            <p className="social-proof-text mb-8">TRUSTED BY</p>
            <div className="w-full overflow-hidden">
              <div className="social-proof-logos">
                {[...partnerLogos, ...partnerLogos].map((name, idx) => (
                  <div className="logo-item" key={`pl-${idx}-${name}`}>
                    <img
                      src={`/logo/${name}`}
                      alt={name.replace(/\.[^/.]+$/, '')}
                      width={120}
                      height={40}
                      loading="lazy"
                      className={`${
                        ['Solana (1).svg', 'Xrp.svg'].includes(name)
                          ? 'h-4 sm:h-5'
                          : ['Uniswap.svg', 'Coingecko.svg'].includes(name)
                          ? 'h-6 sm:h-8'
                          : 'h-5 sm:h-6'
                      } opacity-80 hover:opacity-100 transition`}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Stats Section */}
      <section className="stats-section px-6 md:px-8 lg:px-12 py-20 md:py-40">
        <div className="max-w-7xl mx-auto">
          <StatsCounter
            stats={statsData}
            introText="Toto Finance is building the infrastructure layer for tokenized global commodities."
          />

          <div className="col-span-2 md:col-span-3 mb-0 md:mb-0 mt-12">
            <p className="stats-intro-text">Commodity tokenization market signals.</p>
          </div>

          <StatsCounter stats={marketStatsData} />

          <div className="col-span-2 md:col-span-3 mb-0 md:mb-0 mt-12">
            <p className="stats-intro-text">Bottom Metrics (Why Now)</p>
          </div>

          <StatsCounter stats={bottomStatsData} />
        </div>
      </section>

      {/* TNFTs Section */}
      <section className="tnfts-section px-6 md:px-8 lg:px-12 py-16 md:py-32">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8 md:mb-12">
            <h2 className="tnfts-heading text-left">Tokenized Commodities, Live on Global Markets</h2>
            <p className="text-base md:text-lg lg:text-xl text-gray-700 mt-4 md:mt-6 max-w-3xl">
              Access real-world, asset-backed commodities across metals, gemstones, energy, and environmental assets tokenized for instant settlement, transparent ownership, and compliant global trade.
            </p>
          </div>

          <div className="tnfts-marquee">
            <div className="tnfts-track">
              {tnftCards.map((_, idx) => (
                <div className="tnft-card" key={idx}>
                  <Image
                    src={tnftImages[idx % tnftImages.length]}
                    alt="TNFT preview"
                    width={74}
                    height={112}
                    className="tnft-card-img"
                    loading="lazy"
                    quality={80}
                    sizes="74px"
                    unoptimized
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="tnfts-more-wrap">
            <a
              href="https://app.totofinance.co/"
              target="_blank"
              rel="noopener noreferrer"
              className="tnfts-more"
              aria-label="Explore Markets"
            >
              <span className="tnfts-more-text">Explore Markets</span>
              <svg viewBox="0 0 17 17" fill="none" className="tnfts-more-icon">
                <path
                  d="M14.446 2.083L4.779 2.083C4.365 2.083 4.029 2.419 4.029 2.833C4.029 3.247 4.365 3.583 4.779 3.583L12.635 3.583L2.582 13.636C2.289 13.929 2.289 14.404 2.582 14.697C2.875 14.99 3.35 14.99 3.643 14.697L13.696 4.644L13.696 12.5C13.696 12.914 14.031 13.25 14.446 13.25C14.86 13.25 15.196 12.914 15.196 12.5L15.196 2.833C15.196 2.419 14.86 2.083 14.446 2.083Z"
                  fill="currentColor"
                />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Cash Section - Institutional Grade */}
      <section className="cash-section px-6 md:px-8 lg:px-12 py-20 md:py-40">
        <div className="max-w-7xl mx-auto">
          <div className="cash-grid">
            <div className="cash-left">
              <h2 className="cash-heading">Institutional-Grade Commodity Tokenization</h2>
              <p className="cash-description">Trust, compliance, and transparency embedded at the protocol level.</p>
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

      {/* Mission Section */}
      <section className="mission-section px-6 md:px-8 lg:px-12 py-20 md:py-40">
        <div className="max-w-7xl mx-auto">
          <div className="mission-grid">
            <div className="mission-content">
              <div className="mission-header">
                <p className="mission-label">Why Toto Finance</p>
              </div>
              <div className="mission-text">
                <h2 className="mission-heading">Redefining How Commodities Trade</h2>
                <p className="mission-description">
                  Toto Finance introduces the infrastructure layer for tokenized commodities enabling T+0 settlement, 24/7 global markets, programmable ownership, and on-chain liquidity for assets traditionally constrained by manual processes, intermediaries, and settlement delays.
                </p>
              </div>
              <a
                href="https://totofinance.co/blog/post/the-rwa-momentum-why-real-world-assets-are-redefining-crypto/"
                target="_blank"
                rel="noopener noreferrer"
                className="mission-cta"
              >
                Learn about RWA Infrastructure
              </a>
            </div>
            <div className="mission-image">
              <Image
                src="/assets/images/mission-infrastructure.webp"
                alt="Toto Finance tokenization platform infrastructure"
                className="mission-img"
                width={800}
                height={600}
                loading="lazy"
                quality={75}
                sizes="(max-width: 1024px) 100vw, 800px"
                unoptimized
              />
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section - How It Works */}
      <section className="experience-section px-6 md:px-8 lg:px-12 py-20 md:py-40">
        <div className="max-w-7xl mx-auto">
          <div className="experience-grid">
            <div className="experience-image relative">
              <Image
                src="/assets/images/experience-tokenization.png"
                alt="Toto Finance asset tokenization experience"
                fill
                className="experience-img object-cover"
                sizes="100vw"
                unoptimized
              />
            </div>
            <div className="experience-content">
              <div className="experience-header">
                <p className="experience-label">How it works</p>
              </div>
              <div className="experience-text">
                <h2 className="experience-heading">End-to-End Commodity Tokenization</h2>
                <p className="experience-description-container text-gray-700 leading-relaxed">
                  Settle and deliver with Toto Clear atomic delivery-versus-payment for tokenized commodities using stablecoins. Hold, redeem, or re-trade assets with settlement, custody, logistics, and regulatory compliance automated on-chain via oracle infrastructure.
                </p>
                <a
                  href="https://totofinance.co/blog/post/blockchain-in-rwa-tokenization/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="experience-cta"
                >
                  Learn about RWA tokenization
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Platform Section - TOTO Token */}
      <section className="platform-section px-6 md:px-8 lg:px-12 py-20 md:py-40">
        <div className="max-w-7xl mx-auto">
          <div className="platform-grid">
            <div className="platform-content">
              <div className="platform-header">
                <p className="platform-label">Toto Token</p>
              </div>
              <div className="platform-text">
                <h2 className="platform-heading">The TOTO Token</h2>
                <h3 className="platform-subheading">Powering the Open Commodity Economy</h3>
                <p className="platform-intro-description">
                  The TOTO token is the universal utility powering tokenization, settlement, fees, and access across the Toto Finance ecosystem.
                </p>
                <div className="platform-description-container">
                  <DescriptionRotator
                    descriptions={totoTokenDescriptions}
                    interval={4000}
                    boldTerms={['Lower Fees', 'Higher Limits', 'Priority Access', 'Rewards']}
                  />
                </div>
                <a
                  href="https://totofinance.co/blog/post/an-overview-of-tokenized-commodities/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="platform-cta"
                >
                  Learn about tokenized commodities
                </a>
              </div>
            </div>
            <div className="platform-visual">
              <div className="platform-image">
                <Image
                  src="/lovable-uploads/urban-architecture.webp"
                  alt="TOTO Token platform visual"
                  className="platform-img"
                  width={800}
                  height={600}
                  loading="lazy"
                  quality={75}
                  sizes="(max-width: 1024px) 100vw, 800px"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Toto Finance Section */}
      <section className="about-section px-6 md:px-8 lg:px-12 py-20 md:py-40 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-gray-900 mb-6">
              About Toto Finance
            </h2>
            <div className="max-w-4xl mx-auto text-left md:text-center">
              <p className="text-base md:text-lg lg:text-xl text-gray-700 leading-relaxed mb-4">
                Toto Finance pioneered the world&apos;s first tokenized diamond marketplace now the largest globally, with over 30,000 certified diamonds live on-chain. Founded in Liechtenstein, Toto Finance delivers institutional-grade infrastructure for tokenized commodities with transparency, compliance, and global access by design.
              </p>
              <p className="text-base md:text-lg lg:text-xl text-gray-700 leading-relaxed">
                Today, Toto Finance is expanding that proven foundation across the $25 trillion global commodity market, including gold, silver, copper, lithium, rare earth minerals, and energy. Beyond vault-held assets, Toto Finance tokenizes in-ground reserves, unlocking liquidity for producers and enabling early exposure to the resources powering AI data centers, energy transition, and critical supply chains.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Trust & Compliance Bar — E-E-A-T signals */}
      <TrustComplianceBar variant="light" />

      {/* Resources/Blog Section - Lazy loaded */}
      <BlogSection />

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
