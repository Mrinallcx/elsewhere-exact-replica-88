import { useEffect, useMemo, useRef, useState } from 'react';
const Index = () => {
  const cashRef = useRef<HTMLDivElement | null>(null);
  const cashCards = useMemo(
    () => [
      {
        title: 'Regulated & Audited',
        subtitle:
          'Operating under MiCA and Liechtenstein’s TVTG framework, with LCX as licensed Physical Validator.',
        variant: 'cash-card-blue',
      },
      {
        title: 'Redeemable Assets',
        subtitle:
          'All commodities stored in accredited vaults, warehouses, or custody facilities, fully redeemable anytime.',
        variant: 'cash-card-green',
      },
      {
        title: 'Transparent Reserves',
        subtitle:
          'On-chain proof-of-reserves dashboards, IoT oracle feeds, and quarterly third-party audits.',
        variant: 'cash-card-purple',
      },
      {
        title: 'Programmable Compliance',
        subtitle:
          'Smart-contract enforcement of KYC/AML, transfer restrictions, and regulatory permissions.',
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
  const scrollAnimRef = useRef<HTMLDivElement | null>(null);
  const [pastHero, setPastHero] = useState(false);
  const [resourcesTab, setResourcesTab] = useState<'news' | 'updates'>('news');
  const [currentDescription, setCurrentDescription] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [currentTokenDescription, setCurrentTokenDescription] = useState(0);
  const [isTokenTransitioning, setIsTokenTransitioning] = useState(false);
  const [animatedStats, setAnimatedStats] = useState({
    assets: 0,
    revenue: 0,
    blockchains: 0,
    users: 0
  });
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isExploreDropdownOpen, setIsExploreDropdownOpen] = useState(false);
  const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false);
  const [dropdownTimeout, setDropdownTimeout] = useState<NodeJS.Timeout | null>(null);
  const [languageTimeout, setLanguageTimeout] = useState<NodeJS.Timeout | null>(null);
  const [currentLanguage, setCurrentLanguage] = useState('en');
  
  // Language options
  const languages = [
    { code: 'en', name: 'English', shortName: 'EN', flag: '🇺🇸' },
    { code: 'fr', name: 'Français', shortName: 'FR', flag: '🇫🇷' },
    { code: 'de', name: 'Deutsch', shortName: 'DE', flag: '🇩🇪' },
  ];
  
  const partnerLogos = [
    'Cardano.svg',
    'Coingecko.svg',
    'Coinmarketcap.svg',
    'Ethereum.svg',
    'Gia.svg',
    'LCX (1).svg',
    'Nmkr.svg',
    'Polygon.svg',
    'Solana (1).svg',
    'Uniswap.svg',
    'Xrp.svg',
  ];
  const tnftCards = Array.from({ length: 16 });
  const statsRef = useRef<HTMLDivElement | null>(null);

  // TNFT card images - mix of gold, silver, and platinum
  const tnftImages = [
    "https://firebasestorage.googleapis.com/v0/b/tiamonds.firebasestorage.app/o/goldnft.png?alt=media&token=360a9bc9-64de-4c42-8b18-13788830ffe3",
    "https://firebasestorage.googleapis.com/v0/b/tiamonds.firebasestorage.app/o/silvernft.png?alt=media&token=f72e746f-91a5-436b-a6f1-2d3308446ce0",
    "https://firebasestorage.googleapis.com/v0/b/tiamonds.firebasestorage.app/o/platinumnft.png?alt=media&token=e7fe7e35-478e-4d60-9ae6-11eb13c6b986",
    "https://firebasestorage.googleapis.com/v0/b/tiamonds.firebasestorage.app/o/silvernft.png?alt=media&token=f72e746f-91a5-436b-a6f1-2d3308446ce0",
    "https://firebasestorage.googleapis.com/v0/b/tiamonds.firebasestorage.app/o/goldnft.png?alt=media&token=360a9bc9-64de-4c42-8b18-13788830ffe3",
    "https://firebasestorage.googleapis.com/v0/b/tiamonds.firebasestorage.app/o/platinumnft.png?alt=media&token=e7fe7e35-478e-4d60-9ae6-11eb13c6b986",
    "https://firebasestorage.googleapis.com/v0/b/tiamonds.firebasestorage.app/o/goldnft.png?alt=media&token=360a9bc9-64de-4c42-8b18-13788830ffe3",
    "https://firebasestorage.googleapis.com/v0/b/tiamonds.firebasestorage.app/o/platinumnft.png?alt=media&token=e7fe7e35-478e-4d60-9ae6-11eb13c6b986"
  ];

  // How it works descriptions
  const howItWorksDescriptions = [
    "The complete lifecycle of a commodity, on-chain.",
    "Tokenize with TOTO Rails: Commodity lots stored in vaults, warehouses, or tanks are minted into 1:1 backed digital tokens with full compliance and proof-of-reserve.",
    "Trade with TOTO Markets: Instant secondary trading, peer-to-peer or via integrated exchanges and brokers, with programmable contracts for forwards, futures, and collateralization.",
    "Settle & Deliver with TOTO Clear: Atomic delivery-vs-payment in stablecoins. Choose to hold, redeem, or re-trade your tokens — with logistics and compliance automated by oracles."
  ];

  // TOTO Token descriptions
  const totoTokenDescriptions = [
    "Utility that reduces costs, increases access, and fuels adoption.",
    "Lower Fees: Stake TOTO to reduce trading and settlement fees across the platform.",
    "Higher Limits: Unlock enhanced redemption and settlement thresholds with TOTO holdings.",
    "Priority Access: Gain early access to scarce or high-demand commodity listings.",
    "Rewards: Participate in loyalty and incentive programs across the TOTO Invest platform."
  ];

  useEffect(() => {
    const target = heroRef.current;
    if (!target) return;
    const observer = new IntersectionObserver(([entry]) => {
      setPastHero(!entry.isIntersecting);
    }, { root: null, threshold: 0, rootMargin: '-64px 0px 0px 0px' });
    observer.observe(target);
    return () => observer.disconnect();
  }, []);

  // Lazy-load lottie-web from CDN and mount the scroll animation
  useEffect(() => {
    const container = scrollAnimRef.current;
    if (!container) return;

    const ensureLottie = async (): Promise<any> => {
      if ((window as any).lottie) return (window as any).lottie;
      await new Promise<void>((resolve, reject) => {
        const script = document.createElement('script');
        script.src = 'https://cdnjs.cloudflare.com/ajax/libs/lottie-web/5.12.2/lottie.min.js';
        script.async = true;
        script.onload = () => resolve();
        script.onerror = () => reject(new Error('Failed to load lottie-web'));
        document.body.appendChild(script);
      });
      return (window as any).lottie;
    };

    // Provided Lottie JSON (scroll indicator)
    const scrollAnimationData = {"nm":"Comp 1","ddd":0,"h":500,"w":500,"meta":{"g":"@lottiefiles/toolkit-js 0.33.2"},"layers":[{"ty":4,"nm":"Ball","sr":1,"st":0,"op":90,"ip":0,"hd":false,"ddd":0,"bm":0,"hasMask":false,"ao":0,"ks":{"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":0,"k":[114,114,100],"ix":6},"sk":{"a":0,"k":0},"p":{"s":true,"x":{"a":0,"k":250,"ix":3},"y":{"a":1,"k":[{"o":{"x":0.213,"y":1.081},"i":{"x":0.689,"y":1},"s":[255],"t":10},{"o":{"x":0.918,"y":0},"i":{"x":0.284,"y":1},"s":[242.838],"t":24},{"o":{"x":0.589,"y":-0.009},"i":{"x":0.348,"y":1},"s":[426.703],"t":50},{"s":[409.703],"t":60}],"ix":4},"z":{"a":0,"k":0}},"r":{"a":0,"k":0,"ix":10},"sa":{"a":0,"k":0},"o":{"a":1,"k":[{"o":{"x":0.167,"y":0.167},"i":{"x":0.833,"y":0.833},"s":[0],"t":0},{"o":{"x":0.167,"y":0.167},"i":{"x":0.833,"y":0.833},"s":[100],"t":5},{"o":{"x":0.167,"y":0.167},"i":{"x":0.833,"y":0.833},"s":[100],"t":60},{"s":[0],"t":70}],"ix":11}},"ef":[],"shapes":[{"ty":"gr","bm":0,"hd":false,"mn":"ADBE Vector Group","nm":"Ellipse 1","ix":1,"cix":2,"np":3,"it":[{"ty":"el","bm":0,"hd":false,"mn":"ADBE Vector Shape - Ellipse","nm":"Ellipse Path 1","d":1,"p":{"a":0,"k":[0,0],"ix":3},"s":{"a":0,"k":[28.594,28.594],"ix":2}},{"ty":"fl","bm":0,"hd":false,"mn":"ADBE Vector Graphic - Fill","nm":"Fill 1","c":{"a":0,"k":[1,1,1],"ix":4},"r":1,"o":{"a":0,"k":100,"ix":5}},{"ty":"tr","a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"sk":{"a":0,"k":0,"ix":4},"p":{"a":0,"k":[0.297,-72.703],"ix":2},"r":{"a":0,"k":0,"ix":6},"sa":{"a":0,"k":0,"ix":5},"o":{"a":0,"k":100,"ix":7}}]}],"ind":1},{"ty":4,"nm":"Mouse","sr":1,"st":0,"op":90,"ip":0,"hd":false,"ddd":0,"bm":0,"hasMask":true,"ao":0,"ks":{"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6},"sk":{"a":0,"k":0},"p":{"s":true,"x":{"a":0,"k":250,"ix":3},"y":{"a":0,"k":250,"ix":4},"z":{"a":0,"k":0}},"r":{"a":0,"k":0,"ix":10},"sa":{"a":0,"k":0},"o":{"a":0,"k":100,"ix":11}},"ef":[],"masksProperties":[{"nm":"Mask 1","inv":false,"mode":"f","x":{"a":0,"k":0,"ix":4},"o":{"a":0,"k":100,"ix":3},"pt":{"a":0,"k":{"c":true,"i":[[0,0],[0,0],[0,-58.818],[0,0],[-58.818,0],[0,0],[0,58.818],[0,0],[58.818,0]],"o":[[0,0],[-58.818,0],[0,0],[0,58.818],[0,0],[58.818,0],[0,0],[0,-58.818],[0,0]],"v":[[0.5,-186.5],[0.5,-186.5],[-106,-80],[-106,81],[0.5,187.5],[0.5,187.5],[107,81],[107,-80],[0.5,-186.5]]},"ix":1}}],"shapes":[{"ty":"gr","bm":0,"hd":false,"mn":"ADBE Vector Group","nm":"Shape 1","ix":1,"cix":2,"np":3,"it":[{"ty":"sh","bm":0,"hd":false,"mn":"ADBE Vector Shape - Group","nm":"Path 1","ix":1,"d":1,"ks":{"a":0,"k":{"c":true,"i":[[-47.696,0],[0,-47.696],[0,0],[47.696,0],[0,47.696],[0,0]],"o":[[47.696,0],[0,0],[0,47.696],[-47.696,0],[0,0],[0,-47.696]],"v":[[0,-167],[86.5,-80.5],[86.5,80.5],[0,167],[-86.5,80.5],[-86.5,-80.5]]},"ix":2}},{"ty":"st","bm":0,"hd":false,"mn":"ADBE Vector Graphic - Stroke","nm":"Stroke 1","lc":1,"lj":1,"ml":4,"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":18,"ix":5},"c":{"a":0,"k":[1,1,1],"ix":3}},{"ty":"tr","a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"sk":{"a":0,"k":0,"ix":4},"p":{"a":0,"k":[0,0],"ix":2},"r":{"a":0,"k":0,"ix":6},"sa":{"a":0,"k":0,"ix":5},"o":{"a":0,"k":100,"ix":7}}]}],"ind":2}],"v":"5.5.2","fr":30,"op":90,"ip":0,"assets":[]};

    let lottieInstance: any | null = null;
    let isCancelled = false;

    ensureLottie()
      .then((lottie) => {
        if (isCancelled) return;
        lottieInstance = lottie.loadAnimation({
          container,
          renderer: 'svg',
          loop: true,
          autoplay: true,
          animationData: scrollAnimationData,
        });
      })
      .catch(() => {
        // ignore failure silently
      });

    return () => {
      isCancelled = true;
      if (lottieInstance) {
        try { lottieInstance.destroy(); } catch {}
      }
    };
  }, []);

  // Auto-rotate descriptions every 4.5 seconds with hover pause
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isHovered) { // Only auto-rotate when not hovered
        setIsTransitioning(true);
        setTimeout(() => {
          setCurrentDescription((prev) => (prev + 1) % howItWorksDescriptions.length);
          setIsTransitioning(false);
        }, 250);
      }
    }, 4500); // Reduced from 6000ms to 4500ms (4.5 seconds)

    return () => clearInterval(interval);
  }, [howItWorksDescriptions.length, isHovered]);

  // Auto-rotate TOTO Token descriptions every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setIsTokenTransitioning(true);
      setTimeout(() => {
        setCurrentTokenDescription((prev) => (prev + 1) % totoTokenDescriptions.length);
        setIsTokenTransitioning(false);
      }, 250);
    }, 4000);

    return () => clearInterval(interval);
  }, [totoTokenDescriptions.length]);

  // Animate stats when section comes into view
  useEffect(() => {
    const target = statsRef.current;
    if (!target) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Reset stats to 0 before animating
          setAnimatedStats({
            assets: 0,
            revenue: 0,
            blockchains: 0,
            users: 0
          });
          
          // Animate each stat
          const animateValue = (key: keyof typeof animatedStats, endValue: number, duration: number = 2000) => {
            const startTime = Date.now();
            const startValue = 0;
            
            const animate = () => {
              const elapsed = Date.now() - startTime;
              const progress = Math.min(elapsed / duration, 1);
              
              // Easing function for smooth animation
              const easeOutQuart = 1 - Math.pow(1 - progress, 4);
              const currentValue = startValue + (endValue - startValue) * easeOutQuart;
              
              // Use Math.floor for integers, keep decimals for revenue
              const finalValue = key === 'revenue' ? Math.round(currentValue * 10) / 10 : Math.floor(currentValue);
              
              setAnimatedStats(prev => ({ ...prev, [key]: finalValue }));
              
              if (progress < 1) {
                requestAnimationFrame(animate);
              }
            };
            
            requestAnimationFrame(animate);
          };

          // Start animations with slight delays
          setTimeout(() => animateValue('assets', 30), 100);
          setTimeout(() => animateValue('revenue', 1.5, 2500), 200);
          setTimeout(() => animateValue('blockchains', 5), 300);
          setTimeout(() => animateValue('users', 50), 400);
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(target);
    return () => observer.disconnect();
  }, []);

  const handleDescriptionChange = (index: number) => {
    if (index === currentDescription) return;
    
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentDescription(index);
      setIsTransitioning(false);
    }, 250);
  };

  const formatDescription = (text: string) => {
    const boldTerms = ['Tokenize with TOTO Rails', 'Trade with TOTO Markets', 'Settle & Deliver with TOTO Clear'];
    
    let formattedText = text;
    boldTerms.forEach(term => {
      const regex = new RegExp(`(${term})`, 'g');
      formattedText = formattedText.replace(regex, '<strong>$1</strong>');
    });
    
    return formattedText;
  };

  const handleTokenDescriptionChange = (index: number) => {
    if (index === currentTokenDescription) return;
    
    setIsTokenTransitioning(true);
    setTimeout(() => {
      setCurrentTokenDescription(index);
      setIsTokenTransitioning(false);
    }, 250);
  };

  const formatTokenDescription = (text: string) => {
    const boldTerms = ['Lower Fees', 'Higher Limits', 'Priority Access', 'Rewards'];
    
    let formattedText = text;
    boldTerms.forEach(term => {
      const regex = new RegExp(`(${term})`, 'g');
      formattedText = formattedText.replace(regex, '<strong>$1</strong>');
    });
    
    return formattedText;
  };

  // Dropdown hover handlers with delay to prevent flickering
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
    }, 900); // 400ms delay before closing
    setDropdownTimeout(timeout);
  };

  // Language dropdown handlers
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
    }, 500); // 500ms delay before closing
    setLanguageTimeout(timeout);
  };

  const handleLanguageSelect = (langCode: string) => {
    setCurrentLanguage(langCode);
    setIsLanguageDropdownOpen(false);
    // Here you would implement actual language switching logic
  };

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

  // Cleanup timeouts on unmount
  useEffect(() => {
    return () => {
      if (dropdownTimeout) {
        clearTimeout(dropdownTimeout);
      }
      if (languageTimeout) {
        clearTimeout(languageTimeout);
      }
    };
  }, [dropdownTimeout, languageTimeout]);


  return <div className="min-h-screen w-full relative">
      {/* Navigation Bar */}
      <nav className="glass-navbar fixed top-0 left-0 right-0 z-50">
        <div className="flex justify-between items-center px-4 sm:px-6 md:px-12 lg:px-20 py-2 md:py-1">
          {/* Brand */}
          <div className="brand-logo">
            <img src="/tiamonds.svg" alt="Tiamonds" className={`h-12 sm:h-12 md:h-14 lg:h-16 ${pastHero ? '' : 'logo-light'}`} />
          </div>
          
          {/* Right Side - Navigation + CTA */}
          <div className="hidden lg:flex items-center space-x-8">
            {/* Desktop Navigation */}
            <div className="flex items-center space-x-8">
              <a href="/war-ready-package" className={`nav-link ${pastHero ? 'text-travel-black' : 'text-travel-white'} hover:text-travel-black transition-colors duration-300 flex items-center space-x-2`}>
                <span>War package</span>
                <span className="inline-flex items-center px-2 py-0.1 text-[8px] font-medium bg-purple-500 text-white rounded-full animate-pulse shadow-lg shadow-purple-500/20">
                  NEW
                </span>
              </a>
              <a href="/tokenized-gold" className={`nav-link ${pastHero ? 'text-travel-black' : 'text-travel-white'} hover:text-travel-black transition-colors duration-300`}>
                Tgold
              </a>
              
              {/* Explore Dropdown - Commented Out */}
              {/* <div className="relative group">
                <button 
                  className={`nav-link ${pastHero ? 'text-travel-black' : 'text-travel-white'} hover:text-travel-black transition-colors duration-300 flex items-center space-x-1`}
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
              className={`glass-nav-btn ${pastHero ? '' : 'glass-nav-btn--light'} px-6 py-2.5 rounded-full text-sm font-medium tracking-wide uppercase hover:scale-105 transition-all duration-300`}
            >
            Launch App
            </a>
            
            {/* Language Switcher */}
            <div className="relative group">
              <button 
                className={`nav-link ${pastHero ? 'text-travel-black' : 'text-travel-white'} hover:text-travel-black transition-colors duration-300 flex items-center space-x-1`}
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
              <span className={`block h-0.5 bg-current transition-all duration-300 ${pastHero ? 'bg-travel-black' : 'bg-travel-white'} ${isMobileMenuOpen ? 'rotate-90 translate-y-1.5' : ''}`}></span>
              <span className={`block h-0.5 bg-current transition-all duration-300 ${pastHero ? 'bg-travel-black' : 'bg-travel-white'} ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
              <span className={`block h-0.5 bg-current transition-all duration-300 ${pastHero ? 'bg-travel-black' : 'bg-travel-white'} ${isMobileMenuOpen ? '-rotate-90 -translate-y-1.5' : ''}`}></span>
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
                  className="block py-2 text-travel-black hover:text-travel-gold transition-colors duration-200 flex items-center space-x-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <span>War package</span>
                  <span className="inline-flex items-center px-2 py-0.1 text-[8px] font-medium bg-purple-500 text-white rounded-full animate-pulse shadow-lg shadow-purple-500/20">
                    NEW
                  </span>
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
      <main ref={heroRef} className="relative flex flex-col items-start sm:items-center justify-center min-h-[90vh] md:min-h-screen text-left sm:text-center px-4 sm:px-6 md:px-8 lg:px-12 pt-32 md:pt-40 pb-24 md:pb-32 overflow-hidden">
        <img 
          className="hero-fallback" 
          src="https://firebasestorage.googleapis.com/v0/b/tiamonds.firebasestorage.app/o/fallbackbg.webp?alt=media&token=8fedb67c-4f9d-483a-8198-1f00cf5c4580" 
          alt="Hero background fallback"
        />
        <video className="hero-video" autoPlay muted loop playsInline src="https://firebasestorage.googleapis.com/v0/b/tiamonds.firebasestorage.app/o/final%20bg%202.mp4?alt=media&token=6ee899c8-e239-4ff7-afc6-0077744ecde1"></video>
        <div className="hero-overlay"></div>
        <div className="relative z-10 max-w-5xl w-full mx-0 sm:mx-auto">
          
          {/* Hero Headings */}
          <h1 className="hero-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-travel-white mb-2">
            TOTO Invest
          </h1>
          
          <h2 className="hero-subheading text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl mb-4 sm:mb-6 md:mb-8 lg:mb-10">
            Building the Future of Global Trade
          </h2>
          
          {/* Description Section */}
          <div className="max-w-3xl w-full mx-0 sm:mx-auto mb-6 sm:mb-8 mt-6 sm:mt-8 md:mt-10 text-left sm:text-center ">
            <p className="hero-description text-sm sm:text-base md:text-lg lg:text-xl text-travel-white mb-2 text-left sm:text-center">
            At TOTO Invest, we create trusted infrastructure to bring physical commodities and settlement flows on-chain.
            </p>
          </div>
          
          {/* Call-to-Action */}
          <div className="flex flex-col items-start sm:items-center space-y-6 mb-10 sm:mb-16">
            <a
              href="https://app-tiamonds.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="cta-primary px-6 sm:px-8 py-2.5 sm:py-3 rounded-full text-base sm:text-lg font-medium"
            >
              Commodities Market
            </a>
          </div>

          {/* Scroll Indicator */}
          <div
            ref={scrollAnimRef}
            aria-hidden="true"
            className="pointer-events-none absolute left-1/2 -translate-x-1/2 w-14 h-14 opacity-90 scroll-indicator"
            style={{
              filter: 'drop-shadow(0 2px 8px rgba(0,0,0,0.25))',
            }}
          />
          
          
          
          {/* Social Proof Section */}
          <div className="social-proof-section mx-0 sm:mx-auto text-left sm:text-center mt-6 sm:mt-10">
            <p className="social-proof-text mb-8">TRUSTED BY</p>
            <div className="w-full overflow-hidden">
              <div className="social-proof-logos">
                {partnerLogos.concat(partnerLogos).map((name, idx) => (
                  <div className="logo-item" key={`pl-${idx}-${name}`}>
                    <img
                      src={`/logo/${name}`}
                      alt={name.replace(/\.[^/.]+$/, '')}
                      className={`${['Nmkr.svg','Solana (1).svg','Xrp.svg'].includes(name)
                        ? 'h-4 sm:h-5'
                        : ['Uniswap.svg','Coingecko.svg'].includes(name)
                          ? 'h-6 sm:h-8'
                          : 'h-5 sm:h-6'} opacity-80 hover:opacity-100 transition`}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
          
        </div>
      </main>
      
      {/* Statistics Section */}
      <section ref={statsRef} className="stats-section px-6 md:px-8 lg:px-12 py-20 md:py-40">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <p className="stats-intro-text">
            TOTO Invest is building the foundation for the future of global trade.
            </p>
          </div>
          
          <div className="stats-grid">
            <div className="stat-item">
              <div className="stat-number">{animatedStats.assets}K</div>
              <div className="stat-label">Assets Listed</div>
            </div>
            
            <div className="stat-item">
              <div className="stat-number">${animatedStats.revenue.toFixed(1)}M</div>
              <div className="stat-label">Revenue Generated</div>
            </div>
            
            <div className="stat-item">
              <div className="stat-number">{animatedStats.blockchains}+</div>
              <div className="stat-label">Blockchains Integrated</div>
            </div>
            
            <div className="stat-item">
              <div className="stat-number">{animatedStats.users}K+</div>
              <div className="stat-label">Active Users</div>
            </div>
          </div>
        </div>
      </section>

      {/* TNFTs Section */}
      <section className="tnfts-section px-6 md:px-8 lg:px-12 py-16 md:py-32">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8 md:mb-12">
            <h2 className="tnfts-heading text-left">Explore Assets</h2>
          </div>

          {/* Auto-scrolling (marquee) cards */}
          <div className="tnfts-marquee">
            <div className="tnfts-track">
              {tnftCards.map((_, idx) => (
                <div className="tnft-card" key={idx}>
                  <span className="tnft-badge">1M TOTO</span>
                  <img
                    src={tnftImages[idx % tnftImages.length]}
                    alt="TNFT preview"
                    className="tnft-card-img"
                  />
                  <button className="tnft-cta" type="button">Buy Now</button>
                </div>
              ))}
            </div>
          </div>

          <div className="tnfts-more-wrap">
            <button className="tnfts-more" aria-label="Explore more TNFT cards">
              <span className="tnfts-more-text">Explore more</span>
              <svg viewBox="0 0 17 17" fill="none" className="tnfts-more-icon">
                <path d="M14.446 2.083L4.779 2.083C4.365 2.083 4.029 2.419 4.029 2.833C4.029 3.247 4.365 3.583 4.779 3.583L12.635 3.583L2.582 13.636C2.289 13.929 2.289 14.404 2.582 14.697C2.875 14.99 3.35 14.99 3.643 14.697L13.696 4.644L13.696 12.5C13.696 12.914 14.031 13.25 14.446 13.25C14.86 13.25 15.196 12.914 15.196 12.5L15.196 2.833C15.196 2.419 14.86 2.083 14.446 2.083Z" fill="currentColor"/>
              </svg>
            </button>
          </div>
        </div>
      </section>

      {/* Cash Management Section (new 3rd section) */}
      <section className="cash-section px-6 md:px-8 lg:px-12 py-20 md:py-40">
        <div className="max-w-7xl mx-auto">
          <div className="cash-grid">
            {/* Left copy */}
            <div className="cash-left">
              <h2 className="cash-heading">Institutional-Grade Commodity Tokenization</h2>
              <p className="cash-description">
                Trust, compliance, and transparency at the core of every transaction.
              </p>
              <div className="mt-6">
                <a
                  href="https://app-tiamonds.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cash-cta"
                >
                  Explore Marketplace
                </a>
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
      <section className="mission-section px-6 md:px-8 lg:px-12 py-20 md:py-40">
        <div className="max-w-7xl mx-auto">
          <div className="mission-grid">
            <div className="mission-content">
              <div className="mission-header">
                <p className="mission-label">Why TOTO Invest</p>
              </div>
              
              <div className="mission-text">
                <h2 className="mission-heading">
                  Redefining How Commodities Trade
                </h2>
                
                <p className="mission-description">
                A new era in global trade with T+0 settlement, 24/7 asset-backed token trading, and fractional tokens for broader market access. Efficiency, liquidity, and inclusivity redefined.
                </p>
                
                <button className="mission-cta">
                  Learn more
                </button>
              </div>
            </div>
            
            <div className="mission-image">
              <img 
                src="https://firebasestorage.googleapis.com/v0/b/tiamonds.firebasestorage.app/o/1111.png?alt=media&token=a352551e-77b3-4259-818a-f3aaaf96fb5f" 
                alt="Beautiful travel destination with mountains and pristine waters"
                className="mission-img"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="experience-section px-6 md:px-8 lg:px-12 py-20 md:py-40">
        <div className="max-w-7xl mx-auto">
          <div className="experience-grid">
            <div className="experience-image">
              <img 
                src="https://firebasestorage.googleapis.com/v0/b/tiamonds.firebasestorage.app/o/12222.png?alt=media&token=23503fb4-be66-4836-ba26-9094dd6a444d" 
                alt="Experience visual"
                className="experience-img"
              />
            </div>
            
            <div className="experience-content">
              <div className="experience-header">
                <p className="experience-label">How it works</p>
              </div>
              
              <div 
                className="experience-text"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                <h2 className="experience-heading">
                  We Make Your Perfect Investment Smart
                </h2>
                
                <div className="experience-description-container">
                  <p 
                    className={`experience-description ${isTransitioning ? 'fade-out' : 'fade-in'}`}
                    dangerouslySetInnerHTML={{ __html: formatDescription(howItWorksDescriptions[currentDescription]) }}
                  />
                </div>
                
                <button className="experience-cta">
                  Learn More
                </button>
                
                <div className="experience-navigation">
                  <div className="experience-dots">
                    {howItWorksDescriptions.map((_, index) => (
                      <button
                        key={index}
                        className={`experience-dot ${index === currentDescription ? 'active' : ''}`}
                        onClick={() => handleDescriptionChange(index)}
                        aria-label={`Go to description ${index + 1}`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Traveler Categories Section */}
      <section className="categories-section px-6 md:px-8 lg:px-12 py-20 md:py-40">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="categories-heading">
              Explore Commodities
            </h2>
          </div>
          
          {/* Top row: 4 smaller cards */}
          <div className="categories-grid-4">
            <div id="gold" className="category-card category-card-sm group">
              <img 
                src="https://firebasestorage.googleapis.com/v0/b/tiamonds.firebasestorage.app/o/gold.png?alt=media&token=2df54300-9089-416b-8f50-4cd359b415c0" 
                alt="Adventure explorer in mountain landscape"
                className="category-card-bg"
              />
              <div className="category-overlay"></div>
              <div className="category-card-content">
                <h3 className="category-title">Gold</h3>
                <p className="category-description">Own LBMA-grade gold on-chain.</p>
              </div>
            </div>
            
            <div id="silver" className="category-card category-card-sm group">
              <img 
                src="https://firebasestorage.googleapis.com/v0/b/tiamonds.firebasestorage.app/o/Silver.png?alt=media&token=05a8833b-11de-49cf-9bd9-bb9a66262237" 
                alt="Luxury traveler in premium resort setting"
                className="category-card-bg"
              />
              <div className="category-overlay"></div>
              <div className="category-card-content">
                <h3 className="category-title">Silver</h3>
                <p className="category-description">Tokenized 1kg silver bars.</p>
              </div>
            </div>
            
            <div id="platinum" className="category-card category-card-sm group">
              <img 
                src="https://firebasestorage.googleapis.com/v0/b/tiamonds.firebasestorage.app/o/Platninum.png?alt=media&token=76c2d4b3-bec6-4e0d-9873-9f65e99e07b8" 
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
                src="https://firebasestorage.googleapis.com/v0/b/tiamonds.firebasestorage.app/o/Diamond.png?alt=media&token=95150bef-c373-414d-b03c-487fe77da463" 
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
                src="https://firebasestorage.googleapis.com/v0/b/tiamonds.firebasestorage.app/o/carbon.png?alt=media&token=912c5639-da13-4ead-a1b1-1a11b434289e" 
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
                src="https://firebasestorage.googleapis.com/v0/b/tiamonds.firebasestorage.app/o/solar%20energy.png?alt=media&token=84dffd90-e90e-4c5e-a5fb-6a4fd79dc9ae" 
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
                src="https://firebasestorage.googleapis.com/v0/b/tiamonds.firebasestorage.app/o/agriculture.png?alt=media&token=e15ab2c5-e05d-4fb6-ab43-0624f596b314" 
                alt="Agriculture tokenized crops and warrants"
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
      <section className="platform-section px-6 md:px-8 lg:px-12 py-20 md:py-40">
        <div className="max-w-7xl mx-auto">
          <div className="platform-grid">
            <div className="platform-content">
              <div className="platform-header">
                <p className="platform-label">TOTO Token</p>
              </div>
              
              <div className="platform-text">
                <h2 className="platform-heading">
                  Powering the Open Commodity Economy
                </h2>
                
                <div className="platform-description-container">
                  <p 
                    className={`platform-description ${isTokenTransitioning ? 'fade-out' : 'fade-in'}`}
                    dangerouslySetInnerHTML={{ __html: formatTokenDescription(totoTokenDescriptions[currentTokenDescription]) }}
                  />
                </div>
                
                <button className="platform-cta">
                  Learn more
                </button>
                
                <div className="platform-navigation">
                  <div className="platform-dots">
                    {totoTokenDescriptions.map((_, index) => (
                      <button
                        key={index}
                        className={`platform-dot ${index === currentTokenDescription ? 'active' : ''}`}
                        onClick={() => handleTokenDescriptionChange(index)}
                        aria-label={`Go to description ${index + 1}`}
                      />
                    ))}
                  </div>
                </div>
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
      <section className="resources-section px-6 md:px-8 lg:px-12 py-20 md:py-40">
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
            <button
              type="button"
              className={`tab-btn ${resourcesTab === 'news' ? 'active' : ''}`}
              onClick={() => setResourcesTab('news')}
            >
              Tiamonds News
            </button>
            <button
              type="button"
              className={`tab-btn ${resourcesTab === 'updates' ? 'active' : ''}`}
              onClick={() => setResourcesTab('updates')}
            >
              RWA Updates
            </button>
          </div>
          
          {resourcesTab === 'news' && (
          <div className="blog-marquee">
            <div className="blog-marquee-track">
              {/* Blog Card 1 */}
              <article className="blog-card blog-card--marquee">
                <div className="blog-card-image-wrapper">
                  <img src="https://firebasestorage.googleapis.com/v0/b/tiamonds.firebasestorage.app/o/AB-Cardano-NFTCase-Study_-NMKR-and-Tiamonds.avif?alt=media&token=fcb76cf0-f310-4716-aec2-8b41d2b8e205" alt="Cardano NFT Case Study: NMKR and Tiamonds" className="blog-card-image" />
                </div>
                <div className="blog-card-body">
                  <h3 className="blog-title">Cardano NFT Case Study: NMKR and Tiamonds</h3>
                  <p className="blog-excerpt">
                    Web3 providers like NMKR help businesses tokenize assets and expand their reach globally using their platform.
                  </p>
                  <a href="https://www.emurgo.io/press-news/cardano-nft-case-study-nmkr-and-tiamonds/" className="blog-read-more">
                    Read article
                    <svg viewBox="0 0 17 17" fill="none">
                      <path d="M14.446 2.083L4.779 2.083C4.365 2.083 4.029 2.419 4.029 2.833C4.029 3.247 4.365 3.583 4.779 3.583L12.635 3.583L2.582 13.636C2.289 13.929 2.289 14.404 2.582 14.697C2.875 14.99 3.35 14.99 3.643 14.697L13.696 4.644L13.696 12.5C13.696 12.914 14.031 13.25 14.446 13.25C14.86 13.25 15.196 12.914 15.196 12.5L15.196 2.833C15.196 2.419 14.86 2.083 14.446 2.083Z" fill="currentColor"/>
                    </svg>
                  </a>
                </div>
              </article>

              {/* Blog Card 4 */}
              <article className="blog-card blog-card--marquee">
                <div className="blog-card-image-wrapper">
                  <img src="https://img.decrypt.co/insecure/rs:fit:3840:0:0:0/plain/https://cdn.decrypt.co/wp-content/uploads/2019/09/Tokenization-1-gID_5-pID_2.png@webp" alt="What Is Tokenization?" className="blog-card-image" />
                </div>
                <div className="blog-card-body">
                  <h3 className="blog-title">What Is Tokenization?</h3>
                  <p className="blog-excerpt">
                    We explore tokenization, its workings, and how it’s revolutionizing asset issuance, management, and trading.
                  </p>
                  <a href="https://decrypt.co/resources/what-is-tokenization" className="blog-read-more">
                    Learn more
                    <svg viewBox="0 0 17 17" fill="none">
                      <path d="M14.446 2.083L4.779 2.083C4.365 2.083 4.029 2.419 4.029 2.833C4.029 3.247 4.365 3.583 4.779 3.583L12.635 3.583L2.582 13.636C2.289 13.929 2.289 14.404 2.582 14.697C2.875 14.99 3.35 14.99 3.643 14.697L13.696 4.644L13.696 12.5C13.696 12.914 14.031 13.25 14.446 13.25C14.86 13.25 15.196 12.914 15.196 12.5L15.196 2.833C15.196 2.419 14.86 2.083 14.446 2.083Z" fill="currentColor"/>
                    </svg>
                  </a>
                </div>
              </article>

              {/* Blog Card 5 */}
              <article className="blog-card blog-card--marquee">
                <div className="blog-card-image-wrapper">
                  <img src="https://images.cointelegraph.com/cdn-cgi/image/format=auto,onerror=redirect,quality=90,width=717/https://s3.cointelegraph.com/storage/uploads/view/2927b60eedfc872f9b2f9c03999eb2ab.jpeg" alt="How does tokenization help transform illiquid real estate ownership into a liquid one?" className="blog-card-image" />
                </div>
                <div className="blog-card-body">
                  <h3 className="blog-title">How does tokenization help transform illiquid real estate ownership into a liquid one?</h3>
                  <p className="blog-excerpt">Tokenization boosts real estate liquidity, making it easier for people to trade and invest in properties.</p>
                  <a href="https://cointelegraph.com/news/how-does-tokenization-help-transform-illiquid-real-estate-ownership-into-a-liquid-one" className="blog-read-more">
                    Learn more
                    <svg viewBox="0 0 17 17" fill="none"><path d="M14.446 2.083L4.779 2.083C4.365 2.083 4.029 2.419 4.029 2.833C4.029 3.247 4.365 3.583 4.779 3.583L12.635 3.583L2.582 13.636C2.289 13.929 2.289 14.404 2.582 14.697C2.875 14.99 3.35 14.99 3.643 14.697L13.696 4.644L13.696 12.5C13.696 12.914 14.031 13.25 14.446 13.25C14.86 13.25 15.196 12.914 15.196 12.5L15.196 2.833C15.196 2.419 14.86 2.083 14.446 2.083Z" fill="currentColor"/></svg>
                  </a>
                </div>
              </article>
              {/* Blog Card 2 */}
              <article className="blog-card blog-card--marquee">
                <div className="blog-card-image-wrapper">
                  <img src="https://www.coindesk.com/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fs3y3vcno%2Fproduction%2F74f533926b6639da78c9484c4cd921ebb6b4b51a-3977x2234.jpg%3Fauto%3Dformat&w=3840&q=75" alt="2024 Will Be the Year Tokenization Truly (Finally) Begins" className="blog-card-image" />
                </div>
                <div className="blog-card-body">
                  <h3 className="blog-title">2024 Will Be the Year Tokenization Truly (Finally) Begins</h3>
                <p className="blog-excerpt">
                    After years of hype, next year will be when tokenization of real-world assets truly takes off.
                  </p>
                  <a href="https://www.coindesk.com/business/2023/11/29/2024-will-be-the-year-tokenization-truly-finally-begins" className="blog-read-more">
                    Learn more
                    <svg viewBox="0 0 17 17" fill="none">
                      <path d="M14.446 2.083L4.779 2.083C4.365 2.083 4.029 2.419 4.029 2.833C4.029 3.247 4.365 3.583 4.779 3.583L12.635 3.583L2.582 13.636C2.289 13.929 2.289 14.404 2.582 14.697C2.875 14.99 3.35 14.99 3.643 14.697L13.696 4.644L13.696 12.5C13.696 12.914 14.031 13.25 14.446 13.25C14.86 13.25 15.196 12.914 15.196 12.5L15.196 2.833C15.196 2.419 14.86 2.083 14.446 2.083Z" fill="currentColor"/>
                    </svg>
                  </a>
                </div>
              </article>

              {/* Blog Card 3 */}
              <article className="blog-card blog-card--marquee">
                <div className="blog-card-image-wrapper">
                  <img src="https://specials-images.forbesimg.com/imageserve/660cc218e753d30c6dc18d53/Tokenization/960x0.jpg?fit=scale" alt="Asset Tokenization Revolutionizing Global Finance" className="blog-card-image" />
              </div>
                <div className="blog-card-body">
                  <h3 className="blog-title">Asset Tokenization Revolutionizing Global Finance</h3>
                  <p className="blog-excerpt">
                    Cryptocurrencies and blockchain are revolutionizing finance, shifting how we perceive and interact with assets.
                  </p>
                  <a href="https://www.forbes.com/sites/roomykhan/2024/04/03/asset-tokenization-revolutionizing-global-finance/" className="blog-read-more">
                    Read more
                    <svg viewBox="0 0 17 17" fill="none">
                      <path d="M14.446 2.083L4.779 2.083C4.365 2.083 4.029 2.419 4.029 2.833C4.029 3.247 4.365 3.583 4.779 3.583L12.635 3.583L2.582 13.636C2.289 13.929 2.289 14.404 2.582 14.697C2.875 14.99 3.35 14.99 3.643 14.697L13.696 4.644L13.696 12.5C13.696 12.914 14.031 13.25 14.446 13.25C14.86 13.25 15.196 12.914 15.196 12.5L15.196 2.833C15.196 2.419 14.86 2.083 14.446 2.083Z" fill="currentColor"/>
                    </svg>
                  </a>
            </div>
              </article>

              {/* Blog Card 4 */}
              <article className="blog-card blog-card--marquee">
                <div className="blog-card-image-wrapper">
                  <img src="https://img.decrypt.co/insecure/rs:fit:3840:0:0:0/plain/https://cdn.decrypt.co/wp-content/uploads/2019/09/Tokenization-1-gID_5-pID_2.png@webp" alt="What Is Tokenization?" className="blog-card-image" />
                </div>
                <div className="blog-card-body">
                  <h3 className="blog-title">What Is Tokenization?</h3>
                  <p className="blog-excerpt">
                    We explore tokenization, its workings, and how it’s revolutionizing asset issuance, management, and trading.
                  </p>
                  <a href="https://decrypt.co/resources/what-is-tokenization" className="blog-read-more">
                    Learn more
                    <svg viewBox="0 0 17 17" fill="none">
                      <path d="M14.446 2.083L4.779 2.083C4.365 2.083 4.029 2.419 4.029 2.833C4.029 3.247 4.365 3.583 4.779 3.583L12.635 3.583L2.582 13.636C2.289 13.929 2.289 14.404 2.582 14.697C2.875 14.99 3.35 14.99 3.643 14.697L13.696 4.644L13.696 12.5C13.696 12.914 14.031 13.25 14.446 13.25C14.86 13.25 15.196 12.914 15.196 12.5L15.196 2.833C15.196 2.419 14.86 2.083 14.446 2.083Z" fill="currentColor"/>
                    </svg>
                  </a>
                </div>
              </article>

              {/* Blog Card 4 */}
              <article className="blog-card blog-card--marquee">
                <div className="blog-card-image-wrapper">
                  <img src="https://img.decrypt.co/insecure/rs:fit:3840:0:0:0/plain/https://cdn.decrypt.co/wp-content/uploads/2019/09/Tokenization-1-gID_5-pID_2.png@webp" alt="What Is Tokenization?" className="blog-card-image" />
                </div>
                <div className="blog-card-body">
                  <h3 className="blog-title">What Is Tokenization?</h3>
                  <p className="blog-excerpt">
                    We explore tokenization, its workings, and how it’s revolutionizing asset issuance, management, and trading.
                  </p>
                  <a href="https://decrypt.co/resources/what-is-tokenization" className="blog-read-more">
                    Learn more
                    <svg viewBox="0 0 17 17" fill="none">
                      <path d="M14.446 2.083L4.779 2.083C4.365 2.083 4.029 2.419 4.029 2.833C4.029 3.247 4.365 3.583 4.779 3.583L12.635 3.583L2.582 13.636C2.289 13.929 2.289 14.404 2.582 14.697C2.875 14.99 3.35 14.99 3.643 14.697L13.696 4.644L13.696 12.5C13.696 12.914 14.031 13.25 14.446 13.25C14.86 13.25 15.196 12.914 15.196 12.5L15.196 2.833C15.196 2.419 14.86 2.083 14.446 2.083Z" fill="currentColor"/>
                    </svg>
                  </a>
                </div>
              </article>

              {/* Blog Card 4 */}
              <article className="blog-card blog-card--marquee">
                <div className="blog-card-image-wrapper">
                  <img src="https://images.cointelegraph.com/cdn-cgi/image/format=auto,onerror=redirect,quality=90,width=717/https://s3.cointelegraph.com/storage/uploads/view/2927b60eedfc872f9b2f9c03999eb2ab.jpeg" alt="How does tokenization help transform illiquid real estate ownership into a liquid one?" className="blog-card-image" />
                </div>
                <div className="blog-card-body">
                  <h3 className="blog-title">How does tokenization help transform illiquid real estate ownership into a liquid one?</h3>
                <p className="blog-excerpt">
                    Tokenization boosts real estate liquidity, making it easier for people to trade and invest in properties.
                  </p>
                  <a href="https://cointelegraph.com/news/how-does-tokenization-help-transform-illiquid-real-estate-ownership-into-a-liquid-one" className="blog-read-more">
                    Learn more
                    <svg viewBox="0 0 17 17" fill="none">
                      <path d="M14.446 2.083L4.779 2.083C4.365 2.083 4.029 2.419 4.029 2.833C4.029 3.247 4.365 3.583 4.779 3.583L12.635 3.583L2.582 13.636C2.289 13.929 2.289 14.404 2.582 14.697C2.875 14.99 3.35 14.99 3.643 14.697L13.696 4.644L13.696 12.5C13.696 12.914 14.031 13.25 14.446 13.25C14.86 13.25 15.196 12.914 15.196 12.5L15.196 2.833C15.196 2.419 14.86 2.083 14.446 2.083Z" fill="currentColor"/>
                    </svg>
                  </a>
                </div>
              </article>

              {/* Duplicate set for seamless scroll */}
              <article className="blog-card blog-card--marquee">
                <div className="blog-card-image-wrapper">
                  <img src="https://firebasestorage.googleapis.com/v0/b/tiamonds.firebasestorage.app/o/AB-Cardano-NFTCase-Study_-NMKR-and-Tiamonds.avif?alt=media&token=fcb76cf0-f310-4716-aec2-8b41d2b8e205" alt="Cardano NFT Case Study: NMKR and Tiamonds" className="blog-card-image" />
                </div>
                <div className="blog-card-body">
                  <h3 className="blog-title">Cardano NFT Case Study: NMKR and Tiamonds</h3>
                  <p className="blog-excerpt">Web3 providers like NMKR help businesses tokenize assets and expand their reach globally using their platform.</p>
                  <a href="https://www.emurgo.io/press-news/cardano-nft-case-study-nmkr-and-tiamonds/" className="blog-read-more">
                    Read article
                    <svg viewBox="0 0 17 17" fill="none"><path d="M14.446 2.083L4.779 2.083C4.365 2.083 4.029 2.419 4.029 2.833C4.029 3.247 4.365 3.583 4.779 3.583L12.635 3.583L2.582 13.636C2.289 13.929 2.289 14.404 2.582 14.697C2.875 14.99 3.35 14.99 3.643 14.697L13.696 4.644L13.696 12.5C13.696 12.914 14.031 13.25 14.446 13.25C14.86 13.25 15.196 12.914 15.196 12.5L15.196 2.833C15.196 2.419 14.86 2.083 14.446 2.083Z" fill="currentColor"/></svg>
                  </a>
                </div>
              </article>

              <article className="blog-card blog-card--marquee">
                <div className="blog-card-image-wrapper">
                  <img src="https://www.coindesk.com/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fs3y3vcno%2Fproduction%2F74f533926b6639da78c9484c4cd921ebb6b4b51a-3977x2234.jpg%3Fauto%3Dformat&w=3840&q=75" alt="2024 Will Be the Year Tokenization Truly (Finally) Begins" className="blog-card-image" />
                </div>
                <div className="blog-card-body">
                  <h3 className="blog-title">2024 Will Be the Year Tokenization Truly (Finally) Begins</h3>
                  <p className="blog-excerpt">After years of hype, next year will be when tokenization of real-world assets truly takes off.</p>
                  <a href="https://www.coindesk.com/business/2023/11/29/2024-will-be-the-year-tokenization-truly-finally-begins" className="blog-read-more">
                    Learn more
                    <svg viewBox="0 0 17 17" fill="none"><path d="M14.446 2.083L4.779 2.083C4.365 2.083 4.029 2.419 4.029 2.833C4.029 3.247 4.365 3.583 4.779 3.583L12.635 3.583L2.582 13.636C2.289 13.929 2.289 14.404 2.582 14.697C2.875 14.99 3.35 14.99 3.643 14.697L13.696 4.644L13.696 12.5C13.696 12.914 14.031 13.25 14.446 13.25C14.86 13.25 15.196 12.914 15.196 12.5L15.196 2.833C15.196 2.419 14.86 2.083 14.446 2.083Z" fill="currentColor"/></svg>
                  </a>
                </div>
              </article>

              <article className="blog-card blog-card--marquee">
                <div className="blog-card-image-wrapper">
                  <img src="https://specials-images.forbesimg.com/imageserve/660cc218e753d30c6dc18d53/Tokenization/960x0.jpg?fit=scale" alt="Asset Tokenization Revolutionizing Global Finance" className="blog-card-image" />
                </div>
                <div className="blog-card-body">
                  <h3 className="blog-title">Asset Tokenization Revolutionizing Global Finance</h3>
                  <p className="blog-excerpt">Cryptocurrencies and blockchain are revolutionizing finance, shifting how we perceive and interact with assets.</p>
                  <a href="https://www.forbes.com/sites/roomykhan/2024/04/03/asset-tokenization-revolutionizing-global-finance/" className="blog-read-more">
                    Read more
                    <svg viewBox="0 0 17 17" fill="none"><path d="M14.446 2.083L4.779 2.083C4.365 2.083 4.029 2.419 4.029 2.833C4.029 3.247 4.365 3.583 4.779 3.583L12.635 3.583L2.582 13.636C2.289 13.929 2.289 14.404 2.582 14.697C2.875 14.99 3.35 14.99 3.643 14.697L13.696 4.644L13.696 12.5C13.696 12.914 14.031 13.25 14.446 13.25C14.86 13.25 15.196 12.914 15.196 12.5L15.196 2.833C15.196 2.419 14.86 2.083 14.446 2.083Z" fill="currentColor"/></svg>
                  </a>
                </div>
              </article>

              <article className="blog-card blog-card--marquee">
                <div className="blog-card-image-wrapper">
                  <img src="https://img.decrypt.co/insecure/rs:fit:3840:0:0:0/plain/https://cdn.decrypt.co/wp-content/uploads/2019/09/Tokenization-1-gID_5-pID_2.png@webp" alt="What Is Tokenization?" className="blog-card-image" />
                </div>
                <div className="blog-card-body">
                  <h3 className="blog-title">What Is Tokenization?</h3>
                  <p className="blog-excerpt">We explore tokenization, its workings, and how it’s revolutionizing asset issuance, management, and trading.</p>
                  <a href="https://decrypt.co/resources/what-is-tokenization" className="blog-read-more">
                    Learn more
                    <svg viewBox="0 0 17 17" fill="none"><path d="M14.446 2.083L4.779 2.083C4.365 2.083 4.029 2.419 4.029 2.833C4.029 3.247 4.365 3.583 4.779 3.583L12.635 3.583L2.582 13.636C2.289 13.929 2.289 14.404 2.582 14.697C2.875 14.99 3.35 14.99 3.643 14.697L13.696 4.644L13.696 12.5C13.696 12.914 14.031 13.25 14.446 13.25C14.86 13.25 15.196 12.914 15.196 12.5L15.196 2.833C15.196 2.419 14.86 2.083 14.446 2.083Z" fill="currentColor"/></svg>
                  </a>
                </div>
              </article>

              <article className="blog-card blog-card--marquee">
                <div className="blog-card-image-wrapper">
                  <img src="https://images.cointelegraph.com/cdn-cgi/image/format=auto,onerror=redirect,quality=90,width=717/https://s3.cointelegraph.com/storage/uploads/view/2927b60eedfc872f9b2f9c03999eb2ab.jpeg" alt="How does tokenization help transform illiquid real estate ownership into a liquid one?" className="blog-card-image" />
                </div>
                <div className="blog-card-body">
                  <h3 className="blog-title">How does tokenization help transform illiquid real estate ownership into a liquid one?</h3>
                  <p className="blog-excerpt">Tokenization boosts real estate liquidity, making it easier for people to trade and invest in properties.</p>
                  <a href="https://cointelegraph.com/news/how-does-tokenization-help-transform-illiquid-real-estate-ownership-into-a-liquid-one" className="blog-read-more">
                    Learn more
                    <svg viewBox="0 0 17 17" fill="none"><path d="M14.446 2.083L4.779 2.083C4.365 2.083 4.029 2.419 4.029 2.833C4.029 3.247 4.365 3.583 4.779 3.583L12.635 3.583L2.582 13.636C2.289 13.929 2.289 14.404 2.582 14.697C2.875 14.99 3.35 14.99 3.643 14.697L13.696 4.644L13.696 12.5C13.696 12.914 14.031 13.25 14.446 13.25C14.86 13.25 15.196 12.914 15.196 12.5L15.196 2.833C15.196 2.419 14.86 2.083 14.446 2.083Z" fill="currentColor"/></svg>
                  </a>
                </div>
              </article>

              <article className="blog-card blog-card--marquee">
                <div className="blog-card-image-wrapper">
                  <img src="https://img.decrypt.co/insecure/rs:fit:3840:0:0:0/plain/https://cdn.decrypt.co/wp-content/uploads/2019/09/Tokenization-1-gID_5-pID_2.png@webp" alt="What Is Tokenization?" className="blog-card-image" />
                </div>
                <div className="blog-card-body">
                  <h3 className="blog-title">What Is Tokenization?</h3>
                  <p className="blog-excerpt">We explore tokenization, its workings, and how it’s revolutionizing asset issuance, management, and trading.</p>
                  <a href="https://decrypt.co/resources/what-is-tokenization" className="blog-read-more">
                    Learn more
                    <svg viewBox="0 0 17 17" fill="none"><path d="M14.446 2.083L4.779 2.083C4.365 2.083 4.029 2.419 4.029 2.833C4.029 3.247 4.365 3.583 4.779 3.583L12.635 3.583L2.582 13.636C2.289 13.929 2.289 14.404 2.582 14.697C2.875 14.99 3.35 14.99 3.643 14.697L13.696 4.644L13.696 12.5C13.696 12.914 14.031 13.25 14.446 13.25C14.86 13.25 15.196 12.914 15.196 12.5L15.196 2.833C15.196 2.419 14.86 2.083 14.446 2.083Z" fill="currentColor"/></svg>
                  </a>
                </div>
              </article>

              <article className="blog-card blog-card--marquee">
                <div className="blog-card-image-wrapper">
                  <img src="https://images.cointelegraph.com/cdn-cgi/image/format=auto,onerror=redirect,quality=90,width=717/https://s3.cointelegraph.com/storage/uploads/view/2927b60eedfc872f9b2f9c03999eb2ab.jpeg" alt="How does tokenization help transform illiquid real estate ownership into a liquid one?" className="blog-card-image" />
                </div>
                <div className="blog-card-body">
                  <h3 className="blog-title">How does tokenization help transform illiquid real estate ownership into a liquid one?</h3>
                  <p className="blog-excerpt">Tokenization boosts real estate liquidity, making it easier for people to trade and invest in properties.</p>
                  <a href="https://cointelegraph.com/news/how-does-tokenization-help-transform-illiquid-real-estate-ownership-into-a-liquid-one" className="blog-read-more">
                    Learn more
                    <svg viewBox="0 0 17 17" fill="none"><path d="M14.446 2.083L4.779 2.083C4.365 2.083 4.029 2.419 4.029 2.833C4.029 3.247 4.365 3.583 4.779 3.583L12.635 3.583L2.582 13.636C2.289 13.929 2.289 14.404 2.582 14.697C2.875 14.99 3.35 14.99 3.643 14.697L13.696 4.644L13.696 12.5C13.696 12.914 14.031 13.25 14.446 13.25C14.86 13.25 15.196 12.914 15.196 12.5L15.196 2.833C15.196 2.419 14.86 2.083 14.446 2.083Z" fill="currentColor"/></svg>
                  </a>
              </div>
              </article>
            </div>
          </div>
          )}

          {resourcesTab === 'updates' && (
          <div className="blog-marquee">
            <div className="blog-marquee-track">
              {/* Blog Card 1 */}
              <article className="blog-card blog-card--marquee">
                <div className="blog-card-image-wrapper">
                  <img src="https://firebasestorage.googleapis.com/v0/b/tiamonds.firebasestorage.app/o/AB-Cardano-NFTCase-Study_-NMKR-and-Tiamonds.avif?alt=media&token=fcb76cf0-f310-4716-aec2-8b41d2b8e205" alt="Cardano NFT Case Study: NMKR and Tiamonds" className="blog-card-image" />
                </div>
                <div className="blog-card-body">
                  <h3 className="blog-title">Cardano NFT Case Study: NMKR and Tiamonds</h3>
                  <p className="blog-excerpt">
                    Web3 providers like NMKR help businesses tokenize assets and expand their reach globally using their platform.
                  </p>
                  <a href="https://www.emurgo.io/press-news/cardano-nft-case-study-nmkr-and-tiamonds/" className="blog-read-more">
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
                  <img src="https://www.coindesk.com/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fs3y3vcno%2Fproduction%2F74f533926b6639da78c9484c4cd921ebb6b4b51a-3977x2234.jpg%3Fauto%3Dformat&w=3840&q=75" alt="2024 Will Be the Year Tokenization Truly (Finally) Begins" className="blog-card-image" />
                </div>
                <div className="blog-card-body">
                  <h3 className="blog-title">2024 Will Be the Year Tokenization Truly (Finally) Begins</h3>
                  <p className="blog-excerpt">
                    After years of hype, next year will be when tokenization of real-world assets truly takes off.
                  </p>
                  <a href="https://www.coindesk.com/business/2023/11/29/2024-will-be-the-year-tokenization-truly-finally-begins" className="blog-read-more">
                    Learn more
                    <svg viewBox="0 0 17 17" fill="none">
                      <path d="M14.446 2.083L4.779 2.083C4.365 2.083 4.029 2.419 4.029 2.833C4.029 3.247 4.365 3.583 4.779 3.583L12.635 3.583L2.582 13.636C2.289 13.929 2.289 14.404 2.582 14.697C2.875 14.99 3.35 14.99 3.643 14.697L13.696 4.644L13.696 12.5C13.696 12.914 14.031 13.25 14.446 13.25C14.86 13.25 15.196 12.914 15.196 12.5L15.196 2.833C15.196 2.419 14.86 2.083 14.446 2.083Z" fill="currentColor"/>
                    </svg>
                  </a>
                </div>
              </article>

              {/* Blog Card 3 */}
              <article className="blog-card blog-card--marquee">
                <div className="blog-card-image-wrapper">
                  <img src="https://specials-images.forbesimg.com/imageserve/660cc218e753d30c6dc18d53/Tokenization/960x0.jpg?fit=scale" alt="Asset Tokenization Revolutionizing Global Finance" className="blog-card-image" />
                </div>
                <div className="blog-card-body">
                  <h3 className="blog-title">Asset Tokenization Revolutionizing Global Finance</h3>
                <p className="blog-excerpt">
                    Cryptocurrencies and blockchain are revolutionizing finance, shifting how we perceive and interact with assets.
                  </p>
                  <a href="https://www.forbes.com/sites/roomykhan/2024/04/03/asset-tokenization-revolutionizing-global-finance/" className="blog-read-more">
                    Read more
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
                  <img src="https://www.coindesk.com/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fs3y3vcno%2Fproduction%2F74f533926b6639da78c9484c4cd921ebb6b4b51a-3977x2234.jpg%3Fauto%3Dformat&w=3840&q=75" alt="2024 Will Be the Year Tokenization Truly (Finally) Begins" className="blog-card-image" />
                </div>
                <div className="blog-card-body">
                  <h3 className="blog-title">2024 Will Be the Year Tokenization Truly (Finally) Begins</h3>
                  <p className="blog-excerpt">After years of hype, next year will be when tokenization of real-world assets truly takes off.</p>
                  <a href="https://www.coindesk.com/business/2023/11/29/2024-will-be-the-year-tokenization-truly-finally-begins" className="blog-read-more">
                    Learn more
                    <svg viewBox="0 0 17 17" fill="none"><path d="M14.446 2.083L4.779 2.083C4.365 2.083 4.029 2.419 4.029 2.833C4.029 3.247 4.365 3.583 4.779 3.583L12.635 3.583L2.582 13.636C2.289 13.929 2.289 14.404 2.582 14.697C2.875 14.99 3.35 14.99 3.643 14.697L13.696 4.644L13.696 12.5C13.696 12.914 14.031 13.25 14.446 13.25C14.86 13.25 15.196 12.914 15.196 12.5L15.196 2.833C15.196 2.419 14.86 2.083 14.446 2.083Z" fill="currentColor"/></svg>
                  </a>
                </div>
              </article>

              <article className="blog-card blog-card--marquee">
                <div className="blog-card-image-wrapper">
                  <img src="https://specials-images.forbesimg.com/imageserve/660cc218e753d30c6dc18d53/Tokenization/960x0.jpg?fit=scale" alt="Asset Tokenization Revolutionizing Global Finance" className="blog-card-image" />
                </div>
                <div className="blog-card-body">
                  <h3 className="blog-title">Asset Tokenization Revolutionizing Global Finance</h3>
                  <p className="blog-excerpt">Cryptocurrencies and blockchain are revolutionizing finance, shifting how we perceive and interact with assets.</p>
                  <a href="https://www.forbes.com/sites/roomykhan/2024/04/03/asset-tokenization-revolutionizing-global-finance/" className="blog-read-more">
                    Read more
                    <svg viewBox="0 0 17 17" fill="none"><path d="M14.446 2.083L4.779 2.083C4.365 2.083 4.029 2.419 4.029 2.833C4.029 3.247 4.365 3.583 4.779 3.583L12.635 3.583L2.582 13.636C2.289 13.929 2.289 14.404 2.582 14.697C2.875 14.99 3.35 14.99 3.643 14.697L13.696 4.644L13.696 12.5C13.696 12.914 14.031 13.25 14.446 13.25C14.86 13.25 15.196 12.914 15.196 12.5L15.196 2.833C15.196 2.419 14.86 2.083 14.446 2.083Z" fill="currentColor"/></svg>
                  </a>
                </div>
              </article>

              <article className="blog-card blog-card--marquee">
                <div className="blog-card-image-wrapper">
                  <img src="https://images.cointelegraph.com/cdn-cgi/image/format=auto,onerror=redirect,quality=90,width=717/https://s3.cointelegraph.com/storage/uploads/view/2927b60eedfc872f9b2f9c03999eb2ab.jpeg" alt="How does tokenization help transform illiquid real estate ownership into a liquid one?" className="blog-card-image" />
                </div>
                <div className="blog-card-body">
                  <h3 className="blog-title">How does tokenization help transform illiquid real estate ownership into a liquid one?</h3>
                  <p className="blog-excerpt">Tokenization boosts real estate liquidity, making it easier for people to trade and invest in properties.</p>
                  <a href="https://cointelegraph.com/news/how-does-tokenization-help-transform-illiquid-real-estate-ownership-into-a-liquid-one" className="blog-read-more">
                    Learn more
                    <svg viewBox="0 0 17 17" fill="none"><path d="M14.446 2.083L4.779 2.083C4.365 2.083 4.029 2.419 4.029 2.833C4.029 3.247 4.365 3.583 4.779 3.583L12.635 3.583L2.582 13.636C2.289 13.929 2.289 14.404 2.582 14.697C2.875 14.99 3.35 14.99 3.643 14.697L13.696 4.644L13.696 12.5C13.696 12.914 14.031 13.25 14.446 13.25C14.86 13.25 15.196 12.914 15.196 12.5L15.196 2.833C15.196 2.419 14.86 2.083 14.446 2.083Z" fill="currentColor"/></svg>
                  </a>
              </div>
              </article>
            </div>
          </div>
          )}
          
          <div className="text-center mt-12">
            <button className="resources-cta">
              Explore Insights
            </button>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="newsletter-section pt-20 pb-0 md:pt-40 md:pb-0">
        <div className="newsletter-bg">
          <video
            className="newsletter-video"
            autoPlay
            muted
            loop
            playsInline
            src="https://firebasestorage.googleapis.com/v0/b/tiamonds.firebasestorage.app/o/footer.mov?alt=media&token=c7ab0347-66e1-44d8-9d56-9cfacea4da52"
          ></video>
          <div className="newsletter-overlay"></div>
          <div className="relative z-10 max-w-4xl mx-auto text-center px-6 md:px-8 lg:px-12">
            <h2 className="newsletter-heading">
              The Future of Tokenization
            </h2>
            <p className="newsletter-subtitle">
              Subscribe for the latest destinations, insights, news.
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
      <footer className="footer-section px-6 md:px-8 lg:px-12 pt-16 pb-24 md:pt-20 md:pb-40">
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
              <img src="/tiamonds.svg" alt="Tiamonds" className="h-8 sm:h-16 logo-light" />
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
      <section className="brand-section px-6 md:px-8 lg:px-12 py-20 md:py-36">
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
    </div>;
};
export default Index;