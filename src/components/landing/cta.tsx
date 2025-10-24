'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/hooks/use-auth';

export function Cta() {
  const router = useRouter();
  const { isLoggedIn } = useAuth();

  const handleButtonClick = () => {
    if (isLoggedIn) {
      router.push('/dashboard');
    } else {
      router.push('/login');
    }
  };

  return (
    <section className="relative w-full h-[35vh] min-h-[280px] sm:h-[40vh] lg:h-[500px]">
      {/* Background Image */}
      <Image
        src="/images/cta.png"
        alt="Modern luxury apartment building"
        fill
        className="object-cover"
        priority
      />

      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black/20" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-[#FFFFFF] flex flex-col items-center justify-center h-full">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-sm sm:text-base lg:text-lg mb-2 sm:mb-3 font-medium"
        >
          Check premium apartments
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-5 sm:mb-6 lg:mb-8 max-w-2xl"
        >
          You can own a home too
        </motion.h2>

        <motion.button
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          onClick={handleButtonClick}
          className="bg-[#FF4500] text-[#FFFFFF] px-8 sm:px-12 lg:px-16 py-2.5 sm:py-3 lg:py-3.5 text-sm sm:text-base lg:text-lg font-medium rounded-full hover:bg-[#FF5722] transition-all duration-300 shadow-lg hover:shadow-xl cursor-pointer"
        >
          View available Properties
        </motion.button>
      </div>
    </section>
  );
}
