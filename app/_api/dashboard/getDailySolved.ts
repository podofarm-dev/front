import { axiosInstance } from '@/app/_api/axiosInstance';
import { END_POINTS } from '@/app/_constants/api';
import { DailySolvedList } from '@/app/_types/dashboard';

export interface GetDailySolvedParams {
  studyId: string;
  date: string;
  memberId: string;
}

const getDailySolved = async ({ studyId, date, memberId }: GetDailySolvedParams) => {
  const { data } = await axiosInstance.get<DailySolvedList>(
    END_POINTS.DAILY_GRASS(studyId, date, memberId),
  );

  return data.data;
};

export default getDailySolved;
