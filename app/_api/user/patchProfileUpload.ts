import { UserData } from '@/app/_types/user';
import { axiosInstance } from '@/app/_api/axiosInstance';
import { END_POINTS } from '@/app/_constants/api';

export interface PatchProfileUploadParams {
  memberId: string;
  data: FormData;
}

export const patchProfileUpload = async ({ memberId, data }: PatchProfileUploadParams) => {
  return await axiosInstance.patch<UserData>(END_POINTS.PROFILE_UPLOAD(memberId), data, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
};
