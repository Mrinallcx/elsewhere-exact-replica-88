export const metadata = {
  title: 'Tiamonds',
  description: 'Landing',
};

import './globals.css';
import SmoothScroll from './components/SmoothScroll';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        {/* Lenis smooth scroll wrapper */}
        {/* eslint-disable-next-line react/jsx-no-useless-fragment */}
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
