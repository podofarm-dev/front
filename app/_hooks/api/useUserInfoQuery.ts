import { AxiosError } from 'axios';
import { useSuspenseQuery } from '@tanstack/react-query';

import getUserInfo from '@/app/_api/user/getUserInfo';
import { UserState } from '@/app/_types/user';

export const useUserInfoQuery = (memberId: string) => {
  const { data: UserInfoData } = useSuspenseQuery<UserState, AxiosError>({
    queryKey: ['user', memberId],
    queryFn: () => getUserInfo(memberId),
  });

  return { UserInfoData };
};
