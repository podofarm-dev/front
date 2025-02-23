import { StudyMemberListDetail } from '@/app/_types/study';
import { SolvedStatistic } from '@/app/_types/dashboard';

export const matchMemberSolved = (
  solvedStatisticData: SolvedStatistic[],
  memberDetails: StudyMemberListDetail[],
) => {
  const memberStudy = solvedStatisticData.map((item) => {
    const memberDetail = memberDetails.find((detail) => detail.id === item.memberId);
    const solved = item.solved;
    return { memberDetail, solved };
  });

  return memberStudy;
};
