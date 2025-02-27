import { AxiosError } from 'axios';
import { useQuery } from '@tanstack/react-query';

import { DailySolved } from '@/app/_types/dashboard';
import getDailySolved from '@/app/_api/dashboard/getDailySolved';

export const useDailySolvedQuery = (studyId: string, date: string, memberId: string) => {
  const { data: dailySolvedData } = useQuery<DailySolved[], AxiosError>({
    queryKey: ['study', studyId, 'daily', memberId, date],
    queryFn: () => getDailySolved({ studyId, date, memberId }),
  });

  return { dailySolvedData };
};
