import axios from 'axios';

import { AXIOS_BASE_URL, NETWORK } from '@/app/_constants/api';
import { checkAndSetToken, handleAPIError, handleTokenError } from '@/app/_api/interceptors';

/**
 * 기본 설정이 적용된 Axios 인스턴스
 * - baseURL: API 기본 URL
 * - timeout: 요청 타임아웃 시간
 * - withCredentials: 쿠키 포함 여부
 * - useAuth: 인증 토큰 사용 여부 (기본값: true)
 */
export const axiosInstance = axios.create({
  baseURL: AXIOS_BASE_URL,
  timeout: NETWORK.TIMEOUT,
  withCredentials: true,
  useAuth: true,
});

// 요청 인터셉터: 토큰 확인 및 설정
axiosInstance.interceptors.request.use(checkAndSetToken, handleAPIError);

// 응답 인터셉터: 토큰 에러 처리 (401 등)
axiosInstance.interceptors.response.use((response) => response, handleTokenError);

// 응답 인터셉터: 일반 API 에러 처리 (404, 500 등)
axiosInstance.interceptors.response.use((response) => response, handleAPIError);
