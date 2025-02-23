import { axiosInstance } from '@/app/_api/axiosInstance';
import { END_POINTS } from '@/app/_constants/api';

const getStudyInfo = async (studyId: string) => {
  const { data } = await axiosInstance.get(END_POINTS.STUDY(studyId));

  return data;
};

export default getStudyInfo;
