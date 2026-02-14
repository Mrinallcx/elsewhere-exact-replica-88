"use client";

export function ScandiumTickerBar() {
  const items = [
    '$180M+ Global Scandium Market',
    '0.15% Weight = 300% Strength Increase',
    '45 Tonne Supply Gap by 2030',
    '1:1 Backed Redeemable Scandium Oxide',
    'In-Ground Scandium Future Delivery Contracts',
    'USDC + USDT + USAT Instant Settlement',
    'DeFi Yield, Loans & Secondary Trading',
    '$16T+ Tokenized Asset Market by 2030',
  ];

  const tickerContent = items.map((item) => `${item}  \u2022  `).join('');

  return (
    <div className="w-full bg-zinc-800 text-zinc-50 py-3 overflow-hidden">
      <div className="flex whitespace-nowrap animate-marquee">
        <span className="text-sm font-medium tracking-wide px-4">{tickerContent}</span>
        <span className="text-sm font-medium tracking-wide px-4">{tickerContent}</span>
      </div>
    </div>
  );
}
