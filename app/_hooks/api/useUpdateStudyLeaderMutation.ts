import { toast } from 'react-toastify';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import patchStudyLeader from '@/app/_api/study/patchStudyLeader';

export const useUpdateStudyLeaderMutation = () => {
  const queryClient = useQueryClient();

  const updateStudyLeaderMutation = useMutation({
    mutationFn: patchStudyLeader,
    onSuccess: (_, { studyId }) => {
      queryClient.invalidateQueries({ queryKey: ['study', studyId] });
      queryClient.invalidateQueries({ queryKey: ['study-info', studyId] });
      toast.success('스터디 리더가 변경되었습니다!');
    },
    onError: (error) => {
      toast(error.message);
      toast.warn('스터디 리더 변경에 실패하였습니다 ㅠ');
    },
  });

  return updateStudyLeaderMutation;
};
