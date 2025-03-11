import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'react-toastify';

import patchUsername from '@/app/_api/user/patchUsername';

export const useUsernameMutation = () => {
  const queryClient = useQueryClient();

  const usernameMutation = useMutation({
    mutationFn: patchUsername,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['user'] });
      toast.success('닉네임이 변경되었습니다');
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  return usernameMutation;
};
