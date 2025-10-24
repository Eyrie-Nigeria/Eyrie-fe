'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const trustedDevelopers = [
  { src: '/images/sujimoto.png', alt: 'Sujimoto Logo' },
  { src: '/images/realestate.png', alt: 'Real Estate Logo' },
  { src: '/images/nueton.png', alt: 'Nueton Builders Logo' },
  { src: '/images/urbannexus.png', alt: 'Urban Nexus Logo' },
];

export function HeroTrustedSection() {
  return (
    <>
      {/* Trusted by Text & Avatar */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="mt-6 sm:mt-8 flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-4 text-center max-w-7xl px-4"
      >
        <p className="text-xs sm:text-sm md:text-base lg:text-lg text-[#FF4500] font-bold">
          Trusted by 100+ Real Estate Developers
        </p>
        <Image
          src="/images/avatar.png"
          alt="Happy customers"
          width={150}
          height={120}
          className="rounded-full border-2 border-border w-[120px] sm:w-[140px] lg:w-[150px] h-auto"
          loading="lazy"
          sizes="(max-width: 640px) 120px, (max-width: 1024px) 140px, 150px"
        />
      </motion.div>

      {/* Developer Logos */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="w-full bg-card mt-8 sm:mt-10 px-4 py-4 sm:py-5 lg:py-6"
      >
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 items-center justify-items-center max-w-7xl mx-auto">
          {trustedDevelopers.map((developer, index) => (
            <motion.div
              key={developer.alt}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 + index * 0.1 }}
            >
              <Image
                src={developer.src}
                alt={developer.alt}
                width={160}
                height={60}
                className="object-contain w-[100px] sm:w-[130px] lg:w-[160px] h-auto"
                loading="lazy"
                sizes="(max-width: 640px) 100px, (max-width: 1024px) 130px, 160px"
              />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </>
  );
}
