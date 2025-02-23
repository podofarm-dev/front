'use client';

import { useDashboardTabStore } from '@/app/_store/useDashboardTab';
import DashboardStatistics from '@/app/_components/dashboard/DashboardStatistics';
import DashboardSolved from '@/app/_components/dashboard/DashboardSolved';
import DashboardCumulative from '@/app/_components/dashboard/DashboardCumulative';
import { StudyMemberListDetail } from '@/app/_types/study';

interface DashboardTabDeciderProps {
  studyId: string;
  memberDetails: StudyMemberListDetail[];
}

const DashboardTabDecider = ({ studyId, memberDetails }: DashboardTabDeciderProps) => {
  const { tab } = useDashboardTabStore();

  if (tab === 'solved') {
    return <DashboardSolved studyId={studyId} memberDetails={memberDetails} />;
  }

  if (tab === 'cumulative') {
    return <DashboardCumulative studyId={studyId} memberDetails={memberDetails} />;
  }

  return <DashboardStatistics studyId={studyId} memberDetails={memberDetails} />;
};

export default DashboardTabDecider;
