import Image from 'next/image';
import Link from 'next/link';
import { NavigationClient } from './client/NavigationClient';

interface NavigationProps {
  pastHero?: boolean;
}

export function Navigation({ pastHero }: NavigationProps = {}) {
  const logo = (
    <div className="brand-logo">
      <Link href="/">
        <Image
          src="/totofinance.svg"
          alt="Toto Finance"
          width={120}
          height={48}
          className={`h-8 sm:h-10 md:h-11 lg:h-12 ${pastHero ? '' : 'logo-light'}`}
          priority={false}
          loading="eager"
        />
      </Link>
    </div>
  );

  return <NavigationClient logo={logo} pastHero={pastHero} />;
}

