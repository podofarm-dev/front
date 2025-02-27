import { axiosInstance } from '@/app/_api/axiosInstance';
import { END_POINTS } from '@/app/_constants/api';
import { CodeRequestBody } from '@/app/_types/solved';

export interface PostCommentParams {
  codeData: CodeRequestBody;
}

const patchCode = async ({ codeData }: PostCommentParams) => {
  return await axiosInstance.patch(END_POINTS.UPDATE_CODE, codeData);
};

export default patchCode;
