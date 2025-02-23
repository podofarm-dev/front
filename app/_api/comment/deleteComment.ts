import { axiosInstance } from '@/app/_api/axiosInstance';
import { END_POINTS } from '@/app/_constants/api';

interface DeleteCommentParams {
  codeId: string;
  commentId: string;
}

export const deleteComment = ({ codeId, commentId }: DeleteCommentParams) => {
  return axiosInstance.delete(END_POINTS.COMMENT_DETAIL(codeId, commentId));
};
