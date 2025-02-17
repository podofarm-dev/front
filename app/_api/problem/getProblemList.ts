import { axiosInstance } from '@/app/_api/axiosInstance';
import { END_POINTS } from '@/app/_constants/api';
import { ProblemListType } from '@/app/_types/problem';

export interface GetProblemListParams {
  studyId: string;
  page?: number;
  size?: number;
  title?: string;
  category?: string;
}

const getProblemList = async ({ studyId, page, size, title, category }: GetProblemListParams) => {
  const queryParams = new URLSearchParams();

  if (page !== undefined) queryParams.append('page', String(page));
  if (size !== undefined) queryParams.append('size', String(size));
  if (title) queryParams.append('title', title);
  if (category) queryParams.append('category', category);

  const queryString = queryParams.toString();
  const url = queryString
    ? `${END_POINTS.PROBLEM_LIST(studyId)}?${queryString}`
    : END_POINTS.PROBLEM_LIST(studyId);

  const { data } = await axiosInstance.get<ProblemListType>(url);

  return data;
};

export default getProblemList;
