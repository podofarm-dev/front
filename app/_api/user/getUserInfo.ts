import { axiosInstance } from '@/app/_api/axiosInstance';
import { END_POINTS } from '@/app/_constants/api';

const getUserInfo = async () => {
  const { data } = await axiosInstance.get(END_POINTS.USER_INFO);

  return data;
};

export default getUserInfo;
