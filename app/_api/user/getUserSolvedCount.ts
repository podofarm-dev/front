import { axiosInstance } from '@/app/_api/axiosInstance';
import { END_POINTS } from '@/app/_constants/api';

const getUserSolvedCount = async (memberId: string) => {
  const { data } = await axiosInstance.get(END_POINTS.USER_SOLVED_COUNT(memberId));

  return data;
};

export default getUserSolvedCount;
