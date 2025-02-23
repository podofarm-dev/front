import { StudyMemberDetail } from '@/app/_types/study';

export const filterLeaderId = (memberDetails: StudyMemberDetail[]) => {
  const memberDetail = memberDetails.find((detail) => detail.isLeader === true);
  const leaderId = memberDetail?.id;

  return leaderId ?? '';
};
