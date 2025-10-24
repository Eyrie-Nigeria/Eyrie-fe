'use client';

import { motion } from 'framer-motion';
import { TestimonialCard } from './testimonial-card';
import { testimonials } from '@/data/testimonials-data';

export function TestimonialsGrid() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
    >
      {testimonials.map((testimonial, index) => (
        <TestimonialCard
          key={testimonial.id}
          testimonial={testimonial}
          index={index}
          variant="desktop"
        />
      ))}
    </motion.div>
  );
}
