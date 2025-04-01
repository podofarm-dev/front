'use client';

import UserCard from '@/app/_components/common/UserCard';
import ProblemList from '@/app/_components/problem/ProblemList';
import { useUserInfoQuery } from '@/app/_hooks/api/useUserInfoQuery';
import { useUserSolvedCountQuery } from '@/app/_hooks/api/useUserSolvedCountQuery';
import ProblemListContentSkeleton from '@/app/_components/problem/ProblemListContentSkeleton';

interface ProblemListContentProps {
  studyId: string;
}

const ProblemListContent = ({ studyId }: ProblemListContentProps) => {
  const { userInfoData } = useUserInfoQuery();
  const memberId = userInfoData?.memberId ?? '';
  const { userSolvedCountData } = useUserSolvedCountQuery(memberId);

  if (!userInfoData || !userSolvedCountData) {
    return <ProblemListContentSkeleton />;
  }

  return (
    <div className="flex flex-col gap-6 md:flex-row">
      <div className="order-2 flex w-full md:order-1 md:w-10/12">
        <ProblemList studyId={studyId} />
      </div>
      <div className="order-1 flex w-full md:order-2 md:w-2/12">
        <div>
          {userSolvedCountData && (
            <UserCard
              src={userSolvedCountData.imgUrl}
              name={userSolvedCountData.name}
              memberId={userSolvedCountData.memberId}
              title="해결한 문제"
              content={`${userSolvedCountData.solvedCount}개`}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default ProblemListContent;
