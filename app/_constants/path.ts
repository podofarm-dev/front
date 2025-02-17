import { AXIOS_BASE_URL } from '@/app/_constants/api';

export const PATH = {
  ROOT: '/',
  DASHBOARD: '/dashboard',
  LOGIN: `${AXIOS_BASE_URL}/dev-login`,
  STUDY_SOLVED: (studyId: string) => `/study/${studyId}/solved`,
  STUDY_SOLVED_DETAIL: (studyId: string, problemId: string) =>
    `/study/${studyId}/solved/${problemId}`,
  STUDY_DASHBOARD: (studyId: string) => `/study/${studyId}/dashboard`,
  STUDY_PROBLEM_LIST: (studyId: string) => `/study/${studyId}/problem-list`,
  SETTING: (studyId: string) => `/study/${studyId}/setting`,
} as const;

export const EXTENSION_PATH =
  'https://chromewebstore.google.com/detail/밀도mildo/kmleenknngfkjncchnbfenfamoighddf';
