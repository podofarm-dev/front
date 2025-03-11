import { toast } from 'react-toastify';
import { useRouter } from 'next/navigation';
import { useMutation } from '@tanstack/react-query';

import { PATH } from '@/app/_constants/path';
import { deleteStudyRoom } from '@/app/_api/study/deleteStudyRoom';

export const useDeleteStudyRoomMutation = () => {
  const router = useRouter();

  const deleteStudyRoomMutation = useMutation({
    mutationFn: deleteStudyRoom,
    onSuccess: () => {
      toast.success('스터디가 삭제되었습니다!');
      router.replace(PATH.ROOT);
    },
    onError: (error) => {
      console.error(error);
      toast.error('스터디 리더가 아니거나 스터디가 삭제되지 않았습니다!');
    },
  });

  return deleteStudyRoomMutation;
};
