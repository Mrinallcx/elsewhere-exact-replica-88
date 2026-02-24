"use client";

export function ThuliumTickerBar() {
  const items = [
    '$28M+ Global Thulium Market',
    '2.0 \u03BCm Medical Fiber Lasers',
    '8.5 Tonne Supply Gap by 2030',
    '1:1 Backed Redeemable Thulium Oxide',
    'In-Ground Thulium Future Delivery Contracts',
    'USDC + USDT + USAT Instant Settlement',
    'DeFi Yield, Loans & Secondary Trading',
    '$16T+ Tokenized Asset Market by 2030',
  ];

  const tickerContent = items.map((item) => `${item}  \u2022  `).join('');

  return (
    <div className="w-full bg-pink-900 text-pink-50 py-3 overflow-hidden">
      <div className="flex whitespace-nowrap animate-marquee">
        <span className="text-sm font-medium tracking-wide px-4">{tickerContent}</span>
        <span className="text-sm font-medium tracking-wide px-4">{tickerContent}</span>
      </div>
    </div>
  );
}
