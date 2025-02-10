'use client';

import { useRouter } from 'next/navigation';

import { PATH } from '@/app/_constants/path';
import { useUserInfoQuery } from '@/app/_hooks/api/useUserInfoQuery';

const RedirectStudy = () => {
  const router = useRouter();
  const { userInfoData } = useUserInfoQuery();

  if (!!userInfoData?.studyId) {
    router.replace(PATH.STUDY_DASHBOARD(userInfoData.studyId));
  }

  return null;
};

export default RedirectStudy;
