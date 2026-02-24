"use client";

export function NeodymiumTickerBar() {
  const items = [
    'Critical Rare Earth for AI & Magnets',
    'NdFeB Permanent Magnets',
    'AI Data Centers & Robotics',
    'EV Traction Motors',
    'Wind Turbine Direct-Drive Systems',
    'Defense & Aerospace Applications',
    'Instant Stablecoin Settlement',
    '$16T+ Tokenized Asset Market by 2030',
  ];

  const tickerContent = items.map((item) => `${item}  \u2022  `).join('');

  return (
    <div className="w-full bg-sky-900 text-sky-50 py-3 overflow-hidden">
      <div className="flex whitespace-nowrap animate-marquee">
        <span className="text-sm font-medium tracking-wide px-4">{tickerContent}</span>
        <span className="text-sm font-medium tracking-wide px-4">{tickerContent}</span>
      </div>
    </div>
  );
}
