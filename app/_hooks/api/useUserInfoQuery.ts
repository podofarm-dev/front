import { AxiosError } from 'axios';
import { useQuery, useSuspenseQuery } from '@tanstack/react-query';

import getUserInfo from '@/app/_api/user/getUserInfo';
import { UserData } from '@/app/_types/user';

export const useUserInfoQuery = () => {
  const { data: userInfoData } = useQuery<UserData, AxiosError>({
    queryKey: ['user'],
    queryFn: () => getUserInfo(),
  });

  return { userInfoData };
};
