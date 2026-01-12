"use client";

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

interface LazyVideoProps {
  src: string;
  poster?: string;
  className?: string;
  videoClassName?: string;
  overlayClassName?: string;
  fallbackImage?: string;
  fallbackAlt?: string;
}

export function LazyVideo({
  src,
  poster,
  className = "",
  videoClassName = "",
  overlayClassName = "",
  fallbackImage,
  fallbackAlt = "Video background",
}: LazyVideoProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: '200px' } // Start loading 200px before it comes into view
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isVisible && videoRef.current && !videoRef.current.src) {
      videoRef.current.src = src;
      videoRef.current.load();
    }
  }, [isVisible, src]);

  return (
    <div ref={containerRef} className={className}>
      {isVisible ? (
        <>
          {fallbackImage && (
            <div style={{ position: 'relative', width: '100%', height: '100%' }}>
              <Image
                src={fallbackImage}
                alt={fallbackAlt}
                fill
                quality={75}
                sizes="100vw"
                unoptimized
                style={{
                  objectFit: 'cover',
                  opacity: isVideoLoaded ? 0 : 1,
                  transition: 'opacity 0.5s ease-in-out',
                }}
              />
            </div>
          )}
          <video
            ref={videoRef}
            className={videoClassName}
            autoPlay
            muted
            loop
            playsInline
            poster={poster}
            preload="none"
            onLoadedData={() => setIsVideoLoaded(true)}
            aria-hidden="true"
          >
            <source src={src} type="video/mp4" />
            <track kind="captions" srcLang="en" label="English captions" />
          </video>
          {overlayClassName && <div className={overlayClassName} />}
        </>
      ) : (
        // Show poster or fallback image while not visible
        (poster || fallbackImage) && (
          <div style={{ position: 'relative', width: '100%', height: '100%' }}>
            <Image
              src={fallbackImage || poster!}
              alt={fallbackAlt}
              fill
              quality={75}
              sizes="100vw"
              unoptimized
              style={{ objectFit: 'cover' }}
            />
          </div>
        )
      )}
    </div>
  );
}

