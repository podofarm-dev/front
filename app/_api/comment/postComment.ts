import { axiosInstance } from '@/app/_api/axiosInstance';
import { END_POINTS } from '@/app/_constants/api';
import { CommentRequestBody, CommentType } from '@/app/_types/comment';

export interface PostCommentParams {
  codeId: string;
  commentData: CommentRequestBody;
}

const postComment = async ({ codeId, commentData }: PostCommentParams) => {
  const { data } = await axiosInstance.post<CommentType>(END_POINTS.COMMENT(codeId), commentData);

  return data;
};

export default postComment;
