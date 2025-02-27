'use client';

import { memberSolvedData } from '@/app/_types/study';
import ProfileIcon from '@/app/_components/common/ProfileIcon';
import DashboardBar from '@/app/_components/dashboard/DashboardBar';

interface DashboardSolvedContentProps {
  memberSolvedData: memberSolvedData[];
}

const DashboardSolvedContent = ({ memberSolvedData }: DashboardSolvedContentProps) => {
  if (memberSolvedData.length === 0) {
    return (
      <p className="text-center text-secondary-foreground">
        해당 월에는 스터디가 존재하지 않았습니다 ㅠ
      </p>
    );
  }

  const maxSolved = Math.max(1, memberSolvedData[0]?.solved || 1);

  return (
    <div className="relative flex flex-col gap-2 overflow-x-auto py-4">
      {memberSolvedData.map((item) => (
        <div
          key={item.memberDetail?.id}
          className="relative flex min-w-fit flex-row items-center gap-10"
        >
          <ProfileIcon
            id={item.memberDetail?.id}
            name={item.memberDetail?.name}
            imgUrl={item.memberDetail?.imgUrl}
          />
          <DashboardBar solved={item.solved} maxSolved={maxSolved} />
        </div>
      ))}
    </div>
  );
};

export default DashboardSolvedContent;
