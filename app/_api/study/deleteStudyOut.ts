import { axiosInstance } from '@/app/_api/axiosInstance';
import { END_POINTS } from '@/app/_constants/api';

export const deleteStudyOut = (studyId: string) => {
  return axiosInstance.delete(END_POINTS.STUDY_OUT(studyId));
};
