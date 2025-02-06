'use client';

import { useRouter } from 'next/navigation';
import { useLayoutEffect } from 'react';

import { ACCESS_TOKEN_KEY } from '@/app/_constants/api';
import { PATH } from '@/app/_constants/path';

const RedirectLogin = () => {
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
    }
  }, [router]);

  return null;
};

export default RedirectLogin;
