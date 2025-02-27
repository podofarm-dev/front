import { SOLVED_STATUS } from '@/app/_constants/status';

export type StatusType = keyof typeof SOLVED_STATUS;

export interface ProblemListType {
  problem: ProblemListData[];
  pageInfo: ProblemListQueryString;
}

export interface ProblemListData {
  problemNo: number;
  problemId: number;
  problemTitle: string;
  problemLevel: string;
  problemLink: string;
  status?: string;
  img: ProblemListImgData[];
}

export interface ProblemListImgData {
  imgUrl: string;
  name: string;
}

export interface ProblemListQueryString {
  totalElements: number;
  totalPages: number;
  currentPage: number;
  size: number;
}
