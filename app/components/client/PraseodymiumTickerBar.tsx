"use client";

export function PraseodymiumTickerBar() {
  const items = [
    '$12B+ Global Praseodymium Market',
    '98% NdPr Magnet Demand',
    '11,500 t Supply Gap by 2030',
    '1:1 Backed Redeemable Praseodymium Metal',
    'In-Ground Praseodymium Future Delivery Contracts',
    'USDC + USDT + USAT Instant Settlement',
    'DeFi Yield, Loans & Secondary Trading',
    '$16T+ Tokenized Asset Market by 2030',
  ];

  const tickerContent = items.map((item) => `${item}  \u2022  `).join('');

  return (
    <div className="w-full bg-lime-900 text-lime-50 py-3 overflow-hidden">
      <div className="flex whitespace-nowrap animate-marquee">
        <span className="text-sm font-medium tracking-wide px-4">{tickerContent}</span>
        <span className="text-sm font-medium tracking-wide px-4">{tickerContent}</span>
      </div>
    </div>
  );
}
