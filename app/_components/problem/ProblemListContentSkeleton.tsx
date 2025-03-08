import UserCardSkeleton from '@/app/_components/common/UserCardSkeleton';
import ProblemListSkeleton from '@/app/_components/problem/ProblemListSkeleton';

const ProblemListContentSkeleton = () => {
  return (
    <div className="flex flex-row gap-6">
      <div className="flex w-10/12">
        <ProblemListSkeleton />
      </div>
      <div className="flex w-2/12">
        <UserCardSkeleton />
      </div>
    </div>
  );
};

export default ProblemListContentSkeleton;
