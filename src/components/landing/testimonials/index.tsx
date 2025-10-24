'use client';

import { TestimonialsHeader } from './testimonials-header';
import { TestimonialsGrid } from './testimonials-grid';
import { TestimonialsScroll } from './testimonials-scroll';

export interface Testimonial {
  id: number;
  name: string;
  description: string;
  text: string;
  image: string;
}

export function Testimonials() {
  return (
    <section className="bg-muted py-10 sm:py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <TestimonialsHeader />

        {/* Mobile - Horizontal Scroll */}
        <div className="lg:hidden">
          <TestimonialsScroll />
        </div>

        {/* Desktop - Grid Layout */}
        <div className="hidden lg:block">
          <TestimonialsGrid />
        </div>
      </div>
    </section>
  );
}
