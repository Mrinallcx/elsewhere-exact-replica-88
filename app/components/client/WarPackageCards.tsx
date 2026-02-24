"use client";

import { useState, useEffect } from 'react';
import { RefreshCcw } from 'lucide-react';
import { ProductModalTrigger } from './ProductModalTrigger';

interface Card {
  id: number;
  price: number;
}

export function WarPackageCards() {
  const [visibleCards, setVisibleCards] = useState(4);
  const [allCards, setAllCards] = useState<Card[]>([]);

  useEffect(() => {
    const cards = Array.from({ length: 20 }, (_, index) => ({
      id: index + 1,
      price: 1200 // Same price for all assets
    }));
    setAllCards(cards);
  }, []);

  const loadMoreCards = () => {
    setVisibleCards(prev => Math.min(prev + 4, 20));
  };

  const renderCard = (card: Card, index: number) => (
    <div 
      key={card.id}
      className="category-card category-card-sm bg-black group"
      style={{ 
        transformStyle: 'preserve-3d',
        transform: 'none',
        opacity: 1,
        boxShadow: 'rgba(0, 0, 0, 0.02) 0px 4px 8px 0px, rgba(0, 0, 0, 0.04) 0px 2px 4px 0px',
        transition: 'transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275), box-shadow 0.4s ease, filter 0.3s ease'
      }}
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        const mouseX = e.clientX;
        const mouseY = e.clientY;
        
        const deltaX = mouseX - centerX;
        const deltaY = mouseY - centerY;
        
        const rotateX = (deltaY / rect.height) * 20;
        const rotateY = (deltaX / rect.width) * 20;
        const translateX = (deltaX / rect.width) * 10;
        const translateY = (deltaY / rect.height) * 10;
        
        e.currentTarget.style.transform = `rotateX(${-rotateX}deg) rotateY(${rotateY}deg) translateX(${translateX}px) translateY(${translateY}px) translateZ(50px) scale(1.05)`;
        e.currentTarget.style.boxShadow = 'rgba(0, 0, 0, 0.08) 0px 8px 16px 0px, rgba(0, 0, 0, 0.06) 0px 4px 8px 0px';
        e.currentTarget.style.filter = 'brightness(1.1) contrast(1.1)';
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateZ(50px) scale(1.05)';
        e.currentTarget.style.boxShadow = 'rgba(0, 0, 0, 0.08) 0px 8px 16px 0px, rgba(0, 0, 0, 0.06) 0px 4px 8px 0px';
        e.currentTarget.style.filter = 'brightness(1.1) contrast(1.1)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'none';
        e.currentTarget.style.boxShadow = 'rgba(0, 0, 0, 0.02) 0px 4px 8px 0px, rgba(0, 0, 0, 0.04) 0px 2px 4px 0px';
        e.currentTarget.style.filter = 'none';
      }}
    >
      <div className="absolute bottom-4 left-4 right-4">
        <ProductModalTrigger>
          {(onClick) => (
            <button 
              className="w-full bg-white text-black py-2 px-4 rounded-lg flex items-center justify-center group-hover:justify-between transition-all duration-300 cursor-pointer relative"
              onClick={(e) => {
                e.stopPropagation();
                onClick();
              }}
            >
              <span className="text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 group-hover:relative group-hover:left-0 absolute left-4">Buy Now</span>
              <span className="text-sm font-bold">${card.price}</span>
            </button>
          )}
        </ProductModalTrigger>
      </div>
    </div>
  );

  return (
    <>
      <div className="categories-grid-4">
        {allCards.slice(0, visibleCards).map((card, index) => renderCard(card, index))}
      </div>
      
      <div className="text-center mt-12">
        <p className="text-gray-600 mb-4">
          Showing {visibleCards} of {allCards.length} products
        </p>
        {visibleCards < 20 && (
          <button 
            className="categories-cta"
            onClick={loadMoreCards}
          >
            Load More
            <RefreshCcw className="categories-cta-icon w-4 h-4" />
          </button>
        )}
      </div>
    </>
  );
}

