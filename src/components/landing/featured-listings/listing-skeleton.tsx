'use client';

export function ListingSkeleton() {
  return (
    <div className="overflow-x-auto pb-4 custom-scrollbar">
      <div className="flex space-x-4 sm:space-x-6 w-max min-w-full">
        {Array.from({ length: 4 }).map((_, index) => (
          <div
            key={index}
            className="bg-card rounded-xl sm:rounded-2xl overflow-hidden border border-border"
            style={{ minWidth: '240px', width: '240px' }}
          >
            {/* Image Skeleton */}
            <div className="w-full h-40 sm:h-48 md:h-56 bg-muted animate-pulse" />

            {/* Content Skeleton */}
            <div className="p-3 sm:p-4">
              <div className="space-y-2">
                <div className="h-4 bg-muted rounded animate-pulse" />
                <div className="h-3 bg-muted rounded animate-pulse w-3/4" />
                <div className="h-3 bg-muted rounded animate-pulse w-1/2" />
              </div>

              {/* Features Skeleton */}
              <div className="flex justify-between my-3">
                <div className="h-3 bg-muted rounded animate-pulse w-12" />
                <div className="h-3 bg-muted rounded animate-pulse w-12" />
                <div className="h-3 bg-muted rounded animate-pulse w-12" />
              </div>

              {/* Button Skeleton */}
              <div className="h-8 bg-muted rounded-full animate-pulse" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
