import { StudyMemberListDetail } from '@/app/_types/study';

export const judgeStudyLeader = (memberDetails: StudyMemberListDetail[], memberId: string) => {
  return memberDetails.find((item) => item.id === memberId)?.isLeader;
};
