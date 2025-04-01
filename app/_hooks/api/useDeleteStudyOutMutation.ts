import { toast } from 'react-toastify';
import { useRouter } from 'next/navigation';
import { useMutation } from '@tanstack/react-query';

import { PATH } from '@/app/_constants/path';
import { deleteStudyOut } from '@/app/_api/study/deleteStudyOut';

export const useDeleteStudyOutMutation = () => {
  const router = useRouter();

  const deleteStudyOutMutation = useMutation({
    mutationFn: deleteStudyOut,
    onSuccess: () => {
      toast.success('스터디방에 나가졌습니다!');
      router.push(PATH.ROOT);
    },
    onError: (error) => {
      console.error(error);
      toast.error('스터디 방을 나가는 도중 오류가 발생하였습니다!');
    },
  });

  return deleteStudyOutMutation;
};
