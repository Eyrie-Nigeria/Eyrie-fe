'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/hooks/use-auth';

const navItems = [
  { label: 'Home', href: '#top' },
  { label: 'Services', href: '#services' },
  { label: 'Property Listings', href: '#listings' },
  { label: 'About', href: '#about' },
  { label: 'Contacts', href: '#contact' },
] as const;

export function LandingNavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('top');
  const pathname = usePathname();
  const router = useRouter();
  const { isLoggedIn, logout } = useAuth();

  // Track active section based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['top', 'services', 'listings', 'about', 'contact'];
      const scrollPosition = window.scrollY + 100;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      // Special case for top section
      if (scrollPosition < 200) {
        setActiveSection('top');
        return;
      }

      // Special case for contact section (at bottom of page)
      if (window.scrollY + windowHeight >= documentHeight - 200) {
        setActiveSection('contact');
        return;
      }

      let currentSection = 'top';

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          const elementTop = rect.top + window.scrollY;
          const elementBottom = elementTop + rect.height;

          // Check if scroll position is within this section (with tolerance)
          if (scrollPosition >= elementTop - 150 && scrollPosition < elementBottom - 150) {
            currentSection = section;
            break;
          }
        }
      }

      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    // Initial check
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLogin = () => {
    router.push('/login');
  };

  const handleLogout = () => {
    logout();
    router.push('/');
  };

  const handleNavClick = (href: string) => {
    setIsMenuOpen(false);

    if (href.startsWith('#')) {
      const sectionId = href.substring(1);
      setActiveSection(sectionId);

      const element = document.getElementById(sectionId);
      if (element) {
        const offsetTop = element.offsetTop - 80;
        window.scrollTo({
          top: offsetTop,
          behavior: 'smooth',
        });
      }
    } else {
      router.push(href);
    }
  };

  const isActive = (href: string) => {
    if (href.startsWith('#')) {
      const sectionId = href.substring(1);
      return activeSection === sectionId;
    }
    return pathname === href;
  };

  const filteredNavItems = isLoggedIn
    ? [...navItems, { label: 'Dashboard', href: '/dashboard' }]
    : navItems;

  return (
    <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-md">
      <div className="flex justify-between items-center px-4 sm:px-6 lg:px-8 py-2 lg:py-2.5 bg-card rounded-full mx-auto mt-2 lg:mt-3 max-w-7xl mb-2 shadow-sm">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/images/logo.png"
            alt="Eyrie Logo"
            width={80}
            height={40}
            className="object-contain w-[60px] sm:w-[70px] lg:w-[80px]"
            priority
            sizes="(max-width: 640px) 60px, (max-width: 1024px) 70px, 80px"
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex space-x-6 xl:space-x-8">
          {filteredNavItems.map((item, index) => (
            <motion.div
              key={item.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Button
                variant="ghost"
                onClick={() => handleNavClick(item.href)}
                className={`text-sm xl:text-base font-medium transition-colors duration-300 hover:text-[#FF4500] ${
                  isActive(item.href) ? 'text-[#FF4500]' : 'text-foreground'
                }`}
              >
                {item.label}
              </Button>
            </motion.div>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="lg:hidden text-foreground hover:bg-accent"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            )}
          </svg>
        </Button>

        {/* Desktop Auth Button */}
        <div className="hidden lg:block">
          {isLoggedIn ? (
            <Button
              onClick={handleLogout}
              variant="outline"
              className="border-[#FF4500] text-foreground font-bold hover:bg-[#FF4500] hover:text-white transition-all duration-300"
            >
              Sign Out
            </Button>
          ) : (
            <Button
              onClick={handleLogin}
              variant="outline"
              className="border-[#FF4500] text-foreground font-bold hover:bg-[#FF4500] hover:text-white transition-all duration-300"
            >
              Sign In
            </Button>
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -10 }}
            className="absolute top-20 left-4 right-4 bg-card shadow-lg rounded-2xl z-50 lg:hidden border border-border"
          >
            <div className="flex flex-col space-y-1 py-4">
              {filteredNavItems.map((item, index) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Button
                    variant="ghost"
                    onClick={() => handleNavClick(item.href)}
                    className={`block w-full text-left px-6 py-3 text-sm font-bold transition-colors duration-200 ${
                      isActive(item.href)
                        ? 'text-[#FF4500] bg-[#FF4500]/10'
                        : 'text-foreground hover:text-[#FF4500] hover:bg-accent'
                    }`}
                  >
                    {item.label}
                  </Button>
                </motion.div>
              ))}

              {/* Mobile Auth Button */}
              <div className="border-t border-border mt-2 pt-3 px-6">
                {isLoggedIn ? (
                  <Button
                    onClick={handleLogout}
                    variant="outline"
                    className="w-full border-[#FF4500] bg-[#FF4500] text-foreground font-bold hover:bg-[#FF4500] hover:text-white"
                  >
                    Sign Out
                  </Button>
                ) : (
                  <Button
                    onClick={handleLogin}
                    variant="outline"
                    className="w-full border-[#FF4500] bg-[#FF4500] text-foreground font-bold hover:bg-[#FF4500] hover:text-white"
                  >
                    Sign In
                  </Button>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
