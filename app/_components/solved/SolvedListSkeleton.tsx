import { Skeleton } from '@/components/ui/skeleton';
import SolvedDataTableSkeleton from '@/app/_components/solved/SolvedDataTableSkeleton';

const SolvedListSkeleton = () => {
  return (
    <div className="container mx-auto py-10">
      <div className="mb-6 flex flex-row items-center justify-between gap-6">
        <div className="flex flex-row items-center gap-6">
          <Skeleton className="h-6 w-16" />
        </div>
        <Skeleton className="h-9 w-3/5" />
      </div>
      <Skeleton className="mb-6 h-16 w-full" />
      <div className="flex flex-col gap-8">
        {Array.from({ length: 20 }, (_, index) => (
          <SolvedDataTableSkeleton key={index} />
        ))}
      </div>
    </div>
  );
};

export default SolvedListSkeleton;
