'use client';

import { motion } from 'framer-motion';
import { FooterLogoSection } from './footer-logo-section';
import { FooterLinks } from './footer-links';
import { FooterSubscribe } from './footer-subscribe';

export function FooterMobile() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="flex flex-col space-y-8 mt-6"
    >
      {/* Logo + App Download */}
      <FooterLogoSection variant="mobile" />

      {/* Links */}
      <FooterLinks variant="mobile" />

      {/* Subscribe */}
      <FooterSubscribe variant="mobile" />
    </motion.div>
  );
}
