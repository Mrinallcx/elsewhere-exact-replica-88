"use client";

import { useState, useMemo, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { FAQCategoryFilter } from './FAQCategoryFilter';
import { FAQList } from './FAQList';

interface FAQ {
  id: number;
  category: string;
  question: string;
  answer: string;
  subcategory?: string;
}

interface Category {
  id: string;
  name: string;
}

interface AssetSubcategory {
  id: string;
  name: string;
}

interface FAQPageClientProps {
  faqs: FAQ[];
  categories: Category[];
  assetSubcategories: AssetSubcategory[];
}

export function FAQPageClient({
  faqs,
  categories,
  assetSubcategories,
}: FAQPageClientProps) {
  const pathname = usePathname();
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedAssetSubcategory, setSelectedAssetSubcategory] = useState<string>('all');

  // Handle hash-based navigation on mount and hash changes
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const handleHashChange = () => {
      const hash = window.location.hash.slice(1); // Remove the '#'
      
      if (!hash) {
        setSelectedCategory('all');
        setSelectedAssetSubcategory('all');
        return;
      }

      // Check if it's an asset subcategory hash (e.g., #asset-gold)
      const assetSubcategoryMatch = hash.match(/^asset-(.+)$/);
      if (assetSubcategoryMatch) {
        const subcategoryId = assetSubcategoryMatch[1];
        // Check if this subcategory exists
        if (assetSubcategories.some(sub => sub.id === subcategoryId)) {
          setSelectedCategory('asset');
          setSelectedAssetSubcategory(subcategoryId);
          return;
        }
      }

      // Check if it's a category hash (e.g., #general-overview)
      const categoryExists = categories.some(cat => cat.id === hash);
      if (categoryExists) {
        setSelectedCategory(hash);
        if (hash !== 'asset') {
          setSelectedAssetSubcategory('all');
        }
      }
    };

    // Handle initial hash on mount
    handleHashChange();

    // Listen for hash changes
    window.addEventListener('hashchange', handleHashChange);

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, [categories, assetSubcategories]);

  // Update URL hash when category changes
  useEffect(() => {
    if (typeof window === 'undefined') return;

    let newHash = '';
    if (selectedCategory === 'all') {
      newHash = '';
    } else if (selectedCategory === 'asset' && selectedAssetSubcategory !== 'all') {
      newHash = `#asset-${selectedAssetSubcategory}`;
    } else {
      newHash = `#${selectedCategory}`;
    }

    // Only update hash if it's different from current
    const currentHash = window.location.hash;
    if (currentHash !== newHash) {
      // Use replaceState to avoid adding to history
      window.history.replaceState(null, '', newHash || pathname);
    }
  }, [selectedCategory, selectedAssetSubcategory, pathname]);

  const filteredFaqs = useMemo(() => {
    if (selectedCategory === 'all') {
      return faqs;
    } else if (selectedCategory === 'asset') {
      if (selectedAssetSubcategory === 'all') {
        return faqs.filter(faq => faq.category === 'asset');
      }
      return faqs.filter(faq => 
        faq.category === 'asset' && 
        faq.subcategory === selectedAssetSubcategory
      );
    } else {
      return faqs.filter(faq => faq.category === selectedCategory);
    }
  }, [faqs, selectedCategory, selectedAssetSubcategory]);

  return (
    <>
      <FAQCategoryFilter
        categories={categories}
        assetSubcategories={assetSubcategories}
        selectedCategory={selectedCategory}
        selectedAssetSubcategory={selectedAssetSubcategory}
        onCategoryChange={setSelectedCategory}
        onAssetSubcategoryChange={setSelectedAssetSubcategory}
      />
      <FAQList faqs={filteredFaqs} />
    </>
  );
}

