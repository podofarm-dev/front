import { Skeleton } from '@/components/ui/skeleton';
import DashboardDailyActivitySkeleton from './DashboardDailyActivitySkeleton';

const DashboardSolvedAlgorithmSkeleton = () => {
  return (
    <div className="flex flex-col">
      <div className="flex flex-row items-center gap-2">
        <div className="whitespace-nowrap">
          <Skeleton className="h-5 w-24" />
        </div>
        <hr className="w-full border-bolder" />
      </div>
      <div className="relative flex flex-col gap-9 py-8 pl-11 pr-6">
        {Array.from({ length: 2 }, (_, index) => (
          <DashboardDailyActivitySkeleton key={index} />
        ))}
      </div>
    </div>
  );
};

export default DashboardSolvedAlgorithmSkeleton;
