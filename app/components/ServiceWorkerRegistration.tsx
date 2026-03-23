'use client';

import { useEffect } from 'react';

export function ServiceWorkerRegistration() {
  useEffect(() => {
    if (typeof window === 'undefined' || !('serviceWorker' in navigator)) {
      return;
    }

    navigator.serviceWorker.getRegistrations().then((registrations) => {
      for (const registration of registrations) {
        registration.unregister();
      }
    });

    if ('caches' in window) {
      caches.keys().then((cacheNames) => {
        for (const name of cacheNames) {
          caches.delete(name);
        }
      });
    }
  }, []);

  return null;
}

