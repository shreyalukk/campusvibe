'use client';

import React, { useState, useMemo, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { sampleEvents, eventCategories } from '@/data/sampleEvents';
import { EventCard } from '@/components/events/EventCard';
import { EventFilters, FilterState } from '@/components/events/EventFilters';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { Sparkles, Calendar, SearchX, RefreshCw } from 'lucide-react';

function EventsContent() {
  const searchParams = useSearchParams();
  const initialCategory = searchParams.get('category') || 'all';

  const [filters, setFilters] = useState<FilterState>({
    search: '',
    category: initialCategory,
    feeType: 'all',
    sortBy: 'date-asc',
  });

  const [visibleCount, setVisibleCount] = useState(6);

  // Available categories list
  const categoryNames = useMemo(
    () => eventCategories.map((c) => c.name),
    []
  );

  // Filter & Sort Logic
  const filteredEvents = useMemo(() => {
    return sampleEvents
      .filter((event) => {
        // Search Filter (Title, Tagline, Description, Venue)
        if (filters.search.trim()) {
          const query = filters.search.toLowerCase();
          const matchTitle = event.title.toLowerCase().includes(query);
          const matchTagline = event.tagline.toLowerCase().includes(query);
          const matchDesc = event.description.toLowerCase().includes(query);
          const matchVenue = event.venue.toLowerCase().includes(query);
          if (!matchTitle && !matchTagline && !matchDesc && !matchVenue) {
            return false;
          }
        }

        // Category Filter
        if (filters.category !== 'all' && event.category !== filters.category) {
          return false;
        }

        // Fee Filter
        if (filters.feeType === 'free' && event.fee_amount > 0) {
          return false;
        }
        if (filters.feeType === 'paid' && event.fee_amount === 0) {
          return false;
        }

        return true;
      })
      .sort((a, b) => {
        if (filters.sortBy === 'date-asc') {
          return new Date(a.start_time).getTime() - new Date(b.start_time).getTime();
        }
        if (filters.sortBy === 'date-desc') {
          return new Date(b.start_time).getTime() - new Date(a.start_time).getTime();
        }
        if (filters.sortBy === 'popular') {
          return b.registered_count - a.registered_count;
        }
        return 0;
      });
  }, [filters]);

  const displayedEvents = filteredEvents.slice(0, visibleCount);
  const hasMore = visibleCount < filteredEvents.length;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 space-y-10">
      {/* Header Banner */}
      <div className="space-y-3">
        <div className="inline-flex items-center gap-2">
          <Badge variant="primary">Campus Directory</Badge>
          <span className="text-xs text-gray-500 font-medium">Updated Daily</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-[#191923] tracking-tight">
          Explore Campus Events
        </h1>
        <p className="text-sm sm:text-base text-[#555568] max-w-2xl">
          Discover competitions, tech hackathons, cultural festivals, and skill-building
          workshops hosted by departments and student chapters.
        </p>
      </div>

      {/* Filter Component */}
      <EventFilters
        categories={categoryNames}
        filters={filters}
        onFilterChange={(newFilters) => {
          setFilters(newFilters);
          setVisibleCount(6); // reset pagination on filter change
        }}
        totalResults={filteredEvents.length}
      />

      {/* Results Grid / Empty State */}
      {displayedEvents.length > 0 ? (
        <div className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {displayedEvents.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>

          {/* Load More Button */}
          {hasMore && (
            <div className="text-center pt-4">
              <Button
                variant="secondary"
                size="md"
                onClick={() => setVisibleCount((prev) => prev + 6)}
                leftIcon={<RefreshCw className="w-4 h-4" />}
              >
                Load More Events ({filteredEvents.length - visibleCount} remaining)
              </Button>
            </div>
          )}
        </div>
      ) : (
        /* Empty State */
        <div className="bg-white rounded-3xl border border-gray-200/90 p-12 text-center space-y-4 max-w-md mx-auto my-12">
          <div className="w-14 h-14 rounded-2xl bg-gray-100 text-gray-400 flex items-center justify-center mx-auto">
            <SearchX className="w-7 h-7" />
          </div>
          <h3 className="text-lg font-bold text-[#191923]">No Events Found</h3>
          <p className="text-xs text-gray-500 leading-relaxed">
            We couldn't find any events matching your current filters. Try searching for different keywords or resetting your filter criteria.
          </p>
          <Button
            variant="outline"
            size="sm"
            onClick={() =>
              setFilters({
                search: '',
                category: 'all',
                feeType: 'all',
                sortBy: 'date-asc',
              })
            }
          >
            Clear All Filters
          </Button>
        </div>
      )}
    </div>
  );
}

export default function EventsPage() {
  return (
    <Suspense
      fallback={
        <div className="max-w-7xl mx-auto px-4 py-16 text-center text-gray-500">
          Loading events directory...
        </div>
      }
    >
      <EventsContent />
    </Suspense>
  );
}
