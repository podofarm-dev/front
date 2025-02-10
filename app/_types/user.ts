export interface UserState {
  userId: string;
  studyId: string;
  userNo: number;
  userName: string;
  userGoogleId: string;
  userEmail: string;
  userParticipant: string;
  userLeader: 'Y' | 'N';
  userSolvedProblem: number;
  userTheme: string;
  userDate: string;
}

export interface TokenRequestBody {
  memberId: string;
}

export interface UserData {
  memberId: string;
  name: string;
  email: string;
  studyId: string;
  imgUrl: string;
}

export interface UserSolvedData {
  name: string;
  memberId: string;
  imgUrl: string;
  solvedCount: number;
}
