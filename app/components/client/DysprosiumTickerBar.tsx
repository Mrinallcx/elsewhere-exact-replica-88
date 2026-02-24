"use client";

export function DysprosiumTickerBar() {
  const items = [
    'Critical Heavy Rare Earth Element',
    'EV Traction Motor Magnet Material',
    'Defense & Aerospace Systems',
    'Wind Turbine Permanent Magnets',
    'AI & Advanced Robotics Hardware',
    'Geologically Scarce Byproduct',
    'Digitally Represented Dysprosium Supply',
    'USDC + USDT + USAT Instant Settlement',
    'DeFi Yield, Loans & Secondary Trading',
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
