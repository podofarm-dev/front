import { toast } from 'react-toastify';
import { useRouter } from 'next/navigation';
import { useMutation, useQueryClient } from '@tanstack/react-query';

import { deleteUser } from '@/app/_api/user/deleteUser';
import { ACCESS_TOKEN_KEY } from '@/app/_constants/api';
import { PATH } from '@/app/_constants/path';

export const useDeleteUserMutation = () => {
  const router = useRouter();
  const queryClient = useQueryClient();

  const deleteUserMutation = useMutation({
    mutationFn: deleteUser,
    onSuccess: () => {
      toast.success('계정이 삭제되었습니다!');
      localStorage.removeItem(ACCESS_TOKEN_KEY);
      queryClient.clear();
      router.push(PATH.ROOT);
    },
    onError: (error) => {
      console.error(error);
      toast.error('스터디 리더이거나 해당 ID의 회원이 존재하지 않습니다!');
    },
  });

  return deleteUserMutation;
};
