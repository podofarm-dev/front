import { useMutation } from '@tanstack/react-query';
import { toast } from 'react-toastify';

import postStudyEnter from '@/app/_api/study/postStudyEnter';

export const useStudyEnterMutation = () => {
  const studyEnterMutation = useMutation({
    mutationFn: postStudyEnter,
    onError: (error) => {
      toast.warn(error.message);
    },
  });

  return studyEnterMutation;
};
