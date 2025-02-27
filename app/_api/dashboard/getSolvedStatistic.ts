import { axiosInstance } from '@/app/_api/axiosInstance';
import { END_POINTS } from '@/app/_constants/api';
import { SolvedStatisticList } from '@/app/_types/dashboard';

export interface GetSolvedStatisticParams {
  studyId: string;
  yearMonth: string;
}

const getSolvedStatistic = async ({ studyId, yearMonth }: GetSolvedStatisticParams) => {
  const { data } = await axiosInstance.get<SolvedStatisticList>(
    END_POINTS.SOLVED_STATISTIC(studyId, yearMonth),
  );

  return data.data;
};

export default getSolvedStatistic;
