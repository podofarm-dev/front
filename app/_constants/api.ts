/**
 * API 관련 상수 정의
 */

/** API 기본 URL */
export const AXIOS_BASE_URL = process.env.NEXT_PUBLIC_API_URL;

/** 액세스 토큰 로컬 스토리지 키 */
export const ACCESS_TOKEN_KEY = 'podofarm-auth';

/** 네트워크 설정 */
export const NETWORK = {
  /** 요청 타임아웃 (밀리초) */
  TIMEOUT: 10000,
};

/** HTTP 상태 코드 */
export const HTTP_STATUS_CODE = {
  /** 성공 */
  OK: 200,
  /** 생성됨 */
  CREATED: 201,
  /** 잘못된 요청 */
  BAD_REQUEST: 400,
  /** 인증 필요 */
  UNAUTHORIZED: 401,
  /** 접근 금지 */
  FORBIDDEN: 403,
  /** 찾을 수 없음 */
  NOT_FOUND: 404,
  /** 서버 내부 오류 */
  INTERNAL_SERVER_ERROR: 500,
};

export const END_POINTS = {
  TOKEN_INFO: '/member/tokens',
  TOKEN_REFRESH: '/member/tokens/refresh',
  LOGOUT: '/member/logout',
  STUDY_CREATE: '/study',
  STUDY_ENTER: '/study/enter-study',
  USER_INFO: '/member/info',
  UPDATE_CODE: '/member/edit-code',
  HEALTH: '/actuator/health',
  DELETE_USER: (memberId: string) => `/member/${memberId}/info`,
  PROFILE_UPLOAD: (memberId: string) => `/member/${memberId}/upload`,
  RECENT_LOGS: (studyId: string) => `/study/${studyId}/logs`,
  USER_SOLVED_COUNT: (memberId: string) => `/member/problem/${memberId}`,
  STUDY: (studyId: string) => `/study/${studyId}`,
  STUDY_NAME: (studyId: string) => `/study/${studyId}/name`,
  STUDY_LEADER: (studyId: string) => `/study/${studyId}/leader`,
  STUDY_MEMBER_LIST: (studyId: string) => `/study/${studyId}/member-list`,
  STUDY_OUT: (studyId: string) => `/study/${studyId}/members/me`,
  STUDY_MEMBER_OUT: (studyId: string, memberId: string) => `/study/${studyId}/members/${memberId}`,
  GRASS_STATISTIC: (studyId: string, yearMonth: string) =>
    `/study/${studyId}/grass?yearMonth=${yearMonth}`,
  SOLVED_STATISTIC: (studyId: string, yearMonth: string) =>
    `/study/${studyId}/solved-problems?yearMonth=${yearMonth}`,
  DAILY_GRASS: (studyId: string, date: string, memberId: string) =>
    `/study/${studyId}/daily-solved?date=${date}&member=${memberId}`,
  SOLVED_PROBLEM_CONTENT: (problemId: string) => `problem/${problemId}/static-info`,
  SOLVED_PROBLEM_SUMMARY_CORRECT: (memberId: string, problemId: string) =>
    `member/${memberId}/problem/${problemId}/solved-info`,
  SOLVED_RANKING: (studyId: string, memberId: string) => `/member/${studyId}/solved/${memberId}`,
  SOLVED_LIST: (memberId: string) => `/member/${memberId}/solved/problem`,
  PROBLEM_LIST: (studyId: string) => `/problem/${studyId}/problem-list`,
  COMMENT: (codeId: string) => `/code/${codeId}/comment`,
  COMMENT_DETAIL: (codeId: string, commentId: string) => `/code/${codeId}/comment/${commentId}`,
};

export const REFRESH_TOKEN_KEY = 'RefreshToken';
