'use client';

import { useRouter } from 'next/navigation';
import { useLayoutEffect } from 'react';

import { ACCESS_TOKEN_KEY } from '@/app/_constants/api';
import { PATH } from '@/app/_constants/path';

const RedirectDashboard = () => {
  const router = useRouter();

  useLayoutEffect(() => {
    const authStorage = localStorage.getItem(ACCESS_TOKEN_KEY);

    if (!authStorage) {
      router.replace(PATH.ROOT);
      return;
    }

    const { state } = JSON.parse(authStorage);
    const accessToken = state?.access_token;

    if (!accessToken) {
      router.replace(PATH.ROOT);
      return;
    }

    router.replace(PATH.DASHBOARD);
  }, [router]);

  return null;
};

export default RedirectDashboard;
