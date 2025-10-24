'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import {
  PaperPlaneRight,
  InstagramLogo,
  FacebookLogo,
  GoogleLogo,
  LinkedinLogo,
} from 'phosphor-react';

interface FooterSubscribeProps {
  variant: 'mobile' | 'desktop';
}

const socialIcons = [
  { Icon: InstagramLogo, label: 'Instagram' },
  { Icon: FacebookLogo, label: 'Facebook' },
  { Icon: GoogleLogo, label: 'Google' },
  { Icon: LinkedinLogo, label: 'LinkedIn' },
];

export function FooterSubscribe({ variant }: FooterSubscribeProps) {
  const [email, setEmail] = useState('');
  const isMobile = variant === 'mobile';

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement newsletter subscription
    console.log('Subscribe email:', email);
    setEmail('');
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.3 }}
      className={isMobile ? 'pt-6 border-t border-primary-foreground/20' : ''}
    >
      <h3
        className={`text-base sm:text-lg font-semibold mb-4 ${isMobile ? 'text-center' : ''} text-primary-foreground`}
      >
        Subscribe
      </h3>

      {/* Email Input */}
      <form
        onSubmit={handleSubmit}
        className="flex items-center bg-white/20 rounded-full px-4 py-3 w-full max-w-md"
      >
        <input
          type="email"
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="bg-transparent text-primary-foreground placeholder-primary-foreground/60 outline-none px-2 flex-1 text-sm sm:text-base"
          required
        />
        <motion.button
          type="submit"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="text-primary-foreground hover:text-primary-foreground/80 transition-colors cursor-pointer"
          aria-label="Subscribe to newsletter"
        >
          <PaperPlaneRight size={isMobile ? 20 : 22} />
        </motion.button>
      </form>

      {/* Description */}
      <p
        className={`text-white/60 mt-3 leading-relaxed ${
          isMobile ? 'text-xs sm:text-sm text-center' : 'text-sm lg:text-base mt-4 mb-8'
        }`}
      >
        {isMobile
          ? 'Join our newsletter for updates'
          : 'Join our newsletter to stay up to date on features and releases'}
      </p>

      {/* Social Links */}
      <div className={`flex space-x-5 mt-4 ${isMobile ? 'justify-center' : 'justify-end'}`}>
        {socialIcons.map(({ Icon, label }, index) => (
          <motion.a
            key={label}
            href="#"
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 + index * 0.1 }}
            className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
            aria-label={`Follow us on ${label}`}
          >
            <Icon size={isMobile ? 22 : 20} />
          </motion.a>
        ))}
      </div>
    </motion.div>
  );
}
