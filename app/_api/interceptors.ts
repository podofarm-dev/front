import type { AxiosError, InternalAxiosRequestConfig } from 'axios';

import { HTTP_STATUS_CODE } from '@/app/_constants/api';
import { HTTPError } from '@/app/_api/HTTPError';
import postNewToken from '@/app/_api/user/postNewToken';
import { axiosInstance } from '@/app/_api/axiosInstance';
import { ErrorResponseData } from '@/app/_api/types';
import { tokenService } from '@/app/_api/tokenService';

/**
 * Axios 요청 전에 토큰을 확인하고 설정하는 인터셉터 함수
 * @param config - Axios 요청 설정
 * @returns 수정된 설정 객체
 */
export const checkAndSetToken = (config: InternalAxiosRequestConfig) => {
  // useAuth가 false이거나, headers가 없거나, 이미 Authorization 헤더가 있으면 설정 건너뜀
  if (!config.useAuth || !config.headers || config.headers.Authorization) {
    return config;
  }

  try {
    // 쿠키에서 액세스 토큰 가져옴
    const accessToken = tokenService.getAccessToken();

    // 토큰이 없으면 로그인 페이지로 리다이렉트
    if (!accessToken) {
      tokenService.redirectToLogin('인증 정보가 없습니다.');
    }

    // 요청 헤더에 Bearer 토큰 추가
    config.headers.Authorization = `Bearer ${accessToken}`;
  } catch (error) {
    tokenService.redirectToLogin('인증 처리 중 오류가 발생했습니다.');
  }

  return config;
};

/**
 * 토큰 관련 에러를 처리하는 함수
 * @param error - Axios 에러 객체
 * @returns 새 토큰으로 재시도한 요청 또는 에러
 */
export const handleTokenError = async (error: AxiosError<ErrorResponseData>) => {
  const originalRequest = error.config;

  // 응답이나 원본 요청이 없으면 에러 발생
  if (!error.response || !originalRequest) {
    throw new Error('에러가 발생했습니다.');
  }

  const { data, status } = error.response;

  // 엑세스 토큰이 만료된 경우 (401 Unauthorized)
  if (status === HTTP_STATUS_CODE.UNAUTHORIZED) {
    // 재로그인이 필요한 경우
    if (
      typeof data === 'string' &&
      (data === '재 로그인 요청 바랍니다.' || data === 'Cookie is missing')
    ) {
      tokenService.logoutAndRedirect('재로그인이 필요합니다.');
    }

    try {
      // 새로운 토큰을 요청
      const newAccessToken = await postNewToken();

      // 새로운 토큰 저장
      if (!tokenService.updateAccessToken(newAccessToken.accessToken)) {
        tokenService.logoutAndRedirect('토큰 갱신 실패');
      }

      // 새 토큰으로 헤더 업데이트
      originalRequest.headers.Authorization = `Bearer ${newAccessToken.accessToken}`;

      // 원래 요청을 새 토큰으로 재시도
      return axiosInstance(originalRequest);
    } catch (tokenError) {
      console.error('토큰 갱신 중 에러 발생:', tokenError);
      tokenService.logoutAndRedirect('토큰 갱신에 실패했습니다.');
    }
  }

  // 그 외의 에러는 그대로 전파
  throw error;
};

/**
 * API 에러를 처리하는 함수
 * @param error - Axios 에러 객체
 * @returns 에러 처리 결과
 */
export const handleAPIError = (error: AxiosError<ErrorResponseData>) => {
  if (!error.response) {
    console.error('응답을 받지 못했습니다:', error);
    return Promise.reject(error); // 네트워크 문제는 그대로 반환
  }

  const { status, data } = error.response;

  // 404: 기본 값 반환
  if (status === HTTP_STATUS_CODE.NOT_FOUND) {
    console.warn('404 Not Found:', data.message);
    return { data: null }; // 기본 응답 구조를 반환
  }

  // 500번대 에러
  if (status >= HTTP_STATUS_CODE.INTERNAL_SERVER_ERROR) {
    alert('서버 에러가 발생했습니다. 잠시 후 다시 시도해주세요.');
    throw new HTTPError(status, data.message);
  }

  // 그 외 상태 코드
  throw new HTTPError(status, data.message, data.code);
};
