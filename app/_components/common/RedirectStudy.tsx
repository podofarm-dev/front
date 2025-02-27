'use client';

import { useLayoutEffect } from 'react';
import { useRouter } from 'next/navigation';

import { PATH } from '@/app/_constants/path';
import { useUserInfoQuery } from '@/app/_hooks/api/useUserInfoQuery';

const RedirectStudy = () => {
  const router = useRouter();
  const { userInfoData } = useUserInfoQuery();

  useLayoutEffect(() => {
    if (userInfoData && userInfoData.studyId) {
      router.replace(PATH.STUDY_DASHBOARD(userInfoData.studyId));
    }
  }, [userInfoData, router]);

  return null;
};

export default RedirectStudy;
