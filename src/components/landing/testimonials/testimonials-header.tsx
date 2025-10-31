'use client';

import { motion } from 'framer-motion';

export function TestimonialsHeader() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="mb-6 sm:mb-8 lg:mb-10"
    >
      <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-black">What Our Clients Say</h2>
    </motion.div>
  );
}
