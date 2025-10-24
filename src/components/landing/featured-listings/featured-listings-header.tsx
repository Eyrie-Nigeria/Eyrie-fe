'use client';

import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/hooks/use-auth';

export function FeaturedListingsHeader() {
  const router = useRouter();
  const { isLoggedIn } = useAuth();

  const handleViewAll = () => {
    if (isLoggedIn) {
      router.push('/marketplace');
    } else {
      router.push('/login');
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex items-center justify-between mb-6 sm:mb-8"
    >
      <h2 className="text-lg sm:text-xl lg:text-2xl xl:text-3xl font-bold text-[#FF4500]">
        Top Rated
      </h2>
      <Button
        onClick={handleViewAll}
        className="text-sm sm:text-base font-medium text-[#059669] hover:underline hover:text-[#047857] transition-colors"
        variant="link"
      >
        View All
      </Button>
    </motion.div>
  );
}
