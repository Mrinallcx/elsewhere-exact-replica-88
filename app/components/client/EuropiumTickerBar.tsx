"use client";

export function EuropiumTickerBar() {
  const items = [
    '$1.2B+ Global Europium Market',
    '95% Display & Lighting Demand',
    '650 Tonne Supply Gap by 2030',
    '1:1 Backed Redeemable Europium Oxide',
    'In-Ground Europium Future Delivery Contracts',
    'USDC + USDT + USAT Instant Settlement',
    'DeFi Yield, Loans & Secondary Trading',
    '$16T+ Tokenized Asset Market by 2030',
  ];

  const tickerContent = items.map((item) => `${item}  \u2022  `).join('');

  return (
    <div className="w-full bg-violet-900 text-violet-50 py-3 overflow-hidden">
      <div className="flex whitespace-nowrap animate-marquee">
        <span className="text-sm font-medium tracking-wide px-4">{tickerContent}</span>
        <span className="text-sm font-medium tracking-wide px-4">{tickerContent}</span>
      </div>
    </div>
  );
}
