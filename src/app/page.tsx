import { LandingNavbar } from '@/components/landing/landing-navbar';
import { HeroSection } from '@/components/landing/hero-section';
import { ServicesSection } from '@/components/landing/services-section';
import { FeaturedListings } from '@/components/landing/featured-listings';
import { WhatYouGet } from '@/components/landing/what-you-get';
import { Testimonials } from '@/components/landing/testimonials';
import { Cta } from '@/components/landing/cta';
import { DownloadAppBanner } from '@/components/landing/download-app-banner';
import { Footer } from '@/components/landing/footer';
import { ErrorBoundary } from '@/components/error-boundary';
import { ErrorFallback } from '@/components/error-fallback';

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Top Anchor */}
      <div id="top" />

      {/* Navbar with Error Boundary */}
      <ErrorBoundary fallback={<ErrorFallback componentName="Navigation" />}>
        <LandingNavbar />
      </ErrorBoundary>

      <main>
        {/* Hero Section */}
        <ErrorBoundary fallback={<ErrorFallback componentName="Hero Section" />}>
          <HeroSection />
        </ErrorBoundary>

        {/* Services Section */}
        <div id="services">
          <ErrorBoundary fallback={<ErrorFallback componentName="Services Section" />}>
            <ServicesSection />
          </ErrorBoundary>
        </div>

        {/* Property Listings Section */}
        <div id="listings">
          <ErrorBoundary fallback={<ErrorFallback componentName="Property Listings" />}>
            <FeaturedListings />
          </ErrorBoundary>
        </div>

        {/* About Section */}
        <div id="about">
          <ErrorBoundary fallback={<ErrorFallback componentName="About Section" />}>
            <WhatYouGet />
          </ErrorBoundary>
        </div>

        {/* Testimonials */}
        <ErrorBoundary fallback={<ErrorFallback componentName="Testimonials" />}>
          <Testimonials />
        </ErrorBoundary>

        {/* CTA Section */}
        <ErrorBoundary fallback={<ErrorFallback componentName="Call to Action" />}>
          <Cta />
        </ErrorBoundary>

        {/* Download App Banner */}
        <div className="px-4 sm:px-6 -mt-12 -mb-12">
          <ErrorBoundary fallback={<ErrorFallback componentName="Download Banner" />}>
            <DownloadAppBanner />
          </ErrorBoundary>
        </div>
      </main>

      {/* Footer Section */}
      <div id="contact">
        <ErrorBoundary fallback={<ErrorFallback componentName="Footer" />}>
          <Footer />
        </ErrorBoundary>
      </div>
    </div>
  );
}
