import { Skeleton } from '@/components/ui/skeleton';

const SolvedDataTableSkeleton = () => {
  return (
    <div className="flex flex-row gap-8">
      <Skeleton className="h-8 w-2/12" />
      <Skeleton className="h-8 w-7/12" />
      <Skeleton className="h-8 w-1/12" />
      <Skeleton className="h-8 w-1/12" />
      <Skeleton className="h-8 w-2/12" />
      <Skeleton className="h-8 w-2/12" />
    </div>
  );
};

export default SolvedDataTableSkeleton;
