import { axiosInstance } from '@/app/_api/axiosInstance';
import { END_POINTS } from '@/app/_constants/api';
import { CommentRequestBody, CommentType } from '@/app/_types/comment';

export interface PostCommentParams {
  codeId: string;
  commentId: string;
  commentData: CommentRequestBody;
}

const patchComment = async ({ codeId, commentId, commentData }: PostCommentParams) => {
  return await axiosInstance.patch<CommentType>(
    END_POINTS.COMMENT_DETAIL(codeId, commentId),
    commentData,
  );
};

export default patchComment;
