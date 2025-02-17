import { axiosInstance } from '@/app/_api/axiosInstance';
import { END_POINTS } from '@/app/_constants/api';
import { StudyStatisticData } from '@/app/_types/study';

export interface GetStudyStatisticParams {
  studyId: string;
  yearMonth: string;
}

const getStudyStatistic = async ({ studyId, yearMonth }: GetStudyStatisticParams) => {
  const { data } = await axiosInstance.get<StudyStatisticData>(
    END_POINTS.GRASS_STATISTIC(studyId, yearMonth),
  );

  return data.data;
};

export default getStudyStatistic;
