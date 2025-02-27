import { toast } from 'react-toastify';
import { useMutation, useQueryClient } from '@tanstack/react-query';

import { deleteComment } from '@/app/_api/comment/deleteComment';

export const useDeleteCommentMutation = () => {
  const queryClient = useQueryClient();

  const deleteCommentMutation = useMutation({
    mutationFn: deleteComment,
    onSuccess: (_, { codeId }) => {
      queryClient.invalidateQueries({ queryKey: ['code', codeId, 'commentList'] });
      toast.success('댓글이 삭제되었습니다!');
    },
    onError: (error) => {
      console.error(error);
      toast.warn('댓글 삭제에 실패하였습니다 ㅠ');
    },
  });

  return deleteCommentMutation;
};
