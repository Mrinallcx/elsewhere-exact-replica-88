"use client";

import { useState } from 'react';
import { ProductModal } from './ProductModal';

interface ProductModalTriggerProps {
  children: (onClick: () => void) => React.ReactNode;
}

export function ProductModalTrigger({ children }: ProductModalTriggerProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      {children(() => setIsModalOpen(true))}
      <ProductModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}

