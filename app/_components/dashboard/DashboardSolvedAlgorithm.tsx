'use client';

import { useYearMonthStore } from '@/app/_store/useYearMonthStore';
import formatDateToArray from '@/app/_utils/formatDateToArray';
import DashboardDailyActivity from '@/app/_components/dashboard/DashboardDailyActivity';
import { useUserStore } from '@/app/_store/useUserStore';
import { useDailySolvedQuery } from '@/app/_hooks/api/useDailySolvedQuery';
import { StudyMemberListDetail } from '@/app/_types/study';

interface DashboardSolvedAlgorithmProps {
  studyId: string;
  memberDetails: StudyMemberListDetail[];
}

const DashboardSolvedAlgorithm = ({ studyId, memberDetails }: DashboardSolvedAlgorithmProps) => {
  const { memberId } = useUserStore();
  const { currentYearMonthDay } = useYearMonthStore();
  const { dailySolvedData } = useDailySolvedQuery(studyId, currentYearMonthDay, memberId);
  const [monthDay, year] = formatDateToArray(currentYearMonthDay);

  return (
    <div className="flex flex-col">
      <div className="flex flex-row items-center gap-2">
        <div className="whitespace-nowrap">
          {monthDay}, <span className="text-secondary-foreground">{year}</span>
        </div>
        <hr className="w-full border-bolder" />
      </div>
      <div className="relative flex flex-col gap-9 py-8 pl-11 pr-6">
        {dailySolvedData?.length !== 0 ? (
          dailySolvedData?.map((item) => (
            <DashboardDailyActivity
              title={item.title}
              level={item.level}
              type={item.type}
              memberDetails={memberDetails}
            />
          ))
        ) : (
          <div className="text-center text-secondary-foreground">No activities</div>
        )}
      </div>
    </div>
  );
};

export default DashboardSolvedAlgorithm;
