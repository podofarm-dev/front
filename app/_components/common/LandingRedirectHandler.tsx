'use client';

import { useLayoutEffect } from 'react';
import { useRouter } from 'next/navigation';

import getHealth from '@/app/_api/landing/getHealth';
import { ACCESS_TOKEN_KEY } from '@/app/_constants/api';
import { PATH } from '@/app/_constants/path';

const LandingRedirectHandler = () => {
  const router = useRouter();

  useLayoutEffect(() => {
    const handleRedirects = async () => {
      // 1단계: 서버 상태 확인
      try {
        const { status } = await getHealth();
      } catch (error) {
        console.error('Health check failed:', error);
        // 서버 연결 실패 시 처리
        router.replace(PATH.BAD_GATEWAY); // 502 페이지 등
        return; // 이후 로직 실행 중지
      }

      // 2단계: 토큰 확인 및 대시보드 리다이렉트
      const authStorage = localStorage.getItem(ACCESS_TOKEN_KEY);

      if (!authStorage) return;

      const { state } = JSON.parse(authStorage);
      const accessToken = state?.access_token;

      if (!accessToken) return;

      router.replace(PATH.DASHBOARD);
    };

    handleRedirects();
  }, [router]);

  return null;
};

export default LandingRedirectHandler;
