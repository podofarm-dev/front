/**
 * HTTP 응답 에러를 처리하기 위한 커스텀 에러 클래스
 * @extends Error
 */
export class HTTPError extends Error {
  /** HTTP 상태 코드 */
  statusCode: number;

  /** 서버에서 제공하는 에러 코드 (선택적) */
  code?: number;

  /**
   * HTTP 에러 생성자
   * @param statusCode - HTTP 상태 코드
   * @param message - 에러 메시지
   * @param code - 서버에서 제공하는 에러 코드 (선택적)
   */
  constructor(statusCode: number, message?: string, code?: number) {
    super(message);

    this.name = 'HTTPError';
    this.statusCode = statusCode;
    this.code = code;

    Object.setPrototypeOf(this, HTTPError.prototype);
  }
}
