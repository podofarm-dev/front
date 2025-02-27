import { axiosInstance } from '@/app/_api/axiosInstance';
import { END_POINTS } from '@/app/_constants/api';
import { SolvedListData } from '@/app/_types/solved';

export interface GetSolvedListParams {
  memberId: string;
  page?: number;
  size?: number;
  title?: string;
}

const getSolvedList = async ({ memberId, page, size, title }: GetSolvedListParams) => {
  const queryParams = new URLSearchParams();

  if (page !== undefined) queryParams.append('page', String(page));
  if (size !== undefined) queryParams.append('size', String(size));
  if (title) queryParams.append('title', title);

  const queryString = queryParams.toString();
  const url = queryString
    ? `${END_POINTS.SOLVED_LIST(memberId)}?${queryString}`
    : END_POINTS.SOLVED_LIST(memberId);

  const { data } = await axiosInstance.get<SolvedListData>(url);

  return data;
};

export default getSolvedList;
