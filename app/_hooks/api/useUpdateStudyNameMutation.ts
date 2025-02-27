import { toast } from 'react-toastify';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import patchStudyName from '@/app/_api/study/patchStudyName';

export const useUpdateStudyNameMutation = () => {
  const queryClient = useQueryClient();

  const updateStudyNameMutation = useMutation({
    mutationFn: patchStudyName,
    onSuccess: (_, { studyId }) => {
      queryClient.invalidateQueries({ queryKey: ['study', studyId] });
      queryClient.invalidateQueries({ queryKey: ['study-info', studyId] });
      toast.success('스터디명이 수정되었습니다!');
    },
    onError: (error) => {
      toast(error.message);
      toast.warn('스터디명 수정에 실패하였습니다 ㅠ');
    },
  });

  return updateStudyNameMutation;
};
