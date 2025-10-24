'use client';

import { FeaturesGrid } from './features-grid';
import { DreamHomeSection } from './dream-home-section';

export function WhatYouGet() {
  return (
    <section className="py-8 sm:py-10 lg:py-12 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Features Grid Section */}
        <FeaturesGrid />
      </div>

      {/* Dream Home CTA Section */}
      <DreamHomeSection />
    </section>
  );
}
