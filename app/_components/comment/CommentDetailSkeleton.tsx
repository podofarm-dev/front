import { Skeleton } from '@/components/ui/skeleton';

const CommentDetailSkeleton = () => {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-row items-center gap-4">
        <Skeleton className="h-10 w-10 rounded-full" />
        <Skeleton className="h-6 w-16" />
        <Skeleton className="h-6 w-32" />
      </div>
      <Skeleton className="ml-14 h-10 w-11/12" />
    </div>
  );
};

export default CommentDetailSkeleton;
