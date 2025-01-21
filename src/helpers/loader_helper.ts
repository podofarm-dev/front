import { QueryClient, QueryKey, QueryFunction } from "@tanstack/react-query";

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 20, // refetch 대기시간
      gcTime: 1000 * 60 * 5, //데이터,캐시 보관 시간
      refetchOnWindowFocus: false, //웹창 이동 후 다시 포커스 되면 refetch 되는 설정
    },
  },
});

interface LoadQueryOptions<TData> {
  queryKey: QueryKey;
  queryFn: QueryFunction<TData>;
}

// loader에서 사용할 헬퍼 함수
export const loadQuery = async <TData>({
  queryKey,
  queryFn,
}: LoadQueryOptions<TData>): Promise<TData> => {
  // 이미 캐시된 데이터가 있는지 확인
  const cached = queryClient.getQueryData<TData>(queryKey);
  if (cached) {
    return cached;
  }

  // 캐시된 데이터가 없으면 새로 fetch
  return queryClient.fetchQuery<TData>({
    queryKey,
    queryFn,
  });
};
