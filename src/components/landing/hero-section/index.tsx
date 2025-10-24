// components/landing/hero-section/index.tsx (updated - remove services)
'use client';

import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { HeroNotificationBanner } from './hero-notification-banner';
import { HeroImageSection } from './hero-image-section';
import { HeroTrustedSection } from './hero-trusted-section';

interface HeroSectionProps {
  isMarketplace?: boolean;
}

export function HeroSection({ isMarketplace = false }: HeroSectionProps) {
  const [showBanner, setShowBanner] = useState(true);

  return (
    <div className="relative min-h-[60vh] bg-background flex flex-col items-center justify-center text-center px-4 sm:px-6">
      {/* Notification Banner */}
      <AnimatePresence>
        {!isMarketplace && showBanner && (
          <HeroNotificationBanner onClose={() => setShowBanner(false)} />
        )}
      </AnimatePresence>

      {/* Hero Image with CTA */}
      <HeroImageSection isMarketplace={isMarketplace} />

      {/* Trusted by Section */}
      {!isMarketplace && <HeroTrustedSection />}
    </div>
  );
}
