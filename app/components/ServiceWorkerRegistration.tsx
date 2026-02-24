'use client';

import { useEffect } from 'react';

// Type declaration for TrustedScriptURL (browser API)
declare global {
  interface TrustedScriptURL {
    toString(): string;
  }
}

export function ServiceWorkerRegistration() {
  useEffect(() => {
    if (typeof window === 'undefined' || !('serviceWorker' in navigator)) {
      return;
    }

    // Wait for Trusted Types policy to be set up
    const registerServiceWorker = (retries = 10) => {
      try {
        const trustedTypes = (window as any).trustedTypes;
        let serviceWorkerURL: string | TrustedScriptURL = '/sw.js';

        // If Trusted Types is enabled, we need to create a TrustedScriptURL
        if (trustedTypes) {
          // Try to get the default policy first
          let policy = trustedTypes.defaultPolicy;
          
          // If no default policy exists, try to create one
          if (!policy) {
            try {
              policy = trustedTypes.createPolicy('default', {
                createScriptURL: (url: string) => url,
              });
            } catch (e) {
              // Policy might already exist, try to get it by name
              policy = trustedTypes.createPolicy('service-worker', {
                createScriptURL: (url: string) => url,
              });
            }
          }

          if (policy) {
            serviceWorkerURL = policy.createScriptURL('/sw.js') as TrustedScriptURL;
          } else if (retries > 0) {
            // Policy not ready yet, retry after a short delay
            setTimeout(() => registerServiceWorker(retries - 1), 50);
            return;
          }
        }

        // Register service worker with TrustedScriptURL
        // TypeScript doesn't know that register() accepts TrustedScriptURL, but browsers do
        navigator.serviceWorker
          .register(serviceWorkerURL as any, { scope: '/' })
          .then((registration) => {
            console.log('Service Worker registered:', registration.scope);

            // Check for updates periodically
            setInterval(() => {
              registration.update();
            }, 60 * 60 * 1000); // Check every hour
          })
          .catch((error) => {
            console.error('Service Worker registration failed:', error);
          });
      } catch (error) {
        console.error('Service Worker registration error:', error);
        // If Trusted Types is blocking and we have retries left, try again
        if (retries > 0 && (error as Error).message?.includes('TrustedScriptURL')) {
          setTimeout(() => registerServiceWorker(retries - 1), 50);
        }
      }
    };

    // Start registration with a small delay to allow TrustedTypesPolicy to initialize
    setTimeout(() => registerServiceWorker(), 100);
  }, []);

  return null;
}

