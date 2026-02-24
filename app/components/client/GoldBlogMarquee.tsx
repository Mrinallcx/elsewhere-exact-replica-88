"use client";

import Image from 'next/image';

export function GoldBlogMarquee() {
  return (
    <div className="blog-marquee">
      <div className="blog-marquee-track">
        {/* Blog Card 1 */}
        <article className="blog-card blog-card--marquee">
          <div className="blog-card-image-wrapper">
            <Image src="/assets/images/gold-market-analysis.png" alt="Gold Market Analysis" width={400} height={250} className="blog-card-image" unoptimized />
          </div>
          <div className="blog-card-body">
            <h3 className="blog-title">Gold Market Trends: What Investors Need to Know</h3>
            <p className="blog-excerpt">
              Explore the latest trends in the gold market and how tokenization is revolutionizing precious metals investment.
            </p>
            <a href="https://totofinance.co/blog/post/the-gold-breakthrough-4000-oz-and-the-new-era-of-value" className="blog-read-more" target="_blank" rel="noopener noreferrer">
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
            <Image src="/assets/images/gold.png" alt="Complete Guide to Gold Tokenization" width={400} height={250} className="blog-card-image" unoptimized />
          </div>
          <div className="blog-card-body">
            <h3 className="blog-title">Complete Guide to Gold Tokenization</h3>
            <p className="blog-excerpt">
              Learn everything about gold tokenization, from benefits to risks, and how to get started with digital gold investment.
            </p>
            <a href="https://totofinance.co/blog/post/an-overview-of-tokenized-commodities" className="blog-read-more" aria-label="Learn about gold tokenization guide" target="_blank" rel="noopener noreferrer">
              Learn about gold tokenization
              <svg viewBox="0 0 17 17" fill="none">
                <path d="M14.446 2.083L4.779 2.083C4.365 2.083 4.029 2.419 4.029 2.833C4.029 3.247 4.365 3.583 4.779 3.583L12.635 3.583L2.582 13.636C2.289 13.929 2.289 14.404 2.582 14.697C2.875 14.99 3.35 14.99 3.643 14.697L13.696 4.644L13.696 12.5C13.696 12.914 14.031 13.25 14.446 13.25C14.86 13.25 15.196 12.914 15.196 12.5L15.196 2.833C15.196 2.419 14.86 2.083 14.446 2.083Z" fill="currentColor"/>
              </svg>
            </a>
          </div>
        </article>

        {/* Blog Card 3 */}
        <article className="blog-card blog-card--marquee">
          <div className="blog-card-image-wrapper">
            <Image src="/assets/images/silver.png" alt="Security & Transparency in Digital Gold" width={400} height={250} className="blog-card-image" unoptimized />
          </div>
          <div className="blog-card-body">
            <h3 className="blog-title">Security & Transparency in Digital Gold</h3>
            <p className="blog-excerpt">
              Discover how our platform ensures maximum security and transparency for your tokenized gold investments.
            </p>
            <a href="https://totofinance.co/blog/post/the-liquidity-revolution-why-tokenized-assets-outperform-traditional-investments" className="blog-read-more" aria-label="Read about security and transparency in digital gold" target="_blank" rel="noopener noreferrer">
              Read about security and transparency
              <svg viewBox="0 0 17 17" fill="none">
                <path d="M14.446 2.083L4.779 2.083C4.365 2.083 4.029 2.419 4.029 2.833C4.029 3.247 4.365 3.583 4.779 3.583L12.635 3.583L2.582 13.636C2.289 13.929 2.289 14.404 2.582 14.697C2.875 14.99 3.35 14.99 3.643 14.697L13.696 4.644L13.696 12.5C13.696 12.914 14.031 13.25 14.446 13.25C14.86 13.25 15.196 12.914 15.196 12.5L15.196 2.833C15.196 2.419 14.86 2.083 14.446 2.083Z" fill="currentColor"/>
              </svg>
            </a>
          </div>
        </article>

        {/* Duplicate set for seamless scroll */}
        <article className="blog-card blog-card--marquee">
          <div className="blog-card-image-wrapper">
            <Image src="/assets/images/gold-market-analysis.png" alt="Gold Market Analysis" width={400} height={250} className="blog-card-image" unoptimized />
          </div>
          <div className="blog-card-body">
            <h3 className="blog-title">Gold Market Trends: What Investors Need to Know</h3>
            <p className="blog-excerpt">Explore the latest trends in the gold market and how tokenization is revolutionizing precious metals investment.</p>
            <a href="https://totofinance.co/blog/post/the-gold-breakthrough-4000-oz-and-the-new-era-of-value" className="blog-read-more" target="_blank" rel="noopener noreferrer">
              Read article
              <svg viewBox="0 0 17 17" fill="none"><path d="M14.446 2.083L4.779 2.083C4.365 2.083 4.029 2.419 4.029 2.833C4.029 3.247 4.365 3.583 4.779 3.583L12.635 3.583L2.582 13.636C2.289 13.929 2.289 14.404 2.582 14.697C2.875 14.99 3.35 14.99 3.643 14.697L13.696 4.644L13.696 12.5C13.696 12.914 14.031 13.25 14.446 13.25C14.86 13.25 15.196 12.914 15.196 12.5L15.196 2.833C15.196 2.419 14.86 2.083 14.446 2.083Z" fill="currentColor"/></svg>
            </a>
          </div>
        </article>

        <article className="blog-card blog-card--marquee">
          <div className="blog-card-image-wrapper">
            <Image src="/assets/images/gold.png" alt="Complete Guide to Gold Tokenization" width={400} height={250} className="blog-card-image" unoptimized />
          </div>
          <div className="blog-card-body">
            <h3 className="blog-title">Complete Guide to Gold Tokenization</h3>
            <p className="blog-excerpt">Learn everything about gold tokenization, from benefits to risks, and how to get started with digital gold investment.</p>
            <a href="https://totofinance.co/blog/post/an-overview-of-tokenized-commodities" className="blog-read-more" aria-label="Learn about gold tokenization guide" target="_blank" rel="noopener noreferrer">
              Learn about gold tokenization
              <svg viewBox="0 0 17 17" fill="none"><path d="M14.446 2.083L4.779 2.083C4.365 2.083 4.029 2.419 4.029 2.833C4.029 3.247 4.365 3.583 4.779 3.583L12.635 3.583L2.582 13.636C2.289 13.929 2.289 14.404 2.582 14.697C2.875 14.99 3.35 14.99 3.643 14.697L13.696 4.644L13.696 12.5C13.696 12.914 14.031 13.25 14.446 13.25C14.86 13.25 15.196 12.914 15.196 12.5L15.196 2.833C15.196 2.419 14.86 2.083 14.446 2.083Z" fill="currentColor"/></svg>
            </a>
          </div>
        </article>

        <article className="blog-card blog-card--marquee">
          <div className="blog-card-image-wrapper">
            <Image src="/assets/images/silver.png" alt="Security & Transparency in Digital Gold" width={400} height={250} className="blog-card-image" unoptimized />
          </div>
          <div className="blog-card-body">
            <h3 className="blog-title">Security & Transparency in Digital Gold</h3>
            <p className="blog-excerpt">Discover how our platform ensures maximum security and transparency for your tokenized gold investments.</p>
            <a href="https://totofinance.co/blog/post/the-liquidity-revolution-why-tokenized-assets-outperform-traditional-investments" className="blog-read-more" aria-label="Read about security and transparency in digital gold" target="_blank" rel="noopener noreferrer">
              Read about security and transparency
              <svg viewBox="0 0 17 17" fill="none"><path d="M14.446 2.083L4.779 2.083C4.365 2.083 4.029 2.419 4.029 2.833C4.029 3.247 4.365 3.583 4.779 3.583L12.635 3.583L2.582 13.636C2.289 13.929 2.289 14.404 2.582 14.697C2.875 14.99 3.35 14.99 3.643 14.697L13.696 4.644L13.696 12.5C13.696 12.914 14.031 13.25 14.446 13.25C14.86 13.25 15.196 12.914 15.196 12.5L15.196 2.833C15.196 2.419 14.86 2.083 14.446 2.083Z" fill="currentColor"/></svg>
            </a>
          </div>
        </article>
      </div>
    </div>
  );
}

