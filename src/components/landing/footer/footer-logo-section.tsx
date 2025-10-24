'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

interface FooterLogoSectionProps {
  variant: 'mobile' | 'desktop';
}

export function FooterLogoSection({ variant }: FooterLogoSectionProps) {
  const isMobile = variant === 'mobile';

  const handleGooglePlayClick = () => {
    // TODO: Add actual Google Play store link
    console.log('Navigate to Google Play Store');
  };

  return (
    <div className={`flex flex-col ${isMobile ? 'items-center text-center' : ''}`}>
      {/* Logo */}
      <Image
        src="/images/footerlogo.png"
        alt="Eyrie Logo"
        width={80}
        height={40}
        className={`${isMobile ? 'mb-5 w-[70px] sm:w-[80px]' : 'mb-6'}`}
        priority={!isMobile}
        sizes={isMobile ? '(max-width: 640px) 70px, 80px' : '80px'}
      />

      {/* App Download */}
      <div className={`flex flex-col ${isMobile ? 'items-center' : 'mt-auto'}`}>
        {isMobile ? (
          <>
            <p className="text-sm sm:text-base mb-3 font-medium">Download the Eyrie app</p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleGooglePlayClick}
            >
              <Image
                src="/images/googleplay.png"
                alt="Get it on Google Play"
                width={150}
                height={50}
                className="cursor-pointer hover:opacity-90 transition-opacity w-[130px] sm:w-[150px]"
                loading="lazy"
                sizes="(max-width: 640px) 130px, 150px"
              />
            </motion.button>
          </>
        ) : (
          <>
            <p className="text-sm lg:text-base mb-3 font-medium">
              You can download the Eyrie app from
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleGooglePlayClick}
            >
              <Image
                src="/images/googleplay.png"
                alt="Get it on Google Play"
                width={120}
                height={40}
                className="cursor-pointer hover:opacity-90 transition-opacity"
                loading="lazy"
                sizes="120px"
              />
            </motion.button>
          </>
        )}
      </div>
    </div>
  );
}
