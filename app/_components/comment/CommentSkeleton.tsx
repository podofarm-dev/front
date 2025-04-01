import CommentDetailSkeleton from '@/app/_components/comment/CommentDetailSkeleton';

const CommentSkeleton = () => {
  return (
    <div className="flex flex-col">
      <div className="text-2xl font-semibold">코멘트</div>
      <div className="mb-14 mt-4 flex flex-col gap-14">
        {Array.from({ length: 3 }, (_, index) => (
          <CommentDetailSkeleton key={index} />
        ))}
      </div>
    </div>
  );
};

export default CommentSkeleton;
