import { Skeleton } from '@/components/ui/skeleton';

const TimeLineSkeleton = () => {
  return (
    <div className="relative pb-6 pl-6">
      <span className="absolute left-[-9px] top-1 h-3 w-3 rounded-full bg-bolder" />
      <span className="absolute left-[-4px] top-2 h-full w-[0.1rem] bg-bolder" />
      <div className="flex flex-col gap-2">
        <Skeleton className="h-5 w-14" />
        <Skeleton className="h-10 w-full" />
      </div>
    </div>
  );
};

export default TimeLineSkeleton;
