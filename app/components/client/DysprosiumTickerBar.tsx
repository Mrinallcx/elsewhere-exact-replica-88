"use client";

export function DysprosiumTickerBar() {
  const items = [
    '98% of Heavy Rare Earths from China & Myanmar',
    '10%+ Annual Demand Growth',
    'Every EV Motor Needs Dysprosium',
    'Defense Magnet Supply at Risk',
    '1:1 Backed Dysprosium Tokens',
    'USDC + USDT + USAT Settlement',
    'DeFi Yield, Loans & Secondary Trading',
    'The Bottleneck No One Sees Coming',
  ];

  const tickerContent = items.map((item) => `${item}  \u2022  `).join('');

  return (
    <div className="w-full bg-indigo-900 text-indigo-50 py-3 overflow-hidden">
      <div className="flex whitespace-nowrap animate-marquee">
        <span className="text-sm font-medium tracking-wide px-4">{tickerContent}</span>
        <span className="text-sm font-medium tracking-wide px-4">{tickerContent}</span>
      </div>
    </div>
  );
}
