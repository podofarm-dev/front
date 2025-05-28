import type { AxiosRequestConfig } from 'axios';

/**
 * 서버 응답의 에러 데이터 구조
 */
export interface ErrorResponseData {
  /** HTTP 상태 코드 */
  statusCode?: number;
  /** 에러 메시지 */
  message?: string;
  /** 서버에서 제공하는 에러 코드 */
  code?: number;
}

/**
 * Axios 요청 설정에 인증 옵션을 추가한 확장 인터페이스
 */
export interface CustomAxiosRequestConfig extends AxiosRequestConfig {
  /** 인증 토큰을 사용할지 여부 */
  useAuth?: boolean;
}
