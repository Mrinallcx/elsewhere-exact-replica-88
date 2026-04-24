"use client";

import { useState, useEffect, useRef, ReactNode } from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface NavigationClientProps {
  logo: ReactNode;
  pastHero?: boolean;
}

export function NavigationClient({ logo, pastHero: externalPastHero }: NavigationClientProps) {
  const [pastHero, setPastHero] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isExploreDropdownOpen, setIsExploreDropdownOpen] = useState(false);
  const [dropdownTimeout, setDropdownTimeout] = useState<NodeJS.Timeout | null>(null);
  const heroRef = useRef<HTMLElement | null>(null);

  // IntersectionObserver for navbar styling
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setPastHero(!entry.isIntersecting);
      },
      { threshold: 0, rootMargin: '-64px 0px 0px 0px' }
    );

    const heroElement = document.querySelector('main');
    if (heroElement) {
      heroRef.current = heroElement as HTMLElement;
      observer.observe(heroElement);
    }

    return () => observer.disconnect();
  }, []);

  // Body scroll lock for mobile menu
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

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

  // Cleanup timeouts on unmount
  useEffect(() => {
    return () => {
      if (dropdownTimeout) clearTimeout(dropdownTimeout);
    };
  }, [dropdownTimeout]);

  const currentPastHero = externalPastHero !== undefined ? externalPastHero : pastHero;

  return (
    <nav className="glass-navbar fixed top-0 left-0 right-0 z-50">
      <div className="flex justify-between items-center px-4 sm:px-6 md:px-12 lg:px-20 py-3 md:py-2">
        {/* Brand */}
        {logo}

        {/* Right Side - Navigation + CTA */}
        <div className="hidden lg:flex items-center space-x-8">
          {/* Desktop Navigation */}
          <div className="flex items-center space-x-8">
            {/* Product Link */}
            <Link
              href="/products"
              className={`nav-link ${
                currentPastHero ? 'text-travel-black' : 'text-travel-white'
              } hover:text-travel-black transition-colors duration-300`}
            >
              Products
            </Link>

            {/* 2030 Link */}
            <Link
              href="/vision-2030"
              className={`nav-link ${
                currentPastHero ? 'text-travel-black' : 'text-travel-white'
              } hover:text-travel-black transition-colors duration-300`}
            >
              Vision 2030
            </Link>

            {/* Explore Dropdown */}
            <div className="relative group">
              <button
                className={`nav-link ${
                  currentPastHero ? 'text-travel-black' : 'text-travel-white'
                } hover:text-travel-black transition-colors duration-300 flex items-center space-x-1`}
                onMouseEnter={handleDropdownMouseEnter}
                onMouseLeave={handleDropdownMouseLeave}
              >
                <span>Explore</span>
                <svg
                  className="w-4 h-4 transition-transform duration-300 group-hover:rotate-180"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              <div
                className={`absolute top-full right-0 mt-10 w-48 bg-slate-50/95 backdrop-blur-md rounded-xl shadow-lg border border-slate-200/50 transition-all duration-300 ${
                  isExploreDropdownOpen
                    ? 'opacity-100 visible translate-y-0'
                    : 'opacity-0 invisible -translate-y-2'
                }`}
                onMouseEnter={handleDropdownMouseEnter}
                onMouseLeave={handleDropdownMouseLeave}
              >
                <div className="py-2">
                  <Link
                    href="/ecosystem"
                    className="dropdown-item group block px-4 py-3 text-slate-700 hover:bg-slate-100/80 transition-all duration-300 hover:translate-x-2 hover:shadow-md"
                  >
                    <span className="flex items-center justify-between">
                      <span>Ecosystem</span>
                      <svg
                        className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0 text-slate-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </span>
                  </Link>
                  <Link
                    href="/rare-earth-mineral"
                    className="dropdown-item group block px-4 py-3 text-slate-700 hover:bg-slate-100/80 transition-all duration-300 hover:translate-x-2 hover:shadow-md"
                  >
                    <span className="flex items-center justify-between">
                      <span>Rare Minerals</span>
                      <svg
                        className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0 text-slate-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </span>
                  </Link>
                  <a
                    href="/blog"
                    className="dropdown-item group block px-4 py-3 text-slate-700 hover:bg-slate-100/80 transition-all duration-300 hover:translate-x-2 hover:shadow-md"
                  >
                    <span className="flex items-center justify-between">
                      <span>Blog</span>
                      <svg
                        className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0 text-slate-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </span>
                  </a>
                  <Link
                    href="/toto-token"
                    className="dropdown-item group block px-4 py-3 text-slate-700 hover:bg-slate-100/80 transition-all duration-300 hover:translate-x-2 hover:shadow-md"
                  >
                    <span className="flex items-center justify-between">
                      <span>Toto Token</span>
                      <svg
                        className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0 text-slate-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </span>
                  </Link>
                  <Link
                    href="/doc-imprint"
                    className="dropdown-item group block px-4 py-3 text-slate-700 hover:bg-slate-100/80 transition-all duration-300 hover:translate-x-2 hover:shadow-md"
                  >
                    <span className="flex items-center justify-between">
                      <span>Doc & Imprint</span>
                      <svg
                        className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0 text-slate-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </span>
                  </Link>
                  <Link
                    href="/faq"
                    className="dropdown-item group block px-4 py-3 text-slate-700 hover:bg-slate-100/80 transition-all duration-300 hover:translate-x-2 hover:shadow-md"
                  >
                    <span className="flex items-center justify-between">
                      <span>FAQ</span>
                      <svg
                        className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0 text-slate-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Desktop CTA */}
          <a
            href="https://app.totofinance.co/"
            target="_blank"
            rel="noopener noreferrer"
            className={`glass-nav-btn ${
              currentPastHero ? '' : 'glass-nav-btn--light'
            } px-6 py-2.5 rounded-full text-sm font-medium tracking-wide uppercase hover:scale-105 transition-all duration-300`}
          >
            Global Markets
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle mobile menu"
        >
          <div
            className={`w-6 h-6 flex flex-col justify-center space-y-1 transition-all duration-300 ${
              isMobileMenuOpen ? 'rotate-45' : ''
            }`}
          >
            <span
              className={`block h-0.5 bg-current transition-all duration-300 ${
                currentPastHero ? 'bg-travel-black' : 'bg-travel-white'
              } ${isMobileMenuOpen ? 'rotate-90 translate-y-1.5' : ''}`}
            ></span>
            <span
              className={`block h-0.5 bg-current transition-all duration-300 ${
                currentPastHero ? 'bg-travel-black' : 'bg-travel-white'
              } ${isMobileMenuOpen ? 'opacity-0' : ''}`}
            ></span>
            <span
              className={`block h-0.5 bg-current transition-all duration-300 ${
                currentPastHero ? 'bg-travel-black' : 'bg-travel-white'
              } ${isMobileMenuOpen ? '-rotate-90 -translate-y-1.5' : ''}`}
            ></span>
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden transition-all duration-300 ${
          isMobileMenuOpen
            ? 'max-h-screen opacity-100'
            : 'max-h-0 opacity-0 overflow-hidden'
        }`}
      >
        <div className="bg-white/95 backdrop-blur-md border-t border-white/20 flex flex-col h-[80vh]">
          {/* Scrollable Content */}
          <div className="flex-1 overflow-y-auto px-4 py-4 mobile-menu-container">
            <div className="space-y-4">
              <Link
                href="/products"
                className="block py-3 text-travel-black hover:text-travel-gold transition-colors duration-200"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Products
              </Link>

              <Link
                href="/vision-2030"
                className="block py-3 text-travel-black hover:text-travel-gold transition-colors duration-200"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Vision 2030
              </Link>

              <a
                href="/blog"
                className="block py-3 text-travel-black hover:text-travel-gold transition-colors duration-200"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Blog
              </a>

              <Link
                href="/ecosystem"
                className="block py-3 text-travel-black hover:text-travel-gold transition-colors duration-200"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Ecosystem
              </Link>

              <Link
                href="/rare-earth-mineral"
                className="block py-3 text-travel-black hover:text-travel-gold transition-colors duration-200"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Rare Minerals
              </Link>

              <Link
                href="/doc-imprint"
                className="block py-3 text-travel-black hover:text-travel-gold transition-colors duration-200"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Doc & Imprint
              </Link>

              <Link
                href="/faq"
                className="block py-3 text-travel-black hover:text-travel-gold transition-colors duration-200"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                FAQ
              </Link>
            </div>
          </div>

          {/* Fixed CTA at Bottom */}
          <div className="flex-shrink-0 border-t border-gray-200 px-4 py-4 bg-white/95">
            <a
              href="https://app.totofinance.co/"
              target="_blank"
              rel="noopener noreferrer"
              className="glass-nav-btn w-full text-center block px-6 py-3 rounded-full text-sm font-medium tracking-wide uppercase hover:scale-105 transition-all duration-300"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Global Markets
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

