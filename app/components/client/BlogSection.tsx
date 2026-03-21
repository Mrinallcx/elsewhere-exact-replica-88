"use client";

import Image from 'next/image';

const blogPosts = [
  {
    image: 'https://blog.totofinance.co/wp-content/uploads/2025/10/Blo-Banner-2.png',
    title: 'The Gold Breakthrough: $4,000/oz and the New Era of Value',
    excerpt: 'Gold surpasses $4,000, signaling a new era of tokenized assets and digital finance growth.',
    url: 'https://totofinance.co/blog/post/the-gold-breakthrough-4000-oz-and-the-new-era-of-value',
  },
  {
    image: 'https://blog.totofinance.co/wp-content/uploads/2025/09/image.png',
    title: 'The RWA Momentum: Why Real-World Assets Are Redefining Crypto',
    excerpt: 'Real-world assets drive crypto\'s evolution, with tokenized credit, treasuries, gold, and gemstones transforming finance.',
    url: 'https://totofinance.co/blog/post/the-rwa-momentum-why-real-world-assets-are-redefining-crypto',
  },
  {
    image: 'https://blog.totofinance.co/wp-content/uploads/2025/08/Peach-and-Orange-Minimal-Lead-Magnet-Opt-In-Blog-Banner-1.png',
    title: 'The Liquidity Revolution: Why Tokenized Assets Outperform Traditional Investments',
    excerpt: 'Tokenization revolutionizes asset trading, offering global liquidity and instant ownership transfer for valuable commodities.',
    url: 'https://totofinance.co/blog/post/the-liquidity-revolution-why-tokenized-assets-outperform-traditional-investments',
  },
  {
    image: 'https://blog.totofinance.co/wp-content/uploads/2025/08/Own-without-limits.png',
    title: 'From Elite to Everyone: How Tokenization Democratizes Wealth',
    excerpt: 'Tokenization democratizes wealth, enabling anyone to own and trade once-exclusive high-value real-world assets.',
    url: 'https://totofinance.co/blog/post/from-elite-to-everyone-how-tokenization-democratizes-wealth',
  },
  {
    image: 'https://images.cointelegraph.com/cdn-cgi/image/format=auto,onerror=redirect,quality=90,width=717/https://s3.cointelegraph.com/storage/uploads/view/2927b60eedfc872f9b2f9c03999eb2ab.jpeg',
    title: 'How does tokenization help transform illiquid real estate ownership into a liquid one?',
    excerpt: 'Blockchain enables real estate tokenization, allowing fractional ownership and accessible investment in physical properties.',
    url: 'https://cointelegraph.com/news/how-does-tokenization-help-transform-illiquid-real-estate-ownership-into-a-liquid-one',
  },
  {
    image: '/assets/images/business-insider-banner.jpg',
    title: 'Toto Finance Debuts New Brand and Platform for Tokenization of Commodities and Real-World Assets',
    excerpt: 'Toto Finance expands beyond diamonds to build a global platform for tokenized commodities.',
    url: 'https://markets.businessinsider.com/news/stocks/toto-finance-debuts-new-brand-and-platform-for-tokenization-of-commodities-and-real-world-assets-1035555290#:~:text=New%20York%2C%20NY%2C%20United%20States,the%20broader%20%2430%20trillion%20global',
  },
];

export function BlogSection() {
  return (
    <section className="resources-section px-6 md:px-8 lg:px-12 py-20 md:py-40">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="resources-heading">Insights & Market Intelligence</h2>
          <p className="resources-subtitle">
            Research, analysis, and market updates on tokenized commodities, real-world assets, and the infrastructure that powers global trade.
          </p>
        </div>

        <div className="resources-tabs mb-12">
          <button type="button" className="tab-btn active">
            RWA Updates
          </button>
        </div>

        <div className="blog-marquee">
          <div className="blog-marquee-track">
            {/* Blog posts - duplicated for seamless scroll */}
            {[...blogPosts, blogPosts[0]].map((post, index) => (
              <article key={index} className="blog-card blog-card--marquee">
                <div className="blog-card-image-wrapper">
                  <Image
                    src={post.image}
                    alt={post.title}
                    width={400}
                    height={250}
                    className="blog-card-image"
                    loading="lazy"
                    quality={75}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 400px"
                    unoptimized={post.image.startsWith('/')}
                  />
                </div>
                <div className="blog-card-body">
                  <h3 className="blog-title">{post.title}</h3>
                  <p className="blog-excerpt">{post.excerpt}</p>
                  <a
                    href={post.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="blog-read-more"
                  >
                    Read: {post.title.length > 40 ? post.title.substring(0, 40) + '...' : post.title}
                    <svg viewBox="0 0 17 17" fill="none">
                      <path
                        d="M14.446 2.083L4.779 2.083C4.365 2.083 4.029 2.419 4.029 2.833C4.029 3.247 4.365 3.583 4.779 3.583L12.635 3.583L2.582 13.636C2.289 13.929 2.289 14.404 2.582 14.697C2.875 14.99 3.35 14.99 3.643 14.697L13.696 4.644L13.696 12.5C13.696 12.914 14.031 13.25 14.446 13.25C14.86 13.25 15.196 12.914 15.196 12.5L15.196 2.833C15.196 2.419 14.86 2.083 14.446 2.083Z"
                        fill="currentColor"
                      />
                    </svg>
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <a
            href="https://totofinance.co/blog"
            className="resources-cta"
          >
            Explore Insights
          </a>
        </div>
      </div>
    </section>
  );
}

