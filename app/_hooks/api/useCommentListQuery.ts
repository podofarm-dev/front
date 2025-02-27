import { AxiosError } from 'axios';
import { useQuery } from '@tanstack/react-query';

import { CommentType } from '@/app/_types/comment';
import getCommentList from '@/app/_api/comment/getCommentList';

export const useCommentListQuery = (codeId: string) => {
  const { data: commentListData } = useQuery<CommentType[], AxiosError>({
    queryKey: ['code', codeId, 'commentList'],
    queryFn: () => getCommentList(codeId),
  });

  return { commentListData };
};
