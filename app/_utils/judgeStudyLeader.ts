import { StudyMemberDetail } from '@/app/_types/study';

export const judgeStudyLeader = (memberDetails: StudyMemberDetail[], memberId: string) => {
  return memberDetails.find((item) => item.id === memberId)?.isLeader ?? false;
};
