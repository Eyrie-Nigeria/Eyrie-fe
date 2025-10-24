'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/hooks/use-auth';
import { useRouter } from 'next/navigation';

interface HeroImageSectionProps {
  isMarketplace: boolean;
}

export function HeroImageSection({ isMarketplace }: HeroImageSectionProps) {
  const { isLoggedIn } = useAuth();
  const router = useRouter();

  const handleCheckListings = () => {
    if (isLoggedIn) {
      router.push('/marketplace');
    } else {
      router.push('/login');
    }
  };

  return (
    <div className="relative w-full max-w-7xl px-4 sm:px-6">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Image
          src={isMarketplace ? '/images/hero-marketplace.png' : '/images/hero.png'}
          alt="Modern real estate properties"
          width={1200}
          height={800}
          className="rounded-2xl lg:rounded-3xl object-cover w-full"
          priority
          sizes="(max-width: 900px) 100vw, 1200px"
        />
      </motion.div>

      {/* CTA Button */}
      {!isMarketplace && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="absolute bottom-8 sm:bottom-12 lg:bottom-16 left-1/2 transform -translate-x-1/2 hidden md:block"
        >
          <Button
            onClick={handleCheckListings}
            className="px-8 sm:px-10 lg:px-14 py-2.5 sm:py-3 lg:py-3.5 bg-[#FF4500] text-[#FFEDE6] text-sm sm:text-base lg:text-lg font-medium rounded-full hover:bg-[#FF5722] transition-all duration-300 shadow-lg hover:shadow-xl"
            size="lg"
          >
            Check Property Listings
          </Button>
        </motion.div>
      )}
    </div>
  );
}
