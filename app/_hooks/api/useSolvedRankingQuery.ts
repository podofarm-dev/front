import { AxiosError } from 'axios';
import { useQuery } from '@tanstack/react-query';

import getSolvedRanking from '@/app/_api/solved/getSolvedRanking';
import { SolvedRankingData } from '@/app/_types/solved';

export const useSolvedRankingQuery = (studyId: string, memberId: string) => {
  const { data: solvedRankingData } = useQuery<SolvedRankingData, AxiosError>({
    queryKey: ['solved', studyId, 'ranking', memberId],
    queryFn: () => getSolvedRanking({ studyId, memberId }),
  });

  return { solvedRankingData };
};
