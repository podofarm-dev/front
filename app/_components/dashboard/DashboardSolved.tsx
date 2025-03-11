'use client';

import { useYearMonthStore } from '@/app/_store/useYearMonthStore';
import { useSolvedStatisticQuery } from '@/app/_hooks/api/useSolvedStatisticQuery';
import { StudyMemberListDetail } from '@/app/_types/study';
import { matchMemberSolved } from '@/app/_utils/matchMemberSolved';
import DashboardSolvedContent from '@/app/_components/dashboard/DashboardSolvedContent';
import DashboardTabDeciderSkeleton from '@/app/_components/dashboard/DashboardTabDeciderSkeleton';

interface DashboardSolvedProps {
  studyId: string;
  memberDetails: StudyMemberListDetail[];
}

const DashboardSolved = ({ studyId, memberDetails }: DashboardSolvedProps) => {
  const { currentYearMonth } = useYearMonthStore();
  const { solvedStatisticData } = useSolvedStatisticQuery(studyId, currentYearMonth);

  if (!solvedStatisticData) {
    return <DashboardTabDeciderSkeleton />;
  }

  const memberSolvedData = matchMemberSolved(solvedStatisticData, memberDetails);

  return <DashboardSolvedContent memberSolvedData={memberSolvedData} />;
};

export default DashboardSolved;
