import { useMutation, useQueryClient } from '@tanstack/react-query';

import { toast } from '@/hooks/use-toast';
import { patchProfileUpload } from '@/app/_api/user/patchProfileUpload';

export const useProfileUploadMutation = () => {
  const queryClient = useQueryClient();

  const profileUploadMutation = useMutation({
    mutationFn: patchProfileUpload,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['user'] });
    },
    onError: (error) => {
      toast({ variant: 'destructive', title: error.message });
    },
  });

  return profileUploadMutation;
};
