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
