import { toast } from 'react-toastify';
import { useMutation, useQueryClient } from '@tanstack/react-query';

import { deleteStudyMember } from '@/app/_api/study/deleteStudyMember';

export const useDeleteStudyMemberMutation = () => {
  const queryClient = useQueryClient();

  const deleteStudyMemberMutation = useMutation({
    mutationFn: deleteStudyMember,
    onSuccess: (_, { studyId }) => {
      queryClient.invalidateQueries({ queryKey: ['study', studyId] });
      queryClient.invalidateQueries({ queryKey: ['study-list', studyId] });
      queryClient.invalidateQueries({ queryKey: ['study-info', studyId] });
      toast.success('스터디원을 퇴출하였습니다!');
    },
    onError: (error) => {
      console.error(error);
      toast.warn('스터디원을 퇴출시키는 도중 오류가 발생하였습니다!');
    },
  });

  return deleteStudyMemberMutation;
};
