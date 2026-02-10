"use client";

import { useState } from 'react';
import dynamic from 'next/dynamic';

const NewsletterForm = dynamic(
  () => import('./NewsletterForm'),
  { ssr: false }
);

export default function NewsletterSection() {
  const [isNewsletterVideoLoaded, setIsNewsletterVideoLoaded] = useState(false);

  return (
    <section className='newsletter-section pt-16 pb-0 md:pt-32 md:pb-0'>
      <div className='newsletter-bg'>
        <img
          className='newsletter-fallback'
          src='/hero-background/footer-backup.webp'
          alt='Newsletter background fallback'
          width={1920}
          height={1080}
          loading="lazy"
          style={{
            opacity: isNewsletterVideoLoaded ? 0 : 1,
            transition: 'opacity 0.5s ease-in-out',
          }}
        />
        <video
          className='newsletter-video'
          autoPlay
          muted
          loop
          playsInline
          src='/videos/footer.mp4'
          onLoadedData={() => setIsNewsletterVideoLoaded(true)}
          aria-hidden="true"
        >
          <track kind="captions" srcLang="en" label="English captions" />
        </video>
        <div className='newsletter-overlay'></div>
        <NewsletterForm />
      </div>
    </section>
  );
}

