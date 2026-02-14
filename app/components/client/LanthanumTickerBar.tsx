"use client";

export function LanthanumTickerBar() {
  const items = [
    '$1.8B+ Global Lanthanum Market',
    '40% Catalyst Demand',
    '48,000 Tonne Supply Gap by 2030',
    '1:1 Backed Redeemable Lanthanum Oxide',
    'In-Ground Lanthanum Future Delivery Contracts',
    'USDC + USDT + USAT Instant Settlement',
    'DeFi Yield, Loans & Secondary Trading',
    '$16T+ Tokenized Asset Market by 2030',
  ];

  const tickerContent = items.map((item) => `${item}  \u2022  `).join('');

  return (
    <div className="w-full bg-cyan-900 text-cyan-50 py-3 overflow-hidden">
      <div className="flex whitespace-nowrap animate-marquee">
        <span className="text-sm font-medium tracking-wide px-4">{tickerContent}</span>
        <span className="text-sm font-medium tracking-wide px-4">{tickerContent}</span>
      </div>
    </div>
  );
}
