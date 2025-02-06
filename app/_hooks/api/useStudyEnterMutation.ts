import { useMutation } from '@tanstack/react-query';

import { toast } from '@/hooks/use-toast';
import postStudyEnter from '@/app/_api/user/postStudyEnter';

export const useStudyEnterMutation = () => {
  const studyEnterMutation = useMutation({
    mutationFn: postStudyEnter,
    onError: (error) => {
      toast({ variant: 'destructive', title: error.message });
    },
  });

  return studyEnterMutation;
};
