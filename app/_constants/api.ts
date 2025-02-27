export const AXIOS_BASE_URL = process.env.NEXT_PUBLIC_API_URL;

export const END_POINTS = {
  TOKEN_INFO: '/member/tokens',
  TOKEN_REFRESH: '/member/tokens/refresh',
  LOGOUT: '/member/logout',
  STUDY_CREATE: '/study',
  STUDY_ENTER: '/study/enter-study',
  USER_INFO: '/member/info',
  UPDATE_CODE: '/member/edit-code',
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

export const NETWORK = {
  RETRY_COUNT: 2,
  TIMEOUT: 10000,
} as const;

export const HTTP_STATUS_CODE = {
  SUCCESS: 200,
  CREATED: 201,
  NO_CONTENT: 204,
  RESET_CONTENT: 205,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  NOT_FOUND: 404,
  CONTENT_TOO_LARGE: 413,
  INTERNAL_SERVER_ERROR: 500,
} as const;

export const ACCESS_TOKEN_KEY = 'mildo-session';

export const REFRESH_TOKEN_KEY = 'RefreshToken';
