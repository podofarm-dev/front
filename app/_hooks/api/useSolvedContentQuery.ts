import { AxiosError } from 'axios';
import { useQuery } from '@tanstack/react-query';

import { SolvedContent } from '@/app/_types/solved';
import getSolvedContent from '@/app/_api/solved/getSolvedContent';

export const useSolvedContentQuery = (problemId: string) => {
  const { data: solvedContentData } = useQuery<SolvedContent, AxiosError>({
    queryKey: ['solved-content', problemId],
    queryFn: () => getSolvedContent({ problemId }),
    enabled: !!problemId,
  });

  return { solvedContentData };
};
