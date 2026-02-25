import bundleAnalyzer from '@next/bundle-analyzer';

const withBundleAnalyzer = bundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    qualities: [75, 80, 85],
    // Allow local images to be served directly (for Google crawler compatibility)
    unoptimized: false,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'firebasestorage.googleapis.com',
      },
      {
        protocol: 'https',
        hostname: 'img.decrypt.co',
      },
      {
        protocol: 'https',
        hostname: 'images.cointelegraph.com',
      },
      {
        protocol: 'https',
        hostname: 'www.coindesk.com',
      },
      {
        protocol: 'https',
        hostname: 'specials-images.forbesimg.com',
      },
      {
        protocol: 'https',
        hostname: 'cdn.decrypt.co',
      },
      {
        protocol: 'https',
        hostname: 's3.cointelegraph.com',
      },
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
      },
      {
        protocol: 'https',
        hostname: 'blog.totofinance.co',
      },
    ],
  },
  // External packages for server components (moved from experimental in Next.js 16)
  serverExternalPackages: ['sharp'],
  experimental: {
    // Hint Next.js to optimize how these packages are bundled
    optimizePackageImports: [
      'lucide-react',
      '@radix-ui/react-icons',
      'recharts', // Tree-shake unused recharts components
      '@radix-ui/react-accordion',
      '@radix-ui/react-dialog',
      '@radix-ui/react-dropdown-menu',
      '@radix-ui/react-tabs',
      '@radix-ui/react-tooltip',
      'date-fns', // Tree-shake unused date-fns functions
      'embla-carousel-react', // Tree-shake unused carousel components
      'react-hook-form', // Tree-shake unused form utilities
      '@tanstack/react-query', // Tree-shake unused query features
      'clsx', // Already small but optimize
      'tailwind-merge', // Already small but optimize
    ],
    // Optimize server components
    serverActions: {
      bodySizeLimit: '2mb',
    },
  },
  // Compiler optimizations
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production' ? {
      exclude: ['error', 'warn'],
    } : false,
  },
  // Turbopack configuration (Next.js 16 uses Turbopack by default)
  turbopack: {},
  // Force modern JS output - fallback if legacyBrowsers doesn't work
  webpack: (config, { isServer }) => {
    if (!isServer) {
      // Target modern browsers only (ES2020+) to prevent polyfills
      config.target = ['web', 'es2020'];
      
      // Prevent polyfills from being included (removes ~38 KiB polyfill-nomodule.js)
      config.resolve.alias = {
        ...config.resolve.alias,
        'core-js': false,
        'regenerator-runtime': false,
      };
    }
    return config;
  },
  // Performance optimizations
  compress: true,
  poweredByHeader: false,
  reactStrictMode: true,
  // Note: swcMinify is enabled by default in Next.js 16, no need to specify
  async headers() {
    return [
      {
        // Global headers for all pages - ensure Google can always crawl
        source: '/:path*',
        headers: [
          {
            key: 'X-Robots-Tag',
            value: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=31536000; includeSubDomains; preload',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()',
          },
          {
            key: 'Content-Security-Policy',
            value: process.env.NODE_ENV === 'production'
              ? "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://js.hs-scripts.com https://www.googletagmanager.com https://www.google-analytics.com https://totofinance.co; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' data: https: blob:; media-src 'self' https: blob:; connect-src 'self' https://api.hubapi.com https://www.google-analytics.com https://www.googletagmanager.com; frame-src 'self' https://js.hs-scripts.com; base-uri 'self'; form-action 'self'; upgrade-insecure-requests; block-all-mixed-content;"
              : "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://js.hs-scripts.com https://www.googletagmanager.com https://www.google-analytics.com https://totofinance.co; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' data: https: blob:; media-src 'self' https: blob:; connect-src 'self' https://api.hubapi.com https://www.google-analytics.com https://www.googletagmanager.com; frame-src 'self' https://js.hs-scripts.com; base-uri 'self'; form-action 'self'; upgrade-insecure-requests; block-all-mixed-content;",
          },
          {
            key: 'Cross-Origin-Opener-Policy',
            value: 'same-origin',
          },
          {
            key: 'Cross-Origin-Embedder-Policy',
            value: 'unsafe-none',
          },
        ],
      },
      {
        // Cache Next.js static files with long-term caching (immutable)
        // MIME types are handled by Netlify's _headers file
        source: '/_next/static/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        // Cache optimized images from Next.js Image component
        source: '/_next/image',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        // Cache favicon for Google Search (recommended by Google)
        // Allow cache but with revalidation for updates
        source: '/favicon.svg',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=86400, must-revalidate',
          },
          {
            key: 'Content-Type',
            value: 'image/svg+xml',
          },
        ],
      },
      {
        // No cache for logo/icon files
        source: '/logo/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'no-cache, no-store, must-revalidate, max-age=0',
          },
          {
            key: 'Pragma',
            value: 'no-cache',
          },
          {
            key: 'Expires',
            value: '0',
          },
        ],
      },
      {
        // No cache for platform icon
        source: '/lovable-uploads/platform-icon.svg',
        headers: [
          {
            key: 'Cache-Control',
            value: 'no-cache, no-store, must-revalidate, max-age=0',
          },
          {
            key: 'Pragma',
            value: 'no-cache',
          },
          {
            key: 'Expires',
            value: '0',
          },
        ],
      },
      {
        // No cache for tiamonds logo
        source: '/totofinance.svg',
        headers: [
          {
            key: 'Cache-Control',
            value: 'no-cache, no-store, must-revalidate, max-age=0',
          },
          {
            key: 'Pragma',
            value: 'no-cache',
          },
          {
            key: 'Expires',
            value: '0',
          },
        ],
      },
      {
        // Cache HTML pages via CDN while keeping browser cache short-lived
        source: '/',
        headers: [
          {
            key: 'Cache-Control',
            value:
              'public, max-age=0, s-maxage=3600, stale-while-revalidate=86400',
          },
        ],
      },
      {
        source: '/products',
        headers: [
          {
            key: 'Cache-Control',
            value:
              'public, max-age=0, s-maxage=3600, stale-while-revalidate=86400',
          },
        ],
      },
      {
        source: '/toto-token',
        headers: [
          {
            key: 'Cache-Control',
            value:
              'public, max-age=0, s-maxage=3600, stale-while-revalidate=86400',
          },
        ],
      },
      {
        source: '/vision-2030',
        headers: [
          {
            key: 'Cache-Control',
            value:
              'public, max-age=0, s-maxage=3600, stale-while-revalidate=86400',
          },
        ],
      },
      {
        source: '/ecosystem',
        headers: [
          {
            key: 'Cache-Control',
            value:
              'public, max-age=0, s-maxage=3600, stale-while-revalidate=86400',
          },
        ],
      },
      {
        source: '/rare-earth-mineral',
        headers: [
          {
            key: 'Cache-Control',
            value:
              'public, max-age=0, s-maxage=3600, stale-while-revalidate=86400',
          },
        ],
      },
      {
        source: '/careers',
        headers: [
          {
            key: 'Cache-Control',
            value:
              'public, max-age=0, s-maxage=3600, stale-while-revalidate=86400',
          },
        ],
      },
      {
        source: '/faq',
        headers: [
          {
            key: 'Cache-Control',
            value:
              'public, max-age=0, s-maxage=3600, stale-while-revalidate=86400',
          },
        ],
      },
      {
        source: '/doc-imprint',
        headers: [
          {
            key: 'Cache-Control',
            value:
              'public, max-age=0, s-maxage=3600, stale-while-revalidate=86400',
          },
        ],
      },
      {
        // CDN cache for all tokenized asset pages
        source: '/tokenized-:asset',
        headers: [
          {
            key: 'Cache-Control',
            value:
              'public, max-age=0, s-maxage=3600, stale-while-revalidate=86400',
          },
        ],
      },
      {
        // CDN cache for how-tokenization-works page
        source: '/how-tokenization-works',
        headers: [
          {
            key: 'Cache-Control',
            value:
              'public, max-age=0, s-maxage=3600, stale-while-revalidate=86400',
          },
        ],
      },
      {
        // CDN cache for about page
        source: '/about',
        headers: [
          {
            key: 'Cache-Control',
            value:
              'public, max-age=0, s-maxage=3600, stale-while-revalidate=86400',
          },
        ],
      },
    ];
  },
  async redirects() {
    return [
      // Page redirects
      {
        source: '/war-ready-package',
        destination: '/products',
        permanent: true,
      },
      {
        source: '/get',
        destination: '/products',
        permanent: true,
      },
      {
        source: '/solutions',
        destination: '/products',
        permanent: true,
      },
      {
        source: '/governance',
        destination: '/products',
        permanent: true,
      },
      {
        source: '/tokenization',
        destination: '/products',
        permanent: true,
      },
      {
        source: '/tiatoken',
        destination: '/products',
        permanent: true,
      },
      {
        source: '/diamonds',
        destination: '/products',
        permanent: true,
      },
      {
        source: '/tokenized-faq',
        destination: '/products',
        permanent: true,
      },
      {
        source: '/benefits',
        destination: '/products',
        permanent: true,
      },
      {
        source: '/media-kit',
        destination: '/products',
        permanent: true,
      },
      {
        source: '/toto-liquidity-program',
        destination: '/products',
        permanent: true,
      },
      {
        source: '/physical-validator',
        destination: '/products',
        permanent: true,
      },
      {
        source: '/tiamonds',
        destination: '/products',
        permanent: true,
      },
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'www.totofinance.co',
          },
        ],
        destination: 'https://totofinance.co/:path*',
        permanent: true,
      },
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'tiamonds.com',
          },
        ],
        destination: 'https://totofinance.co/:path*',
        permanent: true,
      },
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'www.tiamonds.com',
          },
        ],
        destination: 'https://totofinance.co/:path*',
        permanent: true,
      },
    ];
  },
  async rewrites() {
    return [
      // Blog index
      { source: '/blog', destination: '/blog/index.html' },
      { source: '/blog/', destination: '/blog/index.html' },
      // Article pages: /blog/posts/slug/ (legacy) and /blog/post/slug/ (new URL) -> serve index.html
      { source: '/blog/posts', destination: '/blog/posts/index.html' },
      { source: '/blog/posts/', destination: '/blog/posts/index.html' },
      { source: '/blog/posts/:path*', destination: '/blog/posts/:path*/index.html' },
      { source: '/blog/post', destination: '/blog/posts/index.html' },
      { source: '/blog/post/', destination: '/blog/posts/index.html' },
      { source: '/blog/post/:path*', destination: '/blog/posts/:path*/index.html' },
      // Pagination: /blog/page/2/ etc.
      { source: '/blog/page/:path*', destination: '/blog/page/:path*/index.html' },
      // Tags: /blog/tags/accessibility/ etc.
      { source: '/blog/tags', destination: '/blog/tags/index.html' },
      { source: '/blog/tags/', destination: '/blog/tags/index.html' },
      { source: '/blog/tags/:path*', destination: '/blog/tags/:path*/index.html' },
      // Imprint
      { source: '/blog/imprint', destination: '/blog/imprint/index.html' },
      { source: '/blog/imprint/', destination: '/blog/imprint/index.html' },
    ];
  },
};

export default withBundleAnalyzer(nextConfig);
