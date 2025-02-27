'use client';

import { useSolvedStatisticQuery } from '@/app/_hooks/api/useSolvedStatisticQuery';
import Loader from '@/app/_components/common/Loader';
import { StudyMemberListDetail } from '@/app/_types/study';
import { matchMemberSolved } from '@/app/_utils/matchMemberSolved';
import DashboardCumulativeContent from './DashboardCumulativeContent';

interface DashboardCumulativeProps {
  studyId: string;
  memberDetails: StudyMemberListDetail[];
}

const DashboardCumulative = ({ studyId, memberDetails }: DashboardCumulativeProps) => {
  const { solvedStatisticData } = useSolvedStatisticQuery(studyId, '');

  if (!solvedStatisticData) {
    return <Loader />;
  }

  const memberCumulativeData = matchMemberSolved(solvedStatisticData, memberDetails);

  return <DashboardCumulativeContent memberCumulativeData={memberCumulativeData} />;
};

export default DashboardCumulative;
