'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

interface AuthLayoutProps {
  children: React.ReactNode;
  imageSrc: string;
  imageAlt: string;
}

export function AuthLayout({ children, imageSrc, imageAlt }: AuthLayoutProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="auth-container"
    >
      {/* Background Image - Add error handling */}
      <Image
        src="/images/Login.jpg"
        alt="Login Background"
        fill
        className="object-cover"
        priority
        sizes="100vw"
        quality={75}
        onError={() => {
          // Fallback handling
          console.error('Failed to load background image');
        }}
      />
      <div className="auth-background" />

      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.1, duration: 0.5 }}
        className="auth-card"
      >
        {/* Image Section */}
        <div className="hidden lg:flex lg:w-5/12 p-6 bg-white items-center justify-center">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="relative w-full h-[580px] rounded-xl overflow-hidden shadow-lg"
          >
            <Image
              src={imageSrc}
              alt={imageAlt}
              fill
              className="object-cover"
              sizes="40vw"
              quality={80}
              priority
              onError={() => {
                // Fallback image handling
                console.error('Failed to load side image');
              }}
            />
          </motion.div>
        </div>

        {/* Form Section */}
        <div className="w-full lg:w-7/12 flex flex-col p-6 bg-white sm:p-8 md:p-10 lg:p-12 relative">
          {/* Logo */}
          <div className="absolute top-4 right-4 sm:top-6 sm:right-6">
            <Image
              src="/images/logo.png"
              alt="Eyrie Logo"
              width={90}
              height={36}
              className="w-20 sm:w-24 h-auto"
              priority
            />
          </div>
          {children}
        </div>
      </motion.div>
    </motion.div>
  );
}
