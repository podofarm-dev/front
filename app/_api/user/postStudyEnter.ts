import { axiosInstance } from '@/app/_api/axiosInstance';
import { END_POINTS } from '@/app/_constants/api';
import { StudyEnterBody, StudyEnterData } from '@/app/_types/study';

export interface PostStudyEnterParams {
  studyData: StudyEnterBody;
}

const postStudyEnter = async ({ studyData }: PostStudyEnterParams) => {
  const { data } = await axiosInstance.post<StudyEnterData>(END_POINTS.STUDY_ENTER, studyData);

  return data;
};

export default postStudyEnter;
