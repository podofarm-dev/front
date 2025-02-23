import { axiosInstance } from '@/app/_api/axiosInstance';
import { END_POINTS } from '@/app/_constants/api';
import { StudyInfoData, StudyNameRequestBody } from '@/app/_types/study';

export interface patchStudyNameParams {
  studyId: string;
  studyNameData: StudyNameRequestBody;
}

const patchStudyName = async ({ studyId, studyNameData }: patchStudyNameParams) => {
  return await axiosInstance.patch<StudyInfoData>(END_POINTS.STUDY_NAME(studyId), studyNameData);
};

export default patchStudyName;
