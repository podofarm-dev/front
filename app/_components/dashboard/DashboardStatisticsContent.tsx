'use client';

import { memberStatisticData } from '@/app/_types/study';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import SquareStack from '@/app/_components/common/SquareStack';
import ProfileIcon from '@/app/_components/common/ProfileIcon';

interface DashboardStatisticsContentProps {
  memberStatisticData: memberStatisticData[];
}

const DashboardStatisticsContent = ({ memberStatisticData }: DashboardStatisticsContentProps) => {
  if (memberStatisticData.length === 0) {
    return (
      <p className="text-center text-secondary-foreground">
        해당 월에는 스터디가 존재하지 않았습니다 ㅠ
      </p>
    );
  }

  return (
    <div className="relative flex flex-col gap-2 overflow-x-auto py-4">
      {memberStatisticData.map((item, indexItem) => (
        <div
          key={item.memberDetail?.id}
          className="relative flex min-w-fit flex-row items-center gap-10"
        >
          <ProfileIcon
            id={item.memberDetail?.id}
            name={item.memberDetail?.name}
            imgUrl={item.memberDetail?.imgUrl}
          />
          <div className="relative flex w-full flex-row gap-1">
            {item.grass.map((stack) => {
              return indexItem === 0 ? (
                <div className="relative flex flex-col items-center">
                  {stack.date % 7 === 1 && (
                    <p className="absolute -top-7 text-xs text-secondary-foreground">
                      {Math.ceil(stack.date / 7)}
                    </p>
                  )}
                  <SquareStack
                    value={stack.value}
                    date={stack.date}
                    memberId={item.memberDetail?.id}
                    className="cursor-pointer"
                  />
                </div>
              ) : (
                <SquareStack
                  value={stack.value}
                  date={stack.date}
                  className="cursor-pointer"
                  memberId={item.memberDetail?.id}
                />
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
};

export default DashboardStatisticsContent;
