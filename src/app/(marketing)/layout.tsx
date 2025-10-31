'use client';

import { SidebarProvider, useSidebar } from '@/components/layout/providers/sidebar-provider';
import { MarketplaceHeader } from '@/components/layout/headers';
import { MarketplaceSidebar } from '@/components/layout/sidebars';

function MarketplaceContent({ children }: { children: React.ReactNode }) {
  const { isOpen, isHovered } = useSidebar();
  const showExpanded = isOpen || isHovered;

  const handleApplyFilters = (filters: Record<string, unknown>) => {
    console.log('Applying filters:', filters);
  };

  const handleSearch = (query: string) => {
    console.log('Searching for:', query);
  };

  return (
    <>
      <MarketplaceHeader />
      <MarketplaceSidebar onApplyFilters={handleApplyFilters} onSearch={handleSearch} />

      <main
        className={`transition-all duration-300 pt-16 ${showExpanded ? 'lg:ml-64' : 'lg:ml-14'}`}
      >
        <div className="p-4 sm:p-6">{children}</div>
      </main>
    </>
  );
}

export default function MarketplaceLayout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <div className="min-h-screen bg-gray-50">
        <MarketplaceContent>{children}</MarketplaceContent>
      </div>
    </SidebarProvider>
  );
}
