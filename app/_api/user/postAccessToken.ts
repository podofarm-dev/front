import { axiosInstance } from '@/app/_api/axiosInstance';
import { END_POINTS } from '@/app/_constants/api';
import { TokenData } from '@/app/_types/token';
import { TokenRequestBody } from '@/app/_types/user';

export interface GetAccessTokenParams {
  memberData: TokenRequestBody;
}

const postAccessToken = async ({ memberData }: GetAccessTokenParams) => {
  const { data } = await axiosInstance.post<TokenData>(END_POINTS.TOKEN_INFO, memberData, {
    useAuth: false,
  });

  return data;
};

export default postAccessToken;
