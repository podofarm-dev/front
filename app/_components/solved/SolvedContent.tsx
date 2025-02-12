'use client';

import UserCard from '@/app/_components/common/UserCard';
import { useUserInfoQuery } from '@/app/_hooks/api/useUserInfoQuery';
import { useUserSolvedCountQuery } from '@/app/_hooks/api/useUserSolvedCountQuery';
import SolvedList from '@/app/_components/solved/SolvedList';
import UserSolvedList from '@/app/_components/solved/UserSolvedList';

const SolvedContent = () => {
  const { userInfoData } = useUserInfoQuery();
  const { userSolvedCountData } = useUserSolvedCountQuery(String(userInfoData?.memberId));

  if (!userInfoData || !userSolvedCountData) {
    return null;
  }

  return (
    <div className="flex flex-row gap-6">
      <div className="flex w-10/12">
        <SolvedList />
      </div>
      <div className="flex w-2/12">
        <div className="flex flex-col gap-10">
          <UserCard
            src={userSolvedCountData?.imgUrl}
            name={userSolvedCountData?.name}
            memberId={userSolvedCountData?.memberId}
            solved={userSolvedCountData?.solvedCount}
          />
          <div className="flex flex-col">
            <UserSolvedList isUser={true} name="유저명" memberId="SDWDX" />
            <UserSolvedList name="유저명" memberId="SDWDX" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SolvedContent;
