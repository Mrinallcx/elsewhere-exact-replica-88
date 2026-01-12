"use client";

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

interface VideoBackgroundProps {
  videoSrc: string;
  fallbackImage: string;
  fallbackAlt: string;
  className?: string;
  overlayClassName?: string;
  videoClassName?: string;
  priority?: boolean;
}

export function VideoBackground({
  videoSrc,
  fallbackImage,
  fallbackAlt,
  className = "hero-fallback",
  overlayClassName = "hero-overlay",
  videoClassName = "hero-video",
  priority = false
}: VideoBackgroundProps) {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [shouldLoadVideo, setShouldLoadVideo] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Hide the server-rendered native img when this component loads (for priority images)
  // The native img ensures fetchpriority is in initial HTML for Lighthouse
  useEffect(() => {
    if (!priority) return;
    
    // Find and hide the native img that was server-rendered for Lighthouse
    // It could be hero-desktop.webp or hero-mobile.webp depending on screen size
    const nativeImg = document.querySelector('picture img[fetchpriority="high"]') as HTMLImageElement;
    if (nativeImg && nativeImg.style.position === 'absolute') {
      // Hide it since VideoBackground Image will take over
      nativeImg.style.display = 'none';
    }
  }, [priority]);

  // Delay video loading until after image loads and page is interactive
  // This ensures the LCP image gets full bandwidth priority
  useEffect(() => {
    if (!priority) {
      // For non-priority videos, load immediately
      setShouldLoadVideo(true);
      return;
    }

    // For priority hero videos, delay loading to prioritize image
    const timer = setTimeout(() => {
      setShouldLoadVideo(true);
    }, 1000); // Wait 1 second to let LCP image load first

    return () => clearTimeout(timer);
  }, [priority]);

  // Load video source when ready
  useEffect(() => {
    if (shouldLoadVideo && videoRef.current && !videoRef.current.src) {
      videoRef.current.src = videoSrc;
      videoRef.current.load();
    }
  }, [shouldLoadVideo, videoSrc]);

  return (
    <>
      {fallbackImage && (
        <div className={className}>
          <div ref={containerRef} style={{ position: 'relative', width: '100%', height: '100%' }}>
            <Image
              src={fallbackImage}
              alt={fallbackAlt}
              fill
              priority={priority}
              quality={80}
              sizes="100vw"
              unoptimized={priority}
              style={{
                objectFit: 'cover',
                opacity: isVideoLoaded ? 0 : 1,
                transition: 'opacity 0.5s ease-in-out',
              }}
            />
          </div>
        </div>
      )}
      <video
        ref={videoRef}
        className={videoClassName}
        autoPlay
        muted
        loop
        playsInline
        preload="none"
        onLoadedData={() => setIsVideoLoaded(true)}
        aria-hidden="true"
      >
        <track kind="captions" srcLang="en" label="English captions" />
      </video>
      <div className={overlayClassName} />
    </>
  );
}

