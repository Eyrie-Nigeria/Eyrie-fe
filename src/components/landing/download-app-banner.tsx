'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export function DownloadAppBanner() {
  const handleGooglePlayClick = () => {
    // TODO: Add actual Google Play store link
    console.log('Navigate to Google Play Store');
    // window.open('https://play.google.com/store/apps/details?id=com.eyrie.app', '_blank')
  };

  return (
    <section className="hidden md:block relative z-20 w-full">
      {' '}
      {/* Hidden on mobile and sm, visible on md and up */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="flex bg-[#FEFEFE] lg:max-w-5xl max-w-full mx-auto px-4 sm:px-6 py-3 sm:py-4 lg:py-5 rounded-2xl shadow-lg flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4"
      >
        {/* Text */}
        <span className="text-xs sm:text-sm lg:text-base text-[#555] text-center sm:text-left sm:whitespace-nowrap font-medium">
          You can download the Eyrie app from
        </span>

        {/* Google Play Badge */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleGooglePlayClick}
          className="cursor-pointer hover:opacity-90 transition-opacity"
          aria-label="Download Eyrie app from Google Play"
        >
          <Image
            src="/images/googleplay.png"
            alt="Get it on Google Play"
            width={140}
            height={42}
            className="w-[100px] sm:w-[120px] lg:w-[140px] h-auto"
            loading="lazy"
            sizes="(max-width: 600px) 100px, (max-width: 1024px) 120px, 140px"
          />
        </motion.button>
      </motion.div>
    </section>
  );
}
