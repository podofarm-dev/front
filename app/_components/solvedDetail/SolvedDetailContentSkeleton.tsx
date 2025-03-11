import SolvedDetailMainSkeleton from '@/app/_components/solvedDetail/SolvedDetailMainSkeleton';
import CommentSkeleton from '@/app/_components/comment/CommentSkeleton';

const SolvedDetailContentSkeleton = () => {
  return (
    <div className="flex flex-col gap-8 py-8">
      <SolvedDetailMainSkeleton />
      <hr className="border-bolder" />
      <CommentSkeleton />
    </div>
  );
};

export default SolvedDetailContentSkeleton;
