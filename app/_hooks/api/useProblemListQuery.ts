import { AxiosError } from 'axios';
import { useQuery } from '@tanstack/react-query';

import { ProblemListType } from '@/app/_types/problem';
import getProblemList, { GetProblemListParams } from '@/app/_api/problem/getProblemList';

export const useProblemListQuery = (params: GetProblemListParams) => {
  const { studyId, ...queryParams } = params;

  const { data: problemListData } = useQuery<ProblemListType, AxiosError>({
    queryKey: ['study', studyId, 'problemList', queryParams],
    queryFn: () => getProblemList(params),
    enabled: !!studyId,
  });

  return { problemListData };
};
