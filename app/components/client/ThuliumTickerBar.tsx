"use client";

export function ThuliumTickerBar() {
  const items = [
    "$28M+ Global Thulium Market",
    "2.0 μm Optimal Surgical Wavelength",
    "8.5 Tonne Supply Gap by 2030",
    "450,000 Thulium Laser Surgeries Annually",
    "91% Production in China",
    "1:1 Backed Redeemable Thulium Oxide",
    "USDC + USDT + USAT Settlement",
    "In-Ground Thulium Future Delivery Contracts",
    "$16T+ Tokenized Asset Market by 2030",
  ];

  const tickerContent = items.map((item) => `${item}  \u2022  `).join("");

  return (
    <div className="w-full bg-rose-950 text-rose-50 py-3 overflow-hidden">
      <div className="flex whitespace-nowrap animate-marquee">
        <span className="text-sm font-medium tracking-wide px-4">{tickerContent}</span>
        <span className="text-sm font-medium tracking-wide px-4">{tickerContent}</span>
      </div>
    </div>
  );
}
