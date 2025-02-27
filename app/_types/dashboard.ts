export interface RecentLogList {
  data: RecentLog[];
}

export interface RecentLog {
  memberId: string;
  memberName: string;
  problemId: number;
  problemTitle: string;
  solvedBefore: string;
}

export interface SolvedStatisticList {
  data: SolvedStatistic[];
}

export interface SolvedStatistic {
  memberId: string;
  solved: number;
}

export interface DailySolvedList {
  data: DailySolved[];
}

export interface DailySolved {
  id: number;
  title: string;
  level: number;
  type?: string;
}
