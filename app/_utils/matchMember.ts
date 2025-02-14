import { StudyMemberGrassData, StudyMemberListDetail } from '@/app/_types/study';

export const matchMember = (
  studyStatisticData: StudyMemberGrassData[],
  memberDetails: StudyMemberListDetail[],
) => {
  const memberStatistic = studyStatisticData.map((item) => {
    const memberDetail = memberDetails.find((detail) => detail.id === item.memberId);
    const grass = item.grass;
    return { memberDetail, grass };
  });

  return memberStatistic;
};
