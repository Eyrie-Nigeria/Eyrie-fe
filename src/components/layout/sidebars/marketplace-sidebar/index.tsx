'use client';

import { useState, useEffect } from 'react';
import { X } from 'phosphor-react';
import { useSidebar } from '@/components/layout/providers/sidebar-provider';
import { SearchSection } from './search-section';
import { CategoriesSection } from './categories-section';
import { FiltersSection } from './filters-section';
import { BottomSection } from './bottom-section';
import { defaultFilters } from '@/data/marketplace-filters';
import { FilterValue } from '@/types';

interface MarketplaceSidebarProps {
  onApplyFilters?: (filters: Record<string, FilterValue>) => void;
  onSearch?: (query: string) => void;
}

export default function MarketplaceSidebar({ onApplyFilters, onSearch }: MarketplaceSidebarProps) {
  const { isOpen, isHovered, setIsOpen, setIsHovered } = useSidebar();
  // Removed unused router

  const [expandedSection, setExpandedSection] = useState<string | null>('categories');
  const [expandedFilter, setExpandedFilter] = useState<string | null>(null);
  const [selectedFilters, setSelectedFilters] = useState<Record<string, FilterValue>>({});
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const showExpanded =
    typeof window !== 'undefined' && window.innerWidth >= 1024 ? isOpen || isHovered : isOpen;

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (
        isOpen &&
        typeof window !== 'undefined' &&
        window.innerWidth < 1024 &&
        !target.closest('.sidebar-container')
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen, setIsOpen]);

  useEffect(() => {
    if (isOpen && typeof window !== 'undefined' && window.innerWidth < 1024) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const toggleSection = (section: string) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  const toggleFilter = (label: string) => {
    setExpandedFilter(expandedFilter === label ? null : label);
  };

  const handleFilterChange = (label: string, value: FilterValue) => {
    setSelectedFilters({
      ...selectedFilters,
      [label]: value,
    });
  };

  const handleApplyFilters = () => {
    onApplyFilters?.(selectedFilters);
  };

  const handleClearFilters = () => {
    setSelectedFilters({});
    setActiveCategory(null);
  };

  const handleSearch = () => {
    if (onSearch && searchQuery.trim()) {
      onSearch(searchQuery.trim());
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  const handleCategorySelect = (categoryLabel: string) => {
    if (activeCategory === categoryLabel) {
      setActiveCategory(null);
    } else {
      setActiveCategory(categoryLabel);
    }
  };

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      <aside
        className={`sidebar-container fixed left-0 top-16 bottom-0 z-50 lg:z-30
          shadow-xl overflow-hidden transition-all duration-300 flex flex-col
          ${showExpanded ? 'w-64' : 'w-14'}
          ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
        `}
        onMouseEnter={() =>
          typeof window !== 'undefined' && window.innerWidth >= 1024 && setIsHovered(true)
        }
        onMouseLeave={() =>
          typeof window !== 'undefined' && window.innerWidth >= 1024 && setIsHovered(false)
        }
      >
        {isOpen && (
          <button
            onClick={() => setIsOpen(false)}
            className="lg:hidden absolute top-3 right-3 p-1.5 hover:bg-slate-700 rounded-lg transition-colors z-10"
            aria-label="Close sidebar"
          >
            <X size={20} weight="bold" />
          </button>
        )}

        {/* Search Section */}
        <SearchSection
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          onSearch={handleSearch}
          showExpanded={showExpanded}
          onKeyPress={handleKeyPress}
        />

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto sidebar-scrollbar">
          {/* Categories Section */}
          <CategoriesSection
            expandedSection={expandedSection}
            toggleSection={toggleSection}
            showExpanded={showExpanded}
            onCategorySelect={handleCategorySelect}
            activeCategory={activeCategory}
          />

          {/* Filters Section */}
          <FiltersSection
            expandedSection={expandedSection}
            toggleSection={toggleSection}
            expandedFilter={expandedFilter}
            toggleFilter={toggleFilter}
            showExpanded={showExpanded}
            filters={defaultFilters}
            selectedFilters={selectedFilters}
            onFilterChange={handleFilterChange}
            onApplyFilters={handleApplyFilters}
            onClearFilters={handleClearFilters}
          />
        </div>

        {/* Bottom Section */}
        <BottomSection showExpanded={showExpanded} />
      </aside>
    </>
  );
}
