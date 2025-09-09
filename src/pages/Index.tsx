import { useEffect, useMemo, useRef, useState } from 'react';
const Index = () => {
  const cashRef = useRef<HTMLDivElement | null>(null);
  const cashCards = useMemo(
    () => [
      {
        title: 'Regulated & Audited',
        subtitle:
          'Built under MiCA and Liechtenstein TVTG with LCX as Physical Validator.',
        variant: 'cash-card-blue',
      },
      {
        title: 'Redeemable Assets',
        subtitle:
          'Assets are stored in accredited, high-security vaults in Liechtenstein',
        variant: 'cash-card-green',
      },
      {
        title: 'Transparent Reserves',
        subtitle:
          'Live proof-of-reserves dashboards and quarterly independent audits.',
        variant: 'cash-card-purple',
      },
      {
        title: 'Simple Fees',
        subtitle:
          'Clear, upfront minting, trading, redemption, and no storage costs.',
        variant: 'cash-card-rose',
      },
    ],
    []
  );
  const visibleCashCards = useMemo(() => {
    // Show all four cards
    return cashCards;
  }, [cashCards]);
  useEffect(() => {
    const root = cashRef.current;
    if (!root) return;
    const cards = Array.from(root.querySelectorAll<HTMLElement>('.cash-card-reveal'));
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement;
            el.classList.add('cash-in');
          }
        });
      },
      { threshold: 0.2 }
    );
    cards.forEach((c, idx) => {
      c.style.transitionDelay = `${idx * 120}ms`;
      io.observe(c);
    });
    return () => io.disconnect();
  }, []);
  const heroRef = useRef<HTMLDivElement | null>(null);
  const [pastHero, setPastHero] = useState(false);

  useEffect(() => {
    const target = heroRef.current;
    if (!target) return;
    const observer = new IntersectionObserver(([entry]) => {
      setPastHero(!entry.isIntersecting);
    }, { root: null, threshold: 0, rootMargin: '-64px 0px 0px 0px' });
    observer.observe(target);
    return () => observer.disconnect();
  }, []);

  return <div className="min-h-screen w-full relative">
      {/* Navigation Bar */}
      <nav className="glass-navbar fixed top-0 left-0 right-0 z-50">
        <div className="flex justify-between items-center px-6 md:px-12 lg:px-20 py-2 md:py-1">
          {/* Brand */}
          <div className="brand-logo">
            <img src="/tiamonds.svg" alt="Tiamonds" className={`h-10 md:h-12 lg:h-14 ${pastHero ? '' : 'logo-light'}`} />
          </div>
          
          {/* Right Side CTA */}
          <button className={`glass-nav-btn ${pastHero ? '' : 'glass-nav-btn--light'} px-6 py-2.5 rounded-full text-sm font-medium tracking-wide uppercase hover:scale-105 transition-all duration-300`}>
            Launch App
          </button>
        </div>
      </nav>

      {/* Main Content */}
      <main ref={heroRef} className="relative flex flex-col items-start sm:items-center justify-center min-h-[80vh] md:min-h-screen text-left sm:text-center px-4 sm:px-6 md:px-8 lg:px-12 pt-32 md:pt-40 pb-24 md:pb-32 overflow-hidden">
        <video className="hero-video" autoPlay muted loop playsInline src="https://firebasestorage.googleapis.com/v0/b/tiamonds.firebasestorage.app/o/test-video.mp4?alt=media&token=37ed1571-934e-475c-a56c-30bb24210165"></video>
        <div className="hero-overlay"></div>
        <div className="relative z-10 max-w-5xl w-full mx-0 sm:mx-auto">
          
          {/* Hero Headings */}
          <h1 className="hero-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-travel-white mb-2">
            Total Tokenization
          </h1>
          
          <h2 className="hero-subheading text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl mb-4 sm:mb-6 md:mb-8 lg:mb-10">
            Future of Commodities
          </h2>
          
          {/* Description Section */}
          <div className="max-w-3xl w-full mx-0 sm:mx-auto mb-6 sm:mb-8 mt-6 sm:mt-8 md:mt-10 text-left sm:text-center ">
            <p className="hero-description text-sm sm:text-base md:text-lg lg:text-xl text-travel-white mb-2 text-left sm:text-center">
              The market leader in tokenized commodities, driving transparency and efficiency across industries.
            </p>
          </div>
          
          {/* Call-to-Action */}
          <div className="flex flex-col items-start sm:items-center space-y-6 mb-10 sm:mb-16">
            <button className="cta-primary px-6 sm:px-8 py-2.5 sm:py-3 rounded-full text-base sm:text-lg font-medium">
              Explore Marketplace
            </button>
          </div>
          
          
          
          {/* Social Proof Section */}
          <div className="social-proof-section mx-0 sm:mx-auto text-left sm:text-center">
            <p className="social-proof-text mb-8">
              TRUSTED BY TRAVELERS WORLDWIDE
            </p>
            <div className="w-full overflow-hidden">
              <div className="social-proof-logos">
                <div className="logo-item">Wanderlust</div>
                <div className="logo-item">TravelPro</div>
                <div className="logo-item">Explorer</div>
                <div className="logo-item">Journey</div>
                <div className="logo-item">Nomad</div>
                <div className="logo-item">Venture</div>
                <div className="logo-item">Compass</div>
                <div className="logo-item">Atlas</div>
                <div className="logo-item">Odyssey</div>
                <div className="logo-item">Roam</div>
                <div className="logo-item">Passport</div>
                <div className="logo-item">Wanderlust</div>
                <div className="logo-item">TravelPro</div>
                <div className="logo-item">Explorer</div>
                <div className="logo-item">Journey</div>
                <div className="logo-item">Nomad</div>
                <div className="logo-item">Venture</div>
                <div className="logo-item">Compass</div>
                <div className="logo-item">Atlas</div>
                <div className="logo-item">Odyssey</div>
                <div className="logo-item">Roam</div>
                <div className="logo-item">Passport</div>
              </div>
            </div>
          </div>
          
        </div>
      </main>
      
      {/* Statistics Section */}
      <section className="stats-section px-6 md:px-8 lg:px-12 py-32 md:py-40">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <p className="stats-intro-text">
              Elsewhere is building the foundation for the future of travel.
            </p>
          </div>
          
          <div className="stats-grid">
            <div className="stat-item">
              <div className="stat-number">200+</div>
              <div className="stat-label">Destinations</div>
            </div>
            
            <div className="stat-item">
              <div className="stat-number">50K</div>
              <div className="stat-label">Happy Travelers</div>
            </div>
            
            <div className="stat-item">
              <div className="stat-number">95%</div>
              <div className="stat-label">Satisfaction Rate</div>
            </div>
            
            <div className="stat-item">
              <div className="stat-number">$2.5M</div>
              <div className="stat-label">Saved in Planning</div>
            </div>
          </div>
        </div>
      </section>

      {/* Cash Management Section (new 3rd section) */}
      <section className="cash-section px-6 md:px-8 lg:px-12 py-32 md:py-40">
        <div className="max-w-7xl mx-auto">
          <div className="cash-grid">
            {/* Left copy */}
            <div className="cash-left">
              <h2 className="cash-heading">Institutional-Grade RWA Asset Management</h2>
              <p className="cash-description">
                Ensuring Transparency, Security, and Accountability in Every Transaction.
              </p>
              <div className="mt-6">
                <button className="cash-cta">Explore Marketplace</button>
              </div>
            </div>

            {/* Right cards */}
            <div className="cash-right" ref={cashRef}>
              {visibleCashCards.map((card, idx) => (
                <article
                  key={`${idx}-${card.title}`}
                  className={`cash-card ${card.variant} cash-card-reveal`}
                >
                  <div className="cash-feature">
                    <h3 className="cash-feature-title">{card.title}</h3>
                    <p className="cash-feature-sub">{card.subtitle}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="mission-section px-6 md:px-8 lg:px-12 py-32 md:py-40">
        <div className="max-w-7xl mx-auto">
          <div className="mission-grid">
            <div className="mission-content">
              <div className="mission-header">
                <p className="mission-label">Why Tiamonds</p>
              </div>
              
              <div className="mission-text">
                <h2 className="mission-heading">
                  Secure Your Future with Tokenized Investment
                </h2>
                
                <p className="mission-description">
                  Own, trade, and redeem assets, backed by real-world assets in secure custody. Seamless access and liquidity with full redemption rights, anytime
                </p>
                
                <button className="mission-cta">
                  Learn more
                </button>
              </div>
            </div>
            
            <div className="mission-image">
              <img 
                src="https://firebasestorage.googleapis.com/v0/b/tiamonds.firebasestorage.app/o/tiamonds%20test%2001.png?alt=media&token=a3b7bbdc-da42-4130-8e14-4a8fe67ad901" 
                alt="Beautiful travel destination with mountains and pristine waters"
                className="mission-img"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="experience-section px-6 md:px-8 lg:px-12 py-32 md:py-40">
        <div className="max-w-7xl mx-auto">
          <div className="experience-grid">
            <div className="experience-image">
              <img 
                src="https://firebasestorage.googleapis.com/v0/b/tiamonds.firebasestorage.app/o/tiamonds%20test%2002.png?alt=media&token=0859db5d-8be3-4d90-b9c6-8ef057c4c542" 
                alt="Experience visual"
                className="experience-img"
              />
            </div>
            
            <div className="experience-content">
              <div className="experience-header">
                <p className="experience-label">How it works</p>
              </div>
              
              <div className="experience-text">
                <h2 className="experience-heading">
                  We Make Your Perfect Investment Smart
                </h2>
                
                <p className="experience-description">
                  Seamlessly plan your journey with our AI-driven platform that tailors every experience to match your personal preferences.
                </p>
                
                <button className="experience-cta">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Traveler Categories Section */}
      <section className="categories-section px-6 md:px-8 lg:px-12 py-32 md:py-40">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="categories-heading">
              Explore Commodities
            </h2>
          </div>
          
          {/* Top row: 4 smaller cards */}
          <div className="categories-grid-4">
            <div className="category-card category-card-sm group">
              <img 
                src="/lovable-uploads/explorer-travel.jpg" 
                alt="Adventure explorer in mountain landscape"
                className="category-card-bg"
              />
              <div className="category-overlay"></div>
              <div className="category-card-content">
                <h3 className="category-title">Gold</h3>
                <p className="category-description">Own LBMA-grade gold on-chain.</p>
              </div>
            </div>
            
            <div className="category-card category-card-sm group">
              <img 
                src="/lovable-uploads/luxury-travel.jpg" 
                alt="Luxury traveler in premium resort setting"
                className="category-card-bg"
              />
              <div className="category-overlay"></div>
              <div className="category-card-content">
                <h3 className="category-title">Silver</h3>
                <p className="category-description">Tokenized 1kg silver bars.</p>
              </div>
            </div>
            
            <div className="category-card category-card-sm group">
              <img 
                src="/lovable-uploads/concierge-travel.jpg" 
                alt="VIP traveler with personal concierge service"
                className="category-card-bg"
              />
              <div className="category-overlay"></div>
              <div className="category-card-content">
                <h3 className="category-title">Platinum</h3>
                <p className="category-description">Rare and valuable with real-world backing</p>
              </div>
            </div>

            <div className="category-card category-card-sm group">
              <img 
                src="/lovable-uploads/mission-travel.jpg" 
                alt="Family-friendly scenic destination"
                className="category-card-bg"
              />
              <div className="category-overlay"></div>
              <div className="category-card-content">
                <h3 className="category-title">Diamond</h3>
                <p className="category-description">GIA-certified stones</p>
              </div>
            </div>
          </div>

          {/* Bottom row: 3 shorter cards */}
          <div className="categories-grid-3">
            <div className="category-card category-card-short group">
              <img 
                src="/lovable-uploads/experience-travel.jpg" 
                alt="Cultural travel experience"
                className="category-card-bg"
              />
              <div className="category-overlay"></div>
              <div className="category-card-content">
                <h3 className="category-title">Carbon credit</h3>
                <p className="category-description">Registry-integrated credits.</p>
              </div>
            </div>

            <div className="category-card category-card-short group">
              <img 
                src="/lovable-uploads/urban-architecture.jpg" 
                alt="Business travel in a modern city"
                className="category-card-bg"
              />
              <div className="category-overlay"></div>
              <div className="category-card-content">
                <h3 className="category-title">Energy</h3>
                <p className="category-description">Solar and renewable credits</p>
              </div>
            </div>

            <div className="category-card category-card-short group">
              <img 
                src="/lovable-uploads/concierge-travel.jpg" 
                alt="Investor-focused luxury experience"
                className="category-card-bg"
              />
              <div className="category-overlay"></div>
              <div className="category-card-content">
                <h3 className="category-title">Agriculture</h3>
                <p className="category-description">Tokenized crops and warrants</p>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <button className="categories-cta">
              Launch App
              <svg className="categories-cta-icon" viewBox="0 0 17 17" fill="none">
                <path d="M14.446 2.083L4.779 2.083C4.365 2.083 4.029 2.419 4.029 2.833C4.029 3.247 4.365 3.583 4.779 3.583L12.635 3.583L2.582 13.636C2.289 13.929 2.289 14.404 2.582 14.697C2.875 14.99 3.35 14.99 3.643 14.697L13.696 4.644L13.696 12.5C13.696 12.914 14.031 13.25 14.446 13.25C14.86 13.25 15.196 12.914 15.196 12.5L15.196 2.833C15.196 2.419 14.86 2.083 14.446 2.083Z" fill="currentColor"/>
              </svg>
            </button>
          </div>
        </div>
      </section>

      {/* Platform Section */}
      <section className="platform-section px-6 md:px-8 lg:px-12 py-32 md:py-40">
        <div className="max-w-7xl mx-auto">
          <div className="platform-grid">
            <div className="platform-content">
              <div className="platform-header">
                <p className="platform-label">TOTO Token</p>
              </div>

              <div className="platform-text">
                <h2 className="platform-heading">
                  Utility that lowers your costs and raises your limits.
                </h2>

                <p className="platform-description">
                  Stake TOTO to reduce fees, unlock higher redemption limits, and gain priority access to scarce assets.
                </p>

                <button className="platform-cta">
                  Learn more
                </button>
              </div>
            </div>

            <div className="platform-visual">
              <div className="platform-image">
                <img
                  src="/lovable-uploads/urban-architecture.jpg"
                  alt="Elsewhere global platform visual"
                  className="platform-img"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section className="resources-section px-6 md:px-8 lg:px-12 py-32 md:py-40">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="resources-heading">
              Resources
            </h2>
            <p className="resources-subtitle">
              See the Latest from Elsewhere
            </p>
          </div>
          
          <div className="resources-tabs mb-12">
            <button className="tab-btn active">
              Travel Insights
            </button>
            <button className="tab-btn">
              Destination Guides
            </button>
          </div>
          
          <div className="blog-marquee">
            <div className="blog-marquee-track">
              {/* Blog Card 1 */}
              <article className="blog-card blog-card--marquee">
                <div className="blog-card-image-wrapper">
                  <img src="/lovable-uploads/explorer-travel.jpg" alt="Japan Travel Guide" className="blog-card-image" />
                </div>
                <div className="blog-card-body">
                  <h3 className="blog-title">Japan Travel Guide</h3>
                  <p className="blog-excerpt">
                    Cherry blossoms, timeless temples, and street food adventures across Tokyo, Kyoto, and beyond. A quick-start guide for your next Japan trip.
                  </p>
                  <a href="#" className="blog-read-more">
                    Read article
                    <svg viewBox="0 0 17 17" fill="none">
                      <path d="M14.446 2.083L4.779 2.083C4.365 2.083 4.029 2.419 4.029 2.833C4.029 3.247 4.365 3.583 4.779 3.583L12.635 3.583L2.582 13.636C2.289 13.929 2.289 14.404 2.582 14.697C2.875 14.99 3.35 14.99 3.643 14.697L13.696 4.644L13.696 12.5C13.696 12.914 14.031 13.25 14.446 13.25C14.86 13.25 15.196 12.914 15.196 12.5L15.196 2.833C15.196 2.419 14.86 2.083 14.446 2.083Z" fill="currentColor"/>
                    </svg>
                  </a>
                </div>
              </article>

              {/* Blog Card 2 */}
              <article className="blog-card blog-card--marquee">
                <div className="blog-card-image-wrapper">
                  <img src="/lovable-uploads/luxury-travel.jpg" alt="Luxury Stay Partners with Global Hotels" className="blog-card-image" />
                </div>
                <div className="blog-card-body">
                  <h3 className="blog-title">Luxury Stay Partners with Global Hotels</h3>
                  <p className="blog-excerpt">
                    Access premium stays, spa experiences, and VIP services across 50+ destinations through our newest partnership expansion.
                  </p>
                  <a href="#" className="blog-read-more">
                    Read article
                    <svg viewBox="0 0 17 17" fill="none">
                      <path d="M14.446 2.083L4.779 2.083C4.365 2.083 4.029 2.419 4.029 2.833C4.029 3.247 4.365 3.583 4.779 3.583L12.635 3.583L2.582 13.636C2.289 13.929 2.289 14.404 2.582 14.697C2.875 14.99 3.35 14.99 3.643 14.697L13.696 4.644L13.696 12.5C13.696 12.914 14.031 13.25 14.446 13.25C14.86 13.25 15.196 12.914 15.196 12.5L15.196 2.833C15.196 2.419 14.86 2.083 14.446 2.083Z" fill="currentColor"/>
                    </svg>
                  </a>
                </div>
              </article>

              {/* Blog Card 3 */}
              <article className="blog-card blog-card--marquee">
                <div className="blog-card-image-wrapper">
                  <img src="/lovable-uploads/concierge-travel.jpg" alt="AI Recommendations Now Live Globally" className="blog-card-image" />
                </div>
                <div className="blog-card-body">
                  <h3 className="blog-title">AI Recommendations Now Live Globally</h3>
                  <p className="blog-excerpt">
                    Personalized itineraries are now available worldwide, matching your interests to unforgettable moments wherever you go.
                  </p>
                  <a href="#" className="blog-read-more">
                    Read article
                    <svg viewBox="0 0 17 17" fill="none">
                      <path d="M14.446 2.083L4.779 2.083C4.365 2.083 4.029 2.419 4.029 2.833C4.029 3.247 4.365 3.583 4.779 3.583L12.635 3.583L2.582 13.636C2.289 13.929 2.289 14.404 2.582 14.697C2.875 14.99 3.35 14.99 3.643 14.697L13.696 4.644L13.696 12.5C13.696 12.914 14.031 13.25 14.446 13.25C14.86 13.25 15.196 12.914 15.196 12.5L15.196 2.833C15.196 2.419 14.86 2.083 14.446 2.083Z" fill="currentColor"/>
                    </svg>
                  </a>
                </div>
              </article>

              {/* Duplicate set for seamless scroll */}
              <article className="blog-card blog-card--marquee">
                <div className="blog-card-image-wrapper">
                  <img src="/lovable-uploads/explorer-travel.jpg" alt="Japan Travel Guide" className="blog-card-image" />
                </div>
                <div className="blog-card-body">
                  <h3 className="blog-title">Japan Travel Guide</h3>
                  <p className="blog-excerpt">Cherry blossoms, timeless temples, and street food adventures across Tokyo, Kyoto, and beyond. A quick-start guide for your next Japan trip.</p>
                  <a href="#" className="blog-read-more">
                    Read article
                    <svg viewBox="0 0 17 17" fill="none"><path d="M14.446 2.083L4.779 2.083C4.365 2.083 4.029 2.419 4.029 2.833C4.029 3.247 4.365 3.583 4.779 3.583L12.635 3.583L2.582 13.636C2.289 13.929 2.289 14.404 2.582 14.697C2.875 14.99 3.35 14.99 3.643 14.697L13.696 4.644L13.696 12.5C13.696 12.914 14.031 13.25 14.446 13.25C14.86 13.25 15.196 12.914 15.196 12.5L15.196 2.833C15.196 2.419 14.86 2.083 14.446 2.083Z" fill="currentColor"/></svg>
                  </a>
                </div>
              </article>

              <article className="blog-card blog-card--marquee">
                <div className="blog-card-image-wrapper">
                  <img src="/lovable-uploads/luxury-travel.jpg" alt="Luxury Stay Partners with Global Hotels" className="blog-card-image" />
                </div>
                <div className="blog-card-body">
                  <h3 className="blog-title">Luxury Stay Partners with Global Hotels</h3>
                  <p className="blog-excerpt">Access premium stays, spa experiences, and VIP services across 50+ destinations through our newest partnership expansion.</p>
                  <a href="#" className="blog-read-more">
                    Read article
                    <svg viewBox="0 0 17 17" fill="none"><path d="M14.446 2.083L4.779 2.083C4.365 2.083 4.029 2.419 4.029 2.833C4.029 3.247 4.365 3.583 4.779 3.583L12.635 3.583L2.582 13.636C2.289 13.929 2.289 14.404 2.582 14.697C2.875 14.99 3.35 14.99 3.643 14.697L13.696 4.644L13.696 12.5C13.696 12.914 14.031 13.25 14.446 13.25C14.86 13.25 15.196 12.914 15.196 12.5L15.196 2.833C15.196 2.419 14.86 2.083 14.446 2.083Z" fill="currentColor"/></svg>
                  </a>
                </div>
              </article>

              <article className="blog-card blog-card--marquee">
                <div className="blog-card-image-wrapper">
                  <img src="/lovable-uploads/concierge-travel.jpg" alt="AI Recommendations Now Live Globally" className="blog-card-image" />
                </div>
                <div className="blog-card-body">
                  <h3 className="blog-title">AI Recommendations Now Live Globally</h3>
                  <p className="blog-excerpt">Personalized itineraries are now available worldwide, matching your interests to unforgettable moments wherever you go.</p>
                  <a href="#" className="blog-read-more">
                    Read article
                    <svg viewBox="0 0 17 17" fill="none"><path d="M14.446 2.083L4.779 2.083C4.365 2.083 4.029 2.419 4.029 2.833C4.029 3.247 4.365 3.583 4.779 3.583L12.635 3.583L2.582 13.636C2.289 13.929 2.289 14.404 2.582 14.697C2.875 14.99 3.35 14.99 3.643 14.697L13.696 4.644L13.696 12.5C13.696 12.914 14.031 13.25 14.446 13.25C14.86 13.25 15.196 12.914 15.196 12.5L15.196 2.833C15.196 2.419 14.86 2.083 14.446 2.083Z" fill="currentColor"/></svg>
                  </a>
                </div>
              </article>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <button className="resources-cta">
              Explore Insights
            </button>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="newsletter-section py-32 md:py-40">
        <div className="newsletter-bg">
          <video
            className="newsletter-video"
            autoPlay
            muted
            loop
            playsInline
            src="https://framerusercontent.com/assets/sSwM1re36kMMZd5gcHruIAdEHRI.mp4"
          ></video>
          <div className="newsletter-overlay"></div>
          <div className="relative z-10 max-w-4xl mx-auto text-center px-6 md:px-8 lg:px-12">
            <h2 className="newsletter-heading">
              The Future of Travel
            </h2>
            <p className="newsletter-subtitle">
              Subscribe for the latest destinations,<br />
              insights, and travel news.
            </p>
            
            <div className="newsletter-form">
              <input 
                type="email" 
                placeholder="Email"
                className="newsletter-input"
              />
              <button className="newsletter-btn">
                Sign Up
              </button>
            </div>
            
            <div className="newsletter-social">
              <a href="#" className="social-link" aria-label="Twitter">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              <a href="#" className="social-link" aria-label="GitHub">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
              <a href="#" className="social-link" aria-label="Telegram">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M9.78 18.65l.28-4.23 7.68-6.92c.34-.31-.07-.46-.52-.19L7.74 13.3 3.64 12c-.88-.25-.89-.86.2-1.3l15.97-6.16c.73-.33 1.43.18 1.15 1.3l-2.72 12.81c-.19.91-.74 1.13-1.5.71L12.6 16.3l-1.99 1.93c-.23.23-.42.42-.83.42z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer-section px-6 md:px-8 lg:px-12 py-32 md:py-40">
        <div className="max-w-7xl mx-auto">
          <div className="footer-grid">
            <div className="footer-column">
              <h3 className="footer-heading">Travel</h3>
              <ul className="footer-links">
                <li><a href="#" className="footer-link">Destinations</a></li>
                <li><a href="#" className="footer-link">Experiences</a></li>
                <li><a href="#" className="footer-link">AI Planner</a></li>
                <li><a href="#" className="footer-link">Bookings</a></li>
              </ul>
            </div>
            
            <div className="footer-column">
              <h3 className="footer-heading">Partners</h3>
              <ul className="footer-links">
                <li><a href="#" className="footer-link">Travel Network</a></li>
                <li><a href="#" className="footer-link">Hotels <span className="external-icon">↗</span></a></li>
                <li><a href="#" className="footer-link">Airlines <span className="external-icon">↗</span></a></li>
              </ul>
            </div>
            
            <div className="footer-column">
              <h3 className="footer-heading">Explore</h3>
              <ul className="footer-links">
                <li><a href="#" className="footer-link">Travel Insights</a></li>
                <li><a href="#" className="footer-link">Travel Guides <span className="external-icon">↗</span></a></li>
                <li><a href="#" className="footer-link">Safety & Security <span className="external-icon">↗</span></a></li>
                <li><a href="#" className="footer-link">Travel Tips <span className="external-icon">↗</span></a></li>
              </ul>
            </div>
            
            <div className="footer-column">
              <h3 className="footer-heading">Company</h3>
              <ul className="footer-links">
                <li><a href="#" className="footer-link">Our Team</a></li>
                <li><a href="#" className="footer-link">Careers <span className="external-icon">↗</span></a></li>
                <li><a href="#" className="footer-link">Press Kit <span className="external-icon">↗</span></a></li>
                <li><a href="#" className="footer-link">Contact Us</a></li>
              </ul>
            </div>
          </div>
          
          <div className="footer-bottom">
            <div className="footer-brand">
              <span className="brand-logo">Elsewhere™</span>
            </div>
            <div className="footer-legal">
              <a href="#" className="legal-link">Privacy Policy</a>
              <a href="#" className="legal-link">Terms of Service</a>
              <a href="#" className="legal-link">Cookie Policy</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Brand Section */}
      <section className="brand-section px-6 md:px-8 lg:px-12 py-28 md:py-36">
        <div className="max-w-7xl mx-auto">
          <div className="brand-content">
            <h1 className="brand-text">Tiamonds Finance</h1>
          </div>
          
          <div className="brand-footer">
            <div className="brand-footer-left">
              <span className="brand-copyright">Tiamonds © 2025</span>
              <a href="#" className="brand-footer-link">Terms of Service</a>
              <a href="#" className="brand-footer-link">Privacy Policy</a>
            </div>
            
            <div className="brand-footer-right">
              <a href="#" className="brand-social-link" aria-label="Twitter">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              <a href="#" className="brand-social-link" aria-label="GitHub">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
              <a href="#" className="brand-social-link" aria-label="Telegram">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M9.78 18.65l.28-4.23 7.68-6.92c.34-.31-.07-.46-.52-.19L7.74 13.3 3.64 12c-.88-.25-.89-.86.2-1.3l15.97-6.16c.73-.33 1.43.18 1.15 1.3l-2.72 12.81c-.19.91-.74 1.13-1.5.71L12.6 16.3l-1.99 1.93c-.23.23-.42.42-.83.42z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>;
};
export default Index;