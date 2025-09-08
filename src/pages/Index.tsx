import { Lock } from 'lucide-react';
const Index = () => {
  return <div className="min-h-screen w-full relative hero-background">
      {/* Navigation Bar */}
      <nav className="absolute top-0 left-0 right-0 z-50">
        <div className="flex justify-between items-center px-6 md:px-12 lg:px-20 py-8">
          {/* Brand */}
          <div className="brand-logo">
            Elsewhere™
          </div>
          
          {/* Center Navigation - Hidden on mobile */}
          <div className="hidden md:flex space-x-8 lg:space-x-12">
            <a href="#explore" className="nav-link">
              EXPLORE
            </a>
            <a href="#features" className="nav-link">
              FEATURES
            </a>
            <a href="#stories" className="nav-link">
              STORIES
            </a>
            <a href="#resources" className="nav-link">
              RESOURCES
            </a>
          </div>
          
          {/* Right Side CTA */}
          <button className="glass-nav-btn px-6 py-2.5 rounded-full text-sm font-medium tracking-wide uppercase text-travel-white hover:scale-105 transition-all duration-300">
            GET STARTED
          </button>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex flex-col items-center justify-center min-h-screen text-center px-6 md:px-8 lg:px-12">
        <div className="max-w-5xl mx-auto pt-12">
          
          {/* Hero Headings */}
          <h1 className="hero-heading text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-travel-white mb-4">
            Travel without limits.
          </h1>
          
          <h2 className="hero-subheading text-4xl md:text-5xl lg:text-6xl xl:text-7xl mb-48">
            Discover with intelligence.
          </h2>
          
          {/* Description Section */}
          <div className="max-w-3xl mx-auto mb-8 mt-16 ">
            <p className="hero-description text-base md:text-lg lg:text-xl text-travel-white mb-2">
              Our AI-powered journeys adapt to you — your pace, your mood, your sense of wonder.
            </p>
            <p className="hero-description-secondary text-base md:text-lg lg:text-xl">
              Every trip is personalized, effortless, and truly yours.
            </p>
          </div>
          
          {/* Call-to-Action */}
          <div className="flex flex-col items-center space-y-6 mb-16">
            <button className="cta-primary px-8 py-3 rounded-full text-lg font-medium">
              Build my trip now
            </button>
          </div>
          
          {/* Privacy Notice */}
          <div className="flex items-center justify-center space-x-2 privacy-notice mb-16">
            <Lock size={12} className="text-glass-white-60" />
            <span>PRIVACY-FIRST. NO DATA RESOLD.</span>
          </div>
          
          {/* Social Proof Section */}
          <div className="social-proof-section">
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
      <section className="stats-section px-6 md:px-8 lg:px-12 py-16 md:py-24">
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

      {/* Mission Section */}
      <section className="mission-section px-6 md:px-8 lg:px-12 py-16 md:py-24">
        <div className="max-w-7xl mx-auto">
          <div className="mission-grid">
            <div className="mission-content">
              <div className="mission-header">
                <p className="mission-label">MISSION</p>
              </div>
              
              <div className="mission-text">
                <h2 className="mission-heading">
                  Democratizing travel experiences, starting from just your next adventure.
                </h2>
                
                <p className="mission-description">
                  Through AI-powered personalization, Elsewhere provides access to the world's most unique experiences via next-generation travel technology that bridges local culture with digital convenience.
                </p>
                
                <button className="mission-cta">
                  Explore Destinations
                </button>
              </div>
            </div>
            
            <div className="mission-image">
              <img 
                src="/lovable-uploads/mission-travel.jpg" 
                alt="Beautiful travel destination with mountains and pristine waters"
                className="mission-img"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="experience-section px-6 md:px-8 lg:px-12 py-16 md:py-24">
        <div className="max-w-7xl mx-auto">
          <div className="experience-grid">
            <div className="experience-image">
              <img 
                src="/lovable-uploads/experience-travel.jpg" 
                alt="Immersive cultural travel experience with local architecture"
                className="experience-img"
              />
            </div>
            
            <div className="experience-content">
              <div className="experience-header">
                <p className="experience-label">EXPERIENCE</p>
              </div>
              
              <div className="experience-text">
                <h2 className="experience-heading">
                  Curated journeys that adapt to your unique travel style and preferences.
                </h2>
                
                <p className="experience-description">
                  Every destination becomes a personalized adventure through our intelligent matching system that learns from your interests, creating unforgettable moments tailored specifically for you.
                </p>
                
                <button className="experience-cta">
                  Start Planning
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Traveler Categories Section */}
      <section className="categories-section px-6 md:px-8 lg:px-12 py-16 md:py-24">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="categories-heading">
              Traveler Categories
            </h2>
          </div>
          
          <div className="categories-grid">
            <div className="category-card group">
              <img 
                src="/lovable-uploads/explorer-travel.jpg" 
                alt="Adventure explorer in mountain landscape"
                className="category-card-bg"
              />
              <div className="category-card-content">
                <p className="category-description">
                  <span className="category-label">Explorers</span> can discover hidden gems and off-the-beaten-path destinations.
                </p>
                <div className="category-badge">
                  From $99 trips
                </div>
              </div>
            </div>
            
            <div className="category-card group">
              <img 
                src="/lovable-uploads/luxury-travel.jpg" 
                alt="Luxury traveler in premium resort setting"
                className="category-card-bg"
              />
              <div className="category-card-content">
                <p className="category-description">
                  <span className="category-label">Premium</span> travelers can access exclusive experiences and luxury accommodations.
                </p>
                <div className="category-badge">
                  From $999 packages
                </div>
              </div>
            </div>
            
            <div className="category-card group">
              <img 
                src="/lovable-uploads/concierge-travel.jpg" 
                alt="VIP traveler with personal concierge service"
                className="category-card-bg"
              />
              <div className="category-card-content">
                <p className="category-description">
                  <span className="category-label">VIP Members</span> enjoy personalized concierge service and bespoke itineraries.
                </p>
                <div className="category-badge">
                  Elite from $5K+
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <button className="categories-cta">
              Explore Packages
              <svg className="categories-cta-icon" viewBox="0 0 17 17" fill="none">
                <path d="M14.446 2.083L4.779 2.083C4.365 2.083 4.029 2.419 4.029 2.833C4.029 3.247 4.365 3.583 4.779 3.583L12.635 3.583L2.582 13.636C2.289 13.929 2.289 14.404 2.582 14.697C2.875 14.99 3.35 14.99 3.643 14.697L13.696 4.644L13.696 12.5C13.696 12.914 14.031 13.25 14.446 13.25C14.86 13.25 15.196 12.914 15.196 12.5L15.196 2.833C15.196 2.419 14.86 2.083 14.446 2.083Z" fill="currentColor"/>
              </svg>
            </button>
          </div>
        </div>
      </section>

      {/* Platform Section */}
      <section className="platform-section px-6 md:px-8 lg:px-12 py-16 md:py-24">
        <div className="max-w-7xl mx-auto">
          <div className="platform-grid">
            <div className="platform-content">
              <div className="platform-header">
                <p className="platform-label">PLATFORM</p>
              </div>
              
              <div className="platform-text">
                <h2 className="platform-heading">
                  Elsewhere Network<br />
                  is going global
                </h2>
                
                <p className="platform-description">
                  Seamlessly connecting destinations across continents, Elsewhere ensures personalized travel experiences are accessible worldwide, unlocking global adventures and local authenticity.
                </p>
                
                <button className="platform-cta">
                  Explore Platform
                </button>
              </div>
            </div>
            
            <div className="platform-visual">
              <div className="destinations-orbit">
                <div className="destination-node destination-1">
                  <div className="destination-circle"></div>
                  <span className="destination-name">TOKYO</span>
                </div>
                <div className="destination-node destination-2">
                  <div className="destination-circle"></div>
                  <span className="destination-name">PARIS</span>
                </div>
                <div className="destination-node destination-3">
                  <div className="destination-circle"></div>
                  <span className="destination-name">NYC</span>
                </div>
                <div className="destination-node destination-4">
                  <div className="destination-circle"></div>
                  <span className="destination-name">BALI</span>
                </div>
                <div className="destination-node destination-5">
                  <div className="destination-circle"></div>
                  <span className="destination-name">DUBAI</span>
                </div>
                <div className="destination-node destination-center">
                  <div className="destination-circle-center">
                    <img 
                      src="/lovable-uploads/platform-icon.svg" 
                      alt="Elsewhere Platform Hub"
                      className="platform-icon"
                    />
                  </div>
                  <span className="destination-name-center">HUB</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section className="resources-section px-6 md:px-8 lg:px-12 py-16 md:py-24">
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
          
          <div className="blog-grid">
            <div className="blog-card blog-card-purple">
              <div className="blog-card-content">
                <div className="blog-tag">Travel Spotlight</div>
                <h3 className="blog-title">Japan Travel Guide</h3>
                <div className="blog-subtitle">Spring • Summer • Fall</div>
                <div className="blog-meta">
                  <span>Blog • Elsewhere Travel • March 15, 2024</span>
                </div>
                <p className="blog-excerpt">
                  Comprehensive guide to Japan's seasons including cherry blossom timing, cultural festivals, hidden temples, and local cuisine experiences across Tokyo, Kyoto, and rural regions.
                </p>
              </div>
            </div>
            
            <div className="blog-card blog-card-blue">
              <div className="blog-card-content">
                <div className="blog-tag">New Partnership</div>
                <div className="blog-brands">
                  <div className="brand-logo">✈ Elsewhere</div>
                  <div className="brand-logo">🏨 Luxury Stay</div>
                </div>
                <div className="blog-meta">
                  <span>Blog • Elsewhere Travel • March 10, 2024</span>
                </div>
                <h3 className="blog-title">Luxury Stay Partners with Global Hotels</h3>
                <p className="blog-excerpt">
                  Luxury Stay now partners with premium hotels worldwide, enabling travelers access to exclusive accommodations, spa services, and VIP experiences across 50+ destinations.
                </p>
              </div>
            </div>
            
            <div className="blog-card blog-card-red">
              <div className="blog-card-content">
                <div className="blog-tag">Platform Update</div>
                <div className="blog-brands-grid">
                  <div className="brand-mini">✈ Elsewhere</div>
                  <div className="brand-mini">🌍 Global</div>
                </div>
                <div className="blog-meta">
                  <span>Blog • Elsewhere Travel • March 5, 2024</span>
                </div>
                <h3 className="blog-title">AI Recommendations Now Live Globally</h3>
                <p className="blog-excerpt">
                  We're excited to announce that our AI-powered travel recommendations are now available globally, offering personalized itineraries across 200+ destinations worldwide.
                </p>
              </div>
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
      <section className="newsletter-section px-6 md:px-8 lg:px-12 py-16 md:py-24">
        <div className="newsletter-bg">
          <div className="max-w-4xl mx-auto text-center">
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
    </div>;
};
export default Index;