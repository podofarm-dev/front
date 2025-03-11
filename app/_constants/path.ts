import { AXIOS_BASE_URL } from '@/app/_constants/api';

export const PATH = {
  ROOT: '/',
  DASHBOARD: '/dashboard',
  BAD_GATEWAY: '/bad-gateway',
  LOGIN: `${AXIOS_BASE_URL}/dev-login`,
  STUDY_SOLVED: (studyId: string, memberId?: string) =>
    `/study/${studyId}/solved?memberId=${memberId}`,
  STUDY_SOLVED_DETAIL: (studyId: string, problemId: number, memberId: string) =>
    `/study/${studyId}/solved/${problemId}/member/${memberId}`,
  STUDY_DASHBOARD: (studyId: string) => `/study/${studyId}/dashboard`,
  STUDY_PROBLEM_LIST: (studyId: string) => `/study/${studyId}/problem-list`,
  SETTING: (studyId: string) => `/study/${studyId}/setting`,
} as const;

export const EXTENSION_PATH =
  'https://chromewebstore.google.com/detail/%ED%8F%AC%EB%8F%84%ED%8C%9Cpodofarm/bcbabakaolnokikhllajhgchlgeiihld?hl=ko';
