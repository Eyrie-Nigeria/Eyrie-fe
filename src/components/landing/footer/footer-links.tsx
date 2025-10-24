'use client';

import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/hooks/use-auth';

interface FooterLinksProps {
  variant: 'mobile' | 'desktop';
}

interface LinkGroup {
  title: string;
  links: string[];
}

const linkGroups: LinkGroup[] = [
  {
    title: 'Property Listings',
    links: ['Apartments', 'Bungalows', 'Duplexes', 'Sky Scrapers'],
  },
  {
    title: 'Listings',
    links: ['Buys', 'Rent', 'Shortlets'],
  },
  {
    title: 'Furnishing',
    links: ['Furnished', 'Semi-Furnished', 'Unfurnished'],
  },
];

export function FooterLinks({ variant }: FooterLinksProps) {
  const isMobile = variant === 'mobile';
  const router = useRouter();
  const { isLoggedIn } = useAuth();

  const handleLinkClick = () => {
    if (isLoggedIn) {
      router.push('/dashboard');
    } else {
      router.push('/login');
    }
  };

  if (isMobile) {
    // Mobile layout - all sections in one grid
    return (
      <div className="grid grid-cols-2 gap-6 sm:gap-8">
        {linkGroups.map((group, groupIndex) => (
          <motion.div
            key={group.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: groupIndex * 0.1 }}
            className={group.title === 'Furnishing' ? 'col-span-2' : ''}
          >
            <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4 text-[#FFFFFF]">
              {group.title}
            </h3>
            <ul
              className={`text-sm sm:text-base ${
                group.title === 'Furnishing' ? 'grid grid-cols-3 gap-2' : 'space-y-2'
              }`}
            >
              {group.links.map((link, linkIndex) => (
                <motion.li
                  key={link}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: groupIndex * 0.1 + linkIndex * 0.05 }}
                  className="cursor-pointer hover:underline transition-all"
                  onClick={handleLinkClick}
                >
                  {link}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    );
  }

  // Desktop layout - each section gets its own column
  return (
    <>
      {linkGroups.map((group, groupIndex) => (
        <div key={group.title}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: groupIndex * 0.1 }}
          >
            <h3 className="text-base lg:text-lg font-semibold mb-4 lg:mb-5 text-[#FFFFFF]">
              {group.title}
            </h3>
            <ul className="space-y-2 text-sm lg:text-base cursor-pointer">
              {group.links.map((link, linkIndex) => (
                <motion.li
                  key={link}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: groupIndex * 0.1 + linkIndex * 0.05 }}
                  className="hover:underline transition-all"
                  onClick={handleLinkClick}
                >
                  {link}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      ))}
    </>
  );
}
