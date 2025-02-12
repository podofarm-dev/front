'use client';

import UserCard from '@/app/_components/common/UserCard';
import ProblemList from '@/app/_components/problem/ProblemList';
import { useUserInfoQuery } from '@/app/_hooks/api/useUserInfoQuery';
import { useUserSolvedCountQuery } from '@/app/_hooks/api/useUserSolvedCountQuery';

const ProblemListContent = () => {
  const { userInfoData } = useUserInfoQuery();
  const { userSolvedCountData } = useUserSolvedCountQuery(String(userInfoData?.memberId));

  if (!userInfoData || !userSolvedCountData) {
    return null;
  }

  return (
    <div className="flex flex-row gap-6">
      <div className="flex w-10/12">
        <ProblemList />
      </div>
      <div className="flex w-2/12">
        <UserCard
          src={userSolvedCountData?.imgUrl}
          name={userSolvedCountData?.name}
          memberId={userSolvedCountData?.memberId}
          solved={userSolvedCountData?.solvedCount}
        />
      </div>
    </div>
  );
};

export default ProblemListContent;
