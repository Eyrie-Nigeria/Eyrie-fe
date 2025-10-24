'use client';

import { useQuery } from '@tanstack/react-query';
import { motion } from 'framer-motion';
import { FeaturedListingsHeader } from './featured-listings-header';
import { FeaturedListingsGrid } from './featured-listings-grid';
import { ListingSkeleton } from './listing-skeleton';
import { useAuth } from '@/hooks/use-auth';
import { Listing, getTopRatedListings } from '@/data/listings-data';

async function fetchFeaturedListings(): Promise<Listing[]> {
  // Use the helper function from listings-data.ts
  return getTopRatedListings(8);
}

export function FeaturedListings() {
  const { isLoggedIn } = useAuth();

  const {
    data: listings,
    isLoading,
    error,
  } = useQuery({
    queryKey: ['featured-listings'],
    queryFn: fetchFeaturedListings,
    staleTime: 5 * 60 * 1000, // 5 minutes
  });

  if (error) {
    return (
      <div className="py-8 sm:py-10 lg:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-destructive">Failed to load featured listings</p>
        </div>
      </div>
    );
  }

  return (
    <section className="py-8 sm:py-10 lg:py-12 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <FeaturedListingsHeader />

        {isLoading ? (
          <ListingSkeleton />
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <FeaturedListingsGrid listings={listings || []} isLoggedIn={isLoggedIn} />
          </motion.div>
        )}
      </div>
    </section>
  );
}
