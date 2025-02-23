import { StudyMemberListDetail } from '@/app/_types/study';

export const filterMember = (memberDetails: StudyMemberListDetail[], memberId: string) => {
  const memberDetail = memberDetails.find((detail) => detail.id === memberId);
  return memberDetail;
};
