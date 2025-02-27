import { toast } from 'react-toastify';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import patchCode from '@/app/_api/solved/patchCode';

export const useUpdateCodeMutation = () => {
  const queryClient = useQueryClient();

  const updateCodeMutation = useMutation({
    mutationFn: patchCode,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['member'] });
      toast.success('코드가 수정되었습니다!');
    },
    onError: (error) => {
      toast(error.message);
      toast.warn('코드 수정에 실패하였습니다 ㅠ');
    },
  });

  return updateCodeMutation;
};
