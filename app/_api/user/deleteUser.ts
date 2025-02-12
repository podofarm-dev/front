import { axiosInstance } from '@/app/_api/axiosInstance';
import { END_POINTS } from '@/app/_constants/api';

interface DeleteUserParams {
  memberId: string;
}

export const deleteUser = ({ memberId }: DeleteUserParams) => {
  return axiosInstance.delete(END_POINTS.DELETE_USER(memberId));
};
