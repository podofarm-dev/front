'use client';

import { useYearMonthStore } from '@/app/_store/useYearMonthStore';
import { useSolvedStatisticQuery } from '@/app/_hooks/api/useSolvedStatisticQuery';
import DashboardMonthNavigator from '@/app/_components/dashboard/DashboardMonthNavigator';
import { StudyMemberListDetail } from '@/app/_types/study';
import { matchMemberSolved } from '@/app/_utils/matchMemberSolved';
import Loader from '@/app/_components/common/Loader';
import DashboardSolvedContent from '@/app/_components/dashboard/DashboardSolvedContent';

interface DashboardSolvedProps {
  studyId: string;
  memberDetails: StudyMemberListDetail[];
}

const DashboardSolved = ({ studyId, memberDetails }: DashboardSolvedProps) => {
  const { currentYearMonth } = useYearMonthStore();
  const { solvedStatisticData } = useSolvedStatisticQuery(studyId, currentYearMonth);

  if (!solvedStatisticData) {
    return <Loader />;
  }

  const memberSolvedData = matchMemberSolved(solvedStatisticData, memberDetails);

  return (
    <div className="flex flex-col gap-4">
      <DashboardMonthNavigator />
      <DashboardSolvedContent memberSolvedData={memberSolvedData} />
    </div>
  );
};

export default DashboardSolved;
