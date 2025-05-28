import { ACCESS_TOKEN_KEY } from '@/app/_constants/api';
import { PATH } from '@/app/_constants/path';

/**
 * 토큰 관리를 위한 유틸리티 서비스
 */
export const tokenService = {
  /**
   * 로컬 스토리지에서 액세스 토큰을 가져옵니다.
   * @returns 액세스 토큰 또는 null
   */
  getAccessToken(): string | null {
    try {
      const authStorage = localStorage.getItem(ACCESS_TOKEN_KEY);
      if (!authStorage) return null;

      const { state } = JSON.parse(authStorage);
      return state?.access_token || null;
    } catch (error) {
      console.error('토큰 정보를 가져오는 중 오류 발생:', error);
      return null;
    }
  },

  /**
   * 액세스 토큰을 갱신합니다.
   * @param newAccessToken - 새로운 액세스 토큰
   * @returns 성공 여부
   */
  updateAccessToken(newAccessToken: string): boolean {
    try {
      const authStorage = localStorage.getItem(ACCESS_TOKEN_KEY);
      if (!authStorage) return false;

      const tokenData = JSON.parse(authStorage);
      tokenData.state.access_token = newAccessToken;
      localStorage.setItem(ACCESS_TOKEN_KEY, JSON.stringify(tokenData));
      return true;
    } catch (error) {
      console.error('토큰 업데이트 중 오류 발생:', error);
      return false;
    }
  },

  /**
   * 토큰을 제거하고 로그아웃 처리합니다.
   */
  removeToken(): void {
    localStorage.removeItem(ACCESS_TOKEN_KEY);
  },

  /**
   * 로그인 페이지로 리다이렉트합니다.
   * @param message - 에러 메시지
   */
  redirectToLogin(message: string): never {
    window.location.href = PATH.ROOT;
    throw new Error(message);
  },

  /**
   * 로그아웃 처리 후 로그인 페이지로 리다이렉트합니다.
   * @param message - 에러 메시지
   */
  logoutAndRedirect(message: string): never {
    this.removeToken();
    return this.redirectToLogin(message);
  },
};
