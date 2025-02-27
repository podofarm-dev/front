import { axiosInstance } from '@/app/_api/axiosInstance';
import { END_POINTS } from '@/app/_constants/api';
import { StudyCreateBody, StudyCreateData } from '@/app/_types/study';

export interface PostStudyCreateParams {
  studyData: StudyCreateBody;
}

const postStudyCreate = async ({ studyData }: PostStudyCreateParams) => {
  const { data } = await axiosInstance.post<StudyCreateData>(END_POINTS.STUDY_CREATE, studyData);

  return data;
};

export default postStudyCreate;
