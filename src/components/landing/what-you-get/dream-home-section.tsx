'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const benefits = [
  'Showcase and embed your work with',
  'Publish across social channels in a click',
  'Sell your videos worldwide',
  'Embed your work with',
];

export function DreamHomeSection() {
  return (
    // Full width background container
    <div className="w-full bg-[#E83F00] py-10 sm:py-12 lg:py-16 text-[#FFFFFF]">
      {/* Centered content container */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="flex flex-col lg:flex-row items-center gap-6 sm:gap-8 lg:gap-12">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2 flex justify-center"
          >
            <Image
              src="/images/key.jpg"
              alt="A key representing your dream home"
              width={500}
              height={400}
              className="rounded-xl lg:rounded-2xl object-cover w-full max-w-md lg:max-w-none"
              loading="lazy"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2"
          >
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-5 text-white">
              Your dream home could be just a click away
            </h3>
            <p className="mb-4 sm:mb-5 text-sm sm:text-base lg:text-lg text-white/90 leading-relaxed">
              Separated they live in Bookmarks right at the coast of the famous Semantics, large
              language ocean.
            </p>
            <ul className="space-y-3 text-sm sm:text-base lg:text-lg text-white/90 list-disc pl-5">
              {benefits.map((benefit, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                  className="leading-relaxed"
                >
                  {benefit}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
