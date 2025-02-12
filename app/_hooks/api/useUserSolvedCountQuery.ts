import { AxiosError } from 'axios';
import { useQuery } from '@tanstack/react-query';

import { UserSolvedData } from '@/app/_types/user';
import getUserSolvedCount from '@/app/_api/user/getUserSolvedCount';

export const useUserSolvedCountQuery = (memberId: string) => {
  const { data: userSolvedCountData } = useQuery<UserSolvedData, AxiosError>({
    queryKey: ['user', memberId, 'count'],
    queryFn: () => getUserSolvedCount(memberId),
  });

  return { userSolvedCountData };
};
