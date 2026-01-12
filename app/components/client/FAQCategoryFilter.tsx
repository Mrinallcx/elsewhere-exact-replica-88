"use client";

import { useState } from 'react';

interface Category {
  id: string;
  name: string;
}

interface AssetSubcategory {
  id: string;
  name: string;
}

interface FAQCategoryFilterProps {
  categories: Category[];
  assetSubcategories: AssetSubcategory[];
  selectedCategory: string;
  selectedAssetSubcategory: string;
  onCategoryChange: (categoryId: string) => void;
  onAssetSubcategoryChange: (subcategoryId: string) => void;
}

export function FAQCategoryFilter({
  categories,
  assetSubcategories,
  selectedCategory,
  selectedAssetSubcategory,
  onCategoryChange,
  onAssetSubcategoryChange,
}: FAQCategoryFilterProps) {
  const handleCategoryChange = (categoryId: string) => {
    onCategoryChange(categoryId);
    if (categoryId !== 'asset') {
      onAssetSubcategoryChange('all');
    }
  };

  return (
    <div className="mb-8 md:mb-12">
      <div className="flex flex-wrap gap-3 justify-center mb-6">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => handleCategoryChange(category.id)}
            className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
              selectedCategory === category.id
                ? 'bg-black text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            {category.name}
          </button>
        ))}
      </div>

      {/* Asset Subcategories */}
      {selectedCategory === 'asset' && (
        <div className="flex flex-wrap gap-3 justify-center">
          <button
            onClick={() => onAssetSubcategoryChange('all')}
            className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
              selectedAssetSubcategory === 'all'
                ? 'bg-gray-800 text-white'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            All Assets
          </button>
          {assetSubcategories.map((subcategory) => (
            <button
              key={subcategory.id}
              onClick={() => onAssetSubcategoryChange(subcategory.id)}
              className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                selectedAssetSubcategory === subcategory.id
                  ? 'bg-gray-800 text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              {subcategory.name}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

