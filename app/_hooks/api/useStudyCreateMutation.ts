import { useMutation } from '@tanstack/react-query';

import postStudyCreate from '@/app/_api/study/postStudyCreate';
import { toast } from 'react-toastify';

export const useStudyCreateMutation = () => {
  const studyCreateMutation = useMutation({
    mutationFn: postStudyCreate,
    onError: (error) => {
      toast.warn(error.message);
    },
  });

  return studyCreateMutation;
};
