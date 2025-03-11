import { Skeleton } from '@/components/ui/skeleton';
import UserCardSkeleton from '@/app/_components/common/UserCardSkeleton';
import SolvedListSkeleton from '@/app/_components/solved/SolvedListSkeleton';

const SolvedContentSkeleton = () => {
  return (
    <div className="flex flex-col gap-6 md:flex-row">
      <div className="order-2 flex w-full md:order-1 md:w-10/12">
        <SolvedListSkeleton />
      </div>
      <div className="order-1 flex w-full flex-col gap-8 md:order-2 md:w-2/12">
        <UserCardSkeleton />
        <div className="grid grid-cols-3 gap-4 md:flex md:flex-col">
          {Array.from({ length: 6 }, (_, index) => (
            <Skeleton key={index} className="h-14 w-full" />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SolvedContentSkeleton;
