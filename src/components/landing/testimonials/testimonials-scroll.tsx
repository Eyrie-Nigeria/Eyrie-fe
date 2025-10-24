'use client';

import { motion } from 'framer-motion';
import { TestimonialCard } from './testimonial-card';
import { testimonials } from '@/data/testimonials-data';

export function TestimonialsScroll() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="overflow-x-auto pb-4 custom-scrollbar"
    >
      <div className="flex space-x-4 w-fit">
        {testimonials.map((testimonial, index) => (
          <TestimonialCard
            key={testimonial.id}
            testimonial={testimonial}
            index={index}
            variant="mobile"
          />
        ))}
      </div>
    </motion.div>
  );
}
