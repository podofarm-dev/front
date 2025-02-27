'use client';

import { useDashboardTabStore } from '@/app/_store/useDashboardTab';
import DashboardStatistics from '@/app/_components/dashboard/DashboardStatistics';
import DashboardSolved from '@/app/_components/dashboard/DashboardSolved';
import DashboardCumulative from '@/app/_components/dashboard/DashboardCumulative';
import { StudyMemberListDetail } from '@/app/_types/study';
import DashboardMonthNavigator from '@/app/_components/dashboard/DashboardMonthNavigator';

interface DashboardTabDeciderProps {
  studyId: string;
  memberDetails: StudyMemberListDetail[];
}

const DashboardTabDecider = ({ studyId, memberDetails }: DashboardTabDeciderProps) => {
  const { tab } = useDashboardTabStore();

  const tabComponents = {
    solved: (
      <>
        <DashboardMonthNavigator />
        <DashboardSolved studyId={studyId} memberDetails={memberDetails} />
      </>
    ),
    cumulative: <DashboardCumulative studyId={studyId} memberDetails={memberDetails} />,
    statistics: (
      <>
        <DashboardMonthNavigator />
        <DashboardStatistics studyId={studyId} memberDetails={memberDetails} />
      </>
    ),
  };

  return <div className="flex flex-col gap-4">{tabComponents[tab]}</div>;
};

export default DashboardTabDecider;
