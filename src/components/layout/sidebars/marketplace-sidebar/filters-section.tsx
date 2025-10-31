'use client';

import { CaretDown, Funnel } from 'phosphor-react';
import { FilterOption, FilterValue } from '@/types';

interface FiltersSectionProps {
  expandedSection: string | null;
  toggleSection: (section: string) => void;
  expandedFilter: string | null;
  toggleFilter: (label: string) => void;
  showExpanded: boolean;
  filters: FilterOption[];
  selectedFilters: Record<string, FilterValue>;
  onFilterChange: (label: string, value: FilterValue) => void;
  onApplyFilters: () => void;
  onClearFilters: () => void;
}

export function FiltersSection({
  expandedSection,
  toggleSection,
  expandedFilter,
  toggleFilter,
  showExpanded,
  filters,
  selectedFilters,
  onFilterChange,
  onApplyFilters,
  onClearFilters,
}: FiltersSectionProps) {
  return (
    <div>
      <button
        className="flex justify-between items-center w-full p-3 text-left hover:bg-slate-700 transition-colors"
        onClick={() => toggleSection('filters')}
      >
        {showExpanded ? (
          <>
            <span className="font-semibold text-sm text-gray-300 uppercase tracking-wider">
              Filters
            </span>
            <CaretDown
              size={16}
              className={`transition-transform ${expandedSection === 'filters' ? 'transform rotate-180' : ''}`}
            />
          </>
        ) : (
          <Funnel className="w-5 h-5 mx-auto text-gray-400" />
        )}
      </button>
      {expandedSection === 'filters' && showExpanded && (
        <div className="px-3 pb-3 space-y-2">
          {filters.map((filter) => (
            <div
              key={filter.label}
              className="border border-slate-600 rounded-lg overflow-hidden bg-slate-700/50"
            >
              <button
                className="flex justify-between items-center w-full p-2.5 text-left hover:bg-slate-600 transition-colors"
                onClick={() => toggleFilter(filter.label)}
              >
                <span className="font-medium text-sm text-white">{filter.label}</span>
                <CaretDown
                  size={14}
                  className={`transition-transform text-gray-400 ${expandedFilter === filter.label ? 'transform rotate-180' : ''}`}
                />
              </button>
              {expandedFilter === filter.label && (
                <div className="p-2.5 border-t border-slate-600 bg-slate-800">
                  {filter.isRange ? (
                    <div className="flex flex-col gap-2">
                      <div className="flex items-center gap-2">
                        <input
                          type="number"
                          placeholder="Min"
                          className="flex-1 p-2 border border-slate-600 rounded-lg text-sm bg-slate-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#FF4500]"
                          min={filter.min}
                          max={filter.max}
                          onChange={(e) =>
                            onFilterChange(filter.label, {
                              ...(selectedFilters[filter.label] as { min?: number; max?: number }),
                              min: Number.parseInt(e.target.value) || undefined,
                            })
                          }
                        />
                        <span className="text-gray-400 text-sm">-</span>
                        <input
                          type="number"
                          placeholder="Max"
                          className="flex-1 p-2 border border-slate-600 rounded-lg text-sm bg-slate-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#FF4500]"
                          min={filter.min}
                          max={filter.max}
                          onChange={(e) =>
                            onFilterChange(filter.label, {
                              ...(selectedFilters[filter.label] as { min?: number; max?: number }),
                              max: Number.parseInt(e.target.value) || undefined,
                            })
                          }
                        />
                      </div>
                    </div>
                  ) : (
                    <div className="flex flex-col gap-1.5">
                      {filter.options?.map((option: string) => (
                        <label
                          key={option}
                          className="flex items-center gap-2 cursor-pointer group"
                        >
                          <input
                            type="checkbox"
                            className="rounded border-slate-600 text-[#FF4500] focus:ring-[#FF4500] cursor-pointer bg-slate-700"
                            checked={
                              (selectedFilters[filter.label] as Record<string, boolean>)?.[
                                option
                              ] || false
                            }
                            onChange={(e) =>
                              onFilterChange(filter.label, {
                                ...(selectedFilters[filter.label] as Record<string, boolean>),
                                [option]: e.target.checked,
                              })
                            }
                          />
                          <span className="text-sm text-gray-300 group-hover:text-white transition-colors">
                            {option}
                          </span>
                        </label>
                      ))}
                    </div>
                  )}
                </div>
              )}
            </div>
          ))}
          <div className="space-y-2 pt-3">
            <button
              className="w-full bg-[#FF4500] text-white py-2.5 rounded-lg hover:bg-[#E83F00] transition-all duration-300 font-medium text-sm"
              onClick={onApplyFilters}
            >
              Apply Filters
            </button>
            <button
              className="w-full bg-slate-600 text-white py-2 rounded-lg hover:bg-slate-500 transition-all duration-300 font-medium text-sm"
              onClick={onClearFilters}
            >
              Clear All
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
