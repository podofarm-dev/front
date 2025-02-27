import { axiosInstance } from '@/app/_api/axiosInstance';
import { END_POINTS } from '@/app/_constants/api';
import { SolvedRankingData } from '@/app/_types/solved';

export interface GetSolvedRankingParams {
  studyId: string;
  memberId: string;
}

const getSolvedRanking = async ({ studyId, memberId }: GetSolvedRankingParams) => {
  const { data } = await axiosInstance.get<SolvedRankingData>(
    END_POINTS.SOLVED_RANKING(studyId, memberId),
  );

  return data;
};

export default getSolvedRanking;
