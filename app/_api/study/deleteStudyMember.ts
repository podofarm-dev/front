import { axiosInstance } from '@/app/_api/axiosInstance';
import { END_POINTS } from '@/app/_constants/api';

export interface DeleteStudyMemberProps {
  studyId: string;
  memberId: string;
}

export const deleteStudyMember = ({ studyId, memberId }: DeleteStudyMemberProps) => {
  return axiosInstance.delete(END_POINTS.STUDY_MEMBER_OUT(studyId, memberId));
};
