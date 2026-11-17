'use client';

import React from 'react';
import { Search, Filter, X, ArrowUpDown } from 'lucide-react';
import { EventCategory } from '@/types';

export interface FilterState {
  search: string;
  category: string;
  feeType: 'all' | 'free' | 'paid';
  sortBy: 'date-asc' | 'date-desc' | 'popular';
}

interface EventFiltersProps {
  categories: string[];
  filters: FilterState;
  onFilterChange: (filters: FilterState) => void;
  totalResults: number;
}

export function EventFilters({
  categories,
  filters,
  onFilterChange,
  totalResults,
}: EventFiltersProps) {
  const hasActiveFilters =
    filters.search !== '' ||
    filters.category !== 'all' ||
    filters.feeType !== 'all' ||
    filters.sortBy !== 'date-asc';

  const resetFilters = () => {
    onFilterChange({
      search: '',
      category: 'all',
      feeType: 'all',
      sortBy: 'date-asc',
    });
  };

  return (
    <div className="bg-white rounded-2xl border border-gray-200/90 p-5 shadow-xs space-y-4">
      {/* Top Row: Search and Sort */}
      <div className="flex flex-col md:flex-row gap-3">
        {/* Search Input */}
        <div className="relative flex-1">
          <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={filters.search}
            onChange={(e) =>
              onFilterChange({ ...filters, search: e.target.value })
            }
            placeholder="Search events by title, keyword, or venue..."
            className="w-full pl-10 pr-4 py-2.5 text-sm rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#6D45D9] focus:border-transparent transition-all placeholder:text-gray-400"
          />
          {filters.search && (
            <button
              onClick={() => onFilterChange({ ...filters, search: '' })}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>

        {/* Sort Select */}
        <div className="flex items-center gap-2 shrink-0">
          <div className="relative">
            <select
              value={filters.sortBy}
              onChange={(e) =>
                onFilterChange({
                  ...filters,
                  sortBy: e.target.value as FilterState['sortBy'],
                })
              }
              className="appearance-none bg-white text-sm border border-gray-200 rounded-xl px-4 py-2.5 pr-8 focus:outline-none focus:ring-2 focus:ring-[#6D45D9] cursor-pointer text-[#191923]"
            >
              <option value="date-asc">Date: Happening Soonest</option>
              <option value="date-desc">Date: Later Dates</option>
              <option value="popular">Most Popular</option>
            </select>
            <ArrowUpDown className="w-3.5 h-3.5 text-gray-400 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
          </div>
        </div>
      </div>

      {/* Category Pills & Fee Filters */}
      <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-gray-100">
        <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider mr-1">
          Category:
        </span>
        <button
          onClick={() => onFilterChange({ ...filters, category: 'all' })}
          className={`text-xs px-3 py-1.5 rounded-lg font-medium transition-all cursor-pointer ${
            filters.category === 'all'
              ? 'bg-[#6D45D9] text-white shadow-xs'
              : 'bg-[#F5F5F8] text-[#555568] hover:bg-gray-200'
          }`}
        >
          All
        </button>
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => onFilterChange({ ...filters, category: cat })}
            className={`text-xs px-3 py-1.5 rounded-lg font-medium transition-all cursor-pointer ${
              filters.category === cat
                ? 'bg-[#6D45D9] text-white shadow-xs'
                : 'bg-[#F5F5F8] text-[#555568] hover:bg-gray-200'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Fee Filter & Status row */}
      <div className="flex flex-wrap items-center justify-between gap-3 pt-2 text-xs">
        <div className="flex items-center gap-2">
          <span className="text-gray-400 font-semibold uppercase tracking-wider">
            Pricing:
          </span>
          <div className="flex items-center gap-1.5 bg-[#F5F5F8] p-1 rounded-xl">
            {(['all', 'free', 'paid'] as const).map((type) => (
              <button
                key={type}
                onClick={() => onFilterChange({ ...filters, feeType: type })}
                className={`px-3 py-1 rounded-lg font-medium capitalize transition-all cursor-pointer ${
                  filters.feeType === type
                    ? 'bg-white text-[#6D45D9] shadow-xs font-semibold'
                    : 'text-[#555568] hover:text-black'
                }`}
              >
                {type}
              </button>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-3">
          <span className="text-gray-500 font-medium">
            Showing <strong className="text-[#191923]">{totalResults}</strong> events
          </span>
          {hasActiveFilters && (
            <button
              onClick={resetFilters}
              className="text-[#6D45D9] hover:underline font-medium flex items-center gap-1 cursor-pointer"
            >
              <X className="w-3.5 h-3.5" />
              Reset filters
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
