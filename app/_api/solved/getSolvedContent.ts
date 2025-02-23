import { axiosInstance } from '@/app/_api/axiosInstance';
import { END_POINTS } from '@/app/_constants/api';
import { SolvedContent } from '@/app/_types/solved';

export interface GetSolvedContentParams {
  problemId: string;
}

const getSolvedContent = async ({ problemId }: GetSolvedContentParams) => {
  const { data } = await axiosInstance.get<SolvedContent>(
    END_POINTS.SOLVED_PROBLEM_CONTENT(problemId),
  );

  return data;
};

export default getSolvedContent;
