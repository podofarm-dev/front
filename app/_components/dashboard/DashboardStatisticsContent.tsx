'use client';

import { memberStatisticData } from '@/app/_types/study';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import SquareStack from '@/app/_components/common/SquareStack';

interface DashboardStatisticsContentProps {
  memberStatisticData: memberStatisticData[];
}

const DashboardStatisticsContent = ({ memberStatisticData }: DashboardStatisticsContentProps) => {
  return (
    <div className="relative flex flex-col gap-2 overflow-x-auto py-4">
      {memberStatisticData.map((item, indexItem) => (
        <div className="relative flex min-w-fit flex-row items-center gap-10">
          <Avatar>
            <AvatarImage src={item.memberDetail?.imgUrl} />
            <AvatarFallback>{item.memberDetail?.name}</AvatarFallback>
          </Avatar>
          <div className="relative flex w-full flex-row gap-1">
            {item.grass.map((stack) => {
              return indexItem === 0 ? (
                <div className="relative flex flex-col items-center">
                  {stack.date % 7 === 1 && (
                    <p className="absolute -top-7 text-xs text-secondary-foreground">
                      {Math.ceil(stack.date / 7)}
                    </p>
                  )}
                  <SquareStack value={stack.value} />
                </div>
              ) : (
                <SquareStack value={stack.value} />
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
};

export default DashboardStatisticsContent;
