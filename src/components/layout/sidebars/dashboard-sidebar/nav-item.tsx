'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useAuth } from '@/hooks/use-auth';

import type { NavItem } from '@/types';

interface NavItemProps {
  item: NavItem;
  showExpanded: boolean;
}

export function NavItem({ item, showExpanded }: NavItemProps) {
  const pathname = usePathname();
  const { logout } = useAuth();
  const isActive = pathname === item.href;

  const handleClick = (e: React.MouseEvent) => {
    if (item.isLogout) {
      e.preventDefault();
      logout();
    }
  };

  const baseClasses = `flex items-center w-full rounded-lg transition-colors group ${
    showExpanded ? 'p-2.5' : 'p-3 mx-1'
  }`;

  const getVariantClasses = () => {
    if (isActive) {
      return 'bg-[#FF4500] text-white shadow-lg';
    }
    if (item.isLogout) {
      return 'text-blue-400 hover:bg-blue-600 hover:text-white cursor-pointer';
    }
    return 'text-gray-300 hover:bg-slate-700 hover:text-white';
  };

  if (item.isLogout) {
    return (
      <button
        onClick={handleClick}
        className={`${baseClasses} ${getVariantClasses()} border-0 outline-none`}
      >
        <item.icon
          className={`h-5 w-5 flex-shrink-0 ${showExpanded ? 'mr-3' : 'mx-auto'} ${
            isActive
              ? 'text-white'
              : item.isLogout
                ? 'text-blue-500 group-hover:text-white'
                : 'text-gray-400 group-hover:text-white'
          }`}
        />
        {showExpanded && <span className="text-sm font-medium truncate">{item.label}</span>}
      </button>
    );
  }

  return (
    <Link href={item.href} className={`${baseClasses} ${getVariantClasses()}`}>
      <item.icon
        className={`h-5 w-5 flex-shrink-0 ${showExpanded ? 'mr-3' : 'mx-auto'} ${
          isActive
            ? 'text-white'
            : item.isLogout
              ? 'text-blue-500 group-hover:text-white'
              : 'text-gray-400 group-hover:text-white'
        }`}
      />
      {showExpanded && <span className="text-sm font-medium truncate">{item.label}</span>}
    </Link>
  );
}
