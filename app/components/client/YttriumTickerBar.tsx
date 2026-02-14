"use client";

export function YttriumTickerBar() {
  const items = [
    '$2.9B+ Global Yttrium Market',
    '70% Phosphor & Ceramics Demand',
    '12,000 Tonne Supply Gap by 2030',
    '1:1 Backed Redeemable Yttrium Oxide',
    'In-Ground Yttrium Future Delivery Contracts',
    'USDC + USDT + USAT Instant Settlement',
    'DeFi Yield, Loans & Secondary Trading',
    '$16T+ Tokenized Asset Market by 2030',
  ];

  const tickerContent = items.map((item) => `${item}  \u2022  `).join('');

  return (
    <div className="w-full bg-stone-800 text-stone-50 py-3 overflow-hidden">
      <div className="flex whitespace-nowrap animate-marquee">
        <span className="text-sm font-medium tracking-wide px-4">{tickerContent}</span>
        <span className="text-sm font-medium tracking-wide px-4">{tickerContent}</span>
      </div>
    </div>
  );
}
