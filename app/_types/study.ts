export interface StudyCreateData {
  code: string;
  name: string;
  startDate: string;
  endDate: string;
}

export interface StudyEnterData {
  message: string;
}

export interface StudyCreateBody {
  name: string;
  password: string;
}

export interface StudyEnterBody {
  code: string;
  password: string;
}

export interface StudyMemberDetail {
  id: string;
  name: string;
  googleId: string;
  solvedCount: number;
  isLeader: boolean;
}

export interface StudyData {
  studyId: string;
  studyName: string;
  studyStart: string;
  studyEnd: string;
  memberCount: number;
  memberDetails: StudyMemberDetail[];
}

export interface StudyMemberCount {
  memberCount: number;
}

export interface StudyDays {
  remainingDays: number;
  elapsedDays: number;
}
