import { AxiosError } from 'axios';
import { useQuery } from '@tanstack/react-query';

import { StudyMemberGrassData } from '@/app/_types/study';
import getStudyStatistic from '@/app/_api/dashboard/getStudyStatistic';

export const useStudyStatisticQuery = (studyId: string, yearMonth: string) => {
  const { data: studyStatisticData } = useQuery<StudyMemberGrassData[], AxiosError>({
    queryKey: ['study', studyId, 'grass', yearMonth],
    queryFn: () => getStudyStatistic({ studyId, yearMonth }),
  });

  return { studyStatisticData };
};
