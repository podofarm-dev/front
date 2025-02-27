import { axiosInstance } from '@/app/_api/axiosInstance';
import { END_POINTS } from '@/app/_constants/api';
import { UserData } from '@/app/_types/user';

const getUserInfo = async () => {
  const { data } = await axiosInstance.get<UserData>(END_POINTS.USER_INFO);

  return data;
};

export default getUserInfo;
