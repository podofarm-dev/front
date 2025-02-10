import { useMutation } from '@tanstack/react-query';

import postStudyCreate from '@/app/_api/user/postStudyCreate';
import { toast } from '@/hooks/use-toast';

export const useStudyCreateMutation = () => {
  const studyCreateMutation = useMutation({
    mutationFn: postStudyCreate,
    onError: (error) => {
      toast({ variant: 'destructive', title: error.message });
    },
  });

  return studyCreateMutation;
};
