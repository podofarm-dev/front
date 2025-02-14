'use client';

import dayjs from 'dayjs';

import { StudyMemberListDetail } from '@/app/_types/study';
import { useStudyStatisticQuery } from '@/app/_hooks/api/useStudyStatisticQuery';
import { useYearMonthStore } from '@/app/_store/useYearMonthStore';
import { matchMember } from '@/app/_utils/matchMember';
import DashboardMonthNavigator from '@/app/_components/dashboard/DashboardMonthNavigator';
import DashboardStatisticsContent from '@/app/_components/dashboard/DashboardStatisticsContent';

interface DashboardStatisticsProps {
  studyId: string;
  memberDetails: StudyMemberListDetail[];
}

const DashboardStatistics = ({ studyId, memberDetails }: DashboardStatisticsProps) => {
  const { currentYearMonth } = useYearMonthStore();
  const { studyStatisticData } = useStudyStatisticQuery(studyId, currentYearMonth);

  if (!studyStatisticData) {
    return null;
  }

  const memberStatisticData = matchMember(studyStatisticData, memberDetails);

  return (
    <div className="flex flex-col gap-4">
      <DashboardMonthNavigator />
      <DashboardStatisticsContent memberStatisticData={memberStatisticData} />
    </div>
  );
};

export default DashboardStatistics;
