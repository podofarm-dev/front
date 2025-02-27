import { axiosInstance } from '@/app/_api/axiosInstance';
import { END_POINTS } from '@/app/_constants/api';
import { TokenData } from '@/app/_types/token';
import { TokenRequestBody } from '@/app/_types/user';

export interface PostLogoutParams {
  memberData: TokenRequestBody;
}

const postLogout = async ({ memberData }: PostLogoutParams) => {
  const { data } = await axiosInstance.post<string>(END_POINTS.LOGOUT, memberData);

  return data;
};

export default postLogout;
