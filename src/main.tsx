import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Index from './pages/Index';
import './index.css';

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
// ScrollSmoother is a paid bonus plugin; assume it's available in the gsap module under gsap/ScrollSmoother
// If not available, user can include via CDN. We'll try dynamic import fallback.

const router = createBrowserRouter([
  {
    path: '/',
    element: <Index />,
  },
]);

const App: React.FC = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    // try to dynamically import ScrollSmoother if available
    (async () => {
      try {
        const { ScrollSmoother } = await import('gsap/ScrollSmoother');
        // @ts-ignore
        ScrollSmoother.create({ smooth: 2, effects: true });
      } catch (err) {
        // fallback: no smoother available
        // console.warn('ScrollSmoother not available. Include via GSAP CDN if needed.');
      }
    })();
  }, []);

  return (
    <div id="smooth-wrapper">
      <div id="smooth-content">
        <RouterProvider router={router} />
      </div>
    </div>
  );
};

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
