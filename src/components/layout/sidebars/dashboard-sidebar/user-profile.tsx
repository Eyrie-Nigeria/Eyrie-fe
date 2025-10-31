'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useAuth } from '@/hooks/use-auth';

interface UserProfileProps {
  showExpanded: boolean;
}

export function UserProfile({ showExpanded }: UserProfileProps) {
  const { user } = useAuth();

  if (!user) return null;

  return (
    <div className="border-t border-slate-700 flex-shrink-0 p-3">
      {showExpanded ? (
        <Link
          href="/profile"
          className="flex items-center w-full p-2.5 text-left hover:bg-slate-700 rounded-lg transition-colors group"
        >
          <Image
            src={user.image || '/images/testimonial1.jpg'}
            alt="Profile"
            width={40}
            height={40}
            className="rounded-full object-cover w-10 h-10 border-2 border-gray-600 group-hover:border-[#FF4500] transition-colors flex-shrink-0"
          />
          <div className="ml-3 min-w-0">
            <p className="text-sm font-semibold text-white truncate">{user.name}</p>
            <p className="text-xs text-gray-400 capitalize">{user.role}</p>
          </div>
        </Link>
      ) : (
        <Link
          href="/profile"
          className="w-full p-3 mx-1 hover:bg-slate-700 rounded-lg transition-colors flex items-center justify-center"
          aria-label="Profile"
        >
          <Image
            src={user.image || '/images/testimonial1.jpg'}
            alt="Profile"
            width={32}
            height={32}
            className="rounded-full object-cover w-8 h-8 border-2 border-gray-600 hover:border-[#FF4500] transition-colors"
          />
        </Link>
      )}
    </div>
  );
}
