import { toast } from 'react-toastify';
import { useMutation, useQueryClient } from '@tanstack/react-query';

import { patchProfileUpload } from '@/app/_api/user/patchProfileUpload';

export const useProfileUploadMutation = () => {
  const queryClient = useQueryClient();

  const profileUploadMutation = useMutation({
    mutationFn: patchProfileUpload,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['user'] });
      toast.success('프로필 사진이 변경되었습니다');
    },
    onError: (error) => {
      toast.warn(error.message);
    },
  });

  return profileUploadMutation;
};
