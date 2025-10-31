'use client';

import { usePathname } from 'next/navigation';
import { useEffect } from 'react';
import { X } from 'phosphor-react';
import { useSidebar } from '@/components/layout/providers/sidebar-provider';
import { useAuth } from '@/hooks/use-auth';
import { getProfileNavigationConfig } from './navigation-config';
import { NavItem } from './nav-item';
import { UserProfile } from './user-profile';

export default function DashboardSidebar() {
  const pathname = usePathname();
  const { isOpen, isHovered, setIsOpen, setIsHovered } = useSidebar();
  const { user } = useAuth();

  // Determine role from pathname or user data
  const determineRoleFromPathname = () => {
    if (pathname.includes('/user/')) return 'user';
    if (pathname.includes('/agent/') || pathname.includes('/seller/')) return 'agent';
    if (pathname.includes('/landlord/')) return 'landlord';
    if (pathname.includes('/admin/')) return 'admin';
    return user?.role || 'user';
  };

  const userRole = determineRoleFromPathname();
  const navigationSections = getProfileNavigationConfig(userRole);
  const showExpanded =
    typeof window !== 'undefined' && window.innerWidth >= 1024 ? isOpen || isHovered : isOpen;

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (
        isOpen &&
        typeof window !== 'undefined' &&
        window.innerWidth < 1024 &&
        !target.closest('.sidebar-container')
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen, setIsOpen]);

  useEffect(() => {
    if (isOpen && typeof window !== 'undefined' && window.innerWidth < 1024) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const renderSectionHeader = (title: string) =>
    showExpanded ? (
      <div className="px-3 py-2 mb-2">
        <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider">{title}</h3>
      </div>
    ) : null;

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      <aside
        className={`sidebar-container fixed left-0 top-16 bottom-0 z-50 lg:z-30
          shadow-xl overflow-hidden transition-all duration-300 flex flex-col
          ${showExpanded ? 'w-64' : 'w-14'}
          ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
        `}
        onMouseEnter={() =>
          typeof window !== 'undefined' && window.innerWidth >= 1024 && setIsHovered(true)
        }
        onMouseLeave={() =>
          typeof window !== 'undefined' && window.innerWidth >= 1024 && setIsHovered(false)
        }
      >
        {isOpen && (
          <button
            onClick={() => setIsOpen(false)}
            className="lg:hidden absolute top-3 right-3 p-1.5 hover:bg-slate-700 rounded-lg transition-colors z-10"
            aria-label="Close sidebar"
          >
            <X size={20} weight="bold" />
          </button>
        )}

        <div className="flex-1 overflow-y-auto sidebar-scrollbar py-4">
          {navigationSections.map((section, sectionIndex) => (
            <div key={section.title} className={sectionIndex > 0 ? 'mt-6' : ''}>
              {renderSectionHeader(section.title)}
              <div className={`space-y-1 ${showExpanded ? 'px-3' : 'px-1'}`}>
                {section.items.map((item) => (
                  <NavItem key={item.href} item={item} showExpanded={showExpanded} />
                ))}
              </div>
            </div>
          ))}
        </div>

        <UserProfile showExpanded={showExpanded} />
      </aside>
    </>
  );
}
