import { useRouter } from 'next/navigation';
import { useMutation, useQueryClient } from '@tanstack/react-query';

import postLogout from '@/app/_api/user/postLogout';
import { ACCESS_TOKEN_KEY } from '@/app/_constants/api';
import { PATH } from '@/app/_constants/path';

export const useLogOutMutation = () => {
  const router = useRouter();
  const queryClient = useQueryClient();

  const logOutMutation = useMutation({
    mutationFn: postLogout,
    onSuccess: () => {
      localStorage.removeItem(ACCESS_TOKEN_KEY);
      queryClient.clear();
      router.push(PATH.ROOT);
    },
    onError: () => {
      console.error('로그아웃에 실패했습니다. 잠시 후 다시 시도해 주세요.');
    },
  });

  return logOutMutation;
};
