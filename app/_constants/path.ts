import { AXIOS_BASE_URL } from '@/app/_constants/api';

export const PATH = {
  ROOT: '/',
  DASHBOARD: '/dashboard',
  LOGIN: `${AXIOS_BASE_URL}/dev-login`,
  STUDY_SOLVED: (studyId: string) => `/${studyId}/solved`,
  STUDY_SOLVED_DETAIL: (studyId: string, problemId: string) => `/${studyId}/solved/${problemId}`,
  STUDY_DASHBOARD: (studyId: string) => `/${studyId}/dashboard`,
  STUDY_PROBLEM_LIST: (studyId: string) => `/${studyId}/problem-list`,
  SETTING: (studyId: string) => `/${studyId}/setting`,
} as const;
