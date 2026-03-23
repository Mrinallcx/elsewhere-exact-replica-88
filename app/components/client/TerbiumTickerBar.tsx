"use client";

export function TerbiumTickerBar() {
  const items = [
    "$1.8B+ Global Terbium Market",
    "90%+ Production Controlled by China",
    "120 Tonne Supply Gap by 2030",
    "Critical Magnet Stabilizer for NdFeB",
    "Green Phosphor in Every LED on Earth",
    "1:1 Backed Redeemable Terbium Oxide",
    "USDC + USDT + USAT Settlement",
    "In-Ground Terbium Future Delivery Contracts",
    "$16T+ Tokenized Asset Market by 2030",
  ];

  const tickerContent = items.map((item) => `${item}  \u2022  `).join("");

  return (
    <div className="w-full bg-emerald-950 text-emerald-50 py-3 overflow-hidden">
      <div className="flex whitespace-nowrap animate-marquee">
        <span className="text-sm font-medium tracking-wide px-4">{tickerContent}</span>
        <span className="text-sm font-medium tracking-wide px-4">{tickerContent}</span>
      </div>
    </div>
  );
}
