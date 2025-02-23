import { AxiosError } from 'axios';
import { useQuery } from '@tanstack/react-query';

import { SolvedSummary } from '@/app/_types/solved';
import getSolvedSummary from '@/app/_api/solved/getSolvedSummary';

export const useSolvedSummaryQuery = (memberId: string, problemId: string) => {
  const { data: solvedSummaryData } = useQuery<SolvedSummary[], AxiosError>({
    queryKey: ['member', memberId, 'summary', problemId],
    queryFn: () => getSolvedSummary({ memberId, problemId }),
  });

  return { solvedSummaryData };
};
