import { axiosInstance } from '@/app/_api/axiosInstance';
import { END_POINTS } from '@/app/_constants/api';

const getUserInfo = async (memberId: string) => {
  const { data } = await axiosInstance.get(END_POINTS.USER_INFO(memberId));

  return data;
};

export default getUserInfo;
