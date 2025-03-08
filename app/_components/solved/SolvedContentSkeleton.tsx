import { Skeleton } from '@/components/ui/skeleton';
import UserCardSkeleton from '@/app/_components/common/UserCardSkeleton';
import SolvedListSkeleton from '@/app/_components/solved/SolvedListSkeleton';

const SolvedContentSkeleton = () => {
  return (
    <div className="flex flex-row gap-6">
      <div className="flex w-10/12">
        <SolvedListSkeleton />
      </div>
      <div className="flex w-2/12 flex-col gap-14">
        <UserCardSkeleton />
        <div className="flex flex-col gap-4">
          {Array.from({ length: 6 }, (_, index) => (
            <Skeleton key={index} className="h-14 w-full" />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SolvedContentSkeleton;
