import { NavigationSection, UserRole } from '@/types';
import {
  BellIcon,
  BookmarkIcon,
  UserCircleIcon,
  HomeIcon,
  MagnifyingGlassIcon,
  ChatBubbleLeftRightIcon,
  CalendarDaysIcon,
  CreditCardIcon,
  ClipboardDocumentListIcon,
  ChartBarIcon,
  UsersIcon,
  DocumentTextIcon,
  ArrowRightOnRectangleIcon,
  Cog6ToothIcon,
} from '@heroicons/react/24/outline';

export const getProfileNavigationConfig = (role: UserRole): NavigationSection[] => {
  const basePaths: Record<UserRole, string> = {
    user: '/user',
    landlord: '/landlord',
    admin: '/admin',
    agent: '/agent',
  };

  const currentPath = basePaths[role];

  const commonMainMenu: NavigationSection['items'] = [
    { href: `${currentPath}/profile`, icon: UserCircleIcon, label: 'Profile' },
    { href: `${currentPath}/notifications`, icon: BellIcon, label: 'Notifications' },
    { href: `${currentPath}/dashboard`, icon: HomeIcon, label: 'Dashboard' },
    { href: `${currentPath}/messages`, icon: ChatBubbleLeftRightIcon, label: 'Messages' },
  ];

  const roleSpecificItems: Record<UserRole, NavigationSection['items']> = {
    user: [
      { href: '/user/saved-searches', icon: MagnifyingGlassIcon, label: 'Saved Search' },
      { href: '/user/favorites', icon: BookmarkIcon, label: 'Favorites' },
    ],
    agent: [
      { href: '/agent/listings', icon: DocumentTextIcon, label: 'My Listings' },
      { href: '/agent/leads', icon: UsersIcon, label: 'Leads' },
    ],
    landlord: [
      { href: '/landlord/properties', icon: DocumentTextIcon, label: 'Properties' },
      { href: '/landlord/tenants', icon: UsersIcon, label: 'Tenants' },
      { href: '/landlord/bookings', icon: CalendarDaysIcon, label: 'Bookings' },
    ],
    admin: [
      { href: '/admin/users', icon: UsersIcon, label: 'Users' },
      { href: '/admin/analytics', icon: ChartBarIcon, label: 'Analytics' },
      { href: '/admin/properties', icon: DocumentTextIcon, label: 'Properties' },
    ],
  };

  const commonOthers: NavigationSection['items'] = [
    { href: `${currentPath}/billing`, icon: CreditCardIcon, label: 'Transactions' },
    { href: `${currentPath}/activity`, icon: ClipboardDocumentListIcon, label: 'Activity Log' },
    { href: `${currentPath}/settings`, icon: Cog6ToothIcon, label: 'Settings' },
  ];

  return [
    {
      title: 'MAIN MENU',
      items: [...commonMainMenu, ...(roleSpecificItems[role] || [])],
    },
    {
      title: 'OTHERS',
      items: commonOthers,
    },
    {
      title: 'ACCOUNT',
      items: [
        {
          href: '#',
          icon: ArrowRightOnRectangleIcon,
          label: 'Sign Out',
          isLogout: true,
        },
      ],
    },
  ];
};
