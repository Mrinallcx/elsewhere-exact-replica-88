import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export default function proxy(request: NextRequest) {
  const { pathname, protocol, hostname } = request.nextUrl;
  
  // Skip HTTPS redirect for localhost (development)
  const isLocalhost = hostname === 'localhost' || hostname === '127.0.0.1';
  
  // Redirect HTTP to HTTPS (301 permanent redirect) - only in production
  // Check both protocol and x-forwarded-proto header (for proxy environments like Vercel)
  if (!isLocalhost && (protocol === 'http:' || request.headers.get('x-forwarded-proto') === 'http')) {
    return NextResponse.redirect(
      `https://${hostname}${pathname}${request.nextUrl.search}`,
      301
    );
  }

  const response = NextResponse.next();

  // Ensure Googlebot and all crawlers can always access content
  // Don't block any search engine crawlers
  const userAgent = request.headers.get('user-agent') || '';
  const isSearchEngineBot = /Googlebot|Bingbot|Slurp|DuckDuckBot|Baiduspider|YandexBot|Sogou|Exabot|facebot|ia_archiver/i.test(userAgent);
  
  // Explicitly allow all search engines - no blocking
  if (isSearchEngineBot) {
    // Ensure search engines get fresh content
    response.headers.set('Cache-Control', 'public, max-age=0, must-revalidate');
  }

  // Cache static assets (images, videos, fonts, etc.) for 365 days (31536000 seconds)
  // Exclude favicon.ico - it has specific headers in next.config.js for Google Search
  const staticAssetPattern = /\.(jpg|jpeg|png|gif|webp|svg|ico|avif|bmp|tiff|woff|woff2|ttf|eot|otf|mp4|webm|ogg|mp3|wav|flac|aac|pdf)$/i;
  
  if (staticAssetPattern.test(pathname) && pathname !== '/favicon.ico') {
    response.headers.set(
      'Cache-Control',
      'public, max-age=31536000, immutable'
    );
  }

  return response;
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - robots.txt (robots file)
     * - sitemap.xml (sitemap file)
     * Note: favicon.ico is included to handle version redirect
     */
    '/((?!api|_next/static|_next/image|robots.txt|sitemap.xml).*)',
  ],
};
