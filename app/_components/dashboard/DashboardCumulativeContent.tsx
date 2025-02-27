'use client';

import { memberSolvedData } from '@/app/_types/study';
import ProfileIcon from '@/app/_components/common/ProfileIcon';
import DashboardBar from '@/app/_components/dashboard/DashboardBar';

interface DashboardSolvedContentProps {
  memberCumulativeData: memberSolvedData[];
}

const DashboardCumulativeContent = ({ memberCumulativeData }: DashboardSolvedContentProps) => {
  const maxSolved = Math.max(1, memberCumulativeData[0]?.solved || 1);

  return (
    <div className="relative flex flex-col gap-2 overflow-x-auto py-4">
      {memberCumulativeData.map((item) => (
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

export default DashboardCumulativeContent;
