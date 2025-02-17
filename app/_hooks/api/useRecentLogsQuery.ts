import { AxiosError } from 'axios';
import { useQuery } from '@tanstack/react-query';

import { RecentLog } from '@/app/_types/dashboard';
import getRecentLogs from '@/app/_api/dashboard/getRecentLogs';

export const useRecentLogsQuery = (studyId: string) => {
  const { data: recentLogsData } = useQuery<RecentLog[], AxiosError>({
    queryKey: ['study', studyId, 'logs'],
    queryFn: () => getRecentLogs(studyId),
  });

  return { recentLogsData };
};
