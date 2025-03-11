import UserCardSkeleton from '@/app/_components/common/UserCardSkeleton';
import ProblemListSkeleton from '@/app/_components/problem/ProblemListSkeleton';

const ProblemListContentSkeleton = () => {
  return (
    <div className="flex flex-col gap-6 md:flex-row">
      <div className="order-2 flex w-full md:order-1 md:w-10/12">
        <ProblemListSkeleton />
      </div>
      <div className="order-1 flex w-full md:order-2 md:w-2/12">
        <UserCardSkeleton />
      </div>
    </div>
  );
};

export default ProblemListContentSkeleton;
