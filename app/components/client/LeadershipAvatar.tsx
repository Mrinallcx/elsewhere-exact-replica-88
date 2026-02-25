'use client';

import { useState } from 'react';
import Image from 'next/image';

interface LeadershipAvatarProps {
  name: string;
  src: string | undefined;
  className?: string;
  grayscale?: boolean;
}

export function LeadershipAvatar({ name, src, className = '', grayscale = false }: LeadershipAvatarProps) {
  const [failed, setFailed] = useState(false);
  const initials = name
    .split(' ')
    .map((n) => n[0])
    .join('');

  if (!src || failed) {
    return (
      <div
        className={`w-24 h-24 rounded-full bg-gray-200 flex items-center justify-center text-2xl font-semibold text-gray-500 flex-shrink-0 ${className}`}
        aria-hidden
      >
        {initials}
      </div>
    );
  }

  return (
    <Image
      src={src}
      alt={name}
      width={96}
      height={96}
      className={`w-24 h-24 rounded-full object-cover flex-shrink-0 ${grayscale ? 'grayscale' : ''} ${className}`}
      unoptimized
      onError={() => setFailed(true)}
    />
  );
}
