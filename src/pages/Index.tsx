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
          <div className="flex items-center justify-center space-x-2 privacy-notice">
            <Lock size={12} className="text-glass-white-60" />
            <span>PRIVACY-FIRST. NO DATA RESOLD.</span>
          </div>
          
        </div>
      </main>
    </div>;
};
export default Index;