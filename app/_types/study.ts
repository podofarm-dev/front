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

export interface StudyData {
  studyId: string;
  studyName: string;
  studyStart: string;
  studyEnd: string;
  memberCount: number;
  memberDetails: StudyMemberDetail[];
}

export interface StudyMemberDetail {
  id: string;
  name: string;
  googleId: string;
  solvedCount: number;
  isLeader: boolean;
}

export interface StudyMemberCount {
  memberCount: number;
}

export interface StudyDays {
  remainingDays: number;
  elapsedDays: number;
}

export interface StudyMemberData {
  studyId: string;
  studyName: string;
  lapsedDate: number;
  memberCount: number;
  memberDetails: StudyMemberListDetail[];
}

export interface StudyMemberListDetail extends StudyMemberDetail {
  imgUrl: string;
}

export interface StudyMemberDetail {
  id: string;
  name: string;
  isLeader: boolean;
}

export interface StudyStatisticData {
  data: StudyMemberGrassData[];
}

export interface StudyMemberGrassData {
  memberId: string;
  grass: MemberGrassData[];
}

export interface MemberGrassData {
  date: number;
  value: number;
}

export interface memberStatisticData {
  memberDetail?: StudyMemberListDetail;
  grass: MemberGrassData[];
}

export interface StudyInfoData {
  studyId: string;
  studyName: string;
  members: StudyMemberDetail[];
}

export interface StudyNameRequestBody {
  name: string;
}

export interface StudyLeaderRequestBody {
  leaderId: string;
}

export interface memberSolvedData {
  memberDetail?: StudyMemberListDetail;
  solved: number;
}
