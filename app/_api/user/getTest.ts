import { axiosInstance } from '@/app/_api/axiosInstance';
import { END_POINTS } from '@/app/_constants/api';
import { TokenData } from '@/app/_types/token';
import { TokenRequestBody } from '@/app/_types/user';

export interface GetAccessTokenParams {
  memberData: TokenRequestBody;
}

const getTest = async () => {
  const { data } = await axiosInstance.get(END_POINTS.TEST);

  return data;
};

export default getTest;
