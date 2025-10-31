'use client';

import { SidebarProvider, useSidebar } from '@/components/layout/providers/sidebar-provider';
import { DashboardHeader } from '@/components/layout/headers';
import { DashboardSidebar } from '@/components/layout/sidebars';

function DashboardContent({ children }: { children: React.ReactNode }) {
  const { isOpen, isHovered } = useSidebar();
  const showExpanded = isOpen || isHovered;

  return (
    <>
      <DashboardHeader />
      <DashboardSidebar />

      <main
        className={`transition-all duration-300 pt-16 ${showExpanded ? 'lg:ml-64' : 'lg:ml-14'}`}
      >
        <div className="p-4 sm:p-6">{children}</div>
      </main>
    </>
  );
}

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <div className="min-h-screen bg-gray-50">
        <DashboardContent>{children}</DashboardContent>
      </div>
    </SidebarProvider>
  );
}
