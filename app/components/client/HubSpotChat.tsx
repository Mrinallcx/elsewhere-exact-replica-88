"use client";

import Script from 'next/script';
import { useEffect } from 'react';

// HubSpot Conversations API type declaration
declare global {
  interface Window {
    HubSpotConversations?: {
      widget: {
        open: () => void;
        close: () => void;
      };
    };
  }
}

export function HubSpotChat() {
  return (
    <Script
      type="text/javascript"
      id="hs-script-loader"
      async
      defer
      src="//js-na1.hs-scripts.com/5983274.js"
    />
  );
}

export function ContactSupportButton() {
  const handleClick = () => {
    if (typeof window !== 'undefined' && window.HubSpotConversations) {
      window.HubSpotConversations.widget.open();
    }
  };

  return (
    <button
      onClick={handleClick}
      className="inline-block bg-black text-white px-8 py-3 rounded-full text-base font-medium hover:bg-gray-800 transition-all duration-300"
    >
      Contact Support
    </button>
  );
}

