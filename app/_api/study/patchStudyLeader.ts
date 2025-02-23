import { axiosInstance } from '@/app/_api/axiosInstance';
import { END_POINTS } from '@/app/_constants/api';
import { StudyInfoData, StudyLeaderRequestBody } from '@/app/_types/study';

export interface patchStudyLeaderParams {
  studyId: string;
  studyLeaderData: StudyLeaderRequestBody;
}

const patchStudyLeader = async ({ studyId, studyLeaderData }: patchStudyLeaderParams) => {
  return await axiosInstance.patch<StudyInfoData>(
    END_POINTS.STUDY_LEADER(studyId),
    studyLeaderData,
  );
};

export default patchStudyLeader;
