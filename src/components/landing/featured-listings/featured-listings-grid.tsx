'use client';

import { Listing } from '@/data/listings-data';
import { ListingCard } from './listing-card';

interface FeaturedListingsGridProps {
  listings: Listing[];
  isLoggedIn: boolean;
}

export function FeaturedListingsGrid({ listings, isLoggedIn }: FeaturedListingsGridProps) {
  if (listings.length === 0) {
    return (
      <div className="text-center py-8">
        <p className="text-muted-foreground">No featured listings available</p>
      </div>
    );
  }

  return (
    <div className="overflow-x-auto pb-4 custom-scrollbar">
      <div className="flex space-x-4 sm:space-x-6 w-max min-w-full">
        {listings.map((listing, index) => (
          <ListingCard key={listing.id} listing={listing} index={index} isLoggedIn={isLoggedIn} />
        ))}
      </div>
    </div>
  );
}
