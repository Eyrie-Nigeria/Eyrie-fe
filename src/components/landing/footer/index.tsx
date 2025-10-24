'use client';

import { FooterMobile } from './footer-mobile';
import { FooterDesktop } from './footer-desktop';

export function Footer() {
  return (
    <footer className="bg-[#B53100] text-[#FBFBFB] py-10 sm:py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Mobile Layout */}
        <div className="lg:hidden">
          <FooterMobile />
        </div>

        {/* Desktop Layout */}
        <div className="hidden lg:block">
          <FooterDesktop />
        </div>
      </div>
    </footer>
  );
}
