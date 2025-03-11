import { Skeleton } from '@/components/ui/skeleton';

const SolvedDetailMainSkeleton = () => {
  return (
    <>
      <div className="flex flex-row justify-between gap-4">
        <div className="flex flex-row gap-4">
          <Skeleton className="h-8 w-96 max-md:w-32" />
          <Skeleton className="h-8 w-16 max-md:w-10" />
        </div>
        <div className="flex flex-row items-center gap-4">
          <Skeleton className="h-8 w-36 max-md:w-20" />
        </div>
      </div>
      <Skeleton className="h-28 w-full" />
      <Skeleton className="h-[668px] w-full" />
    </>
  );
};

export default SolvedDetailMainSkeleton;
