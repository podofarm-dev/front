import { AxiosError } from 'axios';
import { useQuery } from '@tanstack/react-query';

import getSolvedList, { GetSolvedListParams } from '@/app/_api/solved/getSolvedList';
import { SolvedListData } from '@/app/_types/solved';

export const useSolvedListQuery = (params: GetSolvedListParams) => {
  const { memberId, ...queryParams } = params;

  const { data: solvedListData } = useQuery<SolvedListData, AxiosError>({
    queryKey: ['member', memberId, 'solvedList', queryParams],
    queryFn: () => getSolvedList(params),
    enabled: !!memberId,
  });

  return { solvedListData };
};
