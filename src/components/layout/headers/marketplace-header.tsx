'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Heart, Bell, BookmarkSimple, List } from 'phosphor-react';
import { useAuth } from '@/hooks/use-auth';
import { useSidebar } from '@/components/layout/providers/sidebar-provider';

export default function MarketplaceHeader() {
  const { isLoggedIn, user } = useAuth();
  const { toggleSidebar } = useSidebar();

  return (
    <nav className="w-full bg-white shadow-sm border-b border-gray-100 fixed top-0 left-0 right-0 z-50">
      <div className="w-full px-3 sm:px-4 lg:px-6">
        <div className="flex items-center justify-between gap-3 sm:gap-4 lg:gap-6 py-2 sm:py-2.5">
          {/* Left: Sidebar toggle and logo */}
          <div className="flex items-center gap-1 sm:gap-3">
            <button
              onClick={toggleSidebar}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors flex-shrink-0"
              aria-label="Toggle sidebar"
            >
              <List size={24} weight="bold" className="text-gray-700" />
            </button>

            <Link href="/features" className="flex flex-shrink-0 ml-2">
              <Image
                src="/images/logo.png"
                alt="Eyrie Logo"
                width={80}
                height={40}
                className="object-contain w-[70px] lg:w-[80px]"
                priority
                sizes="(max-width: 1024px) 70px, 80px"
              />
            </Link>
          </div>

          {/* Center: Quick actions for logged in users */}
          <div className="flex-1 flex justify-center">
            {isLoggedIn && (
              <div className="flex items-center gap-3 sm:gap-4">
                <button className="p-2 text-gray-500 hover:text-red-500 transition-colors rounded-lg hover:bg-gray-100">
                  <Heart size={20} weight="bold" />
                </button>
                <button className="p-2 text-gray-500 hover:text-[#FF4500] transition-colors rounded-lg hover:bg-gray-100">
                  <Bell size={20} weight="bold" />
                </button>
                <button className="p-2 text-gray-500 hover:text-yellow-500 transition-colors rounded-lg hover:bg-gray-100">
                  <BookmarkSimple size={20} weight="bold" />
                </button>
              </div>
            )}
          </div>

          {/* Right: Login/Profile */}
          <div className="flex items-center flex-shrink-0">
            {isLoggedIn ? (
              <Link href="/user/profile" className="flex-shrink-0">
                <Image
                  src={user?.image || '/images/testimonial1.jpg'}
                  alt="Profile"
                  width={36}
                  height={36}
                  className="rounded-full object-cover w-8 h-8 sm:w-9 sm:h-9 border-2 border-gray-200 hover:border-[#FF4500] transition-colors"
                />
              </Link>
            ) : (
              <Link
                href="/login"
                className="flex-shrink-0 px-3 sm:px-4 lg:px-5 py-1.5 sm:py-2 border-2 border-[#FF4500] text-[#161616] rounded-full text-xs sm:text-sm font-medium hover:bg-[#FF4500] hover:text-white transition-all duration-300"
              >
                Sign In
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
