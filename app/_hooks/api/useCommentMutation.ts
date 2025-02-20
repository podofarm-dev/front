import { toast } from 'react-toastify';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import postComment from '@/app/_api/comment/postComment';

export const useCommentMutation = () => {
  const queryClient = useQueryClient();

  const commentMutation = useMutation({
    mutationFn: postComment,
    onSuccess: (_, { codeId }) => {
      queryClient.invalidateQueries({ queryKey: ['code', codeId, 'commentList'] });
      toast.success('댓글이 작성되었습니다!');
    },
    onError: (error) => {
      console.error(error.message);
      toast.warn('댓글 작성에 실패하였습니다 ㅠ');
    },
  });

  return commentMutation;
};
