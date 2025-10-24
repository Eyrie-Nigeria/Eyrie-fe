'use client';

import { motion } from 'framer-motion';
import { FooterLogoSection } from './footer-logo-section';
import { FooterSubscribe } from './footer-subscribe';
import { FooterLinks } from './footer-links';

export function FooterDesktop() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="grid grid-cols-6 gap-8 mt-8"
    >
      {/* Logo Section - Column 1 */}
      <div className="flex flex-col">
        <FooterLogoSection variant="desktop" />
      </div>

      {/* Link Sections - Columns 2, 3, 4 */}
      <FooterLinks variant="desktop" />

      {/* Subscribe - Columns 5 & 6 */}
      <div className="col-span-2">
        <FooterSubscribe variant="desktop" />
      </div>
    </motion.div>
  );
}
