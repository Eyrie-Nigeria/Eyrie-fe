import { IconProps } from 'phosphor-react';
export type UserRole = 'user' | 'agent' | 'landlord' | 'admin';

export interface User {
  id: string;
  name: string;
  email: string;
  image?: string;
  role: UserRole;
  is_landlord?: boolean;
}

export interface NavItem {
  href: string;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
  roles?: UserRole[];
  isLogout?: boolean;
}

export interface NavigationSection {
  title: string;
  items: NavItem[];
}

export interface FilterOption {
  label: string;
  options?: string[];
  isRange?: boolean;
  min?: number;
  max?: number;
}

export interface Category {
  label: string;
  icon: React.ComponentType<IconProps>;
  color: string;
}

export type FilterValue = Record<string, boolean> | { min?: number; max?: number };
