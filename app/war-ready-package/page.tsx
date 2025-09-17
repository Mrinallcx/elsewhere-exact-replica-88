"use client";

import { useEffect, useMemo, useRef, useState } from 'react';
import { RefreshCcw } from 'lucide-react';

const TokenizedGoldPage = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isExploreDropdownOpen, setIsExploreDropdownOpen] = useState(false);
  const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false);
  const [dropdownTimeout, setDropdownTimeout] = useState<NodeJS.Timeout | null>(null);
  const [languageTimeout, setLanguageTimeout] = useState<NodeJS.Timeout | null>(null);
  const [currentLanguage, setCurrentLanguage] = useState('en');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [visibleCards, setVisibleCards] = useState(4);
  const [allCards, setAllCards] = useState<Array<{id: number, price: number}>>([]);

  const languages = [
    { code: 'en', name: 'English', shortName: 'EN', flag: '🇺🇸' },
    { code: 'fr', name: 'French', shortName: 'FR', flag: '🇫🇷' },
    { code: 'de', name: 'German', shortName: 'DE', flag: '🇩🇪' }
  ];

  const handleDropdownMouseEnter = () => {
    if (dropdownTimeout) {
      clearTimeout(dropdownTimeout);
      setDropdownTimeout(null);
    }
    setIsExploreDropdownOpen(true);
  };

  const handleDropdownMouseLeave = () => {
    const timeout = setTimeout(() => {
      setIsExploreDropdownOpen(false);
    }, 900);
    setDropdownTimeout(timeout);
  };

  const handleLanguageMouseEnter = () => {
    if (languageTimeout) {
      clearTimeout(languageTimeout);
      setLanguageTimeout(null);
    }
    setIsLanguageDropdownOpen(true);
  };

  const handleLanguageMouseLeave = () => {
    const timeout = setTimeout(() => {
      setIsLanguageDropdownOpen(false);
    }, 900);
    setLanguageTimeout(timeout);
  };

  const handleLanguageSelect = (code: string) => {
    setCurrentLanguage(code);
    setIsLanguageDropdownOpen(false);
  };

  // Cleanup timeouts on unmount
  useEffect(() => {
    return () => {
      if (dropdownTimeout) clearTimeout(dropdownTimeout);
      if (languageTimeout) clearTimeout(languageTimeout);
    };
  }, [dropdownTimeout, languageTimeout]);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    // Cleanup on unmount
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);
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

  // Initialize cards data
  useEffect(() => {
    const cards = Array.from({ length: 20 }, (_, index) => ({
      id: index + 1,
      price: 1200 // Same price for all assets
    }));
    setAllCards(cards);
  }, []);

  // Load more cards function
  const loadMoreCards = () => {
    setVisibleCards(prev => Math.min(prev + 4, 20));
  };

  // Card component function
  const renderCard = (card: {id: number, price: number}, index: number) => (
    <div 
      key={card.id}
      className="category-card category-card-sm bg-black group"
      style={{ 
        transformStyle: 'preserve-3d',
        transform: 'none',
        opacity: 1,
        boxShadow: 'rgba(0, 0, 0, 0.02) 0px 4px 8px 0px, rgba(0, 0, 0, 0.04) 0px 2px 4px 0px',
        transition: 'transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275), box-shadow 0.4s ease, filter 0.3s ease'
      }}
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        const mouseX = e.clientX;
        const mouseY = e.clientY;
        
        const deltaX = mouseX - centerX;
        const deltaY = mouseY - centerY;
        
        const rotateX = (deltaY / rect.height) * 20;
        const rotateY = (deltaX / rect.width) * 20;
        const translateX = (deltaX / rect.width) * 10;
        const translateY = (deltaY / rect.height) * 10;
        
        e.currentTarget.style.transform = `rotateX(${-rotateX}deg) rotateY(${rotateY}deg) translateX(${translateX}px) translateY(${translateY}px) translateZ(50px) scale(1.05)`;
        e.currentTarget.style.boxShadow = 'rgba(0, 0, 0, 0.08) 0px 8px 16px 0px, rgba(0, 0, 0, 0.06) 0px 4px 8px 0px';
        e.currentTarget.style.filter = 'brightness(1.1) contrast(1.1)';
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateZ(50px) scale(1.05)';
        e.currentTarget.style.boxShadow = 'rgba(0, 0, 0, 0.08) 0px 8px 16px 0px, rgba(0, 0, 0, 0.06) 0px 4px 8px 0px';
        e.currentTarget.style.filter = 'brightness(1.1) contrast(1.1)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'none';
        e.currentTarget.style.boxShadow = 'rgba(0, 0, 0, 0.02) 0px 4px 8px 0px, rgba(0, 0, 0, 0.04) 0px 2px 4px 0px';
        e.currentTarget.style.filter = 'none';
      }}
    >
      <div className="absolute bottom-4 left-4 right-4">
        <button 
          className="w-full bg-white text-black py-2 px-4 rounded-lg flex items-center justify-center group-hover:justify-between transition-all duration-300 cursor-pointer relative"
          onClick={(e) => {
            e.stopPropagation();
            setIsModalOpen(true);
          }}
        >
          <span className="text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 group-hover:relative group-hover:left-0 absolute left-4">Buy Now</span>
          <span className="text-sm font-bold">${card.price}</span>
        </button>
      </div>
    </div>
  );

  return <div className="min-h-screen w-full relative">
      {/* Navigation Bar */}
      <nav className="glass-navbar fixed top-0 left-0 right-0 z-50">
        <div className="flex justify-between items-center px-4 sm:px-6 md:px-12 lg:px-20 py-2 md:py-1">
          {/* Brand */}
          <div className="brand-logo">
            <a href="/">
              <img src="/tiamonds.svg" alt="Tiamonds" className="h-10 sm:h-12 md:h-14 lg:h-16" />
            </a>
          </div>
          
          {/* Right Side - Navigation + CTA */}
          <div className="hidden lg:flex items-center space-x-8">
            {/* Desktop Navigation */}
            <div className="flex items-center space-x-8">
                <a href="/war-ready-package" className="nav-link text-travel-black hover:text-travel-black transition-colors duration-300">
                  War package
                </a>
                <a href="/tokenized-gold" className="nav-link text-travel-black hover:text-travel-black transition-colors duration-300">
                  Tgold
                </a>
              
              {/* Explore Dropdown - Commented Out */}
              {/* <div className="relative group">
                <button 
                  className="nav-link text-travel-black hover:text-travel-black transition-colors duration-300 flex items-center space-x-1"
                  onMouseEnter={handleDropdownMouseEnter}
                  onMouseLeave={handleDropdownMouseLeave}
                >
                  <span>Explore</span>
                  <svg className="w-4 h-4 transition-transform duration-300 group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                
                <div 
                  className={`absolute top-full right-0 mt-8 w-64 bg-slate-50/95 backdrop-blur-md rounded-xl shadow-lg border border-slate-200/50 transition-all duration-300 ${isExploreDropdownOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'}`}
                  onMouseEnter={handleDropdownMouseEnter}
                  onMouseLeave={handleDropdownMouseLeave}
                >
                  <div className="py-2">
                    <a href="#marketplace" className="dropdown-item group block px-4 py-3 text-slate-700 hover:bg-slate-100/80 transition-all duration-300 hover:translate-x-2 hover:shadow-md">
                      <span className="flex items-center justify-between">
                        <span>Marketplace</span>
                        <svg className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </span>
                    </a>
                    <a href="#portfolio" className="dropdown-item group block px-4 py-3 text-slate-700 hover:bg-slate-100/80 transition-all duration-300 hover:translate-x-2 hover:shadow-md">
                      <span className="flex items-center justify-between">
                        <span>Portfolio</span>
                        <svg className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </span>
                    </a>
                    <a href="#analytics" className="dropdown-item group block px-4 py-3 text-slate-700 hover:bg-slate-100/80 transition-all duration-300 hover:translate-x-2 hover:shadow-md">
                      <span className="flex items-center justify-between">
                        <span>Analytics</span>
                        <svg className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </span>
                    </a>
                    <a href="#learn" className="dropdown-item group block px-4 py-3 text-slate-700 hover:bg-slate-100/80 transition-all duration-300 hover:translate-x-2 hover:shadow-md">
                      <span className="flex items-center justify-between">
                        <span>Learn</span>
                        <svg className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </span>
                    </a>
                    <a href="#community" className="dropdown-item group block px-4 py-3 text-slate-700 hover:bg-slate-100/80 transition-all duration-300 hover:translate-x-2 hover:shadow-md">
                      <span className="flex items-center justify-between">
                        <span>Community</span>
                        <svg className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </span>
                    </a>
                  </div>
                </div>
              </div> */}
            </div>
            
            {/* Desktop CTA */}
            <a
              href="https://app-tiamonds.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="glass-nav-btn px-6 py-2.5 rounded-full text-sm font-medium tracking-wide uppercase hover:scale-105 transition-all duration-300"
            >
              Launch App
            </a>
            
            {/* Language Switcher */}
            <div className="relative group">
              <button 
                className="nav-link text-travel-black hover:text-travel-black transition-colors duration-300 flex items-center space-x-1"
                onMouseEnter={handleLanguageMouseEnter}
                onMouseLeave={handleLanguageMouseLeave}
              >
                <span className="text-lg">
                  {languages.find(lang => lang.code === currentLanguage)?.flag}
                </span>
                <span>{languages.find(lang => lang.code === currentLanguage)?.shortName}</span>
                <svg className="w-4 h-4 transition-transform duration-300 group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {/* Language Dropdown Menu */}
              <div 
                className={`absolute top-full right-0 mt-8 w-64 bg-slate-50/95 backdrop-blur-md rounded-xl shadow-lg border border-slate-200/50 transition-all duration-300 ${isLanguageDropdownOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'}`}
                onMouseEnter={handleLanguageMouseEnter}
                onMouseLeave={handleLanguageMouseLeave}
              >
                <div className="py-2">
                  {languages.map((language) => (
                    <a
                      key={language.code}
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                        handleLanguageSelect(language.code);
                      }}
                      className="dropdown-item group block px-4 py-3 text-slate-700 hover:bg-slate-100/80 transition-all duration-300 hover:translate-x-2 hover:shadow-md"
                    >
                      <span className="flex items-center justify-between">
                        <span className="flex items-center space-x-3">
                          <span className="text-lg">{language.flag}</span>
                          <span>{language.name}</span>
                        </span>
                        <svg className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            <div className={`w-6 h-6 flex flex-col justify-center space-y-1 transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45' : ''}`}>
              <span className={`block h-0.5 bg-travel-black transition-all duration-300 ${isMobileMenuOpen ? 'rotate-90 translate-y-1.5' : ''}`}></span>
              <span className={`block h-0.5 bg-travel-black transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
              <span className={`block h-0.5 bg-travel-black transition-all duration-300 ${isMobileMenuOpen ? '-rotate-90 -translate-y-1.5' : ''}`}></span>
            </div>
          </button>
        </div>
        
        {/* Mobile Menu */}
        <div className={`lg:hidden transition-all duration-300 ${isMobileMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
          <div className="bg-white/95 backdrop-blur-md border-t border-white/20 flex flex-col h-[80vh]">
            {/* Scrollable Content */}
            <div className="flex-1 overflow-y-auto px-4 py-4 mobile-menu-container">
              <div className="space-y-4">
                 <a 
                   href="/war-ready-package" 
                   className="block py-2 text-travel-black hover:text-travel-gold transition-colors duration-200"
                   onClick={() => setIsMobileMenuOpen(false)}
                 >
                   War package
                 </a>
                 <a 
                   href="/tokenized-gold" 
                   className="block py-2 text-travel-black hover:text-travel-gold transition-colors duration-200"
                   onClick={() => setIsMobileMenuOpen(false)}
                 >
                   Tgold
                 </a>
                
                {/* Mobile Explore Section - Commented Out */}
                {/* <div className="border-t border-gray-200 pt-4">
                  <div className="text-sm font-medium text-gray-600 mb-2">Explore</div>
                  <div className="space-y-2 ml-4">
                    <a 
                      href="#marketplace" 
                      className="block py-1 text-travel-black hover:text-travel-gold transition-colors duration-200"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Marketplace
                    </a>
                    <a 
                      href="#portfolio" 
                      className="block py-1 text-travel-black hover:text-travel-gold transition-colors duration-200"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Portfolio
                    </a>
                    <a 
                      href="#analytics" 
                      className="block py-1 text-travel-black hover:text-travel-gold transition-colors duration-200"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Analytics
                    </a>
                    <a 
                      href="#learn" 
                      className="block py-1 text-travel-black hover:text-travel-gold transition-colors duration-200"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Learn
                    </a>
                    <a 
                      href="#community" 
                      className="block py-1 text-travel-black hover:text-travel-gold transition-colors duration-200"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Community
                    </a>
                  </div>
                </div> */}
                
                {/* Mobile Language Switcher */}
                <div className="pt-4 border-t border-gray-200">
                  <div className="text-sm font-medium text-gray-600 mb-3">Language</div>
                  <div className="space-y-1">
                    {languages.map((language) => (
                      <a
                        key={language.code}
                        href="#"
                        onClick={(e) => {
                          e.preventDefault();
                          handleLanguageSelect(language.code);
                          setIsMobileMenuOpen(false);
                        }}
                        className="dropdown-item group block px-4 py-3 text-slate-700 hover:bg-slate-100/80 transition-all duration-300 hover:translate-x-2 hover:shadow-md"
                      >
                        <span className="flex items-center justify-between">
                          <span className="flex items-center space-x-3">
                            <span className="text-lg">{language.flag}</span>
                            <span>{language.name}</span>
                          </span>
                          <svg className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </span>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            
            {/* Fixed CTA at Bottom */}
            <div className="flex-shrink-0 border-t border-gray-200 px-4 py-4 bg-white/95">
              <a
                href="https://app-tiamonds.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="glass-nav-btn w-full text-center block px-6 py-3 rounded-full text-sm font-medium tracking-wide uppercase hover:scale-105 transition-all duration-300"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Launch App
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main ref={heroRef} className="relative flex flex-col items-start sm:items-center justify-center min-h-[60vh] md:min-h-[70vh] text-left sm:text-center px-4 sm:px-6 md:px-8 lg:px-12 pt-32 md:pt-40 pb-16 md:pb-20 overflow-hidden bg-white">
        <div className="relative z-10 max-w-5xl w-full mx-0 sm:mx-auto">
          
          
          {/* Hero Headings */}
          <h1 className="hero-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl mb-2">
            <span 
              className="bg-gradient-to-r from-yellow-800 via-yellow-500 to-yellow-800 bg-clip-text text-transparent"
              style={{
                animation: 'pulse 6s ease-in-out infinite'
              }}
            >
              Tokenized Gold
            </span>
          </h1>
          
          <h2 className="hero-subheading text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl mb-4 sm:mb-6 md:mb-8 lg:mb-10">
            <span 
              className="bg-gradient-to-r from-yellow-800 via-yellow-500 to-yellow-800 bg-clip-text text-transparent"
              style={{
                animation: 'pulse 6s ease-in-out infinite',
                animationDelay: '1.5s'
              }}
            >
              Digital Gold Investment
            </span>
          </h2>
          
          {/* Description Section */}
          <div className="max-w-3xl w-full mx-0 sm:mx-auto mb-6 sm:mb-8 mt-6 sm:mt-8 md:mt-10 text-left sm:text-center ">
            <p className="hero-description text-sm sm:text-base md:text-lg lg:text-xl text-gray-700 mb-2 text-left sm:text-center">
              Own LBMA-grade gold on-chain
            </p>
          </div>
          
          {/* Call-to-Action */}
          <div className="flex flex-col items-start sm:items-center space-y-6 mb-10 sm:mb-16">
            <button 
              className="bg-black text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-full text-base sm:text-lg font-medium hover:bg-yellow-500 hover:text-black transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-yellow-500/25 flex items-center space-x-2 group"
              onClick={() => {
                // Redirect to Stripe payment link
                window.open('https://buy.stripe.com/test_4gM3cu7eK7p29fX5wLeZ200', '_blank');
              }}
            >
              <span>Invest in Gold</span>
              <svg 
                className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1 group-hover:scale-110" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </button>
          </div>
          
        </div>
      </main>
      
      {/* Gold Product Cards Section */}
      <section className="categories-section px-6 md:px-8 lg:px-12 pt-4 pb-32 md:pt-6 md:pb-40">
        <div className="max-w-7xl mx-auto">
          {/* Dynamic cards grid */}
          <div className="categories-grid-4">
            {allCards.slice(0, visibleCards).map((card, index) => renderCard(card, index))}
          </div>
          
          <div className="text-center mt-12">
            <p className="text-gray-600 mb-4">
              Showing {visibleCards} of {allCards.length} products
            </p>
            {visibleCards < 20 && (
              <button 
                className="categories-cta"
                onClick={loadMoreCards}
              >
                Load More
                <RefreshCcw className="categories-cta-icon w-4 h-4" />
              </button>
            )}
          </div>
        </div>
      </section>
      





      {/* Footer */}
      <footer className="footer-section px-6 md:px-8 lg:px-12 py-32 md:py-40">
        <div className="max-w-7xl mx-auto">
          <div className="footer-grid">
            <div className="footer-column">
              <h3 className="footer-heading">Gold Investment</h3>
              <ul className="footer-links">
                <li><a href="#" className="footer-link">Tokenized Gold</a></li>
                <li><a href="#" className="footer-link">Gold Trading</a></li>
                <li><a href="#" className="footer-link">Redemption</a></li>
                <li><a href="#" className="footer-link">Pricing</a></li>
              </ul>
            </div>
            
            <div className="footer-column">
              <h3 className="footer-heading">Security</h3>
              <ul className="footer-links">
                <li><a href="#" className="footer-link">Vault Storage</a></li>
                <li><a href="#" className="footer-link">Audit Reports</a></li>
                <li><a href="#" className="footer-link">Compliance</a></li>
              </ul>
            </div>
            
            <div className="footer-column">
              <h3 className="footer-heading">Resources</h3>
              <ul className="footer-links">
                <li><a href="#" className="footer-link">Gold Market Insights</a></li>
                <li><a href="#" className="footer-link">Investment Guides</a></li>
                <li><a href="#" className="footer-link">FAQ</a></li>
                <li><a href="#" className="footer-link">Support</a></li>
              </ul>
            </div>
            
            <div className="footer-column">
              <h3 className="footer-heading">Company</h3>
              <ul className="footer-links">
                <li><a href="#" className="footer-link">About Us</a></li>
                <li><a href="#" className="footer-link">Careers</a></li>
                <li><a href="#" className="footer-link">Press Kit</a></li>
                <li><a href="#" className="footer-link">Contact Us</a></li>
              </ul>
            </div>
          </div>
          
          <div className="footer-bottom">
            <div className="footer-brand">
              <span className="brand-logo">Tiamonds™</span>
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
            <h1 className="brand-text">TOTO Finance</h1>
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

      {/* Email Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-60 backdrop-blur-md flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-3xl p-6 max-w-md w-full mx-4 shadow-2xl border border-gray-100 transform transition-all duration-300 scale-100">
            {/* Close Button */}
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-3 right-3 p-1 text-gray-400 hover:text-gray-600 transition-colors duration-200"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            
            <div className="text-center mb-5">
              <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <svg className="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Invest in Gold</h3>
              <p className="text-gray-600">Enter your email to proceed with your $1,200 gold investment</p>
            </div>
            
            <div className="space-y-4">
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-yellow-500/20 focus:border-yellow-500 outline-none transition-all duration-300"
                  placeholder="your@email.com"
                />
              </div>
              
              <div className="bg-gray-50 rounded-xl p-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600 font-medium">Investment Amount</span>
                  <span className="text-xl font-bold text-gray-900">$1,200</span>
                </div>
              </div>
              
              <div className="pt-1">
                <button
                  onClick={() => {
                    if (email) {
                      // Redirect to Stripe payment link
                      window.open('https://buy.stripe.com/test_4gM3cu7eK7p29fX5wLeZ200', '_blank');
                      setIsModalOpen(false);
                      setEmail('');
                    }
                  }}
                  disabled={!email}
                  className="w-full px-6 py-3 bg-black text-white rounded-xl hover:bg-gray-800 disabled:bg-gray-300 disabled:cursor-not-allowed transition-all duration-200 font-semibold shadow-lg hover:shadow-xl"
                >
                  Continue
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>;
};

export default TokenizedGoldPage;
