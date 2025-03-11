import { toast } from 'react-toastify';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import patchComment from '@/app/_api/comment/patchComment';

export const useUpdateCommentMutation = () => {
  const queryClient = useQueryClient();

  const updateCommentMutation = useMutation({
    mutationFn: patchComment,
    onSuccess: (_, { codeId }) => {
      queryClient.invalidateQueries({ queryKey: ['code', codeId, 'commentList'] });
      toast.success('댓글이 수정되었습니다!');
    },
    onError: (error) => {
      toast(error.message);
      toast.error('댓글 수정에 실패하였습니다 ㅠ');
    },
  });

  return updateCommentMutation;
};
