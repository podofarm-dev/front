import { SOLVED_STATUS } from '@/app/_constants/status';

export type StatusType = keyof typeof SOLVED_STATUS;

export interface SolvedDetailData {
  studyId: string;
  memberId: string;
  name: string;
  solvedProblem: number;
  imgUrl: string;
  rank: number;
}

export interface SolvedData {
  problemNo: string;
  problemTitle: string;
  problemLevel: string;
  problemType: string;
  codeSolvedDate: string;
  codeTime: string;
}

export interface SolvedList {
  problemList: SolvedData[];
}
