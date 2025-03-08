import { Skeleton } from '@/components/ui/skeleton';

const DashboardDailyActivitySkeleton = () => {
  return (
    <div className="flex flex-row">
      <span className="absolute left-6 top-2 h-full w-[0.1px] bg-bolder" />
      <div className="flex w-full flex-col gap-2">
        <Skeleton className="h-5 w-28" />
        <div className="flex flex-row justify-between text-secondary-foreground">
          <Skeleton className="h-5 w-16" />
          <div className="flex flex-row gap-24">
            <div className="flex flex-row items-center gap-2">
              <div className="h-4 w-4 rounded-full bg-main-1" />
              <Skeleton className="h-5 w-10" />
            </div>
            <Skeleton className="h-5 w-6" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardDailyActivitySkeleton;
