import { axiosInstance } from '@/app/_api/axiosInstance';
import { END_POINTS } from '@/app/_constants/api';
import { TokenData } from '@/app/_types/token';
import { TokenRequestBody } from '@/app/_types/user';

export interface GetAccessTokenParams {
  memberData: TokenRequestBody;
}

const postLogout = async () => {
  const { data } = await axiosInstance.post(END_POINTS.LOGOUT);

  return data;
};

export default postLogout;
