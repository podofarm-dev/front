'use client';

import { useRouter, useSearchParams } from 'next/navigation';

import sessionStore from '@/app/_store/useSession';
import userStore from '@/app/_store/userStore';
import { useUserInfoQuery } from '@/app/_hooks/api/useUserInfoQuery';
import postAccessToken from '@/app/_api/user/postAccessToken';
import { useEffect } from 'react';
import { PATH } from '@/app/_constants/path';

const SocialLoginPage = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const member_Id = searchParams.get('memberId');

  useEffect(() => {
    const handleSocialLogin = async () => {
      if (!member_Id) {
        router.push('/'); // memberId가 없으면 홈으로 리다이렉트
        return;
      }

      try {
        // 백엔드로 API 요청 (쿠키 설정은 백엔드가 처리)
        const { accessToken, memberId } = await postAccessToken({
          memberData: { memberId: member_Id },
        });

        if (accessToken) {
          sessionStore.setState({ access_token: accessToken, memberId });
        }

        const token = accessToken || '';

        if (!token) {
          router.push('/');
        }

        router.push('/');

        // 3. 사용자 정보 가져오기
        // const { UserInfoData } = useUserInfoQuery(memberId);

        // if (!!UserInfoData?.userId) {
        //   userStore.setState({
        //     ...UserInfoData,
        //   });
        // }

        // // 4. Study ID 확인 및 리다이렉트
        // const studyId = UserInfoData?.studyId || '';
        // if (studyId) {
        //   console.log('스터디 있음');
        //   // router.push(`/study/${studyId}/dashboard`);
        // } else {
        //   console.log('스터디 없음');
        //   // router.push('/study/search');
        // }
        // router.push(PATH.DASHBOARD);
      } catch (error) {
        console.error('Error during login:', error);
        // router.push('/'); // 에러 발생 시 홈으로 리다이렉트
      }
    };

    handleSocialLogin();
  }, []);

  return <></>;
};

export default SocialLoginPage;
