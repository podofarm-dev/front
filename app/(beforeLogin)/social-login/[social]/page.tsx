'use client';

import { useEffect, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import Cookies from 'js-cookie';

import sessionStore from '@/app/_store/useSession';
import postAccessToken from '@/app/_api/user/postAccessToken';
import getUserInfo from '@/app/_api/user/getUserInfo';
import { PATH } from '@/app/_constants/path';
import { HTTPError } from '@/app/_api/HTTPError';
import Loader from '@/app/_components/common/Loader';
import { ACCESS_TOKEN_KEY } from '@/app/_constants/api';

const SocialLoginPage = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const memberId = searchParams.get('memberId');

  // 로그인 처리 함수
  const handleSocialLogin = async (memberId: string) => {
    try {
      // 1. 액세스 토큰 발급 요청
      const { accessToken, memberId: userId } = await postAccessToken({
        memberData: { memberId },
      });

      if (!accessToken) {
        throw new HTTPError(401, '인증 토큰을 발급받지 못했습니다.');
      }

      // 2. 토큰 저장
      // sessionStore.setState({ access_token: accessToken, memberId: userId });

      // 쿠키에도 저장 (인터셉터에서 사용)
      const authData = {
        state: {
          access_token: accessToken,
          memberId: userId,
        },
      };
      Cookies.set(ACCESS_TOKEN_KEY, JSON.stringify(authData));

      // 3. 사용자 정보 가져오기
      const userInfo = await getUserInfo();

      if (!userInfo) {
        throw new HTTPError(404, '사용자 정보를 가져오지 못했습니다.');
      }

      // 4. 적절한 페이지로 리다이렉트
      const studyId = userInfo.studyId || '';
      return studyId ? router.replace(PATH.STUDY_DASHBOARD(studyId)) : router.push(PATH.DASHBOARD);
    } catch (error) {
      // 에러 처리
      console.error('로그인 중 오류가 발생했습니다:', error);
      if (error instanceof HTTPError) {
        setError(`${error.message} (${error.statusCode})`);
      } else {
        setError('로그인 처리 중 오류가 발생했습니다.');
      }
      // 에러 발생 시 홈으로 리다이렉트
      setTimeout(() => router.push(PATH.ROOT), 3000);
    } finally {
      setIsLoading(false);
    }
  };

  // 로그인 처리 실행
  useEffect(() => {
    if (!memberId) {
      setError('로그인 정보가 올바르지 않습니다.');
      setTimeout(() => router.push(PATH.ROOT), 2000);
      setIsLoading(false);
      return;
    }

    handleSocialLogin(memberId);
  }, [memberId, router]);

  // 에러 UI
  if (error) {
    return (
      <div className="flex h-screen w-full flex-col items-center justify-center">
        <div className="mb-4 text-xl font-semibold text-red-500">오류 발생</div>
        <p className="mb-4 text-center">{error}</p>
        <p className="text-sm text-gray-500">메인 페이지로 이동합니다...</p>
      </div>
    );
  }

  // 로딩 UI
  return (
    <div className="flex h-screen w-full flex-col items-center justify-center">
      {isLoading && (
        <>
          <Loader size={30} />
          <p className="mt-4 text-center text-lg">로그인 처리 중입니다...</p>
        </>
      )}
    </div>
  );
};

export default SocialLoginPage;
