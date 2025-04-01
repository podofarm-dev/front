import { Skeleton } from '@/components/ui/skeleton';

const ProblemDataTableSkeleton = () => {
  return (
    <div className="flex flex-row gap-8">
      <Skeleton className="h-8 w-1/12" />
      <Skeleton className="h-8 w-1/12" />
      <Skeleton className="h-8 w-6/12" />
      <Skeleton className="h-8 w-1/12" />
      <Skeleton className="h-8 w-3/12" />
    </div>
  );
};

export default ProblemDataTableSkeleton;
