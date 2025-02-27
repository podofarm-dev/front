import { AxiosError } from 'axios';
import { InfiniteData, useInfiniteQuery, useQuery } from '@tanstack/react-query';

import getSolvedList, { GetSolvedListParams } from '@/app/_api/solved/getSolvedList';
import { SolvedListData } from '@/app/_types/solved';

type QueryKeyType = ['member', string, 'solvedList', Omit<GetSolvedListParams, 'memberId'>];

export const useSolvedListQuery = (params: GetSolvedListParams) => {
  const { memberId, ...queryParams } = params;

  const {
    data: solvedListData,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    status,
    error,
  } = useInfiniteQuery<
    SolvedListData,
    AxiosError,
    InfiniteData<SolvedListData>,
    QueryKeyType,
    number
  >({
    queryKey: ['member', memberId, 'solvedList', queryParams],
    queryFn: ({ pageParam }) => getSolvedList({ ...params, page: pageParam }),
    initialPageParam: 0,
    getNextPageParam: (lastPage) => {
      const { currentPage, totalPages } = lastPage.pageInfo;
      return currentPage < totalPages - 1 ? currentPage + 1 : undefined;
    },
    enabled: !!memberId,
  });

  const allSolvedListData = solvedListData?.pages.flatMap((page) => page.problemList) ?? [];

  const pageInfo = solvedListData?.pages[solvedListData.pages.length - 1]?.pageInfo;

  return {
    allSolvedListData,
    pageInfo,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    status,
    error,
  };
};
