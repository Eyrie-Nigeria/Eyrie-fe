'use client';

import { MagnifyingGlass } from 'phosphor-react';

interface SearchSectionProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  onSearch: () => void;
  showExpanded: boolean;
  onKeyPress: (e: React.KeyboardEvent) => void;
}

export function SearchSection({
  searchQuery,
  setSearchQuery,
  onSearch,
  showExpanded,
  onKeyPress,
}: SearchSectionProps) {
  if (showExpanded) {
    return (
      <div className="border-b border-slate-700 p-3 flex-shrink-0">
        <div className="space-y-3">
          <h3 className="text-sm font-semibold text-gray-300 uppercase tracking-wider">Search</h3>
          <div className="relative">
            <div className="flex items-center bg-slate-700 rounded-lg px-3 py-2 border border-slate-600 focus-within:border-[#FF4500] transition-colors">
              <MagnifyingGlass size={18} className="text-gray-400 mr-2 flex-shrink-0" />
              <input
                type="text"
                placeholder="Search properties..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyPress={onKeyPress}
                className="flex-1 bg-transparent text-white placeholder-gray-400 text-sm outline-none min-w-0"
              />
              <button
                onClick={onSearch}
                className="ml-2 p-1 bg-[#FF4500] text-white rounded hover:bg-[#E83F00] transition-colors flex-shrink-0"
                aria-label="Search"
              >
                <MagnifyingGlass size={14} weight="bold" />
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="border-b border-slate-700 p-3 flex-shrink-0">
      <button
        onClick={onSearch}
        className="w-full p-2 hover:bg-slate-700 rounded-lg transition-colors flex items-center justify-center"
        aria-label="Search"
      >
        <MagnifyingGlass size={20} className="text-gray-400" />
      </button>
    </div>
  );
}
