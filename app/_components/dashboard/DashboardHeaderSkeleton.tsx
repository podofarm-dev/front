'use client';

import { Skeleton } from '@/components/ui/skeleton';

const DashboardHeaderSkeleton = () => {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex flex-row items-center">
        <Skeleton className="h-6 w-20" /> •
        <Skeleton className="h-6 w-20" />
      </div>
      <Skeleton className="h-4 w-44" />
    </div>
  );
};

export default DashboardHeaderSkeleton;
