'use client';

import { Suspense } from 'react';

import UserCard from '@/app/_components/common/UserCard';
import ProblemList from '@/app/_components/problem/ProblemList';
import { useUserInfoQuery } from '@/app/_hooks/api/useUserInfoQuery';
import { useUserSolvedCountQuery } from '@/app/_hooks/api/useUserSolvedCountQuery';
import Loader from '@/app/_components/common/Loader';

interface ProblemListContentProps {
  studyId: string;
}

const ProblemListContent = ({ studyId }: ProblemListContentProps) => {
  const { userInfoData } = useUserInfoQuery();
  const memberId = userInfoData?.memberId ?? '';
  const { userSolvedCountData } = useUserSolvedCountQuery(memberId);

  if (!userInfoData || !userSolvedCountData) {
    return null;
  }

  return (
    <div className="flex flex-row gap-6">
      <div className="flex w-10/12">
        <Suspense fallback={<Loader />}>
          <ProblemList studyId={studyId} />
        </Suspense>
      </div>
      <div className="flex w-2/12">
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
