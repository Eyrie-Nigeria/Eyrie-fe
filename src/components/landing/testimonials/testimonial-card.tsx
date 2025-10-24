'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { FaFacebook, FaTwitter } from 'react-icons/fa';
import { Testimonial } from './index';

interface TestimonialCardProps {
  testimonial: Testimonial;
  index: number;
  variant: 'mobile' | 'desktop';
}

export function TestimonialCard({ testimonial, index, variant }: TestimonialCardProps) {
  const isMobile = variant === 'mobile';

  const cardClasses = `
    bg-card shadow-lg rounded-2xl lg:rounded-3xl flex flex-col items-start text-start 
    hover:shadow-xl transition-all duration-300 card-hover
    ${isMobile ? 'p-5 min-w-[300px]' : 'p-6 lg:p-7'}
  `;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className={cardClasses}
    >
      {/* Testimonial Text */}
      <p
        className={`text-foreground mb-4 leading-relaxed ${
          isMobile ? 'text-sm' : 'text-sm lg:text-base'
        }`}
      >
        &quot;{testimonial.text}&quot;
      </p>

      {/* Client Info */}
      <div className="flex items-center gap-3 mb-3">
        <Image
          src={testimonial.image || '/placeholder.svg'}
          alt={`Photo of ${testimonial.name}`}
          width={60}
          height={60}
          className="rounded-full border-2 border-border"
          loading="lazy"
          sizes="60px"
        />
        <div>
          <h4
            className={`font-semibold text-foreground ${
              isMobile ? 'text-sm' : 'text-sm lg:text-base'
            }`}
          >
            {testimonial.name}
          </h4>
          <p className={`text-muted-foreground ${isMobile ? 'text-xs' : 'text-xs lg:text-sm'}`}>
            {testimonial.description}
          </p>
        </div>
      </div>

      {/* Social Links */}
      <div className="w-full flex justify-end space-x-3 mt-auto">
        <FaFacebook className="text-muted-foreground hover:text-blue-600 cursor-pointer transition-colors text-lg" />
        <FaTwitter className="text-muted-foreground hover:text-blue-400 cursor-pointer transition-colors text-lg" />
      </div>
    </motion.div>
  );
}
