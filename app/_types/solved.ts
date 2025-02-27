import { ProblemListQueryString } from '@/app/_types/problem';

export interface SolvedRankingData {
  studyId: string;
  memberId: string;
  name: string;
  solvedProblem: number;
  imgUrl: string;
  rank: number;
}

export interface SolvedListData {
  problemList: SolvedData[];
  pageInfo: ProblemListQueryString;
}

export interface SolvedData {
  problemNo: number;
  problemId: number;
  problemTitle: string;
  problemLevel: string;
  problemType?: string;
  codeSolvedDate: string;
  codeTime?: string;
}

export interface SolvedSummary {
  codeNo: number;
  codeSource: string;
  codeSolvedDate: string;
  codeStatus: boolean;
  codeTime: string;
  codePerformance: string;
  codeAccuracy: string;
  problemType: string;
}

export interface SolvedContent {
  readme: string;
  title: string;
}

export interface CodeRequestBody {
  memberId: string;
  problemId: string;
  code: string;
}
