import { axiosInstance } from '@/app/_api/axiosInstance';
import { END_POINTS } from '@/app/_constants/api';
import { CommentList } from '@/app/_types/comment';

const getCommentList = async (codeId: string) => {
  const { data } = await axiosInstance.get<CommentList>(END_POINTS.COMMENT(codeId));

  return data.data;
};

export default getCommentList;
