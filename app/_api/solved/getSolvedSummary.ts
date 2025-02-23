import { axiosInstance } from '@/app/_api/axiosInstance';
import { END_POINTS } from '@/app/_constants/api';
import { SolvedSummary } from '@/app/_types/solved';

export interface GetSolvedContentParams {
  memberId: string;
  problemId: string;
}

const getSolvedSummary = async ({ memberId, problemId }: GetSolvedContentParams) => {
  const { data } = await axiosInstance.get<SolvedSummary[]>(
    END_POINTS.SOLVED_PROBLEM_SUMMARY_CORRECT(memberId, problemId),
  );

  return data;
};

export default getSolvedSummary;
