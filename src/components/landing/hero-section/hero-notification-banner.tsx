'use client';

import { motion } from 'framer-motion';
import { XCircleIcon, CheckCircleIcon } from '@heroicons/react/24/outline';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/hooks/use-auth';

interface HeroNotificationBannerProps {
  onClose: () => void;
}

export function HeroNotificationBanner({ onClose }: HeroNotificationBannerProps) {
  const router = useRouter();
  const { isLoggedIn } = useAuth();

  const handleExplore = () => {
    if (isLoggedIn) {
      router.push('/marketplace');
    } else {
      router.push('/login');
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="fixed top-20 sm:top-24 right-4 sm:right-8 lg:right-24 z-50 bg-[#EBFFFD] border border-[#B7F5D8] rounded-xl shadow-lg px-3 sm:px-5 lg:px-6 py-2 sm:py-3 flex gap-2 max-w-[90vw] sm:max-w-md text-left"
    >
      {/* Left icon */}
      <div className="shrink-0">
        <CheckCircleIcon className="w-5 h-5 sm:w-6 sm:h-6 text-[#0B655B] mt-0.5" />
      </div>

      {/* Message content */}
      <div className="flex-1 min-w-0">
        <div className="font-semibold text-[#14B8A6] text-xs sm:text-sm lg:text-base">
          New listings available!
        </div>
        <div className="text-[10px] sm:text-xs lg:text-sm text-[#0B655B] mt-1">
          Check out the latest properties added in your area.
          <br />
          <span
            className="underline cursor-pointer text-[#0B655B] hover:text-primary transition-colors font-medium"
            onClick={handleExplore}
            tabIndex={0}
            role="button"
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') handleExplore();
            }}
          >
            Tap here to explore
          </span>
        </div>
      </div>

      {/* Close button */}
      <button
        onClick={onClose}
        className="shrink-0 text-muted-foreground hover:text-foreground transition-colors"
        aria-label="Close notification"
      >
        <XCircleIcon className="w-5 h-5 sm:w-6 sm:h-6 text-[#14B8A6]" />
      </button>
    </motion.div>
  );
}
