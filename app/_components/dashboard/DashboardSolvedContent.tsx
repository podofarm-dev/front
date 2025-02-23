'use client';

import { memberSolvedData } from '@/app/_types/study';
import ProfileIcon from '@/app/_components/common/ProfileIcon';

interface DashboardSolvedContentProps {
  memberSolvedData: memberSolvedData[];
}

const DashboardSolvedContent = ({ memberSolvedData }: DashboardSolvedContentProps) => {
  return (
    <div className="relative flex flex-col gap-2 overflow-x-auto py-4">
      {memberSolvedData.map((item, indexItem) => (
        <div
          key={item.memberDetail?.id}
          className="relative flex min-w-fit flex-row items-center gap-10"
        >
          <ProfileIcon
            id={item.memberDetail?.id}
            name={item.memberDetail?.name}
            imgUrl={item.memberDetail?.imgUrl}
          />
          <div
            className="h-6 bg-gradient-to-r from-purple-900 to-purple-300"
            style={{ width: `${(item.solved / 5) * 100}%` }}
          />
        </div>
      ))}
    </div>
  );
};

export default DashboardSolvedContent;
