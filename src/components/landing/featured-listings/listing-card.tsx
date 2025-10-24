'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { FaBed, FaBath, FaHeart } from 'react-icons/fa';
import { MdSquareFoot } from 'react-icons/md';
import { BuyBadgeIcon, RentBadgeIcon } from '@/components/icons/badge-icons';
import { useRouter } from 'next/navigation';
import { Listing } from '@/data/listings-data';
import { Button } from '@/components/ui/button';

interface ListingCardProps {
  listing: Listing;
  index: number;
  isLoggedIn: boolean;
}

export function ListingCard({ listing, index, isLoggedIn }: ListingCardProps) {
  const router = useRouter();

  const navigateToDetails = () => {
    if (isLoggedIn) {
      router.push(`/dashboard/listing/${listing.id}`);
    } else {
      router.push('/login');
    }
  };

  const handleFavorite = (e: React.MouseEvent) => {
    e.stopPropagation();
    // TODO: Implement favorite functionality
    console.log('Toggle favorite for listing:', listing.id);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className="bg-card shadow-md rounded-xl sm:rounded-2xl overflow-hidden border border-border hover:shadow-lg transition-all duration-300 card-hover"
      style={{
        minWidth: '240px',
        width: '240px',
      }}
    >
      {/* Card Header with Image */}
      <div className="relative">
        <Image
          src={listing.image || '/placeholder.svg'}
          alt={`Photo of ${listing.title}`}
          width={400}
          height={300}
          className="w-full h-40 sm:h-48 md:h-56 object-cover"
          loading={index < 3 ? 'eager' : 'lazy'}
          sizes="240px"
        />

        {/* Favorite Button */}
        <button
          onClick={handleFavorite}
          className="absolute top-2 right-2 sm:top-3 sm:right-3 p-1.5 bg-background/80 rounded-full hover:bg-background transition-colors"
          aria-label="Add to favorites"
        >
          <FaHeart className="w-4.5 h-4.5 sm:w-5 sm:h-5 text-white hover:text-[#FF4500] transition cursor-pointer drop-shadow-md" />
        </button>
      </div>

      {/* Content */}
      <div className="p-3 sm:p-4">
        {/* Price and Badge - Price left, Badge right */}
        <div className="flex justify-between items-center mb-1.5 sm:mb-2">
          {/* Price on the left */}
          <p className="font-bold text-sm sm:text-base text-foreground truncate">{listing.price}</p>

          {/* Badge on the right */}
          <div className="flex items-center gap-1">
            {listing.type === 'Buy' ? (
              <div className="flex items-center gap-1 bg-background/90 px-2 py-1 rounded-full">
                <BuyBadgeIcon className="w-3 h-3" />
                <span className="text-xs font-medium text-foreground">Buy</span>
              </div>
            ) : (
              <div className="flex items-center gap-1 bg-background/90 px-2 py-1 rounded-full">
                <RentBadgeIcon className="w-3 h-3" />
                <span className="text-xs font-medium text-foreground">Rent</span>
              </div>
            )}
          </div>
        </div>

        {/* Title and Location */}
        <h3 className="text-foreground font-semibold text-xs sm:text-sm mb-1 truncate">
          {listing.title}
        </h3>
        <p className="text-muted-foreground text-[10px] sm:text-xs mb-2 sm:mb-3 truncate">
          {listing.location}
        </p>

        {/* Features */}
        <div className="flex items-center justify-between text-muted-foreground text-[10px] sm:text-xs mb-3 sm:mb-4">
          <div className="flex items-center space-x-1">
            <FaBed className="w-3 h-3" />
            <span>{listing.bedrooms} Bed</span>
          </div>
          <div className="flex items-center space-x-1">
            <FaBath className="w-3 h-3" />
            <span>{listing.bathrooms} Bath</span>
          </div>
          <div className="flex items-center space-x-1">
            <MdSquareFoot className="w-3 h-3" />
            <span>{listing.size}</span>
          </div>
        </div>

        {/* Action Button */}
        <Button
          onClick={navigateToDetails}
          className="w-full px-3 sm:px-4 py-2 bg-card text-foreground border-2 border-foreground rounded-full font-medium text-[10px] sm:text-xs flex items-center justify-center gap-1 hover:bg-[#FF4500] hover:text-white hover:border-[#FF4500] active:bg-[#FF8A65] transition-all duration-300"
          variant="outline"
        >
          View Details →
        </Button>
      </div>
    </motion.div>
  );
}
