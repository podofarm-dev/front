import { AxiosError } from 'axios';
import { useQuery } from '@tanstack/react-query';

import getSolvedStatistic from '@/app/_api/dashboard/getSolvedStatistic';
import { SolvedStatistic } from '@/app/_types/dashboard';

export const useSolvedStatisticQuery = (studyId: string, yearMonth: string) => {
  const { data: solvedStatisticData } = useQuery<SolvedStatistic[], AxiosError>({
    queryKey: ['study', studyId, 'solved', yearMonth],
    queryFn: () => getSolvedStatistic({ studyId, yearMonth }),
  });

  return { solvedStatisticData };
};
