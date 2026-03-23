"use client";

export function HolmiumTickerBar() {
  const items = [
    '$95M+ Global Holmium Market',
    'Only 18 Tonnes Produced Annually',
    '32 Tonne Supply Gap by 2030',
    '85% Demand from Medical Laser Surgery',
    '2.1 μm: The Surgeon\'s Wavelength',
    '1:1 Backed Redeemable Holmium Oxide',
    'USDC + USDT + USAT Settlement',
    '18% Annual Surgical Laser Growth',
  ];

  const tickerContent = items.map((item) => `${item}  \u2022  `).join('');

  return (
    <div className="w-full bg-emerald-900 text-emerald-50 py-3 overflow-hidden">
      <div className="flex whitespace-nowrap animate-marquee">
        <span className="text-sm font-medium tracking-wide px-4">{tickerContent}</span>
        <span className="text-sm font-medium tracking-wide px-4">{tickerContent}</span>
      </div>
    </div>
  );
}
