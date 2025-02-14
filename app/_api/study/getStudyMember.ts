import { axiosInstance } from '@/app/_api/axiosInstance';
import { END_POINTS } from '@/app/_constants/api';

const getStudyMember = async (studyId: string) => {
  const { data } = await axiosInstance.get(END_POINTS.STUDY_MEMBER_LIST(studyId));

  return data;
};

export default getStudyMember;
