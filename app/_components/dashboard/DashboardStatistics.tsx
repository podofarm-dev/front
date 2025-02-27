'use client';

import { StudyMemberListDetail } from '@/app/_types/study';
import { useStudyStatisticQuery } from '@/app/_hooks/api/useStudyStatisticQuery';
import { useYearMonthStore } from '@/app/_store/useYearMonthStore';
import { matchMemberStatistic } from '@/app/_utils/matchMemberStatistic';
import DashboardStatisticsContent from '@/app/_components/dashboard/DashboardStatisticsContent';
import Loader from '@/app/_components/common/Loader';

interface DashboardStatisticsProps {
  studyId: string;
  memberDetails: StudyMemberListDetail[];
}

const DashboardStatistics = ({ studyId, memberDetails }: DashboardStatisticsProps) => {
  const { currentYearMonth } = useYearMonthStore();
  const { studyStatisticData } = useStudyStatisticQuery(studyId, currentYearMonth);

  if (!studyStatisticData) {
    return <Loader />;
  }

  const memberStatisticData = matchMemberStatistic(studyStatisticData, memberDetails);

  return <DashboardStatisticsContent memberStatisticData={memberStatisticData} />;
};

export default DashboardStatistics;
