'use client';

import { CaretDown, Tag } from 'phosphor-react';
import { TrendUp, Clock, Star, Crown } from 'phosphor-react';
import { Category } from '@/types';

interface CategoriesSectionProps {
  expandedSection: string | null;
  toggleSection: (section: string) => void;
  showExpanded: boolean;
  onCategorySelect: (categoryLabel: string) => void;
  activeCategory?: string | null;
}

export function CategoriesSection({
  expandedSection,
  toggleSection,
  showExpanded,
  onCategorySelect,
  activeCategory,
}: CategoriesSectionProps) {
  // Removed unused isLoggedIn from useAuth

  const categories: Category[] = [
    { label: 'Popular Listings', icon: TrendUp, color: 'text-purple-500' },
    { label: 'Recently Viewed', icon: Clock, color: 'text-orange-500' },
    { label: 'Top Rated', icon: Star, color: 'text-green-500' },
    { label: 'Luxury Homes', icon: Crown, color: 'text-pink-500' },
  ];

  return (
    <div>
      <button
        className="flex justify-between items-center w-full p-3 text-left hover:bg-slate-700 transition-colors"
        onClick={() => toggleSection('categories')}
      >
        {showExpanded ? (
          <>
            <span className="font-semibold text-sm text-gray-300 uppercase tracking-wider">
              Categories
            </span>
            <CaretDown
              size={16}
              className={`transition-transform ${expandedSection === 'categories' ? 'transform rotate-180' : ''}`}
            />
          </>
        ) : (
          <Tag className="w-5 h-5 mx-auto text-gray-400" />
        )}
      </button>
      {expandedSection === 'categories' && showExpanded && (
        <div className="p-3 pt-0 space-y-2">
          {categories.map((category) => {
            const IconComponent = category.icon;
            const isSelected = activeCategory === category.label;

            return (
              <button
                key={category.label}
                onClick={() => onCategorySelect(category.label)}
                className={`w-full flex items-center gap-3 p-3 rounded-lg transition-all duration-200 ${
                  isSelected
                    ? 'bg-[#FF4500] text-white shadow-md'
                    : 'bg-slate-700 hover:bg-slate-600 text-gray-300'
                }`}
              >
                <IconComponent
                  size={18}
                  className={isSelected ? 'text-white' : category.color}
                  weight={isSelected ? 'fill' : 'regular'}
                />
                <span className="text-sm font-medium">{category.label}</span>
              </button>
            );
          })}
          <div className="pt-2 border-t border-slate-600">
            <button
              onClick={() => onCategorySelect('')}
              className="w-full p-2 text-sm text-gray-400 hover:text-white transition-colors"
            >
              Clear Category Filter
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
