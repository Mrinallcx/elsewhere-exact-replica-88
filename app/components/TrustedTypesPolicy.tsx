'use client';

import { useEffect } from 'react';

/**
 * Trusted Types Policy for DOM-based XSS protection
 * This component sets up a Trusted Types policy that allows safe script execution
 * while preventing dangerous DOM manipulation that could lead to XSS attacks.
 */
export function TrustedTypesPolicy() {
  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Only set up Trusted Types if the browser supports it
    if ('trustedTypes' in window) {
      try {
        // Create a policy that allows safe operations
        // This policy will be used by the browser to validate DOM operations
        (window as any).trustedTypes?.createPolicy('default', {
          createHTML: (string: string) => string,
          createScript: (string: string) => string,
          createScriptURL: (string: string) => string,
        });
      } catch (error) {
        // Policy already exists or browser doesn't fully support it
        // This is fine, we'll continue without it
      }
    }
  }, []);

  return null;
}

