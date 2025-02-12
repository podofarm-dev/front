import { UserData, UsernameRequestBody } from '@/app/_types/user';
import { axiosInstance } from '@/app/_api/axiosInstance';
import { END_POINTS } from '@/app/_constants/api';

export interface PatchUsernameParams {
  data: UsernameRequestBody;
}

const patchUsername = async ({ data }: PatchUsernameParams) => {
  return await axiosInstance.patch<UserData>(END_POINTS.USER_INFO, data);
};

export default patchUsername;
