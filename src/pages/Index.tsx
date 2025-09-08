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
    </div>;
};
export default Index;