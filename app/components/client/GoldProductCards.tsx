"use client";

interface GoldProductCardProps {
  price: number;
  index: number;
}

function GoldProductCard({ price, index }: GoldProductCardProps) {
  return (
    <div 
      className="category-card category-card-sm bg-black group"
      style={{ 
        transformStyle: 'preserve-3d',
        transform: 'none',
        opacity: 1,
        boxShadow: 'rgba(0, 0, 0, 0.05) 0px 10px 20px 0px, rgba(0, 0, 0, 0.1) 0px 6px 12px 0px, rgba(0, 0, 0, 0.15) 0px 3px 6px 0px',
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
        e.currentTarget.style.boxShadow = 'rgba(0, 0, 0, 0.15) 0px 20px 40px 0px, rgba(0, 0, 0, 0.1) 0px 12px 24px 0px, rgba(0, 0, 0, 0.2) 0px 6px 12px 0px';
        e.currentTarget.style.filter = 'brightness(1.1) contrast(1.1)';
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateZ(50px) scale(1.05)';
        e.currentTarget.style.boxShadow = 'rgba(0, 0, 0, 0.15) 0px 20px 40px 0px, rgba(0, 0, 0, 0.1) 0px 12px 24px 0px, rgba(0, 0, 0, 0.2) 0px 6px 12px 0px';
        e.currentTarget.style.filter = 'brightness(1.1) contrast(1.1)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'none';
        e.currentTarget.style.boxShadow = 'rgba(0, 0, 0, 0.01) 0px 520px 146px 0px, rgba(0, 0, 0, 0.04) 0px 333px 133px 0px, rgba(0, 0, 0, 0.26) 0px 83px 83px 0px, rgba(0, 0, 0, 0.29) 0px 21px 46px 0px';
        e.currentTarget.style.filter = 'none';
      }}
    >
      <div className="absolute bottom-4 left-4 right-4">
        <button 
          className="w-full bg-white text-black py-2 px-4 rounded-lg flex items-center justify-center group-hover:justify-between transition-all duration-300 cursor-pointer relative"
          onClick={(e) => {
            e.stopPropagation();
            window.open('https://buy.stripe.com/test_4gM3cu7eK7p29fX5wLeZ200', '_blank');
          }}
        >
          <span className="text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 group-hover:relative group-hover:left-0 absolute left-4">Buy Now</span>
          <span className="text-sm font-bold">${price}</span>
        </button>
      </div>
    </div>
  );
}

interface GoldProductCardsProps {
  count?: number;
  price?: number;
}

export function GoldProductCards({ count = 4, price = 1200 }: GoldProductCardsProps) {
  return (
    <>
      {Array.from({ length: count }, (_, index) => (
        <GoldProductCard key={index} price={price} index={index} />
      ))}
    </>
  );
}

