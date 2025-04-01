import { Skeleton } from '@/components/ui/skeleton';

const DashboardTabListSkeleton = () => {
  return (
    <div className="relative flex min-w-fit flex-row items-center gap-10">
      <Skeleton className="relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full" />
      <Skeleton className="h-7 w-full" />
    </div>
  );
};

export default DashboardTabListSkeleton;
