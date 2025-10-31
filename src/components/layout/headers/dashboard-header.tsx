'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { List, BookmarkSimple, Bell, ChatCircle } from 'phosphor-react';
import { useAuth } from '@/hooks/use-auth';
import { useSidebar } from '@/components/layout/providers/sidebar-provider';

export default function DashboardHeader() {
  const [isClient, setIsClient] = useState(false);
  const { user } = useAuth();
  const { toggleSidebar } = useSidebar();

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null;

  return (
    <nav className="w-full bg-white shadow-sm border-b border-gray-100 fixed top-0 left-0 right-0 z-50">
      <div className="w-full px-3 sm:px-4 lg:px-6">
        <div className="flex items-center justify-between gap-3 sm:gap-4 lg:gap-6 py-2 sm:py-2.5">
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

          <div className="flex-1 flex justify-center">
            <div className="flex items-center gap-3 sm:gap-4">
              <button
                className="p-2 text-gray-500 hover:text-yellow-500 transition-colors rounded-lg hover:bg-gray-100"
                aria-label="Saved items"
              >
                <BookmarkSimple size={20} weight="bold" />
              </button>
              <button
                className="p-2 text-gray-500 hover:text-[#FF4500] transition-colors rounded-lg hover:bg-gray-100"
                aria-label="Notifications"
              >
                <Bell size={20} weight="bold" />
              </button>
              <button
                className="p-2 text-gray-500 hover:text-blue-500 transition-colors rounded-lg hover:bg-gray-100"
                aria-label="Messages"
              >
                <ChatCircle size={20} weight="bold" />
              </button>
            </div>
          </div>

          <div className="flex items-center flex-shrink-0">
            <Link href="/user/profile" className="flex-shrink-0">
              <Image
                src={user?.image || '/images/testimonial1.jpg'}
                alt="Profile"
                width={36}
                height={36}
                className="rounded-full object-cover w-8 h-8 sm:w-9 sm:h-9 border-2 border-gray-200 hover:border-[#FF4500] transition-colors"
              />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
